import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OrderConfirmed from './pages/OrderConfirmed'
import Order from './pages/Order'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pedido" element={<Order />} />
      <Route path="/pedidoconfirmado" element={<OrderConfirmed />} />
    </Routes>
  )
}

export default Router
