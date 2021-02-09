import React, { Component } from 'react'
import axios from 'axios'
import '../HTTP Calls/GetUserCall.css';
class GetUserCall extends Component {
    constructor(props) {
        super(props);
        this.getUserCall = this.getUserCall.bind(this);
        this.deleteUserCall = this.deleteUserCall.bind(this);
        this.state = {
            posts: []
        }
    }
    getUserCall() {
        axios.get('http://localhost:3000/api/contacts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data });
            })
            .catch(error => { console.log(error) })
    }
    deleteUserCall(id){
        axios.delete('http://localhost:3000/api/contact/' + id)
        .then(response => {
            console.log(response);
            this.getUserCall();
        })
        .catch(error => { console.log(error) })
    }

    render() {
        let { posts } = this.state;
        let entries= [];
        if (posts && posts.length) {
            entries =
            posts.map(i => {
                return (
                    <tr key={i._id}>
                        <td>{i.first_name}</td>
                        <td>{i.last_name}</td>
                        <td>{i.phone}</td>
                        <td><button className="submitClass"onClick={() => {this.deleteUserCall(i._id)}}>Delete</button></td>
                    </tr>)
            })
        }
        return (
            <div>
                <div className="submit-container">
                    <button className="submitClass"onClick={this.getUserCall}> Get Users </button>
                </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone No.</th>
                            <th>Delete Rec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries}
                    </tbody>
                </table >
            </div>
        )
    }
}

export default GetUserCall
