import classes from '../../scss/dashboard/dashboardLayout.module.scss';
import DashboardNavbar from './dashboardNavbar';
import MainLayout from './mainLayout';

const DashboardLayout = ({ children }) => (
    <section id={classes.mainContainer}>
        <DashboardNavbar />
        <MainLayout>{children}</MainLayout>
    </section>
);

export default DashboardLayout;
