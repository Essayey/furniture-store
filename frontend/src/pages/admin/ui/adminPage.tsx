import { Routes } from "@/shared/consts";
import { Button } from "@/shared/ui";
import { Link, Outlet } from "react-router-dom";

export const AdminPage = () => {
  return (
    <div>
      <Button asChild>
        <Link to={Routes.products}>Создать продукт</Link>
      </Button>
      <Outlet />
    </div>
  );
};
