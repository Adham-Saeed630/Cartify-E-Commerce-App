

export default function Sidebar(){
    return(
        <div className="flex flex-col gap-5">
            <span className="text-xl font-semibold">Filter Options</span>
            <hr className="border-(--border-color)" />
            <div className="flex flex-col gap-5">
                <span className="text-xl font-semibold">By Category</span>
                <form action="" className="flex flex-col gap-2 pl-5">
                    <div className="flex gap-2 items-center text-(--secondary-dark)">
                        <input type="checkbox" id="1"/>
                        <label htmlFor="1">category 1</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="2"/>
                        <label htmlFor="2">category 2</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="3"/>
                        <label htmlFor="3">category 3</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="4"/>
                        <label htmlFor="4">category 4</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" id="5"/>
                        <label htmlFor="5">category 5</label>
                    </div>
                </form>
            </div>
            <div>
                
            </div>
            <div></div>
        </div>
    )
}