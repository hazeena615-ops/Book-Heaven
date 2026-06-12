// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import SideBar from './SideBar'




// const DashboardLayout = () => {
//   return (
//     <div className="d-flex flex-column flex-md-row gap-4" >
//         <SideBar/>
//       <Outlet/>
//     </div>
//   )
// }

// export default DashboardLayout

import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const DashboardLayout = () => {
  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <SideBar />
      <div
        className="flex-grow-1"
        style={{
          overflowY: 'auto',
          height: '100vh',
          padding: '1rem',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

