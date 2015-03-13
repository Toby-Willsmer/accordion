(function() {
  var actionClass = ['open', 'close'],
      accordClass = ['accordion-open', 'accordion-collapsed'],
      triggerMob  = $('.accordion-trigger-mobile');

  $(document).ready(function() {
    checkWidth();
    $(window).resize(checkWidth);
  });

  function checkWidth() { // mobile only
    var winWidth = $(window).width(),
        smlWidth = 700; // match the rqquired mobile breakpoint in the CSS
    if(winWidth <= smlWidth) {
      triggerMob.addClass(actionClass[0]).next().addClass(accordClass[1]);
      triggerMob.click(function(event) {
        if(triggerMob.hasClass(actionClass[0])) {
          triggerMob.removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
          $(event.currentTarget).removeClass(actionClass[0]).addClass(actionClass[1]).next().removeClass(accordClass[1]).addClass(accordClass[0]);
        } else {
          $(event.currentTarget).removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
        }
      });
    } else {
      triggerMob.off('click').removeClass('open close').next().removeClass('accordion-open accordion-collapsed');
    }
  }

})();