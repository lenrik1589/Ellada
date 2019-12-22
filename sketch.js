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
  const regex = /([0-9,\-,\u0400-\u04FF]+)top(?=\")/gm;
  story = showdown.makeHtml(story.join('\n'));
  console.log(story);
  let m;

  let mat;
  let what;
  while ((m = regex.exec(story)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      if(groupIndex==1){
        story = story.replace(what,match);
        console.log(`Found match, group ${groupIndex}: ${match}`);
      }else{
        console.log(`Found match, group ${groupIndex}: ${match}`);
        what = match;
      }
    });
  }
  console.log(story);
  d = createDiv(story);
  d.addClass('markdown-body');
}
