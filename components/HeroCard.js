import {
  Grommet,
  Box,
  Card,
  CardBody,
  CardHeader,
  Avatar,
  Heading,
  Image,
  Text,
  Stack,
} from 'grommet';

export const HeroCard = ({ location, image, state, avatar }) => {
  return (
    <Card width='medium' key={location}>
      {/* Stacked CardBody and CardHeader on top of each other 
              in that order */}
      <Stack anchor='bottom-left'>
        <CardBody height='medium'>
          <Image fit='cover' src={image} a11yTitle='scuba diving' />
        </CardBody>
        <CardHeader
          pad={{ horizontal: 'small', vertical: 'small' }}
          // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
          background='#000000A0'
          width='medium'
          justify='start'
        >
          <Avatar src={avatar} a11yTitle='avatar' />
          <Box>
            <Heading level='3' margin='none'>
              {location}
            </Heading>
            <Text size='small'>{state}</Text>
          </Box>
        </CardHeader>
      </Stack>
    </Card>
  );
};
