import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './src/components/Header';
import { Provider} from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import store from './src/utils/store';
import TaskInput from './src/components/TaskInput';
import TaskList from './src/components/TaskList';




const App = ()=>{
    return(
        <Provider store = {store}>
            <Header/>
            <Outlet/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <TaskInput/>
            },
            {
                path : "/your-tasks",
                element :  <TaskList/>
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}/>)