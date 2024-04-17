import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Assets/img/pic.jpg";
import {ArrowRightCircle  } from "react-bootstrap-icons";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend Developer",  "RPA Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h2>{`Hi! I'm Navya   `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "FRONT End Developer", "RPA Developer" ]'><span className="wrap">{text}</span></span></h2>
                  <p> A passionate and dedicated web developer with a strong background in RPA (Robotic Process Automation) development. With 1year of experience in the field, I bring a unique blend of technical expertise and creative problem-solving skills to every project I undertake.

Web Development Expertise
In the realm of web development, I thrive on turning ideas into reality by crafting intuitive and visually stunning websites and applications.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect < ArrowRightCircle size={25} /></button>
              </div>
            
          </Col>
          <Col xs={12} md={6} xl={5}>
            
                <div >
                  <img src={headerImg} style={{width:"75%",borderRadius:"55%"}}alt="Header Img"/>
                </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}