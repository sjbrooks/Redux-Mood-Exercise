const INITIAL_STATE = { mood: "（⌒▽⌒)" };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DISAPPOINTED":
      console.log("Made it into DISAPPOINTED case in rootReducer")
      return { ...state, mood: "(*ノ_<*)" };

    case "VOMIT":
      return { ...state, mood: "( ﾟ ３ﾟ)≡@" };

    case "BEG":
      return { ...state, mood: "（＾人＾）" };

    case "SPARKLE":
      return { ...state, mood: "＋。゜~”（゜∀゜）゜。＋" };

    case "DANCE":
      return { ...state, mood: "(ノ・・)ノ" };
    
      case "BLUSH":
      return { ...state, mood: "(´∀｀•)" };

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);
