'use strict';

module.exports = {
  main: {
    preHTML: 			"<%= cfg.root %><%= cfg.src.utils %>globals/head.html",
    postHTML: 		"<%= cfg.root %><%= cfg.src.utils %>globals/foot.html",
    template: 		"<%= cfg.root %><%= cfg.src.html %>templates/*.hbs",
    partials: 		"<%= cfg.root %><%= cfg.src.html %>**/*.hbs",
    templateData: "<%= cfg.root %><%= cfg.src.html %>**/.json",
    output: 			"<%= cfg.root %><%= cfg.dest.html %>*.html",
    helpers: 			"<%= cfg.root %><%= cfg.src.utils %>helpers/**/*.js"
  }
};