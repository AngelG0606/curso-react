import { Link, useParams } from "react-router-dom"

export default function ParamView() {

    const parametro = useParams()
    const id = parametro.id

  return (
    <>
        <h1 className="mb-10">Página Parametros {id}</h1>

        <Link to={`/`} className="my-10 bg-purple-500 py-2 px-5 rounded-lg hover:bg-purple-600 text-white">
                        Página Principal
                    </Link>
    </>
  )
}
