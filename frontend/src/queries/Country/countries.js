import gql from "graphql-tag";

const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      name
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
  }
`;

export default COUNTRIES_QUERY;
