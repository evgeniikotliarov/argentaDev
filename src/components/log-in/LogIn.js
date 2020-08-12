import React, {useState} from "react";
import {useHistory} from "../../Router";

export default function LogIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await localStorage.setItem('user', name);
      useHistory.push("/");
    } catch (e) {
    }
  }
  return (
    <div className="login">
      <p>Страница входа</p>
      <a href={"/log-in"} className="department-link">Link</a>
      <form onSubmit={handleSubmit}>
        <div className="text-field">
          <input
            autoFocus
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span>Логин</span>
        </div>
        <div className="text-field">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span>Пароль</span>
        </div>
        <button
          type="submit"
          className="button"
          disabled={!validateForm()}
        >
          Войти
        </button>
      </form>
    </div>
  )
}
