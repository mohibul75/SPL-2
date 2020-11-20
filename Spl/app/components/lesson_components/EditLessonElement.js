import React, { Fragment } from 'react';
import { Slide } from 'react-slideshow-image';
import { connect } from 'react-redux';
import { store } from '../../helpers/store';
import { Link } from 'react-router-dom';
import { editLessonActions } from '../../actions/EditExistingLessonAction';



class EditLesson extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    lesson_name: '',
    lesson_category:''
    }
  }
  componentDidMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.dispatch(editLessonActions.fetchLesson(this.state.lesson_name));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSelectChange(e) {
    this.setState({ lesson_name: e.target.value });
  }




  render() {
    // eslint-disable-next-line react/prop-types
    const { isLoadedAlLesson,isLoadingAlLesson, AlLessons } = this.props;

    if (isLoadingAlLesson) {
      console.log('yess com');
      console.log('comp');
      console.log(this.props.isLoadedAlLesson);
      console.log(this.props.AlLessons);
      return <div><h4>Loading...</h4></div>;
    }

    let Category= [];
    Category=AlLessons.lessons;

    return (
      <>
      <div className="add-element">
        <form name="element_form" onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Select
                title="Lesson "
                name="Lesson "
                options={Category}
                value={this.state.lesson_name}
                placeholder="Select  Lesson"
                handleChange={this.handleSelectChange}
                />
              </div>
            </div>
          </div>
          <div className="grouped-button-bottom-bar">
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <Popup
                      trigger={
                        <button className="btn btn-default" type="button">
                          Cancel
                        </button>
                      }
                      modal
                    >
                      {close => (
                        <div className="warning-modal">
                          <div>
                            <h4>Are you Sure?</h4>
                            <p>
                              No changes will be saved. please click confirm to
                              discard all information
                            </p>
                            <Link to="/" className="btn btn-default">
                              Confirm
                            </Link>
                            <button
                              className="btn btn-light"
                              type="button"
                              onClick={() => {
                                console.log('modal closed ');
                                close();
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>

                    <Link
                      to={{
                        pathname: '/addLessonElement',
                        state: {
                          name: this.state.lesson_name
                        }
                      }}
                      className="btn btn-link"
                    >
                      Next
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </form>
        </div>
      </>
    );
  }
}

function mapStateToProps (state){
    console.log('sjois');
    console.log(state);
  return {
    isLoadedAlLesson: state.alLessonName.isLoadedAlLesson,
    isLoadedAlLesson: state.alLessonName.isLoadedAlLesson,
    AlLessons: state.alLessonName.data
  }
}

export default connect(mapStateToProps)(EditLesson);
