import React from 'react';
import { 
  Button,
  FormGroup,
  TextField,
  TextareaAutosize }
   from '@material-ui/core';

const StoryCreateForm = () => {
  return <div>
    This is the form to fill in to make stories.
    <div>
    <form>
      <FormGroup>
          <label style={{alignSelf:"center"}}> Display Image : {' '} 
          <input type="file" id="displayImg" label="Display Image"/>
          </label>
      </FormGroup>
      <FormGroup>
          <label style={{alignSelf:"center"}}> Target Name : {' '}
          <TextField id="targetName"/>      
          </label>  
        </FormGroup>
        <FormGroup>
          <label style={{alignSelf:"center"}}> What kind of job can the target do : {' '}
          <TextField id="targetJob" style={{width:"60vw",alignSelf:"center"}}/>
          </label>
        </FormGroup>
        <FormGroup>
          <label style={{alignSelf:"center"}}> Target's Story: </label>
          <TextareaAutosize id="targetStory" placeholder="Story" rowsMin={30}style={{width:"80vw",alignSelf:"center"}}/>
        </FormGroup>
      <Button variant="contained" color="primary">
        Submit
      </Button>
      </form>
      </div>
  </div>;
};

export default StoryCreateForm;


      

