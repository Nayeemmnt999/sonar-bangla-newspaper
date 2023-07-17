import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeNews = ({ news }) => {

    const { _id, rating, total_view, title, author, img, details } = news;

    return (
        <Card className="text-center mb-3">
            <Card.Header>
                <Image
                    className=' me-2'
                    src={author.img}
                    roundedCircle
                    style={{ height: "60px "}}
                />
                {author.name}
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
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