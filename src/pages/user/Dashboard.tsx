import AppHeader from "../../components/Layout/AppHeader";
import AppSideBar from "../../components/Layout/AppSideBar";
import { SidebarProvider } from "../../components/providers/SidebarProvider";

function Dashboard() {
  return (
    <>
      <SidebarProvider>
        <AppHeader />
        <div>
          <AppSideBar />
        </div>
      </SidebarProvider>
    </>
  );
}

export default Dashboard;
