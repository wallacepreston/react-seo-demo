import React from 'react';
import {Helmet} from 'react-helmet'

const CatsRuleWithHelmet = () => (
    <div>
      <Helmet>
        <title>Cats Rule</title>
        <meta name="description" content="Cats are the Best!" />
      </Helmet>
      <h1>Cats Rule</h1>
      <p>Cats Rule</p>
    </div>
)

export default CatsRuleWithHelmet;
