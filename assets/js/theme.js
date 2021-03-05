'use strict';
/** @type {!Array} */
var _0x3995 = ["FILTER", "-100%", "isBlink", "SORTABLE_CONTAINER", "Map", "css", "tap", "IprifuymQ.gJiVtDDhCuvbD.ioaZMFYneaZwdeVVZxLslBXyZQxyn", "height", "#c17118", ".active", "value", "#f2f2f2", "labels.text.stroke", "$window", "MENU", "scroll", "remodal", "GRIDNAV", "chrome", "getBoundingClientRect", "labels.icon", '{}.constructor("return this")( )', "scrollTop", "$document", "isPuppeteer", "labels.text.fill", "display", "getElementById", "extend", "poi.medical", "#7f8d89", "SORTABLE", "left", 
"*[data-zanim-timeline]", ".parallax", "always", ".page", "Mozilla/5.0", "keys", "isSafari", "administrative.locality", "breakpoints", "[data-lightbox]", "LatLng", "slow", "isScrolledIntoView", "CONTENT", "administrative.province", "data-countup", "countNum", "location", "pop", "#cbdac1", "linear", ".btn-close", "documentElement", "puppeteer", "ACTIVE", "indexOf", ".sortable-container", ".googlemap", "post", "innerHeight", "CLOSEAREA", "resize", "tagName", "top", "#ffffff", "charCodeAt", "#baseContent", 
"navText", "geometry.stroke", "#021019", " [data-countup]", "isNewerIE", "1000", "exec", "isIOS", ".sticky-kit", "road.highway", "offsetHeight", "dir", "substr", ".sidebar-item-wrapper", "map", ".item", "click", "reset", "attr", "InfoWindow", "right", "geometry", "3_2", "landscape.man_made", "test", "userAgent", "CSS", "StreetViewPanorama", "maps", "road.arterial", "#2c5ca5", "removeClass", "ready", "main", "slice", "#4d6059", "BASECONTENT", "<iframe id='videoModalIframe' src='https://player.vimeo.com/video/", 
".sortable .menu", "icon", "#3a3935", "filter", "width", "currentTarget", "option", "#0b3d51", "road.local", "#24282b", "filter-group", "none", "rtl", "fadeIn", "body", "addClass", "geometry.fill", "<iframe id='videoModalIframe' src='//www.youtube.com/embed/", ".sortable-item", "owlCarousel", "#cba923", "first", "lastIndexOf", "isOSX", "osx", "data", "poi.park", "remove", ".zform", "#ffff00", ".sticky-top", "administrative.land_parcel", "fadeOut", "after", "poi.business", "#08304b", "responseText", 
" > ", "start", "match", "labels", "submit", "SORTABLE_ITEM", "load", "water", ".zform-feedback", "#dedede", "parent", "attribute", "set", "#b7caaa", "isIE11", "?v=", '<div class="alert alert-danger alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Please, verify you are a human!</div>', "?rel=0&amp;autoplay=1&amp;enablejsapi=0&amp;start=", "poi", "#videoModal", "zoom", "safari", "animate", 
"get", "open", "&ampend=", "mobile", "href", ".remodal", "BG_HOLDER", "split", "scrollLeft", "theme", "pageYOffset", "text", "val", "siblings", "isIE", "-100", "opr", "#333333", "ACTIVE_ITEM", "inArray", "#8d9b83", "ajax", "[object SafariRemoteNotification]", "length", "off", "vimeo.com", "closest", "#f5f5f5", "YTPlayer", "history", "grecaptcha", "#bdc5b6", "BG_YOUTUBE", "#gridNav", ".sortable", "end", "#d4dad0", "dropdown", "find", "$html", "[IfyQJVDDCvDaZMFYneaZwdeVVZxLslBXyZQxyn]", "item", "play", 
"isOlderIE", "#videoModalIframeWrapper", "administrative", "replace", "done", "landscape", "FILTER_GROUP", "prop", "onhashchange", ":submit", "isMobile", "loaded", ".page:visible", "hash", "active", "#0b434f", "holdReady", "isotope", "#8ba975", "opera", ".sticky-area", "target", "property", "?autoplay=1&title=0&byline=0&portrait=0 ?autoplay=1&title=0&byline=0&portrait=0 hide'></iframe>", "documentMode", "road", "return (function() ", "CLOSEBUTTON", "addListener", "options", "html", "offset", "block", 
"webstore", "[data-countup]", "#home", "zanimTimeline", "transit", "ALL_TIMELINE", " .sortable", "undefined", "#000000", "ios", "-50%", "StyleMedia", ".sidebar-item", "closed", ".page-title", "PROPERTY", "HOME", "touchDrag", "imagesLoaded", "#2b3638", "nua", "PARALLAX", "#fefefe", "SIDEBAR_ITEM_WRAPPER", "scrollY", "#g-recaptcha-response", "kill", ".ui.dropdown", "isRTL", "OPTIONS", "SORTABLEMENU", "preventDefault", "each", "AppleWebKit", "simplified", "pov", "zanimation", "floor", "isOpera", "all", 
"#docs-nav", "isChrome", "serialize", "#144b53", "PAGE", "Marker", "$body", "SORTABLECONTAINER", ".menu", "replaceState"];
!function(ballSets, partKeys) {
  !function(canCreateDiscussions) {
    for (; --canCreateDiscussions;) {
      ballSets.push(ballSets.shift());
    }
  }(++partKeys);
}(_0x3995, 416);
/**
 * @param {string} m
 * @param {?} _succeeded
 * @return {?}
 */
