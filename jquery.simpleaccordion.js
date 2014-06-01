(function ($) {
  var setup = {
    accordion: function (target, settings) {
      $(target).each(function () {
          var $this = $(this);
          $('.accordion-button:not(.disabled)', $this).click(function () {
            $(this).next().slideToggle('normal');
            $(this).toggleClass('on');
          });

          $('.accordion-content', $this).hide();
      });
    }
  },
	methods = {
    init: function (options) {
      if (this.length) {
        var settings = {}
        return this.each(function () {
          if (options) {
            $.extend(settings, options)
          }
          setup.accordion(this, settings);
        })
      }
    }
	};

  $.fn.simpleaccordion = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.simpleaccordion');
    }
  }
})(jQuery);		
