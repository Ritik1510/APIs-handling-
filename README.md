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

USING PROPS IN REACT.JS `FROM PARENT TO CHILD` <br>

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
USING PROPS FOR `NESTED COMPONENTS IN REACT.js` <br> 
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
Mentained by `Ritik` <br>
### Social links-
[![https://www.linkedin.com/in/kr-ritik](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)

### Email address-
kr.ritik1510@gmail.com

### Github- <a href="https://github.com/Ritik1510/">Click Here!</a>
