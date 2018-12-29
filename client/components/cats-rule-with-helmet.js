import React from 'react';
import {Helmet} from 'react-helmet'
import CatsRuleNoHelmet from './cats-rule-no-helmet';

const CatsRuleWithHelmet = () => (
    <div>
      <Helmet>
        <title>Cats Are Very Sinister</title>
        <meta name="description" content="Cats will truly take over the world." />
      </Helmet>
      <CatsRuleNoHelmet />
    </div>
)

export default CatsRuleWithHelmet;
