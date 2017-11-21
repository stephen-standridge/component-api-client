import BackgroundLines from './background.jsx'
import Effects from './effects.jsx'
import Ouroboros from './ouroboros.jsx'
import '../../../styles/ouroboros_piece/ouroboros_piece.scss';
import '../../../styles/pieces.scss';
import * as media from '../../media';
import { PieceMetaComponent } from '../piece_meta';

const OuroborosPieceComponent = React.createClass({
	render(){
		const { color, ouroborosScale, backgroundSize, backgroundScaleX, backgroundScaleY } = this.state;
		const { component, children, isActive } = this.props;

		return <div className="piece__container piece__container--ouroboros">
			<div className="piece__wrapper piece__wrapper--ouroboros">
				<div className="piece__left">
					<div className={`piece__content ${color}`}>
						<svg id="ouroboros"
							height={500}
							width={500}
							onClick={this.changeColor}
							viewBox={`0 0 ${this.totalWidth()} ${this.totalHeight()}`}>

							<BackgroundLines {...this.state}
								colorClass={color}
								outerClass={'outer'}
								innerClass={'inner'}
								middleClass={'middle'}
								width={600}
								height={600}
								scaleX={2.0}
								scaleY={2.0} />

							<Effects {...this.state}
								colorClass={color}
								width={backgroundSize}
								height={backgroundSize}/>
							<Ouroboros {...this.state}
								colorClass={color}
								scale={ouroborosScale}
								strokeClass={''}
								fillClass={''}
								width={700}
								height={700}/>
				  	</svg>
				  </div>
		  	</div>
	  		<PieceMetaComponent component={component} />
		  </div>
		</div>
	},
	getInitialState() {
	    return {
		    width: 768,
		    height: 768,
		    paddingWidth: 0,
		    paddingHeight: 0,
		    ouroborosScale: 768/420,
		    backgroundSize: 600,
		    backgroundScaleX: 768/320,
		    backgroundScaleY: 768/600,
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
