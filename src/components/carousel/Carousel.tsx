import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ImageTest2 from '../../assets/images/dessy-dimcheva.jpg'
import PlantMobile from '../../assets/images/mobile/plant-mobile.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: SetStateAction<number>) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.6)' }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item style={{ height: '600px' }}>
                    <img className='img-fluid d-xl-none' src={PlantMobile} alt="" />
                    <img className='img-fluid d-none d-xl-block' src={ImageTest2} alt="" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '600px' }}>
                    <img className='img-fluid d-xl-none' src={PlantMobile} alt="" />
                    <img className='img-fluid d-none d-xl-block' src={ImageTest2} alt="" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '600px' }}>
                    <img className='img-fluid d-xl-none' src={PlantMobile} alt="" />
                    <img className='img-fluid d-none d-xl-block' src={ImageTest2} alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;
