import React from 'react';
import {withRouter} from 'react-router-dom';

class LogIn extends React.Component {
  state = {
    name: '',
    password: '',
    errorMessage: null
  };

  render = () => {
    return (
      <div className="login">
        <h1>ПСТИ</h1>
        <p>Подсистема сбора телеметрической информации</p>
        <a href={"/log-in"} className="department-link">Link</a>
        <form>
          {this.renderErrorMessage()}
          <div className="text-field">
            <input
              type="text"
              className={this.state.name ? 'is-active': null}
              placeholder="Имя пользователя"
              onChange={this.onEmailFieldChange}
              value={this.state.name}/>
            <span>Логин</span>
          </div>
          <div className="text-field">
            <input
              type="password"
              className={this.state.password ? 'is-active': null}
              placeholder="Ввести пароль"
              onChange={this.onPasswordFieldChange}
              value={this.state.password}/>
            <span>Пароль</span>
          </div>
          <button
            className="button"
            onClick={this.onLoginClick}>
            Войти
          </button>
        </form>
      </div>
    )
  };

  renderErrorMessage() {
    return this.state.errorMessage ?
      <div className="error-message">{this.state.errorMessage}</div> : null;
  }

  onEmailFieldChange = (event) => {
    const name = event.target.value;
    this.setState({name});
  };

  onPasswordFieldChange = (event) => {
    const password = event.target.value;
    this.setState({password});
  };

  onLoginClick = (event) => {
    event.preventDefault();
    const data = {name: this.state.name, password: this.state.password};
    localStorage.setItem('name', data.name);
    const errorMessage = data.name && data.password ? null : data.name ? 'Введите пароль' :
      data.password ? 'Введите имя' : 'Введите имя и пароль';
      this.setState({errorMessage});
    if ((this.state.name !== 'admin') && (this.state.password !=='admin'))
      return;
    this.props.history.push('/main');
  };
}

export default withRouter(LogIn);
