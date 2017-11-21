import * as media_types from '../media';
import '../../styles/contact.scss';

const Article = media_types.Article;
const Link = media_types.Link;

class ContactComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = { active: {} };
	}
	render() {
		const { component, classNames, isActive } = this.props;
		const { slug } = component;
		const { active } = this.state;
		return <div className={`contact__wrapper contact__wrapper--${slug} ${classNames && classNames.wrapper || ''}` }>
				<div className={`contact__links contact__links--${slug} ${classNames && classNames.links || ''}`}>
					{ component.links && component.links.map((l, i) => <Link slug={l.slug} key={i}/> )}
				</div>
		  </div>
	}
}

export { ContactComponent }
