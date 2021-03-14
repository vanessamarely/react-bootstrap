import "./Profile.scss";
import { Nav, Row, Tab } from "react-bootstrap";

const Profile = () => (
  <main className="profile">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row  className="justify-content-center">
        <Nav variant="pills" className="flex-row profile__menu">
          <Nav.Item >
            <Nav.Link eventKey="first">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Badges</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Goups</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Events</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row>
        <Tab.Content className="profile__content">
          <Tab.Pane eventKey="first">Profile</Tab.Pane>
          <Tab.Pane eventKey="second">Badges</Tab.Pane>
          <Tab.Pane eventKey="third">Groups</Tab.Pane>
          <Tab.Pane eventKey="fourth">events</Tab.Pane>
        </Tab.Content>
      </Row>
    </Tab.Container>
  </main>
);

export default Profile;
