import React from 'react';
import { Row, Col,Card } from 'react-bootstrap';
import { MdOutlineExplicit } from "react-icons/md";
import Image1 from '../assets/images/1a.png';
import Image2 from '../assets/images/1b.png'
import Image3 from '../assets/images/2a.png';
import Image4 from '../assets/images/2b.png';
import Image5 from '../assets/images/2c.png';
import Image6 from '../assets/images/2d.png';
import Image7 from '../assets/images/2e.png';



const Main: React.FC = () => {
  return (
    <Row className='main1 gap-4'>
      <Col sm={12} >
        <h1 className='bord' >Novità</h1>
        </Col>
        <Col lg={5} className='mio'>
        <div className='d-flex flex-column'>
        <span className='stazione'>NUOVA STAZIONE RADIO</span>
        <span className='testo'>Rilassati,al resto pensiamo noi,Ascolta Apple Music Chill</span>
        <img src={Image1} alt="image1" style={{width:"480px",borderRadius:"9px"}} />
    </div>
        </Col>
        <Col lg ={6}>
        <div className='d-flex flex-column pb-4'>
        <span className='stazione'>NUOVA STAZIONE RADIO</span>
        <span className='testo'>Ecco la nuova casa della musica latina</span>
        <img src={Image2} alt="image1" style={{width:"480px",borderRadius:"9px"}} />
        </div>
        </Col>
        <Col sm={12} className='riduciamo'>
        <p>Nuovi episodi radio </p></Col>

        <Col lg={2} className='d-flex flex-column gap-1'>
        <img src={Image3} alt="image3" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <div className='d-flex '>
        <span className='piccolo'>prologo con abuelo </span><span className='piccolo ms-5'><MdOutlineExplicit /></span>
        </div>
        </Col>

        <Col lg={2} className='d-flex flex-column gap-1'>
        <img src={Image4} alt="image3" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <span className='piccolo'>The wanderer</span>
        </Col>

        <Col lg={2} className='d-flex flex-column gap-1'>
        <img src={Image5} alt="image3" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <span className='piccolo'>Micheal Bubble & Carly Pearce</span>
        </Col>

        <Col lg={2} className='d-flex flex-column gap-1'>
        <img src={Image6} alt="image3" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <span className='piccolo'>Stephan Moccio: The Zane Love <br /> Interview</span>
        </Col>

        <Col lg={2} className='d-flex flex-column gap-1'>
        <img src={Image7} alt="image3" style={{height:"170px",width:"180px",borderRadius:"9px"}} />
        <span className='piccolo'>Chart Spotlight:Julia Micheals </span>
        </Col>
        <Col sm={12}>
        <h2 className='fs-4'>Nuove Uscite</h2>
        </Col>
  
    </Row>
  );
};

export default Main;
