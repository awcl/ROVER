import React, { useContext } from 'react';
import Context from './Context';

const Header = () => {
    const { session } = useContext(Context);
    return (
        <div className="Header">
            <h1 className="headerContent" style={{ textAlign: "left" }}>&emsp;ROVER</h1>
            {session.username && <h1 className="headerContent" style={{ textAlign: "center" }}>{session.admin ? <>Admin</> : <>User</>}</h1>}
            {session.username && <h1 className="headerContent" style={{ textAlign: "right" }}>Hello {session.rank} {session.last_name}&emsp;</h1>}
        </div>
    )
}

export default Header;