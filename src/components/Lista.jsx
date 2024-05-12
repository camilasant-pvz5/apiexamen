import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Lista = ({ search }) => {
  const [characterApi, setCharacterApi] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  const getPerson = async () => {
    try {
      const data = await fetch(url);
      const result = await data.json();
      const personajes = result.results;
      setCharacterApi(personajes);
    } catch (error) {
      console.log("Sin información");
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  let persontoshow = [];
  if (search === "") {
    persontoshow = characterApi;
  } else {
    persontoshow = characterApi.filter((personaje) =>
      personaje.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {persontoshow.map((personaje, id) => (
          <Col key={id}>
            <Card>
            <Card.Img variant="top" src={personaje.image} />
              <Card.Body>
                <Card.Title>{`${personaje.id} - ${personaje.name}`}</Card.Title>
                <Card.Text>
                  Status: {personaje.status}
                  <br />
                  Species: {personaje.species}
                  <br />
                  Location: {personaje.location.name} <br />
                  Episodes: {personaje.episode.length}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {persontoshow.length === 0 && (
          <p className="text">No such squanch exists in the Rickpire</p>
        )}
      </Row>
    </Container>
  );
};

export default Lista;
