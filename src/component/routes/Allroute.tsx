import { createBrowserRouter } from "react-router-dom";
import Weblayout from "../Layout/WebLayout";
import ErrorBoundary from "../utils/ErrorBoundary"
import Short from "../Pages/Short";
import Subscription from "../Pages/Subscription";
import History from "../Pages/History";
import Yourvideos from "../Pages/Yourvideos";
import Watch from "../Pages/Watch";
import Showmore from "../Pages/Showmore";
import Likedvideos from "../Pages/Likedvideos";
import Trending from "../Pages/Trending";
import Music from "../Pages/Music";
import Gaming from "../Pages/Gaming";
import HomeScreen from "../Pages/HomeScreen";
import Library from "../Pages/Library"
import DetailedVideo from "../Pages/DetailedVideo";
// import VideosComment from "../Pages/VideosComment";


const Index = createBrowserRouter([
    {
        path: "/",
        element: <Weblayout />,
        errorElement: <ErrorBoundary />,
        children:[
            {
                index: true,
                element: <HomeScreen />,
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
                path: "watch/:id",
                element: <DetailedVideo />,
            },
            // {
            //     path: "viewcomment/:id",
            //     element: <VideosComment />,
            // },
            {
                path: "/Watch",
                element: <Watch />,
            },
            {
                path: "/Likedvideos",
                element: <Likedvideos />,
            },
            {
                path: "/Showmore",
                element: <Showmore />,
            },
            {
                path: "/Trending",
                element: <Trending />,
            },
            {
                path: "/Music",
                element: <Music />,
            },
            {
                path: "/Gaming",
                element: <Gaming />,
            },
            {
                path: "/News",
                element: <Gaming />,
            },
        ]
   
    
    }
])

export default Index