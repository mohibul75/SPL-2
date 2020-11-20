/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions/user.actions';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: '',
        username: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.fullName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h2>Register as a teacher to start.</h2>
              <h5>
                This application is here to help you to teach vocabulary to your
                students, and to keep track of their progress.
              </h5>
            </div>
          </div>
        </div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className={'form-group row' + (submitted && !user.fullName ? ' has-error' : '')}>
                  <label htmlFor="fullName" className="col-sm-4 col-form-label">Full Name</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="fullName" value={user.fullName}
                      onChange={this.handleChange}
                    />
                  </div>
                  {submitted && !user.fullName &&
                  <div className="help-block">Name is required</div>
                  }
                </div>
                <div className={'form-group row' + (submitted && !user.username ? ' has-error' : '')}>
                  <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="username" value={user.username}
                           onChange={this.handleChange}/>
                  </div>
                  {submitted && !user.username &&
                  <div className="help-block">Username is required</div>
                  }
                </div>
                <div className={'form-group row' + (submitted && !user.password ? ' has-error' : '')}>
                  <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                  }
                </div>

              </div>
            </div>
          </div>
          <div className="grouped-button-bottom-bar">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                  {registering &&
                  <img
                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                  }
                  <Link to="/login" className="btn btn-link">
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>

      </Fragment>

    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
