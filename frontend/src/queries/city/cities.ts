import gql from 'graphql-tag';

const CITIES_QUERY = gql`
  query Cities {
    cities {
      id
      name
      description
      background {
        url
      }
      teaser {
        url
      }
    }
  }
`;

export default CITIES_QUERY;
