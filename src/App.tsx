import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import './App.css';
import { FavoritesPage } from './pages/FavoritesPage';
import { HomePage } from './pages/HomePage';
import { MoviePage } from './pages/MoviePage';

const App: FC = () => {
  return (
    <div className="app">
      <nav className="menu-nav">
        <NavLink to={'/'}>Главная</NavLink>
        <NavLink to={'/favorites'}>Избранное</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:imdbID" element={<MoviePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;