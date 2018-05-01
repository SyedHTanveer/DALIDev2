# <center> Syed Tanveer - Dev 2 Challenge
[This link leads to the deployed App!](http://syeds-dali-project.surge.sh/)

### About this Project

##### 1.1 implementation of Leafletjs / use of members.json to display markers

I created a simple web application that displays parsed JSON data requested from [the DALI lab dataset provided from the challenege](http://mappy.dali.dartmouth.edu/members.json). I used the [Leafletjs](http://leafletjs.com/)' API to implement the map onto the web application page. I used most of the structure leaflet provides in their documentation for changing the map style, adding custom markers, adding events, and for displaying all the requested information.

##### 1.2 Toggle functionality
For the toggle function, i used files provided by Leaflet tag filter button project on [Github](https://github.com/maydemirx/leaflet-tag-filter-button). I added `17W` , `17S`, and `none` as filter options for the map. Once one or more of the options are selected, the script will run through the members data and match the selections accordingly. This will then display the appropriate members that match the selection on the map.

##### 1.3 Deploying

To deploy, i used one of easiest tools ever created to get websites up and running -- [Surge](http://surge.sh/). the final link to the application is provided above.

##### 1.4 final words

The rest of the web application will function according to what was requested on the [challenge website](https://github.com/dali-lab/dali-challenges/blob/master/README.md). I also want to mention that i added a few style choices such as the shadowing behind the map, as well as some buttons below the map that lead to the DALI website, the Github repo for the application, and a link leading to my own website.

 I had a lot of fun with this project and learned a whole lot. I read through as much documentation as possible to understand the API and how i can customize is as much as i wanted. This resulted in a fully functioning web application that i am proud of. Hope you like it!
