import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Autocomplete from './Autocomplete';
import { Button, Form, Container } from 'react-bootstrap';
// import bgImage from "./assets/images/bg.jpg";

const LandingPage = () => {
  // const [patient, setPatient] = useState('');
  const navigate = useNavigate();
  const suggestions = ['Mohammed', 'Saif', 'Rohan', 'Sahal', 'Ahamed'];
  const handleSearch = (patient) => {
    if (patient) navigate(`/visits`);
  };


  return (


    <div className="landing_page" style={{
      backgroundImage: `url(./assets/images/bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
      <form>
        <fieldset>
          <h2>Welcome to</h2>
          <h1>Ai Medical Assistant</h1>                
              <div className="landing">               
                 <Autocomplete suggestions={suggestions} onSearch={handleSearch} />           
              </div>       
        </fieldset>
      </form>
    </div>
  );
};

export default LandingPage;



{/* <Container
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="text-center">
        <h1><i class="bi bi-airplane-engines-fill"></i> Select a Patient</h1>
        <Autocomplete suggestions={suggestions} />
        <Form.Control
          type="text"
          placeholder="Enter patient name"
          className="my-3"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </Container> */}