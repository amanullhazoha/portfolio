import Heading from '../heading';
import PageLayout from '../pageLayout';
import PortfolioItems from '../portfolio';

const Portfolio = () => (
    <PageLayout>
        <Heading titleFirst="my" titleLast="portfolio" titleBg="portfolio" />
        <PortfolioItems />
    </PageLayout>
);

export default Portfolio;
