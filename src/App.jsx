import React, { Suspense, lazy } from 'react';
import './App.css';
// import Component1 from './Components/Component1';
// import Component2 from './Components/Component2';
const Component1 = lazy(() => import('./Components/Component1'));
const Component2 = lazy(() => import('./Components/Component2'));

function App() {
  return (
    <>
      <div>
        <h1>Lazy Loading Concept</h1>
        <Component1 />
        <Suspense
          fallback={
            <div>
              <h2>Loading ...</h2>
            </div>
          }
        >
          <Component2 />
        </Suspense>
      </div>
    </>
  );
}

export default App;

/* this concept is use when there is large number of data in a
component and it cause delay for another components also so 
here comes the concept of lazy loading where if first render
the component which has small data and then it shows us a 
message whatever we want and after fectcing data it display. */
