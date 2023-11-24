import React from 'react';
import { LayoutPage } from '../../components/layout/LayoutPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import bgImg from '../../assets/bgLogin.jpg';
import { LogInForm } from '../../components/forms/LogInForm.jsx';
import './App.css';

export function Login() {
  return (
    <LayoutPage className="Login">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: 'white' }}>
            <div className="featured-image mb-3">
              <img src="https://cdn.discordapp.com/attachments/1177276148951031879/1177315774579355718/512.png?ex=65720fc2&is=655f9ac2&hm=253512155d073dad08be5679aa9cd60614f1fbcdc5cc20c46a56ada05f91d4c5&" className="img-fluid" style={{ width: '250px' }} alt="Featured" />
            </div>
           
            
          </div>

          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Bienvenido</h2>
                <p>Inicia Sesion</p>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Correo Electronico" />
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Contraseña" />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    <small>Recuerdame</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Olvidaste tu Contraseña?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
            
             
              </div>
              <div className="row">
                <small>
                  No tienes una cuenta?? <a href="#">Registrate</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
