import classes from '../scss/contactInfo.module.scss';

const ContactInfo = ({ title, text, icon }) => (
    <div className={classes.info}>
        <div className={classes.icon}>
            <i className={`fas ${icon}`} />
        </div>
        <div className={classes.text}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
);

export default ContactInfo;
