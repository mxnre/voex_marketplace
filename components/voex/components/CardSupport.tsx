


import {walletIcon} from "@assets";
interface Props {
    text:string
}
export const CardSupport = ({ text }:Props) => (
    <div className="layout_properties col-md-4 d-flex col-md-12 text-center align-items-center">

        <img src={walletIcon.src} alt="icon" className="me-3 mb-4"/>
        <h5 className="card-title">{text}</h5>
    </div>
);


