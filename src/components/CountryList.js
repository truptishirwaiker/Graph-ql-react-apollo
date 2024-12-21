import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const Countries_Query = gql`
  query getCountries {
    countries {
      code
      name
      phone
    }
  }
`;

export default function CountryList() {
  const { loading, error, data } = useQuery(Countries_Query);

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error :</p>;

  return (
    <div>
      
      <br />
      <h4>List of Countries</h4> <br />
     
      <table className="table table-striped">
        <thead>
          <th>Name</th>
          <th>Details</th>
        </thead>
        <tbody>
          
          {data.countries.map((country, i) => {
            return (
              <tr key={country.code}>
                <td>{country.name}</td>
                <td>
                  <Link
                    to={"/CountryDetails/" + country.code}
                    className="btn btn-secondary"
                  ><button>
                    Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}