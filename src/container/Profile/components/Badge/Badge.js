import { useEffect, useState } from "react";

import "./Badge.scss";
import { Card } from "react-bootstrap";

const API_URL = "https://run.mocky.io/v3/9d5363d8-d5f6-43aa-b1b0-9c9d26d74526";

const Badge = ({allBadges}) => {
  const [badges, setBadges] = useState([]);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBadges(data);
    allBadges(data);
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <section className="badges">
      <h3 className="badges__title">Badges</h3>
      <div className="badges__cards">
        {badges.map(({ avatar, name, description, intructions }, index) => (
          <Card key={index}>
            <Card.Img className="card__img" src={avatar} />
            <Card.Body>
              <h4 className="badge-name">{name}</h4>
              <Card.Title>Description</Card.Title>
              <Card.Text>{description}</Card.Text>
              <hr />
              <Card.Title>How to get it?</Card.Title>
              <Card.Text>{intructions}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Badge;
