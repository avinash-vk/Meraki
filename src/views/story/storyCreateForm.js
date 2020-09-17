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
			job:'',
			story:'',
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
			job:'',
			story:'',
			buttonDisabled: false
		})
	}

  render(){
	return( <div>
    <div class="rectangle">

			<div>

				<div class="ellipse">
				</div>
				<div>
					<h1 class="meraki">Meraki</h1>
				</div>

			</div>

		</div>

    <div style={{paddingTop: "5%",paddingLeft: "2%",paddingRight:"2%"}}>
			<div>
			<h1 class="formText" style={{float:"left"}}>Add image/video : </h1>
			<hr style={{color:"white"}}></hr>
			<InputField
					type='file'
					placeholder='Image'
					value={this.state.image ? this.state.image : ''}
					onChange={(val) => this.setInputValue('image',val)}
				/>
			</div>
			<br></br>
			<div style={{flexDirection:"column"}}>
			<h1 class="formText" style={{float:"left"}}>Target name :</h1>
			<InputField
					style={{float:"right"}}
					type='text'
					placeholder='Name'
					value={this.state.tname ? this.state.tname : ''}
					onChange={(val) => this.setInputValue('tname',val)}
				/>
			</div>
			<br></br>
			<h1 class="formText">What kind of job is the target capable of?</h1>
			<InputField
					type='text'
					placeholder='Housework/Technician/Cleaning/Security'
					value={this.state.job ? this.state.job : ''}
					onChange={(val) => this.setInputValue('job',val)}
				/>
			<h1 class="formText">What is your story?</h1>
			<textarea
					class="storyinput"
					type='story'
					placeholder='Give a brief desciption of how you met the target'
					value={this.state.story ? this.state.story : ''}
					onChange={(val) => this.setInputValue('story',val)}
				/>
	<div class="centered" style={{paddingTop: "20px"}}>
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


      

