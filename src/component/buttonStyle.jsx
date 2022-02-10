/* eslint-disable react/jsx-props-no-spreading */
import classes from '../scss/buttonStyle.module.scss';

const ButtonStyle = ({ text, iconClass, ...rest }) => (
    <button className={classes.buttonStyle} type="button" {...rest}>
        <span>{text}</span>
        <i className={`fas ${iconClass} ${classes.iconPosition}`} />
    </button>
);
export default ButtonStyle;
