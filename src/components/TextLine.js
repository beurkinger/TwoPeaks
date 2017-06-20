import Inferno from 'inferno';

//Styles
const tspanStyle = {
  alignmentBaseline: 'middle'
};

//Component
const TextLine = props => {
	let dy = props.lineNumber * props.lineHeight;
	return (
		<tspan x="50%" y={props.topMargin} dy={dy} style={tspanStyle}>
			{props.str}
		</tspan>
	);
}

module.exports = TextLine;
