import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div className="w-full sm:max-w-md mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export { AuthLayout };