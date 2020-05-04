const INITIAL_STATE = { mood: "（⌒▽⌒)" };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DISAPPOINTED":
      console.log("Made it into DISAPPOINTED case in rootReducer")
      return { ...state, mood: action.payload };

    case "VOMIT":
      return { ...state, mood: action.payload };

    case "BEG":
      return { ...state, mood: action.payload };

    case "SPARKLE":
      return { ...state, mood: action.payload };

    case "DANCE":
      return { ...state, mood: action.payload };
    
      case "BLUSH":
      return { ...state, mood: action.payload };

    default:
      return state;
  }
}