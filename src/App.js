import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  return( 
    <div className='container-fluid'>
      <div className= 'row'>
        <div className='col-auto min-vh-100 bg-light'>
          <ul>
            <li>
              <a className='nav-link'>
                <i className='bi-house' /> <span className='ms-1'>Home</span>
              </a>
            </li>

            <li>
              <a className='nav-link'>
                <i className='bi-star' /> <span className='ms-1'>Explore</span>
              </a>
            </li>

            <li>
              <a className='nav-link'>
                <i className='bi-bell' /> <span className='ms-1'>Notifications</span>
              </a>
            </li>

            <li>
              <a className='nav-link'>
                <i className='bi-chat' /> <span className='ms-1'>Messages</span>
              </a>
            </li>

            <li>
              <a className='nav-link'>
                <i className='bi-heart' /> <span className='ms-1'>Likes</span>
              </a>
            </li>

            <li>
              <a className='nav-link'>
                <i className='bi-person' /> <span className='ms-1'>Profile</span>
              </a>
            </li>

        </ul>
      </div>

      <div className='col'>
        <form className='col-form'>
        <div className="col-form-content">
          <h3 className="col-form-title">Entrar</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="fulane@email.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="******"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button id='botao' type="submit" className="btn">
              Entrar
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
          <a href="#">Esqueci a senha</a>
          </p>
        </div>
        </form>

      </div>

    </div>
  </div>
  )
}


export default Sidebar;
