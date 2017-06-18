import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

class App extends Component {

  constructor(props) {
		super(props);
	}

	render () {
		return (
      <div id="app">
        <svg id="svg-box" viewBox="0 0 100 100">
          <title>Test</title>
          <g id="text-container">
            <g transform="translate(0.4, 0.4)">
                <text id="text-shadow" x="50%" y="50%">
                  TWIN PEAKS
                </text>
            </g>
            <text id="text1" x="50%" y="50%">
              TWIN PEAKS
            </text>
            <text id="text2" x="50%" y="50%">
              TWIN PEAKS
            </text>
          </g>
        </svg>
      </div>
    );
	}

}

module.exports = App;
