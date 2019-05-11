import React from 'react';
import Auxiliry from '../../hoc/Auxiliry';

const layout = (props) => (
    <Auxiliry>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliry> 
);

export default layout;