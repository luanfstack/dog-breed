import { useState } from "react";
import { Navigate } from "react-router-dom";
import { registerUser } from "./api";

function Register() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);

  if (sessionStorage.getItem("token"))
    return <Navigate to="/list" replace={true} />;

  return (
    <div className="flex min-h-screen bg-gray-200">
      <div className="m-auto bg-white rounded p-8 text-center">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          ></label>
          Cadastre seu email:
          {token === false ? (
            <p className="text-red-600 text-sm">Erro: email invalido!</p>
          ) : null}
          <input
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setToken(undefined);
            }}
          />
        </div>
        <button
          className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={() => {
            setIsLoading(true);
            registerUser(email).then((token) => {
              setToken(token);
              setIsLoading(false);
            });
          }}
        >
          {isLoading ? "Carregando" : "Confirmar"}
        </button>
      </div>
    </div>
  );
}

export default Register;
