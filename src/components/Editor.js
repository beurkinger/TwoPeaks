import Inferno from 'inferno';

const editorStyle = {
  zIndex: 100,
  position: 'fixed',
	top: 0,
	left: 0
};

const Editor = (props) => (
	<form style={editorStyle}>
		<textarea	type="text"
							placeholder="Type your message here"
							value={props.str}
							onInput={(e) => props.handleInput(e.target.value)} ></textarea>
	</form>
);

module.exports = Editor;
