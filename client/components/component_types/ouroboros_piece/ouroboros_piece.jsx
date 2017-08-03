import BackgroundLines from './background.jsx'
import Effects from './effects.jsx'
import Ouroboros from './ouroboros.jsx'
import '../../../styles/ouroboros_piece/ouroboros_piece.scss';
import '../../../styles/pieces.scss';
import * as media from '../../media';
import { PieceMetaComponent } from '../piece_meta';

const OuroborosPieceComponent = React.createClass({
	render(){
		const { color, ouroborosSize } = this.state;
		const { component, children } = this.props;

		return<div className="piece__container piece__container--ouroboros">
			<div className="piece__wrapper piece__wrapper--ouroboros clickable">
				<div className="piece__left">
					<div className="piece__content">
						<svg id="ouroboros"
							height={this.totalHeight()}
							width={this.totalWidth()}
							onClick={this.changeColor}>

							<BackgroundLines {...this.state}
								colorClass={color}
								outerClass={'outer'}
								innerClass={'inner'}
								middleClass={'middle'} />

							<Effects {...this.state}
								colorClass={color} />
							<Ouroboros {...this.state}
								colorClass={color}
								width={ouroborosSize}
								height={ouroborosSize}
								strokeClass={''}
								fillClass={''} />
				  	</svg>
				  </div>
				  <div className="piece__controls">
			  	{ children }
			  	</div>
		  	</div>
		  	<div className="piece__right">
		  		<PieceMetaComponent component={component} />
		  	</div>
		  </div>
		</div>
	},
	getInitialState() {
	    return {
		    width: 320,
		    height: 600,
		    paddingWidth: 115,
		    paddingHeight: 50,
		    ouroborosSize: 574,
		    color: 'purple' }
	},
	changeColor(){
		let color = this.state.color == 'green' ? 'purple' : 'green';
		return this.setState({ color })
	},
	totalHeight() {
		return this.state.height + this.state.paddingHeight;
	},
	totalWidth() {
		return this.state.width + this.state.paddingWidth;
	}
})

export { OuroborosPieceComponent }
