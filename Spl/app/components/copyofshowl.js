/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

const ipc = require('electron').ipcRenderer;
const db = require('../../../db/db');

class ShowLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson_name: 'bird',
      word: [],
      image: []
    };

    this.findLessonELement = this.findLessonELement.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  findLessonELement() {
    return new Promise((resolve, reject) => {
      ipc.send('GET_LESSON_DATA', this.state.lesson_name);

      ipc.on('LESSON_DATA_FETCHED', (event, result) => {
        if (result.text !== 'success') {
          // eslint-disable-next-line no-shadow
          const error = result.message;
          reject(error);
        }
        resolve(result);
      });
    })
      .then(info => {
        return info.data;
      })
      .catch(message => {
        return message;
      });
  }

  async retrieveData() {
    console.log('lets start');
    const data = await this.findLessonELement();
    const wordInfo = data.wordName;
    const imagePath = data.slideImages;

    console.log(data);

    this.setState({
      word: wordInfo
    });

    this.setState({
      image: imagePath
    });
  }

  render() {
    // this.retrieveData();

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    };

    const slideImages = [
      './images/slide_2.jpg',
      './images/slide_3.jpg',
      './images/slide_4.jpg'
    ];

    return (
      <>
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span>Slide 1</span>
                {/* <h4> this.state.word[0] </h4>
               <div className="image-container">
                  <img src={this.state.image[0]} alt="slideimage" />
    </div>  */}
              </div>
            </div>
          </Slide>
        </div>
      </>
    );
  }
}

export default ShowLesson;
