import { Outlet } from "react-router-dom"
import { Sidebar } from "lucide-react"
import LeftSidebar from "./pages/Home/Sidebar"

export default function Layout() {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />   {/* Pages render here */}
      </div>
    </div>
  )
}
