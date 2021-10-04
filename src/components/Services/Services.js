import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesData from '../ServicesData/ServicesData';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1 className = "text-center my-5">Our Services</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <ServicesData course={course}></ServicesData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;