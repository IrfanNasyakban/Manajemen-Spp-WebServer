import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/navbar";
import SiswaList from "./components/SiswaList";
import BayarList from "./components/BayarList";
import BayarEdit from "./components/BayarEdit";
import SiswaEdit from "./components/SiswaEdit";
import Dashboard from './components/dashboard';
import Footer from './components/Footer';
import SiswaAdd from './components/SiswaAdd';
import BayarAdd from './components/BayarAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={(
          <>
            <Navbar/>
            <Dashboard/>
          </>
        )} />
        <Route path="/siswa" element={(
          <>
            <Navbar/>
            <SiswaList/>
            <Footer/>
          </>
        )} />
        <Route path="/siswa/add" element={(
          <>
            <Navbar/>
            <SiswaAdd/>
            <Footer/>
          </>
        )} />
        <Route path="/siswa/edit/:id" element={(
          <>
            <Navbar/>
            <SiswaEdit/>
            <Footer/>
          </>
        )} />
        <Route path="/bayar" element={(
          <>
            <Navbar/>
            <BayarList/>
            <Footer/>
          </>
        )} />
        <Route path="/bayar/add" element={(
          <>
            <Navbar/>
            <BayarAdd/>
            <Footer/>
          </>
        )} />
        <Route path="/bayar/edit/:id" element={(
          <>
            <Navbar/>
            <BayarEdit/>
            <Footer/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
