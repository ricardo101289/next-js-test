import React from 'react'
import { useVehicleCard } from './VehicleCardContainer';
import { Card } from "./VehicleCardStyle";
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const VehicleCard = ({query}) => {
    const {error, data} = useVehicleCard(query.brand);
    return error ? null : data.map( (vehicle, index) =>
        <div key={index} css={tw`inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2`}>
            <div className="vehicle-container">
                <Card>
                    <div className="card-image">
                        <a className="vehicle-href" href="/vehicle/autos-hyundai-sonata-quito-2011/1151835"
                           title="Hyundai Sonata 2011">
                            <amp-img className="image-loader"
                                     width="230"
                                     height="135"
                                 src={vehicle.imageUrl}
                                 alt="Hyundai Sonata 2011"/>
                        </a>
                    </div>
                    <div className="card-info card-content">
                        <a className="vehicle-href" href="/vehicle/autos-hyundai-sonata-quito-2011/1151835"
                           title="Hyundai Sonata 2011"/>
                        <div className="module tittle">
                            <h4 className="bold size-h6 left">{vehicle.brand} {vehicle.model}</h4>
                        </div>
                        <div className="latam-secondary-text text-lighten-2 left vehicle-highlight">
                            <span className="year">{vehicle.year}</span> {vehicle.mileage} Kms. · {vehicle.city}
                        </div>
                        <span className="latam-secondary-text text-lighten-2 negotiable-txt left">{!!vehicle.negotiable ? 'Negociable' : 'Fijo'}</span>
                        <strong className="price-text">
                            <span className="left share-value">$ {vehicle.price}</span>
                        </strong>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default VehicleCard;