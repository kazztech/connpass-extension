const mainH2Top = document.querySelector(".main_h2").getBoundingClientRect().top;
scrollTo(0, main_h2_top);

addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    const nextLink = document.querySelector(".to_next a");
    if (nextLink) {
      nextLink.click();
    }
  }
  if (e.keyCode === 37) {
    const prevLink = document.querySelector(".to_prev a");
    if (prevLink) {
      prevLink.click();
    }
  }
});
