/* eslint-disable jsx-a11y/no-static-element-interactions */
import classes from '../../scss/dashboard/header.module.scss';

const DashboardHeader = ({ toggler }) => (
    <header className={classes.header}>
        <div className={classes.toggler} onClick={toggler}>
            <div className={classes.menuBtn} />
            <h4>Dashboard</h4>
        </div>
        <div className={classes.user}>
            <div className={classes.userImg}>
                <img src="images/user.jpg" alt="profile" />
            </div>
            <div className={classes.userName}>
                <h4>Admin</h4>
            </div>
        </div>
    </header>
);

export default DashboardHeader;
