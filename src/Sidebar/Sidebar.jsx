import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-section">
        <h2>Sales</h2>
        <ul>
          <li>Leads</li>
          <li>Inbox</li>
          <li>Payments</li>
          <li>Contacts</li>
          <li>Calendar</li>
          <li>Link in Bio</li>
        </ul>
      </div>
      <div className="menu-section">
        <h2>Projects</h2>
        <ul>
          <li>All Projects</li>
          <li>Shoots</li>
          <li>Deliverables</li>
          <li>Tasks</li>
          <li>Payments</li>
          <li>Expenses</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
