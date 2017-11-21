import * as media_component_types from '../media';
import { ComponentCreator } from '../component';
import '../../styles/pieces.scss';
import { capitalize } from 'lodash';

class PieceMetaComponent extends React.Component {
	constructor(props){
		super(props);
	}
	classNamesFor(part){
		const { classNames } = this.props;

		return `piece__${part} ${classNames && classNames[part] || ''} `
	}
	render() {
		const { component, isActive } = this.props;
		const { slug } = component;
		console.error(component)
		return <div className={`piece__right ${component.collections.length > 0 && 'visible'}`}>
			<div className={`piece__meta--${slug} ${this.classNamesFor('meta')}` }>

			  	{ component.links && <div className={`piece__collection--wrapper piece__links--wrapper clickable ${this.classNamesFor('links')}`} key={'links'}>
			  		<div className={`${this.classNamesFor('collection')}`} >
				  		{ component.links.map((m, i)=>{
				  			return <ComponentCreator slug={m.slug} key={i}/>
				  		})}
			  		</div>
			  	</div> }
			  	{ component.description && <div className={`piece__collection--wrapper piece__description--wrapper clickable ${this.classNamesFor('description')}`} key={'description'}>
			  		<div className={`${this.classNamesFor('collection')}`} >
				  		{ component.description.map((m, i)=>{
				  			let MediaOfType = media_component_types[capitalize(m.type)];
				  			return <MediaOfType slug={m.slug} key={i}/>
				  		})}
			  		</div>
			  	</div> }
		  </div>
	  </div>
	}
}

export { PieceMetaComponent }
