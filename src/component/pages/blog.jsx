import BlogPosts from '../blogPosts';
import Heading from '../heading';
import PageLayout from '../pageLayout';

const Blog = () => (
    <PageLayout>
        <Heading titleFirst="My" titleLast="post" titleBg="POSTS" />
        <BlogPosts />
    </PageLayout>
);

export default Blog;
