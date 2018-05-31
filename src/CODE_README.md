#Templates

Here we have three src folders for JS, CSS and HTML-Templates. 
Vue has an opportunity to work with templates in the same file with 
JS and CSS. Check [it out](https://github.com/SerhiiHrudakov/VueJS_Test_Boilerplate/blob/master/src/App.vue).
The great benefit from this file structure is:
 - All logic, styles and side effects can be encapsulated aside from another part of application
 - Created component can be used as the separated module as well as reused multiple times
 - Loading of specific styles possible with using same name of properties, without overwriting them in a different modules
 
 And this is really cool feature that many people use, but What if we **want to load some templates** from other directories, sources or modules?
 It is all possible of course. And here is how:
 
 `Vue.component('component name', {
  	template: require('Templates/html_templates/template.html')
  });`
  
  Maybe you are curios why I am using not relative path to file when loading external template?
    _'Templates/html/template.html'_ is a path to template file. We start it from 'Template' because we don't like to 
    pass full path to the file. What if it located, let's sey, some where in another universe, a.k.a './src/another/universe/template.html'. We are using
    webpack [alias](https://webpack.js.org/configuration/resolve/) and thanks too it, all path's that we declare as alias will changed to relative path's during building of bundle file by webpack.
  
  Also we can load some of templates using their id from back-end:
  
  **index.html**    

       <script type="text/template" id="template-1">
         <div class="template">
           This text loaded using id of template in html file! Template 1.
         </div>
       </script>
       
       <script type="text/template" id="template-2">
        <div class="template">
          This text loaded using id of template in html file! Template 2.
        </div>
      </script>
       
  **apApp.vue**    
  
    import AppTemplate from './src/to/template/settings'
    
    <template>
        <div>
            <templateOne></templateOne>
            <templateTwo></templateTwo>
            <templateTwoCopy></templateTwoCopy>
        </div>
    </template>
    
    const templateOne = AppTemplates.templateOne;
  
    Vue.component('templateOne', templateOne);
    Vue.component('templateTwo', AppTemplates.templateTwo);
 
     Vue.component('templateTwoCopy', {
         name: 'template-2',
         template: '#template-2'
     });
  
  In this case we are using ID of template to load html from it. 
  As you can see I tried to load templates using different styles and ways, and everything is work perfect.
  Here is [some article](https://medium.com/js-dojo/7-ways-to-define-a-component-template-in-vuejs-c04e0c72900d) with a good examples of templates in Vue.
  It is all well documented, but I spend few days to make it possible to work like it work's now. Hard way to learn ha :)
  
  #Styles
  
  As was mention in **Templates** part, styles can be located next to script in vue files. To encapsulate style 
  property's we can parameter with name **scoped**  
  
    <style scoped lang="scss" rel="stylesheet/scss">
        h1 {
            color: Blue;
            font-size: 20px;
        }
    </styles>

  If we will not, styles can be applied to elements with the same class names in global scope.
  Other possible situation that styles with out **scoped** parameter can be write on top of the **scoped** styles. This
  can happen if you using more accurate selectors:
  
    <style lang="scss" rel="stylesheet/scss">
        body h1 {
            color: Red;
        }
    </styles>
    
  It will definitely updated **h1** element text color. So you can use this trick to apply some common style props to elements.
  On other hand scoped style in vue component can block styles merging. So this feature need to be chosen carefully. Don't
  shy to spend some time to figure out about borders of it usage.
  
  Other cool stuff in Vue is applying styles without using any JQuery code. Check this out:
  
    - Declaring style variable in element property
    <div class="card__item" v-bind:style="{ 'webkitTransform': transform , 'transition' : transition} ">
    
    - Create variable in component initialisation
    Vue.component('component', {
        name: 'newComponent',
        data: function() {
            return {
               transform: '',
               transition: ''
            }
        }
    });
    
    - Apply desired values to this variable, let say, after some step animation
    this.transform = "rotateX("50deg) rotateY(30deg)";
    this.transition = ".8s ease-in-out";
    
  All styles going to be applied to it's elements. You can use Object with style properties if you need update more than one property.
  Something like this:
  
    data: function() {
        return {
            cardItemAnimation: {
                transform: '',
                transition: ''
            }
        }
    }
    
    this.cardItemAnimation = {
        transform: "rotateX("50deg) rotateY(30deg)",
        transition: ".8s ease-in-out"
    }
    
  All styles will be allied to elements in the same moment of time. 
  
  **About import style files inside of style scope of vue file**
  
  Because of styles loaded by _vue-loader_ package, it can't resolve path using webpack alias. 
  To do that you have to put tilda character before the name of alias. Like this:
  
    @import "~Styles/base.scss";
    
  This is happening because of the way how vue-loader load styles and resolve path's from vue file. We also can use relative 
  path to load other css, but why if we have alias. Otherwise you have to spend some time to type a lot of dot symbols according
  to your project folder structure.
  
  To read more about is check [style-loader](https://github.com/webpack-contrib/style-loader) repository. It has more explanation about how it works.
  
  #Java Script
  
  Nothing new here. You can use ES6, ES2015, Vanilla, even JSX if you are switched from React (Congrats!). If some weird behaviour appear
   or some of the feature would be unclear from official resources - please let me know :)
