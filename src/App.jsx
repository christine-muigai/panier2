// src/App.jsx
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./Login";
import Register from "./Register";
import Home from './Home';
import CategoryPage from './CategoryPage';
import Checkout from './Checkout';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-gray-800 p-6">
      {!user ? (
        <div className="space-y-8 w-full max-w-md">
          <Login />
          <Register />
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}