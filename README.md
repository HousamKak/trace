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

> First I start with the Landing screens

| Log in Page  | Sign In  | Dob Page | Sign Up |
| -----------------| -----|-----|-----|
| ![Log in Page](https://github.com/HousamKak/trace/blob/main/demo/figma/Log_in%20_page.png) | ![Sign in](https://github.com/HousamKak/trace/blob/main/demo/figma/Sign%20in.png) | ![Dob Page](https://github.com/HousamKak/trace/blob/main/demo/figma/dob%20page.png) | ![Sign up](https://github.com/HousamKak/trace/blob/main/demo/figma/Sign%20up.png)

> Here you can find the Middle Button Menu screens

| Middle Button  | Saved  | My Traces | Friends |
| -----------------| -----|-----|-----|
| ![Middle Button](https://github.com/HousamKak/trace/blob/main/demo/figma/Middle%20button.png) | ![Saved](https://github.com/HousamKak/trace/blob/main/demo/figma/Saved.png) | ![My Traces](https://github.com/HousamKak/trace/blob/main/demo/figma/my%20traces.png) | ![Friends](https://github.com/HousamKak/trace/blob/main/demo/figma/Friends.png)

| Scripts | Items  |
| -----------------| -----| 
| ![Scripts](https://github.com/HousamKak/trace/blob/main/demo/figma/Scripts.png) | ![Items](https://github.com/HousamKak/trace/blob/main/demo/figma/Items.png) | 

> Here you can find the main screens

| Profile  | Chest  | Image Trace | Video Trace |
| -----------------| -----|-----|-----|
| ![Profile](https://github.com/HousamKak/trace/blob/main/demo/figma/profile.png) | ![Chest](https://github.com/HousamKak/trace/blob/main/demo/figma/Chest.png) | ![Image Trace](https://github.com/HousamKak/trace/blob/main/demo/figma/Image.png) | ![Video Trace](https://github.com/HousamKak/trace/blob/main/demo/figma/Video.png)

| Main Frame Demo  | Music Trace  | Add Trace | Splash Screen |
| -----------------| -----|-----|-----|
| ![Main Frame Demo](https://github.com/HousamKak/trace/blob/main/demo/figma/main%20frame.png) | ![Music Trace](https://github.com/HousamKak/trace/blob/main/demo/figma/Music.png) | ![Add Trace](https://github.com/HousamKak/trace/blob/main/demo/figma/add%20a%20trace.png) | ![Splash Screen](https://github.com/HousamKak/trace/blob/main/demo/figma/splash.png)


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Trace app uses, as it is seperated into two main parts:

- In the first part of this project, I used the [React Native](https://reactnative.dev/) with the [Expo](https://expo.dev/) framework For the user interface. React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
- The database used was MySQL.
- The second part of this project was done using [Unity 3d](https://unity.com/). Unity is a cross-platform game engine developed by Unity Technologies. The main frame that was mentioned in the demo above was done using Unity, in a different way than shown.
- Currently the project is still seperated, and each part is still standalone. Linking between the two frameworks is the next step.



<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

> First React Native screens

| Sign Up New Account  |Log In New Account |Log Out |
| -----------------|-----|-----|
| ![Sign Up New Account](https://github.com/HousamKak/trace/blob/main/demo/application/sign%20up%20new%20account.gif) | ![Log In New Account](https://github.com/HousamKak/trace/blob/main/demo/application/log%20in%20new%20account.gif) | ![Log Out](https://github.com/HousamKak/trace/blob/main/demo/application/log%20out.gif)


| Logging In Current Account  | Show Profile  | Show Middle Button |
| -----------------| -----|-----|
| ![Logging In Current Account](https://github.com/HousamKak/trace/blob/main/demo/application/logging%20in%20current.gif) | ![Show Profile](https://github.com/HousamKak/trace/blob/main/demo/application/show%20profile.gif) | ![Show Middle Button](https://github.com/HousamKak/trace/blob/main/demo/application/show%20middle%20button.gif)


| Update Profile  | Remove Image  | Add Trace |
| -----------------| -----|-----|
| ![Update Profile](https://github.com/HousamKak/trace/blob/main/demo/application/updating%20profile.gif) | ![Remove Image](https://github.com/HousamKak/trace/blob/main/demo/application/remove%20image.gif) | ![Add Trace](https://github.com/HousamKak/trace/blob/main/demo/application/adding%20trace.gif)

> Second Unity
> Here you can see the app in development mode with a previously defined path. The application is a location based game using mapbox api for maps. 

| App in development Demo  | 
| -----------------|
| ![App in development Demo](https://github.com/HousamKak/trace/blob/main/demo/application/unity%20dev.gif) |

> Here you can see the app on an andriod device.

|App on andriod  |
|-----|
| ![App on andriod ](https://github.com/HousamKak/trace/blob/main/demo/application/unity%20application.jpg) | 

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

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<br><br>
<img src="./readme/title7.svg"/>
> Note that React Native app works on both android and ios devices
- Linking between the two frameworks is needed. The app might move from react native expo to the normal react native because it makes it easier to link with unity
- Adding the video and the music traces
