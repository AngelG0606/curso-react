import { Link } from "react-router-dom";
import FormProduct  from '../components/FormProduct'

export default function MainView() {

    const parametro = 2323232

  return (
        <>
            <h1>Página Principal</h1>

            <Link to={'/nosotros'} className="my-10 bg-purple-500 py-2 px-5 rounded-lg hover:bg-purple-600 text-white">
                Página de nosotros
            </Link>

            <Link to={`/parametro/${parametro}`} className="my-10  py-2 px-5 rounded-lg hover:bg-purple-600 text-white">
                Página con parametros
            </Link>


            <FormProduct />
            
        </>  
    )
}
