import HomeContent from '../homeContext';
import HomeLayout from '../homeLayout';
import ProfileImg from '../profileImg';

const Home = () => (
    <HomeLayout>
        <ProfileImg />
        <HomeContent />
    </HomeLayout>
);

export default Home;
