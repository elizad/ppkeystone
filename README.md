# Core Website
Profile Pension Website 

The source code for re-platforming the www.profilefinancial.co.uk website

## Built With

# [Keystone]version 4.0.0-beta.5 (http://keystonejs.com/) - Node.js CMS & Web Application Platform
# [Node] 8.2.1
# [MongoDB] 3.4
# [npm]  5.3.0

##Coding Guidelines
This Project is generally following the guidelines set out in [AirBnB's Javascript Style Guide](https://github.com/airbnb/javascript), with the exception of using real tabs for indentation.

## Deployment


## Start
1 Install & start MongoDb https://www.mongodb.com/ 
2 Install & start Node https://nodejs.org/en/

## Current project 
### TO KEEP IT AS IT IS 
 -- download this project
 -- add the database to mongoDB 
   Once you've set up it up, run $ npm start or  $ node keystone to start the server.
   
### To get an empty project without the preview feature  
  -- download this project
  Once you've set up your configuration with $ npm install and run $ npm start or  $ node keystone to start the server.
 
### See more about keystonejs at http://keystonejs.com/getting-started/ 


Once you've set up your configuration with $ npm install, run  $ node keystone to start the server. 


## Release notes

Date          | Time          | Notes
------------- | ------------- | ------------- 
08/08/2017    | 10.02         | move to node 8

### In order to get the project working you have to go http://localhost:3000/keystone/ or http://profilepension.co.uk/keystone/
log in and add data into types form [types form = (post , index, videos , page-.... , contact) ] in order to get the app working or get data into database 

### Preview mode for keystone post, pages, infographics, ...


### Go to node_modules > keystone > admin > public > js > lib > jquery > jquery-1.10.2.min.js 
 and add 
--- 
	 var target = 'input.EditForm__key-or-id__input';
	 // get content type from the admin ui
	 var segment = document.location.href.split('/')[4];
	 // map admin keys with front UI
	 var map = {
		'posts': 'content-hub/post',
		'team-members': 'meet-the-team',
		'pensions': 'pension-type',
		'whatyouneedfromadmin': 'whatismatchinginurl'
	 };
 
	 function addLink() {
		var slug = $(target).val()
		if(!slug) return setTimeout(addLink, 1000)
		$(target).after('<a title="Preview" href="/' + map[segment] + '/' + slug + '" target="_blank">' + slug + ' (preview)</a>')
		$(target).remove()
	 }
	 addLink()
 
 ---
 in route you need to have to delete for admin post State
 ---
 	var postSearch = {
 			slug: locals.filters.post,
 			state: 'published',
 		};
 		// allow admin user to see the post in all cases
 		if (locals.user && locals.user.isAdmin) {
 			delete postSearch.state;
 		}

## Authors

* **Profile Pensions** - *Organisation* - [ProfilePensions](https://github.com/ProfileFinancial)
See also the list of [contributors](https://github.com/ProfilePensions/core-website/graphs/contributors) who participated in this project.
