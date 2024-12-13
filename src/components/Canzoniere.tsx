import React, { useEffect, useState } from 'react';
import SingleSong from './SingleSong';
import { Container, Row, Col } from 'react-bootstrap';
import { Canzoni } from '../components/Types/Canzoni';

const Canzoniere = () => {
  const [songs, setSongs] = useState<Canzoni[]>([]);

  const SONGS_URL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=Taylorswift';

  const getsong = async () => {
    try {
      const response = await fetch(SONGS_URL);
      if (response.ok) {
        const data = await response.json();
        console.log('Dati ricevuti:', data);
        const arrayOfSongs: Canzoni[] = data.data || []; 
        setSongs(arrayOfSongs);
      } else {
        throw new Error('Errore nella fetch');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getsong();
  }, []);

  return (
    
      <Row className="g-3 swift text-light pt-1 nascondi ">
        {songs.map((b) => (
          <Col key={b.id} lg={2}>
            <SingleSong songs={b} /> 
          </Col>
        ))}
      </Row>
  );
};
export default Canzoniere;
