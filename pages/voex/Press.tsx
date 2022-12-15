import { BaseLayout } from "@ui";

import {PressTypo} from "@voex";


const Press = () => {

    return (
       <BaseLayout>
        <div className="d-flex justify-content-center">
           
            <div className="h1-title text-white  container pt-4">
                <h1 className="">Press</h1>
                <PressTypo />
                <PressTypo />
                <PressTypo />
            </div>
        </div>
       
       </BaseLayout>
        
    )
}

export default Press;