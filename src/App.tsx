import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LandingPage, AddPersonPage, NotFoundPage, AllPerson } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/addPerson" element={<AddPersonPage />}></Route>
        <Route path="/allPerson" element={<AllPerson />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
