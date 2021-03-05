import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not found</title>
      </Helmet>
      <div className="bg-black flex items-center justify-center w-screen h-screen bg-cover bg-no-repeat">
        <h1 className="text-center text-white text-9xl tracking-widest">
          <span className="text-red-600">404</span> - Notfound
        </h1>
      </div>
    </>
  );
};

export default NotFound;
