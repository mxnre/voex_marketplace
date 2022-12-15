import {NewYork} from '@assets';


export const PressTypo = () => {
    return (
        <div className="d-flex align-items-center mb-4" style={styles}>
            <img src={NewYork.src} alt="logo" className="" width={180} />
           <div>
           <p className="press-componet" >Duis blandit ante odio, in luctus elit interdum non</p>
            <p className="data-publish" >Juanary 15,2022</p>
           </div>
        </div>
    )
}

const styles = {
    borderColor: '#747272',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    
};

