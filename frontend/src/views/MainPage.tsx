import React from 'react';

import { trpc } from '../utils/trpc';

const MainPage = () => {
  const response = trpc.hello.useQuery('a');

  if (!response.data) return <div>Loading...</div>;
  return (
        <div>
            <p>{response.data.text}</p>
        </div>
  );
};

export default MainPage;
