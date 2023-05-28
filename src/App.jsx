import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Home = lazy(()=> import("./pages/Home"));
const About = lazy(()=> import("./pages/About"));
const Contact = lazy(()=> import("./pages/Contact"));
const StudentUser = lazy(()=> import("./user/Student"));
const StudentLogin = lazy(()=> import("./user/StudentLogin"));
const Admin = lazy(()=> import("./admin/AdminPanel"));
const AdminLogin = lazy(()=> import("./admin/AdminLogin"));

function App() {
  const admin = false;
  const student =  false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Suspense fallback='Loading...'><Home /></Suspense>} />
        <Route path='/about' element={<Suspense fallback='Loading...'><About /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback='Loading...'><Contact /></Suspense>} />
        <Route path='/user' element={<Suspense fallback='Loading...'>
          {
            student === false ? <StudentLogin /> :<StudentUser />
          }
        </Suspense>} />
        <Route path='/admin' element={<Suspense fallback='Loading...'>
          { admin === false ? <AdminLogin />:<Admin /> }
        </Suspense>} />
        <Route path='*' element={<Suspense fallback='Loading...'><Home /></Suspense>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
