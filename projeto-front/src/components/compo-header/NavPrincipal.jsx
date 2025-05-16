import { NavLink } from "react-router-dom";


const NavPrincipal = () => {

    return(
        <nav>
            <ul className={`flex gap-[30px] items-start mt-[20px] ml-[323px] 
                font-["Inter"]`}>
                <li>
                    <NavLink 
                    to={'/'}
                    className={({isActive}) =>
                    isActive ? "text-[rgb(153,25,86)] border-b-2 transition-all duration-150 ease in out" 
                    : "text-[black] "
                    }
                    >Home</NavLink>
                </li>

                <li>
                    <NavLink 
                    to={'/produtos'}
                    className={({isActive}) => 
                     isActive ? "text-[#991956] border-b-2 transition-all duration-150 ease-in-out" : "text-[black]"
                    }   
                    >Produtos</NavLink>
                </li>

                <li>
                    <NavLink 
                    to={'/categorias'}
                    className={({isActive}) =>
                     isActive ? "text-[#991956] border-b-2 transition-all duration-150 ease-in-out"  : "text-[black]"
                    }
                    >Categorias</NavLink>
                </li>

                <li>
                    <NavLink to={'/meusprodutos'}
                    className={({isActive}) =>
                    isActive 
                    ? "text-[#991956] border-b-2 border-[#991956] box-border transition-all duration-150 ease-in-out" 
                    : 
                    "border-b-2 border-transparent text-black"
                    }
                    >Meus Pedidos</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavPrincipal;