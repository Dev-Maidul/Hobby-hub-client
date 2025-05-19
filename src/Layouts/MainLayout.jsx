import React from 'react';

import { Outlet } from 'react-router';



const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
           
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;