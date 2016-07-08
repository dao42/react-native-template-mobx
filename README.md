# Mobx React Native Template

It's a nice beginning for a new react native project with mobx architecture from mobx-react-native-template.

## Howto

Install Dependencies:

1. NodeJS( ~> 6.2.2 )

   `brew update && brew install node`

2. npm( ~> 3.10.3 )

3. rnpm

    `npm install -g rnpm`

And run it

1. `git clone git@github.com:80percent/mobx-react-native-template.git`
2. `npm install`
3. `cp app/config/index.js.example ap/config/index.js`
4. `react-native run-ios` or `react-native run-android`

You need start an iOS simulator or android simulator before running your app, see more: https://facebook.github.io/react-native/docs/getting-started.html


## Some Advice

Question: **How to create a new `page`**

1. Add a new container component to `app/containers/`, some examples in `app/containers/` you can follow.
2. Add a new route to `app/navigation/routes.js`.
3. Refresh your app page

Question: **How to debug app**

ReactNative use chrome debugger by default. You need install chrome browser before debug your app.

iOS Simulator:

1. Open your app
2. Input `ctrl + command + z `( if not, try `command + d` )
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( command + R )

Android:

1. Open your app
2. Input `command + m`
3. Choose `Open debugger` from the new modal. Now chrome will open a new page: `http://localhost:8081/debugger-ui`
4. Select `pause on exception` in chrome debugger( optional )
5. Refresh your app page( double click R )

see more: https://facebook.github.io/react-native/docs/debugging.html

Question: **How to rename my project**

1. Update the name of `package.json`
2. Update the name of `index.ios.js` & `index.android.js`
3. `rm -rf ios; rm -rf android;`
4. `react-native upgrade`
5. `rnpm install`

It's all


## Other useful resources

1. [react layouts](https://facebook.github.io/react-native/docs/layout-props.html)
2. [mobx best practices in react-native](http://mobxjs.github.io/mobx/best/pitfalls.html)
3. [Running on android device](http://reactnative.cn/docs/0.28/running-on-device-android.html#content)
4. [Singed apk on android device](http://reactnative.cn/docs/0.28/signed-apk-android.html#content)

## Code style recommend

1. Use ES7
2. Two spaces instead of tab
3. No state operations in your code

## Built with

[80% team](https://www.80percent.io)
