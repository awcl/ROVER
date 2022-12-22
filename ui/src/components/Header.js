import React, { useContext } from 'react';
import Context from './Context';

const Header = () => {
    const { session } = useContext(Context);
    return (
        <h1 className="headerContent"> ➡️  ROVER ➡️  {session.username && <> Hello "{session.username}", you're {!session.admin && <>not</>} an Admin</>}
        </h1>
    )
}

export default Header;