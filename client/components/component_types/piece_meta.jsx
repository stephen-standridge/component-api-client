import * as media_component_types from '../media';
import { ComponentCreator } from '../component';
import '../../styles/pieces.scss';
import { capitalize } from 'lodash';

class PieceMetaComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = { active: {} };
	}
	toggleActive(part){
		this.setState(({ active })=>{
			return Object.assign({ active }, { active: { [part]: !active[part] }})
		})
	}
	classNamesFor(part){
		const { classNames } = this.props;
		const { active } = this.state;

		return `piece__${part} ${classNames && classNames[part] || ''} ${active[part] ? 'active' : ''}`
	}
	render() {
		const { component, isActive } = this.props;
		const { slug } = component;
		console.warn(component)
		return <div className={`piece__meta--${slug} ${this.classNamesFor('meta')}` }>
			  { component.collections.map((collection, i)=> {
			  	let classNames = `piece__collection--wrapper piece__${collection}--wrapper clickable ${this.classNamesFor(collection)}`;
			  	return collection && <div className={classNames} key={i} onClick={this.toggleActive.bind(this, collection)}>
			  		<div className={`${this.classNamesFor('collection')}`} >
				  		{ component[collection] && component[collection].map((m, i)=>{

				  			let MediaOfType = m.type == 'component' ? ComponentCreator : media_component_types[capitalize(m.type)];
				  			if (!MediaOfType){
				  				console.error(`could not find component type ${m.type} to render for ${m.slug}.`)
				  				return
				  			}
				  			return <MediaOfType slug={m.slug} key={i} isActive={isActive}
				  		/>
				  		})}
			  		</div>
			  	</div>
			  }) }
		  </div>
	}
}

export { PieceMetaComponent }
