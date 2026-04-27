import { useParams } from "react-router-dom"

export default function ParamView() {

    const parametro = useParams()
    const id = parametro.id

  return (
    <>
        <h1 className="mb-10">Página Parametros {id}</h1>
    </>
  )
}
