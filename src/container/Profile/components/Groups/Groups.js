import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import ConfirmationModal from "../../../../components/Modal/ConfirmationModal";
import ModalComponent from "../../../../components/Modal/Modal";
import "./Groups.scss";

const API_URL = "https://run.mocky.io/v3/6a493a14-4155-463c-9f08-24be7e91cb6d";

const Groups = ({ userGroups }) => {
  const [groups, setGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [idGroup, setIdGroup] = useState("");

  const checkJoinedGroups = () => {
    const joinedGroups = groups.filter((join) => join === true);
    userGroups(joinedGroups);
  };

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setGroups(data);
    checkJoinedGroups();
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleGroups = (id, state) => {
    const newArray = groups.map((values) => {
      if (values.id === id) {
        values.join = state;
      }
      return values;
    });
    setGroups(newArray);
    checkJoinedGroups();
  };

  const handleModal = (id) => {
    setIdGroup(id);
    handleGroups(id, true);
    setShow(true);
  };

  const handleModalConfirmation = (id) => {
    setIdGroup(id);
    setShowConfirmation(true);
  };

  const handleAbandon = () => {
    setShowConfirmation(false);
    handleGroups(idGroup, false);
  };

  return (
    <section className="groups">
      <h3 className="groups__title">Groups</h3>
      <div className="groups__filters">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="Javascript">Javascript</Dropdown.Item>
          <Dropdown.Item eventKey="Typescript">Typescript</Dropdown.Item>
        </DropdownButton>
        <Form.Group className="groups__filters__search">
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
      </div>
      <div className="groups__cards">
        {groups.map(({ image, name, description, language, id, join }) => (
          <div key={id}>
            <Card>
              <Card.Img className="card__img" src={image} />
              <Card.Body>
                <p>
                  <Badge variant="secondary">{language}</Badge>
                </p>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                  {join ? (
                    <>
                      <Badge variant="primary">joined</Badge>
                      <Button
                        variant="secondary"
                        onClick={() => handleModalConfirmation(id)}
                      >
                        Abandon
                      </Button>
                    </>
                  ) : (
                    <Button variant="secondary" onClick={() => handleModal(id)}>
                      Join
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
            <ConfirmationModal
              show={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              handleConfirmation={handleAbandon}
            />
          </div>
        ))}
      </div>
      <ModalComponent show={show} onClose={() => setShow(false)} />
    </section>
  );
};

export default Groups;
