Custom Browser Start Page
------------------------------------
This is repository is a simple HTML + CSS web page that I use as the start page and new tab page for all of my web browsers.  You can see what it looks like [**right here**](http://bigstickcarpet.com/Browser-Start-Page/).  It doesn't load any third-party-hosted libraries, stylesheets, or images, which means it works completely offline and laods really fast &mdash; both great features for a start page.


Installation and Usage
------------------------------------
You're welcome to fork this repo and modify it to suit your needs.  Here's what you need to do to get it working:

__1.  Clone this repo__<br>
`git clone https://github.com/bigstickcarpet/Browser-Start-Page.git`

__2.  Modify the icons as you wish__<br>
Edit [`index.html`](index.html), [`css/style.css`](css/style.css), and the images in the [`img/icons` directory](img/icons) to suit your needs

__3.  Open `index.html` in your web browser__
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

