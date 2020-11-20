/* eslint-disable prettier/prettier */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Tabs, Tab } from 'react-tab-view';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";
import { Component } from 'react';
import { lesson } from '../../db/db';



const ipc = require('electron').ipcRenderer;
const db = require('../../db/db');

class openLessonComponent extends Component {



  constructor() {
    super();
    this.state = {
      lesson : [] ,
      retrieveLesson : false,
      retrieveWord : false,
      word:[],
      type:[]
   };

   this.retrieveInfo = this.retrieveInfo.bind(this);
   this.setLesson = this.setLesson.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  retrieveInfo(){

     new Promise((resolve, reject) => {
      ipc.send( 'FIND_ALL_LESSON' );

      ipc.on('ALL_LESSON_FETCHED', (event, result) => {
        if (result.text !== 'success') {
          // eslint-disable-next-line no-shadow
          const error = result.message;
           reject(error);
        }
         resolve(result);
      });
    })
    .then(info =>{
      this.setState({lesson : info.lessons});
      this.setState({retrieveLesson : true});
    }).catch(message=>{
       console.log(message);
    });

  }

  // eslint-disable-next-line class-methods-use-this
   async setLesson(){
    await this. retrieveInfo();
    // await this.setWord();

   /* return lName.then(message => {
		return  message;

    }) ; */
  }

 /* to={{
  pathname: '/showLesson',
  state: {
    name: lessonList.name
  }
}} */
/* {this.setWord(lessonList.lesson_name)}
             {this.state.word.map((wdInfo,index)=>(
              <li>{wdInfo}</li>
             ))}*/

  // console.log(lName);
  // console.log(typeof(lName));
  // console.log(Array.isArray(lName));

 //  return lName;
 // }

  render() {
    const headers = ['Open Lesson', 'Add New Lesson', 'Add Lesson Element'];
    // eslint-disable-next-line no-undef
	//let allLesson=[];
   // allLesson = this.setLesson();
   if(this.state.retrieveLesson==false){
    this.setLesson();
   }
 //  this.setWord('bird');
   console.log('yesss we can');
   console.log(this.state.retrieveLesson);
    return (
      <>
        <div className="left">
        {
          <div >
            {this.state.lesson.map((lessonList)=>(
              <div className="related_links">
                <li >
                  <Link  className="btn btn-link"
                  to={{
                    pathname: '/showLesson',
                    state: {
                      name: lessonList.word
                    }}}>
               { lessonList.word}
               {'                         Lesson Category:'}
               { lessonList.word_category}
               {'                         Lesson Name:'}
               {lessonList.lesson_name}

              </Link></li>
              </div>
            ))}
          </div>
        }
        </div>
     </>
    );
  }
}


export default openLessonComponent;



