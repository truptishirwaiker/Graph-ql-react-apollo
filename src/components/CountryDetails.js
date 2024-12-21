import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const Country_Query = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      phone
      currency
      capital
      phones
      emoji
    }
  }
`;

export default function CountryDetails() {
  let { code } = useParams();
  console.log(code);
  const { loading, error, data } = useQuery(Country_Query, {
    variables: { code },
  });

  console.log(data);

  if (loading) return <p>Loading......</p>;
  if (error) {
    console.log(error);
    return <p>Error </p>
  }

  return (
    <div className="card">
      <div className="card-header">
        Details of <b> {data.country.name}</b>
      </div>

      <ol className="list-group list-group-flush">
        <li className="list-group-item"> Code: {data.country.code}</li>
        <li className="list-group-item"> Name: {data.country.name}</li>
        <li className="list-group-item"> Phone: {data.country.phone}</li>
        <li className="list-group-item"> Currency: {data.country.currency}</li>
        <li className="list-group-item"> Capital: {data.country.capital}</li>
       
        <li className="list-group-item"> Emoji: {data.country.emoji}</li>
    
        <li className="list-group-item"> Phones: {data.country.phones}</li>
    
      </ol>
    </div>
    );
  }