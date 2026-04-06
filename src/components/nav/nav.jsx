import logo from "../../assets/logo.png";

export default function Nav(){
    return(
        <div className="w-full px-10 py-5 bg-(--background-light) text-(--text-light) flex items-center justify-between">
            <div className="flex items-center gap-5">
                <img src={logo} alt="Logo" className="w-7.5" />
                <span className="text-xl font-semibold">Cartify</span>
            </div>
            <div>
                <div>
                    <ul className="flex items-center gap-5 font-semibold">
                        <li>Home</li>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}