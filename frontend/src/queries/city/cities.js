import gql from "graphql-tag";

const CITIES_QUERY = gql`
  query Cities {
    cities {
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
