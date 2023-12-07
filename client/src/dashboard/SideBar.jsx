import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/profile.jpg"
import { useContext } from 'react';

import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
//logout
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {logout} = useContext(AuthContext)
  const handleLogout = () => {
      logout().then(() => {
          alert("sign out successfully!");
          navigate(from, {replace: true})
      }). catch((error) => {

      });
  }

  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
        <Sidebar aria-label="Default sidebar example" className="h-screen w-80">
        <Sidebar.Logo href="#">
          <p>Welcome, {
       user?.displayName || 
       user?.email
       }</p>
       
      </Sidebar.Logo>
      <Sidebar.Items className='ml-4' >
        <Sidebar.ItemGroup>
         <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} >
            Upload Product
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} >
            Manage Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item onClick={handleLogout} icon={HiTable}>
              Log Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar