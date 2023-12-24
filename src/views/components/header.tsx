import "./components.css";

export const Header =()=>
{
    return(
        <header className="">
            <div >
                MKJBD
            </div>
            <div style={{display:"flex"}}>
                <button className="button" >
                    Sign in
                </button>
                
                <button className="button transparent_button">
                Sign Up
                </button>
               
            </div>
        </header>
    )
}