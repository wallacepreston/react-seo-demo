import React from 'react';
import {Helmet} from 'react-helmet'
import DogsRuleNoHelmet from './dogs-rule-no-helmet';

const DogsRuleWithHelmet = () => (
    <div>
      <Helmet>
        <title>Dogs Can Use Tech Too!</title>
        <meta name="description" content="Dogs, with the aid of this technological device, can achieve human communication" />
      </Helmet>
      <DogsRuleNoHelmet />
    </div>
)

export default DogsRuleWithHelmet;
