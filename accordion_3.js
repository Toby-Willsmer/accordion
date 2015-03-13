(function() {
  var actionClass  = ['open', 'close'],
      accordClass  = ['accordion-open', 'accordion-collapsed'],
      acctrigClass = ['.accordion-trigger-desktop', '.accordion-trigger-mobile'],
      accTrigJoin  = acctrigClass.join();

  $(document).ready(function() {
    checkWidth();
    $(window).resize(checkWidth);
  });

  $(accTrigJoin).addClass(actionClass[0]).next().addClass(accordClass[1]);

  function accordion(device) {
    $(acctrigClass[device]).on('click', function(event) {
      if($(event.currentTarget).hasClass(actionClass[0])) {
        $(acctrigClass[device]).removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
        $(event.currentTarget).removeClass(actionClass[0]).addClass(actionClass[1]).next().removeClass(accordClass[1]).addClass(accordClass[0]);
      } else {
        $(event.currentTarget).removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
      }
    });
  }

  function checkWidth() { // mobile only
    var winWidth = $(window).width(),
        smlWidth = 700; // match mobile breakpoint in the CSS
    if(winWidth <= smlWidth) {
      $(acctrigClass[1]).addClass(actionClass[0]).next().addClass(accordClass[1]); // stops the stripping out of classes on resize
      accordion(1);
    } else {
      $(acctrigClass[1]).off('click').removeClass('open close').next().removeClass('accordion-open accordion-collapsed');
    }
  }

  accordion(0); // desktop

})();