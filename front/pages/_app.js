import React from 'react'
import Head from 'next/head';
import PropTypes from "prop-types";

import wrapper from "../store/configureStore";


const App = ({Component}) => {
  return (
    <>
      <Head>
        <title>show me the skills</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style dangerouslySetInnerHTML={{ __html: bootstrapStyle }} />
      </Head>
      <Component/>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
