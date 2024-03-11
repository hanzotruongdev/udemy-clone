import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shaddow-sm">
      {/* mobile sidebar */}
      <MobileSidebar />
      {/* Nav routes */}
      <NavbarRoutes />
    </div>
  )
}


