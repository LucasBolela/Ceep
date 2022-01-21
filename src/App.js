import React, {Component} from "react";
import NoteList from "./Components/NoteList";
import RegisterForm from "./Components/RegisterForm";
import './assets/index.css';
import './assets/App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      notes: []
    };
  };

  createNote = (title, text, category) => {
    this.setState({
      notes: [...this.state.notes, {title, text, category}]
    })
  };

  render() {
    return (
      <div className="conteudo">
        <RegisterForm createNote={this.createNote} />
        <NoteList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
