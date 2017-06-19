import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {str : "TWIN PEAKS"};
	}

	render () {
		return (
      <div id="app">
        <svg id="svg-box" viewBox="0 0 40 40">
          <title>Test</title>
          <defs>
            <filter id="blur1" x="-5%" y="-5%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.015" />
            </filter>
            <filter id="blur2" x="-5%" y="-5%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.025" />
            </filter>
          </defs>
          <g id="text-container">
            <g transform="translate(0.15, 0.15)">
                <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
                  {this.state.str}
                </text>
            </g>
            <g transform="translate(0.25, 0.25)">
                <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
                  {this.state.str}
                </text>
            </g>
            <g transform="translate(0.35, 0.35)">
                <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
                  {this.state.str}
                </text>
            </g>
            <g transform="translate(0.45, 0.45)">
                <text id="text-shadow" x="50%" y="50%" filter="url(#blur2)">
                  {this.state.str}
                </text>
            </g>
            <text id="text1" x="50%" y="50%" filter="url(#blur1)">
              {this.state.str}
            </text>
            <text id="text2" x="50%" y="50%" filter="url(#blur1)">
              {this.state.str}
            </text>
          </g>
        </svg>
      </div>
    );
	}

}

module.exports = App;
