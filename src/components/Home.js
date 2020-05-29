import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className="cover">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 md">
            <h1 className="naslov">See the world from different perspective.</h1>
          </div>
          <div className="col">
            <Link to="/products">
              <button className="btnShop btn-lg text-uppercase">shop bikes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


