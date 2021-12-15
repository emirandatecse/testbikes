import React, {useState} from 'react'
import classNames from 'classnames';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getBikes } from '../../api/bikes';
import BikesEntity from '../../api/bikes-entity';
import Bikes from '../../components/Bikes';

export default function PrincipalLayout(props) {
    
    const { pagina, className } = props;
    const [loading, setLoading] = useState(false);
    const [bikes, setBikes] = useState(null);
    async function searchBikes (){
        const entity = new BikesEntity()
              .setPage(1)
              .setPerPage(10)
              .setLocation('Berlin')
              .setSerial("")
              .build();


        setLoading(true);
        const bikesList = await getBikes(entity);
        console.log('xxxxx');
        console.log(bikesList);
        if (bikesList) {
            setBikes(bikesList);
        }
        //setBikes(bikesList);
        //setLoading(false);
    }
/*
    const searchBikes = async() => {
        const entity = new BikesEntity()
              .setPage(1)
              .setPerPage(10)
              .setLocation('Berlin')
              .setSerial("")
              .build();


        setLoading(true);
        const bikesList = await getBikes(entity);
        if (bikesList) {
            setBikes(bikesList);
        }
        //setBikes(bikesList);
        //setLoading(false);
    }
*/
    return (
        <div className="principal-layout">
            <Header origen="principal"/>

            <div className="contenido">

                <div className="content">
                  <p className="titulo">SEARCH FOR NEARBY STOLEN BIKES</p>
                  <div className="filtros">
                      <input type="text" placeholder="Search bike descriptions"/>
                  </div>
                  <div className="filtros">
                    <input type="text" placeholder="Search for serial number"/>
                  </div>
                  <div className="filtros">
                    <input type="text" placeholder="Search for area"/>
                  </div>
                  <div className="busqueda">
                    <button className="btn-buscar"
                            onClick={searchBikes}>
                        Search Bikes
                    </button>
                  </div>
                  
                    {
                        bikes && (
                                bikes.map(item => {
                                    console.log('entro 1' );
                                    console.log(item);
                                    <BikesItem bikes={item} /> 
                                
                                })
                                )
                        
                    }
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

function BikesItem(props) {
    console.log('xxxxx1111');
    const { bikes } = props;
    console.log(bikes);
    console.log('xxxxx1111');
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