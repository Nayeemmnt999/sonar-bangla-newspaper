import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";
import Catagory from "../../Pages/Catagory/Catagory";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch(`http://localhost:5000/news`);
                }
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/catagoriNews/${params.id}`);
                }
            },
            {
                path: '/news/:id',
                element: <News></News> ,
                loader : async ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`);
                }
            }
        ]
    }
])