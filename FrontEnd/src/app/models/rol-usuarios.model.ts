export interface RolUsuarios {
    rolIdRol: number;
    usuariosIdUsuario?: number;
    rolByRolIdRol?: Rol;
    // Suponiendo que RolEntity y UsuariosEntity sean equivalentes a Rol y User
    // rolByRolIdRol?: Rol;
    // usuariosByUsuariosIdUsuario?: User;
}

export interface Rol {
    idRol: number;
    rolName: string;
}
