import React from 'react';
import './style.css';
import {capitalize} from '../../utils'

const Nav = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <nav className='nav d-flex justify-content-between align-items-center'>
            {
                pages.map((page) => (
                    <a 
                        href='/#' 
                        key={page} 
                        className={`strokeme nav-link ${page === currentPage && 'active'}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {capitalize(page)}
                    </a>
                ))
            }
        </nav>
    );
};

export default Nav;