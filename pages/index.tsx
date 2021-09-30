import Head from 'next/head';
import { useQuery } from 'urql';
import { Grommet } from 'grommet';
import { TestDesktop } from 'grommet-icons';
import Image from 'next/image';

const Home = () => {
  const HeroesQuery = `query {
  human(id: "1000") {
    name
    homePlanet
    friends {
      name
    }
  }
}`;

  const [result, reexecuteQuery] = useQuery({
    query: HeroesQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  const WithDynamicImage = (image) => {
    console.log(image);
    var image_name = image?.toLowerCase().replace(/\s/g, '');
    var path = `/../public/StarVerseImages/Heroes/${image_name}.png`;
    console.log(path);
    return (
      <Image
        src={String(path)}
        alt='Picture of the author'
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Heroes</h1>
      <TestDesktop color='red' />
      {/* let the user know we are fetching the countries */}
      {fetching && <p>loading...</p>}

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
