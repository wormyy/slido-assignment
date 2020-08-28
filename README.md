This project is a simple tool for event administration. You
can see both upcoming and past events, as well as add new events.

You can try the app on https://slido-assignment.vercel.app/

## How to try locally

First you have to run `yarn` or `npm install` in the project directory. Then you
can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can also visit

### `yarn test`

This will run jest unit tests.

### `yarn run e2e`

This will run the e2e tests.

## Reasoning before tech used

- React - unless performance/bundle size is the primary focus, I think using
  React makes sense for applications at any scale. Not only because of the ease
  when building UI, but also the tooling and code organisation
  (create-react-app allows getting started just in a few minutes and one-click
  deploy)
- Typescript - I'm very used to TS now, it's easy to setup and it provides a great value,
  especially when catching bugs early. In my opinion, the overhead of writing types
  is heavily dwarfed by the value it provides.
- State management - I went with default `useState` hook, because I think it's
  sufficient for now. If the state had grown, I would prefer to use `useReducer,`
  as it is easier to test. The new React Context API could solve the prop drilling
  problem that Redux was designed to solve with `connect`. I would still
  consider Redux or some other state management library, but I'm not convinced it's needed.
- Material UI - There's a great value in using premade components, it speeds up the
  development very much and gives the application consistent look from scratch.
  With a completely custom design, the value diminishes, but it's still worth it.
  I chose MUI instead of Bootsrap mainly because I wanted to try it for
  the first time. I like it a lot, especially the Grid and the utilities for
  constant spacing.
- Styled components - I hate global CSS, and I think css-in-js is the most
  sensible way of handling CSS (along with reusable components and a design
  system). Styled-components is
  what I'm used to, but there other very good solutions. In the end I didn't
  have to use almost any custom styling, because MUI and its utils handled
  almost all my needs (which I love, the less custom CSS the better)
- react-hook-form - Another library I wanted to try out. I usually use Formik
  for data form management and I think it saves a lot of time, especially
  handling errors and many different states the form can have (dirty, pristine
  etc)
- Cypress - e2e is a crucial part of any application and Cypress is currently my
  favourite
- Jest - The standard solution for unit tests
- uuid - a handy small library for generating IDs
- prettier - not included in the project curently but it's must have and I have it
  always running locally
- eslint - a nice to have, but TS replaced the most crucial eslint warnings

## Other considerations

- e2e test now cover the happy path which provides the most value, but they
  could also cover some edgier cases. The test is a bit fragile, as it relies on
  the new element being the first in the upcoming array.
- unit tests now cover the most complex function (pastAndUpcomingSelector) and provide great value. Maybe
  we could also unit test react components (form, event), but I don't think it would provide
  that much value in the current state
- The design is very basic, but acceptable
- There could be a better validation and more helpful error messages on the form

## Known bugs

- Date doesn't reset properly after submitting
