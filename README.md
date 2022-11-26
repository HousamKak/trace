<img src="./readme/title1.svg"/>

<div align="center">

> A game like social media platform where users can leave their trace behind as posts (image, video, text…) and discover historical chests on the real world map.  

**[PROJECT PHILOSOPHY](https://github.com/HousamKak/trace#-project-philosophy) • [WIREFRAMES](https://github.com/HousamKak/trace#-wireframes) • [TECH STACK](https://github.com/HousamKak/trace#-tech-stack) • [IMPLEMENTATION](https://github.com/HousamKak/trace#-impplementation) • [HOW TO RUN?](https://github.com/HousamKak/trace#-how-to-run)• [FUTURE WORK](https://github.com/HousamKak/trace#-future-work)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> We are all drown to stories, and historical ones are the most appealing. But history is not accessable easily to people and a tourist guide is needed at any historical site. Our ancestors left us a lot of stories to consume, and likewise, we can leave our own onsite. Both our ancestor's history and our attendance on a geographical spot is a trace that shall never vanishes, and this app tries to make this a reality.
> 
> This application will allow you to discover historical sites by finding close chests in the area you are located or visit. It will also allow you to leave traces behind. Those traces could be text, music, images, or videos. People who pass by the geographical location of the left trace will be able to check what you have left behind.

### User Stories
- As a user, I want to learn about history, so that I recognize valuable historical sites
- As a user, I want to share text at the location I visit, so that other visitors can check
- As a user, I want to share images at the location I visit, so that other visitors can check
- As a user, I want to share music at the location I visit, so that other visitors can check
- As a user, I want to share videos at the location I visit, so that other visitors can check

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |

| Artists results  | Artist's Albums  |
| -----------------| -----|
| ![Artists results](https://github.com/julescript/spotifyndr/blob/master/demo/Artists_Page.jpg) | ![Artist's Albums](https://github.com/julescript/spotifyndr/blob/master/demo/Albums_Page.jpg) |


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Flutter app development framework](https://flutter.dev/). Flutter is a cross-platform hybrid app development platform which allows us to use a single codebase for apps on mobile, desktop, and the web.
- For persistent storage (database), the app uses the [Hive](https://hivedb.dev/) package which allows the app to create a custom storage schema and save it to a local database.
- To send local push notifications, the app uses the [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) package which supports Android, iOS, and macOS.
  - 🚨 Currently, notifications aren't working on macOS. This is a known issue that we are working to resolve!
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.



<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tecch stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) |


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

