
  # 14-Model-View-Controller-MVC-Tech-Blog

  ## Description
  This project will build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This project will built from scratch and deploy it to Render. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication
  - My motivation was to create a working MVC tech blog site utilizing Handlebars, Sequelize, and the express-session npm package for authentication.
  -  I built this project so that my client and others could easily create and comment on the sites tech related blogs. This is done by signing up and creating an account. Anytime they return to the site they will be able to read the posts but must sign in to create or comment on a post. When they sign in, their account info will be authenticated. 
  - This project solved the problem of allowing only authorized users to post and comment on blogs while keeping their account data safe. 
  - I learned a lot from this project. I learned how to tie API endpoints, seeds, models and databases into Handlebar templates and use express-session npm package for authentication. I had difficulty with the API routes on this project. I spent a lot of time working out the bugs on this project getting the path correct so that the pages would render properly.
  
  ![License](https://img.shields.io/badge/License-MIT-green.svg)


  ## Table of contents

- [14-Model-View-Controller-MVC-Tech-Blog](#14-model-view-controller-mvc-tech-blog)
  - [Description](#description)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)
        
    
  ## Installation
  All you need to do is clone the repository from GitHub onto your computer. Once you open the root of the new folder, you can run `npm install` in the terminal. You are now set to run the actual program.

  ## Usage
  After you have installed the npm, in the terminal type in `psql -U postgres`. Then you will have to enter your postgres password. After that, in the CLI in the terminal `\i db/schema.sql`, then press enter. Now you type in `\q`.  This will bring you back to the node CLI. From there type in `npm run seed`, then you can type in `npm run start`. At the bottom of the output you will see a line that says `Now Listening”. Next open a browser and type in “localhost:3001” into the address bar.

  ## Contribute
  If you would like to contribute to this project, please see below for my contact information.
        
  ## Test
  There are no test conditions. If you have followed the steps properly you should see results like my screenshots in the assets/images folder.

  ## Questions
   My Github profile can be located at <https://github.com/Michael-Hellon/>

   The deployed application of this is located at <https://one4-model-view-controller-mvc-tech-blog-6vbd.onrender.com/>

  You can email me with any questions at mwhellon@yahoo.com

  ![screenshot](/public/images/screenshot1.png)
  ![screenshot](/public/images/screenshot2.png)
  ![screenshot](/public/images/screenshot3.png)
  ![screenshot](/public/images/screenshot4.png)

  ## Credits
  I completed this project myself and used MOD 14’s mini-project as a guideline for this project. I used several page from Handlebars  https://handlebarsjs.com   I also used several pages from MDN Web Docs https://developer.mozilla.org/en-US/  and W3 schools https://www.w3schools.com
        
  ## License

  To read more about the MIT license, click here ==> [License: MIT](https://opensource.org/licenses/MIT).

  ![License](https://img.shields.io/badge/License-MIT-green.svg)
  