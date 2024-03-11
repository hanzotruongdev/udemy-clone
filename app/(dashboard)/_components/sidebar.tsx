import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

export default function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shaddow-sm">
      <div className="p-6">
        {/* Logo */}
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        {/* Sidebar routes */}
        <SidebarRoutes />
      </div>
    </div>
  )
}