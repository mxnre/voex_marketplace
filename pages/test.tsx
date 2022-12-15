import { BaseLayout } from "@ui";
import { useRouter } from 'next/router'
import {Accordion} from '@voex/components/Accordion'
// import { mask, user } from "@assets";
// import { CollectionItem } from "@voex";

const Test = () => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <BaseLayout>
            <main id="main">      
                <div>Image Side</div>
                <div>Data</div>
                <Accordion/>

            </main>
        </BaseLayout>
    );
};

const style = {
    container: {
        marginLeft: "10em",
        marginTop: "2em",
        marginRight: "10em",

    },
    image: {
        width: 250,
        height: 250,
    },
    marginFollow: {
        marginLeft: "5em"
    },
    btnFollow: {
        width: "35%",
        height: "4em",
        marginTop: "1em",
        marginBottom: "2em",
        fontSize: "0.95em",
        fontWeight: "bold",
    },
    created: {
        backgroundColor: "#5217B5",
    },
    owned: {
        backgroundColor: "#401091",
    },
    nav: {
        height: "95px",
    },
    btn_nickname: {
        fontSize: "0.9em",
        height: "50px",
    },
    user:{
        width: "25px",
        margin: "5px",
        borderRadius: "4px",
    }

}


export default Test;
