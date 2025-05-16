import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const estampaNomes = [
  'Urban White',
  'Streets Black',
  'Freedom'
];

const Gallery = ({ className, width = '100%', height = 'auto', radius = '8px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const secondSliderImages = [
    { image: "/assets/camisaStreetsBlack.png", name: 'StreetsBlack' },
    { image: "/assets/camisaDominantStreets.jpg", name: 'DominantStreets' },
    { image: "/assets/camisaJoker.jpg", name: 'Joker' },
  ];

  const thirdSliderImages = [
    { image: "/assets/camisaFreedomWhiteRed.jpg", name: 'Freedom White Red' },
    { image: "/assets/camisaFreedomWhite.jpg", name: 'Freedom White' },
  ];

  const handleNext = () => {
    if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{ width, height, borderRadius: radius }}
    >
      {/* Slide 1 - Urban White */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${currentIndex === 0 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-full z-0'}`}
      >
        <div className="relative bg-white p-8 rounded-xl shadow-md w-full h-full flex items-center justify-center">
          <div className="relative flex items-center justify-between w-full h-full px-12">
            <div className="flex flex-col gap-8 w-[40%]">
              <h2 className="text-[46px] mb-[-22px] font-bold text-[#1F1F1F]">{estampaNomes[0]}</h2>
              <p className="text-[#474747] text-[18px] ml-[1px] mb-[-8px]">Coleção exclusiva de camisas urbanas</p>
              <Link
                to="/colecao"
                className="bg-primary text-[#666666] items-center w-[180px] 
                pl-2 pr-2 py-1.5 ml-[-3px] mt-[-12px]  text-center rounded-md text-lg hover:bg-[#1F1F1F] hover:text-white duration-300 transition font-[Inter]"
              >
                Veja nossa coleção
              </Link>
            </div>

            <div className="w-[55%] flex justify-center">
              <img
                src="/assets/camisaUrbanW.jpg"
                className="object-contain max-h-[390px]"
                style={{ borderRadius: radius }}
                alt={`Camisa ${estampaNomes[0]}`}
              />
            </div>
          </div>

          <div
            className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <img src="/assets/rightArrow.webp" className="w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Slide 2 - Streets Black */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${currentIndex === 1 ? 'opacity-100 translate-x-0 z-10' : currentIndex < 1 ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'}`}
      >
        <div className="relative bg-white p-8 rounded-xl shadow-md w-full h-full">
          <div className="flex justify-between items-center gap-4 h-full px-12">
            <div className="flex gap-4 mt-[20px] w-[95%]">
              {secondSliderImages.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Camisa ${item.name}`}
                    className="object-contain  w-full h-[400px] mb-6"
                    style={{ borderRadius: radius }}
                  />
                </div>
              ))}
            </div>

            <div className="w-[35%] flex flex-col items-start pl-12">
              <h2 className="text-[38px] font-bold text-[#1F1F1F] mb-3">{estampaNomes[1]}</h2>
              <p className="text-[#474747] text-[20px] mb-5">Coleção de camisas com estilo <br />  urbano e moderno</p>
              <Link
                to="/colecao"
                className="bg-primary text-[#666666] pl-2 pr-3 py-2 ml-[-4px] rounded-md text-lg hover:bg-[#1F1F1F] hover:text-white duration-300 transition font-[Inter]"
              >
                Veja nossa coleção
              </Link>
            </div>
          </div>

          <div
            className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handlePrev}
          >
            <img src="/assets/leftArrow.webp" className="w-14 h-14" />
          </div>
          <div
            className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <img src="/assets/rightArrow.webp" className="w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Slide 3 - Freedom */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${currentIndex === 2 ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'}`}
      >
        <div className="relative bg-white p-8 shadow-md w-full h-full">
          <div className="flex justify-between items-center h-full px-12">
            <div className="flex gap-10 w-[50%] mb-[18px]">
              {thirdSliderImages.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={`Camisa ${item.name}`}
                    className="object-contain max-h-[420px]"
                    style={{ borderRadius: radius }}
                  />
                </div>
              ))}
            </div>

            <div className="w-[40%] flex flex-col items-start pl-12">
              <h2 className="text-5xl font-bold text-[#1F1F1F] mb-8">{estampaNomes[2]}</h2>
              <p className="text-[#474747] text-[20px] mb-6">Estilo livre e despojado para seu dia a dia</p>
              <Link
                to="/colecao"
                className="bg-primary text-[#666666] text-[18px] ml-[-6px] mt-[-8px] pl-2 pr-2 py-1.5 rounded-md text-lg hover:bg-[#1F1F1F] hover:text-white duration-300 transition font-[Inter]"
              >
                Veja nossa sessão
              </Link>
            </div>
          </div>

          <div
            className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handlePrev}
          >
            <img src="/assets/leftArrow.webp" className="w-14 h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCollections = () => {
  const featuredProducts = [
    { image: "/assets/camisaUrbanW.jpg", name: "Urban White" },
    { image: "/assets/camisaStreetsBlack.png", name: "Streets Black" },
    { image: "/assets/moletomUrban&calcaUrban.jpg", name: "Moletom & Calça Urban" }
  ];

return (
  <Section title="Coleções em destaque" titleAlign="center">
    <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
      {featuredProducts.map((product, index) => (
        <div 
          key={index}
          className={`transform transition-all duration-300 hover:scale-105 ${
            index % 2 === 0 ? 'rotate-1' : '-rotate-1'
          }`}
        >
          <img
            src={product.image}
            alt={`Coleção ${index + 1}`}
            className="rounded-[12px] w-[280px] h-[220px] object-cover shadow-lg"
          />
          {/* ... mantenha o texto existente ... */}
        </div>
      ))}
    </div>
  </Section>
);
}


export { Gallery, FeaturedCollections };
