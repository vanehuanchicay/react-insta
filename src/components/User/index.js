import React from 'react';
import userval from '../../userval.jpg';
//import NavBar from '../../components/NavBar'


const User = (user) => (
	<div>
  	<div className="row info">
        <div className="col-xs-1 col-md-6">
          <img src={ userval } alt="" className="profile circle"/>
        </div>
        <div className="col-xs-5 col-md-6 cont-info">
          <p><span className="name">ValePv</span><span className="edit">Editar perfil</span><a href="#" className="dot">&#176; &#176; &#176;</a></p>
          <div className="row details">
            <div className="col-xs-12 col-md-8 info">
              <p>
                <span><strong>327</strong> publicaciones</span>
                <span><strong>167</strong> seguidores </span>
                <span><strong>173</strong> seguidos</span>
              </p>
              <h6><strong>Valeska Pérez V.</strong></h6>
              <button type="button" className="btn btn-primary hidden-xs" data-toggle="modal" data-target="#product_view">Add Picture</button>
            </div>
          </div>
        </div>
      </div>
  </div>
	)
export default User;