import { useEffect, useState } from "react";
import "./MyProfile.scss";

const InitialValue = {
  name: 'Username',
  biography: 'This is my biography',
  badges: [],
  groups: [],
  events: []
};

const MyProfile = () => {
  const [user, setUser] = useState(InitialValue);
  
  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(InitialValue));
  }, [user]);

  useEffect(() => {
    const data =  JSON.parse(sessionStorage.getItem('user'));
    setUser(data);
  }, []);

  return (
    <section className="my-profile">
      <div className="my-profile__image">
        <img src="https://picsum.photos/200/300" alt="profile" />
      </div>
      <div className="my-profile__content">
        <h3>Username: {user.name}</h3>
        <p>{user.biography}</p>
        <hr />
        <h3>Badges</h3>
        <ul>
          {
            user.badges.length > 0 && user.badges.map(values => (
              <li>{values}</li>
            ))
          }
        </ul>
        <hr />
        <h3>Events</h3>
        <ul>
          {
            user.events.length > 0 && user.events.map(values => (
              <li>{values}</li>
            ))
          }
        </ul>
        <hr />
        <h3>Groups</h3>
        <ul>
          {
            user.groups.length > 0 && user.groups.map(values => (
              <li>{values}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
