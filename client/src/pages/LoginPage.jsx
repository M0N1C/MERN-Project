import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Para redirigir al usuario después del login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hacer una solicitud POST al backend
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Enviar datos de inicio de sesión
      });

      const data = await response.json();

      if (response.ok) {
        // Inicio de sesión exitoso
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token); // Guardar token JWT en localStorage
        alert("Login successful!"); // Notificar al usuario
        navigate("/protected"); // Redirigir a una ruta protegida o dashboard
      } else {
        // Manejar errores
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://voss-photography.com/wp-content/uploads/2016/09/berlin-skyline-sonnenuntergang-molecule-man.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Mostrar errores */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
          >
            Log In
          </button>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-black">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
