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
        </>
    )
}

export default Navbar;