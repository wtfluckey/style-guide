# style-guide

## Installation

### Using Bower (such as with ember-cli)

Install the style guide into your project with Bower:

```
$ bower install wtfluckey/style-guide --save
```

`@import` the style guide SCSS into your application's SCSS manifest:

```
// application.scss
@import "bower_components/style-guide/src/scss/style-guide.scss";
```

Start up your Ember server and verify that the style guide is loaded in your CSS file!

### Using bower-rails (with Rails apps)

Make sure that you have Bower installed on your system via npm:

```
npm install -g bower
```

Add the `bower-rails` gem to your `Gemfile`:

```
// Gemfile
gem 'bower-rails'
```

Install the gem:

```
$ bundle install
```

Create a `Bowerfile` in the root of your Rails project:

Using HTTP:
```
// Bowerfile
asset 'style-guide', 'https://github.com/wtfluckey/style-guide.git'
```

Using SSH:
```
// Bowerfile
asset 'style-guide', 'git@github.com:wtfluckey/style-guide.git'
```

Run the `bower-rails` rake task to download the style guide to the Rails `/vendor/bower_components/` directory.

```
$ rake bower:install
```

To simplify your import statements, add the `bower_components` directory to your asset paths in Rails application config:

```
// config/application.rb
config.assets.paths << Rails.root.join("vendor","assets","bower_components")
```

Since we're using SCSS, make sure your `application.css` manifest has been renamed to `application.scss`:

```
$ git mv app/assets/stylesheets/application.{css,scss}
```

Delete the default Rails asset pipeline manifest from the `application.scss` file and replace it with a SCSS import of the style guide (you can use similar statements to reimport any other SCSS files that the manifest was requiring):

```
// app/assets/stylesheets/application.scss
@import "style-guide/src/scss/style-guide.scss";
```

Now start up your Rails server and verify that the style guide is loaded in your CSS file!
