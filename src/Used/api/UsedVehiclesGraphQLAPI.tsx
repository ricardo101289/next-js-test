import gql from 'graphql-tag';

export const GET_VEHICLES = gql`
    {
        vehiclesConnection(first: 100) {
            edges {
                node {
                    status
                    updatedAt
                    createdAt
                    id
                    imageUrl
                    brand
                    model
                    year
                    mileage
                    city
                    negotiable
                    price
                }
            }
        }
    }
`;