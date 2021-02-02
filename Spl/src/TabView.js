import { Tabs, Tab } from 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import AddLesson from './AddNewLesson'
import './AddLession.css';
import AddNoun from './AddNoun';
 
class TabView extends Component {
  handleChange(e) {
    this.setState({ value: e })
    console.log(e)
  }
 
  render() {
    const headers = ['Open Lesson', 'Add New Lesson', 'Add Lesson Element']
 
    return (
      <div>
        <Tabs headers={headers}>
          <Tab>
            <div>
              <h2>Open Lesson</h2>
            </div>
          </Tab>
          <Tab>
            <h2>Add New Lesson</h2><hr/>
            <AddLesson/>
            <AddNoun/>
          </Tab>
          <Tab>
            <h2>Add Lesson Element</h2>
          </Tab>
        </Tabs>
      </div>
    )
  }

}

export default TabView;
 