import { Link, NavLink } from 'react-router-dom';

// Função para tratar o envio do formulário
const handleSubmit = (event) => {
  event.preventDefault();
  // Lógica de manipulação do formulário aqui
};

const CadastroPage = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F7F7]">
      
      {/* Conteúdo ESQUERDO */}
      <div className='w-full md:w-[500px] h-full mt-[340px] ml-[260px]'>
        <h1 className='text-[52px] text-[#C92071] font-[Inter] font-bold'>Já tem uma conta?</h1>

        <p className='flex mt-[12px] ml-[86px] text-[#C92071] text-[28px]'>Entre no nosso sistema</p>

        <Link to={'/entrar'} className='inline-block mt-[30px] ml-[160px] pt-[5px] pl-[8px] pr-[8px] pb-[6px] text-[22px] text-white bg-[#C92071] rounded-[12px] hover:p-[8px] hover:text-[28px] hover:ml-[145px] duration-250'>
          Logue aqui
        </Link>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className='w-full md:w-[950px] bg-[#C92071] p-[25px] ml-[auto]'>
        <header className='flex justify-between items-center'>
          <div className="font-[Inter] font-bold text-white text-[32px] mt-[25px] ml-[65px]">
            <h2>Ds streets</h2>
          </div>
        </header>

        <h1 className='mt-[130px] ml-[65px] font-[Inter] font-bolder text-white text-[34px]'>Crie sua conta</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-[-20px] px-[65px] pt-[30px] text-white'>
          <div className='flex gap-8'>
            <div className='w-1/2 flex flex-col'>
              <label htmlFor="Primeiro-name" className='font-[Inter] font-light text-[18px]'>Primeiro Nome</label>
              <input type="text" id="Primeiro-name" placeholder="Digite seu primeiro nome" className='bg-white rounded-[2px] mt-[15px] p-[5px] outline-none' />
            </div>

            <div className='w-1/2 flex flex-col'>
              <label htmlFor="Nome" className='font-[Inter] font-light text-[18px]'>Nome</label>
              <input type="text" id="Nome" placeholder="Digite seu sobrenome" className='bg-white rounded-[2px] mt-[15px] p-[5px] outline-none' />
            </div>
          </div>

          <div className='flex gap-8'>
            <div className='w-1/2 flex flex-col'>
              <label htmlFor="CriarSenha" className='font-[Inter] font-light text-[18px]'>Crie sua senha</label>
              <input type="password" id="CriarSenha" placeholder="Senha" className='bg-white rounded-[2px] mt-[15px] p-[5px] outline-none' />
            </div>

            <div className='w-1/2 flex flex-col'>
              <label htmlFor="ConfirmarSenha" className='font-[Inter] font-light text-[18px]'>Confirme sua senha</label>
              <input type="password" id="ConfirmarSenha" placeholder="Confirmar senha" className='bg-white rounded-[2px] mt-[15px] p-[5px] outline-none' />
            </div>
          </div>

          <div className='flex gap-8'>
            <div className='w-1/2 flex items-center gap-[10px] mt-[5px]'>
              <input type="checkbox" id="Termos" />
              <label htmlFor="Termos">Aceite os termos 
                <a href="#" className='underline ml-[6px]'>Termos e Condições</a>
              </label>
            </div>
            <div className='w-1/2'></div>
          </div>

          <input type="submit" value="Criar Conta" className='mt-[-2px] mb-[-8px] bg-white text-[#C92071] font-bold py-2 rounded w-[47.5%]' />
        </form>

        {/* Botões de redes sociais */}
        <div className='flex flex-row mt-6 px-[65px] justify-center items-center gap-8'>
          <button className='flex gap-[50px] bg-[#1F1F1F] items-center rounded-[6px] text-[#F5F5F5] text-[17px] mt-[15px] ml-[-1px] p-[8px] w-[370px]'>
            <img src="/assets/facebook.webp" alt="Facebook" className='w-6 h-6' />
            Logue usando o Facebook!
          </button>

          <button className='flex gap-[50px] bg-[#1F1F1F] items-center rounded-[6px] text-[#F5F5F5] text-[17px] mt-[15px] p-[8px] w-[370px]'>
            <img src="/assets/instagram.png" alt="Instagram" className='w-11 h-6' />
            Logue com o Instagram!
          </button>
        </div>

        <footer className='flex justify-center mt-[175px] text-white text-[20px]'>
          © Copyright 2025 Ds Streets.
        </footer>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-screen font-sans">
        {/* Lado Esquerdo - Login */}
        <div className="w-full md:w-1/2 bg-[#C92071] text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-bold mb-4">Não tem uma conta ainda?</h1>
          <p className="mb-6">Pra continuar logado, entre no nosso sistema.</p>
          <NavLink to={'/cadastro'} className="bg-white text-[#C92071] px-6 py-2 font-semibold rounded-[14px] hover:pl-[18px] hover:pr-[18px] hover:pt-[12px] hover:pb-[12px] hover:text-[22px] hover:ml-[-4px] duration-250">
            Cadastre-se
          </NavLink>
        </div>

        {/* Lado Direito - Cadastro */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold text-[#C92071] mb-1">Logue-se</h2>
          <div className="flex space-x-4 mb-6 text-[#C92071] text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <p className="text-gray-500 mb-4">ou use seu email para entrar</p>
          <form onSubmit={handleSubmit} className="flex flex-col w-2/3 space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-300 p-2 rounded"
            />
            <button
              type="submit"
              className="bg-[#C92071] text-white py-2 rounded-full font-semibold mt-2"
            >
              Logar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { CadastroPage, LoginPage };
