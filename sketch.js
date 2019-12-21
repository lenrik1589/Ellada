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
  d.style("padding-left",windowWidth/4);
  d.style("padding-right",windowWidth/4);
  d.addClass('markdown-body');
}
