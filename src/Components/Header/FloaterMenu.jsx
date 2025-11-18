import { useLocation, useNavigate } from "react-router";
import { instagramURL } from "../../Data/data";



export const FloaterMenu = ({startTransition}) => {
    const navigate = useNavigate();
    const location = useLocation();


    const NavigationButton = ({text, link}) => {
        return (
           <button
            className='text-md font-bold  cursor-pointer hover:scale-110 transition-all duration-300'
            onClick={() => {
                if (location.pathname === link) return;
                startTransition(navigate, link); 
            }}
           >   
           {text}
           </button> 
        )
    }

    const SocialButton = ({text, link}) => {
        return (
           <button
            className='text-md font-bold  cursor-pointer hover:scale-110 transition-all duration-300'
            onClick={() => window.open(link, "_blank")}
           >   
           {text}
           </button> 
        )
    }

    return (
        <div className=" h-[10vh] w-full z-60 fixed bottom-0 flex items-center justify-between bg-primary/25 backdrop-blur-xs border-t border-light text-2xl ">
            <section className="flex space-x-4 px-4">
                <NavigationButton text="inicio" link="/" />
                <NavigationButton text="nosotros" link="/about" />
                <NavigationButton text="contacto" link="/contact" />
            </section>
            <section className="flex space-x-4 px-4">
                <SocialButton text="instagram" link={instagramURL} />
            </section>
        </div>
    )
}