import bg from '../../public/13.jpg';
import roomParadox from '../../public/room1.jpg';
const Page = () => {
  const bannerStyle = {
    backgroundImage:`url(${bg.src})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  }
  return(
    <>
      <div className="w-full main-banner">
        <div className="w-full grid lg:grid-cols-2  py-10 lg:py-40" style={bannerStyle}>
          <div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-xl">
              Hotel Hacienda Trinidad
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 font-bold drop-shadow-md">
              Cuidamos de ti y de la naturaleza.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                  Comprobar Disponibilidad
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-5xl py-10'>
        <h1 className='text-center text-yellow-500 font-bolder text-4xl'>Bienvenidos</h1>
        <p>Ubicado en la Roma Norte, a escasos minutos a pie del Centro Médico Siglo XXI y cerca de la Zona Rosa, la Condesa, Paseo de la Reforma y más barrios y avenidas icónicas, Hotel Marbella es su mejor anfitrión durante su visita a la Ciudad de México.</p>
      </div>
      <div className='min-h-[30rem] w-full block' style={{backgroundImage:`url(${roomParadox.src})`, backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <div className='flex justify-end banner-attached'>
          <div className='p-5 bg-white h-[23rem] max-w-xl shadow-xl rounded-md text-center flex flex-col justify-center'>
            <h3 className='text-xl text-yellow-500'>HABITACIONES</h3>
            <p>120 habitaciones y suites conforman la colección de Hotel Marbella, cada una con Wi-Fi sin costo, pantalla de 40’’ con canales de cable, cerradura electrónica y amplios espacios con estilo impecable para el viajero contemporáneo que aprecia lo mejor.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;