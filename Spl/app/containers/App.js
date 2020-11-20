/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers/history';
import { alertActions } from '../actions';
import { PrivateRoute } from '../PrivateRoute';
import { HomePage } from '../components/Home';
import { LoginPage } from '../components/Login';
import { RegisterPage } from '../components/Register';
import { AddLessonPage } from '../components/add_lesson/AddNewLesson';
import { AddLessonElement } from '../components/lesson_components/AddLessonElement';
import ShowLesson from '../components/teaching_components/showLesson';
import TabView from '../components/TabView';
import AddNoun from '../components/add_lesson/AddNoun';
import openLessonComponent from '../components/openLesson';
import puzzle from '../components/puzzle/Puzzle';
import QuizChoiceComponent from '../components/MCQ/quizChoiceComponent';
import EditLesson from '../components/lesson_components/EditLessonElement';
// eslint-disable-next-line no-unused-vars

class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-unused-vars
    history.listen((location, action) => {
      // clear alert on location change
      // eslint-disable-next-line react/destructuring-assignment
      // eslint-disable-next-line react/prop-types
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="app-container">
        {/* eslint-disable-next-line react/prop-types */}
        {alert.message && (
          // eslint-disable-next-line react/prop-types
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/tabView" component={TabView} />
            <Route path="/quiz" component={QuizChoiceComponent}/>
            <Route path="/addLesson" component={AddLessonPage} />
            <Route path="/addLessonElement" component={AddLessonElement} />
            <Route path="/AddNoun" component={AddNoun} />
            <Route path="/editLesson" component={EditLesson}/>
            <Route path="/openLesson" component={openLessonComponent} />
            <Route path="/showLesson" component={ShowLesson} />
            <Route path="/puzzle" component={puzzle} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
// eslint-disable-next-line import/prefer-default-export
export { connectedApp as App };
