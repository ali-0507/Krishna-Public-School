// import { Outlet } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import AdminTopbar from "./AdminTopbar";
// import "./admin.css";

// export default function AdminLayout() {
//   return (
//     <div className="admin-layout">
//       <AdminSidebar />

//       <div className="admin-main">
//         <AdminTopbar />
//         <div className="admin-content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import "./admin.css";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="admin-layout">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="admin-main">
        <AdminTopbar setSidebarOpen={setSidebarOpen} />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}