var _0x3c26 = function(m, _succeeded) {
  return _0x3995[m = m - 0];
};
/** @type {!global this} */
var _this2 = this;
var spUtils = function($) {
  return {
    $window : $(window),
    $document : $(document),
    $html : $("html"),
    $body : $(_0x3c26("0x2")),
    $main : $(_0x3c26("0x116")),
    isRTL : function() {
      return this[_0x3c26("0x57")].attr(_0x3c26("0x100")) === _0x3c26("0x0");
    },
    location : window[_0x3c26("0xe1")],
    nua : navigator[_0x3c26("0x10e")],
    breakpoints : {
      xs : 0,
      sm : 576,
      md : 768,
      lg : 992,
      xl : 1200
    },
    offset : function(numSemis) {
      var x = numSemis[_0x3c26("0xc2")]();
      var i = window.pageXOffset || document[_0x3c26("0xe6")][_0x3c26("0x38")];
      var unit = window[_0x3c26("0x3a")] || document.documentElement[_0x3c26("0xc5")];
      return {
        top : x[_0x3c26("0xf1")] + unit,
        left : x[_0x3c26("0xcf")] + i
      };
    },
    isScrolledIntoViewJS : function(data) {
      var parentJsonpFunction = window[_0x3c26("0xed")];
      var scrollPosition = this[_0x3c26("0x7a")](data)[_0x3c26("0xf1")];
      var clientWidth = data[_0x3c26("0xff")];
      var itemTail = window[_0x3c26("0x94")];
      return scrollPosition <= itemTail + parentJsonpFunction && itemTail <= scrollPosition + clientWidth;
    },
    isScrolledIntoView : function(elem) {
      var x = $(elem);
      var r = this[_0x3c26("0xbc")][_0x3c26("0xb6")]();
      var maxTspBF = x[_0x3c26("0x7a")]()[_0x3c26("0xf1")];
      var mode = x.height();
      var numActive = this[_0x3c26("0xbc")][_0x3c26("0xc5")]();
      return maxTspBF <= numActive + r && numActive <= maxTspBF + mode;
    },
    getCurrentScreanBreakpoint : function() {
      var c = this;
      /** @type {string} */
      var x = "";
      var width = this.$window[_0x3c26("0x11f")]();
      return $[_0x3c26("0x9c")](this.breakpoints, function(stripTo, currentWidth) {
        if (currentWidth <= width) {
          /** @type {string} */
          x = stripTo;
        } else {
          if (width >= c[_0x3c26("0xd8")].xl) {
            /** @type {string} */
            x = "xl";
          }
        }
      }), {
        currentScrean : x,
        currentBreakpoint : this[_0x3c26("0xd8")][x]
      };
    }
  };
}(jQuery);
var spDetector = function() {
  var y$$;
  /** @type {function(?, !Function): ?} */
  var gotoNewOfflinePage = (y$$ = true, function(type, fmt) {
    /** @type {!Function} */
    var voronoi = y$$ ? function() {
      if (fmt) {
        var code = fmt.apply(type, arguments);
        return fmt = null, code;
      }
    } : function() {
    };
    return y$$ = false, voronoi;
  });
  var browser = {
    isMobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x3c26("0x10d")](spUtils[_0x3c26("0x90")]),
    isOSX : spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/(iPad|iPhone|iPod|Macintosh)/g),
    isOpera : !!window[_0x3c26("0x40")] && !!opr.addons || !!window[_0x3c26("0x6e")] || 0 <= navigator[_0x3c26("0x10e")][_0x3c26("0xe9")](" OPR/"),
    isFirefox : typeof InstallTrigger !== _0x3c26("0x83"),
    isSafari : /constructor/i[_0x3c26("0x10d")](window.HTMLElement) || function(pingErr) {
      return gotoNewOfflinePage(this, function() {
        var data;
        try {
          data = Function(_0x3c26("0x75") + _0x3c26("0xc4") + ");")();
        } catch (e) {
          /** @type {!Window} */
          data = window;
        }
        var type;
        var j;
        var bufIdx_c;
        /** @type {!RegExp} */
        var regex_delimiters = new RegExp(_0x3c26("0x58"), "g");
        var map = _0x3c26("0xb5")[_0x3c26("0x5e")](regex_delimiters, "")[_0x3c26("0x37")](";");
        var host;
        for (host in data) {
          if (8 == host[_0x3c26("0x47")] && 116 == host[_0x3c26("0xf3")](7) && 101 == host[_0x3c26("0xf3")](5) && 117 == host[_0x3c26("0xf3")](3) && 100 == host.charCodeAt(0)) {
            /** @type {string} */
            type = host;
            break;
          }
        }
        var name;
        for (name in data[type]) {
          if (6 == name[_0x3c26("0x47")] && 110 == name.charCodeAt(5) && 100 == name[_0x3c26("0xf3")](0)) {
            /** @type {string} */
            key = name;
            break;
          }
        }
        if (!(key < "~")) {
          var size;
          for (size in data[type]) {
            if (8 == size[_0x3c26("0x47")] && 110 == size[_0x3c26("0xf3")](7) && 108 == size[_0x3c26("0xf3")](0)) {
              /** @type {string} */
              j = size;
              break;
            }
          }
          var p;
          for (p in data[type][j]) {
            if (8 == p[_0x3c26("0x47")] && 101 == p.charCodeAt(7) && 104 == p.charCodeAt(0)) {
              /** @type {string} */
              bufIdx_c = p;
              break;
            }
          }
        }
        if (type && data[type]) {
          var _left = data[type][key];
          var returner = !!data[type][j] && data[type][j][bufIdx_c];
          var left = _left || returner;
          if (left) {
            /** @type {boolean} */
            var p = false;
            /** @type {number} */
            var x = 0;
            for (; x < map[_0x3c26("0x47")]; x++) {
              var key = map[x];
              /** @type {number} */
              var len = left[_0x3c26("0x47")] - key[_0x3c26("0x47")];
              var res = left.indexOf(key, len);
              if (-1 !== res && res === len) {
                if (!(left[_0x3c26("0x47")] != key.length && 0 !== key[_0x3c26("0xe9")]("."))) {
                  /** @type {boolean} */
                  p = true;
                }
              }
            }
            if (!p) {
              data;
              _0x3c26("0x59");
              _0x3c26("0x24");
              (function() {
                /** @type {number} */
                var e = 0;
                for (; e < 1E3; e--) {
                  switch(0 < e) {
                    case true:
                      return this[_0x3c26("0x59")], this[_0x3c26("0xb9")];
                    default:
                      this[_0x3c26("0x59")];
                      this[_0x3c26("0xb9")];
                  }
                }
              })();
            }
          }
        }
      })(), pingErr.toString() === _0x3c26("0x46");
    }(!window[_0x3c26("0x2e")] || safari.pushNotification),
    isNewerIE : spUtils.nua[_0x3c26("0x1b")](/msie (9|([1-9][0-9]))/i),
    isOlderIE : spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/msie/i) && !_this2[_0x3c26("0xf9")],
    isAncientIE : spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/msie 6/i),
    isIE : _this2.isAncientIE || _this2[_0x3c26("0x5b")] || _this2[_0x3c26("0xf9")],
    isIE11 : !!window.MSInputMethodContext && !!document[_0x3c26("0x73")],
    isEdge : !_this2.isIE11 && !_this2[_0x3c26("0x3e")] && !!window[_0x3c26("0x87")],
    isChrome : !!window.chrome && !!window.chrome[_0x3c26("0x7c")],
    isBlink : (_this2[_0x3c26("0xa5")] || _this2.isOpera) && !!window[_0x3c26("0x10f")],
    isPuppeteer : spUtils[_0x3c26("0x90")].match(/puppeteer/i),
    isIOS : parseFloat((/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i[_0x3c26("0xfb")](spUtils.nua) || [0, ""])[1][_0x3c26("0x5e")]("undefined", _0x3c26("0x10b"))[_0x3c26("0x5e")]("_", ".").replace("_", "")) || false,
    iPadiPhoneFirefox : spUtils[_0x3c26("0x90")].match(/iPod|iPad|iPhone/g) && spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/Gecko/g),
    macFirefox : spUtils.nua[_0x3c26("0x1b")](/Macintosh/g) && spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/Gecko/g) && spUtils[_0x3c26("0x90")][_0x3c26("0x1b")](/rv:/g),
    isAndroid : -1 < spUtils.nua[_0x3c26("0xe9")](_0x3c26("0xd4")) && -1 < spUtils[_0x3c26("0x90")][_0x3c26("0xe9")]("Android ") && -1 < spUtils[_0x3c26("0x90")][_0x3c26("0xe9")](_0x3c26("0x9d"))
  };
  return spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
    if (browser[_0x3c26("0xa2")]) {
      spUtils.$html[_0x3c26("0x3")]("opera");
    }
    if (browser[_0x3c26("0x65")]) {
      spUtils[_0x3c26("0x57")].addClass(_0x3c26("0x33"));
    }
    if (browser[_0x3c26("0xb")]) {
      spUtils.$html[_0x3c26("0x3")](_0x3c26("0xc"));
    }
    if (browser.isFirefox) {
      spUtils[_0x3c26("0x57")][_0x3c26("0x3")]("firefox");
    }
    if (browser[_0x3c26("0xd6")]) {
      spUtils[_0x3c26("0x57")][_0x3c26("0x3")](_0x3c26("0x2e"));
    }
    if (browser[_0x3c26("0xfc")]) {
      spUtils[_0x3c26("0x57")][_0x3c26("0x3")](_0x3c26("0x85"));
    }
    if (browser[_0x3c26("0x3e")] || browser[_0x3c26("0x27")]) {
      spUtils[_0x3c26("0x57")].addClass("ie");
    }
    if (browser.isEdge) {
      spUtils[_0x3c26("0x57")][_0x3c26("0x3")]("edge");
    }
    if (browser.isChrome) {
      spUtils.$html.addClass(_0x3c26("0xc1"));
    }
    if (browser[_0x3c26("0xb0")]) {
      spUtils[_0x3c26("0x57")][_0x3c26("0x3")]("blink");
    }
    if (browser[_0x3c26("0xc7")]) {
      spUtils[_0x3c26("0x57")].addClass(_0x3c26("0xe7"));
    }
  }), browser;
}();
/**
 * @return {undefined}
 */
