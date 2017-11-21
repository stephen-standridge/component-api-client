import '../../../styles/ouroboros_piece/ouroboros_lines.css';

const Ouroboros = React.createClass({
	render(){
		const { colorClass, strokeClass, fillClass, scale } = this.props;
		return(
			<g transform={`translate(0, -110)`}>
			<g className="ouroboros__rotate" transform={`scale(${scale})`}>
				<path className={`ouroboros__fill ouroboros__stroke--bold ${colorClass} ${fillClass} ${strokeClass}`}
					d="M206.3,452.1c-23.8-2-50.4-10-70.8-21l-24.4,14.3l0.2-30.2c-19.4-14.8-36.2-33.7-48.9-55.1H35.6L50,335.7
					c-8.3-19.6-14.2-41.8-15.7-63.9L9.7,258.3l25.4-14.3c2.1-22.8,8.4-44.9,18.8-64.1l-13.3-22.7l29.2,0.2h0
					c13.4-17.1,30-31.8,48.8-43.3V87.8l24.3,13.7c18.6-8,38.6-13,59.2-14.6l14.4-25.1L231,86.8c21.4,1.6,42,6.8,60.8,15.5l25.3-14.5v29
					v0c15.7,11,29.5,24.9,40.5,41.6l-0.2,0l28.3-0.2l-14.5,25.4v0c7.7,18.1,12.9,40.7,14.4,63.4l20.4,11.7l-20.7,11.8
					c-2.3,20.5-10,41.8-20.7,58.7c-0.2,0.3-1.2,1.8-1.4,2.2l11.9,17.8l-23.1-1c-0.7,0.8-28,35.1-57.1,45.7
					c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l-0.2-0.5l13.7,7.9c10.3-20.5,15.9-42.2,16.4-64.3l0.3,0.2l-15.7-9.9l-0.2-0.3h15.5
					c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4l0.1-0.1l-16.4,8.7l-0.5,0.6l8.2-14.3
					c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1l-0.7,18.6l0,0.5l-8.1-14
					c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4l-0.1-0.1l15.7,9.9l0.1,0.2
					H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0l16.4-8.7l-0.2,0.4l-7.6,13.1
					c12.3,6.2,19.7,10,33.5,12.2l3.2-15.9l23.8,15.8l45.8-30.3l-0.5-21.7l19.5,28.2v23.8l-18.5-9.6l-2.5,20.7l-17.4-5.5l-1.3,19.7
					l-12.4-2.8l-2.2-1.5c4.4,2.4,7.3,7.1,7.3,12.4l-0.2-2.5l5.9,13.4l9.9-13l7.9,14.7l10-13.3l7.5,14.6l13.8-19.8l4.1,24.6l-12,36.2
					l-4.4-22.6l-36.8-1.3L223,461.4l1.7-9.9l-27.1,24.4L206.3,452.1"/>
				<path className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					d="M202.3,414.8C123.7,406.5,60,339.2,60,258.4c0-86.4,70-156.4,156.4-156.4c86.4,0,156.4,70,156.4,156.4
					c0,58.2-31.8,109-79,136l1.1-0.6c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l-0.2-0.5l13.7,7.9c10.3-20.5,15.9-42.2,16.4-64.3
					l0.3,0.2l-15.7-9.9l-0.2-0.3h15.5c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4
					l0.1-0.1l-16.4,8.7l-0.5,0.6l8.2-14.3c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1
					l-0.7,18.6l0,0.5l-8.1-14c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4
					l-0.1-0.1l15.7,9.9l0.1,0.2H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0
					l16.4-8.7l-0.2,0.4l-7.6,13.1c12.3,6.2,19.7,10,33.5,12.2"/>
				<polyline className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="230.4,412.3 236.4,425.7 246.2,412.8 254.1,427.4 264.1,414.1 271.6,428.7 285.4,408.9 289.5,433.5
					277.5,469.7 273.1,447.1 236.3,445.8 223,461.4 224.8,451.5 197.7,475.9 206.3,452.1 "/>
				<circle className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.7" cy="414.8" r="6.4"/>
				<circle className={`ouroboros__stroke--bold ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.5" cy="414.8" r="14.2"/>
				<circle className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.7" cy="414.8" r="3.9"/>
				<polyline className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="184.7,390.8 189,365.7 212.8,381.5 258.6,351.2 258.1,329.5 277.7,357.7 277.7,381.5 259.2,371.9
					256.7,392.5 239.3,387 237.9,406.8 225.6,404 "/>
				<path className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					d="M197.3,402.9c-13.8-2.1-40.8-12.2-53.2-18.4l9.3-17.1l-0.3,0.4l-16.8,9.6c-16.4-9.9-34.1-29.6-44.1-47l15.8-9.6
					l-19.3,0l-0.2,0C79.9,303,75.5,277.6,75,258.4h15.5l-0.1-0.2l-15.7-9.9l0.1,0.1c0.9-19.9,8.5-44.1,17.6-61.8l12,6.9l0.3,0.1
					L96.1,177l0.3,0.5c10.4-17.1,28.9-35.2,47-46.6l8,13.6l0-0.5l0.7-18.6l0,0.1c17.4-8.8,42.8-14.3,64.4-14.6l0.1,14.7v2.3l9.8-16.7
					c20.6,1,45,8.1,64.3,18.3l-8.1,14.9l0.5-0.6l16.5-8.7l-0.1,0.1c17.1,10.8,34.5,28.8,46.3,48.5l-13.3,7.5l-0.2,0.3l18.6,0.7l-0.3,0
					c10.6,20.4,16.5,44.9,17.5,65.9l-16.9,0.4l0.2,0.3l15.7,9.9l-0.3-0.2c-0.5,22-5.2,43.4-17.5,66.4l-11.4-6.8c-0.2,0.5,7.5,13,7.5,13
					c-15.9,27.1-47.7,51.4-50.4,52.8c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l13.5,7.5c10.3-20.5,15.9-42.2,16.4-64.3l0.3,0.2
					l-15.7-9.9l-0.2-0.3h15.5c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4l0.1-0.1
					l-16.4,8.7l-0.5,0.6l8.2-14.3c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1
					l-0.7,18.6l0,0.5l-8.1-14c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4
					l-0.1-0.1l15.7,9.9l0.1,0.2H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0
					l16.4-8.7l-0.2,0.4l-7.6,13.1c12.3,6.2,19.7,10,33.5,12.2"/>
				<polyline className={`ouroboros__stroke ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="258.6,351.2 216.7,390.8 184.7,390.8 203.6,408.9 "/>

				<path className={`ouroboros__stroke-animation--bold ouroboros__fill--none ${colorClass} ${fillClass} ${strokeClass}`}
					d="M206.3,452.1c-23.8-2-50.4-10-70.8-21l-24.4,14.3l0.2-30.2c-19.4-14.8-36.2-33.7-48.9-55.1H35.6L50,335.7
					c-8.3-19.6-14.2-41.8-15.7-63.9L9.7,258.3l25.4-14.3c2.1-22.8,8.4-44.9,18.8-64.1l-13.3-22.7l29.2,0.2h0
					c13.4-17.1,30-31.8,48.8-43.3V87.8l24.3,13.7c18.6-8,38.6-13,59.2-14.6l14.4-25.1L231,86.8c21.4,1.6,42,6.8,60.8,15.5l25.3-14.5v29
					v0c15.7,11,29.5,24.9,40.5,41.6l-0.2,0l28.3-0.2l-14.5,25.4v0c7.7,18.1,12.9,40.7,14.4,63.4l20.4,11.7l-20.7,11.8
					c-2.3,20.5-10,41.8-20.7,58.7c-0.2,0.3-1.2,1.8-1.4,2.2l11.9,17.8l-23.1-1c-0.7,0.8-28,35.1-57.1,45.7
					c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l-0.2-0.5l13.7,7.9c10.3-20.5,15.9-42.2,16.4-64.3l0.3,0.2l-15.7-9.9l-0.2-0.3h15.5
					c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4l0.1-0.1l-16.4,8.7l-0.5,0.6l8.2-14.3
					c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1l-0.7,18.6l0,0.5l-8.1-14
					c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4l-0.1-0.1l15.7,9.9l0.1,0.2
					H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0l16.4-8.7l-0.2,0.4l-7.6,13.1
					c12.3,6.2,19.7,10,33.5,12.2l3.2-15.9l23.8,15.8l45.8-30.3l-0.5-21.7l19.5,28.2v23.8l-18.5-9.6l-2.5,20.7l-17.4-5.5l-1.3,19.7
					l-12.4-2.8l-2.2-1.5c4.4,2.4,7.3,7.1,7.3,12.4l-0.2-2.5l5.9,13.4l9.9-13l7.9,14.7l10-13.3l7.5,14.6l13.8-19.8l4.1,24.6l-12,36.2
					l-4.4-22.6l-36.8-1.3L223,461.4l1.7-9.9l-27.1,24.4L206.3,452.1"/>
				<path className={`ouroboros__stroke--animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					d="M202.3,414.8C123.7,406.5,60,339.2,60,258.4c0-86.4,70-156.4,156.4-156.4c86.4,0,156.4,70,156.4,156.4
					c0,58.2-31.8,109-79,136l1.1-0.6c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l-0.2-0.5l13.7,7.9c10.3-20.5,15.9-42.2,16.4-64.3
					l0.3,0.2l-15.7-9.9l-0.2-0.3h15.5c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4
					l0.1-0.1l-16.4,8.7l-0.5,0.6l8.2-14.3c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1
					l-0.7,18.6l0,0.5l-8.1-14c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4
					l-0.1-0.1l15.7,9.9l0.1,0.2H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0
					l16.4-8.7l-0.2,0.4l-7.6,13.1c12.3,6.2,19.7,10,33.5,12.2"/>
				<polyline className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="230.4,412.3 236.4,425.7 246.2,412.8 254.1,427.4 264.1,414.1 271.6,428.7 285.4,408.9 289.5,433.5
					277.5,469.7 273.1,447.1 236.3,445.8 223,461.4 224.8,451.5 197.7,475.9 206.3,452.1 "/>
				<circle className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.7" cy="414.8" r="6.4"/>
				<circle className={`ouroboros__stroke-animation--bold ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.5" cy="414.8" r="14.2"/>
				<circle className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					cx="216.7" cy="414.8" r="3.9"/>
				<polyline className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="184.7,390.8 189,365.7 212.8,381.5 258.6,351.2 258.1,329.5 277.7,357.7 277.7,381.5 259.2,371.9
					256.7,392.5 239.3,387 237.9,406.8 225.6,404 "/>
				<path className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					d="M197.3,402.9c-13.8-2.1-40.8-12.2-53.2-18.4l9.3-17.1l-0.3,0.4l-16.8,9.6c-16.4-9.9-34.1-29.6-44.1-47l15.8-9.6
					l-19.3,0l-0.2,0C79.9,303,75.5,277.6,75,258.4h15.5l-0.1-0.2l-15.7-9.9l0.1,0.1c0.9-19.9,8.5-44.1,17.6-61.8l12,6.9l0.3,0.1
					L96.1,177l0.3,0.5c10.4-17.1,28.9-35.2,47-46.6l8,13.6l0-0.5l0.7-18.6l0,0.1c17.4-8.8,42.8-14.3,64.4-14.6l0.1,14.7v2.3l9.8-16.7
					c20.6,1,45,8.1,64.3,18.3l-8.1,14.9l0.5-0.6l16.5-8.7l-0.1,0.1c17.1,10.8,34.5,28.8,46.3,48.5l-13.3,7.5l-0.2,0.3l18.6,0.7l-0.3,0
					c10.6,20.4,16.5,44.9,17.5,65.9l-16.9,0.4l0.2,0.3l15.7,9.9l-0.3-0.2c-0.5,22-5.2,43.4-17.5,66.4l-11.4-6.8c-0.2,0.5,7.5,13,7.5,13
					c-15.9,27.1-47.7,51.4-50.4,52.8c19.2-15.5,34.5-33.2,45.6-52.2l0,0.1l-8.7-16.4l13.5,7.5c10.3-20.5,15.9-42.2,16.4-64.3l0.3,0.2
					l-15.7-9.9l-0.2-0.3h15.5c-1-21-6.7-42.2-17.4-62.6l0.3,0l-18.6-0.7l0.2-0.3l13.2-7.6c-11.8-19.7-27.1-34.6-44.2-45.4l0.1-0.1
					l-16.4,8.7l-0.5,0.6l8.2-14.3c-19.2-10.2-39.8-15.7-60.4-16.7l-9.9,15.7l0.1-1.3v-14.4c-21.5,0.3-42.3,5.2-59.7,14.1l0-0.1
					l-0.7,18.6l0,0.5l-8.1-14c-18.1,11.4-32.5,26.4-42.9,43.5l-0.3-0.5l8.7,16.4l-0.3-0.1l-12.9-7.4C91.2,208.9,86,228.5,85,248.4
					l-0.1-0.1l15.7,9.9l0.1,0.2H84.9c0.5,19.2,4.9,38.5,13.6,56.4l0.2,0l18.6,0.7l-0.7,0.4l-13.4,7.7c10,17.3,24.1,31.1,40.5,41l0,0
					l16.4-8.7l-0.2,0.4l-7.6,13.1c12.3,6.2,19.7,10,33.5,12.2"/>
				<polyline className={`ouroboros__stroke-animation ouroboros__fill--none ${colorClass} ${strokeClass}`}
					points="258.6,351.2 216.7,390.8 184.7,390.8 203.6,408.9 "/>
			</g>
			</g>
		)
	}
})
export default Ouroboros;
