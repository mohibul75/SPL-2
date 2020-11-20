import React from 'react';
import { Link } from 'react-router-dom';

class AddLessonPopup extends React.Component {
  render() {
    return (
      <div>
        <div className="nav nav-tabs">
          <button type="button" id="new">
            Add New Lesson
          </button>
          <Link to="/addLessonElement">Add Lesson Element</Link>
        </div>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="new">
            new lesson here
          </div>
        </div>
      </div>
    );
  }
}

export default AddLessonPopup;
