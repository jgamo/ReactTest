import React, { Component } from 'react';
import UsersTable from './UsersTable'
import ResultForm from './ResultForm'

class App extends Component {

  state = {
    resultsData: [

    ],
  };

  componentDidMount() {

    const url = 'https://randomuser.me/api?results=20';

      fetch(url)
        .then(result => {
            result.json().then( (data) => {
              console.log(data);

              var finalState = this.state.resultsData;

              for(var datos in data.results){
                var usuario = data.results[datos];

                finalState.push({
                  username: usuario.login.username,
                  password: usuario.login.sha1,
                  nombre:   usuario.name.title +" "+ usuario.name.first + " "+ usuario.name.last,
                  edad:     usuario.dob.age,
                  genero:   usuario.gender,
                  email:    usuario.email,
                  phone:    usuario.cell,
                  pict:     usuario.picture.medium,
                });
              }

              this.setState({resultsData:finalState});
            });
        });
    }

  handleSubmit = (matchResult) =>{
      this.setState ({ resultsData: [...this.state.resultsData ]});
  }
  render() {

    return (
      <div className="wrapper">
        <div className="container">
          <h1>Informacion de los Usuarios</h1>
          <br/><br/>
          <UsersTable results={this.state.resultsData}/>
          <ResultForm handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;