uclu-techsoc.github.io
======================

The development area for our webpage.

The dev site can be found here: [uclu-techsoc.github.io](http://uclu-techsoc.github.io)

The production site is here: [uclutech.com](http://uclutech.com)

How to Build
------------

We're using the rather fantastic Jekyll/Liquid combination that GitHub uses for it's GitHub Pages service. This means we have a free place to host our development site and we get all the cool features of Jekyll.

We've added SCSS into the mix to make creating and maintaining the CSS side of things easier.

So to get up and running you'll need to download and install [http://jekyllrb.com/](Jekyll) and [http://sass-lang.com/](SCSS). For both of these you'll need gem, which is a package management thing for Ruby. So you'll need a [http://www.ruby-lang.org/](Ruby) installation too. That's all, now let's get the code:

    git clone https://github.com/UCLU-techSoc/uclu-techsoc.github.io.git

Nice and easy. Now we need to do 2 things; compile the SCSS into CSS, and compile and serve the site. Luckily, this is really easy. Open up two Terminal tabs inside the directory of your newly cloned repository. Into the first type:

    sass --watch _scss:css

This handy command keeps a watch over the _scss directory for any changes you make. As soon as you save a file it recompiles all of the SCSS into CSS, ready for the browser. In the second Terminal tab run:

    jekyll serve --watch

This cool command keeps an eye on the entire repo directory and recompiles the site every time a change is made. It also starts up a local web server and hosts the newly compiled site for you. Visit [http://localhost:4000](http://localhost:4000) to take a look.

Now make changes to the site and refresh the browser to see them in action.

Coding Style
------------

Here are some rough rules on coding styles. If we can keep everything conforming to a consistent code style then it makes everything much easier to read.

1. Don't use tabs use 4 spaces instead
2. Don't use `</ br>` tags
3. In fact, keep all styling our of the HTML and only in the CSS.
4. The same goes for JS, keep JS to the JS files.

Repo Rules
----------

Here are some guidelines on how to keep the repo clean and tidy.

1. Don't commit files specific to your computer/session. This means editor files (e.g. VIM's swap files~), projects settings, etc.
2. Start a new branch for each new feature you implement. Especially if you're issue resolving.
