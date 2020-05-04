$(function () {
  
  // set up store
  const store = Redux.createStore(rootReducer);

  // select mood element
  const $mood = $('#default-mood');


  $('#disappointed').on("click", function () {
    store.dispatch({ type: "DISAPPOINTED", payload: "(*ノ_<*)" });
  })

  $('#beg').on("click", function () {
    store.dispatch({ type: "BEG", payload: "（＾人＾）" });
  })

  $('#blush').on("click", function () {
    store.dispatch({ type: "BLUSH", payload: "(´∀｀•)" });
  })

  $('#sparkle').on("click", function () {
    store.dispatch({ type: "SPARKLE", payload: "＋。゜~”（゜∀゜）゜。＋" });
  })

  $('#dance').on("click", function () {
    store.dispatch({ type: "DANCE", payload: "(ノ・・)ノ" });
  })

  $('#vomit').on("click", function () {
    store.dispatch({ type: "VOMIT", payload: "( ﾟ ３ﾟ)≡@" });
  })


function renderMood() {
  $mood.text(store.getState().mood);
}

renderMood()
store.subscribe(renderMood)

});