import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';


const VisitPage = () => {

  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-8'>
          <div className="bg-white p-4 rounded-3 content">
            <h5 className='mb-4'>Visits</h5>
            <Tabs
              defaultActiveKey="preVisit"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="preVisit" title="Pre visit">
                Tab content for Pre visit
              </Tab>
              <Tab eventKey="visit" title="During visit">       

                <h5 className="mb-3"><i class="bi bi-question-circle me-1 icon"></i> Questions</h5>
                <ListGroup as="ul" className="list ms-4">
                  <ListGroup.Item as="li">Did you follow a new or more intense workout routine when the knee pain started?</ListGroup.Item>
                  <ListGroup.Item as="li">Have you noticed any swelling or redness arounf your knees?</ListGroup.Item>
                  <ListGroup.Item as="li">Did you experience stiffness in your knees after periods of rest or inthe morning?</ListGroup.Item> 
                  <ListGroup.Item as="li">More..</ListGroup.Item>                 
                </ListGroup>

                <h5 className="my-4"><i class="bi bi-search me-1 icon"></i> Diagnosis</h5>
                <ul className='chips'>
                  <li>Musculoskeletal Disorder</li>
                  <li>Migraine</li>
                  <li>Ostheoarthritis</li>
                </ul>     

                <h5 className="my-4"><i class="bi bi-stickies me-1 icon"></i> Protocols</h5>
                <ListGroup as="ul" className="list ms-4">
                  <ListGroup.Item as="li">Consider MRI for backpain & headaches</ListGroup.Item>
                  <ListGroup.Item as="li">Evaluate Knee pain in the context of recent Excercise</ListGroup.Item>
                  <ListGroup.Item as="li">MRI for Upper back and neckpain</ListGroup.Item>                 
                </ListGroup>

              </Tab>
              <Tab eventKey="pstVisit" title="Post visit">
                Tab content for Post visit
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className="bg-ylw p-4 rounded-3 content">
            <h5 className='mb-3'>Typescript</h5>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitPage;