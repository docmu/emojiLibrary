(function (global, $) {
  //'new' Emoji object
  var Emoji = function (name) {
    return new Emoji.init(name);
  };

  //available emojis
  var supportedEmojis = [
    "shrug",
    "acid",
    "kiss",
    "danceParty",
    "flowerGirl",
    "Lenny",
    "tableFlip",
    "sad",
    "happy",
    "zombie",
    "chineseMafia",
    "confused",
    "embarrassed",
    "angry",
    "magic",
    "booty",
    "takeMyMoney",
    "crazy",
    "disappointment",
    "cool",
    "flex",
    "middleFinger",
    "",
  ];

  //the emojis in ascii
  var asciiEmojis = [
    "¯\\_(ツ)_/¯",
    "⊂(◉‿◉)つ",
    "(づ￣ ³￣)づ",
    "♪┏(・o･)┛♪┗ ( ･o･) ┓♪",
    "(◕‿◕✿)",
    "( ͡° ͜ʖ ͡°)",
    "(╯°□°)╯︵ ┻━┻",
    "(╥﹏╥)",
    "(＾∇＾)",
    "[¬º-°]¬",
    "(-(-.(-.(-.-).-).-)-)",
    "(⊙.☉)7",
    "(⁄⁄•⁄ω⁄•⁄⁄)",
    "(╬ ಠ益ಠ)",
    "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ",
    "(‿|‿)",
    "(╯°□°）╯$ $ $",
    "(⊙_◎)",
    "ಠ_ಠ",
    "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
    "ᕦ(ò_óˇ)ᕤ",
    "┌П┐(ಠ_ಠ)",
  ];

  //all methods that can be called on the emoji object
  //put in the prototype to save memory space
  Emoji.prototype = {
    validate: function () {
      //check if argument passed is a valid emoji
      //references the externally inaccessible 'supportedEmojis' within the closure
      if (supportedEmojis.indexOf(this.name) === -1) {
        throw "Invalid Emoji";
      }
    },

    //translates the emoji name passed as an argument into the ascii emoji
    translate: function () {
      this.validate();

      if (this.name !== "") {
        //return ascii translation of argument passed
        return asciiEmojis[supportedEmojis.indexOf(this.name)];
      } else {
        //else empty string return a random emoji
        return this.random();
      }
    },

    //return a random emoji
    random: function () {
      return asciiEmojis[Math.floor(Math.random() * asciiEmojis.length)];
    },
  };

  //function constructor: this is where the obj is created
  Emoji.init = function (name) {
    var self = this;
    self.name = name || "";
  };

  //the prototype of Emoji.init points to Emoji.prototype
  //this allows them to share methods
  Emoji.init.prototype = Emoji.prototype;

  //attach to global object so it can be used everywhere
  //allow alias E$
  //point both to var Emoji, the function
  global.Emoji = global.E$ = Emoji;
})(window, jQuery);
