import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import ConfirmationModal from "./../../../../components/Modal/ConfirmationModal";
import ModalComponent from "./../../../../components/Modal/Modal";
import "./Groups.scss";

const API_URL = "https://run.mocky.io/v3/6a493a14-4155-463c-9f08-24be7e91cb6d";

const Groups = ({userGroups}) => {
  const [initial, setInitialData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const checkJoinedGroups = () => {
    const joinedGroups = groups.filter( ({join}) => join === true);
    // const data =  JSON.parse(sessionStorage.getItem('user'));
    // data.groups = joinedGroups;
    userGroups(joinedGroups);
    //sessionStorage.setItem('user', JSON.stringify(data));
  };

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setGroups(data);
    setInitialData(data);
    checkJoinedGroups();
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleSelected = (option) => {
    setGroups(initial);
    const filteredData = groups.filter(({ language }) => language === option);
    if (filteredData.length > 0) {
      setGroups(filteredData);
      checkJoinedGroups();
    }
  };

  const handleSearchName = (text) => {
    const groupName = text.target.value;
    setGroups(initial);
    const filteredData = groups.filter(
      ({ name }) => name.trim() === groupName.trim()
    );
    if (filteredData.length > 0) {
      setGroups(filteredData);
      checkJoinedGroups();
    }
  };

  const handleGroups = (value, state) => {
    const newArray = groups.map((values) => {
      if (values.id === value) {
        values.join = state;
      }
      return values;
    });
    setGroups(newArray);
    checkJoinedGroups();
  };

  const handleModel = (id) => {
    handleGroups(id, true);
    setShow(true);
  };

  const handleAbandon = (id) => {
    setShowConfirmation(false);
    handleGroups(id, false);
  };

  const handleModelConfirmation = () => {
    setShowConfirmation(true);
  };

  return (
    <section className="groups">
      <h3 className="groups__title">Groups</h3>
      <div className="groups__filters">
        <DropdownButton
          id="dropdown-basic-button"
          title="Dropdown button"
          onSelect={handleSelected}
        >
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="Javascript">Javascript</Dropdown.Item>
          <Dropdown.Item eventKey="Typescript">Typescript</Dropdown.Item>
        </DropdownButton>
        <Form.Group className="groups__filters__search">
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={handleSearchName}
          />
        </Form.Group>
      </div>
      <div className="groups__cards">
        {groups.map(({ id, image, language, name, join, description }) => (
          <>
            <Card key={id}>
              <Card.Img className="card__img" src={image} />
              <Card.Body>
                <p>
                  <Badge variant="secondary">{language}</Badge>
                </p>
                <h4 className="group-name">{name}</h4>
                <p>{description}</p>
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
                      onClick={handleModelConfirmation}
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
              handleConfirmation={() => handleAbandon(id)}
            />
          </>
        ))}
      </div>
      <ModalComponent show={show} onClose={() => setShow(false)} />
    </section>
  );
};
export default Groups;
