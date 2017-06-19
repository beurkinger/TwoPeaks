import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';
import Editor from './Editor';
import Text from './Text';

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
      <div id="app">
        <Editor str={this.state.str} handleInput={this.inputHandler} />
        <Text str={this.state.str} />
      </div>
    );
	}

}

module.exports = App;
