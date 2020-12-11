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
import FrameOne from './assets/frames/Frame1.png'
import FrameTwo from './assets/frames/Frame2.png'; 
import FrameThree from './assets/frames/Frame3.png'; 
import FrameFour from './assets/frames/Frame4.png'; 
import FrameFive from './assets/frames/Frame5.png'
import FrameSix from './assets/frames/Frame6.png'
import annotations from './assets/annotations';
import links from './assets/links';

// import './BootstrapCustom.css';

import {
  Modal, Button, Row, Container, Dropdown, DropdownButton
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
    const handleClose = () => this.setState({ show: false, content: "", linkContent: undefined });
    const text = ["hi", "help"]

    const handleShow = (item) => this.setState({ show: true, content: annotations[item.target.id] });
    const handleShowLink = (item) => this.setState({ show: true, linkContent: links[item.target.id] });

    return (
      <div>
        <div>
          Intro 
        </div>

        <img class="w-100 p-3" src={FrameOne}/>
        <img class="w-100 p-3" src={FrameTwo}/>
        <img class="w-100 p-3" src={FrameThree}/>
        <img class="w-100 p-3" src={FrameFour}/>
        <img class="w-100 p-3" src={FrameFive}/>
        <img class="w-100 p-3" src={FrameSix}/>



        <div id="f1-l1"> 
          {/* //read more */}
          <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={0} >
            <img id={0} src={ReadIcon} alt="read more icon" className="btn-img" />
          </Button>
          {/* //link */}
          {
            links[0].length > 0 ?
              <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={0}>
                <img id={0} src={LinkIcon} alt="read more icon" className="btn-img" />
              </Button> : null
          }
        </div>

        <div id="f1-l2"> 
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={1}>
          <img id={1} src={ReadIcon} alt="read more icon" className="btn-img" />
        </Button>
        {/* //link */}
        {
          links[1].length > 0 ?
            <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={1}>
              <img id={1} src={LinkIcon} alt="read more icon" className="btn-img" />
            </Button> : null
        }
        </div>

        <div id="f1-l3"> 
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={2}>
          <img id={2} src={ReadIcon} alt="read more icon" className="btn-img" />
        </Button>
        {/* //link */}
        {
          links[2].length > 0 ?
            <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={2}>
              <img id={2} src={LinkIcon} alt="read more icon" className="btn-img" />
            </Button> : null
        }
        </div>



        <div id="f1-l4"> 
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={3}>
          <img id={3} src={ReadIcon} alt="read more icon" className="btn-img" />
        </Button>
        {/* //link */}
        {
          links[3].length > 0 ?
            <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={3}>
              <img id={3} src={LinkIcon} alt="read more icon" className="btn-img" />
            </Button> : null
        }
        </div>

        <div id="f1-r1"> 
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={4}>
          <img id={4} src={ReadIcon} alt="read more icon" className="btn-img"  />
        </Button>
        {/* //link */}
        {
          links[4].length > 0 ?
            <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={4}>
              <img id={4} src={LinkIcon} alt="read more icon" className="btn-img" />
            </Button> : null
        }
        </div>



        <div id="f1-r2"> 
        {/* //read more */}
        <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShow} id={5}>
          <img id={5} src={ReadIcon} alt="read more icon" className="btn-img"  />
        </Button>
        {/* //link */}
        {
          links[5].length > 0 ?
            <Button size="sm" className="p-0 m-0" variant="link" onClick={handleShowLink} id={5}>
              <img id={5} src={LinkIcon} alt="read more icon" className="btn-img" />
            </Button> : null
        }
        </div> 



        <Modal show={this.state.show} dialogClassName="border-0"  onHide={handleClose} >

          <Modal.Header className="border-0" closeButton>
            </Modal.Header>
          <Modal.Body className='p-0'>
            <Container className="p-5 h-100 overflow-scroll">
              <p>
                {this.state.content}
              </p>
            </Container>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.show} onHide={handleClose} >
          <Modal.Header closeButton />
          <Modal.Body >
            <Container>

              {
                this.state.linkContent ?
                  this.state.linkContent.map((item, index) =>
                    (
                      <div>
                        {`${index}. `}
                        <a href={item.href}>
                          {item.name}
                        </a>
                      </div>
                    )
                  )
                  : null
              }
            </Container>
          </Modal.Body>
        </Modal>

      </div>
    );
  }

}

export default App;
