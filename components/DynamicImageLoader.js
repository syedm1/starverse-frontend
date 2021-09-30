import  Image from next/image;
import { Box } from 'grommet';

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
