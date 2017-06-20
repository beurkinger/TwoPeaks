import Inferno from 'inferno';
import Component from 'inferno-component';
import Editor from './Editor';
import Text from './Text';

const appStyle = {
  width: '100vw',
  height: '56vw',
  background: 'url("./public/img/background.png") center center / contain no-repeat'
};

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {str : "TWIN PEAKS"};
    this.inputHandler = this.inputHandler.bind(this);
	}

  inputHandler (str) {
    this.setState({str : str});
  }

	render () {
		return (
      <div style={appStyle}>
        <Editor str={this.state.str} handleInput={this.inputHandler} />
        <Text str={this.state.str} />
      </div>
    );
	}

}

module.exports = App;
