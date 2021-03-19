import { useEffect, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import ConfirmationModal from "./../../../../components/Modal/ConfirmationModal";
import ModalComponent from "./../../../../components/Modal/Modal";
import "./Events.scss";

const API_URL = "https://run.mocky.io/v3/4c755975-6142-459a-9bb8-2cc37efadb7e";

const Events = ({userEvents}) => {
  const [eventList, setEventList] = useState([]);
  const [show, setShow] = useState(false);
  const [idToConfirm, setIdToConfirm] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const checkJoinedGEvents = () => {
    const joinedEvents = eventList.filter( ({join}) => join === true);
    // const data =  JSON.parse(sessionStorage.getItem('user'));
    // data.events = joinedEvents;
    userEvents(joinedEvents);
    //sessionStorage.setItem('user', JSON.stringify(data));
  };

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setEventList(data);
    checkJoinedGEvents();
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleEvents = (value, state) => {
    const newArray = eventList.map((values) => {
      if (values.id === value) {
        values.join = state;
      }
      return values;
    });
    setEventList(newArray);
    checkJoinedGEvents();
  };

  const handleModel = (id) => {
    handleEvents(id, true);
    setShow(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    handleEvents(idToConfirm, false);
  };

  const handleModelConfirmation = (id) => {
    setShowConfirmation(true);
    setIdToConfirm(id);
  };

  return (
    <section className="events">
      <h3 className="events__title">Events</h3>
      <div className="events__cards">
        {eventList.map(({ image, id, name, join }, index) => (
          <>
            <Card key={index}>
              <Card.Img className="card__img" src={image} />
              <Card.Body>
                <h4 className="event-name">{name}</h4>
                {join && <Badge variant="primary">joined</Badge>}
                <div>
                  {!join && (
                    <Button variant="secondary" onClick={() => handleModel(id)}>
                      Join
                    </Button>
                  )}
                  {join && (
                    <Button
                      variant="secondary"
                      onClick={() => handleModelConfirmation(id)}
                    >
                      Abandon
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
            <ConfirmationModal
              show={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              handleConfirmation={handleConfirmation}
            />
          </>
        ))}
      </div>
      <ModalComponent show={show} onClose={() => setShow(false)} />
    </section>
  );
};

export default Events;
