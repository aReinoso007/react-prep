## Closures

Clousures are basically encapsulation
a function inside a parent scope and that inner function will have access to variables or function inside the parent scope through getter and setters:

```javascript
    const createSecret = (secret) => {
        return {
            getSecret: () => secret,
            setSecret: (newSecret) => {
                secret = newSecret
            }
        }
    }

    const mySecret = createSecret("My Secret")
    console.log(mySecret.getSecret()); //My Secret
    consolee.log(mySecret.setSecret("My new Secret"))// My new Secret
```
The variables are live references to the outer-scoped variable. not a copy. If we change the outer-scoped var, the change will be reflected in the closure var, and vice versa.

### use cases for closure
* Data privacy: Encapsulation, allows us to hide the implementation details of a class from the outside world. We can declare private variables for objects

```javascript
    const createCounter = () => {
        let count = 0
        return {
            increment: () => ++count,
            decrement: () => --count,
            getCount: () count,
        };
    }

```


* Currying and partial apps (to improve function composition, parameterize Express middleware or React Higher Order Components)
* Sharing data with event handlers and callbacks


## Pure functions
These are predictable, making them easier to understand, debug, and test than impure functions. These follow 2 rules:

1. Deterministic -- given teh same input, a pure function will always return the same output.
2. No side-effects -- A side effect is any application state change that is observable outside the called function other than its return value

### Examples of non-deterministic Functions

- A random number generator: it gives a diff answer every time
- A global variable that can change state:
- A parameter that can change state
- The current syste time

### Examples of Side Effects
- Modifying any external variable or object property (global var or a var in the parent function scope chain).
- Writing to the screen, file or network
- Throwing an error. Instead, the function should return a result indicating the error
- Triggering any external process

In `Redux` all reducers must be pure functions. If they're not, the state of the application will be unpredictable, and features like time-travel debugging will not work. Impurity in reducer functions may also cause bugs that are difficult to track down, incluiding stale React component state.

## Function Composition
Process of combining two or more functions to produce a new function or perform some computation
`   (f*g)*(x) = f(g(x))` (`f` composed with `g` of `x` equals `f` of `g` of `x`).

Taking multiple functions, putting them together and returning a function that leverages those other functions.


```javascript
    const compose = (f, g) => (x) => f(g(x))
    
    const g = (num) => num + 1;
    const f = (num) => num * 2;

    const h = compose(f, g)
    
    h(20) // 42

```

## Functional programming
JS can be a functional language as well as OOP
In `functional programming` we use functions as the unit of composition. Is a declarative programming paradigm, programs are written in terms of what they do, rather than how they do it. Key aspects:

- *inmutability*: inmutable data structures are easier to reason about than mutable data structures. dont change the original thing but assign it to a new one. Arrays are typically inmutable, the array functions dont mutate the actual array. Not the case for every function.

- *Higher order functions*: functions that other functions as arguments or return functions as their result.

- *Avoid shared mutable state*: shared mutable state makes programs difficult to understand, debug and test. when se use `useState`

It can lead to better test coverage.


## Promises
In JS is an object representing the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that is initially uknown, typically because the computation of its value is not yet complete.

Characteristics of promises:

### Stateful:
A promise is one of 3 states:

- *Peding:* initial state, neither fulfilled nor rejected.
- *Fulfilled:* the operation completed successfully.
- *Rejected:* the operation failed

*Inmutable* once a promise is fulfilled or rejected, its state cannont change. It becomes immutable, permanently holding its result -- this makes them reliable in async flow control.

*Chaining* Promises can be chained meaning the output of one `Promise` can be used as the input of another using `then()` for success or `catch()` for handling failures.
```javascript
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000)
    })

    promise.then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })
```

We can treat them as if they are async, using the `async/await` syntax.
```javascript
    const processData = async () => {
        try{
            const data = await fetchData();
            console.log('Processed: ', data)
        }catch(error){
            console.log('Error', error)
        }
    }
```

