import { useLocation, useNavigate } from 'react-router';

export const Menu = ({ startTransition, setIsMenuOpen, scrollToSection}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const NavigationButton = ({ text, link }) => {
        const isActive = location.pathname === link;
        
        return (
            <button
                className={`text-xl font-medium cursor-pointer transition-all duration-300 uppercase 
                    ${isActive ? 'text-primary scale-110' : 'text-light hover:text-white hover:scale-105'}
                    relative group py-2 px-4`}
                onClick={() => {
                    scrollToSection(link);
                    setIsMenuOpen(false);
                }}
            >   
                {text}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
        )
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center space-y-8 z-50 fixed top-0 bg-background/90 backdrop-blur-md'>
            <div 
                className='absolute top-8 right-8 text-light text-sm'
                onClick={() => setIsMenuOpen(false)}
            >
                CERRAR
            </div>
            
            <section className='flex flex-col items-center space-y-4 mb-8'>
                <NavigationButton text="Servicios" link="services" />
                <NavigationButton text="Eventos" link="stories" />
                <NavigationButton text="Clientes" link="testimonials" />
            </section>

            <div className='h-px w-3/4 max-w-xs rounded-full bg-text/20'></div>
            
            <section className='flex flex-col items-center space-y-4 mb-8'>
                <NavigationButton text="Inicio" link="start" />
                <NavigationButton text="Sobre Mi" link="about" />
                <NavigationButton text="contacto" link="contact" />
            </section>

        </div>
    )
}