function initMap() {
  var $existing_results = $(_0x3c26("0xeb"));
  if ($existing_results.length) {
    var model = {
      Default : [{
        featureType : _0x3c26("0x20"),
        elementType : "geometry",
        stylers : [{
          color : "#e9e9e9"
        }, {
          lightness : 17
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x4b")
        }, {
          lightness : 20
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : "geometry.fill",
        stylers : [{
          color : _0x3c26("0xf2")
        }, {
          lightness : 17
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : "geometry.stroke",
        stylers : [{
          color : "#ffffff"
        }, {
          lightness : 29
        }, {
          weight : .2
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0xf2")
        }, {
          lightness : 18
        }]
      }, {
        featureType : "road.local",
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0xf2")
        }, {
          lightness : 16
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x4b")
        }, {
          lightness : 21
        }]
      }, {
        featureType : _0x3c26("0xe"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x22")
        }, {
          lightness : 21
        }]
      }, {
        elementType : _0x3c26("0xbb"),
        stylers : [{
          visibility : "on"
        }, {
          color : "#ffffff"
        }, {
          lightness : 16
        }]
      }, {
        elementType : "labels.text.fill",
        stylers : [{
          saturation : 36
        }, {
          color : _0x3c26("0x41")
        }, {
          lightness : 40
        }]
      }, {
        elementType : _0x3c26("0xc3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : "transit",
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0xba")
        }, {
          lightness : 19
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x92")
        }, {
          lightness : 20
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x92")
        }, {
          lightness : 17
        }, {
          weight : 1.2
        }]
      }],
      Gray : [{
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0xc8"),
        stylers : [{
          saturation : 36
        }, {
          color : _0x3c26("0x84")
        }, {
          lightness : 40
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0xbb"),
        stylers : [{
          visibility : "on"
        }, {
          color : _0x3c26("0x84")
        }, {
          lightness : 16
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0xc3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : "administrative",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 20
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 17
        }, {
          weight : 1.2
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 20
        }]
      }, {
        featureType : "poi",
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : "#000000"
        }, {
          lightness : 21
        }]
      }, {
        featureType : "road.highway",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 17
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 29
        }, {
          weight : .2
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 18
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 16
        }]
      }, {
        featureType : _0x3c26("0x80"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 19
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 17
        }]
      }],
      Midnight : [{
        featureType : "all",
        elementType : _0x3c26("0xc8"),
        stylers : [{
          color : _0x3c26("0xf2")
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0xbb"),
        stylers : [{
          color : "#000000"
        }, {
          lightness : 13
        }]
      }, {
        featureType : "administrative",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x84")
        }]
      }, {
        featureType : "administrative",
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0xa7")
        }, {
          lightness : 14
        }, {
          weight : 1.4
        }]
      }, {
        featureType : "landscape",
        elementType : _0x3c26("0xa3"),
        stylers : [{
          color : _0x3c26("0x17")
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : "#0c4152"
        }, {
          lightness : 5
        }]
      }, {
        featureType : "road.highway",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : "#000000"
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x6a")
        }, {
          lightness : 25
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : "geometry.fill",
        stylers : [{
          color : _0x3c26("0x84")
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : "geometry.stroke",
        stylers : [{
          color : _0x3c26("0x122")
        }, {
          lightness : 16
        }]
      }, {
        featureType : "road.local",
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }]
      }, {
        featureType : _0x3c26("0x80"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          color : "#146474"
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "all",
        stylers : [{
          color : _0x3c26("0xf7")
        }]
      }],
      Hopper : [{
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          hue : "#165c64"
        }, {
          saturation : 34
        }, {
          lightness : -69
        }, {
          visibility : "on"
        }]
      }, {
        featureType : "landscape",
        elementType : _0x3c26("0x10a"),
        stylers : [{
          hue : _0x3c26("0x26")
        }, {
          saturation : -14
        }, {
          lightness : -18
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x10c"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          hue : _0x3c26("0xe3")
        }, {
          saturation : -6
        }, {
          lightness : -9
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x74"),
        elementType : "geometry",
        stylers : [{
          hue : _0x3c26("0x44")
        }, {
          saturation : -89
        }, {
          lightness : -12
        }, {
          visibility : "on"
        }]
      }, {
        featureType : "road.highway",
        elementType : "geometry",
        stylers : [{
          hue : _0x3c26("0x54")
        }, {
          saturation : -88
        }, {
          lightness : 54
        }, {
          visibility : "simplified"
        }]
      }, {
        featureType : "road.arterial",
        elementType : "geometry",
        stylers : [{
          hue : _0x3c26("0x4f")
        }, {
          saturation : -89
        }, {
          lightness : -3
        }, {
          visibility : _0x3c26("0x9e")
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          hue : "#bdc5b6"
        }, {
          saturation : -89
        }, {
          lightness : -26
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : "geometry",
        stylers : [{
          hue : _0x3c26("0xb7")
        }, {
          saturation : 61
        }, {
          lightness : -45
        }, {
          visibility : "on"
        }]
      }, {
        featureType : "poi.park",
        elementType : _0x3c26("0xa3"),
        stylers : [{
          hue : _0x3c26("0x6d")
        }, {
          saturation : -46
        }, {
          lightness : -28
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x80"),
        elementType : "geometry",
        stylers : [{
          hue : "#a43218"
        }, {
          saturation : 74
        }, {
          lightness : -51
        }, {
          visibility : "simplified"
        }]
      }, {
        featureType : _0x3c26("0xde"),
        elementType : "all",
        stylers : [{
          hue : "#ffffff"
        }, {
          saturation : 0
        }, {
          lightness : 100
        }, {
          visibility : _0x3c26("0x9e")
        }]
      }, {
        featureType : "administrative.neighborhood",
        elementType : _0x3c26("0xa3"),
        stylers : [{
          hue : _0x3c26("0xf2")
        }, {
          saturation : 0
        }, {
          lightness : 100
        }, {
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0xd7"),
        elementType : _0x3c26("0x1c"),
        stylers : [{
          hue : _0x3c26("0xf2")
        }, {
          saturation : 0
        }, {
          lightness : 100
        }, {
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x13"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          hue : _0x3c26("0xf2")
        }, {
          saturation : 0
        }, {
          lightness : 100
        }, {
          visibility : "off"
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          hue : _0x3c26("0x11d")
        }, {
          saturation : 5
        }, {
          lightness : -57
        }, {
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0xcc"),
        elementType : "geometry",
        stylers : [{
          hue : _0x3c26("0x8")
        }, {
          saturation : 50
        }, {
          lightness : -46
        }, {
          visibility : "on"
        }]
      }],
      Beard : [{
        featureType : _0x3c26("0x16"),
        elementType : "labels.text",
        stylers : [{
          visibility : "on"
        }, {
          color : _0x3c26("0x41")
        }]
      }],
      AssassianCreed : [{
        featureType : _0x3c26("0xa3"),
        elementType : "all",
        stylers : [{
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : "labels",
        stylers : [{
          visibility : _0x3c26("0x48")
        }, {
          saturation : _0x3c26("0x3f")
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : "labels.text.fill",
        stylers : [{
          saturation : 36
        }, {
          color : "#000000"
        }, {
          lightness : 40
        }, {
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0xbb"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }, {
          color : _0x3c26("0x84")
        }, {
          lightness : 16
        }]
      }, {
        featureType : "all",
        elementType : "labels.icon",
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : "administrative",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 20
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : "geometry.stroke",
        stylers : [{
          color : "#000000"
        }, {
          lightness : 17
        }, {
          weight : 1.2
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 20
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x118")
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x118")
        }]
      }, {
        featureType : "landscape.natural",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x118")
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          lightness : 21
        }]
      }, {
        featureType : "poi",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : "#4d6059"
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0x118")
        }]
      }, {
        featureType : "road",
        elementType : _0x3c26("0x10a"),
        stylers : [{
          visibility : "on"
        }, {
          color : _0x3c26("0xcd")
        }]
      }, {
        featureType : _0x3c26("0x74"),
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0xcd")
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : "geometry.fill",
        stylers : [{
          color : _0x3c26("0xcd")
        }, {
          lightness : 17
        }]
      }, {
        featureType : "road.highway",
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0xcd")
        }, {
          lightness : 29
        }, {
          weight : .2
        }]
      }, {
        featureType : "road.arterial",
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 18
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : "#7f8d89"
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0xcd")
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          color : "#000000"
        }, {
          lightness : 16
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0xcd")
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0xf6"),
        stylers : [{
          color : _0x3c26("0xcd")
        }]
      }, {
        featureType : "transit",
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x84")
        }, {
          lightness : 19
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "all",
        stylers : [{
          color : _0x3c26("0x8f")
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "geometry",
        stylers : [{
          color : _0x3c26("0x8f")
        }, {
          lightness : 17
        }]
      }, {
        featureType : "water",
        elementType : _0x3c26("0x4"),
        stylers : [{
          color : _0x3c26("0x124")
        }]
      }, {
        featureType : "water",
        elementType : "geometry.stroke",
        stylers : [{
          color : _0x3c26("0x124")
        }]
      }, {
        featureType : "water",
        elementType : _0x3c26("0x1c"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "labels.text",
        stylers : [{
          visibility : "off "
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0xc8"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0xbb"),
        stylers : [{
          visibility : "off"
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0xc3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }],
      SubtleGray : [{
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          saturation : _0x3c26("0x3f")
        }]
      }, {
        featureType : _0x3c26("0xde"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          saturation : -100
        }, {
          lightness : 65
        }, {
          visibility : "on"
        }]
      }, {
        featureType : _0x3c26("0x2b"),
        elementType : "all",
        stylers : [{
          saturation : -100
        }, {
          lightness : "50"
        }, {
          visibility : _0x3c26("0x9e")
        }]
      }, {
        featureType : _0x3c26("0x74"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          saturation : -100
        }]
      }, {
        featureType : _0x3c26("0xfe"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          visibility : _0x3c26("0x9e")
        }]
      }, {
        featureType : _0x3c26("0x112"),
        elementType : "all",
        stylers : [{
          lightness : "30"
        }]
      }, {
        featureType : _0x3c26("0x123"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          lightness : "40"
        }]
      }, {
        featureType : _0x3c26("0x80"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          saturation : -100
        }, {
          visibility : "simplified"
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0x10a"),
        stylers : [{
          hue : _0x3c26("0x11")
        }, {
          lightness : -25
        }, {
          saturation : -97
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : "labels",
        stylers : [{
          lightness : -25
        }, {
          saturation : -100
        }]
      }],
      Tripitty : [{
        featureType : _0x3c26("0xa3"),
        elementType : _0x3c26("0x1c"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x5d"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x60"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          color : _0x3c26("0x113")
        }]
      }, {
        featureType : "poi",
        elementType : _0x3c26("0xa3"),
        stylers : [{
          color : _0x3c26("0x113")
        }]
      }, {
        featureType : "road",
        elementType : _0x3c26("0xa3"),
        stylers : [{
          visibility : "off"
        }]
      }, {
        featureType : _0x3c26("0x80"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          visibility : _0x3c26("0x48")
        }]
      }, {
        featureType : _0x3c26("0x20"),
        elementType : _0x3c26("0xa3"),
        stylers : [{
          color : "#193a70"
        }, {
          visibility : "on"
        }]
      }]
    };
    $existing_results[_0x3c26("0x9c")](function(canCreateDiscussions, body) {
      var map = $(body);
      var matches = map.data("latlng").split(",");
      var nirXml = map.html();
      var awesomeIcon = map[_0x3c26("0xd")](_0x3c26("0x11c")) ? map[_0x3c26("0xd")](_0x3c26("0x11c")) : "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png";
      var urlZoom = map[_0x3c26("0xd")](_0x3c26("0x2d"));
      var savedPropertyName = map.data(_0x3c26("0x39"));
      var data = body;
      if ("streetview" === map[_0x3c26("0xd")]("theme")) {
        var toNop = map[_0x3c26("0xd")](_0x3c26("0x9f"));
        var options = {
          position : {
            lat : Number(matches[0]),
            lng : Number(matches[1])
          },
          pov : toNop,
          zoom : urlZoom,
          gestureHandling : _0x3c26("0x126"),
          scrollwheel : false
        };
        return new (google.maps[_0x3c26("0x110")])(data, options);
      }
      var options = {
        zoom : urlZoom,
        scrollwheel : map[_0x3c26("0xd")]("scrollwheel"),
        center : new (google.maps[_0x3c26("0xda")])(matches[0], matches[1]),
        styles : model[savedPropertyName]
      };
      var view = new (google[_0x3c26("0x111")][_0x3c26("0xb2")])(data, options);
      var winContainer = new (google.maps[_0x3c26("0x108")])({
        content : nirXml
      });
      var TUNNEL_CONNECT = new (google.maps[_0x3c26("0xa9")])({
        position : new (google[_0x3c26("0x111")].LatLng)(matches[0], matches[1]),
        icon : awesomeIcon,
        map : view
      });
      return TUNNEL_CONNECT[_0x3c26("0x77")](_0x3c26("0x105"), function() {
        winContainer.open(view, TUNNEL_CONNECT);
      }), null;
    });
  }
}
$(document).ready(function() {
  if ($(_0x3c26("0x10"))[_0x3c26("0x47")]) {
    var config = {
      set : function(e, key) {
        if ("BUTTON" !== e[_0x3c26("0x62")](_0x3c26("0xf0"))) {
          e[_0x3c26("0x3c")](key);
        } else {
          e.html(key);
        }
      },
      get : function(do_not_create) {
        var to = do_not_create[_0x3c26("0x3c")]();
        return "" === to ? do_not_create[_0x3c26("0x79")]() : to;
      }
    };
    $(_0x3c26("0x10"))[_0x3c26("0x9c")](function(canCreateDiscussions, w) {
      var btn = $(w);
      btn.on(_0x3c26("0x1d"), function(canCreateDiscussions) {
        if (canCreateDiscussions[_0x3c26("0x9b")](), "" !== $(_0x3c26("0x95"))[_0x3c26("0x3c")]()) {
          var start = btn[_0x3c26("0x56")](_0x3c26("0x64"));
          var table = config[_0x3c26("0x30")](start);
          config[_0x3c26("0x25")](start, "Sending...");
          $[_0x3c26("0x45")]({
            type : _0x3c26("0xec"),
            url : "assets/php/form-processor.php",
            data : btn[_0x3c26("0xa6")]()
          })[_0x3c26("0x5f")](function(e) {
            btn.find(_0x3c26("0x21"))[_0x3c26("0x79")](e);
            config.set(start, table);
            window[_0x3c26("0x4e")][_0x3c26("0x106")]();
            btn.trigger("reset");
          }).fail(function(canCreateDiscussions) {
            btn.find(_0x3c26("0x21"))[_0x3c26("0x79")](canCreateDiscussions[_0x3c26("0x18")]);
            config[_0x3c26("0x25")](start, table);
          });
        } else {
          btn[_0x3c26("0x56")](_0x3c26("0x21"))[_0x3c26("0x79")](_0x3c26("0x29"));
        }
      });
    });
  }
}), spUtils[_0x3c26("0xbc")].on(_0x3c26("0x1f"), function() {
  var e = $(_0x3c26("0x52"));
  if (e.length) {
    var settings = {
      SORTABLE : ".sortable",
      SORTABLE_ITEM : _0x3c26("0x6"),
      SORTABLE_CONTAINER : _0x3c26("0xea"),
      MENU : _0x3c26("0xac"),
      ITEM : _0x3c26("0x104")
    };
    var CLASSES = {
      ACTIVE : _0x3c26("0x69")
    };
    var data = {
      OPTIONS : _0x3c26("0x78"),
      FILTER_GROUP : _0x3c26("0x125"),
      FILTER : _0x3c26("0x11e")
    };
    e.each(function(canCreateDiscussions, context) {
      var component = $(context);
      var compute = component[_0x3c26("0x56")](settings[_0x3c26("0xb1")]);
      var jqToggleGT = component[_0x3c26("0x56")](settings[_0x3c26("0xbd")]);
      $(settings[_0x3c26("0xce")])[_0x3c26("0x8e")]().done(function() {
        compute[_0x3c26("0x6c")]($[_0x3c26("0xcb")](component[_0x3c26("0xd")](data[_0x3c26("0x99")]) || {}, {
          itemSelector : settings[_0x3c26("0x1e")],
          masonry : {
            columnWidth : settings[_0x3c26("0x1e")]
          }
        }));
      });
      var temTarget = {};
      jqToggleGT.on(_0x3c26("0x105"), settings.ITEM, function(arrayOfSelects) {
        var validate = $(arrayOfSelects[_0x3c26("0x70")]);
        temTarget[validate[_0x3c26("0x23")]().data(data[_0x3c26("0x61")]) || 0] = validate[_0x3c26("0xd")](data[_0x3c26("0xae")]);
        var target;
        var updatedFilter = (target = temTarget, Object[_0x3c26("0xd5")](target)[_0x3c26("0x103")](function(name) {
          return target[name];
        }).join());
        validate[_0x3c26("0x3d")]()[_0x3c26("0x114")](CLASSES[_0x3c26("0xe8")]);
        validate[_0x3c26("0x3")](CLASSES[_0x3c26("0xe8")]);
        compute[_0x3c26("0x6c")]({
          filter : updatedFilter
        });
      });
    });
  }
}), spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  if ($(_0x3c26("0xd9")).length) {
    lightbox[_0x3c26("0x121")]({
      resizeDuration : 400,
      wrapAround : true,
      fadeDuration : 300,
      imageFadeDuration : 300
    });
  }
});
var $carousel = $(".owl-carousel");
spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  if ($carousel[_0x3c26("0x47")]) {
    var Selector = {
      ALL_TIMELINE : _0x3c26("0xd0"),
      ACTIVE_ITEM : ".owl-item.active"
    };
    var map = {
      zanimTimeline : function(a22) {
        return a22[_0x3c26("0x56")](Selector.ALL_TIMELINE);
      },
      play : function(e) {
        if (0 !== this.zanimTimeline(e).length) {
          e[_0x3c26("0x56")](Selector[_0x3c26("0x42")] + _0x3c26("0x19") + Selector[_0x3c26("0x81")]).zanimation(function(canCreateDiscussions) {
            canCreateDiscussions[_0x3c26("0x5a")]();
          });
        }
      },
      kill : function(sender) {
        if (0 !== this[_0x3c26("0x7f")](sender).length) {
          this[_0x3c26("0x7f")](sender)[_0x3c26("0xa0")](function(canCreateDiscussions) {
            canCreateDiscussions[_0x3c26("0x96")]();
          });
        }
      }
    };
    $carousel[_0x3c26("0x9c")](function(canCreateDiscussions, text) {
      var policy = $(text);
      var useQuery = policy[_0x3c26("0xd")](_0x3c26("0x78")) || {};
      if (spUtils[_0x3c26("0x98")]()) {
        /** @type {boolean} */
        useQuery[_0x3c26("0x0")] = true;
      }
      if (!useQuery[_0x3c26("0xf5")]) {
        /** @type {!Array} */
        useQuery[_0x3c26("0xf5")] = ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'];
      }
      /** @type {boolean} */
      useQuery[_0x3c26("0x8d")] = true;
      policy[_0x3c26("0x7")]($[_0x3c26("0xcb")](useQuery || {}, {
        onInitialized : function(options) {
          map[_0x3c26("0x5a")]($(options[_0x3c26("0x70")]));
        },
        onTranslate : function(x) {
          map[_0x3c26("0x96")]($(x[_0x3c26("0x70")]));
        },
        onTranslated : function(arrayOfSelects) {
          map[_0x3c26("0x5a")]($(arrayOfSelects[_0x3c26("0x70")]));
        }
      }));
    });
  }
}), $[_0x3c26("0x6b")](true), $($(_0x3c26("0x116")))[_0x3c26("0x8e")]()[_0x3c26("0xd2")](function() {
  $[_0x3c26("0x6b")](false);
}), spUtils.$document.ready(function() {
  var preloader = $("#preloader");
  preloader[_0x3c26("0x3")](_0x3c26("0x66"));
  setTimeout(function() {
    preloader[_0x3c26("0xf")]();
  }, 800);
}), spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  var e = {
    PARALLAX : _0x3c26("0xd1")
  };
  if ($(e.PARALLAX)[_0x3c26("0x47")]) {
    if (!(spDetector.isIE || spDetector[_0x3c26("0x27")] || spDetector[_0x3c26("0xc7")])) {
      new Rellax(e[_0x3c26("0x91")], {
        speed : -3
      });
    }
  }
}), spUtils[_0x3c26("0xc6")].ready(function() {
  var $realtime = $(".video-modal");
  if ($realtime[_0x3c26("0x47")]) {
    spUtils[_0x3c26("0xaa")][_0x3c26("0x15")]("\n      <div id='videoModal' class='remodal remodal-video'>\n        <button data-remodal-action='close' class='remodal-close'></button>\n        <div class='embed-responsive embed-responsive-16by9'>\n          <div id='videoModalIframeWrapper'></div>\n        </div>\n      </div>\n    ");
    var s = $(_0x3c26("0x2c"))[_0x3c26("0xbf")]();
    var $this = $(_0x3c26("0x5c"));
    $realtime[_0x3c26("0x9c")](function(canCreateDiscussions, excludeEl) {
      $(excludeEl).on(_0x3c26("0x105"), function(arrayOfSelects) {
        arrayOfSelects[_0x3c26("0x9b")]();
        var $newmsgLink = $(arrayOfSelects[_0x3c26("0x120")]);
        var sepor = $newmsgLink.attr("href")[_0x3c26("0x37")]("/");
        var t = $newmsgLink[_0x3c26("0xd")](_0x3c26("0x1a"));
        var i = $newmsgLink[_0x3c26("0xd")](_0x3c26("0x53"));
        if ("www.youtube.com" === sepor[2]) {
          $this[_0x3c26("0x79")](_0x3c26("0x5") + sepor[3][_0x3c26("0x37")](_0x3c26("0x28"))[1] + _0x3c26("0x2a") + t + _0x3c26("0x32") + i + "' allowfullscreen' frameborder='0' class='embed-responsive-item hide'></iframe>");
        } else {
          if (sepor[2] === _0x3c26("0x49")) {
            $this[_0x3c26("0x79")](_0x3c26("0x11a") + sepor[3] + _0x3c26("0x72"));
          }
        }
        s[_0x3c26("0x31")]();
      });
    });
    spUtils[_0x3c26("0xc6")].on(_0x3c26("0x89"), _0x3c26("0x35"), function(arrayOfSelects) {
      if ("videoModal" === $(arrayOfSelects[_0x3c26("0x120")])[_0x3c26("0x107")]("id")) {
        $this[_0x3c26("0x79")]("");
      }
    });
  }
}), spUtils.$document[_0x3c26("0x115")](function() {
  var $existing_results = $(_0x3c26("0x97"));
  var thread_rows = $(".ui.accordion");
  if ($existing_results.length) {
    $existing_results[_0x3c26("0x55")]();
  }
  if (thread_rows[_0x3c26("0x47")]) {
    thread_rows.each(function(canCreateDiscussions, x) {
      var element = $(x);
      element.accordion($[_0x3c26("0xcb")]({
        exclusive : false
      }, element[_0x3c26("0xd")]("options") || {}));
    });
  }
}), spUtils[_0x3c26("0xc6")].ready(function() {
  var opt_pos;
  var oldScrollWidth;
  var settings = {
    HOME : _0x3c26("0x7e"),
    PAGE : ".page",
    CLOSEAREA : _0x3c26("0x6f"),
    SIDEBARITEM : _0x3c26("0x88"),
    SIDEBAR_ITEM_WRAPPER : _0x3c26("0x102"),
    BASECONTENT : _0x3c26("0xf4"),
    GRIDNAV : _0x3c26("0x51"),
    PAGETITLE : _0x3c26("0x8a"),
    CLOSEBUTTON : _0x3c26("0xe5"),
    SORTABLEMENU : _0x3c26("0x11b"),
    ITEM : ".item",
    ACTIVE : _0x3c26("0xb8"),
    SORTABLECONTAINER : _0x3c26("0xea"),
    DOCUMENTNAV : _0x3c26("0xa4")
  };
  var shapes = {
    CONTENT : "content"
  };
  var $btr = $(settings[_0x3c26("0xc0")]);
  var $item = $(settings[_0x3c26("0x119")]);
  var $option = $(settings[_0x3c26("0x8c")]);
  var o = window[_0x3c26("0xe1")];
  var history = window[_0x3c26("0x4d")];
  /** @type {!Array} */
  var display = [];
  var eName = spDetector[_0x3c26("0xfc")] ? _0x3c26("0xb4") : "click";
  if ($item[_0x3c26("0x47")]) {
    oldScrollWidth = spUtils[_0x3c26("0xd8")][$item.attr("class")[_0x3c26("0x37")](" ")[_0x3c26("0x11e")](function(boardNameToTest) {
      return boardNameToTest.indexOf("w-");
    })[_0x3c26("0xe2")]().split("-")[1]];
  }
  var $realtime = $(_0x3c26("0x7d"));
  $(settings.SIDEBAR_ITEM_WRAPPER)[_0x3c26("0x9c")](function(canCreateDiscussions, templateName) {
    var body = $(templateName);
    display.push(body.data(shapes[_0x3c26("0xdd")]));
  });
  /**
   * @param {string} num
   * @return {undefined}
   */
  var load = function(num) {
    var software_button_disabled;
    var stringOrNumberPropType = spUtils[_0x3c26("0xbc")][_0x3c26("0x11f")]() < oldScrollWidth ? _0x3c26("0xaf") : _0x3c26("0x86");
    if ($item[_0x3c26("0xb3")]({
      left : stringOrNumberPropType
    }), $btr.css({
      right : stringOrNumberPropType
    }), num) {
      var $existing_results = $("#" + num + _0x3c26("0x82"));
      var $realtime = $("#" + num + _0x3c26("0xf8"));
      $(settings[_0x3c26("0xa8")])[_0x3c26("0x14")](_0x3c26("0xfa"));
      $("#" + num)[_0x3c26("0x1")](_0x3c26("0xfa"));
      $(settings[_0x3c26("0x76")])[_0x3c26("0x1")](_0x3c26("0xdb"));
      if ($existing_results.length) {
        $(settings[_0x3c26("0x9a")])[_0x3c26("0x56")](settings.ACTIVE)[_0x3c26("0x114")]("active");
        $(settings[_0x3c26("0x9a")])[_0x3c26("0x56")](settings.ITEM)[_0x3c26("0x9")]()[_0x3c26("0x3")]("active");
        setTimeout(function() {
          $(settings[_0x3c26("0xab")]).isotope({
            filter : "*"
          });
        }, 300);
      }
      if ($realtime[_0x3c26("0x47")]) {
        if (void 0 === (software_button_disabled = false)) {
          /** @type {boolean} */
          software_button_disabled = false;
        }
        if ($realtime[_0x3c26("0x47")]) {
          $realtime[_0x3c26("0x9c")](function(canCreateDiscussions, x) {
            var a = $(x);
            var disabled = software_button_disabled;
            var i = a.attr(_0x3c26("0xdf"));
            /**
             * @return {undefined}
             */
            var start = function() {
              $({
                countNum : 0
              }).animate({
                countNum : i
              }, {
                duration : 2E3,
                easing : _0x3c26("0xe4"),
                step : function() {
                  a[_0x3c26("0x3b")](Math[_0x3c26("0xa1")](this.countNum));
                },
                complete : function() {
                  a[_0x3c26("0x3b")](this[_0x3c26("0xe0")]);
                }
              });
            };
            start();
            spUtils[_0x3c26("0xbc")].on(_0x3c26("0xbe"), function() {
              if (!disabled && spUtils[_0x3c26("0xdc")](a)) {
                start();
                /** @type {boolean} */
                disabled = true;
              }
            });
          });
        }
      }
      setTimeout(function() {
        if (spUtils[_0x3c26("0xbc")][_0x3c26("0x11f")]() < oldScrollWidth) {
          $option[_0x3c26("0xb3")](_0x3c26("0xc9"), _0x3c26("0x126"));
          if (-1 < $.inArray(window[_0x3c26("0xe1")][_0x3c26("0x68")][_0x3c26("0x101")](1), display)) {
            $(window)[_0x3c26("0xc5")](0);
          }
        }
        /** @type {boolean} */
        opt_pos = false;
      }, 500);
    }
  };
  /**
   * @return {undefined}
   */
  var iPadScrollFix = function() {
    /** @type {boolean} */
    opt_pos = true;
    if (spUtils[_0x3c26("0xbc")][_0x3c26("0x11f")]() < oldScrollWidth) {
      $option[_0x3c26("0xb3")](_0x3c26("0xc9"), _0x3c26("0x7b"));
      setTimeout(function() {
        $btr[_0x3c26("0xb3")](_0x3c26("0x109"), 0);
        $item.css(_0x3c26("0xcf"), 0);
        $(settings.PAGE)[_0x3c26("0x14")]();
      }, 100);
    } else {
      $item[_0x3c26("0xb3")]({
        left : 0
      });
      $btr.css({
        right : 0
      });
      $(settings.PAGE).fadeOut();
    }
  };
  !function() {
    var url;
    var selected = window[_0x3c26("0xe1")][_0x3c26("0x68")];
    if (document[_0x3c26("0xca")](selected[_0x3c26("0x101")](1)) && (url = $(selected).closest(_0x3c26("0xd3")).attr("id")), -1 < $.inArray(selected.substr(1), display)) {
      load(selected[_0x3c26("0x101")](1));
    } else {
      if (-1 < $[_0x3c26("0x43")](url, display)) {
        load(url);
      } else {
        iPadScrollFix();
        o[_0x3c26("0x5e")]("#");
        var url = o[_0x3c26("0x34")];
        if (-1 < url.lastIndexOf("#")) {
          url = url[_0x3c26("0x117")](0, -1);
        }
        history[_0x3c26("0xad")]({}, "", url);
      }
    }
  }();
  spUtils[_0x3c26("0xc6")].on(eName, settings.SIDEBAR_ITEM_WRAPPER, function(arrayOfSelects) {
    var self = $(arrayOfSelects[_0x3c26("0x70")]);
    /** @type {string} */
    var c = "";
    if (self[_0x3c26("0x4a")](settings[_0x3c26("0x93")]).data(shapes.CONTENT)) {
      c = self.closest(settings[_0x3c26("0x93")])[_0x3c26("0xd")](shapes[_0x3c26("0xdd")]);
    }
    window[_0x3c26("0xe1")][_0x3c26("0x68")] = c;
  });
  spUtils[_0x3c26("0xc6")].on(eName, settings[_0x3c26("0xee")], function() {
    /** @type {string} */
    window[_0x3c26("0xe1")].hash = "";
    var url = o.href;
    if (-1 < url[_0x3c26("0xa")]("#")) {
      url = url[_0x3c26("0x117")](0, -1);
    }
    history.replaceState({}, "", url);
    iPadScrollFix();
  });
  /**
   * @return {undefined}
   */
  window[_0x3c26("0x63")] = function() {
    var value;
    var $this = window[_0x3c26("0xe1")][_0x3c26("0x34")];
    var lingerElement = window.location[_0x3c26("0x68")];
    if (document.getElementById(lingerElement[_0x3c26("0x101")](1))) {
      value = $(lingerElement).closest(_0x3c26("0xd3"))[_0x3c26("0x107")]("id");
    }
    var safeName = $(_0x3c26("0x67"))[_0x3c26("0x107")]("id");
    if (-1 < $[_0x3c26("0x43")](window[_0x3c26("0xe1")][_0x3c26("0x68")][_0x3c26("0x101")](1), display)) {
      load(window[_0x3c26("0xe1")][_0x3c26("0x68")][_0x3c26("0x101")](1));
    } else {
      if (-1 < $[_0x3c26("0x43")](value, display)) {
        if (safeName !== value) {
          load(value);
          $("html, body")[_0x3c26("0x2f")]({
            scrollTop : $(lingerElement)[_0x3c26("0x7a")]()[_0x3c26("0xf1")] - 30
          }, 100);
        }
      } else {
        if ($this[_0x3c26("0xa")]("#") < 0 && "" === window[_0x3c26("0xe1")][_0x3c26("0x68")]) {
          iPadScrollFix();
        }
      }
    }
  };
  spUtils[_0x3c26("0xbc")].on(_0x3c26("0xef"), function() {
    if (spUtils[_0x3c26("0xbc")].width() < oldScrollWidth && !opt_pos) {
      $option[_0x3c26("0xb3")](_0x3c26("0xc9"), _0x3c26("0x126"));
      $item[_0x3c26("0xb3")]({
        left : "-100%"
      });
      $btr.css({
        right : "-100%"
      });
    } else {
      $option[_0x3c26("0xb3")]("display", _0x3c26("0x7b"));
    }
  });
}), spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  Stickyfill.add($(_0x3c26("0x12")));
}), spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  var $existing_results = $(_0x3c26("0xfd"));
  if ($existing_results.length) {
    $existing_results[_0x3c26("0x9c")](function(canCreateDiscussions, x) {
      $(x).stick_in_parent();
    });
  }
}), spUtils[_0x3c26("0xc6")][_0x3c26("0x115")](function() {
  var items = {
    BG_YOUTUBE : ".bg-youtube",
    BG_HOLDER : ".bg-holder"
  };
  var args = {
    PROPERTY : _0x3c26("0x71")
  };
  var $realtime = $(items[_0x3c26("0x50")]);
  if ($realtime[_0x3c26("0x47")]) {
    $realtime[_0x3c26("0x9c")](function(canCreateDiscussions, elem) {
      var self = $(elem);
      self.data(args[_0x3c26("0x8b")], $[_0x3c26("0xcb")](self[_0x3c26("0xd")](args[_0x3c26("0x8b")]), {
        showControls : false,
        loop : true,
        autoPlay : true,
        mute : true,
        containment : self[_0x3c26("0x23")](items[_0x3c26("0x36")])
      }));
      self[_0x3c26("0x4c")]();
    });
  }
});
