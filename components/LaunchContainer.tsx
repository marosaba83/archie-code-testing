import React from 'react';
import { useQuery } from "@apollo/client";
import { Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { Launch } from '../intefaces/Launch';
import { GET_LAUNCHES_PAST_QUERY } from '../graphql/getLaunchList';
import LaunchList from './LaunchList';
import LaunchSearch from './LaunchSearch';

interface LaunchQueryFilter {
  missionName: string;
}

interface LaunchesQueryData {
  launchesPast: Array<Launch>
}

const LaunchContainer: React.FC = () => {

  const { data, error, loading, refetch } = useQuery<LaunchesQueryData, LaunchQueryFilter>(
    GET_LAUNCHES_PAST_QUERY,
    {
      variables: { missionName: '' },
    },
  );

  if (loading) return (
    <Center h='100vh'>
      <Spinner color='black' size='xl' />
    </Center>
  );

  if (error) return (
    <Center bg='tomato' w='100%' height={'100vh'} p={4} color='white'>
      <Heading>
        Oops, something went wrong {error}
      </Heading>
    </Center>
  );

  return (
    <>
      <Center
        paddingTop={'50px'}
      >
        <LaunchSearch onChange={(filter: string) => { refetch({ missionName: filter }) }} />
      </Center>

      <SimpleGrid
        minChildWidth={'250px'}
        padding={'50px'}
        spacing={'40px'}
      >

        {data?.launchesPast?.length == 0 ? (
          <Center w='100%' color='black'>
            <Heading>
              No launches found
            </Heading>
          </Center>
        ) : (
          <LaunchList launches={data?.launchesPast} />
        )}
      </SimpleGrid>
    </>
  );
}

export default LaunchContainer;
