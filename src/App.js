import './App.css';
import logo from '../src/logo.svg';
import { Component } from 'react';
import GetUserCall from './HTTP Calls/GetUserCall';
import PostUserCall from './HTTP Calls/PostUserCall';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    const list1 = "Enter the form field and hit the 'Add Me' button to store the record the MongoDB";
    const list2 = "Click on 'Get Users to get the list of stored records in MongoDB'";
    const list3 = "Each rec has a column to deleted the delete, which remove's from the Database"
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="note">
          <h2 className="note-header"> How it works</h2>
          <li className="note-items">{list1}</li>
          <li className="note-items">{list2}</li>
          <li className="note-items">{list3}</li>
        </div>
        <PostUserCall>
        </PostUserCall>
        <GetUserCall>
        </GetUserCall>
      </div>
    )
  }
}

export default App;
