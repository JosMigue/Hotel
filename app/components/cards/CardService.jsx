import Link from "next/link";

const CardService = ({title, description, imageSource, goTo, Icon}) => {
  return (
    <div className="flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105">
      <div className="imageContainer">
        <div className="text-center rounded-full p-4 bg-gray-100">
          <Icon className="w-8 h-8"/>
        </div>
              </div>
      <div className="mt-4 font-bold text-xl leading-none">{title}</div>
      <div className="mt-4 text-sm font-medium text-secondary-300">{description}</div>
      <Link href={goTo} className="link mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hover:text-primary-900 transition duration-300">
        <div className="ml-2 w-4"></div>
      </Link>
    </div>
  )
}

export default CardService;
