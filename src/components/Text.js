import Inferno from 'inferno';
import TextShadow from './TextShadow';

//Styles
const fillColor = '#401b1a';
const strokeColor = '#35ff1d';
const boxStyle = {
	width: 'auto',
	height: 'auto',
	maxWidth: '100%',
	maxHeight: '100%',
	opacity: '0.95'
};
const textGroupStyle = {
  overflow: 'hidden',
  textAnchor: 'middle',
	fontFamily: 'ITC-Medium',
  fontSize: '7px',
  fill: fillColor,
  stroke: strokeColor,
  letterSpacing: '0.7px',
  strokeLinejoin: 'round'
};
const textBackStyle = {
  paintOrder: 'stroke',
  strokeWidth: '0.54px'
};
const textFrontStyle = {
  stroke: fillColor,
  strokeWidth: '0.18px'
};
const tspanStyle = {
  alignmentBaseline: 'middle'
};

//Helper functions
const getViewBow = i => {
	return "0 0 " + (40 + i) + " " + (40 + i);
}

const getTspan = (str, i) => {
	const increment = 8;
	let dy = i * increment;
	return <tspan x="50%" y="50%" dy={dy} style={tspanStyle}>{str}</tspan>;
}

//Component
const Text = props => {
	let split = props.str.split(/\r?\n/g);
	return (
	  <svg viewBox={getViewBow(props.viewBoxMod)} style={boxStyle}>
	    <title>Text</title>
	    <defs>
	      <filter id="blur1" x="-5%" y="-5%">
	        <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" />
	      </filter>
	      <filter id="blur2" x="-5%" y="-5%">
	        <feGaussianBlur in="SourceGraphic" stdDeviation="0.03" />
	      </filter>
	    </defs>
	    <g style={textGroupStyle}>
				<TextShadow tspans={split.map(getTspan)} />
	      <text style={textBackStyle} filter="url(#blur1)">
	        {split.map(getTspan)}
	      </text>
	      <text style={textFrontStyle} filter="url(#blur1)">
	        {split.map(getTspan)}
	      </text>
	    </g>
	  </svg>
	);
};

module.exports = Text;
