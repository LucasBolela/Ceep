import React, {Component} from "react";
import './style.css';

export default class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.title = '';
    this.text = '';
    this.category = '';
  }
  
  handleTitleChange = (event) => {
    event.stopPropagation();
    this.title = event.target.value;
  };
  
  handleCategoryChange = (event) => {
    event.stopPropagation();
    this.category = event.target.value;
  };

  handleTextChange = (event) => {
    event.stopPropagation();
    this.text = event.target.value;
  };

  createNote = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title,this.text, this.category);
    // console.log({title: this.title, text: this.text})
  };

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this.createNote}
      >
        <input
          type="text"
          placeholder="Title"
          className="form-cadastro_input"
          onChange={this.handleTitleChange}
          />
        <input
          type="text"
          placeholder="Category"
          className="form-cadastro_input"
          onChange={this.handleCategoryChange}
          />
        <textarea
          placeholder="Write your note..."
          className="form-cadastro_input"
          cols="30"
          rows="15"
          onChange={this.handleTextChange}
        />
        <button type="submit" className="form-cadastro_input form-cadastro_submit">
          New Note
        </button>
      </form>
    );
  }
}