import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Grommet } from "grommet";
import { TestDesktop } from "grommet-icons";
import Image from "next/image";
import QUERY_HEROES from "./queryHeroes.graphql";
import hansolo from "../public/StarVerseImages/Heroes/hansolo.jpeg";

const Home = () => {
  const { data, loading, error } = useQuery(QUERY_HEROES);

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

  const WithDynamicImage = (image) => {
    console.log(image);
    var image_name = image?.toLowerCase().replace(/\s/g, "");
    var path = `/../public/StarVerseImages/Heroes/${image_name}.png`;
    console.log(path);
    return (
      <Image
        src={String(path)}
        alt="Picture of the author"
        width={100}
        height={100}
      />
    );
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
          <div>
            {friend.name}
            {WithDynamicImage(friend.name)}
          </div>
        ))}
      </div>
    </Grommet>
  );
};

export default Home;
