import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HomeNews = ({ news }) => {

    const { _id, rating, total_view, title, author, img, details, image_url } = news;

    return (
        <Card className="text-center mb-3">
            {/* section first  */}
            <Card.Header className='p-3 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <div>
                        <Image
                            className=' me-2'
                            src={author.img}
                            roundedCircle
                            style={{ height: "50px " }}
                        />
                    </div>
                    <div className=' text-start'>
                        <p className='fw-semibold mb-0'>{author.name}</p>
                        <p className='text-body-tertiary mb-0 '>{ author.published_date} </p>
                    </div>
                </div>

                {/* second secion  */}
                <div>
                    <FaRegBookmark className=' me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200) + "..."} <Link to={`/news/${_id}`}>Read more</Link></p>
                            :
                            <p> {details}</p>
                    }

                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default HomeNews;