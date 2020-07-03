if (location.pathname === "/search/") {
  const main_h2_top = document.querySelector(".main_h2").getBoundingClientRect()
    .top;
  scrollTo(0, main_h2_top);

  addEventListener("keydown", (e) => {
    if (e.keyCode === 39) {
      document.querySelector(".to_next a").click();
    }
  });
  addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      document.querySelector(".to_prev a").click();
    }
  });
}
