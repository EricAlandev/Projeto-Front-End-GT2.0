import { Link } from "react-router-dom";

const Direcionamento  = () => {

    return( 
        <>
            <Link to={'/cadastro'}
             className={`text-[16px] text-[#474747] font-["Inter"] font-[350] mt-[9px]`}
             >Cadastre-se</Link>

            <Link to={'/entrar'} className= {`bg-[#C92071]
             text-white  text-center text-[14px]
             font-bold font-["Inter"]
             pt-[8px] mt-[10px]  
             w-[114px] h-[40px]
             rounded-[4px] `}
             >Entrar</Link>
        </>
    )
}

export default Direcionamento; 