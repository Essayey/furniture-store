import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  navbar?: ReactNode;
  footer?: ReactNode;
};
export const Layout = (props: LayoutProps) => {
  const { footer, navbar } = props;
  return (
    <div className="flex flex-col min-h-screen w-screen bg-backgroundColor">
      {navbar}
      <div className="flex-1">
        <div>
          <Outlet />
        </div>
      </div>
      <div>{footer}</div>
    </div>
  );
};
