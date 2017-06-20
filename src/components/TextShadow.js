import Inferno from 'inferno';

//Constants
const initOffset = 0.15;
const increment = 0.10;
const nbLayers = 4;

//Styles
const textShadowGroupStyle = {
	fill: '#000',
  stroke: '#000',
  strokeWidth: '0.56px'
}

//Helper functions
const getShadowLayer = tspans => (
	<text filter="url(#blur2)">{tspans}</text>
);

//Component
const TextShadow = props => {
	let offset = initOffset;
	let shadowLayers = [];
	for (var i = 0; i < nbLayers; i ++) {
		let translation = 'translate(' + offset + ', ' + offset + ')';
		shadowLayers.push(<g transform={translation}>{getShadowLayer(props.tspans)}</g>);
		offset += increment;
	}
	return <g style={textShadowGroupStyle}>{shadowLayers}</g>;
};

module.exports = TextShadow;
