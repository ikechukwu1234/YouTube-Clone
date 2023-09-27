import { createBrowserRouter } from "react-router-dom";
import Weblayout from "../Layout/WebLayout";
import ErrorBoundary from "../utils/ErrorBoundary"
import Home from "../Pages/Home";
import Short from "../Pages/Short";
import Subscription from "../Pages/Subscription";
import Library from "../Pages/Library";
import History from "../Pages/History";
import Yourvideos from "../Pages/Yourvideos";
import Watchlater from "../Pages/Watchlater";
import Showmore from "../Pages/Showmore";
import Likedvideos from "../Pages/Likedvideos";


const Index = createBrowserRouter([
    {
        path: "/",
        element: <Weblayout />,
        errorElement: <ErrorBoundary />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/Short",
                element: <Short />,
            },
            {
                path: "/Subscription",
                element: <Subscription />,
            },
            {
                path: "/Library",
                element: <Library />
            },
            {
                path: "/History",
                element: <History />,
            },
            {
                path: "/Yourvideo",
                element: <Yourvideos/>,
            },
            {
                path: "/Watchlater",
                element: <Watchlater />,
            },
            {
                path: "/Likedvideos",
                element: <Likedvideos />,
            },
            {
                path: "/Showmore",
                element: <Showmore />,
            },
        ]
   
    
    }
])

export default Index