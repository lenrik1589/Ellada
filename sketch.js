// let md = require('markdown-it')();
let story,
    d;
function preload(){
  story = loadStrings("Artemiysbook/story/full.md");
}
function setup(){
  str = showdown.makeHtml(story.join('\n'));
  console.log(str);
  let m;

  let mat;
  let what;
  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      if(groupIndex==1){
        str = str.replace(what,match);
        console.log(`Found match, group ${groupIndex}: ${match}`);
      }else{
        console.log(`Found match, group ${groupIndex}: ${match}`);
        what = match;
      }
    });
  }
  console.log(str);
  noCanvas();
  showdown.Converter();
  showdown.setFlavor("github");
  d = createDiv(str);
  d.addClass('markdown-body');
}
