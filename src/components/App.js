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

    let urlStr = this.findUrlParam('str');
    let urlSize = this.findUrlParam('size');

    this.state = {
      str : urlStr ? urlStr : "TWIN PEAKS",
      viewBoxMod : urlSize ? parseInt(urlSize) : 0,
      showEditor : true
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.minusHandler = this.minusHandler.bind(this);
    this.plusHandler = this.plusHandler.bind(this);
	}

  findUrlParam (paramName) {
    let result = null;
    let tmp = [];
    window.location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === paramName) result = decodeURIComponent(tmp[1]);
      });
      return result;
  }

  inputHandler (str) {
    this.setState({str : str});
  }

  minusHandler () {
    this.setState({viewBoxMod : this.state.viewBoxMod + 1});
  }

  plusHandler () {
    this.setState({viewBoxMod : this.state.viewBoxMod - 1});
  }

	render () {
		return (
      <div style={appStyle} >
        <Editor str={this.state.str}
                viewBoxMod={this.state.viewBoxMod}
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
