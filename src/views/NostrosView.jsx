import { Link } from "react-router-dom";

export default function NostrosView() {
  return (
    <>

        <h1>Página Nosotros</h1>
        <Link
            to={'/'}
        >
            Volver a la página principal
        </Link>
    </>
  )
}
