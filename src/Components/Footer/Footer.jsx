import { ascensorLink, bautiLink, instagramURL } from '../../Data/data'
import { useLocation, useNavigate } from 'react-router'
import { TfiEmail } from "react-icons/tfi";
import { RiFacebookCircleFill, RiInstagramFill,RiWhatsappFill  } from "react-icons/ri";



export const Footer = ({startTransition}) => {

    const navigate = useNavigate()
    const location = useLocation()


    const NavButton = ({text, link}) => {
        return (
            <button
                className='text-2xl font-medium hover:text-secondary hover:scale-110 transition-all duration-300'
                onClick={()=> {
                    if (location.pathname === link) return;
                    startTransition(navigate, link); 
                }}
            >
                {text}
            </button>
        )
    }

    const BautiSpan = () => {
        return (
            <span 
                className='text-jade cursor-pointer '
                onClick={() =>{
                    window.open(bautiLink)
                }}
                >
                    J.B.CALVO
                </span>
        )
    }
    const AscensorSpan = () => {
        return (
            <span 
                className='text-jade cursor-pointer'
                onClick={() =>{
                    window.open(ascensorLink)
                }}
                >
                    el ascensor
                </span>
        )
    }

    const CenterSection = () => {
        return (
            <div className='hidden lg:flex flex-col h-full w-full py-24 mx-24 items-center border-x-1 border-text/50 justify-center space-y-4'>
                    <img 
                        src="/logos/logo_vr.svg"
                        alt="logo"
                        className="h-[4vh] lg:h-[6vh]"
                        onClick={() => {
                            if (location.pathname === '/') return;
                            startTransition ? startTransition(navigate, '/') : navigate('/');
                        }}
                    />
                <p>Cada detalle cuenta, cada instante importa.</p>
            </div>
        )
    }
    const CenterSectionMobile = () => {
        return (
            <div className='lg:hidden flex flex-col h-full w-full py-14 mx-24 items-center justify-center space-y-4'>
                    <img 
                        src="/logos/logo_vr.svg"
                        alt="logo"
                        className="h-[4vh] lg:h-[6vh]"
                        onClick={() => {
                            if (location.pathname === '/') return;
                            startTransition ? startTransition(navigate, '/') : navigate('/');
                        }}
                    />
                <p>Cada detalle cuenta, cada instante importa.</p>
            </div>
        )
    }

  return (
    <footer className='w-full h-auto bg-secondary flex flex-col justify-center items-center py-20 lg:py-40 px-8 2xl:px-38 '>
        <section className='flex flex-col lg:flex-row space-y-8 w-full justify-between items-center h-full'>
            <CenterSectionMobile />
            <div className='flex flex-col items-center justify-center space-y-12 '>
                <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                    <RiFacebookCircleFill 
                        className='w-auto  h-8   hover:scale-125 transition-all duration-300'
                        onClick={()=>window.open(instagramURL)}
                    />
                    <h6>Instagram</h6>
                    </div>
                    <p>@valeria.rodriguez._/</p>
                </div>
                <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                    <RiInstagramFill 
                        className='w-auto  h-8   hover:scale-125 transition-all duration-300'
                        onClick={()=>window.open(instagramURL)}
                    />
                    <h6>Facebook</h6>
                    </div>
                    <p>@valeria.rodriguez._/</p>
                </div>
            </div>
            <CenterSection />
            <div className='flex flex-col items-start justify-center space-y-12 '>
                <div className='space-y-2 '>
                    <div className='flex items-center space-x-2'>
                    <RiWhatsappFill 
                        className='w-auto  h-8   hover:scale-125 transition-all duration-300'
                        onClick={()=>window.open(instagramURL)}
                    />
                    <h6>WhatsApp</h6>
                    </div>
                    <p>2644754488</p>
                </div>
                <div className='space-y-2 '>
                    <div className='flex items-center space-x-2'>
                    <TfiEmail 
                        className='w-auto  h-8   hover:scale-125 transition-all duration-300'
                        onClick={()=>window.open(instagramURL)}
                    />
                    <h6>E-mail</h6>
                    </div>
                    <p>valerodri@gmail.com</p>
                </div>
            </div>
        </section>
        <section className='py-10 flex justify-between uppercase text-center'>
            <h4>2025 © Desarrollado por <BautiSpan/> para <AscensorSpan /> </h4>
        </section>
    </footer>
  )
}

