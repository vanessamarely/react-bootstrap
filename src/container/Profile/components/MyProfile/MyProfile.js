
import { Button } from "react-bootstrap";
import "./MyProfile.scss";

const MyProfile = ({user}) => {
  console.log(user)
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
            user.badges.length > 0 && user.badges.map(({name}, index) => (
              <li key={index}>Badge: {name}</li>
            ))
          }
        </ul>
        <hr />
        <h3>Events</h3>
        <ul>
          {
            user.events.length > 0 && user.events.map(({name}, index) => (
              <li key={index}>Event: {name}</li>
            ))
          }
        </ul>
        <hr />
        <h3>Groups</h3>
        <ul>
          {
            user.groups.length > 0 && user.groups.map(({name}, index) => (
              <li key={index}>Group: {name}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
