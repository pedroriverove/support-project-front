import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className="max-w-[700px] m-auto my-16 p-4">
            <h1 className="text-3xl text-center font-bold mb-8">
                Proyecto de soporte
            </h1>
            <div>
                <h1 className="text-2xl font-bold py-2">
                    Iniciar sesión
                </h1>
                <p className="py-2">
                    ¿Aún no tienes una cuenta? <Link to="/signup" className="underline">Regístrate.</Link>
                </p>
            </div>
            <form>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Correo electrónico</label>
                    <input className="border p-3" type="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Contraseña</label>
                    <input className="border p-3" type="Password" />
                </div>
                <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default SignIn
