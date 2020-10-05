import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {getPresignedUpload} from 'views/presignedurl';

function Upload() {
  const [state, setState] = useState();

  const handleChange = event => {
    setState({ //Passes the selected file to the STATE
      file: event.target.files[0],
      loaded: 0
    })
  }

  const handleClick = () => {
    const data = new FormData();
    var url = ""
    data.append('file', state.file); //our selected file data
    url = getPresignedUpload() //change to make api call from backend to getPresigned URL
    console.log(url)
    axios.post(url, data,{}) //Send Post with endpoint URL and our form data with our file in it
      .then(res => console.log(res.statusText));//then we print the response status
  }

  return (
    //Code modified from https://bootsnipp.com/snippets/DOXy4
    <Form>
      <FileInput className="files">
        <label> Upload Your File </label>
        <input
          type="file"
          name="file"
          className="form-control"
          onChange={handleChange}
        />
      </FileInput>
      <button className="btn btn-primary btn-upload" onClick={handleClick}> Submit </button>
    </Form>
  );
}

const Form = styled.form`
  width: 50%;
`;

const FileInput = styled.div`
  margin-bottom: 0.7rem;
`;

export default Upload
