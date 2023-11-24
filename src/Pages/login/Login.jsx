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
            <LogInForm />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
