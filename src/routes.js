
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import Battle from "./pages/Battle";
import PlayerForm from "./pages/History";
import App from "./App"
const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/battlepage",
                element: <Battle/>

            },
            {
                path: "/playerform",
                element: <PlayerForm/>
            }

        ]
    }
 
]

export default routes;