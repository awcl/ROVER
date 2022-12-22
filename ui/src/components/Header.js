import React, { useContext } from 'react';
import Context from './Context';

const Header = () => {
    const { session } = useContext(Context);
    return (
        <div className="Header">
            <h1 className="headerContent" style={{ textAlign: "left" }}>&emsp;ROVER</h1>
            {session.username && <h1 className="headerContent" style={{ textAlign: "right" }}>Hello "{session.username}"&emsp;</h1>}
        </div>
    )
}

export default Header;