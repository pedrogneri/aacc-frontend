import React from 'react';
import { Scaffold } from '../../components';

const Home = () => (
  <Scaffold onSearch={(query: string) => console.log(query)}>
    <>aaa</>
  </Scaffold>
);

export default Home;
