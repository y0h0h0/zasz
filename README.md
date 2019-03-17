![Search](./zasz.jpg)
***
### A react store manager
***

```javascript
import {Provider} from 'zasz';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
```

```javascript
import store from 'zasz';

store.user = {name:'Tom', age:18}

<div>Name: {store.user.name}</div>
<div>Age: {store.user.age}</div>
```
