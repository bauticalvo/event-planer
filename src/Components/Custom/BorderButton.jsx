import { useLocation, useNavigate } from "react-router"

export const BorderButton = ({text, funtional, link, startTransition}) => {

  const navigate = useNavigate() 
  const location = useLocation()

  return (
    <button
        className="border-2 border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-black transition duration-300"
        onClick={ () => {

            if(funtional === "externo"){
                window.open(link)
            }
            else if(funtional === "page"){
              if (location.pathname === link) return;
              startTransition(navigate, link); 
            }
          }
        }
    >
        {text}
    </button>
  )
}

