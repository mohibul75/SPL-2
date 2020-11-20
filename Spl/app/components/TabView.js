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
import './add_lesson/AddLession.css';
import openLessonComponent from './openLesson';
import ShowLesson from './teaching_components/showLesson' ;

class TabView extends Component {
  render() {
    const headers = ['Open Lesson', 'Add New Lesson', 'Add Lesson Element'];

    return (
      <div className="left">

      <RoutedTabs
       // startPathWith={match.path}
        tabClassName="tab-link"
        activeTabClassName="active"
      >

          <NavTab className='navBarLink' to="/openLesson">Open Lesson </NavTab>
          <NavTab className='navBarLink' to="/AddLesson">Add New Lesson </NavTab>
          <NavTab className='navBarLink' to="/addLessonElement">Add Lesson Element  </NavTab>

      </RoutedTabs>
      </div>
    );
  }
}

export default TabView;
