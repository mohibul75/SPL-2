import React, { Component } from 'react'
import axios from 'axios'
import './AddLession.css';

class AddLesson  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          selectedFile: null,
          file : null
      };

    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      fileSelectedHandler=event=>{
        console.log(event.target.files[0]);
        this.setState={
          selectedFile:event.target.files[0],
          file : URL.createObjectURL(event.target.files[0])
        }
      }

      fileUploadHandler =()=>{
        const fd=new FormData();
        fd.append('image', this.state.selectedFile ,this.state.selectedFile.name)
        axios.post('https://us-central1-fb-cloud-function-demo.cloudfunction.net/uploadFile',fd,{
        onUploadProgress: ProgressEvent=>{
          console.log('Upload progress : '+(ProgressEvent.loaaded/ProgressEvent.total)*100+'%')
        }
      })
        .then(res=>{
          console.log(res);
        });

      }
    
      render() {
        return (
          <div>
          <h3>Add New Lesson</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Lesson Name:
              <input type="text" placeholder="Enter Lesson Name" value={this.state.value} onChange={this.handleChange} /><br/>
             </label>
             <p>Choose Lesson Tumbnail</p>
             <input type="file" placeholder="Browse..." accept="image/*" onChange={this.fileSelectedHandler}/>
             <p>
                This Lesson thubnail is used for preview.<br/>
                Use an image that is esaily recognizable to you.
             </p><br/>
            <input type="submit" value="Submit" />
            <hr/>
          </form>
          {/* <input type="file" onChange={this.fileSelectedHandler}/>*/}
          </div>
        );
      }
    
}

export default AddLesson