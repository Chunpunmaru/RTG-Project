import React from 'react';
import './style.scss';
import Sidebar from './Sidebar';
import Navpage from './Navpage';

const MainPage = () => {
    return (
        <React.Fragment>
            {/* sidebar */}
            <section>
                <div className="container">

                    <div className="left-side">
                        <Sidebar />
                    </div>

                    <div className="right-side">
                        <Navpage />
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default MainPage