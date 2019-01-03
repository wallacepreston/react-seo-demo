import React from 'react';
import {Helmet} from 'react-helmet'
import CatsRuleNoHelmet from './cats-rule-no-helmet';

const CatsRuleWithHelmet = () => (
    <div>
      <Helmet>
        <title>Cats Are Very Sinister</title>
        <meta name="description" content="Cats will truly take over the world. And of course, they show no mercy... Watch out, Dogs!" />
      </Helmet>
      <CatsRuleNoHelmet />
    </div>
)

export default CatsRuleWithHelmet;
