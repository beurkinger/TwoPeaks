import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {str : "SOME CUMMIES"};
	}

	render () {
		return (
      <div id="app">
        <svg id="svg-box" viewBox="0 0 40 40">
          <title>Test</title>
          <g id="text-container">
            <g transform="translate(0.45, 0.45)">
                <text id="text-shadow" x="50%" y="50%">
                  {this.state.str}
                </text>
            </g>
            <text id="text1" x="50%" y="50%">
              {this.state.str}
            </text>
            <text id="text2" x="50%" y="50%">
              {this.state.str}
            </text>
          </g>
        </svg>
      </div>
    );
	}

}

module.exports = App;
