import { ImQuotesLeft } from "react-icons/im";

export const Testimonial = () => {
    return (
        <div className="min-h-screen py-20 w-full bg-[url('/images/backgrounds/bg-2.png')] bg-cover bg-center flex items-center justify-center text-text-alt">
            <div className="bg-secondary w-11/12 sm:w-4/5 lg:max-w-4xl p-4 sm:p-8 rounded-lg shadow-2xl">
                <section className="w-full h-full flex flex-col items-center justify-center border-2 border-text-alt space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-10">
                    <ImQuotesLeft className="text-4xl sm:text-6xl text-text-alt m-2"/>
                    <h5 className="px-2 sm:px-8 text-text font-bodoni text-base sm:text-lg lg:text-xl text-center italic leading-relaxed">
                        "Trabajar con Event Planner fue una experiencia excepcional. Su atención al detalle y dedicación para hacer de nuestro evento un éxito fue impresionante. Desde la planificación inicial hasta la ejecución final, cada aspecto fue manejado con profesionalismo y creatividad. ¡Recomendaría sus servicios a cualquiera que busque una experiencia inolvidable!"
                    </h5>
                    <div className="w-auto flex items-center space-x-3 pt-2">
                        <span className="w-6 h-0.5 inline-block bg-text-alt"></span>
                        <p className="font-bold text-base sm:text-lg text-text-alt">Jose Ramirez</p> 
                    </div>
                </section>
            </div>
        </div>
    )
}