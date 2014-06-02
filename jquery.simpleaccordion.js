(function ($) {
  var settings;
  var setup = {
    accordion: function (target, settings) {
      $(target).each(function () {
          var $this = $(this);
          $(target, $this).on('click', '.accordion-button:not(.disabled)', function () {
            $(this).toggleClass('on').next().slideToggle('normal');
            if(settings.classic)
              $(".accordion-content").not($(this).next()).slideUp('normal').prev().removeClass('on');
          });

          $('.accordion-content', $this).hide();
      });
    }
  },
	methods = {
    init: function (options) {
      if (this.length) {
        settings = {
          classic:true
        };
        
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
