import React from "react";

const Navbar = () => {
    return(
        <>
        <div className="flex left-point absolute right-0 z-20 w-7/12 h-16  bg-gradient-to-r from-sidebar-gradient-start to-sidebar-gradient-end
         justify-end px-10 gap-10 text-white custom-border-3
        ">
            <button>Home</button>
            <button>Browse</button>
            <button>Updates</button>
            <button>Pricing</button>
            <button>Sign up</button>
        </div>
        <div className="absolute left-0 flex flex-row p-10 pl-20 gap-4">
            <img src="/src/assets/Logo.png" alt="Logo.png"></img>
                <img src="/src/assets/Serendipity.svg" alt="Serendipity.svg"></img>

            </div>
        </>
    )
}

export default Navbar;