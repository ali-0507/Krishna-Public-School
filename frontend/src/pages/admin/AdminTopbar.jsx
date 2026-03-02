// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { FaBell, FaCog } from "react-icons/fa";

// export default function AdminTopbar() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="admin-topbar">
//       <div>
//         <h5>Dashboard</h5>
//         <small>Krishna Public School — Admin</small>
//       </div>

//       <div className="topbar-right">
//         <FaBell />
//         <FaCog />
//         <span className="admin-user">
//           {user?.name}
//         </span>
//       </div>
//     </div>
//   );
// }

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaBell, FaCog, FaBars } from "react-icons/fa";

export default function AdminTopbar({ setSidebarOpen }) {
  const { user } = useContext(AuthContext);

  return (
    <div className="admin-topbar">
      <div className="topbar-left">
        <FaBars
          className="hamburger"
          onClick={() => setSidebarOpen((prev) => !prev)}
        />
        <div>
          <h5>Dashboard</h5>
          <p>Krishna Public School, Tendua — Admin</p>
        </div>
      </div>

      <div className="topbar-right">
        <FaBell className="fs-5"/>
        <FaCog className="fs-5" />
        <span className="admin-user">
          {user?.name}
        </span>
      </div>

    </div>
  );
}