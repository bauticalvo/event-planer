import { phoneNumber,whatsappMessage } from "../../../Data/data"


export const Contact = () => {
  return (
    <div className=" lg:p-20 h-auto w-full">
        <div className="bg-secondary w-full h-auto lg:h-screen grid grid-cols-1 lg:grid-cols-3 lg:px-10 lg:py-24">
            <div className="col-span-1 lg:col-span-1 h-auto flex flex-col justify-center items-center p-10 order-1 lg:order-1">
                <img 
                    src="/images/stock/fotoprueba1.jpg" 
                    alt="Valeria Rodriguez - Event Planner" 
                    className="w-auto h-full object-cover" 
                />
            </div>
            <div className="col-span-1 lg:col-span-1 flex flex-col justify-center items-center text-center gap-5 p-10 order-3 lg:order-2">
                <p className="font-bold uppercase text-sec-surface text-sm lg:text-base">
                    Contáctame
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-text font-bodoni italic ">
                    Tienes alguna pregunta? 
                </h2>
                <p className="text-text-alt text-lg lg:text-xl font-medium leading-relaxed">
                    Me encantaria saber de ti. Ya sea que tengas preguntas sobre mis servicios o
                    quieras discutir ideas para tu evento, no dudes en contactarme.
                </p>
                <button 
                    className="bg-background text-text px-6 lg:px-10 py-3 lg:py-4  text-lg lg:text-xl font-semibold hover:bg-secondary transition duration-300"
                    onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                    >
                    Hablemos!
                </button>
            </div>
            <div className="col-span-1 lg:col-span-1 flex flex-col justify-center items-center p-10 order-2 lg:order-3">
                <img 
                    src="/images/stock/fotoprueba2.jpg" 
                    alt="Valeria Rodriguez - Event Planner" 
                    className="w-auto h-full object-cover" 
                />
            </div>
        </div>
    </div>
  )
}