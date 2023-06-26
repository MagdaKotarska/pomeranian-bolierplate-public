import React from 'react';
import './styles.css';

export function UsersList() {
  /*React.useCallbackeffect(() => {
    console.log(window.localStorage.getItem('users'));
    setUsers(window.localStorage.getItem('users'));
    setUsers(JSON.parse(window.localStorage.getItem('users')));
  }); */
  const [inputValue, setInputValue] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const sendFormValue = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: users.lenght + 1, name: inputValue },
    ]);
    setInputValue('');
  };
  const removeValue = (id) => {
    setUsers((currentState) => currentState.filter((item) => item.id !== id));
  };
  const sendValuesToStorage = () => {
    window.localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div className="users-list">
      <div className="users-list-input-wrapper">
        <div className="users-list-input">
          <div>NICK</div>
          <input
            type="text"
            placeholder="Jaras_2000"
            onChange={changeInputValue}
            value={inputValue}
            name="Nick input"
          />
          <div>
            <button onClick={sendFormValue} disabled={!inputValue.length}>
              Dodaj
            </button>
          </div>
        </div>
        <div className="users-list-list-wrapper">
          {users.map(({ id, name }) => (
            <div key={id}>
              <h3>{name}</h3>
              <span onClick={() => removeValue(id)}>Usun</span>
            </div>
          ))}
          <button onCLick={sendValuesToStorage}>Wyślij do storage</button>
        </div>
      </div>
    </div>
  );
}
