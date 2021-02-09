import React, { Component } from 'react'
import axios from 'axios'
import '../HTTP Calls/PostUserCall.css';
export class PostUserCall extends Component {
    constructor(props) {
        super(props)

        this.state = { first_name: '', last_name: '', phone: '' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let temp = this.state;
        temp[event.target.id] = event.target.value;
        this.setState(temp);
      }
      handleSubmit(event) {
        axios.post('http://localhost:3000/api/contact', this.state)
          .then((response) => console.log(response))
          .catch((error) => {
            console.error(error);
          });
          document.forms['formID'].reset();
        event.preventDefault();
      }

    render() {
        return (
            <div className="App">
                <div>
                    <form name="formID" className="formClass" onSubmit={this.handleSubmit}>
                        <input type="text" className="inputBoxStyle" placeholder="First Name" id="first_name" onChange={this.handleChange} />
                        <input type="text" className="inputBoxStyle" placeholder="Last Name" id="last_name" onChange={this.handleChange} />
                        <input type="text" className="inputBoxStyle" placeholder="Phone No." id="phone" onChange={this.handleChange} />
                        <input type="submit" value="Add Me" />
                    </form>
                </div>
            </div>
        )
    }
}

export default PostUserCall
