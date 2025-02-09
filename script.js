import { createRoot } from "react-dom/client";
import App from "./components/App";
// import { BrowserRouter, RouterProvider } from "react-router-dom";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import ContactPage from "./components/Contact";
import CountryDetail from "./components/countryDetail";
// import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:country",
                element: <CountryDetail />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            }
        ],
    }
])
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

