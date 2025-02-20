import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

const client = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <Outlet />
    </QueryClientProvider>
  );
}

export { RootLayout };