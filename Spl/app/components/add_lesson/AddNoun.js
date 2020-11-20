/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import './AddLession.css';


class AddNoun extends Component{
    constructor(props){
        super(props);
        this.state={
            type : '',
            word : '',
            isAssociation: false,
            image:null,
            audio:null,
            video:null,
            errors: {},
            pending: false,
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleType(event){
        this.setState({
            type:event.target.value
        });
    }

    handleWord(event){
        this.setState({
            word:event.target.value
        });
    }

    handleAssociation(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    imageHandler(event){
        this.setState({
            image:event.target.files[0]

        });
    }

    audioHandler(event){
        this.setState({
            audio:event.target.files[0]

        });
    }
    videoHandler(event){
        this.setState({
            video:event.target.files[0]

        });
    }

    handleSubmit(event){

        event.preventDefault();
        const element = {

            type : ''||this.state.type,
            word: '' || this.state.word,
            association:this.state.association,
            images: this.state.images,
            audio:this.state.audio,
            video:this.state.video
          };
          this.setState({ pending: true }).bind(this);
          if (element) {
            this.props.pending(element);
          }

    }
    render(){
        return (
       <div>

          <div class="left"><h2>Step 1 : Add Noun</h2></div>
          <p className='right'>
                you can add as many you want. use + button to add more.<br/>
                Click next if you add verb to this lesson . otherwise Click Save
            </p>
            <br/>
          <form onSubmit={this.handleSubmit}>
          <div class="left">
            <label>
                Type : <input type="text" placeholder="Enter Lesson Type" value={this.state.type} onChange={this.handleType} /><br/>
            </label><br/>
            <label>
                Word : <input type="text" placeholder="Enter Lesson Word"  value={this.state.Word} onChange={this.handleWord} /><br/>
            </label><br/>
            <label>
                 Association :
                 <input name="isAssociation" type="checkbox" checked={this.state.isAssociation}
                  onChange={this.handleAssociation} />
            </label><br/>
            </div>
                  <p className='right'>
                    Hint : check this if you would like to add any association with this noun.<br/>
                    Note : if you have any association in a lesson ,you can not skip adding <br/>
                    any type of elements(i.e:activities , verb etc).
                  </p><br/>


            <label>
                Pictures :
                <input type="file" placeholder="Browse..." accept="image/*" onChange={this.imageHandler}/><br/>
            </label><br/><br/>
            <label>
                Audios :
                <input type="file" placeholder="Browse..." accept="audio/*" onChange={this.audioHandler}/><br/>
            </label><br/><br/>
            <label>
                 Videos :
                 <input type="file" placeholder="Browse..." accept="video/*" onChange={this.videoHandler}/><br/>
            </label><br/><br/>
          </form>
          <hr/>
         <div className='right'>
         <button>Cancel</button>
         <button>Save</button>
         <button>Next</button>
         </div>
       </div>
        );
    }

}
export default AddNoun
