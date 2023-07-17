import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from 'react-icons/fa';


const RightSideNav = () => {
    return (
        <div>
            <div><ButtonGroup vertical>
                <Button className=' mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign up with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>Sign up with Github</Button>
            </ButtonGroup>
            </div>
            {/* list group  */}
            <div>
                <h5 className='mt-3'>Usefull Link</h5>

                <ListGroup className='mt-2'>
                    <ListGroup.Item className='mt-2'><FaFacebook className='me-2'></FaFacebook>facebook</ListGroup.Item>
                    <ListGroup.Item className='mt-2'> <FaTwitter className='me-2'></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mt-2'>  <FaTwitch className='me-2'></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mt-2'><FaWhatsapp className='me-2'></FaWhatsapp>Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mt-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ_Z-Y3kOio9KAeqpfBoczJKRjjEOE-ezNZIXXrPzAyW6KDMvDlGwR7LZFx-vyuaBpS0&usqp=CAU"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmskVo1Wn-pGT3oCdDZ_vS4xmfPrDuJaN71MLfm-pqctfBCimgKPSqbwQP5Pq6cPQZR24&usqp=CAU"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



        </div>
    );
};

export default RightSideNav;