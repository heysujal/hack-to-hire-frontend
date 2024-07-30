import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { MantineProvider } from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Tracker from "./components/Tracker/Tracker";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import UpdateFlight from "./components/UpdateFlight/UpdateFlight";
import { useAdminStore } from "./store/store";
import Support from "./components/Support/Support";
import "./App.css";
function App() {
  const {isAuthenticated} = useAdminStore();
  return (
    <MantineProvider>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="admin" element={<AdminLogin/>}/>
        <Route path="update" element={isAuthenticated ? <UpdateFlight/> :  <Navigate to="/admin" />}/>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
