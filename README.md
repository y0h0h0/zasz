![Search](./zasz.jpg)
***
### A react store manager
Probably the simpliest react store in the world.__
Installation: `npm i zasz -S`
***

`index.js`
In the main file you should wrap your app's main element with the zasz Provider.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'zasz';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
```


`App.js`
Anywhere else in your app you can import the zasz store. Zasz will share data through the app. Once you change a value in store it will be applied everywhere.
```javascript
import React from 'react';
import store from 'zasz';

store.counter = 0;

export default (props) =>
    <div>
      <div>Counter {store.counter}</div>
      <div onClick={()=>{ store.counter+=1 }}>Plus one</div>
    </div>
```

***

Happy hacking 😉
