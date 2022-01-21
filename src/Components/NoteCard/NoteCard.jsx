import React from 'react';
import "./style.css";
class NoteCard extends React.Component {
  render() { 
    return (
      <section className="card-content">
        <header className="card-header">
          <h3 className="card-title">{this.props.title}</h3>
        </header>
        <p className="card-text" >{this.props.text}</p>
      </section>
    );
  }
}
 
export default NoteCard;