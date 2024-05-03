package com.example.login.util.sesiones;

import com.example.login.util.usuario.UsuarioInterfa;

import java.sql.Date;

public interface SessionsInterface {
    Integer getIdSesiones();
    Date getFechaIngreso();
    Date getFechaCierre();
    UsuarioInterfa getUsuariosByUsuariosIdUsuario();
}