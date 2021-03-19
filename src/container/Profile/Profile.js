import { useState, useEffect } from "react";
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

const API_URL = "https://run.mocky.io/v3/9d5363d8-d5f6-43aa-b1b0-9c9d26d74526";

const Profile = () => {
  const [user, setUser] = useState(InitialValue);
  const [badges, setBadges] = useState([]);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBadges(data);
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleEvents = (data) => {
    const countEvents = Object.keys(data).length;
    let badgesEvents = [];
    if (countEvents === 3) {
      badgesEvents = badges.filter(({ name }) => name === "Networking");
    }else{
      badgesEvents = user.badges;
    }
    setUser({
      name: "Username",
      biography: "This is my biography",
      badges: user.badges.concat(badgesEvents),
      groups: user.groups,
      events: data,
    });
  };

  const handleGroups = (data) => {
    const countGroups = Object.keys(data).length;
    let badgesbyGroups = [];
    if (countGroups >= 1) {
      badgesbyGroups = badges.filter(({ name }) => name === "Social");
    } else{
      badgesbyGroups = user.badges;
    }
    
    setUser({
      name: "Username",
      biography: "This is my biography",
      badges: badgesbyGroups,
      groups: data,
      events: user.events,
    });
  };

  const handleUserBadges = (data) => {
    // setBadges(data);
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
