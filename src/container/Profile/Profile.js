import { useState } from "react";
import { Nav, Row, Tab } from "react-bootstrap";
import Badge from "./components/Badge/Badge";
import Events from "./components/Events/Events";
import Groups from "./components/Groups/Groups";
import MyProfile from "./components/MyProfile/MyProfile";

import "./Profile.scss";

const InitialValues = {
  name: "Username",
  biography: "This is my biography",
  badges: [],
  groups: [],
  events: [],
};

const Profile = () => {
  const [user, setUser] = useState(InitialValues);
  const [badges, setBadge] = useState([]);

  const handleGroups = (data) => {
    const countGroups = Object.keys(data).length;
    let badgesbyGroups = [];
    if (countGroups >= 1) {
      badgesbyGroups = badges.filter(({ name }) => name === "Social");
    } else {
      badgesbyGroups = user.badges;
    }

    setUser({
      name: user.name,
      biography: user.biography,
      badges: badgesbyGroups,
      groups: data,
      events: user.events,
    });
  };

  const handleBadges = (data) => {
    setBadge(data);
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
              <Nav.Link eventKey="second">Badge</Nav.Link>
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
            <Tab.Pane eventKey="first"><MyProfile user={user} /></Tab.Pane>
            <Tab.Pane eventKey="second">
              <Badge allBadges={handleBadges} />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Groups userGroups={handleGroups} />
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
