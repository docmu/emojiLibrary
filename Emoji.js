(function (global, $) {
  //'new' Emoji object
  var Emoji = function (name) {
    return new Emoji.init(name);
  };

  // hidden within the scope of the IIFE and never directly accessible
  //available emojis
  var emojis = {
    shrug: "¯\\_(ツ)_/¯",
    acid: "⊂(◉‿◉)つ",
    kiss: "(づ￣ ³￣)づ",
    danceParty: "♪┏(・o･)┛♪┗ ( ･o･) ┓♪",
    flowerGirl: "(◕‿◕✿)",
    Lenny: "( ͡° ͜ʖ ͡°)",
    tableFlip: "(╯°□°)╯︵ ┻━┻",
    sad: "(╥﹏╥)",
    happy: "(＾∇＾)",
    zombie: "[¬º-°]¬",
    chineseMafia: "(-(-.(-.(-.-).-).-)-)",
    confused: "(⊙.☉)7",
    embarrassed: "(⁄⁄•⁄ω⁄•⁄⁄)",
    angry: "(╬ ಠ益ಠ)",
    magic: "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ",
    booty: "(‿|‿)",
    takeMyMoney: "(╯°□°）╯$ $ $",
    crazy: "(⊙_◎)",
    disappointment: "ಠ_ಠ",
    cool: "(•_•) ( •_•)>⌐■-■ (⌐■_■)",
    flex: "ᕦ(ò_óˇ)ᕤ",
    middleFinger: "┌П┐(ಠ_ಠ)",
  };

  //prototype holds methods callable by Emoji objects (to save memory space)
  Emoji.prototype = {
    validate: function () {
      //check if argument passed is a valid emoji
      //valid arguments can either be a key within the emojis object or an empty string
      //references the externally inaccessible 'emojis' object within the closure
      if (!emojis.hasOwnProperty(this.name) && this.name !== "") {
        throw "invalid emoji";
      }
    },

    //returns the the value corresponding to the key passed as an argument
    //else, empty string return a random emoji
    translate: function () {
      this.validate();

      if (this.name !== "") {
        return emojis[this.name];
      } else {
        return this.random();
      }
    },

    //return a random Emoji
    random: function () {
      var keys = Object.keys(emojis);
      return emojis[keys[(keys.length * Math.random()) << 0]];
    },
  };

  //function constructor
  //if no argument was passed, give empty string as default
  //the actual object is created here, allowing us to 'new' an object without calling 'new'
  Emoji.init = function (name) {
    var self = this;
    self.name = name || "";
  };

  //this trick is borrowed from jQuery so we don't have to use the 'new' keyword
  Emoji.init.prototype = Emoji.prototype;

  //attach to Emoji to the global object so we can access it everywhere
  //provide 'E$' shorthand
  global.Emoji = global.E$ = Emoji;
})(window, jQuery);
