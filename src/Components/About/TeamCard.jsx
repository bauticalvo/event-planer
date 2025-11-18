

export const TeamCard = ({element}) => {
  return (
    <div className='h-auto lg:h-[50vh] w-full bg-[#171717]  flex flex-col rounded-2xl'>
        <section className="flex flex-col lg:flex-row h-1/2 w-full">
            <img 
                src={element.img}
                alt={element.name}
                className='w-full lg:w-1/2 max-lg:rounded-t-2xl lg:rounded-tl-2xl lg:rounded-br-2xl'
            />
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center text-end lg:items-end justify-start p-6 lg:p-16">
                <h1 className="text-2xl 2xl:text-4xl text-outline font-bold">{element.name}</h1>
                <h1 className="text-secondary">{element.title}</h1>
            </div>
        </section>
        <section className="p-6 lg:p-10 2xl:p-16">
            <p className="text-lg 2xl:text-xl font-medium">
                "{element.description}"
            </p>
        </section>
    </div>
  )
}