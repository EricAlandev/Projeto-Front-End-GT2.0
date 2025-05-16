import { Gallery } from "../components/Gallery";
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ProdutosEmAlta from "../components/ProdutosAlta";
import Footer from "../components/compo-footer/Footer";

const HomePage = () => {
    const featuredCollections = [
        { id: '1', image: '/assets/camisaUrbanW.jpg', name: 'Urban White', alt: 'Camisa Urban branca' },
        { id: '2', image: '/assets/camisaStreetsBlack.png', name: 'Streets Black', alt: 'Camisa Streets preta' },
        { id: '3', image: '/assets/moletomUrban&calcaUrban.jpg', name: 'Conjunto Urban', alt: 'Conjunto moletom e calça Urban' }
    ];

    return ( 
        <div className="home-page">
            {/* Gallery */}
            <Gallery
                width="1440px"
                height="681px"
                radius="12px"
                className="mx-auto"
                contentScale={1.15}
                textSize="xl"
            />

            {/* Coleções em Destaque */}
            <section className="my-14">
                <h2 className="text-3xl font-bold text-center mb-10">COLEÇÕES EM DESTAQUE</h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center px-6">
                    {featuredCollections.map((collection) => (
                        <div key={collection.id} className="group relative text-center transition-all duration-500 w-full max-w-sm">
                            <img
                                src={collection.image}
                                alt={collection.alt || collection.name}
                                className="w-full h-96 object-cover rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-[1.04] group-hover:shadow-lg"
                                loading="lazy"
                            />
                            <p className="mt-3 text-lg font-medium text-gray-800">
                                {collection.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Produtos em Alta com verificação segura */}
            {ProdutosEmAlta && typeof ProdutosEmAlta === 'function' ? (
                <ProdutosEmAlta />
            ) : (
                <div className="text-center py-10">
                    <p className="text-red-500">Os produtos em alta não estão disponíveis no momento.</p>
                </div>
            )}

            
        </div>
    );
}

export default HomePage;