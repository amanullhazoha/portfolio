import { Row } from 'react-bootstrap';
import BlogPost from './blogPost';

const blogPosts = [
    {
        id: 1230,
        img: 'zoha.jpg',
        link: '',
        title: 'How to Own Your Audience by Creating an Email List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam!',
    },

    {
        id: 1232,
        img: 'zoha.jpg',
        link: '',
        title: 'How to Own Your Audience by Creating an Email List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam!',
    },

    {
        id: 12321,
        img: 'zoha.jpg',
        link: '',
        title: 'How to Own Your Audience by Creating an Email List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ullam!',
    },
];

const BlogPosts = () => (
    <Row>
        {blogPosts.map((post) => (
            <BlogPost post={post} />
        ))}
    </Row>
);

export default BlogPosts;
