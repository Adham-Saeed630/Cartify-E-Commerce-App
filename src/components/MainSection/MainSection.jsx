import Sidebar from "../Sidebar/SideBar";
import Grid from "../Grid/Grid";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function MainSection(){

    return(
        <div className="text-nowrap flex flex-col gap-10 bg-(--background-light) w-[90%] px-5 py-3 -translate-y-10 rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
                <span className="text-(--text-light) font-semibold text-2xl">Give All You Need</span>
                <Field className="max-w-100">
                    <ButtonGroup>
                        <Input placeholder="type to search..." />
                        <Button variant="outline">Search</Button>
                    </ButtonGroup>
                </Field>
            </div>
            <div className="flex flex-col lg:flex-row gap-15">
                <Sidebar />
                <Grid />
            </div>
        </div>
    )
}