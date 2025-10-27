import Home from './pages/Home/Home'
import {
  RouterProvider,
  Link
} from "react-router-dom";



export default function App() {
    return (<>
        <RouterProvider router={router} />
        <div>Hello world!</div>
    </>)
}