import React from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import './StoryForm.css';

class StoryCreateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			image:'',
      tname:'',
      tage:'',
      tgender:'',
      job:'',
      title:'',
      story:'',
      contact:'',
			buttonDisabled: false
		}
	}

	setInputValue(property,val) {
		val=val.trim();
		this.setState({
			[property]: val
		})
	}

	resetForm() {
		this.setState({
			image:'',
      tname:'',
      tage:'',
      tgender:'',
      job:'',
      title:'',
      story:'',
      contact:'',

			buttonDisabled: false
		})
	}

  render(){
	return( <div>
    <div style={{paddingLeft: "2%",paddingRight:"2%"}}>
			<div>
			</div>
			<br></br>
			<div style={{flexDirection:"column"}}>
			<text class="formText" style={{float:"left"}}>Target name </text>
			<InputField
					style={{float:"right"}}
					type='text'
					placeholder='Name'
					value={this.state.tname ? this.state.tname : ''}
					onChange={(val) => this.setInputValue('tname',val)}
				/>
        	<text class="formText" style={{float:"left"}}>Target Age </text>
			<InputField
					style={{float:"right"}}
					type='number'
					placeholder='Age'
					value={this.state.tage ? this.state.tage : ''}
					onChange={(val) => this.setInputValue('tage',val)}
				/>
        </div>

			<text class="formText" style={{float:"left"}}>Target Gender </text>
			<InputField
					style={{float:"right"}}
					type='text'
					placeholder='Gender'
					value={this.state.tgender ? this.state.tgender : ''}
					onChange={(val) => this.setInputValue('tgender',val)}
				/>
        	<text class="formText" style={{float:"left"}}>Target Contact </text>
			<InputField
					style={{float:"right"}}
					type='tel'
					placeholder='Contact No.'
					value={this.state.contact ? this.state.contact : ''}
					onChange={(val) => this.setInputValue('contact',val)}
				/>
			<br></br>
			<text class="formText" style={{float:"left"}}>What kind of job is the target capable of?</text>
			<InputField
					type='text'
					placeholder='Housework/Technician/Cleaning/Security'
					value={this.state.job ? this.state.job : ''}
          onChange={(val) => this.setInputValue('job',val)}
          className="inputfull"
          style={{float:"right"}}
				/>
        	<text class="formText" style={{float:"left"}}>Add Story Cover </text>
		
			<InputField
					type='url'
					placeholder='Image URL'
					value={this.state.image ? this.state.image : ''}
					onChange={(val) => this.setInputValue('image',val)}
				/>
        <text class="formText">Quote them</text>
        <textarea
					class="storyinput"
					
					placeholder='Something they said that made you smile! :)'
					value={this.state.title ? this.state.title : ''}
					onChange={(val) => this.setInputValue('title',val)}
				/>
			<text class="formText">What is their story?</text>
			<textarea
					class="storyinput"
					
					placeholder='Give a brief desciption of how you met the target?What their life story is ?'
					value={this.state.story ? this.state.story : ''}
					onChange={(val) => this.setInputValue('story',val)}
				/>
	<div  style={{paddingTop: "20px",alignSelf:"center"}}>
    	<SubmitButton
					text='Create Story'
					disable={this.state.buttonDisabled}
					onClick={() => this.doLogin()}
				/>
	</div>
    </div>
  </div>);
	}
};

export default StoryCreateForm;


      

