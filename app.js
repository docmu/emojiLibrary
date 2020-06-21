//instantiating a 'new' object
//(the architecture allows not having to use the 'new' keyword)
var s = E$("shrug");
var a = E$("acid");
var k = E$("kiss");
var r = E$();

$("#one").text(k.translate()).append(" kiss");

$("#two").text(a.translate()).append(" acid");

$("#three").text(s.translate()).append(" shrug");

$("#four").text(r.translate()).append(" random emoji");
