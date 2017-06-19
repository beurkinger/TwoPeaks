import Inferno, { linkEvent } from 'inferno';

const Editor = (props) => {
	return (
		<form id="editor">
			<input 	type="text"
							placeholder="Type your message here"
							value={props.str}
							onInput={(e) => props.handleInput(e.target.value)} />
		</form>
  );
}

module.exports = Editor;
