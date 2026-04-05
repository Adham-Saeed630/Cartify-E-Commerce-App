import Sidebar from "../Sidebar/SideBar"

export default function MainSection(){

    return(
        <div className="flex flex-col gap-10 bg-(--background-light) w-[90%] px-5 py-3 -translate-y-10 rounded-2xl">
            <div className="flex justify-between items-center">
                <span className="text-(--text-light) font-semibold text-2xl">Give All You Need</span>
                <div className="">
                    <input type="search" placeholder="Search Here..." className="px-3 py-1 min-w-80 border-(--background-dark) border rounded-xl" />
                </div>
            </div>
            <div className="flex gap-3">
                <Sidebar />
            </div>
        </div>
    )
}