import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Public } from './container/public';
import Path from './ultis/Path';

function App() {
    const { test } = useSelector((state) => state.app);
    console.log(test);
    return (
        <div>
            <Routes>
                <Route path={Path.PUBLIC} element={<Public />}>
                    <Route path={Path.HOME} element={<Home />} />
                    <Route path={Path.LOGIN} element={<Login />} />
                    <Route path={Path.STAR} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
