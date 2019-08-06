// src/components/Task.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

// When creating a story we use a base task (task) to build out the shape of the task the component expects. This is typically modelled from what the true data looks like. Again, export-ing this shape will enable us to reuse it in later stories, as we'll see.
export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// action() allows us to create a callback that appears in the actions panel of the Storybook UI when clicked. 
// So when we build a pin button, we’ll be able to determine in the test UI if a button click is successful.
// ** Actions help you verify interactions when building UI components in isolation. Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in.
export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};



// To initiate Storybook we first call the storiesOf() function to register the component. 
// We add a display name for the component –the name that appears on the sidebar in the Storybook app.
storiesOf('Task', module)
// To define our stories, we call add() once for each of our test states to generate a story. The action story is a function that returns a rendered element (i.e. a component class with a set of props) in a given state---exactly like a React Stateless Functional Component.
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);



// Random Notes:
// bundling the actions... can pass all as props and also export them out in stories for other  too
// <Task {...actions}> is equivalent to <Task onPinTask={actions.onPinTask} onArchiveTask={actions.onArchiveTask}>
