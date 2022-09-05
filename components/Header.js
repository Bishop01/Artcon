const logo = "./images/logo.png";
const menuIcon = "./images/menu.png";

function Header() {
    return (
        <div className="z-40 flex w-full items-center justify-between p-3 sticky top-0 bg-white pl-28 pr-28">
            <img className="w-24 hover:cursor-pointer" src={logo}></img>
            <img className="w-6 hover:cursor-pointer" src={menuIcon}></img>
        </div>
    )
}

export default Header