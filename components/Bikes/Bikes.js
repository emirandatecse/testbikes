import React from 'react'
import { map } from "lodash";


export default function Bikes(props) {
    
    const { bikes } = props;
    
    console.log(bikes)
    if (bikes) {

        console.log('entro 0' );
        bikes.map(item => {
            console.log('entro 1' );
            console.log(item);
            return (<BikesItems bike={item} />);
        
        });
        

    }else{
        return (<div>No hay bicis</div>);
    }
}
function BikesItems(props) {
    const { bike } = props;
    console.log(bike);
    return (
        <div className="bikes">
            <div className="bikes-items">
                <div className="bikes-items-column">
                    <div className="bikes-images">
                        sdsddds           
                    </div>
                    <div className="bikes-descripcion">
                        bbb
                    </div>
                </div>
            </div>
        </div>
    )
}
