// src/Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registration successful. You can now log in.");
    } catch (err) {
      setMessage("Registration failed. Try again with a valid email.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {message && <p className="text-green-600 text-sm">{message}</p>}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded"
      >
        Register
      </button>
    </form>
  );
}
