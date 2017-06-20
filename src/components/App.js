import Inferno from 'inferno';
import Component from 'inferno-component';
import Editor from './Editor';
import SvgElt from './SvgElt';

const appStyle = {
  width: '100vw',
  height: '56vw',
  background: 'url("./public/img/background.png") center center / contain no-repeat'
};

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {str : "TWIN PEAKS", viewBoxMod : 0};
    this.inputHandler = this.inputHandler.bind(this);
    this.minusHandler = this.minusHandler.bind(this);
    this.plusHandler = this.plusHandler.bind(this);
	}

  inputHandler (e) {
    this.setState({str : e.target.value});
  }

  minusHandler (e) {
    e.preventDefault();
    this.setState({viewBoxMod : this.state.viewBoxMod + 1});
  }

  plusHandler (e) {
    e.preventDefault();
    this.setState({viewBoxMod : this.state.viewBoxMod - 1});
  }

	render () {
		return (
      <div style={appStyle} >
        <Editor str={this.state.str}
                handleInput={this.inputHandler}
                handleMinus={this.minusHandler}
                handlePlus={this.plusHandler} />
        <SvgElt str={this.state.str}
              viewBoxMod={this.state.viewBoxMod} />
      </div>
    );
	}

}

module.exports = App;
