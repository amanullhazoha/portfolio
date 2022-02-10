import classes from '../scss/heading.module.scss';

const Heading = ({ titleBg, titleFirst, titleLast }) => (
    <h1 className={classes.heading}>
        {titleFirst}
        <span className={classes.title}>{titleLast}</span>
        <span className={classes.titleBg}>{titleBg}</span>
    </h1>
);

export default Heading;
