import React from "react";
import {useQuery} from "@apollo/react-hooks";

export type QueryProps = {
  children: (data: any) => any,
  id: string
  query: any,
}

function Query({children, query, id}: QueryProps) {
  const {data, loading, error} = useQuery(query, {
    variables: {id: id}
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return children({data});
}

export default Query;
