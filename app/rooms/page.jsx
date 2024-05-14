import FeaturedCard from '../components/cards/FeaturedaCard';
import data from '../data/static.json';
const hotelRooms  = data.room_types;
const Page = () =>{
  return (
    <div className="max-w-7xl">
      <h1 className="text-5xl text-primary-500 text-center uppercase">Nuestras <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block"> Habitaciones</span></h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {hotelRooms.map((room, index) => <FeaturedCard key={index} type={room.type} description={room.description} price={room.price} image={room.preview}/> )}
      </div>
    </div>
  )
} 

export default Page;