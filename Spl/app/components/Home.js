/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import AddLessonPopup from './lesson_components/AddLessonPopup';
import AddLessonPage from './add_lesson/AddNewLesson';
import studentsIcon from '../img/students.png';
import lessonIcon from '../img/lessons.png';
import teachingIcon from '../img/teaching.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { user } = this.props;
    return (
      <div className="container home">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>What do you want to do today?</h1>
            <div className="row">
              <div className="col-sm-2">
                <img src={studentsIcon} alt="all students" />
              </div>
              <div className="col-sm-10">
                <h2>All Students</h2>
                <h4>
                  Add a new student, edit existing student details or view
                  reports from here.
                </h4>
              </div>
            </div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <div className="row">
              <div className="col-sm-2">
                <img src={lessonIcon} alt="all lessons" />
              </div>
              <div className="col-sm-10">
                <Link to="/addLesson">
                  <h2>Add New Lesson</h2>
                </Link>
                {/* <Popup
                  trigger={<h2>All Lessons</h2>}
                  modal
                  closeOnDocumentClick
                >
                  <AddLessonPopup />
                </Popup> */}
                <h4>
                  Add new lessons, change previously added lessons, or start a
                  teaching session.
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <img src={teachingIcon} alt="start teaching" />
              </div>
              <div className="col-sm-10">
                <Link to="/openLesson">
                  <h2>All Lessons </h2>
                </Link>
                <h4>
                  Start a new teaching session. You can also start a self study
                  session, with additional sounds and prompts by the computer.
                </h4>
              </div>
            </div>
            <p>
              <Link to="/login">Logout</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const connectedHomePage = connect(mapState)(HomePage);
// eslint-disable-next-line import/prefer-default-export
export { connectedHomePage as HomePage };
