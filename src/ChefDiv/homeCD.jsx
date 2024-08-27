/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from './components/sideBar';
import MainHeader from './components/mainHeader';

const Home = () => (
    <div>
        <div className="wrapper">
            <Sidebar />
            <div className="main-panel">
                <MainHeader />
                <div className="main-content">
                    {/* Your main content here */}
                </div>
            </div>
        </div>
    </div>
);

export default Home;
