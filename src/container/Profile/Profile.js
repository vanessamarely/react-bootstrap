import { useEffect, useState } from "react";
import "./Profile.scss";
import { Nav, Row, Tab } from "react-bootstrap";
import { Badge, Events, Groups, MyProfile } from "./components";

const InitialValue = {
  name: "Username",
  biography: "This is my biography",
  badges: [],
  groups: [],
  events: [],
};

const Profile = () => {
  const [user, setUser] = useState(InitialValue);

  const handleEvents = (data) => {
    console.log("data ", data);
    setUser({
      name: "Username",
      biography: "This is my biography",
      badges: user.badges,
      groups: user.groups,
      events: data,
    });
  };

  const handleGroups = (data) => {
    console.log("data ", data);
    setUser({
      name: "Username",
      biography: "This is my biography",
      badges: user.badges,
      groups: data,
      events: user.events,
    });
  };

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
              <MyProfile user={user} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Badge />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Groups userGroups={handleGroups} />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Events userEvents={handleEvents} />
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </main>
  );
};

export default Profile;
