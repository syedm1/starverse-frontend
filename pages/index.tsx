import Head from 'next/head';
import { useQuery } from 'urql';
import Image from 'next/image';
import { Grommet, Box, Grid } from 'grommet';
import { Image as GorImage } from 'grommet';
import { TestDesktop } from 'grommet-icons';
import { HeroesQuery } from './queryHeroes';
import { HeroCard } from '../components/HeroCard';

const Home = () => {
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
      <Box background='' height='small' width='small'>
        <Image
          src={String(path)}
          alt='Picture of the author'
          width='64px'
          height='164px'
        />
      </Box>
    );
  };

  const lake_data = [
    {
      location: 'Blue Hole',
      image: `https://i.insider.com/5c796ca426289858f7205ede?width=1136&format=jpeg`,
      state: 'Belize',
    },
    {
      location: 'The Satil',
      image: `https://www.israel21c.org/wp-content/uploads/2020/01/shutterstock_733279432.jpg`,
      state: 'Israel',
    },
    {
      location: 'Barrier Reef',
      image: `https://img.jakpost.net/c/2020/04/07/2020_04_07_92088_1586233705._large.jpg`,
      state: 'Australia',
    },
  ];
  const avatarSrc =
    'data:image/png;base64,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';
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
            <Box pad='large'>
              <Grid
                gap='large'
                rows='medium'
                columns={{ count: 'fit', size: ['small', 'medium'] }}
              >
                {lake_data.map((item) => (
                  <HeroCard
                    location={item.location}
                    image={item.image}
                    state={item.state}
                    avatar={avatarSrc}
                  />
                ))}
              </Grid>
            </Box>
            {WithDynamicImage(friend.name)}
          </div>
        ))}
      </div>
    </Grommet>
  );
};

export default Home;
