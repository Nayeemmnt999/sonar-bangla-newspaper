import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './componant/Routes/Routes';

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;
