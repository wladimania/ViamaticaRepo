import {RolUsuarios} from "./rol-usuarios.model";

export interface UserDetails {
    userName: string;
    idUsuario: number;
    mail: string;
    password: string;
    status: string;
    sesionActive?: string;
    intentoFallido: number;
    personaByPersonaIdPersona2: Persona;
    rolUsuariosByIdUsuario: RolUsuarios[];
}

export interface Persona {
    identificacion: string;
    apellido: string;
    nombres: string;
    idPersona: number;
    fechaNacimiento: string;
}
