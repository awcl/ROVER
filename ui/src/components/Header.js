import React, { useContext } from 'react';
import Context from './Context';



const Header = () => {

    const { session, setSession } = useContext(Context);


    return (
        <div className="headerContent">&nbsp;ROVER{session.username && <> ➡️ Hello "{session.username}" 🙂 You're {!session.admin && <>not</>} an admin</>}
        </div>
    )
}


export default Header;