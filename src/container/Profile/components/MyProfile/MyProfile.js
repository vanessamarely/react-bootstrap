
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
        <h3><Button variant="light">Badges</Button></h3>
        <ul>
          {
            user.badges.length > 0 && user.badges.map((values, index) => (
              <li key={index}>{values}</li>
            ))
          }
        </ul>
        <hr />
        <h3><Button variant="light">Events</Button></h3>
        <ul>
          {
            user.events.length > 0 && user.events.map((values, index) => (
              <li key={index}>{values}</li>
            ))
          }
        </ul>
        <hr />
        <h3><Button variant="light">Groups</Button></h3>
        <ul>
          {
            user.groups.length > 0 && user.groups.map((values, index) => (
              <li key={index}>{values}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
