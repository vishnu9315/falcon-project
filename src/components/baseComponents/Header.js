import '../../css/Header.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import settingsicon from '../../assets/images/technology.png';

function Header() {
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleIntegrationsToggle = () => {
    setShowIntegrations(!showIntegrations);
  };

  const handleNotificationsToggle = () => {
    setShowNotifications(!showNotifications);
  }

  const handleProjectsToggle = () => {
    setShowProjects(!showProjects);
  };

  const handleUsersToggle = () => {
    setShowUsers(!showUsers);
  };

  const handleSettingsToggle = () => {
    setShowSettings(!showSettings);
  }

  return (
    <div >
      <>
        <Navbar style={{ backgroundColor: '#21214b' }} variant='dark'>
          <Container style={{ backgroundColor: '#21214b' }}>
            <Navbar.Brand href='#home'>
              <img src='' alt='' />
              FALCON
            </Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href='#Dashboard'>Dashboard</Nav.Link>
              <NavDropdown
                title='Projects'
                id='projects-dropdown'
                show={showProjects}
                onMouseEnter={handleProjectsToggle}
                onMouseLeave={handleProjectsToggle}
                style={{ backgroundColor: '#21214b' }}
              >
                <NavDropdown.Item
                  href='#createProject'
                  style={{ color: '#ab9bfb' }}
                >
                  Create Project
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='#ProjectList'
                  style={{ color: '#ab9bfb' }}
                >
                  Project List
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title='Users'
                id='users-dropdown'
                show={showUsers}
                onMouseEnter={handleUsersToggle}
                onMouseLeave={handleUsersToggle}
                style={{ backgroundColor: '#21214b' }}
              >
                <NavDropdown.Item
                  href='#createUsers'
                  style={{ color: '#ab9bfb' }}
                >
                  Create Users
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='#listUsers'
                  style={{ color: '#ab9bfb' }}
                >
                  Users List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <NavDropdown
                title={<img src={settingsicon} alt='Settings' style={{ width: '30px', height: '30px', marginRight:'20px' }} />}
                id='settings-dropdown'
                show={showSettings}
                onMouseEnter={handleSettingsToggle}
                onMouseLeave={handleSettingsToggle}
                style={{ backgroundColor: '#21214b' }}
              >
                <NavDropdown.Item href='#createUser' style={{ color: '#ab9bfb' }}>Create User</NavDropdown.Item>
                <NavDropdown.Item href='#ManageRoles' style={{ color: '#ab9bfb' }}>Manage Roles</NavDropdown.Item>
                <NavDropdown
                  title='Integrations'
                  id='integrations-dropdown'
                  show={showIntegrations}
                  className='sub-dropdown'
                  onMouseEnter={handleIntegrationsToggle}
                  onMouseLeave={handleIntegrationsToggle}
                  onClick={handleIntegrationsToggle}
                  style={{color:'#fff', backgroundColor:'#c9beff'}}>
                    <div className="subDropDown">
                  <NavDropdown.Item href='#CICD'>CI/CD</NavDropdown.Item>
                  <NavDropdown.Item href='#DefectTracking'>Defect Tracking</NavDropdown.Item>
                  <NavDropdown.Item href='#CloudSolutions'>Cloud Solutions</NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title='Notifications'
                  id='notifications-dropdown'
                  show={showNotifications}
                  className='sub-dropdown'
                  onMouseEnter={handleNotificationsToggle}
                  onMouseLeave={handleNotificationsToggle}
                  onClick={handleNotificationsToggle}
                  style={{color:'#fff', backgroundColor:'#c9beff'}}>
                    <div className="subDropDown">
                  <NavDropdown.Item href='#Email'>Email</NavDropdown.Item>
                  </div>
                </NavDropdown>
              </NavDropdown>
            <Navbar.Brand href='#home'>
              <img src='' alt='' />
              IMPACTQA
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />
      </>
    </div>
  );
}

export default Header;
