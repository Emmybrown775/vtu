import { ReactNode } from "react";
import AppHeader from "../../components/Layout/AppHeader";
import AppSideBar from "../../components/Layout/AppSideBar";
import { SidebarProvider } from "../../components/providers/SidebarProvider";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({ children }: LayoutInterface) {
  return (
    <>
      <SidebarProvider>
        <AppHeader />
        <AppSideBar />

        <div className="pt-24 px-8 bg-blue-50 min-h-screen flex flex-col ">
          {children}
        </div>
      </SidebarProvider>
    </>
  );
}

export default Layout;
