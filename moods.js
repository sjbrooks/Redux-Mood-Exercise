$(function() {
  const $mood = $('#default-mood');

  $('#disappointed').on("click", function() {
    store.dispatch({ type: "DISAPPOINTED" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })
  
  $('#beg').on("click", function() {
    store.dispatch({ type: "BEG" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })

  $('#blush').on("click", function() {
    store.dispatch({ type: "BLUSH" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })
  
  $('#sparkle').on("click", function() {
    store.dispatch({ type: "SPARKLE" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })
  
  $('#dance').on("click", function() {
    store.dispatch({ type: "DANCE" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })
  
  $('#vomit').on("click", function() {
    store.dispatch({ type: "VOMIT" });
    const currentMood = store.getState().mood;
    $mood.text(currentMood);
  })

});