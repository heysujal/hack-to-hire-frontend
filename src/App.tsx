import Globe from "./components/magicui/globe";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { Image } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About/About";
import Tracker from "./components/Tracker/Tracker";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import UpdateFlight from "./components/UpdateFlight/UpdateFlight";
import { useAdminStore } from "./store/store";
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
        </Route>
        <Route path="admin" element={<AdminLogin/>}/>
        <Route path="update" element={isAuthenticated ? <UpdateFlight/> :  <Navigate to="/admin" />}/>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

      {/* <div>
        <img
          className="indigo-logo"
          src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"
          aria-label="Indigo Logo Image"
          alt="IndiGo Logo"
          loading="lazy"
        />

        <h1 className="text-3xl welcome-msg">
          Welcome to <span className="text-green-600">IndiGo</span> Flight
          Tracker!
        </h1>
        <Globe className="globe" />
      </div> */}
    </MantineProvider>
  );
}

export default App;
