import React, { useContext } from 'react';
import Context from './Context';

const Header = () => {
    const { session } = useContext(Context);
    return (
        <h1 className="headerContent">&nbsp;ROVER</h1>
    )
}

export default Header;