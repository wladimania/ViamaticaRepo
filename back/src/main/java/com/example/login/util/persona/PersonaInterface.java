package com.example.login.util.persona;

import java.sql.Date;
import java.util.List;

public interface PersonaInterface {
    Integer getIdPersona();
    String getNombres();
    String getApellido();
    String getIdentificacion();
    Date getFechaNacimiento();
}