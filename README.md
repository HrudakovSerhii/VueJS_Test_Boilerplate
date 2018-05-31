# Vue.JS Boilerplate

This is a repository for building basic start setup for Vue.JS project. 
During research of a good boilerplate I found out for my self that most of
this boilerplate's look's the same, but have not a good explanation about 
it parts for complete beginners like I was in a past. Here you can find result
 of my research about Vue and different ways of working with templates, styles,
 files. 
 **Please! Do not use this boilerplate for production or any real projects!**
 This is just test to show how You can interact with Vue and it's features.
 
 # Install
 
 `npm install`
 This is basic command to tell npm that he should look for a packages in package.json
 file, and load them to your node_modules folder. Simple, yea? But here the think:
 during installation process I found out that it can be tricky to install **node-sass**
 package if you have **more than one Node version installed**. To check it, run:
 `n` command in console, to see how many node versions you have installed.
 If you have more than one, and you just switch between them - You need to run 
 rebuild to fetch the binary of package. If you remove your node modules you'll also need to rebuild 
 to fetch the binary. To do that run `npm rebuild node-sass`. After that everything should be fine :) 
 (if not - let me know)
 
 # Source
 
  To run application we are using [Webpack](https://webpack.js.org) module bundle'r. Check it official
  documentation to know more. 
  If you remember, we are using this boilerplate for study, so it is only prepare
  for development mode (Going to add production config in a future). To run application
   and see something on a screen, run command:
   `npm run-script dev`
   This literally say to npm _"npm, friend, please run script from package.json with name dev"_.
   This is the same as run `webpack-dev-server` in console, but for me it is better to save
   commands in your *package.jso*n script object, as in a future some more scripts can be added 
   in a queue before run webpack. Command will start webpack development 
   server and load application on it. You can find link on app using address provided by webpack in console output.
   Something like that: `ℹ ｢wds｣: Project is running at http://localhost:8080/
                         ℹ ｢wds｣: webpack output is served from /assets/
                         ℹ ｢wds｣: Content not from webpack is served from /YourProjectsDirectory/VueJS_Test_Boilerplate/src
`
    Tada! Now test app is live and it has [HMR](https://webpack.js.org/concepts/hot-module-replacement/) that doing a lot of monkey
    job for us. Well, start to explore the [code](https://github.com/SerhiiHrudakov/VueJS_Test_Boilerplate/tree/master/src) :)
 
 

