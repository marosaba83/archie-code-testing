import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/react';
import { Launch } from '../intefaces/Launch';
import { LinkIcon } from '@chakra-ui/icons';

const LaunchItem: React.FC<Launch> = ({ details, links, mission_name, rocket }) => {
  return (
    <>
      {/* Card Header */}
      <Box
        backgroundColor={'gray.200'}
        borderRadius='lg'
        borderWidth='1px'
        maxW='250px'
        overflow='hidden'
      >

        {/* Mission Image */}
        {links.flickr_images[0]
          ? (
            <Box
              backgroundImage={links.flickr_images[0]}
              backgroundPosition={'center'}
              backgroundSize={'cover'}
              height={200}
              overflow={'hidden'}
              width={'full'}
            />)
          : (
            <Box
              backgroundImage={'/launch-item-placeholder.png'}
              backgroundPosition={'center'}
              backgroundSize={'contain'}
              height={200}
              overflow={'hidden'}
              width={'full'}
            />
          )}

        {/* Card Body */}
        <Box p='6' backgroundColor={'white'}>
          {/* Mission Name */}
          <Box
            mt='1'
            fontWeight='semibold'
            lineHeight='tight'
            isTruncated
          >
            <Heading as='h1' size='md'>
              <Link href={links.article_link}>
                {mission_name}
              </Link>

              <LinkIcon />
            </Heading>
          </Box>

          {/* Rocket Name */}
          <Box>
            <Box as='span' color='gray.400' fontSize='sm'>
              {rocket.rocket_name}
            </Box>
          </Box>

          {/* Mission Details */}
          <Box height={100} overflow={'hidden'} >
            <Box as='span' color='black' fontSize='sm'  >
              {details || `Sorry... No details provided for this launch`}
            </Box>
          </Box>

          <Box>
            <Link href={links.article_link} fontSize={'sm'} color={'blue.500'}>
              See more
            </Link>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default LaunchItem;
