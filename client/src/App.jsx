import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './routes/Homepage/Homepage.route';
import OrderPage from './routes/Order-page/Order-page.route';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='order' element={<OrderPage />} />
    </Routes>
  );
}

export default App;
