import { Col } from 'react-bootstrap';
import classes from '../scss/blogPost.module.scss';

const BlogPost = ({ post }) => (
    <Col lg={4} sm={6} key={post.id}>
        <figure className={classes.blogPost}>
            <img src={`images/${post.img}`} alt="portfolio" className="img-fluid" />

            <figcaption>
                <a href={post.link}>
                    <h2 className={classes.postTitle}>{post.title}</h2>
                </a>
                <p>{post.description}</p>
            </figcaption>
        </figure>
    </Col>
);

export default BlogPost;
