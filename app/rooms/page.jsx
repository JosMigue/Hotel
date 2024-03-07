import FeaturedCard from '../components/cards/FeaturedaCard';
const hotelRooms = [
  {
      name: "Luxury Suite",
      briefDescription: "Spacious suite with panoramic views",
      price: 300,
      rate: 4.5
  },
  {
      name: "Standard Room",
      briefDescription: "Comfortable room with modern amenities",
      price: 150,
      rate: 4.0
  },
  {
      name: "Deluxe Villa",
      briefDescription: "Private villa with pool and garden",
      price: 500,
      rate: 4.8
  },
  {
      name: "Executive Apartment",
      briefDescription: "Elegant apartment with city skyline view",
      price: 250,
      rate: 4.2
  },
  {
      name: "Family Suite",
      briefDescription: "Spacious suite perfect for families",
      price: 400,
      rate: 4.7
  }
];
const Page = () =>{
  return (
    <div className="max-w-7xl">
      <h1 className="text-5xl text-primary-500 text-center uppercase">Nuestras <span className="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block"> Habitaciones</span></h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {hotelRooms.map((room) => <FeaturedCard name={room.name} briefDescription={room.briefDescription} price={room.price}/> )}
      </div>
    </div>
  )
} 

export default Page;