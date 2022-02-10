import { useRef, useState } from 'react';
import classes from '../../scss/dashboard/mainLayout.module.scss';
import DashboardHeader from './dashboardHeader';

const MainLayout = ({ children }) => {
    const [toggle, setToggle] = useState(true);
    const mainSectionRef = useRef();
    const handelToggler = () => {
        if (toggle) {
            mainSectionRef.current.classList.add('dashboardToggleActive');
            setToggle(false);
        } else {
            mainSectionRef.current.classList.remove('dashboardToggleActive');
            setToggle(true);
        }
    };

    return (
        <main id={classes.mainSection} ref={mainSectionRef}>
            <DashboardHeader toggler={handelToggler} />
            {children}
        </main>
    );
};

export default MainLayout;
