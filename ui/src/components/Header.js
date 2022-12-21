import React, { useContext } from 'react';
import Context from './Context';



const Header = () => {

    const { session, setSession } = useContext(Context);


    return (
        <h1 className="headerContent"> ➡️  ROVER ➡️  {session.username && <> Hello "{session.username}" You're {!session.admin && <>not</>} an Admin</>}
        </h1>
    )
}


export default Header;