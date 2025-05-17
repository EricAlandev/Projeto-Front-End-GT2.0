import ProductListing from '../components/ProductListing';

const ProdutosEmAlta = () => {
  const produtos = [
    {
      id : "1",
      name: "Camiseta Urban White",
      image: "/assets/camisaUrbanW.jpg",
      price: 200,
      priceDiscount: 149.9
    },

    {
      id : "2",
      name: "Camiseta Urban",
      image: "/assets/camisaUrban.jpg",
      price: 200,
      priceDiscount: 149.9
    },

    {
      id : "3",
      name: "Camiseta Streets Black",
      image: "/assets/camisaStreetsBlack.png",
      price: 49.9
    },
    {
      id : "4",
      name: "Camiseta Freedom White",
      image: "/assets/camisaFreedomWhite.jpg",
      price: 129.9,
      priceDiscount: 99.9
    },
    {
      id : "5",
      name: "Camiseta Freedom Red",
      image: "/assets/camisaFreedomWhiteRed.jpg",
      price: 119.9
    },
    {
      id : "6",
      name: "Moletom Urban",
      image: "/assets/moletomUrban.jpg",
      price: 199.9,
      priceDiscount: 159.9
    },
    {
      id : "7",
      name: "Moletom & Calça Urban",
      image: "/assets/moletomUrban&calcaUrban.jpg",
      price: 239.9
    },
    {
      id : "8",
      name: "Camiseta Joker",
      image: "/assets/camisaJoker.jpg",
      price: 139.9
    },
  ];

 return(
  <div className="mt-28 ">
      <h2 className="text-3xl font-bold text-[#1F1F1F] mb-18 text-center ">
        PRODUTOS EM ALTA
      </h2>
      <div className='mb-[80px] flex justify-center'>
        <ProductListing products={produtos} />
      </div>
    </div>
 )
}

export default ProdutosEmAlta;