import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../data/SidebarData';
import './style.scss';

const Sidebar = () => {
    return (

        <React.Fragment>
            <section>
                <div className="sidebar-content">
                    {SidebarData.map((item, index) => {
                        return (
                            <div key={index} className='make-btn' >
                                <NavLink to={item.path} className='link'>
                                    <div >
                                        <div className='icon'>{item.icon}</div>
                                    </div>
                                    <div className="label">
                                        <span id={item.title}>{item.title}</span>
                                    </div>
                                </NavLink>
                            </div>
                        )

                    })
                    }

                </div>
            </section>
        </React.Fragment>

    )
}

export default Sidebar