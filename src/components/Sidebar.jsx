import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
        return (
                <div className='  p-4 bg-gradient-to-b from-slate-900 to-slate-700 border-white shadow-2xl flex flex-col h-[100vh] w-48'>
                        <Link className="flex mt-4 items-center hover:bg-slate-900" to={'/'}>
                        <MdDashboard />Dashboard
                        </Link>

                        <Link className="flex mt-4 items-center hover:bg-slate-900" to={'/employee'}>
                        <IoIosPeople /> Manage Employees
                        </Link>


                        <Link className="flex mt-4 items-center hover:bg-slate-900" to={'/category'}>
                        <BiSolidCategory /> Category
                        </Link>


                        <Link className="flex mt-4 items-center hover:bg-slate-900" to={'/'}>
                        <CgProfile /> Profile
                        </Link>

                        <Link className="flex mt-4 items-center hover:bg-slate-900" to={'/'}>
                        <AiOutlineLogout /> Logout
                        </Link>

                </div>
        );
};

export default Sidebar;