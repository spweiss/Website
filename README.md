# Spencer Weiss' Personal Site

## Background

This site is intended to display a portfolio of some of the things that I've worked on recently and host information about me. Feel free to reach out to me at [spweiss@seas.upenn.edu](mailto:spweiss@seas.upenn.edu) if you have any questions!

## View

View the site in production [here](https://www.spencerweiss.com).

## Technical Details

This site was build by hand according to several best practices for web and mobile development, including Representational State Transfer, Model-View-Controller, and Responsive Web Design.

The architecture of the site is built in Ruby on Rails, with pages in HTML and CSS and animations in Javascript, CSS, and jQuery. Deployment is in Heroku with SSL encryption through Heroku and Cloudflare.

## Getting started

To explore the architecture of the site, clone this repository and install the required gems:

```
$ bundle install --without production
```

At this point, you'll be ready to run the app in a local server (depending on your browser and OS of choice, you may need to set the IP to 0.0.0.0 rather than the default localhost if rails protests):

```
$ rails server
```
```
$ rails server -b 0.0.0.0
```
