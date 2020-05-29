import React from 'react'
import styled from 'styled-components'


export default function Footer() {
  return (
    <FooterWrapper className="d-flex flex-column text-center align-items-center text-monospace border-top pt-2 footer" >
      <small className="mb-2">Brache Tabanich 26 | Pedal World &copy; 2020 | All rights reserved.</small>
      <div>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter fa-lg pr-2"></i>
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook fa-lg pr-2 pl-2"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram fa-lg pl-2"></i>
        </a>
      </div>
    </FooterWrapper >
  )
}

const FooterWrapper = styled.div`
background: #DCDCDC;

i {
  cursor: pointer;
}


`