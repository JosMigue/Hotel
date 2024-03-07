import Link from "next/link";
const Card = ({img, title, text, href}) => {
  const style = {
    backgroundImage:`url(${img})`,
    backgroundSize:'cover',
    backgroundPosition:'center'
  }
  return (
    <div className='w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
      <div className='max-w-md mx-auto'>
        <div className='h-[200px]'  style={style}>
        </div>
        <div className='p-4 sm:p-6'>
          <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{title}</p>
          <p className='text-[#7C7C80] font-[15px] mt-6'>{text}</p>
            <Link target='_blank' href={href} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-yellow-500 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
              Ver
            </Link>
        </div>
      </div>
    </div>
  )
}
export default Card;