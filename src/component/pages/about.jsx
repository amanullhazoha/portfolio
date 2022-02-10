import Education from '../education';
import Heading from '../heading';
import PageLayout from '../pageLayout';
import PersonalInfo from '../personalInfo';
import Skills from '../skills';

const About = () => (
    <PageLayout>
        <Heading titleFirst="About" titleLast="Me" titleBg="RESUME" />
        <PersonalInfo />
        <Skills />
        <Education />
    </PageLayout>
);

export default About;
