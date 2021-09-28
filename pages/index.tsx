import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Grommet } from "grommet";
import { TestDesktop } from "grommet-icons";

import QUERY_COUNTRIES from "./queryCountries.graphql";

// import styles from "../styles/Home.module.css";
const Home = () => {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };
  // if all good return data
  return (
    <Grommet theme={theme}>
      <Head>
        <title>Countries GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Countries</h1>
      <TestDesktop color="red" />
      {/* let the user know we are fetching the countries */}
      {loading && <p>loading...</p>}
      <div>
        {data?.countries?.map((country) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </Grommet>
  );
};

export default Home;
