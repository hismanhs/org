import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="@org/shell" />} />
        <Route path="/shop" element={<Shop />} />
        {/* report */}
        <Route path="/cart" element={<Cart />} />
        {/* reference data  */}
        {/* shared UI */}
      </Routes>
    </React.Suspense>
  );
}

export default App;
