import Image from "next/image"
import { useQuiosco } from "../hooks/useQuiosco";
import Categoria from "./Categoria";


const Sidebar = () => {

  const {categorias} = useQuiosco();

  return (
    <>
      <div className = "ml-24">
        <Image width={180} height={70} src="/assets/img/logo.svg" 
          alt = "imagen logotipo"
          className="mr-5"
          />
      </div>

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria key = {categoria.id} 
            categoria = {categoria}
            />
          ))}
        </nav>
    </>
  );
};

export default Sidebar;
