import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {GET_VEHICLES} from "../../api/UsedVehiclesGraphQLAPI";
import {compareString} from "../../util/StringUtil";

export const useVehicleCard = (brand) => {
    const {loading, error, data: response} = useQuery(GET_VEHICLES);
    const data = response &&
        response.vehiclesConnection.edges
            .map( edge => edge.node )
            .filter( vehicle => !brand || compareString(vehicle.brand, brand))
        || [];
    return {loading, error, data};
};