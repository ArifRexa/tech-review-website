
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, NavLink, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img1 from '../../images/p1.jpg'
import img2 from '../../images/p10.png'
import img3 from '../../images/p4.jpg'
import img4 from '../../images/p5.png'
import img5 from '../../images/p6.webp'
import img6 from '../../images/p7.jpg'
import HomeData from '../HomeData/HomeData';
import "./Home.css"

const Home = () => {
    const [courses, setCourses] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
        // .then(data => console.log(data))
    }, [])

    const handlclick = () => {
        history.push("/services")
    }
    return (
        <div >

            <h1 className="text-center fw-bold my-5 p-5">Welcome to KBO-TECH</h1>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Python Basic To Advance</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>

                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img6}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>MySql Crash Course</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>C++ With Object Oriened</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>JavaScript For Web Development</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Ethical Hacking Crash Course</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-sizing">

                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>PHP Basic To Advance</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>



            <h1 className="text-center my-5 fw-bold">Our Services</h1>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <HomeData course={course}></HomeData>)
                    }
                </Row>
                <br />
                <Button onClick={handlclick} variant="primary">See More...</Button>
            </Container>

        </div>
    );
};

export default Home;