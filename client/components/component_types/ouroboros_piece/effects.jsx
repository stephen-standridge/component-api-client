import '../../../styles/ouroboros_piece/effects.css';

const Ouroboros = React.createClass({
	render(){
		const { colorClass, width, height } = this.props;
		return(
			<g className="effects__wrapper">
				<rect x="84.7" y="75.1" className={`effects__stroke ${colorClass} effects__stroke--5`} width={width} height={height}/>
				<rect x="80.7" y="71.1" className={`effects__stroke ${colorClass} effects__stroke--4`} width={width} height={height}/>
				<rect x="76.7" y="67.1" className={`effects__stroke ${colorClass} effects__stroke--3`} width={width} height={height}/>
				<rect x="72.7" y="63.1" className={`effects__stroke ${colorClass} effects__stroke--2`} width={width} height={height}/>
				<rect x="68.7" y="59.1" className={`effects__stroke ${colorClass} effects__stroke--1`} width={width} height={height}/>
			</g>
		)
	}
})
export default Ouroboros;
