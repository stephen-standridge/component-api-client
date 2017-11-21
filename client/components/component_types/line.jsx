import { ComponentCreator } from '../component';
import makeClassNames from 'classnames'

class LineComponent extends React.Component {
	render(){
		const { slug, component, componentState, classNames, setComponentState } = this.props;
		const selectedIndex = component.states.findIndex((c)=> c == componentState) || 0;
		const prevIndex = (selectedIndex - 1);
		const prevState = prevIndex >= 0 ? component.states[prevIndex] : false;
		const nextIndex = (selectedIndex + 1);
		const nextState = nextIndex <= component.states.length - 1 ? component.states[nextIndex] : false;
		return <div className={`line__container ${classNames} `}>
			<div className="line__items">
				{ component && component.views.map((c, index) => {
					let isLongEnough = component.views.length > 1;
					let isFirst = index == 0;
					let isLast = index == component.views.length - 1;
					let active = c.slug == componentState;
					let prev = c.slug == (isLongEnough && !isFirst) && prevState;
					let next = c.slug == (isLongEnough && !isLast) && nextState;
					const classNames = makeClassNames("line__item", { active, next, prev })
					return <div key={index} className={classNames} >
						<ComponentCreator key={index} slug={c.slug} isActive={active} />
					</div>
				}) }
			</div>
			<div className="line__controls">
				{ prevState ?
					<div className="line__controls--prev clickable" onClick={setComponentState.bind(this, prevState)} >{"<"}</div> :
					<div className="line__controls--prev"/> }
				{ nextState ?
					<div className="line__controls--next clickable" onClick={setComponentState.bind(this, nextState)} >{">"}</div> :
					<div className="line__controls--next"/> }
			</div>
		</div>
	}
}
export { LineComponent }
