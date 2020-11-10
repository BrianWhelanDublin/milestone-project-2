# Great Escapes, G-Travel

## Milestone Project 2

- The aim of this project is to build an interactive front end website using HTML CSS and javaScript.
- I have decided to build a website for a fictional travel company G-Travel. I have used the knowledge I've learned in the course to date as well as good good user experience to create a responsive, well designed functional website.

## Live project

- [View the live project here.](https://brianwhelandublin.github.io/milestone-project-2/)

## User experience

### User Stories

- New Visitor

  - As a new user I would like to get information about the company.
  - As a new user I would like to see what destinations the company travel too.
  - As a new user I would like to see information about each destination.
  - As a new user I would like to sign up to a newsletter.

- Repeat users

  - As a repeat user I would like to book a package.
  - As a repeat user I would like to be able to contact the company.
  - As a repeat user I would like to be able to see the companies social media.

- Regular Visitor

  - As a repeat user I would like to see if there are any new packages.
  - As a repeat visitor I would like to be able to see what the travel packages the company does.
  - As a repeat user I would like to see reviews before I decide to book.

- Website owner
- As the owner I want my customers to be able to find information easily.
- As the owner I want my customers to be able to book holiday packages.
- As the owner I want my customers to be able to contact me easily by whichever means they choose.

### WireFrames

- I've crated WireFrames using Balsamiq and have included a link here to access them here in pdf form.

## Design

#### Colour Scheme

- I've created a dark theme for this website using a dark russian black #181822 as my main background colour. My text is an off white #fafafb to contrast against the dark background.
  I have alternated the colours on hover effects too to show the user what elements are clickable.

#### Typography

- I've used one font in different weights for headings and text element across the site to create a uniform theme throughout all the text.
  Ive imported the Mulish font to my css stylesheet from Google Fonts.
  I used sans-serif as a fall-back font in case for any reason my fonts were not imported.

#### Imagery

- Imagery was very important to me and I choose images that conveyed the feel of the company throughout I tried to choose images of well known landmarks for each destination also.
  I used images as backgrounds to help separate sections and placed slightly opaque elements overtime. This also helped to soften the dark background.
  I sourced all my images from unsplash.

#### Icons

- I used line awesome for icons for social media links which I've included in the footer.

## Features

## Credits

### Code

- Stack Overflow

  - [Centre Divs](https://stackoverflow.com/questions/1776915/how-can-i-center-an-absolutely-positioned-element-in-a-div)

    - I used code from the above link to completely centre a div.I have disscussed this in more detail in the testing section.

  - [Fixing the css transitions on load](https://stackoverflow.com/questions/22744438/remove-body-class-after-window-load-with-javascript)
    - I used code from the above link to fix an issue I had with my css transitions running on page load.

- You tube Tutorials

  - I used two main tutorials on youtube to learn to have an interactive navbar and also how to fade elements in upon scrolling. I have used some elements of the code but have edited it to fit this website.

    - Code and Create youtube tutorial

      - [Navigation bar](https://www.youtube.com/watch?v=9Q7wy8r3i8w&list=WL&index=2)

        - I used the above tutorial on you tube to inspire my navbar. I have edited the code to adapt to my website design. I also have edited the javascript to fix an issue with the nav background not disappearing when a link is clicked . I have discussed this in more detail in the testing section.

    - Dev Ed Visual effects in javascript tutorial.

      - [Visual effects javascript](https://www.youtube.com/watch?v=C_JKlr4WKKs&list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA&index=2)

        - I used the above tutorial to add the effect of my elements fading in upon page scroll. In the tutorial the code was used for only one element to use it throughout the page I have edited the code by using the querySelectorAll on the animation-element class. I then added the .forEach() function so the code work work for any element with the class of animation element.
