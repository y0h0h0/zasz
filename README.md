![Search](./zasz.jpg)
***
# A react store manager
Probably the simplest react store in the world.<br/>
Installation: `npm i zasz`
***
## Client Side Rendering

`index.js`<br/>
In the main file you should wrap your app's main element with the zasz Provider.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'zasz';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
```

***
`App.js`<br/>
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
## Server Side Rendering with Next.js
***
First off, you should follow the instructions: https://nextjs.org/docs#custom-app<br/>
Then change the `_app.js` file:

```javascript
import React from 'react';
import App from 'next/app';
import { Provider } from 'zasz';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider>
          <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;

```

***

*Note: zasz does not work with PureComponents*

***

Happy hacking 😉
