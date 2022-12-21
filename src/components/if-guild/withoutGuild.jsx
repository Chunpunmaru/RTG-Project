import React from 'react';
import './if-guild.scss';
import { GiWoodenDoor } from 'react-icons/gi';

import Guildmodal from '../../pages/modals/guildmodal';
import JoinModal from '../../pages/modals/JoinModal';

function withoutGuild() {
    return (
        <section>
            <div className='main-guild'>
                <div className="main-head">
                    <div className="main-btn">
                        <Guildmodal />
                        <JoinModal />
                    </div>
                </div>

                <div className='guild-list'>
                    <p className="no-guild-label">Not Member of a Guild</p>
                    <div className="no-guild-img">
                        <GiWoodenDoor size={200} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withoutGuild