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

store.count = 0

<div>Counter: {store.count}</div>
<div onClick={()=>{ store.count+=1 }}>plus one</div>

```
