import React from "react";
import {HeaderStyle, LiStyle, LinkStyle} from "./style"

function Header(){
  return (
    <HeaderStyle>
      <nav>
        <ul>
          <LiStyle><LinkStyle to='/'>Inicio</LinkStyle></LiStyle>
          <LiStyle><LinkStyle to='/materia'>Materia</LinkStyle></LiStyle>
          <LiStyle><LinkStyle to='/contato'>Contato</LinkStyle></LiStyle>
          <LiStyle><LinkStyle to='/sobre'>Sobre</LinkStyle></LiStyle>
          <LiStyle><LinkStyle to='/login'>Login</LinkStyle></LiStyle>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header;