import React, { useContext, useEffect } from 'react'
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
    const {user} =useContext(AuthContext);
    
     console.log(user)
   

    return (
        <div className="d-flex flex-column bg-light border p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <div className="d-flex align-items-center mb-4">
    <a href="/" className="d-flex align-items-center text-decoration-none">
      <img
        src={user?.photoURL ? `${user.photoURL}?t=${new Date().getTime()}` : "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"}
        alt="Flowbite logo"
         className="rounded-circle"
        style={{ width: "30px", height: "30px", marginRight: "10px" }}
      />
      <span className="fs-5 fw-bold text-dark">{user?.displayName || "Demo User"}</span>
    </a>
  </div> 
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/admin/dashboard" className="nav-link d-flex align-items-center text-dark">
                <HiChartPie className="me-2" />
                Dashboard
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/admin/dashboard/upload" className="nav-link d-flex align-items-center text-dark">
                <HiOutlineCloudUpload className="me-2" />
                Upload Book
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/admin/dashboard/manage" className="nav-link d-flex align-items-center text-dark">
                <HiInbox className="me-2" />
                Manage Books
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link d-flex align-items-center text-dark">
                <HiUser className="me-2" />
                Users
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <HiShoppingBag className="me-2" />
                Products
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/login" className="nav-link d-flex align-items-center text-dark">
                <HiArrowSmRight className="me-2" />
                Sign In
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/logout" className="nav-link d-flex align-items-center text-dark">
                <HiTable className="me-2" />
                Sign Out
              </a>
            </li>
          </ul>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <HiChartPie className="me-2" />
                Upgrade to Pro
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <HiViewBoards className="me-2" />
                Documentation
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <BiBuoy className="me-2" />
                Help
              </a>
            </li>
          </ul>
        </div>
      );
}

export default SideBar
