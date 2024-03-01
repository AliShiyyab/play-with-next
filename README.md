# NextJs 13 Documentation

## Installations

> Install latest node version (If does not exist)

> Install yarn (If does not exist)

> Install dependencies using `yarn install`


## Run Application (depends on the package.json file)

> `yarn build`

> `yarn start`

## Server Component

In Next.js 13, a server component is a component that is rendered on the server-side. 
This means that the component's code is executed on the server, and the resulting HTML is sent to the client.
This approach provides performance benefits, as the server can generate the initial HTML faster than the client.

## Client Component

Is a component that is rendered on the client-side, meaning it runs in the user's web browser. 
Client Components can utilize browser APIs and hooks, making them ideal for interactive UI elements. 
To create a Client Component, you need to add the "use client" directive at the beginning of a file before your imports.

> That's mean, you can't use hooks if you don't add `use client` in the head of components.

### Client Component Usage

* It's recommended to use it at the level of `leaf`.
* When users need to do action (like `search`)

### Differences between client and server component

| Server Components | Client Components |
| --- | --- |
| Server Components are rendered on the server-side, which can lead to faster initial load times and better SEO. | Client Components are rendered on the client-side, allowing them to utilize browser APIs and hooks. |
| They don't have direct access to browser APIs or hooks like `useState`, `useEffect`, or `createContext`. | They can use hooks like `useState`, `useEffect`, and `createContext`. |
| To share data between Server Components, you can use `fetch` or React's cache function to fetch the same data without making duplicate requests. | To mark modules that contain client-only code, you can use the `client-only` package. |
| To prevent unintended client usage of server code, you can use the `server-only` package to give other developers a build-time error if they accidentally import one of these modules into a Client Component. | When using third-party components that rely on client-only features, you may need to wrap them in your own Client Components if they don't have the "use client" directive. |


## Cache and Revalidates

### Cache

#### { cache : no-store }

> Example: fetch($`{Base_Url}/`, { cache: 'no-store' });

> This way use to call api without caching the result depends on the browser level.
> That's mean everytime when i join (X) page, i'll call api again to get the data.

#### { cache: 'force-cache' }

*It's a default data for cache to be forced, there's an example for how i can use force-cache*

> Example: fetch($`{Base_Url}/`, { cache: 'no-store' });

> Example: fetch($`{Base_Url}/`);

> This way used to cache all response which received from API.


#### { cache : 'force-dynamic' }

*This point refers to a specific routing configuration where the route segment is defined as dynamic*

*It suggests that the route should always be treated as dynamic, potentially indicating that caching should be avoided to ensure that the most up-to-date data is always fetched.*

> Example: fetch($`{Base_Url}/`, { cache: 'force-dynamic' });

### Revalidate

*It often used in conjunction with caching mechanisms to specify how frequently cached data should be refreshed*

> Example: fetch(`${Base_Url}`, { next: { revalidate: 3600 } })  (3600 is a seconds that's mean receive the data each one hour), (You can set the value (0) that's mean each time render the page, it will get the data from API).

