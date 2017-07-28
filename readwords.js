//I feel that you need a comment on the first line.  Seems only polite. hi there.
var censor = require("womblemod001");
console.log(censor.getCensoredWords());
console.log(censor.censor("Come very sad bad, nasty evil horrible mad bad text"));
censor.addCensoredWords("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("piss on the cunt who ass fucks on a gloomy day"));

