import * as media_types from '../media';
import { PieceMetaComponent } from './piece_meta';
import '../../styles/pieces.scss';

const Manifold = media_types.Manifold;

class ManifoldWrapperComponent extends React.Component {
	renderMedia(){
		const { component, isActive } = this.props;
		const { media } = component;
		return media && media.map( (m, i) => m.type == "program" && <Manifold key={i} slug={m.slug} isActive={isActive}/>)
	}
	render() {
		const { component, onPrev, onNext, classNames, isActive, children } = this.props;
		const { slug } = component;
		return <div className={`piece__container piece__container--${slug} ${ classNames }`}>
			<div className={`piece__wrapper piece__wrapper--${slug} clickable`} >
				<div className="piece__left">
					<div className="piece__content">
						{this.renderMedia()}
					</div>
					<div className="piece__controls">
						{children}
					</div>
				</div>
				<div className="piece__right">
					<PieceMetaComponent component={component} />
				</div>
			</div>
    </div>
	}
}

export { ManifoldWrapperComponent }

