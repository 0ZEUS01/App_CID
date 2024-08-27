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
