import React from 'react';
import {Helmet} from 'react-helmet'

const DogsRuleWithHelmet = () => (
    <div>
      <Helmet>
        <title>Dogs Rule</title>
        <meta name="description" content="Dogs are the Best!" />
      </Helmet>
      <h1>Dogs Rule</h1>
      <p>Dogs Rule</p>
    </div>
)

export default DogsRuleWithHelmet;
