import {useState } from "react"


function Button({text, onClick ,...otherProps}){

    const [active, setActive] = useState(false)

    function handle(e){
        onClick(e)
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 2000)
    }

    return(
        <button 
            {...otherProps} 
            className={active ? 'btn_active' : 'add_cart_btn'}
            onClick={handle}
            disabled={active}
        >
            {active ? 'Added' : text}
        </button>
    )
}

export default Button