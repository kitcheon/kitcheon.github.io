# Kitcheon
Kitcheon is a smart recipe solution. Integrating computer vision, machine learning, big data and other advanced computing technologies to simplify how people cook. 

## Key features
- Recipe App with tens of thousands of curated recipes
- Voice guided recipes + Voice control.
- Computer vision to detect process of cooking
- Detect what is in the fridge feature, through photo taken  on phone app.
- Suggest recipes that match with available ingredients (scanned or typed). Based on preferences made by user.
- Connect with smart appliances -range for temperature control and cook time
- Advanced Safety features

# About Kitcheon Inc.
Kitcheon Inc. is a innovative company that aims to break culinary status quos and change the way people cook. Kitcheon is made up of the following greats:
- Braden Collingwood
- Ahmad El Masri
- Taha El Mouatadir 
- Alexandre Pineau 
- Yong Lin Wang

# Website Set Up Instructions
In order to run the Kitchon promotional website, it must be delivered using apache or any other form of static website host.
## Recommended Solution
The recommended solution is to use the same utility the team used for development, XAMPP, a wrapper for apache web server. XAMPP allows quick and simple setup for web development, however it is quite tricky to configure depending on the environment. It is one of the preferred solution if you are using a windows computer. If you never heard of For more details regarding XAMPP, [Click Me](https://www.apachefriends.org/index.html).

*If you already have XAMPP installed, simply put the kitcheon website folder inside the `htdocs` folder or your defined web root folder. Visit [`localhost`](http://localhost), and you should see the kitchon icon show up.*

After downloading + installing XAMPP, open the `XAMPP control panel`  then click the `start` button on the apache row. Go to your browser and visit [`http://localhost`](http://localhost). You should see a default welcome page, now go to the root of your XAMPP installation and find a folder called `htdocs`, unzip the kitchon website folder and put it in the `htdocs` folder, now visit[`http://localhost/kitcheon.github.io`](http://localhost/kitcheon.github.io) (if you renamed the `kitcheon.github.io` folder, change the address to http://localhost/*your folder name*" ).

## Alternative Solutions
Instead of using XAMPP which can be difficult to configure and takes a long time to install. Simply upload the folder to a static website host.

Here is a list of potential services that can be used:
- Github Pages (Recommended)
- [Neocities](https://neocities.org/)
- [Netlify Drop](https://app.netlify.com/drop) (Recommended)
- [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
- [Digital Ocean](https://www.digitalocean.com/)

Any of these services should allow you to view the website