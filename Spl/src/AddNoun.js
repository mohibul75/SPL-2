import React, {Component} from 'react'
import SuggestionBox from './SuggestionBox'
import './AddLession.css';


class AddNoun extends Component{
    constructor(props){
        super();
        this.state={
            type : '',
            word : '',
            isAssociation:true,
            image:null,
            audio:null,
            video:null
        }
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
    render(){
        return (
       <div>
          
          <div class="left"><h2>Step 1 : Add Noun</h2></div>
          <p>
                you can add as many you want. use + button to add more.<br/>
                Click next if you add verb to this lesson . otherwise Click Save
            </p>
            <br/>
          <form>
          <div class="left">
            <label>
                Type : <input type="text" placeholder="Enter Lesson Type" value={this.state.type} onChange={this.handleType} /><br/>
            </label>
            <label>
                Word : <input type="text" placeholder="Enter Lesson Word"  value={this.state.Word} onChange={this.handleWord} /><br/>
            </label>
            <label>
                 Association : 
                 <input name="isAssociation" type="checkbox" checked={this.state.isAssociation}
                  onChange={this.handleAssociation} />
            </label>
            </div>
                  <p>
                    Hint : check this if you would like to add any association with this noun.
                    Note : if you have any association in a lesson ,you can not skip adding 
                    any type of elements(i.e:activities , verb etc).
                  </p><br/>
            
                 
            <label>
                Pictures :
                <input type="file" placeholder="Browse..." accept="image/*" onChange={this.imageHandler}/><br/>
            </label>
            <label>
                Audios : 
                <input type="file" placeholder="Browse..." accept="audio/*" onChange={this.audioHandler}/><br/>
            </label>
            <label>
                 Videos :
                 <input type="file" placeholder="Browse..." accept="video/*" onChange={this.videoHandler}/><br/>
            </label>
          </form>
          <hr/>
          <button>Cancel</button>
          <button>Save</button>
          <button>Next</button>
       </div>
        );
    }

}
export default AddNoun 