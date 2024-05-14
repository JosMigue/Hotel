import Image from "next/image";
import Link from "next/link";
import bg from '../public/main-banner.jpg';
import roomParadox from '../public/fixed-banner.jpg';
import gallery1 from  '../public/shortGallery/DSC05412AA.jpg';
import gallery2 from  '../public/shortGallery/DSC05441AA.jpg';
import gallery3 from  '../public/shortGallery/DSC05446AA.jpg';
import gallery4 from  '../public/shortGallery/DSC05454AA.jpg';
import gallery5 from  '../public/shortGallery/DSC05480AA.jpg';
import gallery6 from  '../public/shortGallery/DSC05493AA.jpg';
import gallery7 from  '../public/shortGallery/DSC05572AA.jpg';
import habitaciones from '../public/habitaciones.jpg';
/* import FeaturedCard from '../components/FeaturedaCard'; */
import CardService from './components/cards/CardService';
import Banner from './components/layouts/Banner';
import { FaWaterLadder, FaArrowRightLong  } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { FaBed } from "react-icons/fa";


export default function Home() {
  const bannerStyle = {
    backgroundImage:`url(${bg.src})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
  }
  const services = [
    {title: 'Alberca', description:'Responsive, and mobile-first project on the web', icon: FaWaterLadder, to_go:'#'},
    {title: 'Vista a la playa', description:'Components are easily customized and extendable', icon:LiaUmbrellaBeachSolid , to_go:'#'},
    {title: 'Vista a la playa', description:'Components are easily customized and extendable', icon:LiaUmbrellaBeachSolid , to_go:'#'},
    {title: 'Vista a la playa', description:'Components are easily customized and extendable', icon:LiaUmbrellaBeachSolid , to_go:'#'},
    {title: 'Vista a la playa', description:'Components are easily customized and extendable', icon:LiaUmbrellaBeachSolid , to_go:'#'},
    {title: 'Restaurante', description:'Every component and plugin is well documented', icon:IoRestaurant, to_go:'#'},
    {title: 'Restaurante', description:'Every component and plugin is well documented', icon:IoRestaurant, to_go:'#'},
    {title: '24/7 Support', description:'Contact us 24 hours a day, 7 days a week', icon:'user', to_go:'#'}
  ];
  return(
    <>
      <Banner styles={bannerStyle} title={'Hotel Hacienda Trinidad'}>
        <h2 className="mt-6 text-2xl leading-8 text-white font-bold drop-shadow-md">
          Cuidamos de ti y de la naturaleza.
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              Comprobar Disponibilidad
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Banner>
      <div className='max-w-6xl py-10'>
        <h1 className='text-center text-primary-500 font-bolder text-5xl uppercase'>Bienvenidos</h1>
        <p>Ubicado en la Roma Norte, a escasos minutos a pie del Centro Médico Siglo XXI y cerca de la Zona Rosa, la Condesa, Paseo de la Reforma y más barrios y avenidas icónicas, Hotel Marbella es su mejor anfitrión durante su visita a la Ciudad de México.</p>
      </div>
      <div className='min-h-[30rem] w-full block' style={{backgroundImage:`url(${roomParadox.src})`, backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      </div>
      <section className="bg-gray-200 w-full flex justify-center items-center">
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h1 className="text-center text-5xl text-primary-500 text-center uppercase">Nuestras <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block"> Amenidades</span></h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
            {
              services.map(service => <CardService title={service.title} description={service.description} goTo={service.to_go} Icon={service.icon} imageSource={'#'}/>)
            }
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row max-w-6xl py-20">
          <div className="mx-4 text-container md:w-6/12 mt-16 md:mt-0 self-center">
            <h1 className="lg:text-left text-center text-5xl uppercase">Habitaciones <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block"> a tu medida</span> </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a className="cursor-pointer font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300" href="/rooms">Ver mas habitaciones <span><FaArrowRightLong className="inline"/></span></a>
          </div>
          <div className="flex md:flex-row flex-col md:w-6/12 justify-center items-center">
            <div className="md:w-full w-4/5  mt-16 xl:mt-0 mx-2">
              <div className="mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs">
                <div className="h-80 bg-cover bg-center rounded" style={{ backgroundImage: `url(${habitaciones.src})`, }}></div>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-primary-500 font-bold text-lg">Familiar</div>
                    <div className="font-semibold text-sm text-gray-600"><span className="font-bold text-gray-800 text-lg">$500.00/noche</span></div>
                  </div>
                    <h5 className="text-xl mt-4 font-bold">Habitacion Individual</h5>
                    <button className="w-full px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300">Mas información</button>
                </div>
              </div>
            </div>
            <div className="md:w-full w-4/5 mt-16 xl:mt-0 mx-2">
              <div className="mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs">
                <div className="h-80 bg-cover bg-center rounded" style={{ backgroundImage: `url(${habitaciones.src})`, }}></div>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-primary-500 font-bold text-lg">Individual</div>
                    <div className="font-semibold text-sm text-gray-600"><span className="font-bold text-gray-800 text-lg">$500.00/noche</span></div>
                  </div>
                    <h5 className="text-xl mt-4 font-bold">Habitacion Individual</h5>
                    <button className="w-full px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300">Mas información</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-full">
          <div className="my-8">
           <h1 className="text-center text-5xl uppercase">Nuestra<span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block">Galeria</span> </h1>
          </div>
          <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
              <div>
                  <Image src={gallery1} alt="image" className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
                  <Image src={gallery2} alt="image" className="hover:opacity-75 transition ease-in-out duration-500"/>
              </div>

              <div>
                  <Image src={gallery3} alt="image" className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
                  <Image src={gallery4} alt="image" className="mb-3 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
                  <Image src={gallery5} alt="image" className="hover:opacity-75 transition ease-in-out duration-500"/>
              </div>

              <div>
                  <Image src={gallery6} alt="image" className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
                  <Image src={gallery7} alt="image" className="hover:opacity-75 transition ease-in-out duration-500"/>
              </div>
          </div>
        </div>
          <div className="flex justify-center my-4">
          <button className="px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300">Ver Galeria completa</button>
          </div>
      </section>
    </>
  )
}
