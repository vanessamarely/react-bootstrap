import "./Profile.scss";
import { Nav, Row, Tab } from "react-bootstrap";
import { Badge, Events, Groups, MyProfile } from "./components";

const Profile = () => {

  return (
    <main className="profile">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="justify-content-center">
          <Nav variant="pills" className="flex-row profile__menu">
            <Nav.Item>
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
            <Tab.Pane eventKey="first">
              <MyProfile />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Badge />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Groups />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Events />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </main>
  );
};

export default Profile;
