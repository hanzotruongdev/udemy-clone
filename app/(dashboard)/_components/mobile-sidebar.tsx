

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

export interface IMobileSidebarProps {
}

export function MobileSidebar(props: IMobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"}
        className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
