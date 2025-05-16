import Car from "./BuyCar";
import Logo from "./Logo";
import NavPrincipal from "./NavPrincipal";
import Direcionamento from "./Redirecionamento";
import BarraPesquisa from "./SearchBar";

const Header = () => {
    return (
        <>
            <header className="flex flex-col gap-4">
                <div className="flex gap-[40px] items-center ml-[323px]">
                    <Logo />
                    <BarraPesquisa />
                    <Direcionamento />
                    <Car />
                </div>
                
                <NavPrincipal />
            </header>
        </>
    );
};

export default Header;