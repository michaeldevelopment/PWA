# PWA

PWA are web apps with a more rich and powerful user experience because of the progressive enhancement.

## Main features of PWA

1. Can be used offline
2. Can read and write files locally
3. Access to hardware connection - USB, bluetooth, etc.
4. Rich and realiables
5. Allow device integration
6. Installed icon and standalone experience
7. PWA are still web apps but with enhanced capabilities and features

## PWA > desktop app -> Users tend to use it more frequently

## Challenges of PWA

###### Apple

Apple has so many restrictions in terms of PWA usability in comparison with other company devices/technologies. 

1. Lack of pushing notifications
2. Bugs with some PWA features

You have to make sure to test the performance of your PWA in all the platforms (cross-platform performance - different browsers and different devices) .. and just in case, provide alternative experiences when features are not available

##### PWA unknowledge

Most of the times a installation PWA guide is needed for the users. Furthermore, it's needed to abroad the misconception and lack of knowledge of the challenges and advantages of using PWA. 

##### Compatibility

A PWA is just a web app, with all the protocols, content and services this implies. e.g.

- Safari and Firefox don't support PWA in desktop
- PWA installation in iOS is only possible in Safari. You can't do it with a different browser

## Starting with PWA

It's possible to start from scratch or even upgrading a web app to a PWA, any of these are 100% possible.

#### Make the app installable - cache some critical css and javascript to make it possible the offline service
#### Focus on a feature - choose one new feature to add to your app (file handling, push notifications, etc) 
#### Build a simple version - start with an small existing portion of your web app, rethink as a PWA user/dev
#### Start easily - get started thinking and learning about PWA patterns and strategies

It's possible for the user to install a PWA in a mobile app store.

## PWA Checklist

A Progressive Web App is a website, which leads to the question: When does it become a Progressive Web App? The answer is not so simple, as the PWA concept doesn't refer to a specific technology or stack, PWA is instead a pattern including various technical components.

1. Core requeriments -  The app needs to be reliable and usable for all users in different platforms and devices.

- Start fast, stay fast. Is forbidden to start and stay slow
- Works in any browser. The PWA needs a fallback when features are not supported by some browsers - Work-cross different browsers.
- Responsive design
- Offline service
- Is installable. Improve the user experience.

2. Optimize PWA Characteristics

- Offline functionality. *Keep an eye on this. An offline funcitonality does not mean that all the web services need to work offline - Of course there will be ones that could work with connectivity and others that could not .. but whatsoever the case, the user have to be capable to use the app (for example, for writing notes, or editing things) and save changes next when the connectivity is back (or access to some content, etc.). At the very least you should render the app's user interface with a proper message if your app needs a live connection.*

- Fully accessible.
- Powerful capabilities and interactions. Using WebGL, file handling, camera, push messaging, notifications, etc.
- SEO, capable to be discovered through search
- Best code practices (clean code, design patterns)
- Permission requests

## Foundations - The cornerstone

1. Use mobile as a focusing constraint
2. Emphasize just main content and interactions in the design process
3. Enhance functionality when it's needed, in a progressive way .. not doing everything at once 
4. Fast and good user experience
6. Device detection is a PWA bad practice, but some times there is no option

The PWA have to react propperly to different screen size experiences. It is not just adjusting the design according to the size, is also to offer different kind of features or functionalities in different screen sizes.

When the screen size is small, you have to priorize the most important content of your PWA because the space has been reduced. There simply isn't room in a 320 by 480-pixel screen for extraneous and unnecessary elements.

*Focus each view only in the essential tasks that an user wants to do there.* 

*Instead of thinking about your web experiences as a fixed thing, think of it as a set of recommendations that the user's device will use to build the best experience for their current context. To do so, progressive enhancement needs to be embraced.* **Think your PWA as a set of different sections and experiences, instead of a one whole fixed thing**

*The P in PWA comes from Progressive, and it emphasizes the idea of adding features and abilities progressively, and using Feature Detection is key for that goal.*

#### Principle for web design -> Start with the content first. 
Start with the key fundamentals of functionality/behaviour of the PWA. 
Start with intrinsic design

- Mobile as a focusing constraint
- First the content and core functionality, then whatsoever
- Progressively enhancing with advanced functionality where available

#### Web Performance

The faster the web app appears on the screen, the better. It is **MANDATORY** for the PWA to load fast and quickly everytime no matter what

- Understand the key user-centric metrics available.
- Set goals for every metric.
- Measure our PWA.
- Improve our metrics by applying techniques and best practices statically in our code or server.
- Measure again.
- Improve the experience to each user, live, based on the user's context.

#### Web Vitals

1. Loading
2. Interactive
3. Visual Stability

The metrics are absolutely important, especially to these ones (all of these metrics needs to be *VERY FAST*):

- First Contentful Paint (FCP)
- First Input Delay (FID)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

## App design

**Key part of PWA -> is installably**

