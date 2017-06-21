import Inferno from 'inferno';
import Component from 'inferno-component';

//Styles
const textareaStyle = {
  display: 'block',
  boxSizing: 'border-box',
  marginBottom: '10px',
  border: '1px solid #CCC',
  width: '100%',
  minHeight: '100px',
  padding: '5px',
  background: '#FFF'
};
const inputStyle = {
  display: 'block',
  boxSizing: 'border-box',
  margin: '10px 0',
  border: '1px solid #CCC',
  width: '100%',
  padding: '5px',
  background: '#FFF',
  clear: 'both'
};
const buttonsStyle = {
  display: 'inline-block',
  marginRight: '15px',
  border: '1px solid #CCC'
};
const buttonStyle = {
  display: 'inline-block',
  padding: '4px 10px 5px 10px',
  background: '#FFF',
  fontWeight: 'bold'
};

//Helper functions
const getEditorStyle = visible => {
  return {
    display: (visible ? 'block' : 'none'),
    zIndex: 100,
    position: 'fixed',
  	top: '20px',
    left: '20px',
    boxSizing: 'border-box',
    border: '1px solid #FFF',
    minWidth: '220px',
    padding: '15px',
    background: 'rgba(255, 255, 255, 0.8)'
  };
};


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible : true
    };

    this.toggleHandler = this.toggleHandler.bind(this);
	}

  getUrl () {
    let origin = window.location.origin;
    let strParam = '?str=' + encodeURI(this.props.str);
    let strSize = '';
    if (this.props.viewBoxMod !== 0) {
      strSize = '&size=' + encodeURI(this.props.viewBoxMod);
    }
    return origin + strParam + strSize;
  }

  toggleHandler () {
    this.setState({visible : !this.state.visible});
  }

  render () {
    return (
      <div style={getEditorStyle(this.state.visible)}>
    		<textarea	style={textareaStyle}
    							placeholder="Type your message here"
    							value={this.props.str}
    							onInput={e => this.props.handleInput(e.target.value)} >
        </textarea>
        <input  type="text"
                style={inputStyle}
    						value={this.getUrl()} />
        <div style={buttonsStyle}>
          <button style={buttonStyle}
                  onClick={this.props.handleMinus}>-</button>
          <button style={buttonStyle}
                  onClick={this.props.handlePlus}>+</button>
        </div>
        <div style={buttonsStyle}>
          <button style={buttonStyle}
                  onClick={this.toggleHandler}>I'm done</button>
        </div>
        <div style={{clear : 'both'}}></div>
    	</div>
    );
  }
}

module.exports = Editor;
