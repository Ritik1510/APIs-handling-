# Learn APIs handling

### Here we'll use INDIAN Postal Pincode Service APIs  
* `Original link : ` <a href="http://www.postalpincode.in/">Click Here!</a><br>
* `Original API docs link : ` <a href="http://www.postalpincode.in/Api-Details">Click Here!</a>

### Postal PIN Code API
Postal PIN Code API allows developers to get details of Post Office by searching Postal PIN Code or Post Office Branch Name of India.

Here How's we get the details<br>

`Search by pincode` 
* GET https://api.postalpincode.in/pincode/{PINCODE} <br> 
  
`Search by branch name`<br> 

* GET https://api.postalpincode.in/postoffice/{POSTOFFICEBRANCHNAME}

`For Response Details :` <a href="http://www.postalpincode.in/Api-Details">Click Here!</a>

### Used Technologies for building this handling page 
* HTML
* CSS (Tailwindcss.com)
* Javascript 
* React 


HERE HOW WE USE PROPS FOR DATA PASSING `FROM PARENT TO CHILD COMPONENT` <br>

```jsx
import React from 'react';

// Child Component
const ChildComponent = ({ message }) => {
  return <p>{message}</p>;
};

// Parent Component
const ParentComponent = () => {
  const message = "Hello from Parent Component!";
  
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
```
USE OF PROPS FOR PASSING THE DATA TO `NESTED COMPONENTS IN REACT.js` <br> 
```jsx 
import React from 'react';

// Grandchild Component
const GrandchildComponent = ({ message }) => {
  return <p>{message}</p>;
};

// Child Component
const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandchildComponent message={message} />
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const message = "Hello from Parent Component!";
  
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;

```
USE Of `contextAPI` FOR PASSING THE DATA FROM MAIN FETCHING COMPONENT TO ALL OTHERS <br/>

1. `Create contextAPIs reference`: <br> 
In apisComponent, you’ll create the context and provide the necessary data using a provider. You won’t render any components here, just the context provider

```javascript 
// context/ApisContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ApisContext = createContext();

export const ApisProvider = ({ children }) => {
const [data, setData] = useState(null);

useEffect(() => {
  axios.get('https://api.example.com/data')
    .then(response => setData(response.data))
    .catch(error => console.error(error));
}, []);
return (
  <ApisContext.Provider value={{ data }}>
    {children}
  </ApisContext.Provider>
)
};
```
2. `Wrap Your Application in the Provider`: <br> 
In your App.js or a similar top-level component, wrap the rest of your application with the ApisProvider. This way, all components nested inside will have access to the data provided by apisComponent.
```javascript
// App.js
import React from 'react';
import { ApisProvider } from './context/ApisContext';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <ApisProvider>
      <ComponentA />
      <ComponentB />
    </ApisProvider>
  );
}

export default App;
 ```

3. `Consume the Context in Child Components`:<br>
 In the child components, you can now consume the context to access the data provided by `apisComponent`.

```javascript 
// components/ComponentA.js
import React, { useContext } from 'react';
import { ApisContext } from '../context/ApisContext';

const ComponentA = () => {
  const { data } = useContext(ApisContext);

  return (
    <div>
      <h1>Component A</h1>
      <p>Data from API: {data ? data.someProperty : 'Loading...'}</p>
    </div>
  );
};

export default ComponentA;

```

```javascript 
// components/ComponentB.js
import React, { useContext } from 'react';
import { ApisContext } from '../context/ApisContext';

const ComponentB = () => {
  const { data } = useContext(ApisContext);

  return (
    <div>
      <h1>Component B</h1>
      <p>Data from API: {data ? data.otherProperty : 'Loading...'}</p>
    </div>
  );
};

export default ComponentB;

```


4. `Organizing the Files`

- **context/ApisContext.js**: Contains the context creation and provider logic from `apisComponent`.
- **components/ComponentA.js**: Consumes the data provided by `ApisContext`.
- **components/ComponentB.js**: Another consumer of the data.

5. `Explanation`

- **Data Management**: `apisComponent` fetches or manages the data and passes it to the `ApisProvider` without rendering any components itself.
- **Global Availability**: By wrapping your application in `ApisProvider`, the data becomes globally accessible to all components that need it, without needing to pass props manually.

This approach keeps `apisComponent` as the central hub for data management while allowing other components to use that data without being directly rendered by `apisComponent`.

-----------

Mentained by `Ritik` <br>
### Social links-
[![https://www.linkedin.com/in/kr-ritik](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)

### Email address-
kr.ritik1510@gmail.com

### Github- <a href="https://github.com/Ritik1510/">Click Here!</a>
