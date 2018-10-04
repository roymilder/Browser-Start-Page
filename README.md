Custom Browser Start Page
------------------------------------
This is repository is a simple HTML + CSS web page that I use as the start page and new tab page for all of my web browsers.

[**See it live right here**](https://jamesmessinger.com/Browser-Start-Page/)

### Features

- __Loads Fast__<br>
  Loads completely from disk, so it's really fast

- __Responsive Design__<br>
  Looks great on mobile devices, tablets, laptops, and high-res desktop screens

- __CSS Playground__<br>
  Since I only care about evergreen browsers, I get to use things like [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

- __Works Offline__<br>
  It doesn't load any third-party-hosted libraries, stylesheets, or images, which means it works completely offline

- __No Webserver Required__<br>
  Load it directly from your local filesystem using the `file://` protocol



Installation and Usage
------------------------------------
You're welcome to fork this repo and modify it to suit your needs.  Here's what you need to do to get it working:

1. __Clone this repo__<br>
`git clone https://github.com/JamesMessinger/Browser-Start-Page.git`


2. __Modify the icons as you wish__<br>
Edit [`index.html`](index.html), [`css/style.css`](css/style.css), and the images in the [`img/icons` directory](img/icons) to suit your needs

3. __Open `index.html` in your web browser__<br>
You don't need to run a local webserver or anything.  Just browse to the local filesystem path using the `file://` protocol.  Don't forget to [URL-encode](https://en.wikipedia.org/wiki/Percent-encoding) any special characters (including spaces).

For example, on MacOS, you would browse to something like this:
```
file:///Users/James%20Messinger/Code/browser-start-page/index.html
```

And on Windows, you would browse to something like this:
```
file:///C:/Users/James%20Messinger/Code/browser-start-page/index.html
```


License
------------------------------------
Everything I wrote myself is [MIT licensed](http://opensource.org/licenses/MIT) and can be used however you want.  I use [Animate.css](https://daneden.github.io/animate.css/) for the animations, which is also [open-source](https://github.com/daneden/animate.css).  The logo images obviously contain copyrighted material.
