import { BorderButton } from "../../Custom/BorderButton"


export const InfoSection = () => {


    return (
        <div className={`h-screen  flex flex-col justify-center items-center px-4 md:px-16 space-y-8 text-text text-center  
            bg-[url("/images/backgrounds/herosection-mobile.png")] lg:bg-[url("/images/backgrounds/herosection.png")] bg-cover bg-center bg-no-repeat
            `}
        >
            <h1 className="text-5xl md:text-6xl 2xl:text-8xl font-bold">Más que eventos, <br/> experiencias que florecen</h1>
            <p className="text-2xl md:text-4xl 2xl:text-3xl  w-[90%]">
                Cada historia es un universo, y cada evento es su reflejo.
                <br/>
                Trabajo para transformar tus emociones en espacios, aromas y momentos.
                <br/>
                Desde el primer encuentro hasta el último brindis.
            </p>
        </div>
    )
}
