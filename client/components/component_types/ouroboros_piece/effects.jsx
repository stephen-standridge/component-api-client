import '../../../styles/ouroboros_piece/effects.css';

const Ouroboros = React.createClass({
	render(){
		const { colorClass, width, height } = this.props;
		return(
			<g className="effects__wrapper">
				<rect x="32.7" y="25.1" className={`effects__stroke ${colorClass} effects__stroke--5`} width={width} height={height}/>
				<rect x="28.7" y="21.1" className={`effects__stroke ${colorClass} effects__stroke--4`} width={width} height={height}/>
				<rect x="24.7" y="17.1" className={`effects__stroke ${colorClass} effects__stroke--3`} width={width} height={height}/>
				<rect x="20.7" y="13.1" className={`effects__stroke ${colorClass} effects__stroke--2`} width={width} height={height}/>
				<rect x="16.7" y="9.1" className={`effects__stroke ${colorClass} effects__stroke--1`} width={width} height={height}/>
			</g>
		)
	}
})
export default Ouroboros;
