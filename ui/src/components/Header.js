import React, { useContext } from 'react';
import Context from './Context';

const Header = () => {
    const { session } = useContext(Context);
    return (
        <h1 className="headerContent"> →  ROVER →  {session.username && <> Hello "{session.username}", you're logged in as a{!session.admin ? <>&nbsp;User</>:<>n Administrator</>}</>}
        </h1>
    )
}

export default Header;