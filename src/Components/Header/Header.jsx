import { useLocation, useNavigate } from 'react-router';
import { IoMenu } from 'react-icons/io5';
import { motion } from 'framer-motion';

export const Header = ({ startTransition, isMenuOpen, setIsMenuOpen, isActive, scrollToSection }) => {

    const navigate = useNavigate();
    const location = useLocation();


    const NavigationButton = ({text, link}) => {
        return (
           <button
            className='text-md font-semibold cursor-pointer hover:scale-110 transition-all duration-300 uppercase'
            onClick={() => {            
                scrollToSection(link);
            }}
           >   
           {text}
           </button> 
        )
    }

const headerVariants = {
        visible: {
            y: 0,
            opacity: 1, // También controlamos la opacidad para una transición más limpia
            transition: { 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
            }
        },
        hidden: {
            y: -100, // Se esconde 100px por encima
            opacity: 0, 
            transition: { 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
            }
        }
    };
    return (
        <motion.div 
            initial="hidden" // Estado inicial al montar el componente
            animate={isActive ? "visible" : "hidden"} // El estado se basa en la prop 'isActive'
            variants={headerVariants}
        className="h-auto flex flex-col bg-background w-full z-20 fixed  items-center justify-center">
            <section className='flex w-full h-[10vh] items-center justify-between'>
                <div 
                    className='w-auto h-full hidden lg:flex items-center justify-center pl-20 space-x-6'
                >
                    <NavigationButton text="Servicios" link="services" />
                    <NavigationButton text="Eventos" link="stories" />
                    <NavigationButton text="Clientes" link="testimonials" />
                </div>
                <div 
                className='w-auto flex items-center px-4'
                >
                    <img 
                        src="/logos/logo_vr.svg"
                        alt="logo"
                        className="h-[4vh] lg:h-[6vh]"
                        onClick={() => {
                            if (location.pathname === '/') return;
                            startTransition ? startTransition(navigate, '/') : navigate('/');
                        }}
                    />
                </div>

                
                <div 
                    className='w-auto h-full hidden lg:flex items-center justify-end pr-20 space-x-6'
                >
                    <NavigationButton text="Inicio" link="start" />
                    <NavigationButton text="Sobre Mi" link="about" />
                    <NavigationButton text="contacto" link="contact" />
                </div>
                <button 
                    className='flex lg:hidden px-4'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    <IoMenu size={30} />
                </button>

            </section>
        
        </motion.div>
    )
}