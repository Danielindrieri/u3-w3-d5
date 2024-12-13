import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Canzoni } from '../components/Types/Canzoni'; 

interface SingleSongsProps {
  songs: Canzoni;
}

const SingleSong: React.FC<SingleSongsProps> = (props) => {
  return (
    <Row >
    <Col lg={4} className='d-flex flex-column w-75'>
        <img src={props.songs.album.cover_medium} alt="TaylorSong" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <div className='d-flex '>
        <span className='piccolo'>{props.songs.title_short}</span>
        </div>
        </Col>
        </Row>
  );
};

export default SingleSong;

