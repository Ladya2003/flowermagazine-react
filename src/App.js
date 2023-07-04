import logo from './images/logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { History } from './pages/History'
import { Charact } from './pages/Charact'
import { Care } from './pages/Care'

// ползунок переключения темы
import Toggle from './pages/Toogle'

import './style/style.css'

function App() {
  return (
      <div className="html-container">
          <nav id="main-nav">
              <ul>
                  <li><img src={logo} alt="" /></li>
                  {/* Link перехватывает всю маршрутизацию и позволяет обрабатывать весь контент на клиентской части */}
                  <li> <Link to="/">Главная</Link></li>
                  <li> <Link to="/history">История</Link></li>
                  <li> <Link to="/charact">Характеристика</Link></li>
                  <li> <Link to="/care">Уход</Link></li>
                  <li className="toggle-theme"><Toggle /></li>
              </ul>
          </nav>
          <Routes>
            <Route path="*" element={<MainPage />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/charact" element={<Charact />}></Route>
            <Route path="/care" element={<Care />}></Route>
          </Routes>
      </div>
  );
}

export default App;
