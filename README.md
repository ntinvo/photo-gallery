# Photo Gallery 📷
[![Build Status](https://travis-ci.com/tinnvo/photo-gallery.svg?branch=master)](https://travis-ci.com/tinnvo/photo-gallery)

A simple Photo Gallery app that allow users to either click or swipe through images 😊

## Result ⭐ ️
* The app is deployed here: [https://stormy-tor-96175.herokuapp.com](https://stormy-tor-96175.herokuapp.com)

## Install ⚙️
1. Clone the repository and go the the directory:
      ```
      $ git clone https://github.com/tinnvo/photo-gallery.git
      $ cd photo-gallery
      ```
2. Install the packages:
      ```
      $ npm install
      ```
      OR
      ```
      $ yarn install
      ```
3. Run:
      ```
      $ npm run start
      ```

      OR
      ```
      $ yarn start
      ```
#### Notes:
* *I decided to create the PhotoGallery as a carousel because I like pictures to be full screen.*

## Improvements 🤔
* Right now, for the sake of simplicity, I put the data in `photo-gallery/src/data/data.js`. For improvement, I can create a server with some APIs that can handle requests so that the users can `add/edit/remove` images.
* From the main app, the user can have a setting button, that can display photos as a grid/list/fullscreen. 
* Autoplay: From the setting, the user can have something like a checkbox that will enable autoplay of the photos in the gallery.
* I can add the dots in the slide show to indicate the indices of the photos.
* Improve the UI on mobile devices: even though I have added the media queries, but there are some small things that can be improved on small devices.
* Improve the caption with different font, font-size,...

## Built with 🔧
* [Webpack](https://webpack.js.org/) - an open-source JavaScript module bundler.
* [React](https://reactjs.org/) - a JavaScript library for building user interfaces.

## Images Resource ⬇️
* [Pexels](https://www.pexels.com/search/dog/) - Best free stock photos in one place.

## Authors 🐶
* **Tin Vo** - *Initial work* - [Tin Vo](https://tinnvo.github.io/)

## License 📃
* This project is licensed under the MIT License.
