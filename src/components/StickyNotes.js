import React, { Component } from 'react';
import StickyNoteForm from './StickyNoteForm';
import Note from './Note';

class StickyNotes extends Component {
	constructor(props) {
		super(props);
		
		this.state = { notes: [] };

		this.addNote = this.addNote.bind(this);
		this.displayNotes = this.displayNotes.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.editNote = this.editNote.bind(this);
	}

	addNote(title, body, author, color) {
		let note = { title, body, author, color };
		this.setState({ notes: [note, ...this.state.notes]});
	}

	editNote(index, titleValue, bodyValue, authorValue, colorValue) {
    let notes = this.state.notes;
     notes[index].title = titleValue;
     notes[index].body = bodyValue;
     notes[index].author = authorValue;
     notes[index].color = colorValue
     this.setState({ notes })
	}

	  deleteNote(index) {
    let notes = this.state.notes
    notes.splice(index, 1)
    this.setState({ notes })
  }

	displayNotes() {
		let notes = this.state.notes;
		if(notes.length) {
			// loop the notes and render a note component
			return notes.map( (note, index) => {
				return(<Note 
								key={index}
								note={note}
								index={index}
								deleteNote={this.deleteNote}
								editNote={this.editNote}
							/>
						);
			});
		} else {
			return(<h4>No notes, please add one.</h4>);
		}
	}

	render() {
		return(
			<div>
				<StickyNoteForm addNote={this.addNote} />
				<hr />
				<div className="row">
					{this.displayNotes() }
				</div>
			</div>
		);
	}
}

export default StickyNotes;