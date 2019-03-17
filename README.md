![Search](./zasz.jpg)
***
### A react store manager
***

`index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'zasz';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
```

`App.js`
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
