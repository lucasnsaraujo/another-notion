import * as Collapsible from "@radix-ui/react-collapsible";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export function Default() {
  return (
    <Collapsible.Root defaultOpen={true}>
      <div className="h-screen w-screen text-rotion-100 flex flex-row bg-rotion-900">
        <Sidebar />
        <div className="flex-1 flex-col flex max-h-screen">
          <Header />
          <Outlet />
        </div>
      </div>
    </Collapsible.Root>
  );
}