- Screen size is different depending the device
- When creating the installable icon for your PWA, make sure the icon can adapt to the different edge-masks in all the view devices
- Is better to use plain collors in your PWA
- Full screen is only possible in Android. It is not supported in other devices
- Standalone experience ?
- Rethink about the 200x150 desktop size of your PWA. Your title might be crutial for the user experience

#### CSS Best Practices

- Use "standalone, desktop, browser and fullscreen" media queries
- Use dark and light mode

#### App Experience

- You have to make sure that some interactive elements in your PWA are unselectable with pointer, mouse or hold press. (user-select: none)

*User selection is a vital feature of every web app for usability and accessibility. Do not disable user selection on all content, only on UI elements when not doing so creates a poor or unexpected experience.*

- Disable the pull down refresh behaviour when the user is navigating in chrome or safari by phone. (overscroll-behavior-y: contain)

## Assets and data

*A Progressive Web App is a website; all its assets are the same as on the web, but with new tools to make those assets load fast when online and available when offline.*

A Progressive Web App is a website, so all its assets are the same as on the web:

- HTML for content and initial page rendering.
- JavaScript for logic, including the ability to run WebAssembly modules (compiled code) and render 2D and 3D hardware-optimized graphics.
- CSS for layout, styling, and animations.
- Images in web formats, such as PNG, JPEG, WebP, and SVG.
- Videos in web formats, such as MPEG-4 and WebM.
- Web fonts.
- Data in JSON or other formats.

PWA takes the best of platform-specific apps and web apps. Although web apps are not capable to be used when is no internet and platform-specific apps downloads all the packages that are going to be needed at once (you can use it all with no internet), a PWA have the velocity of a web app and most of it can be used offline.

*The PWA approach enhances the traditional web experience by making some or all the assets available client-side as with platform-specific apps. Therefore, when you open a PWA, the initial rendering can be as instantaneous as a platform app because the assets are available without going to the network. An app that is available offline will always render a basic user interface instead of a technical error from the operating system or browser.*

The main key of PWA is to cache the content resources that could be accessed offline using the *web workers*. Cache Storage API is **CRUTIAL** and these are a few client-side storage solutions

- Web Storage (localStorage and sessionStorage)
- IndexedDB
- Cache storage

#### Service workers

Service workers are the key to deliver the assets and data that you save in cache / web storage. With a service workers, you can offer an offline experience delivering the resources that you save in the way you want to do it. 

**Letting users continue using your whole PWA and syncing server changes when they're back online is the gold standard for working offline.**

You need to make sure that all the resources are added to the cache before they can be used offline. You need to cache the data and assets necessary to offer the best offline experience.

#### The service workers are a fundamental part of PWA. With them you can do fast loading and offer an offline experience.

*Even a 0.1 second improvement performance can increase user conversion by 10%*

The service worker is a proxy middleware that acts as a gateway for the network or cached resources. *When an app requests a resource covered by the service worker's scope, including when a user is offline, the service worker intercepts the request, acting as a network proxy. It can then decide if it should serve the resource from the cache via the Cache Storage API, from the network as normally would happen without a service worker, or create it from a local algorithm.* The service workers have to be optional to use because there are some browsers that do not support it. 

Before a service worker is inside a web app, it needs to be registered by the user (or unregistered if they want to). Once it is registered, the service worker is ready to intercept request from the PWA and the network, being capable to serve the required resources (of course, depending if the resources are cached or need strictly access to the network)

- You can check in the browser if a Service Worker is registered
- The path file of the service worker has to remain as close of the app root as possible. The folder your service worker sits in determines its scope. A service worker that lives at example.com/my-pwa/sw.js can control any navigation at the my-pwa path or below, such as example.com/my-pwa/demos/. Service workers can only control items (pages, workers, collectively "clients") in their scope. Scope applies to browser tabs and PWA windows.

#### Service worker lifecycle

1. Registering the service worker
2. The browser attempt to download and parse the file
3. If step 2 succeed, the install event is fired (just happens once)
4. If step 3 succeed, the activate event is fired (nothing could happen next if the service worker is not activated)

## Caching 

Cache allows an app to be less dependant of network connection. The dev decide the best strategy for caching the resources will need. The service worker is the one who interacts with the Cache Storage API.

**One advantage of managing your cache using service workers is that its lifecycle is not tied to the window, which means you are not blocking the main thread. Be aware that to use the Cache Storage API most of these contexts have to be under a TLS connection.**

### What to cache?

- The main page HTML (your app's start_url).
- CSS stylesheets needed for the main user interface.
- Images used in the user interface.
- JavaScript files required to render the user interface.
- Data, such as a JSON file, required to render a basic experience.
- Web fonts.
- On a multi-page application, other HTML documents that you want to serve fast or while offline.

*Remember that you are downloading and storing assets on users' devices, so use that space and bandwidth responsibly. You need to find the balance between having enough on-device assets to render a fast or offline experience without consuming too much data.*

**a PWA does not mean to have all its content offline. But at least, you need to make sure that your service worker can show an unique message of error when the app could not be loaded because of no connectivity, instead of relying on the web browser engine error message.** 

*it is important to design your cache usage to provide a fast and reliable experience.*
