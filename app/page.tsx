import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body bg-success">
          <h2 className="card-title text-white">Scrum4u</h2>
        </div>
        <div className="card-body">
          <h2 className="card-title">Inicia sesión</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Correo electronico</span>
            </label>
            <input type="text" placeholder="example@hotmail.com" className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text">Contraseña</span>
            </label>
            <input type="password" placeholder="********" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-success text-white">Iniciar sesion</button>
          </div>
        </div>
      </div>
    </main>
  )
}
