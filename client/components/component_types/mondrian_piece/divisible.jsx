// import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getXY } from '../utils'
class Divisible extends React.Component {
  // mixins: [PureRenderMixin],
  render() {
    const { root, cells, offset, className } = this.props;
    const { dimensions, coords, color } = root;
    return <svg height={dimensions.height + dimensions.paddingHeight}
                width={dimensions.width + dimensions.paddingWidth}
                className={ className } >
      <g>
            <rect
              height={ dimensions.height }
              width={ dimensions.width }
              x={ coords.x + offset.x }
              y={ coords.y + offset.y }
              style={ { stroke: 'black', strokeWidth: 3 } }
            ></rect>
            { cells.map( function( cell ) {
              return cell && <rect className={'rectangle'}
                            onClick={this.onClick.bind(this, cell)}
                            style={this.generateStyles(cell)}
                            fill={cell.value.color}
                            stroke={"black"}
                            strokeWidth={"4"}
                            key={cell.__l + '' + cell.__n} />
            }, this )}

            </g>
    </svg>
  }
  generateStyles( cell ) {
    const { value, __l, __n } = cell;
    const { dimensions, coords } = value;
    const { height, width } = dimensions;
    const { x, y } = coords;
    let returned = {
        animationDuration: '0.4s',
        animationName: 'rect_' + __l + '_' + __n,
        animationFillMode: 'forwards',
        position: 'relative',
        height,
        width,
        x,
        y,
        zIndex: __l
    };
    return returned
  }
  setAnimationDirection( topRight, bottomLeft ){
    if (!topRight && !bottomLeft) {
      return { x: 1, y: 0 }
    }
    if (topRight && !bottomLeft) {
      return { x: 0, y: 1 }
    }
    if (topRight && bottomLeft) {
      return { x: -1, y: 0 }
    }
    if (!topRight && bottomLeft) {
      return { x: 0, y: -1 }
    }
  }
  mapToRect(coords, rect) {
    let box = rect.getBoundingClientRect(),
        width = box.width,
        height = box.height,
        xyRatio = width / height,
        yxRatio = height / width,
        topRight = undefined,
        bottomLeft = undefined,
        isInTopRight = undefined,
        isInBottomLeft = undefined;
    //splits the value across the xmin/ymin axis
    // with a slope of x+1, y+1
    topRight = coords.x / coords.y;
    isInTopRight = topRight > xyRatio;
    //splits the value across the xmax/ymin axis
    //with a slope of x - 1, y+1
    //compare against the y/x ratio
    bottomLeft = Math.abs(coords.x / (width / yxRatio) + coords.y / (height / yxRatio));
    isInBottomLeft = bottomLeft > yxRatio;

    return this.setAnimationDirection(isInTopRight,isInBottomLeft)
  }
  onClick( cell, event ) {
    const { value } = cell;
    if(value.canDivide){
      this.props.divide( cell, this.mapToRect( getXY(event), event.target ) )
    }
  }
}

export { Divisible }
