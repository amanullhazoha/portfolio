import classes from '../scss/sectionHead.module.scss';

const SectionHead = ({ heading }) => (
    <>
        <hr className={classes.horizantalRow} />
        <div className={classes.sectionHead}>{heading}</div>
    </>
);

export default SectionHead;
