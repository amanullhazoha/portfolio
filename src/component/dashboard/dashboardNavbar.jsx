import classes from '../../scss/dashboard/dashboardNavbar.module.scss';

const DashboardNavbar = () => (
    <nav id={classes.navigation}>
        <img src="images/nav-bg.jpg" className={classes.navBg} alt="img" />
        <ul>
            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-desktop" />
                    </div>
                    <div className={classes.iconTitle}>
                        <h2>Portfolio</h2>
                    </div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-desktop" />
                    </div>
                    <div className={classes.iconTitle}>Dashboard</div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-users" />
                    </div>
                    <div className={classes.iconTitle}>Project</div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-file-powerpoint" />
                    </div>
                    <div className={classes.iconTitle}>Blog</div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-file-powerpoint" />
                    </div>
                    <div className={classes.iconTitle}>Message</div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-user" />
                    </div>
                    <div className={classes.iconTitle}>Account</div>
                </a>
            </li>

            <li>
                <a href="-">
                    <div className={classes.icon}>
                        <i className="fas fa-sign-out-alt" />
                    </div>
                    <div className={classes.iconTitle}>Logout</div>
                </a>
            </li>
        </ul>
    </nav>
);

export default DashboardNavbar;
