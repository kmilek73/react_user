import React, { Component } from "react";
import "./UserList.css";


function UsersList(props) {
  // tworzenie listy

  let usersList = props.usersList;
  let usersLiElements = usersList.map((user) => (
    <span
      title="Kliknij aby usunąc"
      onClick={() => props.removeUserMethod(user.id)}
    >
      {" "}
      <li key={user.id}>{user.name} </li>
    </span>
  ));

  return <ul className="list">{usersLiElements}</ul>;
}

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    //console.log('Kliknieto: ',this._inputName.value )
    let i = this._inputName.value;
    let icon = i.length;
    //console.log(icon)
    if (icon > 1) {
      let newUser = {
        //tablica nowego usera
        id: Date.now(),
        name: this._inputName.value,
      };
      this.setState((state) => {
        return {
          users: state.users.concat(newUser), //zmiana stanu dodanie nowego usera
        };
      });
      this._inputName.value = ""; // po klkinieciu wstawiamy pustego stringa w input
    } else {
      alert("Wpisz imię");
    }
  }

  removeUser = (userID) => {
    this.setState((state) => {
      return {
        users: state.users.filter((user) => user.id !== userID),
      };
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(element) => {
              this._inputName = element;
            }}
          />
          <button type="submit">Dodaj Uzytkownika</button>
        </form>
        <UsersList
          usersList={this.state.users}
          removeUserMethod={this.removeUser}
        />
      </div>
    );
  }
}

export default UserList;