## TypeScript
Superset of JS, it adds static typing to JS, which is a dynamically typed lanaguage. Static typing helps developers catch errors early in the dev process, improving code quality throughout the code.

*IDEs* can provide better autocompletion, navigation and refactoring .

*Compilation* TS is transpiled into JS, making it compatible with any browser or JS env.

*Interfaces* allow us to specify

## React Hooks
Hooks are functions that let us use state and other react features without writing a class. They allow us to use state, context, refs and component lifecycle events by calling functions instead of writing class methods.

- `useEffect`: lets us perform side-effects in functional components. Combines the capabilities of `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` into a single function call, reducing required code and creating better code organization that class components. 

- `useRef` -- allows us to create a mutable reference that persists for the lifetime of the component

- *Custom Hooks* -- to encapsulate reusable logic. Easy to share across multiple components.

*Rules of hooks* must be used at the top level of React Functions (not inside loops, conditions or nested functions) and only in React Function Components or custom Hooks.

*How to create a react hook inside the react context API so that we can access this from different compoents*



# NextJS Vs. React

React is UI library, NextJS is a full-stack framework built on top on react. React dictates how the interface looks on the clientside, NextJs provides the entire infrastructure -- handling server-side rendering, routing, data fetching architecture, and build optimizations out of the box.

1. Rendering architecture and SEO performance.

In react we use JS in the browser to build the UI (Client Side Rendering), in NextJS with server-side rendering, the browser request page --> [server] fetches data & renders HTML --> [Server] sends fully formed HTML --> (immediately visiable & Indexable).

*Why is NextJS better for SEO performance?*

*CSR* (Client-Side Rendering) the server sends a nearly empty `index.html` alongside a massive JS bundle. Search engine crawlers like Googlebot have to parse and execute JS to see the content. If the execution takes too long or fails, crawlers index a blank page. 

*NextJS* delivers a fully formed HTML string directly from the server, meaning search engines can read texts, links and metadata instantaneously.

It also irmpoves *Large Contentful Paint (LCP)* and minimizes *Cumulative Layout Shift (CLS)* because components dont visually snap into place after loading client-side. Fast initial loads directly boost SEO rankings.



2. Routing System

React doesnt include routing by default. We rely on community libs like React Router Dom, we must manually declare routes, configure layouts and wire up wrappers at the root level of the app.

`NextJS` uses *File-System Based* is automated, zero-config file system router, it has 2 variations:
- *Page Router (Legacy but heavily tested)*: any file inside the `/pages` directoy automatically becomes a route eg. `pages/about.js` maps to `/about`.

- *App Router (Modern / React 18+):* built inside the `/app` directory using structural folders and specific filenames like `page.tsx` and `layout.tsx`. It natively supports nested layouts without re-rendering parent structures.

3. Data fetching methods

React performs mutations and queries inside the browser env, whereas `NextJS` provides structured boundaries to pull data directly on the server layer.

* *`getStaticProps`:* runs at built time (when running `next build`). Is blazing fast, served immeditely from a global CDN as static HTML files. Best use for pages, blogs, product catalog (data changes infrequently).

* *`getServerSideProps`:* at runtime (on the server upon every single request), it offers dynamic speed dependent on DB/API latency per request. Best used for news feed, live dashboards, checkout pages (data changes continuously).

* *`React Standard CSR`:* at runtime (in the browser), slower intial paint, relies on loading states while fetching on the client, ideal use case private dashboards, internal tools, behind authentication walls.

In modern `NextJS` applications `getStaticProps` and `getServerSideProps` have been replaced by `React Server Compoents (RSC)`. Instead of exporting separate functions, we can write native `async/await` directly inside functional components on the server side:

```javascript
    export default async function Page(){
        const res = await fetch('');
        const data = await res.json();

        return <main>{data.title}</main>
    }

```