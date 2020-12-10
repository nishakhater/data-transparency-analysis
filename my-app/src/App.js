import './App.css';
// import StatusGraph from './components/caseStatus';
// import BodyCam from './components/bodycam';
// import NoBodyCam from './components/noBodycam';
// import Charges from './components/charges';
// import ChargesPie from './components/chargesPie';
// import ChargesPie2 from './components/chargesPie2';
// import Popup from 'bootstrap';
import AnnotModal from './components/popup';
import React, { useState } from "react";
import ReadIcon from './assets/readMore.png';
import LinkIcon from './assets/hyperlink.png';
import annotations from './assets/annotations';
import links from './assets/annotations';

// import './BootstrapCustom.css';

import {
  Modal, Button, Row, Dropdown, DropdownButton
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      linkContent: undefined,
      show: false
    };
  }
  render() {
    const handleClose = () => this.setState({ show: false });
    const text = ["hi", "help"]

    const handleShow = (item) => this.setState({ show: true, content: annotations[item.target.id] });
    const handleShowLink = (item) => this.setState({ show: true, content: annotations[item.target.id] });

    return (
      <div>
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={0}>
          <img id={0} src={ReadIcon} alt="read more icon" />
        </Button>
        {/* //link */}
        { 
          links[0].length > 0 ?
          <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={0}>
            <img id={0} src={LinkIcon} alt="read more icon" />
          </Button> : null
        }













        <Modal show={this.state.show} onHide={handleClose} >

          <Modal.Header closeButton />
          {/* <Modal.Title>Heading Text</Modal.Title> */}
          {/* </Modal.Header> */}

          <Modal.Body >{this.state.content}</Modal.Body>

          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer> */}

        </Modal>
        <Modal show={this.state.show} onHide={handleClose} >
          <Modal.Header closeButton />
          <Modal.Body >
            {/* {
              this.state.linkContent ? 

            } */}
          </Modal.Body>
        </Modal>

      </div>
    );
  }

}

export default App;
