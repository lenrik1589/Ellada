// let md = require('markdown-it')();
let story,
    d;
function preload(){
  story = loadStrings("Artemiysbook/story/full.md");
}
function setup(){
  noCanvas();
  showdown.Converter();
  showdown.setFlavor("github");
  d = createDiv(showdown.makeHtml(story.join('\n')));
  d.addClass('markdown-body');
}
