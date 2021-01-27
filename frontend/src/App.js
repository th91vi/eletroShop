import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./pages/HomeScreen"
import ProductScreen from "./pages/ProductScreen"
import CartScreen from "./pages/CartScreen"
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"
import ProfileScreen from "./pages/ProfileScreen"
import ShippingScreen from "./pages/ShippingScreen"
import PaymentScreen from "./pages/PaymentScreen"
import PlaceOrderScreen from "./pages/PlaceOrderScreen"
import OrderScreen from "./pages/OrderScreen"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
