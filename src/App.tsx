import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import "./App.css";
import { RoutesPath } from "./core/constants/RoutesPath.const";
import { CustomersReviewPage } from "./pages/CustomersReview";
import { SaleQualityPage } from "./pages/SaleQualityPage";
import { OrdersPage } from "./pages/OrdersPage";
import { useSelector } from "react-redux";
import { AddShop } from "./pages/AddShopPage";

function MustBeAuthorized({ children }) {
  const user = useSelector((state: any) => state.user);

  const isUser = user.name === "dawid";

  return (
    <>{isUser ? <>{children}</> : <Navigate to={"/" + RoutesPath.LOGIN} />}</>
  );
}

export const PageRouting = createBrowserRouter([
  {
    path: `/${RoutesPath.LOGIN}`,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <MustBeAuthorized>
        <Layout>
          <Outlet />
        </Layout>
      </MustBeAuthorized>
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: `/${RoutesPath.CUSTOMER_REVIEW}`,
        element: <CustomersReviewPage />,
      },
      {
        path: `/${RoutesPath.SALE_QUALITY}`,
        element: <SaleQualityPage />,
      },
      {
        path: `/${RoutesPath.ORDERS_PAGE}`,
        element: <OrdersPage />,
      },
      {
        path: `/${RoutesPath.ADD_SHOP}`,
        element: <AddShop />,
      },
    ],
  },
]);

function App() {
  const theme = useSelector((state: any) => state?.globalSettings?.theme);

  return (
    <>
      <div
        data-bs-theme={theme}
        style={{
          minHeight: "100vh",
          backgroundColor: theme === "light" ? "#fafbfc" : "#212529",
          color: theme === "light" ? "#000" : "#fafbfc",
        }}
      >
        <RouterProvider router={PageRouting} />
      </div>
    </>
  );
}

export default App;
