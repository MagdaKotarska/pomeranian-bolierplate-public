import React, { useState } from 'react';
import './style.css';

const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};
const containsEmail = (str) => {
  const regexExp =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  return regexExp.test(str);
};

export function FormsValidation() {
  const [error, setError] = useState('');

  const isPasswordValid = (pass, repeat) => {
    if (pass !== repeat) {
      setError('Hasła nieprawidłowe');
      return false;
    }
    if (!containsUppercase(pass)) {
      setError('Brak wielkiej litery');
      return false;
    }
    if (pass.length < 10) {
      setError('Hasło za krótkie');
      return false;
    }
    setError('');
    return true;
  };

  const isEmailValid = (mail) => {
    if (!mail) {
      setError('Brak maila');
      return false;
    }
    if (!containsEmail(mail)) {
      setError('mail błędny');
      return false;
    }
    setError('');
    return true;
  };
  const sendFormData = (data) => {
    data.preventDefault();

    const password = data.target.password.value;
    const passwordRepeat = data.target.passwordRepeat.value;
    const email = data.target.email.value;
    if (isPasswordValid(password, passwordRepeat) && isEmailValid(email)) {
      console.log('OK');
    } else {
      console.log('Error');
    }
  };

  return (
    <div className="forms-validation">
      <form className="form" onSubmit={sendFormData}>
        {' '}
        <input type="text" placeholder="Wpisz hasło" name="password" />
        <br />
        <input type="text" placeholder="powtórz hasło" name="passwordRepeat" />
        <br />
        <input type="email" placeholder="Wpisz adres e-mail" name="email" />
        <br />
        {error}
        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
}
