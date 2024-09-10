
import Home from "./pages/Home"
import Techniques from "./pages/Techniques";
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
                path: ""
            }

        ]
    }
 
]

export default routes;