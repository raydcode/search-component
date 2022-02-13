import React, { Component } from 'react';

import CardList from './components/card-list';
import SearchBox from './components/search-box';

import './app.css';

const url = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      query: '',
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  componentDidMount() {
    fetch(url)
      .then((res) => {
        res.json().then((data) => this.setState({ users: data }));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { users, query } = this.state;

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
   

    return (
      <div className="App">
        <h1>User Search</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
