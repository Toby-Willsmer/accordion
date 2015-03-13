(function() {
  var actionClass = ['open', 'close'],
      accordClass = ['accordion-open', 'accordion-collapsed'],
      triggerDesk = $('.accordion-trigger-desktop');

  triggerDesk.addClass(actionClass[0]).next().addClass(accordClass[1]);
  triggerDesk.on('click', function(event) {
    if($(event.currentTarget).hasClass(actionClass[0])) {
      triggerDesk.removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
      $(event.currentTarget).removeClass(actionClass[0]).addClass(actionClass[1]).next().removeClass(accordClass[1]).addClass(accordClass[0]);
    } else {
      $(event.currentTarget).removeClass(actionClass[1]).addClass(actionClass[0]).next().removeClass(accordClass[0]).addClass(accordClass[1]);
    }
  });

})();