
export const About = () => {
  return (
    <section 
      className="flex justify-center items-center w-full h-auto md:h-screen p-4 lg:px-10 2xl:px-60  bg-background relative"
    >
        <div className=" hidden lg:flex absolute bottom-15 left-40 w-5/12 h-1/3 bg-secondary/50 z-0" />
      
      <div className=" w-full h-full flex flex-col justify-center items-center  lg:flex-row gap-8">

        <div className=" hidden lg:flex flex-col w-2/6 justify-center items-center h-full space-y-4 relative order-2 lg:order-1">
            <img 
                src="/images/otros/vr2.png" 
                alt="Valeria Rodriguez - Event Planner" 
                className="w-auto h-[85%] object-cover" 
            />
        </div>

        <div className="flex flex-col lg:w-2/3 h-[80%] justify-center items-center lg:items-start space-y-4 lg:space-y-12 order-1 lg:order-2 z-10">
          
          <p className="font-bold uppercase text-sec-surface text-sm md:text-base">
            Conoce a Valeria Rodríguez
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-text font-bodoni italic text-center lg:text-left">
            Tu event planner de bodas y celebraciones con estilo 
          </h2>
        <section className="flex flex-col md:flex-row space-x-4 ">
            <div className="md:w-1/3 md:h-full flex justify-center items-center">
                <img 
                    src="/images/otros/vr1.png" 
                    alt="Valeria Rodriguez - Event Planner" 
                    className="md:w-auto w-1/2 md:h-full object-cover " 
                />
            </div>
            <div className="p-10 md:w-1/2 flex flex-col space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-text font-bodoni italic">
                    Un Poco Sobre Mí
                </h2>

                <p className="text-text-alt text-lg md:text-xl font-medium leading-relaxed">
                    Diseñando bodas auténticas y eventos que se sienten personales,
                    pensados para reflejar tu esencia en cada detalle.
                </p>
                
                <div className="pt-4 space-y-1">
                    <p 
                    className={`text-lg font-medium `}
                    >
                    Instagram:
                    </p>
                    <p 
                    className={`text-lg font-semibold`}
                    >
                    @valeriarodriguez.events
                    </p>
                    
                    <p 
                    className={`text-lg font-medium pt-2 `}
                    >
                    Email:
                    </p>
                    <p 
                    className={`text-lg font-semibold`}
                    >
                    info@valeriarodriguez.com
                    </p>
                </div>
            </div>
        </section>


        </div>
      </div>
    </section>
  );
};
