import React, { Component } from 'react';

class Note extends Component {
	constructor(props) {
		super(props);
		
		this.state = { edit: false };
		this.display = this.display.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.edit = this.edit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	toggleEdit() {
		this.setState({ edit: !this.state.edit });
	}

	display() {
		let note = this.props.note;
		return(
			<div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <span className="card-title">{note.title}</span>
            <p>{note.body}</p>
            <i>Author: {note.author}</i>
          </div>
          <div className="card-action">
            <a onClick={this.toggleEdit}>Edit</a>
            <a onClick={() => this.props.deleteNote(this.props.index)}>Delete</a>
          </div>
        </div>
      </div>
		);
	}

	edit() {
		let note = this.props.note;
		return(
			<div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color }}>
          <div className="card-content white-text">
            <input type="text" ref="editNoteTitle" defaultValue={note.title} placeholder="Title" required />
            <textarea ref="editNoteBody" defaultValue={note.body} placeholder='Note Contents' required/>
            <i>Author:</i> <input type="text" ref="editNoteAuthor" defaultValue={note.author} placeholder="Author" required />
            <input type="color" ref='editNoteColor' defaultValue={note.color} required />
          </div>
          <div className="card-action">
            <a onClick={this.toggleEdit}>Cancel</a>
            <a onClick={this.handleEdit}>Save</a>
          </div>
        </div>
      </div>
		);
	}

	handleEdit() {
		let noteTitleValue = this.refs.editNoteTitle.value;
		let noteBodyValue = this.refs.editNoteBody.value;
		let noteAuthorValue = this.refs.editNoteAuthor.value;
		let noteColorValue = this.refs.editNoteColor.value;
		this.props.editNote(this.props.index,
													noteTitleValue,
													noteBodyValue,
													noteAuthorValue,
													noteColorValue,
													);
		this.toggleEdit();
	}

	render() {
		if(this.state.edit) {
			return(this.edit());
		} else {
			return(this.display());
		}
	}
}

export default Note;