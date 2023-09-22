import './App.css';
import Form from './components/Form';
import CardList from './components/CardList'
import React from 'react';




class App extends React.Component{
  state = {
        profiles: [],
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <>
        <div className="header">
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export default App;
