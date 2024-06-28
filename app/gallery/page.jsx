import Image from "next/image";
import Banner from '../components/layouts/Banner';
import bg from '../../public/banner-gallery.jpg';
import gallery1 from '../../public/images/gallery/DSC05498AA.jpg';
import gallery2 from '../../public/images/gallery/DSC05499AA.jpg';
import gallery3 from '../../public/images/gallery/DSC05512AA.jpg';
import gallery4 from '../../public/images/gallery/DSC05514AA.jpg';
import gallery5 from '../../public/images/gallery/DSC05516AA.jpg';
import gallery6 from '../../public/images/gallery/DSC05520AA.jpg';
import gallery7 from '../../public/images/gallery/DSC05523AA.jpg';
import gallery8 from '../../public/images/gallery/DSC05524AA.jpg';
import gallery9 from '../../public/images/gallery/DSC05525AA.jpg';
import gallery10 from '../../public/images/gallery/DSC05526AA.jpg';
import gallery11 from '../../public/images/gallery/DSC05528AA.jpg';
import gallery12 from '../../public/images/gallery/DSC05529AA.jpg';
import gallery13 from '../../public/images/gallery/DSC05530AA.jpg';
import gallery14 from '../../public/images/gallery/DSC05531AA.jpg';
import gallery15 from '../../public/images/gallery/DSC05533AA.jpg';
import gallery16 from '../../public/images/gallery/DSC05534AA.jpg';
import gallery17 from '../../public/images/gallery/DSC05535AA.jpg';
import gallery22 from '../../public/images/gallery/DSC05542AA.jpg';
const Page = () =>{
  const bannerStyle = {
    backgroundImage:`url(${bg.src})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'bottom'
  }
  return(
    <>
      <Banner title="Nuestra Galeria" styles={bannerStyle}>
      <h2 className="mt-6 text-2xl leading-8 text-white font-bold drop-shadow-md">
          Cuidamos de ti y de la naturaleza.
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
            Contacto
          </a>
        </div>
      </Banner>
      <section className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full w-full flex flex-col justify-center items-center">
       <h1 className="text-center text-5xl uppercase">Nuestras <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block">instalaciones</span> </h1>
        <div className="flex flex-col lg:flex-row space-x-4 md:space-x-6 lg:space-x-8">
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
            <Image src={gallery7} alt="image" className="hover:opacity-75 transition ease-in-out duration-500"/>
            <Image src={gallery22} alt="image" className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
          </div>
        </div>
      </section>
      <section className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full w-full flex flex-col justify-center items-center">
       <h1 className="text-center text-5xl uppercase">Playas <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block">cercanas</span> </h1>
        <div className="flex flex-col lg:flex-row space-x-4 md:space-x-6 lg:space-x-8">
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
            <Image src={gallery7} alt="image" className="hover:opacity-75 transition ease-in-out duration-500"/>
            <Image src={gallery22} alt="image" className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"/>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page;