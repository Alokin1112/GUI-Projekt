import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import './App.css'
import { RoutesPath } from "./core/constants/RoutesPath.const";
import { CustomersReviewPage } from "./pages/CustomersReview";
import { SaleQualityPage } from "./pages/SaleQualityPage";
import { OrdersPage } from "./pages/OrdersPage";

export const PageRouting = createBrowserRouter([
  {
    path: `/${RoutesPath.LOGIN}`,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout><Outlet /></Layout >,
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
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={PageRouting} />
    </>
  )
}

export default App
