import React from "react";
import Nav from '../Nav';
import './style.css'

const Header = ({ pages, currentPage, setCurrentPage }) => {
    return <header className="container-fluid">
        <div className="container d-lg-flex justify-content-lg-between py-auot">
            <h1 className="text-center strokeme align-items">
                Jeremiah Miranda
            </h1>
            <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </header>;
};

export default Header;