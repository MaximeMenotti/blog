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
      places {
        id
        created_at
        updated_at
        description
        title
        gps
        type
      }
    }
  }
`;

export default CITY_QUERY;
