import Inferno from 'inferno';
import Component from 'inferno-component';
import TextShadow from './TextShadow';
import TextLine from './TextLine';

//Constants
const baseViewBoxSize = 40;
const lineHeight = 8;

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
  strokeLinejoin: 'round',
	lineHeight: '100%'
};
const textBackStyle = {
  paintOrder: 'stroke',
  strokeWidth: '0.54px'
};
const textFrontStyle = {
  stroke: fillColor,
  strokeWidth: '0.18px'
};

//Component
class SvgElt extends Component {

	constructor (props) {
		super(props);
		this.linesArray = [];
		this.topMargin = '';
	}

	getViewBoxSize () {
		return baseViewBoxSize + this.props.viewBoxMod;
	}

	getViewBow () {
		return "0 0 " + this.getViewBoxSize() + " " + this.getViewBoxSize();
	};

	setLinesArray () {
		this.linesArray = this.props.str.split(/\r?\n/g);
	};

	setTopMargin () {
		let nbrLines = this.linesArray.length;
		if (nbrLines <= 1) {
			this.topMargin = '50%';
		} else {
			let margin = (this.getViewBoxSize() + lineHeight + 1) / 2 - (nbrLines * lineHeight) / 2;
			this.topMargin = margin + 'px';
		}
	};

	render () {
		this.setLinesArray();
		this.setTopMargin();

		const getTextLine = (str, i) => {
			return <TextLine 	str={str}
												lineHeight={lineHeight}
												lineNumber={i}
												topMargin={this.topMargin} />
		}

		return (
		  <svg viewBox={this.getViewBow()} style={boxStyle} ref={node => this.node = node}>
		    <title>Title</title>
		    <defs>
		      <filter id="blur1" x="-5%" y="-5%">
		        <feGaussianBlur in="SourceGraphic" stdDeviation="0.025" />
		      </filter>
		    </defs>
		    <g style={textGroupStyle} filter="url(#blur1)">
					<TextShadow textLines={this.linesArray.map(getTextLine)} />
		      <text style={textBackStyle}>
		        {this.linesArray.map(getTextLine)}
		      </text>
		      <text style={textFrontStyle}>
		        {this.linesArray.map(getTextLine)}
		      </text>
		    </g>
		  </svg>
		);
	}
};

module.exports = SvgElt;
