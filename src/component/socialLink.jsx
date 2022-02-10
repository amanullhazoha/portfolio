import classes from '../scss/socialLink.module.scss';

const SocailLink = () => (
    <ul className={classes.socialLink}>
        <a href="-" target="_blank">
            <li>
                <i className="fab fa-linkedin-in" />
            </li>
        </a>
        <a href="-" target="_blank">
            <li>
                <i className="fab fa-github" />
            </li>
        </a>
        <a href="-" target="_blank">
            <li>
                <i className="fab fa-facebook-f" />
            </li>
        </a>
        <a href="-" target="_blank">
            <li>
                <i className="fab fa-twitter" />
            </li>
        </a>
    </ul>
);

export default SocailLink;
