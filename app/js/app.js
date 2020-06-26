$(`.header-right__cart`).click(function() {
  $(`.cart`).toggle();
  $(`.header-right__cart`).toggleClass(`pressed`);
});

for (let i = 1; i <= 8; i++) {
  $(`.products-item-0${i}`).mouseenter(function() {
    $(`.products-item-0${i}`).addClass(`border-vsbl`);
    $(`.products-item-0${i}`).addClass(`border-vsbl`);
    $(`.products-item-0${i} .btn-left`).show();
    $(`.products-item-0${i} .btn-right`).show();
    $(`.products-item-0${i} .products-item__detail`).css(`visibility`, `visible`);
    $(`.products-item-0${i} .products-item-info-hover`).show();
  });

  $(`.products-item-0${i}`).mouseleave(function() {
    $(`.products-item-0${i}`).removeClass(`border-vsbl`);
    $(`.products-item-0${i}`).removeClass(`border-vsbl`);
    $(`.products-item-0${i} .btn-left`).hide();
    $(`.products-item-0${i} .btn-right`).hide();
    $(`.products-item-0${i} .products-item__detail`).css(`visibility`, `hidden`);
    $(`.products-item-0${i} .products-item-info-hover`).hide();
  });
}