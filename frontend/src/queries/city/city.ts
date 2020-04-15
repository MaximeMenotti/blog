import gql from 'graphql-tag';

const CITY_QUERY = gql`
    query Cities($id: ID!) {
        city(id: $id) {
            id
            name
            description
            background {
                url
            }
            teaser {
                url
            }
            unmissableList {
                id
                title
                description
                unmissables {
                    id
                    created_at
                    updated_at
                    title
                    description
                    type
                    teaser {
                        url
                    }
                }
            }
            created_at
            updated_at
        }
    }
`;

export default CITY_QUERY;
