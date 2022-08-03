import { useState } from "react";
import { Navigate } from "react-router-dom";
import { registerUser } from "./api";

function Register() {
  const [email, setEmail] = useState("");
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-200">
      {sessionStorage.getItem("token") ? (
        <Navigate to="/list" replace={true} />
      ) : null}
      <div className="m-auto bg-white rounded p-8">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          Cadastre seu email:
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={async () => {
            await registerUser(email);
            setAuth(true);
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}

export default Register;
