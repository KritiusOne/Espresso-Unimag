import { Inicio } from "./Inicio";
import { InicioContextProvider } from "./InicioContextProvider";

export function InicioExporter() {
  return (
    <InicioContextProvider>
      <Inicio />
    </InicioContextProvider>
  )
}