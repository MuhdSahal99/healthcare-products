import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => (
  <div
    className="sidebar bg-white"
    style={{
      width: '260px',
      height: '100vh',
      position: 'fixed',
    }}
  >
    <ListGroup variant="flush">
      <ListGroup.Item>
        <NavLink
          to="/visits"
          className={({ isActive }) =>
            isActive ? 'text-primary text-decoration-none' : 'text-dark text-decoration-none'
          }
        >
          <i class="bi bi-person-vcard"></i>
          Visits
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? 'text-primary text-decoration-none' : 'text-dark text-decoration-none'
          }
        >
          <i class="bi bi-journal"></i>
          Notes
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink
          to="/assistant"
          className={({ isActive }) =>
            isActive ? 'text-primary text-decoration-none' : 'text-dark text-decoration-none'
          }
        >
          <i class="bi bi-chat-left-dots"></i>
          Assistant
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink
          to="/extractor"
          className={({ isActive }) =>
            isActive ? 'text-primary text-decoration-none' : 'text-dark text-decoration-none'
          }
        >
          <i class="bi bi-journal-text"></i>
          Doc Extractor
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  </div>
);

export default Sidebar;