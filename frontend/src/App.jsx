import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';
import {MovieProvider} from './contexts/MovieContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {UserProvider} from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
    <MovieProvider>
    <div>
      <NavBar />
    <main className="main-content">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignIn />} />
      </Routes>
    </main>
    </div>
    </MovieProvider>
    </UserProvider>
  )
}

export default App;
