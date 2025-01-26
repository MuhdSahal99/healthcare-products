import React from 'react';
import { Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => (
  <Navbar>
  <Navbar.Brand className="p-3 border-bottom" href="/">
    Ai Medical <span>Assistant</span>
  </Navbar.Brand>
  <div className="d-flex align-items-center header-search">
    <input
      type="text"
      placeholder="Search patient"
      className="form-control"
    />
  </div>
  <div className="ms-auto pe-3">
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        <img
          src="./assets/images/avatar.png"
          className="avatar rounded-circle"
          style={{ width: '30px', height: '30px', objectFit: 'cover' }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
</Navbar>
);

export default Header;