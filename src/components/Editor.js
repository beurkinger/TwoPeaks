import Inferno from 'inferno';

const editorStyle = {
  zIndex: 100,
  position: 'fixed',
	top: '2%',
	left: '2%'
};

const Editor = (props) => (
	<form style={editorStyle}>
		<textarea	type="text"
							placeholder="Type your message here"
							value={props.str}
							onInput={props.handleInput} ></textarea>
		<button onClick={props.handleMinus}>minus</button>
		<button onClick={props.handlePlus}>plus</button>
	</form>
);

module.exports = Editor;
