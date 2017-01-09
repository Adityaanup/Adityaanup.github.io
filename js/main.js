$(document).ready(function () {
  $("[rel='tooltip']").tooltip();
});

$("#menu-close").click(function (e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
});

$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

$(window).scroll(function () {
  $('.toSlideRight').each(function () {
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow + 600) {
      $(this).addClass("slideRight");
    }
  });

  $('.toSlideDown').each(function () {
    var itemPos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();

    if (itemPos < topOfWindow + 600) {
      $(this).addClass("slideDown");
    }
  });
});

jQuery.scrollDepth({
  elements: ['#portfolio', '#contact'],
  percentage: false,
  nonInteraction: false,
});

/* bars.js */
function bar_group() {
  group_ident = 1,
    $(".bar_group").each(function () {
      $(this).addClass("group_ident-" + group_ident),
        $(this).data("gid", group_ident),
        group_ident++
    }
    )
}

function get_max() {
  $(".bar_group").each(function () {
    var t = [];
    $(this).children().each(function () {
      t.push($(this).attr("value"))
    }), max_arr["group_ident-" + $(this).data("gid")] = t, void 0 !== $(this).attr("max") ? $(this).data("bg_max", $(this).attr("max")) : $(this).data("bg_max", Math.max.apply(null, t))
  })
} function data_labels() { $(".bar_group__bar").each(function () { void 0 !== $(this).attr("label") && $('<p class="b_label">' + $(this).attr("label") + "</p>").insertBefore($(this)) }) } function show_values() { $(".bar_group__bar").each(function () { "true" == $(this).attr("show_values") && ($(this).css("margin-bottom", "40px"), void 0 !== $(this).attr("unit") ? ($(this).append('<p class="bar_label_min">0 ' + $(this).attr("unit") + "</p>"), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + " " + $(this).attr("unit") + "</p>")) : ($(this).append('<p class="bar_label_min">0</p>'), $(this).append('<p class="bar_label_max">' + $(this).parent().data("bg_max") + "</p>"))) }) } function show_tooltips() { $(".bar_group__bar").each(function () { "true" == $(this).attr("tooltip") && ($(this).css("margin-bottom", "40px"), $(this).append('<div class="b_tooltip"><span>' + $(this).attr("value") + '</span><div class="b_tooltip--tri"></div></div>')) }) } function in_view(t) { var a = $(t), i = $(window), s = i.scrollTop(), r = s + i.height(), n = a.offset().top, o = n + a.height(); r > o - 45 && a.css("width", a.attr("value") / a.parent().data("bg_max") * 100 + "%") } function bars() { bar_group(), get_max(), data_labels(), show_tooltips(), show_values() } max_arr = {}, $(".bar_group__bar").each(function () { in_view($(this)) }), $(window).scroll(function () { $(".bar_group__bar").each(function () { in_view($(this)) }) }), bars();
/**end bar.js */

/** progressbar.js */


window.onload = function onLoad() {
  var skill1 = new ProgressBar.Circle('#skill1', {
    color: '#00b6e3',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 3,
    trailWidth: 3,
    trailColor: '#fff',
    easing: 'bounce',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#00b6e3', width: 3 },
    to: { color: '#00b6e3', width: 3 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      circle.path.setAttribute('stroke-linecap', 'round');

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }

    }
  });

  var skill2 = new ProgressBar.Circle('#skill2', {
    color: '#00b6e3',
    duration: 1400,
    easing: 'bounce'
  });

  var skill3 = new ProgressBar.Circle('#skill3', {
    color: '#00b6e3',
    duration: 1400,
    easing: 'bounce'
  });

  var skill4 = new ProgressBar.Circle('#skill4', {
    color: '#00b6e3',
    duration: 1400,
    easing: 'bounce'
  });


  skill1.animate(0.76);
  skill2.animate(0.65);
  skill3.animate(0.85);
  skill4.animate(0.80);


  var bar = new ProgressBar.Line(skillbar, {
    strokeWidth: 1,
    easing: 'bounce',
    duration: 1400,
    color: '#00b6e3',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
    bar.path.setAttribute('stroke-linecap', 'round');
  }
  });

  bar.animate(0.82);

};

/***end progressbar.js */

/**line progressbar */



  // Number from 0.0 to 1.0

/**end line progressbar */
