import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/user.actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      this.props.login(username, password);
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h2>Login to your administration account.</h2>
              <h5>
                This application is here to help you to teach vocabulary to your
                students, and to keep track of their progress.
              </h5>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h5>Let's get started.</h5>
            </div>
          </div>
        </div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div
                  className={`form-group row${
                    submitted && !username ? ' has-error' : ''
                  }`}
                >
                  <label htmlFor="username" className="col-sm-2 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  {submitted && !username && (
                    <div className="help-block">Username is required</div>
                  )}
                </div>
                <div
                  className={`form-group row${
                    submitted && !password ? ' has-error' : ''
                  }`}
                >
                  <label htmlFor="password" className="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
                  {submitted && !password && (
                    <div className="help-block">Password is required</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grouped-button-bottom-bar">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                  {loggingIn && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                  <Link to="/register" className="btn btn-link">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
// eslint-disable-next-line import/prefer-default-export
export { connectedLoginPage as LoginPage };
