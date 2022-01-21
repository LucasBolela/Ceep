import React, { Component } from "react";
import NoteCard from "../NoteCard";
import "./style.css";
export default class NoteList extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <ul className="note-list">
        {this.props.notes.map((notes, key) => {
          return (
            <li key={key} className="card">
              <NoteCard title={notes.title} text={notes.text} />
              <div className="category">{notes.category}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
