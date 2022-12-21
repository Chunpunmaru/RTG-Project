import React, { useEffect, useState, useReducer } from 'react'
import WithGuild from '../components/if-guild/withGuild';
import WithoutGuild from '../components/if-guild/withoutGuild';

const Guild = () => {
  const guild = (sessionStorage.getItem('guild'));
  const [inGuild, setInGuild] = useState(guild);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  
  return (
    <React.Fragment>
      <div className="guild-page">
        {inGuild !== '' ? <WithGuild /> : <WithoutGuild />}
      </div>

    </React.Fragment>

  )
}

export default Guild