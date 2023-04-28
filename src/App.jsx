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
message whatever we want and after fectcing data it display.

Lazy loading is a technique used in React.js to improve the 
performance of web applications by loading components only 
when they are needed. When lazy loading is implemented, 
instead of loading all the components at once, only the 
components that are required at a given time are loaded.

Lazy loading is typically used for large components that 
might not be used immediately when a user visits a website. 
For example, if a website has a large image gallery, it 
might not make sense to load all the images at once when 
a user first visits the page. Instead, the images can be 
loaded as the user scrolls down the page, which can 
significantly improve the page load time and overall performance.
In React.js, lazy loading is achieved using the React.lazy()
 function and Suspense component. The React.lazy() function 
 allows you to load a component lazily, while the Suspense 
 component allows you to display a fallback content while 
 the lazy-loaded component is being loaded.
*/
