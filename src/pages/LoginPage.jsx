import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LoginPage() {
  const [getEmail, setEmail]= useState("")
  const [getPassword, setPassword]= useState("")

  function IniciarSesion (){
    if (setEmail === 'emanuel@email.com' && setPassword == '12345'){
      redirectAlert('Bienvenido al sistema..', 'success', redireccion, '/home')
    }else {
      generalAlerts('Error de credenciales', 'Usuario o correo incorrectos', 'error')
    }
  }
  return (
    <main class="flex-1 bg-[#fafaf] py-14 text-[#111111] font-sans">
      <div class="mx-auto w-full max-w-[1180px] px-5 flex justify-center items-center py-5">
        <div class="w-full max-w-[520px] bg-white border-[3px] border-[#111111] shadow-sm shadow-[4px_4px_0px_#111111] flex flex-col transition-transform duration-150 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[4px_4px_0px_#dc2626] rounded-xl">
          <div class="px-5 py-3 border-b-2 border-[#111111] bg-red-50 flex items-center justify-between">
            <span class="inline-block font-mono text-xs font-bold uppercase px-2 py-1 border-2 border-[#111111] bg-red-600 text-[#111111]">
              ACCESO PRINCIPAL
            </span>
            <span class="font-mono text-sm">MI CUENTA</span>
          </div>
          <div class="p-5 flex-1">
            <div class="mb-8 pb-5 border-b-2 border-[#111111]">
              <span class="font-mono text-sm">BIENVENIDO DE NUEVO</span>
              <h1 class="mt-1.5 font-extrabold tracking-[-0.02em] text-[#111111] leading-[1.15] text-[1.85rem]">
                Iniciar Sesión
              </h1>
              <p class="mt-2 text-[#55534e] text-[0.95rem] leading-[1.6]">
                Ingresa tus credenciales para conocer tu proximo destino.
              </p>
            </div>
            <form>
              <div class="mb-5">
                <label
                  for="correo"
                  class="block text-[0.88rem] font-bold uppercase tracking-[0.02em] mb-1.5 text-[#111111]"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  class="w-full px-3.5 py-3 text-[0.95rem] font-medium text-[#111111] bg-white border-2 border-[#111111] outline-none shadow-[2px_2px_0px_#111111] placeholder:text-[#8c8980] transition duration-150 focus:bg-red-50/40 focus:-translate-x-[1px] focus:-translate-y-[1px] focus:shadow-[3px_3px_0px_#111111]"
                  placeholder="tu.nombre@ejemplo.com"
                />
              </div>
              <div class="mb-5">
                <div class="flex items-center justify-between gap-2 mb-1.5">
                  <label
                    for="clave"
                    class="block text-[0.88rem] font-bold uppercase tracking-[0.02em] text-[#111111]"
                  >
                    Contraseña
                  </label>
                  <a
                    href="#"
                    class="text-sm text-[#55534e] underline hover:text-[#111111]"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <input
                  type="password"
                  id="clave"
                  name="clave"
                  class="w-full px-3.5 py-3 text-[0.95rem] font-medium text-[#111111] bg-white border-2 border-[#111111] outline-none shadow-[2px_2px_0px_#111111] placeholder:text-[#8c8980] transition duration-150 focus:bg-red-50/40 focus:-translate-x-[1px] focus:-translate-y-[1px] focus:shadow-[3px_3px_0px_#111111]"
                  placeholder="••••••••••••"
                />
              </div>
              <button
                id="btn-login"
                type="button"
                class="w-full inline-flex items-center justify-center gap-2 px-[1.4rem] py-3 font-extrabold text-[0.9rem] uppercase tracking-[0.03em] border-2 border-[#111111] shadow-[4px_4px_0px_#111111] cursor-pointer bg-red-600 text-[#111111] transition duration-150 hover:bg-red-700 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111111]"
              >
                Iniciar Sesión en MARVIA
              </button>
            </form>
            <div class="mt-8 pt-5 border-t border-[#111111] text-center text-[0.9rem] text-[#55534e]">
              ¿Aún no tienes una cuenta?
              <a
                href="pages/registro.html"
                class="font-extrabold text-[#111111] underline decoration-2 hover:bg-red-100"
              >
                Crear cuenta nueva
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
