// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Container,
//   ProgressBar,
//   Row,
//   Col,
//   Card,
//   CardGroup,
//   Image,
//   Form,
//   Button,
//   Stack,
// } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function ChooseContent() {
//   return (
//     <Container>
//       <ProgressBar now={100} />
//       <h2>Hello from ChooseContent</h2>
//       <Link to="/invite">
//         <Button>Content</Button>
//       </Link>
//     </Container>
//   );
// }

import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    console.log(this.fileObj, this.fileObj[0]);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  render() {
    return (
      <form>
        <div className="form-group multi-preview">
          {(this.fileArray || []).map((url) => (
            <img src={url} alt="..." width="200" height="200" />
          ))}
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={this.uploadMultipleFiles}
            multiple
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      </form>
    );
  }
}
