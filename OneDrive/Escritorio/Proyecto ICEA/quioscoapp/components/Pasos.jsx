import { useRouter } from "next/router";
const pasos = [
    {paso: 1 , nombre: 'Menú' ,url:'/'},
    {paso: 2 , nombre: 'Resumen' ,url:'/resumen'},
    {paso: 3 , nombre: 'Datos y total' ,url:'/total'},
];


export const Pasos = () => {

    const router = useRouter();
    
    const calcularProgreso = () =>{
        /*
        Funcion realista
        const porcentaje = (paso / 3) * 100 
        return porcentaje;
        */
       //funcion trampa pero que se ve mejor.
       if(router.pathname === "/"){
        return 2;
       }
       else if(router.pathname === "/resumen" ){
        return 50;
       }
       else{
        return 100;
       }
    }


  return (
    <>
        <div className="flex justify-between mb-5">
            {pasos.map((paso) => (
                <button
                onClick={() => {
                    router.push(paso.url);
                }}
                className="text-2xl font-bold" key={paso.paso}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
            style={{width:`${calcularProgreso()}%`}}>

            </div>
        </div>
    </>
  );
};
