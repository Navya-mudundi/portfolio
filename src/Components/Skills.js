import meter8 from "../Assets/img/meter8.jpg";
import meter7 from "../Assets/img/meter7.jpg";
import meter9 from "../Assets/img/meter9.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../Assets/img/arrow1.svg";
import arrow2 from "../Assets/img/arrow2.svg";
import colorSharp from "../Assets/img/color-sharp.png"

// const skillsData = [
//   { name: 'HTML', percentage: 90, image: meter8 },
//   { name: 'CSS', percentage: 85, image: meter2 },
//   { name: 'JavaScript', percentage: 80, image: meter3 },
//   // Add more skill items as needed
// ];
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
       breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx ">
                        <h2>Skills</h2>
                        <p>Welcome to the skills section of my portfolio, where I showcase my expertise and proficiency in various technologies and tools. With a passion for learning and a dedication to staying updated with the latest industry trends, I've developed a diverse skill set that enables me to tackle a wide range of challenges in the world of technology. </p>
                        <Carousel responsive={responsive} infinite={true} className=" skill-slider">
                            <div className="item">
                                <img src={meter8} style={{borderRadius:"50%", backgroundColor:"blue"}}alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} style={{borderRadius:"50%"}} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} style={{borderRadius:"50%"}} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} style={{borderRadius:"50%", backgroundColor:"blue"}}alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter8}style={{borderRadius:"50%", backgroundColor:"blue"}} alt="Image" />
                                <h5>RPA</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}


