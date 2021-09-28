import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Grommet } from "grommet";
import { TestDesktop } from "grommet-icons";

import QUERY_HEROES from "./queryHeroes.graphql";

const Home = () => {
  const { data, loading, error } = useQuery(QUERY_HEROES);

  console.log(data);
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
        <title>StarVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Heroes</h1>
      <TestDesktop color="red" />
      {/* let the user know we are fetching the countries */}
      {loading && <p>loading...</p>}

      {/*heroes only here*/}
      <div>
        {data?.human?.friends.map((friend) => (
          <div>{friend.name}</div>
        ))}
      </div>
    </Grommet>
  );
};

export default Home;
