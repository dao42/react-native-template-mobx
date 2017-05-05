# Mobx React Native Template

It's an experienced template for a new react native project with mobx architecture from react-native-template-mobx.

这是一个有经验的 React Native 和 mobx 融合的脚手架项目.

> Notice: This project has rename from `mobx-react-native-template` to `react-native-template-mobx` because of the convention of React Native Template published at React Native 0.43 version. here is the [link](https://github.com/facebook/react-native/commit/17c175a149bc410a9b167b31f13474d8c6e9832c#diff-e1bddafdbb592817072925c6b7aabcd2)

> react-native-template-mobx has supported react native 0.44.

## Prepare

Install Dependencies:

1. NodeJS( ~> 6.2.2 )

   `$ brew update && brew install node`

2. yarn

    `$ npm install -g yarn`

3. rnpm

    `npm install -g rnpm`

On iOS platform, `Xcode` is needed.

On Android platfrom, `Android studio` or `Genymotion` is needed.

After finish install dependencies, we can launch the template easily.

## Install

> Replace `xxx` to your real project name.

1. `$ npm install -g react-native-cli`
2. `$ react-native init xxx --template mobx`
3. `$ cd xxx`
3. `$ yarn add babel-plugin-transform-decorators-legacy --dev`
4. `$ cat gitignore >> .gitignore; rm gitignore`

At last, launch it to check.

iOS:

```bash
react-native run-ios
```

Android:

```bash
react-native run-android
```

Done.

You need start an iOS simulator or android simulator before running your app, see more: https://facebook.github.io/react-native/docs/getting-started.html


## What it does

We have developed several commercial native apps with React Native at the last year, the template is the key we can make them successfully.

First, [mobx](https://github.com/mobxjs/mobx) is the key of the template. If you also love mobx, you should choose this template. with zero-configuration, you can use mobx.

Second, we apply some useful react-native components for you, of course, zero configuration:

* apisauce ( API provider )
* react-native-button
* react-native-vector-icons
* react-navigation
* react-native-smart-keyboard

Third, we provide a nice directory construction for your new project, clean and clear.

At last, we provide the most common tabbar routers example, see more detail into the directory `app/`.

And we are improving the template continually.

## Mobx advantage

[Mobx](https://github.com/mobxjs/mobx) is a new architecture to manage your store data. Unlike redux or flux, there's just a fewer concepts to understand and it's very simple to use.

See more usage into the directory `app/`.

## Some Advice

Question: **How to create a new `page`**

1. Add a new container component to `app/containers/`, some examples in `app/containers/` you can follow.
2. Add a new route to `app/navigation/index.js`.
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

## Built with

[80% team](https://www.80percent.io)
