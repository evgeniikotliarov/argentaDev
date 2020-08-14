import React from "react";
import {useHistory} from "../../Router";
import {useInput} from "../hoc/fieldsHook";

export default function LogIn() {
  const { value:name, bind:bindName, reset:resetName } = useInput('');
  const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await localStorage.setItem('user', name);
      useHistory.push("/");
      resetName();
      resetPassword();
    } catch (e) {
    }
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <p>Регистрация</p>
        <div className="text-field">
          <input
            autoFocus
            type="text"
            {...bindName}
          />
          <span>Логин</span>
        </div>
        <div className="text-field">
          <input
            type="password"
            {...bindPassword}
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
