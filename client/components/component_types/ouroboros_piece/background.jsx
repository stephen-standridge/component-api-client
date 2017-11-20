import '../../../styles/ouroboros_piece/background_lines.scss';

const useTag = '<use xlink:href="#background__shape" />';
const BackgroundLines = React.createClass({
	render(){
		const {
			middleClass,
			outerClass,
			innerClass,
			colorClass,
			width,
			height,
			scale,
			scaleX,
			scaleY
		} = this.props;

		return(
			<g className="background__lines">
				<defs>
					<pattern id="linework" patternUnits="userSpaceOnUse" width={this.props.width * 2} height={this.props.height * 2}>
						<g transform={`scale(${scaleX},${scaleY})`}>
							<g transform={`translate(-50,-170)`}>
							<path id="bg1"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M49,797.5l0.2-149.6l4.1-3.6V484.1l18.1-18.1l0.1-16.8l12-12l-0.1-91.6l-12-12.1l-0.1-16.8l-18-18.1V138.4l-4.1-3.6L49-14.8"/>
							<path id="bg2"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M55.3,732.2c0.1,40.3,0.7-222,0.7-222l13.3-13.4l-0.1-18.8l14-14v-50l7.9-8.1l-0.1-154.8l-7.9-8.1v-50l-14-13.9l0.1-18.8l-13.3-13.4c0,0-0.7-262.3-0.7-222"/>
							<path id="bg3"
								className={`background__line outer ${outerClass} ${colorClass}`}d="M51.4,799.1l0.2-305.6l48.4-48v-12.8l-6.4-5.9l-0.1-70.9l9-8.5v-7.6l-51-50.6L51.3-16.4"/>
							<path id="bg4"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M58.8,736.3c0.1-0.4,0.1-225.9,0.1-225.9l8.5-8.8l0.1-25.8l6.1-6.3l-0.1-282.2l-6.1-6.3l-0.1-25.8l-8.5-8.8c0,0,0-225.5-0.1-225.9"/>
							<path id="bg5"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M87,734.7V450.4l-29.9-30l-0.1-184l29.9-30V-78"/>
							<path id="bg6"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M91.1,734.7l-0.1-284L54,413.4v-40.2l-4.2-4.1v-81.5l4.2-4.1v-40.2L91,206l0.1-284"/>
							<path id="bg7"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M95,734.6l-0.2-284.3l-33.3-33.3l0.2-48.4l17.1-17.6l-0.1-45.4l-17.1-17.6l-0.2-48.4l33.2-33.3l0.2-284.4"/>
							<path id="bg8"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M103.5,732.9c0.1-0.6,0-75.3,0-75.3l-10-9.8v-75.1l10.8-11V488V378.7l9.4-9.3l-0.1-18.6l-9.4-9.3V168.7V94.9l-10.8-11V8.8l10-9.8c0,0,0.1-74.7,0-75.3"/>
							<path id="bg9"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M106.4,733.9v-75.8l-10.1-10.2v-74.7l9.6-9.6v-86.7l-9.3-9.4l-0.1-74.1l19-18.9l-0.1-30.2l-19-18.8l0.1-136.2l9.3-9.4V93.1l-9.6-9.6V8.8l10.1-10.2v-75.8"/>

							<path id="bg10"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M98.1,735.1l0.5-160.9l11.3-11.1l0.2-44.5l-29-29v-346l29-29l-0.2-20.9L98.5,82.5L98-78.4"/>
							<path id="bg11"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M100.4,735.3l0.3-154.7l11.3-11.1l0.3-61.5l8.9-8.9l-0.1-76l5.5-5V238.8l-5.5-5l0.1-76l-8.9-8.9L112,87.2l-11.3-11.1l-0.3-154.7"/>
							<path id="bg12"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M109.7,660.4c-0.3,191.9,0-49.6,0-54.8l13.1-13.4V425.2l17.1-17.7v-10.8l-7.3-7.2l0.1-22l10.3-10.3l-0.1-57.7l-10.3-10.3l-0.1-22l8.3-7.8v-9.7l-18.1-18.1V64.6l-13.1-13.4c0-5.3-0.3-246.8,0-54.8"/>
							<path id="bg13"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M131.5,660.8c-0.3,191.9,0-49.6,0-54.8l12-12.3V394.3l-8.6-8.3l0.1-17l10.7-10.7l-0.1-59.9l-10.7-10.7l-0.1-17l8.6-8.3V63l-11.9-12.2c0-5.3-0.3-246.8,0-54.8"/>
							<path id="bg14"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M135,732.4l-0.1-223.7l-4.2-3.6l0.2-84.1l16.7-16.8l0.2-150.8l-16.4-16.5v-83.6l8.9-8.2c0,0,0-223.3,0.1-223.7"/>
							<path id="bg15"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M141.5,736.1V451.8l-32.9-33v-50.2l-9.4-9.4l-0.1-60l9.4-9.4V238l32.9-33V-79.4"/>
							<path id="bg16"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M145.7,736.1l-0.1-284L99,405.2l-0.3-16.6l4.2-4.3v-15.4l-1.4-1.3l-0.1-78.7l4-3.9v-10.2l-6.8-6.9l0.3-16.6l46.6-46.9l0.1-284"/>
							<path id="bg17"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M147.8-78.4l-0.2,305.6l-25.1,24.9l-0.2,154.7l25.4,25.1l0.2,305.6"/>
							<path id="bg18"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M152.1-78.8l-0.2,149.6l6.2,6v147.4l-37.3,37.3l0.2,104.2l9.8,9.8l0.1,16.4l4.3,4.6l-0.1,12l26.8,26.9v159.1L175,608c0,5.3,0.3,246.8,0,54.8"/>

							<path id="bg19"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M175.1-3.9c0.3-191.9,0,49.6,0,54.8L162,64.4v159.1l-25.6,25.7l0.2,10.2l-6,6l-0.1,18.5l-12,12l-0.2,99.3l39.7,39.7v147.4l-6.2,6l0.2,149.6"/>
							<path id="bg20"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M178.4-77.5V59.5l10.1,10.2v111.2l-12.6,12.6l0.1,150.8l-8.1,8.4v21.2l8.1,8.5l-0.1,83.2l12.6,12.6v111.2l-10.2,10.2v136.9"/>
							<path id="bg21"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M181.3-76.5c-0.1,0.6,0,136.4,0,136.4l10,9.8v115.3l-13.8,14v148l-12,12.6v7.9l12,12.6v80l13.8,14v115.3l-10,9.8c0,0-0.1,135.8,0,136.4"/>
							<path id="bg22"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M206.2-76.5l-0.3,154.7l-11.3,11.1l-0.3,61.5l-8.9,8.9l-7,0.1l-23.2,22.9l-0.5,293l23.6,23.3l7,0.1l8.9,8.9l0.3,48.2l7.9,7.9l0.3,166.4"/>
							<path id="bg23"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M208.6-76.3l-0.5,160.9l-11.3,11.1l-0.2,44.5l9.8,9.8l-0.2,57.8l-20.3,20.3l0.2,114.4l-15.3,15.1l-0.1,11.3l15.1,15.3l0.2,45.5l20.1,20.2l0.2,59.2l-9.8,9.8l0.2,36.6l11.3,11.1l0.5,168.8"/>
							<path id="bg24"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M209.8,733.3L209.6,478l-7.7-7.7v-29.4l-18-17.9h-14l-12.5-12.3l0.2-167.4l9.7-9.5h16.7l18-17.9v-29.4l7.7-7.7l0.2-255.2"/>
							<path id="bg25"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M213.5,733.8V449.5l-29-29.2l-22.5,0.2l-9.6-9.8l0.2-165.9l8.1-8.4l23.8,0.2l29-29.2V-77"/>
							<path id="bg26"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M228.7,744.8l-0.1-284l-44.3-44.4h-6.4l-9.8-10.1v-26l-8.3-8.3v-10.3l-9.5-9.4V317l9.4-9.4v-22.5l7.8-8.1v-26l10.3-10.6h6.4l33.3-33.4l0.1-284"/>
							<path id="bg27"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M234.8,747l-0.2-284.3l-52.7-52.8l0.2-14l23.4-23.6l0.1-53.5l-23.4-23.4l-0.2-48.4l39.5-39.5l0.2-284.3"/>


							<path id="bg28"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M211.6-75.8l0.2,284.3l39.5,39.5l-0.2,48.4L227.7,320l-0.1,52.5l23.4,23.4l0.2,15.1l-51.6,51.7l-0.2,284.3"/>
							<path id="bg29"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M215.5-75.9l0.1,284l33.3,33.4h6.4l9.8,10.1v26l8.3,8.3v24.8l8.3,8.1v34.8l-8.3,8.1v10.8l-7.8,8.1v26l-10.3,10.6h-6.4l-44.5,44.7l-0.1,284"/>
							<path id="bg30"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M219.6-75.9v284.3l29,29.2l22.5-0.2l8.5,8.6l0.2,167.9l-7.4,7.6l-23.8-0.2l-29,29.3v284.3"/>
							<path id="bg31"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M223.4-75.3l0.2,255.2l7.7,7.7V217l18,17.9h14l11.6,11.5l0.3,168.3l-9.4,9.4h-16.7l-18,17.9v29.4l-7.6,7.7l-0.2,255.2"/>
							<path id="bg32"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M224.6,734.2l0.5-169.4l11.3-11.1l0.2-36l-9.8-9.8l0.2-57.8l20.3-20.3l-0.2-46.7l16.4-16.1l-0.2-9.6l-15.9-16.1l-0.2-113.1L227,208.1l-0.2-59.2l9.8-9.8l-0.2-44.5l-11.4-11l-0.5-160.9"/>
							<path id="bg33"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M231.3,730.1l0.3-168.4l7-6.8l0.3-47.8l8.9-8.9l7-0.1l22.7-22.5l0.1-294.3l-22.8-22.5l-7-0.1l-8.9-8.9l-0.3-61.5l-11.3-11.1l-0.3-154.7"/>
							<path id="bg34"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M251.8,734.4c0.1-0.6,0-136.4,0-136.4l-10-9.8V473l13.8-14v-80.3l12-12.6l0.1-7.9l-12.1-12.7V197.9l-13.8-14V68.6l10-9.8c0,0,0.1-135.8,0-136.4"/>
							<path id="bg35"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M254.8,735.4V598.4l-10.1-10.2V477l12.6-12.6l-0.1-83.1l8.5-8.8v-20.7l-8.5-8.7l0.1-150.8l-12.6-12.6V68.6l10.1-10.2V-78.5"/>
							<path id="bg36"
								className={`background__line inner ${innerClass} ${colorClass}`}
								d="M281,736.8l0.2-149.6l-6.2-6V433.7l37.6-37.6l-0.1-103.4l-10.3-10.3l-0.1-16.4l-4.3-4.6l0.1-12l-26.8-26.9V63.3l-13.1-13.4c0-5.3-0.3-246.8,0-54.8"/>

							<path id="bg37"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M258,661.8c-0.3,191.9,0-49.6,0-54.8l13.1-13.4V434.5l25.6-25.7l-0.2-10.2l6-6l0.1-18.5l12.5-12.5l0.2-98l-40.4-40.4V75.8l6.2-6L281-79.9"/>
							<path id="bg38"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M285.4,736.3l0.2-305.6l25.2-25l-0.3-155.1l-24.8-24.6l-0.2-305.6"/>
							<path id="bg39"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M287.4-78.1l0.1,284l46.6,46.9l0.3,16.6l-7.3,7.3v9.3l4.5,4.5l0.1,78.5l-1.5,1.7v14.8l4.4,4.4l-0.3,16.6l-46.6,46.9l-0.1,284"/>
							<path id="bg40"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M291.5-78.1v284.3l32.9,33v50.2l9.4,9.4l0.1,25.9v34.2l-9.4,9.4V420l-32.9,33v284.3"/>
							<path id="bg41"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M297.1,732.3l0.1-223.7l4.6-4v-83.6l-17.9-18l0.1-147.8l18.2-18.4l0.2-84.1l-9.4-8.8c0,0,0-223.3-0.1-223.7"/>
							<path id="bg42"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M301.6-2.8c0.3-191.9,0,49.6,0,54.8l-12,12.3v199.3l8.6,8.3l-0.1,17l-10.7,10.7l0.1,59.9l10.7,10.7l0.1,17l-8.6,8.3v199.3l12,12.3c0,5.3,0.3,246.8,0,54.8"/>
							<path id="bg43"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M323.4-2.4c0.3-191.9,0,49.6,0,54.8l-13.1,13.4v166.9l-17.1,17.7v10.8l7.3,7.2l-0.1,22l-10.3,10.3l0.1,57.7l10.3,10.3l0.1,22l-8.3,7.8v9.7l18.1,18.1v166.9l13.1,13.4c0,5.3,0.3,246.8,0,54.8"/>
							<path id="bg44"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M332.7-77.3l-0.3,154.7l-11.3,11.1l-0.3,61.5l-8.9,8.9l0.1,76l-6.2,5.8l-0.2,177.5l6.3,5.9l-0.1,76l8.9,8.9l0.3,61.5l11.3,11.1l0.3,154.7"/>
							<path id="bg45"
								className={`background__line middle ${middleClass} ${colorClass}`}
								d="M335.1-77.1l-0.5,160.9L323.3,95l-0.2,44.5l29,28.9l0.1,346.1l-29,28.9l0.2,20.9l11.3,11.1l0.5,160.9"/>

							<path id="bg46"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M326.6-76v75.8L336.7,10v74.7l-9.6,9.6V181l9.3,9.4l0.1,137.6l-19,18.9l0.1,29.8l19,18.9l-0.1,73.1l-9.3,9.4v86.7l9.6,9.6v74.7l-10.1,10.2v75.8"/>
							<path id="bg47"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M329.5-75c-0.1,0.6,0,75.3,0,75.3l10,9.8v75.1l-10.8,11v73.8v172.9l-9.3,9.3l0.1,20.6l9.4,9.3v107.3V563l10.8,11v75.1l-10,9.8c0,0-0.1,74.7,0,75.3"/>
							<path id="bg48"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M338.2-76.6l0.2,284.3l33.2,33.3l-0.2,48.4l-17.1,17.6l0.1,45.4l17.1,17.6l0.2,48.4l-33.2,33.3l-0.2,284.3"/>
							<path id="bg49"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M342-76.7l0.1,284l37,37.3v40.2l4.2,4.1l0.1,81.5l-4.2,4.1v40.2l-37,37.3l-0.1,284"/>
							<path id="bg50"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M346.1-76.7v284.3l29.9,30l0.1,184l-29.9,30v284.3"/>
							<path id="bg51"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M374.2-78.3c-0.1,0.4-0.1,225.9-0.1,225.9l-8.5,8.8l-0.1,25.8l-6.1,6.3l0.1,282.2l6.1,6.3l0.1,25.8l8.5,8.8c0,0,0,225.5,0.1,225.9"/>
							<path id="bg52"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M377.8-74.2c-0.1-40.3-0.7,222-0.7,222l-13.3,13.4l0.1,18.8l-14,14v50l-7.9,8.1l0.1,154.8l7.9,8.1v50l14,14l-0.1,18.8l13.3,13.4c0,0,0.7,262.3,0.7,222"/>
							<path id="bg53"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M384.1-13.6l-0.2,149.6l-4.1,3.6v160.1l-18.1,18.1l-0.1,16.8l-12,12.1l0.1,91.6l12,12.1l0.1,16.8l18.1,18.1v160.1l4.1,3.6l0.2,149.6"/>
							<path id="bg54"
								className={`background__line outer ${outerClass} ${colorClass}`}
								d="M381.7-15.1l-0.2,305.6l-50.9,50.6v7.6l9,8.5l0.1,70.9l-7.1,6.6l-0.1,11l49.1,49.1l0.2,305.6"/>
							</g>
						</g>
					</pattern>
					<rect id="background__shape" x="35" y="29.1" width={this.props.width} height={this.props.height}/>
				</defs>
				<g className={`background__border ${colorClass}`} dangerouslySetInnerHTML={{__html: useTag }}>
				</g>
				<rect x="35" y="29.1" width={this.props.width} height={this.props.height} fill={"url(#linework)"}/>


			</g>
		)
	}
})
export default BackgroundLines;
