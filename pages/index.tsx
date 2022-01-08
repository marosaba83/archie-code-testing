import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import LaunchContainer from '../components/LaunchContainer';


const Home: NextPage = () => {
  return (
    <>
      <Container
        backgroundColor={'gray.100'}
        maxW={'moz-max-contents'}
        minH={'100vh'}
        // padding={0}
      >
        <LaunchContainer />
      </Container>
    </>
  )
}

export default Home
