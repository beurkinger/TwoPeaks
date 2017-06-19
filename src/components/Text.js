import Inferno, { linkEvent } from 'inferno';

const Text = (props) => {
	return (
    <svg id="svg-box" viewBox="0 0 40 40">
      <title>Text</title>
      <defs>
        <filter id="blur1" x="-5%" y="-5%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" />
        </filter>
        <filter id="blur2" x="-5%" y="-5%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.03" />
        </filter>
      </defs>
      <g id="text-container">
        <g transform="translate(0.15, 0.15)">
            <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
              {props.str}
            </text>
        </g>
        <g transform="translate(0.25, 0.25)">
            <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
              {props.str}
            </text>
        </g>
        <g transform="translate(0.35, 0.35)">
            <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
              {props.str}
            </text>
        </g>
        <g transform="translate(0.45, 0.45)">
            <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
              {props.str}
            </text>
        </g>
        <text id="text1" x="50%" y="50%" filter="url(#blur1)">
          {props.str}
        </text>
        <text id="text2" x="50%" y="50%" filter="url(#blur1)">
          {props.str}
        </text>
      </g>
    </svg>
  );
}

module.exports = Text;
