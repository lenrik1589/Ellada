// let md = require('markdown-it')();
let story;
function preload(){
  story = loadStrings("Artemiysbook/story/full.md");
}
function setup(){
  noCanvas();
  createDiv(showdown.makeHtml(story.join('\n')));
  select("body").style("padding-left",width/4);
  select("body").style("padding-right",width/4);
}
