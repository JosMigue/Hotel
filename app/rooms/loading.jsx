import logo from '../../public/logo HACIENDA TRINIDAD.png';
import Image from 'next/image'; 

const loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        {/*  <div style={{borderTopColor:'transparent '}} classNamew="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div> */}
        <Image className='animate-pulse' src={logo} width={300} height={300} key='spin'/>
    </div>
  )
}

export default loading;