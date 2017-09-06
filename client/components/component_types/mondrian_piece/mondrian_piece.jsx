import Tree from 'basic-tree';
import { Color, VariedRatio, CssAnimationMaker } from '../utils';
import { Map, List, fromJS } from 'immutable';
import { xy, wh, cd, cell, defaults, defaultStructure } from './definitions'
import { Divisible } from './divisible';
import * as media from '../../media';
import '../../../styles/pieces.scss';
import { PieceMetaComponent } from '../piece_meta';

const HEIGHT = 600
const WIDTH = 300;

class MondrianPieceComponent extends React.Component {
  constructor(props){
    super(props);
    let state = {
      pixel: 15,
      offset: { x: -1, y: -1 },
      mutation: 25,
      counter: {x: 0, y: 0},
      color: [255, 255, 255, 1],
      structure: {
        config: {
          depth: false,
          branches: 2
        },
        data: [{
          value: {
            canDivide: true,
            coords: {x: 68, y:25},
            dimensions: {
              width: WIDTH,
              height: HEIGHT,
              paddingWidth: 135,
              paddingHeight: 50
            },
            color: 'rgba(255,255,255,1)',
          }
        }]
      }
    }
    state.structure = this.makeStructure( state )
    this.makeColor( state )
    this.state = state;
  }
  render(){
    const { structure, offset } = this.state;
    const { component, children } = this.props;
    const cells = structure.get('data').toJS();
    const root = structure.getIn(['data', 0, 'value']).toJS();
    return <div className="piece__container piece__container--mondrian">
      <div className="piece__wrapper piece__wrapper--mondrian">
        <div className="piece__left">
          <div className="piece__content">
            <Divisible divide={this.createChildren.bind(this)}
                        cells={cells}
                        root={root}
                        offset={offset} />
          </div>
        </div>
        <div className="piece__right">
          <PieceMetaComponent component={component} />
        </div>
      </div>
    </div>
  }
  makeStructure( state ){
    this.structure = new Tree( fromJS(state.structure) )
    return this.structure.state
  }
  makeColor( state ){
    this.color = new Color( state.color );
    return
  }
  createChildren(cell, quadrant){
    const { value, __l, __n } = cell;
    let quad = this.determineDirection( value.dimensions, quadrant )
    this.structure.goTo(__n, __l);
    // console.log('CLICKED CELL::',cell.get('__l'), cell.get('__n'))
    this.structure.node = this.structure.node.set('canDivide', false)
    if(quad.get('x') !== 0 || quad.get('y') !== 0 ){
      let cells = this.divideIntoCells( this.structure.node, quad );
      this.structure.children = cells;

      this.structure.childrenItems.forEach((c)=>{
        if(c && c.getIn(['value', 'animation'])){
          let animation = new CssAnimationMaker(
            'rect_' + c.get('__l') + '_' + c.get('__n'),
            c.getIn(['value','animation', 0]).toJS(),
            c.getIn(['value','animation', 1]).toJS()
          )
          animation.makeKeyframesRule(document.styleSheets)
        }
      })
    }

    this.structure.root;
    this.setState(({structure, counter })=> {
      let isX =  Math.abs(quad.x) > 0,
      counted = isX ? 'x' : 'y',
      zeroed = isX ? 'y' : 'x';

      counter[counted] = counter[counted] + 1;
      counter[zeroed] = 0;
      return { counter, structure: this.structure.state }
    })
  }
  determineDirection( dimensions, quadrant ){
    let quad = Map(quadrant);

    quad = this.constrictTransform( dimensions, quad );
    quad = this.limitRepetition( quad );

    return quad
  }
  limitRepetition( quad ){
    let q = quad,
        isX =  Math.abs(q.get('x')) > 0,
        direction = isX ? 'x' : 'y',
        opposite = isX ? 'y' : 'x';
    if( this.state.counter.direction > 2){
      q = q.set(direction, quad.get(opposite))
      q = q.set(opposite, quad.get(direction))
    }
    return q
  }
  constrictTransform( dimensions, quad ){
    //returns original mutations if the preferred dimension can shrink//
    //returns the same direction, opposite dimension to transform if it can//
    //if not returns no transform//
    let q = quad,
        w = dimensions.width,
        h = dimensions.height,
        min = this.state.pixel,

        isX = Math.abs( q.get('x') ) > 0,
        first = isX ? w : h,
        second = isX ? h : w;

    if(first > min){
      return q;
    }
    if(second > min){
      q = q.merge( {'x': quad.get('y'),
                    'y': quad.get('x')} );
      return q
    }
    return xy;
  }
  divideIntoCells(cell, direction){
    let returned = List(),
    directionX = direction.get('x'),
    directionY = direction.get('y');
    if(directionX == 0 && directionY == 0){
      return
    }
    if (directionX !== 0) {
      // for X variation
      returned = this.divideCell( cell, 'x', 'width', directionX );
    }
    if (directionY !== 0) {
      // for Y variation
      returned = this.divideCell( cell, 'y', 'height', directionY );
    }

    returned = this.addAnimCoords( returned, cell )
    returned = this.addColors( returned, cell )
    return returned;
  }
  addColors( cells, parent ){
    cells = cells.map( (item, index) =>{
      if( index == cells.size-1 ){
        return item.set( 'color', parent.get('color') );
      }else if (Math.random() > 0.33) {
        return item.set( 'color', this.color.rybRandom().rgba() )
      } else {
        return item
      }
    })
    return cells
  }
  divideCell(cell, coord, dimension, order){
    const { mutation, pixel } = this.state;
    let variation = undefined,
        reduction = undefined,
        parent = cell,
        child = undefined,
        returned = List(),
        till;

    variation = new VariedRatio({
      attempts: this.structure.branches,
      total: parent.getIn(['dimensions', dimension]),
      variation: mutation,
      round: pixel
    });
    variation.determineAll();
    variation.chosen.forEach(( choice, index )=>{
      reduction = variation.chosen.takeUntil((value, i)=>{
        return i >= index
      })
      reduction = reduction.reduce(function (a, b) {
        return a + b;
      }, 0);
      child = this.makeCell( parent );
      child = child.updateIn(['coords', coord], (c)=> c += reduction || 0 )
      child = child.mergeIn(['dimensions', dimension], choice )
      //if positive direction (top, left) add items in in reverse
      //if positive direction, animation should come from right to left
      //if positive direction, animation should come from bottom to top

      //if negative direction (bottom, right) add items in in reverse
      //if negative direction, animation should come from left to right
      //if negative direction, animation should come from top to bottom

      //animated element should always be last
      if (order < 0) {
        returned = returned.push(child);
      } else {
        returned = returned.unshift(child);
      }
    })
    return returned;
  }
  addAnimCoords( cells, parent ){
    let cell = cells.last(),
    returned = cells.pop();
    cell = cell.set('animation', fromJS([
        { x: parent.getIn(['coords', 'x'])+'px;',
          y: parent.getIn(['coords', 'y'])+'px;',
          width: parent.getIn(['dimensions', 'width'])+'px;',
          height: parent.getIn(['dimensions', 'height'])+'px;'
        },
        { x: cell.getIn(['coords', 'x'])+'px;',
          y: cell.getIn(['coords', 'y'])+'px;',
          width: cell.getIn(['dimensions', 'width'])+'px;',
          height: cell.getIn(['dimensions', 'height'])+'px;'
        }
      ]))

    return returned.push(cell);
  }
  makeCell( cell ) {
    const { offset } = this.state;
    let returned = cell,
        modX = offset.x,
        modY = offset.y;
        returned = returned.delete('animation'),
        returned = returned.set('canDivide', true),
        returned = returned.updateIn(['coords','x'], (x)=> x += modX ),
        returned = returned.updateIn(['coords', 'y'], (y)=> y += modX);
        return returned
  }
}

export { MondrianPieceComponent }
