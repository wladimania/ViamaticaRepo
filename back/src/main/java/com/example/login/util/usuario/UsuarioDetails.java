package com.example.login.util.usuario;

import com.example.login.util.persona.PersonaInterface;
import com.example.login.util.rol.RolUsuariosInterface;

import java.util.List;

public interface UsuarioDetails {
        Integer getIdUsuario();
        String getUserName();
        String getMail();
        String getStatus();
        Integer getIntentoFallido();

        List<RolUsuariosInterface> getRolUsuariosByIdUsuario();
        PersonaInterface getPersonaByPersonaIdPersona2();
}


