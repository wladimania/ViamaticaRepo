import { UserDetails } from "./user-details.model";

export interface User {
    codigoRespuesta: string;
    mensajeRespuesta: string;
    bodyRespuesta: {
        usuarioLogeado: UserDetails;  // Aquí puedes reutilizar UserDetails.
    };
}
