// We also have to make one small change to the Storybook configuration setup (.storybook/config.js) so it notices our .stories.js files and uses our CSS file. By default Storybook looks for stories in a /stories directory; 
// this tutorial uses a naming scheme that is similar to the .test.js naming scheme favoured by CRA for automated tests.

// .storybook/config.js

import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);




// default: 
// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);
