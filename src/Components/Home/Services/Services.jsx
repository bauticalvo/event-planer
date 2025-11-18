export const Services = () => {
  return (
    <div className="w-full h-auto bg-background p-6 md:p-10 relative z-0">

      {/* DECORACIONES */}
      <img
        src="/images/otros/lineas2.png"
        className="w-[20vh] md:w-[25vh] lg:w-[30vh] absolute bottom-10 left-10 z-0 opacity-70 hidden lg:block"
      />

      <img
        src="/images/otros/lineas2.png"
        className="w-[20vh] md:w-[25vh] lg:w-[30vh] absolute top-10 right-10 z-0 rotate-180 opacity-70 hidden lg:block"
      />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="
        w-full h-auto 
        flex flex-col lg:flex-row 
        gap-10 lg:gap-16 
        bg-secondary 
        px-4 py-10 
        md:px-16 
        lg:px-[20vh] lg:py-[10vh]
        z-20
      ">

        {/* IZQUIERDA */}
        <section className="w-full lg:w-2/3 flex flex-col space-y-6 relative">

          <p className="font-bold uppercase text-sec-surface text-sm md:text-base">
            Mi Especialidad
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-text font-bodoni italic">
            Servicios que ofrezco
          </h2>

          <p className="text-text-alt text-lg md:text-xl font-medium leading-relaxed">
            Diseñando bodas auténticas y eventos que se sienten personales,
            pensados para reflejar tu esencia en cada detalle.
          </p>

          <img
            src="/images/stock/fotoprueba1.jpg"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* DERECHA */}
        <section className="w-full lg:w-1/3 flex flex-col space-y-6">

          <img
            src="/images/stock/fotoprueba2.jpg"
            className="w-full h-auto object-cover"
          />

          <p className="text-text-alt text-lg md:text-xl font-medium leading-relaxed">
            Mi objetivo es que vivas un día lleno de calma, belleza y emoción; 
            un momento que puedas recordar siempre con una sonrisa.
          </p>

        </section>
      </div>
    </div>
  );
};
