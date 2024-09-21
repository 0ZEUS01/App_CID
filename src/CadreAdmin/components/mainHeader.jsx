/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const SearchBar = ({ className, onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className={`input-group ${className}`}>
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className="fa fa-search search-icon" />
                </span>
            </div>
            <input 
                type="text" 
                placeholder="Rechercher une mission..." 
                className="form-control" 
                onChange={handleSearch}
            />
        </div>
    );
};

const UserDropdown = ({ firstName, lastName, email }) => (
    <li className="nav-item topbar-user dropdown hidden-caret">
        <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
            <span className="profile-username">
                <span className="op-7">Hi,</span>
                <span className="fw-bold">{firstName} {lastName}</span>
            </span>
        </a>
        <ul className="dropdown-menu dropdown-user animated fadeIn">
            <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                    <div className="user-box">
                        <div className="u-text">
                            <h4>{firstName} {lastName}</h4>
                            <p className="text-muted">{email}</p>
                            <Link to="/profile" className="btn btn-xs btn-secondary btn-sm">View Profile</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/profile">My Profile</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/logout">Logout</Link>
                </li>
            </div>
        </ul>
    </li>
);

const MainHeader = ({ onSearch }) => {
    const { user } = useUser();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (user && (user.email || user.username)) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/utilisateurs/details`, {
                        params: { identifier: user.email || user.username }
                    });
                    setUserDetails(response.data);
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            }
        };

        fetchUserDetails();
    }, [user]);

    return (
        <div className="main-header">
            <div className="main-header-logo">
                <div className="logo-header" data-background-color="dark">
                    <Link to="/" className="logo">
                        <img src="/assets/img/logo.png" alt="navbar brand" className="navbar-brand" height={70} />
                    </Link>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right" />
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left" />
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt" />
                    </button>
                </div>
            </div>
            <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
                        <SearchBar onSearch={onSearch} />
                    </nav>
                    <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                        <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
                                <i className="fa fa-search" />
                            </a>
                            <ul className="dropdown-menu dropdown-search animated fadeIn">
                                <form className="navbar-left navbar-form nav-search">
                                    <SearchBar />
                                </form>
                            </ul>
                        </li>
                        {userDetails && (
                            <UserDropdown 
                                firstName={userDetails.firstName}
                                lastName={userDetails.lastName}
                                email={userDetails.email}
                            />
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MainHeader;
