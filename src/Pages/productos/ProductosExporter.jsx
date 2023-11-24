import { Productos } from "./Productos";
import { InicioContextProvider } from "./InicioContextProvider";

export function ProductosExporter() {
  return (
    <InicioContextProvider>
      <Productos />
    </InicioContextProvider>
  )
}