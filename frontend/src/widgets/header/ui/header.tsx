import { Routes } from "@/shared/consts";
import { Button } from "@/shared/ui";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" bg-accentPrimary  py-6">
      <div className=" flex gap-5 justify-center ">
        <Button asChild>
          <Link to={Routes.about}> About page</Link>
        </Button>
        <Button asChild>
          <Link to={Routes.cart}> Cart page</Link>
        </Button>
        <Button asChild>
          <Link to={Routes.main}> Main page</Link>
        </Button>
      </div>
    </header>
  );
};
