import React from 'react';
import logo from 'assets/images/logo.svg';
import './main.css';
import { Helmet } from 'react-helmet';

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>main | react app</title>
      </Helmet>
      <header className="main-header">
        <img src={logo} className="main-logo" alt="logo" />
        <p>cra-template-ts-tailwind</p>
        <a
          className="main-link"
          href="https://github.com/swekiiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </header>
    </div>
  );
};

export default Main;
