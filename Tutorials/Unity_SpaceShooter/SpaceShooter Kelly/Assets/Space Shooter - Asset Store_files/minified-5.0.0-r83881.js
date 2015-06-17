jQuery.cookie = function(g, h, a) {
  if(typeof h != "undefined" || g && typeof g != "string") {
    if(typeof g == "string") {
      a = a || {};
      if(h === null) {
        h = "", a.expires = -1
      }
      var d = "";
      if(a.expires && (typeof a.expires == "number" || a.expires.toUTCString)) {
        typeof a.expires == "number" ? (d = new Date, d.setTime(d.getTime() + a.expires * 864E5)) : d = a.expires, d = "; expires=" + d.toUTCString()
      }
      var c = a.path ? "; path=" + a.path : "", e = a.domain ? "; domain=" + a.domain : "", a = a.secure ? "; secure" : "";
      document.cookie = g + "=" + encodeURIComponent(h) + d + c + e + a
    }else {
      for(d in g) {
        jQuery.cookie(d, g[d], h || a)
      }
    }
  }else {
    h = {};
    if(document.cookie) {
      a = document.cookie.split(";");
      for(d = 0;d < a.length;d++) {
        if(c = jQuery.trim(a[d]), g) {
          if(c.substr(0, g.length + 1) == g + "=") {
            h = decodeURIComponent(c.substr(g.length + 1));
            break
          }
        }else {
          e = c.indexOf("="), h[c.substr(0, e)] = decodeURIComponent(c.substr(e + 1))
        }
      }
    }
    return h
  }
};
(function(g) {
  g.address = function() {
    var h = function(a) {
      a = g.extend(g.Event(a), function() {
        for(var a = {}, b = g.address.parameterNames(), c = 0, d = b.length;c < d;c++) {
          a[b[c]] = g.address.parameter(b[c])
        }
        return{value:g.address.value(), path:g.address.path(), pathNames:g.address.pathNames(), parameterNames:b, parameters:a, queryString:g.address.queryString()}
      }.call(g.address));
      g(g.address).trigger(a);
      return a
    }, a = function(a) {
      return Array.prototype.slice.call(a)
    }, d = function() {
      g().bind.apply(g(g.address), Array.prototype.slice.call(arguments));
      return g.address
    }, c = function() {
      g().unbind.apply(g(g.address), Array.prototype.slice.call(arguments));
      return g.address
    }, e = function() {
      return M.pushState && w.state !== q
    }, b = function() {
      return("/" + D.pathname.replace(RegExp(w.state), "") + D.search + (f() ? "#!" + f() : "")).replace(O, "/")
    }, f = function() {
      var a = D.href.indexOf("#!");
      return a != -1 ? D.href.substr(a + 2) : ""
    }, i = function() {
      return e() ? b() : f()
    }, m = function() {
      try {
        return top.document !== q && top.document.title !== q && top.jQuery !== q && top.jQuery.address !== q && top.jQuery.address.frames() !== !1 ? top : window
      }catch(a) {
        return window
      }
    }, j = function(a) {
      a = a.toString();
      return(w.strict && a.substr(0, 1) != "/" ? "/" : "") + a
    }, k = function(a, b) {
      return parseInt(a.css(b), 10)
    }, n = function() {
      if(/^#/.test(D.hash) && !/^#!/.test(D.hash)) {
        D.hash = D.hash.replace("#", "#!")
      }
      if(!R) {
        var a = i();
        decodeURI(F) != decodeURI(a) && (K && G < 7 ? D.reload() : (K && !N && w.history && L(p, 50), F = a, l(u)))
      }
    }, l = function(a) {
      L(o, 10);
      return h(x).isDefaultPrevented() || h(a ? A : z).isDefaultPrevented()
    }, o = function() {
      if(w.tracker !== "null" && w.tracker !== v) {
        var a = g.isFunction(w.tracker) ? w.tracker : B[w.tracker], b = (D.pathname + D.search + (g.address && !e() ? g.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
        g.isFunction(a) ? a(b) : g.isFunction(B.urchinTracker) ? B.urchinTracker(b) : B.pageTracker !== q && g.isFunction(B.pageTracker._trackPageview) ? B.pageTracker._trackPageview(b) : B._gaq !== q && g.isFunction(B._gaq.push) && B._gaq.push(["_trackPageview", decodeURI(b)])
      }
    }, p = function() {
      var a = "javascript:" + u + ";document.open();document.writeln('<html><head><title>" + H.title.replace(/\'/g, "\\'") + "</title><script>var " + t + ' = "' + encodeURIComponent(i()).replace(/\'/g, "\\'") + (H.domain != D.hostname ? '";document.domain="' + H.domain : "") + "\";<\/script></head></html>');document.close();";
      G < 7 ? E.src = a : E.contentWindow.location.replace(a)
    }, r = function() {
      if(P && U != -1) {
        var a, b, c = P.substr(U + 1).split("&");
        for(a = 0;a < c.length;a++) {
          b = c[a].split("="), /^(autoUpdate|history|strict|wrap)$/.test(b[0]) && (w[b[0]] = isNaN(b[1]) ? /^(true|yes)$/i.test(b[1]) : parseInt(b[1], 10) !== 0), /^(state|tracker)$/.test(b[0]) && (w[b[0]] = b[1])
        }
        P = v
      }
      F = i()
    }, s = function() {
      if(!V) {
        V = C;
        r();
        g('a[rel*="address:"]').address();
        if(w.wrap) {
          var a = g("body");
          g("body > *").wrapAll('<div style="padding:' + (k(a, "marginTop") + k(a, "paddingTop")) + "px " + (k(a, "marginRight") + k(a, "paddingRight")) + "px " + (k(a, "marginBottom") + k(a, "paddingBottom")) + "px " + (k(a, "marginLeft") + k(a, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + t + '" style="height:100%;overflow:auto;position:relative;' + (I && !window.statusbar.visible ? "resize:both;" : "") + '" />');
          g("html, body").css({height:"100%", margin:0, padding:0, overflow:"hidden"});
          I && g('<style type="text/css" />').appendTo("head").text("#" + t + "::-webkit-resizer { background-color: #fff; }")
        }
        if(K && !N) {
          a = H.getElementsByTagName("frameset")[0], E = H.createElement((a ? "" : "i") + "frame"), E.src = "javascript:" + u, a ? (a.insertAdjacentElement("beforeEnd", E), a[a.cols ? "cols" : "rows"] += ",0", E.noResize = C, E.frameBorder = E.frameSpacing = 0) : (E.style.display = "none", E.style.width = E.style.height = 0, E.tabIndex = -1, H.body.insertAdjacentElement("afterBegin", E)), L(function() {
            g(E).bind("load", function() {
              var a = E.contentWindow;
              F = a[t] !== q ? a[t] : "";
              if(F != i()) {
                l(u), D.hash = F
              }
            });
            E.contentWindow[t] === q && p()
          }, 50)
        }
        L(function() {
          h("init");
          l(u)
        }, 1);
        e() || (K && G > 7 || !K && N ? B.addEventListener ? B.addEventListener(y, n, u) : B.attachEvent && B.attachEvent("on" + y, n) : Q(n, 50));
        "state" in window.history && g(window).trigger("popstate")
      }
    }, q, v = null, t = "jQueryAddress", y = "hashchange", x = "change", A = "internalChange", z = "externalChange", C = !0, u = !1, w = {autoUpdate:C, history:C, strict:C, frames:C, wrap:u}, J = function() {
      var a = {}, b;
      b = navigator.userAgent;
      b = b.toLowerCase();
      b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
      b = {browser:b[1] || "", version:b[2] || "0"};
      if(b.browser) {
        a[b.browser] = !0, a.version = b.version
      }
      if(a.chrome) {
        a.webkit = !0
      }else {
        if(a.webkit) {
          a.safari = !0
        }
      }
      return a
    }(), G = parseFloat(J.version), I = J.webkit || J.safari, K = !g.support.opacity, B = m(), H = B.document, M = B.history, D = B.location, Q = setInterval, L = setTimeout, O = /\/{2,9}/g, J = navigator.userAgent, N = "on" + y in B, E, P = g("script:last").attr("src"), U = P ? P.indexOf("?") : -1, T = H.title, R = u, V = u, W = C, S = u, F = i();
    if(D.hash && /^#/.test(D.hash) && !/^#!/.test(D.hash)) {
      D.hash = D.hash.replace("#", "#!")
    }
    if(K) {
      G = parseFloat(J.substr(J.indexOf("MSIE") + 4));
      H.documentMode && H.documentMode != G && (G = H.documentMode != 8 ? 7 : 8);
      var X = H.onpropertychange;
      H.onpropertychange = function() {
        X && X.call(H);
        if(H.title != T && H.title.indexOf("#!" + i()) != -1) {
          H.title = T
        }
      }
    }
    if(M.navigationMode) {
      M.navigationMode = "compatible"
    }
    if(document.readyState == "complete") {
      var Y = setInterval(function() {
        g.address && (s(), clearInterval(Y))
      }, 50)
    }else {
      r(), g(s)
    }
    g(window).bind("popstate", function() {
      decodeURI(F) != decodeURI(i()) && (F = i(), l(u))
    }).bind("unload", function() {
      B.removeEventListener ? B.removeEventListener(y, n, u) : B.detachEvent && B.detachEvent("on" + y, n)
    });
    return{bind:function() {
      return d.apply(this, a(arguments))
    }, unbind:function() {
      return c.apply(this, a(arguments))
    }, init:function() {
      return d.apply(this, ["init"].concat(a(arguments)))
    }, change:function() {
      return d.apply(this, [x].concat(a(arguments)))
    }, internalChange:function() {
      return d.apply(this, [A].concat(a(arguments)))
    }, externalChange:function() {
      return d.apply(this, [z].concat(a(arguments)))
    }, baseURL:function() {
      var a = D.href;
      a.indexOf("#!") != -1 && (a = a.substr(0, a.indexOf("#!") + 1));
      /\/$/.test(a) && (a = a.substr(0, a.length - 1));
      return a
    }, autoUpdate:function(a) {
      if(a !== q) {
        return w.autoUpdate = a, this
      }
      return w.autoUpdate
    }, history:function(a) {
      if(a !== q) {
        return w.history = a, this
      }
      return w.history
    }, state:function(a) {
      if(a !== q) {
        w.state = a;
        var c = b();
        w.state !== q && (M.pushState ? c.substr(0, 4) == "/#!/" && D.replace(w.state.replace(/^\/$/, "") + c.substr(2)) : c != "/" && c.replace(/^\/#!/, "") != f() && L(function() {
          D.replace(w.state.replace(/^\/$/, "") + "/#!" + c)
        }, 1));
        return this
      }
      return w.state
    }, frames:function(a) {
      if(a !== q) {
        return w.frames = a, B = m(), this
      }
      return w.frames
    }, strict:function(a) {
      if(a !== q) {
        return w.strict = a, this
      }
      return w.strict
    }, tracker:function(a) {
      if(a !== q) {
        return w.tracker = a, this
      }
      return w.tracker
    }, wrap:function(a) {
      if(a !== q) {
        return w.wrap = a, this
      }
      return w.wrap
    }, update:function() {
      S = C;
      this.value(F);
      S = u;
      return this
    }, title:function(a) {
      if(a !== q) {
        return L(function() {
          T = H.title = a;
          if(W && E && E.contentWindow && E.contentWindow.document) {
            E.contentWindow.document.title = a, W = u
          }
        }, 50), this
      }
      return H.title
    }, value:function(a) {
      if(a !== q) {
        a = j(a);
        a == "/" && (a = "");
        if(F == a && !S) {
          return
        }
        F = a;
        if(w.autoUpdate || S) {
          if(l(C)) {
            return this
          }
          if(e()) {
            M[w.history ? "pushState" : "replaceState"]({}, "", w.state.replace(/\/$/, "") + (F === "" ? "/" : F))
          }else {
            R = C;
            if(I) {
              w.history ? D.hash = "#!" + F : D.replace("#!" + F)
            }else {
              if(F != i()) {
                w.history ? D.hash = "#!" + F : D.replace("#!" + F)
              }
            }
            K && !N && w.history && L(p, 50);
            I ? L(function() {
              R = u
            }, 1) : R = u
          }
        }
        return this
      }
      return j(F)
    }, path:function(a) {
      if(a !== q) {
        var b = this.queryString(), c = this.hash();
        this.value(a + (b ? "?" + b : "") + (c ? "#!" + c : ""));
        return this
      }
      return j(F).split("#!")[0].split("?")[0]
    }, pathNames:function() {
      var a = this.path(), b = a.replace(O, "/").split("/");
      (a.substr(0, 1) == "/" || a.length === 0) && b.splice(0, 1);
      a.substr(a.length - 1, 1) == "/" && b.splice(b.length - 1, 1);
      return b
    }, queryString:function(a) {
      if(a !== q) {
        var b = this.hash();
        this.value(this.path() + (a ? "?" + a : "") + (b ? "#!" + b : ""));
        return this
      }
      a = F.split("?");
      return a.slice(1, a.length).join("?").split("#!")[0]
    }, parameter:function(a, b, c) {
      var d, e;
      if(b !== q) {
        var f = this.parameterNames();
        e = [];
        b = b === q || b === v ? "" : b.toString();
        for(d = 0;d < f.length;d++) {
          var i = f[d], h = this.parameter(i);
          typeof h == "string" && (h = [h]);
          i == a && (h = b === v || b === "" ? [] : c ? h.concat([b]) : [b]);
          for(var m = 0;m < h.length;m++) {
            e.push(i + "=" + h[m])
          }
        }
        g.inArray(a, f) == -1 && b !== v && b !== "" && e.push(a + "=" + b);
        this.queryString(e.join("&"));
        return this
      }
      if(b = this.queryString()) {
        c = [];
        e = b.split("&");
        for(d = 0;d < e.length;d++) {
          b = e[d].split("="), b[0] == a && c.push(b.slice(1).join("="))
        }
        if(c.length !== 0) {
          return c.length != 1 ? c : c[0]
        }
      }
    }, parameterNames:function() {
      var a = this.queryString(), b = [];
      if(a && a.indexOf("=") != -1) {
        for(var a = a.split("&"), c = 0;c < a.length;c++) {
          var d = a[c].split("=")[0];
          g.inArray(d, b) == -1 && b.push(d)
        }
      }
      return b
    }, hash:function(a) {
      if(a !== q) {
        return this.value(F.split("#!")[0] + (a ? "#!" + a : "")), this
      }
      a = F.split("#!");
      return a.slice(1, a.length).join("#!")
    }}
  }();
  g.fn.address = function(h) {
    g(this).each(function() {
      g(this).data("address") || g(this).on("click", function(a) {
        if(a.shiftKey || a.ctrlKey || a.metaKey || a.which == 2) {
          return!0
        }
        var d = a.currentTarget;
        g(d).is("a") && (a.preventDefault(), a = h ? h.call(d) : /address:/.test(g(d).attr("rel")) ? g(d).attr("rel").split("address:")[1].split(" ")[0] : g.address.state() !== void 0 && !/^\/?$/.test(g.address.state()) ? g(d).attr("href").replace(RegExp("^(.*" + g.address.state() + "|\\.)"), "") : g(d).attr("href").replace(/^(#\!?|\.)/, ""), g.address.value(a))
      }).on("submit", function(a) {
        var d = a.currentTarget;
        g(d).is("form") && (a.preventDefault(), a = g(d).attr("action"), d = h ? h.call(d) : (a.indexOf("?") != -1 ? a.replace(/&$/, "") : a + "?") + g(d).serialize(), g.address.value(d))
      }).data("address", !0)
    });
    return this
  }
})(jQuery);
$(function() {
  $.fn.paginate = function(g) {
    var h = $.extend({}, {current_page:1, entries_on_this_page:0, entries_per_page:12, first:0, first_page:1, last:0, last_page:1, total_entries:0, onclick:null, pageButtons:25}, g);
    this.each(function(a, d) {
      var c = $(d), e, b, f, i, g, j, k, n;
      k = h.current_page - 1 < h.first_page ? h.first_page : h.current_page - 1;
      n = h.current_page + 1 >= h.last_page - 1 ? h.last_page : h.current_page + 1;
      c.is(".paginated") ? (e = $(".desc"), b = $(".first"), f = $(".prev"), g = $(".next"), j = $(".last"), i = $(".pages"), i.empty(), b.unbind(), f.unbind(), g.unbind(), j.unbind(), h.onclick != null && (b.click(function() {
        h.onclick(h.first_page)
      }), f.click(function() {
        h.onclick(k)
      }), g.click(function() {
        h.onclick(n)
      }), j.click(function() {
        h.onclick(h.last_page)
      }))) : (e = $("<span class='desc' />"), b = $("<a class='first'>|&lt;</a>"), f = $("<a class='prev'>&lt;</a>"), i = $("<span class='pages' />"), g = $("<a class='next'>&gt;</a>"), j = $("<a class='last'>&gt;|</a>"), h.onclick != null && (b.click(function() {
        h.onclick(h.first_page)
      }), f.click(function() {
        h.onclick(k)
      }), g.click(function() {
        h.onclick(n)
      }), j.click(function() {
        h.onclick(h.last_page)
      })), c.append(e), c.append(b), c.append(f), c.append(i), c.append(g), c.append(j), c.addClass("paginated"));
      var c = h.pageButtons <= h.last_page ? h.pageButtons : h.last_page, l = h.current_page - c / 2, l = Math.ceil(l);
      if(l <= h.first_page) {
        l = h.first_page
      }
      l + c > h.last_page && (l = h.last_page - c + 1);
      for(var o = l = l <= h.last_page ? l : h.last_page - c;o < l + c;o++) {
        var p = o, r = $('<a data-page="' + p + '" class="paginglink pagego">' + p + "</a>");
        p == h.current_page && r.addClass("toggled");
        h.onclick != null && function() {
          var a = p;
          r.click(function() {
            h.onclick(a)
          })
        }();
        i.append(r)
      }
      h.first_page == h.last_page ? (b.hide(), f.hide(), i.hide(), g.hide(), j.hide()) : (b.show(), f.show(), i.show(), g.show(), j.show());
      e.html(h.first + " - " + h.last + " of " + h.total_entries)
    })
  }
});
jQuery && function(g) {
  g.extend(g.fn, {selectBox:function(h, a) {
    var d, c = "", e = function(a, c) {
      if(navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        return!1
      }
      if(a.tagName.toLowerCase() !== "select") {
        return!1
      }
      a = g(a);
      if(a.data("selectBox-control")) {
        return!1
      }
      var d = g('<a class="selectBox" />'), e = a.attr("multiple") || parseInt(a.attr("size")) > 1, h = c || {};
      if(h.autoWidth === void 0) {
        h.autoWidth = !0
      }
      d.addClass(a.attr("class")).attr("style", a.attr("style") || "").attr("title", a.attr("title") || "").attr("tabindex", parseInt(a.attr("tabindex"))).css("display", "inline-block").bind("focus.selectBox", function() {
        this !== document.activeElement && g(document.activeElement).blur();
        d.hasClass("selectBox-active") || (d.addClass("selectBox-active"), a.trigger("focus"))
      }).bind("blur.selectBox", function() {
        d.hasClass("selectBox-active") && (d.removeClass("selectBox-active"), a.trigger("blur"))
      });
      a.attr("disabled") && d.addClass("selectBox-disabled");
      if(e) {
        var m = b(a, "inline");
        d.append(m).data("selectBox-options", m).addClass("selectBox-inline").addClass("selectBox-menuShowing").bind("keydown.selectBox", function(b) {
          l(a, b)
        }).bind("keypress.selectBox", function(b) {
          o(a, b)
        }).bind("mousedown.selectBox", function(a) {
          g(a.target).is("A.selectBox-inline") && a.preventDefault();
          d.hasClass("selectBox-focus") || d.focus()
        }).insertAfter(a);
        if(!a[0].style.height) {
          var e = a.attr("size") ? parseInt(a.attr("size")) : 5, j = d.clone().removeAttr("id").css({position:"absolute", top:"-9999em"}).show().appendTo("body");
          j.find(".selectBox-options").html("<li><a>\u00a0</a></li>");
          optionHeight = parseInt(j.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
          j.remove();
          d.height(optionHeight * e)
        }
      }else {
        e = g('<span class="selectBox-label" />'), j = g('<span class="selectBox-arrow" />'), e.text(g(a).find("OPTION:selected").text() || "\u00a0"), m = b(a, "dropdown"), m.appendTo("BODY"), d.data("selectBox-options", m).addClass("selectBox-dropdown").append(e).append(j).bind("mousedown.selectBox", function(b) {
          d.hasClass("selectBox-menuShowing") ? i() : (b.stopPropagation(), m.data("selectBox-down-at-x", b.screenX).data("selectBox-down-at-y", b.screenY), f(a))
        }).bind("keydown.selectBox", function(b) {
          l(a, b)
        }).bind("keypress.selectBox", function(b) {
          o(a, b)
        }).insertAfter(a)
      }
      r(d);
      a.addClass("selectBox").data("selectBox-control", d).data("selectBox-settings", h).hide()
    }, b = function(a, b) {
      var c;
      switch(b) {
        case "inline":
          return c = g('<ul class="selectBox-options" />'), a.find("OPTGROUP").length ? a.find("OPTGROUP").each(function() {
            var a = g('<li class="selectBox-optgroup" />');
            a.text(g(this).attr("label"));
            c.append(a);
            g(this).find("OPTION").each(function() {
              var a = g("<li />"), b = g("<a />");
              a.addClass(g(this).attr("class"));
              b.attr("rel", g(this).val()).text(g(this).text());
              a.append(b);
              g(this).attr("disabled") && a.addClass("selectBox-disabled");
              g(this).attr("selected") && a.addClass("selectBox-selected");
              c.append(a)
            })
          }) : a.find("OPTION").each(function() {
            var a = g("<li />"), b = g("<a />");
            a.addClass(g(this).attr("class"));
            b.attr("rel", g(this).val()).text(g(this).text());
            a.append(b);
            g(this).attr("disabled") && a.addClass("selectBox-disabled");
            g(this).attr("selected") && a.addClass("selectBox-selected");
            c.append(a)
          }), c.find("A").bind("mouseover.selectBox", function() {
            j(a, g(this).parent())
          }).bind("mouseout.selectBox", function() {
            k(a, g(this).parent())
          }).bind("mousedown.selectBox", function(b) {
            b.preventDefault();
            a.selectBox("control").hasClass("selectBox-active") || a.selectBox("control").focus()
          }).bind("mouseup.selectBox", function(b) {
            i();
            m(a, g(this).parent(), b)
          }), r(c), c;
        case "dropdown":
          return c = g('<ul class="selectBox-dropdown-menu selectBox-options" />'), a.find("OPTGROUP").length ? a.find("OPTGROUP").each(function() {
            var a = g('<li class="selectBox-optgroup" />');
            a.text(g(this).attr("label"));
            c.append(a);
            g(this).find("OPTION").each(function() {
              var a = g("<li />"), b = g("<a />");
              a.addClass(g(this).attr("class"));
              b.attr("rel", g(this).val()).text(g(this).text());
              a.append(b);
              g(this).attr("disabled") && a.addClass("selectBox-disabled");
              g(this).attr("selected") && a.addClass("selectBox-selected");
              c.append(a)
            })
          }) : a.find("OPTION").length > 0 ? a.find("OPTION").each(function() {
            var a = g("<li />"), b = g("<a />");
            a.addClass(g(this).attr("class"));
            b.attr("rel", g(this).val()).text(g(this).text());
            a.append(b);
            g(this).attr("disabled") && a.addClass("selectBox-disabled");
            g(this).attr("selected") && a.addClass("selectBox-selected");
            c.append(a)
          }) : c.append("<li>\u00a0</li>"), c.data("selectBox-select", a).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function(a) {
            a.preventDefault();
            a.screenX === c.data("selectBox-down-at-x") && a.screenY === c.data("selectBox-down-at-y") && (c.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), i())
          }).bind("mouseup.selectBox", function(b) {
            b.screenX === c.data("selectBox-down-at-x") && b.screenY === c.data("selectBox-down-at-y") || (c.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), m(a, g(this).parent()), i())
          }).bind("mouseover.selectBox", function() {
            j(a, g(this).parent())
          }).bind("mouseout.selectBox", function() {
            k(a, g(this).parent())
          }), r(c), c
      }
    }, f = function(a) {
      var a = g(a), b = a.data("selectBox-control"), c = a.data("selectBox-settings") || {}, d = b.data("selectBox-options");
      if(b.hasClass("selectBox-disabled")) {
        return!1
      }
      i();
      c.autoWidth ? d.css("width", b.innerWidth()) : d.innerWidth() < b.innerWidth() && d.css("width", b.innerWidth() - parseInt(d.css("padding-left")) - parseInt(d.css("padding-right")));
      d.css({top:b.offset().top + b.outerHeight() - parseInt(b.css("borderBottomWidth")), left:b.offset().left});
      switch(c.menuTransition) {
        case "fade":
          d.fadeIn(c.menuSpeed);
          break;
        case "slide":
          d.slideDown(c.menuSpeed);
          break;
        default:
          d.show(c.menuSpeed)
      }
      c = d.find(".selectBox-selected:first");
      n(a, c, !0);
      j(a, c);
      b.addClass("selectBox-menuShowing");
      g(document).bind("mousedown.selectBox", function(a) {
        g(a.target).parents().andSelf().hasClass("selectBox-options") || i()
      })
    }, i = function() {
      g(".selectBox-dropdown-menu").length !== 0 && (g(document).unbind("mousedown.selectBox"), g(".selectBox-dropdown-menu").each(function() {
        var a = g(this), b = a.data("selectBox-select"), c = b.data("selectBox-control"), b = b.data("selectBox-settings") || {};
        switch(b.menuTransition) {
          case "fade":
            a.fadeOut(b.menuSpeed);
            break;
          case "slide":
            a.slideUp(b.menuSpeed);
            break;
          default:
            a.hide(b.menuSpeed)
        }
        c && c.removeClass("selectBox-menuShowing")
      }))
    }, m = function(a, b, c) {
      var a = g(a), b = g(b), d = a.data("selectBox-control");
      a.data("selectBox-settings");
      if(d.hasClass("selectBox-disabled")) {
        return!1
      }
      if(b.length === 0 || b.hasClass("selectBox-disabled")) {
        return!1
      }
      a.attr("multiple") ? c.shiftKey && d.data("selectBox-last-selected") ? (b.toggleClass("selectBox-selected"), c = b.index() > d.data("selectBox-last-selected").index() ? b.siblings().slice(d.data("selectBox-last-selected").index(), b.index()) : b.siblings().slice(b.index(), d.data("selectBox-last-selected").index()), c = c.not(".selectBox-optgroup, .selectBox-disabled"), b.hasClass("selectBox-selected") ? c.addClass("selectBox-selected") : c.removeClass("selectBox-selected")) : c.metaKey ? b.toggleClass("selectBox-selected") : 
      (b.siblings().removeClass("selectBox-selected"), b.addClass("selectBox-selected")) : (b.siblings().removeClass("selectBox-selected"), b.addClass("selectBox-selected"));
      d.hasClass("selectBox-dropdown") && d.find(".selectBox-label").text(b.text());
      var e = 0, f = [];
      a.attr("multiple") ? d.find(".selectBox-selected A").each(function() {
        f[e++] = g(this).attr("rel")
      }) : f = b.find("A").attr("rel");
      d.data("selectBox-last-selected", b);
      a.val() !== f && (a.val(f), a.trigger("change"));
      return!0
    }, j = function(a, b) {
      a = g(a);
      b = g(b);
      a.data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover");
      b.addClass("selectBox-hover")
    }, k = function(a, b) {
      a = g(a);
      g(b);
      a.data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover")
    }, n = function(a, b, c) {
      if(b && b.length !== 0) {
        var a = g(a), a = a.data("selectBox-control"), d = a.data("selectBox-options"), a = a.hasClass("selectBox-dropdown") ? d : d.parent(), d = parseInt(b.offset().top - a.position().top), e = parseInt(d + b.outerHeight());
        c ? a.scrollTop(b.offset().top - a.offset().top + a.scrollTop() - a.height() / 2) : (d < 0 && a.scrollTop(b.offset().top - a.offset().top + a.scrollTop()), e > a.height() && a.scrollTop(b.offset().top + b.outerHeight() - a.offset().top + a.scrollTop() - a.height()))
      }
    }, l = function(a, b) {
      var a = g(a), d = a.data("selectBox-control"), e = d.data("selectBox-options"), h = 0, l = 0;
      if(!d.hasClass("selectBox-disabled")) {
        switch(b.keyCode) {
          case 8:
            b.preventDefault();
            c = "";
            break;
          case 9:
          ;
          case 27:
            i();
            k(a);
            break;
          case 13:
            d.hasClass("selectBox-menuShowing") ? (m(a, e.find("LI.selectBox-hover:first"), b), d.hasClass("selectBox-dropdown") && i()) : f(a);
            break;
          case 38:
          ;
          case 37:
            b.preventDefault();
            if(d.hasClass("selectBox-menuShowing")) {
              d = e.find(".selectBox-hover").prev("LI");
              h = e.find("LI:not(.selectBox-optgroup)").length;
              for(l = 0;d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup");) {
                if(d = d.prev("LI"), d.length === 0 && (d = e.find("LI:last")), ++l >= h) {
                  break
                }
              }
              j(a, d);
              n(a, d)
            }else {
              f(a)
            }
            break;
          case 40:
          ;
          case 39:
            if(b.preventDefault(), d.hasClass("selectBox-menuShowing")) {
              d = e.find(".selectBox-hover").next("LI");
              h = e.find("LI:not(.selectBox-optgroup)").length;
              for(l = 0;d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup");) {
                if(d = d.next("LI"), d.length === 0 && (d = e.find("LI:first")), ++l >= h) {
                  break
                }
              }
              j(a, d);
              n(a, d)
            }else {
              f(a)
            }
        }
      }
    }, o = function(a, b) {
      var a = g(a), e = a.data("selectBox-control"), i = e.data("selectBox-options");
      if(!e.hasClass("selectBox-disabled")) {
        switch(b.keyCode) {
          case 9:
          ;
          case 27:
          ;
          case 13:
          ;
          case 38:
          ;
          case 37:
          ;
          case 40:
          ;
          case 39:
            break;
          default:
            e.hasClass("selectBox-menuShowing") || f(a), b.preventDefault(), clearTimeout(d), c += String.fromCharCode(b.charCode || b.keyCode), i.find("A").each(function() {
              if(g(this).text().substr(0, c.length).toLowerCase() === c.toLowerCase()) {
                return j(a, g(this).parent()), n(a, g(this).parent()), !1
              }
            }), d = setTimeout(function() {
              c = ""
            }, 1E3)
        }
      }
    }, p = function(a, b) {
      a = g(a);
      a.val(b);
      var b = a.val(), c = a.data("selectBox-control");
      if(c) {
        var d = a.data("selectBox-settings"), e = c.data("selectBox-options");
        c.find(".selectBox-label").text(g(a).find("OPTION:selected").text() || "\u00a0");
        e.find(".selectBox-selected").removeClass("selectBox-selected");
        e.find("A").each(function() {
          if(typeof b === "object") {
            for(var a = 0;a < b.length;a++) {
              g(this).attr("rel") == b[a] && g(this).parent().addClass("selectBox-selected")
            }
          }else {
            g(this).attr("rel") == b && g(this).parent().addClass("selectBox-selected")
          }
        });
        d.change && d.change.call(a)
      }
    }, r = function(a) {
      g(a).css("MozUserSelect", "none").bind("selectstart", function(a) {
        a.preventDefault()
      })
    };
    switch(h) {
      case "hide":
        i();
        break;
      case "control":
        return g(this).data("selectBox-control");
      case "settings":
        if(!a) {
          return g(this).data("selectBox-settings")
        }
        g(this).each(function() {
          g(this).data("selectBox-settings", g.extend(!0, g(this).data("selectBox-settings"), a))
        });
        break;
      case "options":
        g(this).each(function() {
          var c, d = a;
          c = g(this);
          var e = c.data("selectBox-control");
          c.data("selectBox-settings");
          switch(typeof a) {
            case "string":
              c.html(a);
              break;
            case "object":
              for(var f in c.html(""), a) {
                if(a[f] !== null) {
                  if(typeof a[f] === "object") {
                    var d = g('<optgroup label="' + f + '" />'), i;
                    for(i in a[f]) {
                      d.append('<option value="' + i + '">' + a[f][i] + "</option>")
                    }
                  }else {
                    d = g('<option value="' + f + '">' + a[f] + "</option>")
                  }
                  c.append(d)
                }
              }
          }
          if(e) {
            switch(e.data("selectBox-options").remove(), f = e.hasClass("selectBox-dropdown") ? "dropdown" : "inline", d = b(c, f), e.data("selectBox-options", d), f) {
              case "inline":
                e.append(d);
                break;
              case "dropdown":
                e.find(".selectBox-label").text(g(c).find("OPTION:selected").text() || "\u00a0"), g("BODY").append(d)
            }
          }
        });
        break;
      case "value":
        if(!a) {
          return g(this).val()
        }
        g(this).each(function() {
          p(this, a)
        });
        break;
      case "enable":
        g(this).each(function() {
          var a;
          a = g(this);
          a.attr("disabled", !1);
          (a = a.data("selectBox-control")) && a.removeClass("selectBox-disabled")
        });
        break;
      case "disable":
        g(this).each(function() {
          var a;
          a = g(this);
          a.attr("disabled", !0);
          (a = a.data("selectBox-control")) && a.addClass("selectBox-disabled")
        });
        break;
      case "destroy":
        g(this).each(function() {
          var a;
          a = g(this);
          var b = a.data("selectBox-control");
          b && (b.data("selectBox-options").remove(), b.remove(), a.removeClass("selectBox").removeData("selectBox-control").removeData("selectBox-settings").show())
        });
        break;
      default:
        g(this).each(function() {
          e(this, h)
        })
    }
    return g(this)
  }})
}(jQuery);
(function(g) {
  g.fn.extend({smartpaginator:function(h) {
    var a = g.extend({totalrecords:0, recordsperpage:0, length:10, next:"Next", prev:"Prev", first:"First", last:"Last", go:"Go", theme:"green", display:"double", initval:1, datacontainer:"", dataelement:"", onchange:null, controlsalways:!1}, h);
    return this.each(function() {
      function d(b) {
        j.find("span").remove();
        var c = (b + 1) * a.recordsperpage;
        if(c > a.totalrecords) {
          c = a.totalrecords
        }
        j.append(g("<span/>").append(g("<b/>").text(b * a.recordsperpage + 1))).append(g("<span/>").text("-")).append(g("<span/>").append(g("<b/>").text(c))).append(g("<span/>").text("of")).append(g("<span/>").append(g("<b/>").text(a.totalrecords)))
      }
      function c(c) {
        l.find("li").remove();
        if(!(a.totalrecords <= a.recordsperpage)) {
          for(var h = c;h < c + a.length;h++) {
            if(h == i) {
              break
            }
            l.append(g("<li/>").append(g("<a>").attr("id", h + 1).addClass(a.theme).addClass("normal").attr("href", "javascript:void(0)").text(h + 1)).click(function() {
              f = c + g(this).closest("li").prevAll().length;
              e(f)
            }))
          }
          d(c);
          q.val(c + 1);
          l.find("li a").addClass(a.theme).removeClass("active");
          l.find("li:eq(0) a").addClass(a.theme).addClass("active");
          h = (l.find("li:eq(0) a").outerWidth() + parseInt(l.find("li:eq(0)").css("margin-left")) * 2) * l.find("li").length;
          l.css({width:h});
          b(c)
        }
      }
      function e(e) {
        var j = a.length / 2;
        a.length % 2 > 0 && (j = (a.length + 1) / 2);
        var o = 0;
        if(e >= 0 && e < i) {
          e >= j && (i - e > j ? o = e - (j - 1) : i > a.length && (o = i - a.length));
          c(o);
          d(f);
          l.find("li a").removeClass("active");
          q.val(f + 1);
          l.find('li a[id="' + (e + 1) + '"]').addClass("active");
          j = f * a.recordsperpage;
          e = j + a.recordsperpage;
          e > a.totalrecords && (e = a.totalrecords % e);
          if(h && a.onchange != null) {
            a.onchange(f + 1, j, e)
          }
          if(k != null && k.length > 0) {
            n.css("display", "none");
            g(n[0]).find("th").length > 0 && (g(n[0]).css("display", ""), j++, e++);
            for(;j < e;j++) {
              g(n[j]).css("display", "")
            }
          }
          b()
        }
      }
      function b() {
        i > a.length ? (f > 0 ? a.controlsalways ? o.css("display", "").removeClass("disabled") : o.css("display", "") : a.controlsalways ? o.css("display", "").addClass("disabled") : o.css("display", "none"), f > a.length / 2 - 1 ? a.controlsalways ? r.css("display", "").removeClass("disabled") : r.css("display", "") : a.controlsalways ? r.css("display", "").addClass("disabled") : r.css("display", "none"), f == i - 1 ? a.controlsalways ? p.css("display", "").addClass("disabled") : p.css("display", 
        "none") : a.controlsalways ? p.css("display", "").removeClass("disabled") : p.css("display", ""), i > a.length && f < i - a.length / 2 - 1 ? a.controlsalways ? s.css("display", "").removeClass("disabled") : s.css("display", "") : a.controlsalways ? s.css("display", "").addClass("disabled") : s.css("display", "none")) : a.controlsalways ? (r.css("display", "").addClass("disabled"), o.css("display", "").addClass("disabled"), p.css("display", "").addClass("disabled"), s.css("display", "").addClass("disabled")) : 
        (r.css("display", "none"), o.css("display", "none"), p.css("display", "none"), s.css("display", "none"))
      }
      var f = 0, i = parseInt(a.totalrecords / a.recordsperpage);
      a.totalrecords % a.recordsperpage > 0 && i++;
      var h = !1, j = g(this).addClass("pager").addClass(a.theme);
      j.find("ul").remove();
      j.find("div").remove();
      j.find("span").remove();
      var k, n;
      a.datacontainer != "" && (k = g("#" + a.datacontainer), n = g("" + a.dataelement + "", k));
      var l = g("<ul/>"), o = g("<div/>").text(a.prev).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = parseInt(l.find("li a.active").text()) - 1;
        e(--f)
      }).addClass("btn"), p = g("<div/>").text(a.next).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = parseInt(l.find("li a.active").text());
        e(f)
      }).addClass("btn"), r = g("<div/>").text(a.first).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = 0;
        e(0)
      }).addClass("btn"), s = g("<div/>").text(a.last).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = i - 1;
        e(f)
      }).addClass("btn"), q = g("<input/>").attr("type", "text").keydown(function(a) {
        var b;
        b = q;
        var c = b.get(0).selectionStart, d = b.get(0).selectionEnd, e = document.selection;
        b = e && e.createRange().text.length != 0 ? !0 : !e && b.val().substring(c, d).length != 0 ? !0 : !1;
        b && q.val("");
        a.which >= 48 && a.which < 58 ? (b = parseInt(q.val() + (a.which - 48)), b > 0 && b <= i || a.preventDefault()) : a.which == 8 || a.which == 46 || a.preventDefault()
      }), v = g("<input/>").attr("type", "button").attr("value", a.go).addClass("btn").click(function() {
        if(q.val() == "") {
          return!1
        }else {
          f = parseInt(q.val()) - 1, e(f)
        }
      });
      j.append(r).append(o).append(l).append(p).append(s).append(g("<div/>").addClass("short").append(q).append(v));
      a.display == "single" && (v.css("display", "none"), q.css("display", "none"));
      c(0);
      if(a.initval == 0) {
        a.initval = 1
      }
      f = a.initval - 1;
      e(f);
      h = !0
    })
  }})
})(jQuery);
window.onbeforeunload = function() {
  unityObj.m_isRemote && (unityObj.timeoutID && clearTimeout(unityObj.timeoutID), unityObj.closeSocket())
};
$(window).on("keydown", function(g) {
  if(g.ctrlKey || g.metaKey) {
    switch(String.fromCharCode(g.which).toLowerCase()) {
      case "a":
        g.preventDefault(), g = $("input[type='text']:focus"), g.length && g.select()
    }
  }
});
UnityObj = function() {
  var g, h, a;
  g = function(a, c) {
    console.log("debug", a, c)
  };
  h = function(a, c) {
    console.log("error", a, c)
  };
  a = function() {
    if(!this.m_wsConnection) {
      return!1
    }
    return this.m_wsConnection.readyState === WebSocket.OPEN
  };
  return{k_protocolVersion:"1.0", k_serviceName:"json-rmc", k_typGetStubInfo:"GETSTUBINFO", k_typInvoke:"INVOKE", k_typOnEvent:"ONEVENT", k_typGlobalEvent:"GLOBALEVENT", k_connectionTimout:5E3, k_errNoDirectUnityObject:"no-unity-object", k_remoteAddress:"localhost", k_remotePort:8789, m_requestID:1, m_isRemote:window.unityAsync === void 0, m_wsConnection:null, m_requestCallbacks:{}, m_eventCallbacks:{}, m_waitingEvents:{}, m_requestHistory:[], callProxyMgr:function(d, c) {
    var e = this;
    d.version = this.k_protocolVersion;
    d.messageID = this.m_requestID++;
    d.type === this.k_typOnEvent ? (this.m_eventCallbacks[d.messageID] = c, this.m_waitingEvents[d.messageID] = {info:d, callback:c}) : this.m_requestCallbacks[d.messageID] = c;
    this.m_requestHistory.push(d);
    this.m_requestHistory.length > 100 && this.m_requestHistory.splice(0, 20);
    unityObj.m_isRemote ? a() ? this.m_wsConnection.send(JSON.stringify(d)) : this.initializeSocket(function(a) {
      a ? c({message:"Cannot connect to the Unity engine, Is the editor running?", extra:d}) : e.m_wsConnection.send(JSON.stringify(d))
    }) : window.unityAsync({className:"window.unityScriptObject", funcName:"processMessage", funcArgs:[JSON.stringify(d)], onSuccess:function(a) {
      unityObj.processResult(a)
    }})
  }, cancelEvent:function(a) {
    var c = this;
    $.each(this.m_eventCallbacks, function(e, b) {
      if(e.event === a) {
        return delete c.m_eventCallbacks[b], !0
      }
      return!1
    });
    $.each(this.m_waitingEvents, function(e, b) {
      e.info.event === a && delete c.m_waitingEvents[b];
      return!0
    });
    return!1
  }, cancelEvents:function() {
    this.m_eventCallbacks.length = 0;
    var a = $.map(this.m_waitingEvents, function(a) {
      return a.callback
    });
    this.m_waitingEvents.length = 0;
    $.each(a, function(a, d) {
      d({cancelled:!0})
    })
  }, closeSocket:function() {
    if(this.m_wsConnection) {
      this.m_wsConnection.onopen = function() {
      }, this.m_wsConnection.onclose = function() {
      }, this.m_wsConnection.onerror = function() {
      }, this.m_wsConnection.onmessage = function() {
      }, a() && this.m_wsConnection.close(), this.m_wsConnection = null
    }
  }, findRequestHistory:function(a) {
    return $.each(this.m_requestHistory, function(c, e) {
      return e.messageID === a
    })
  }, getUnityObject:function(a, c) {
    this.callProxyMgr({type:this.k_typGetStubInfo, reference:a}, c)
  }, initializeSocket:function(a) {
    var c = this;
    this.m_wsConnection = new WebSocket("ws://" + this.k_remoteAddress + ":" + this.k_remotePort + "/" + this.k_serviceName, []);
    unityObj.timeoutID = setTimeout(function() {
      c.isSocketConnected() || (c.closeSocket(), a("Cannot connect to the Unity engine, Is the editor running?"))
    }, this.k_connectionTimout);
    this.m_wsConnection.onopen = function() {
      a && a(null)
    };
    this.m_wsConnection.onclose = function() {
      c.closeSocket()
    };
    this.m_wsConnection.onerror = function(c) {
      a ? a(c) : c("Couldn't process response from the unity engine", c)
    };
    this.m_wsConnection.onmessage = function(a) {
      try {
        c.processResult(a.data)
      }catch(b) {
        b("Couldn't process response from the unity engine", b)
      }
    }
  }, isSocketConnected:a, makeReplyData:function(a, c) {
    return{exception:a, serverReply:c, originalCall:this.findRequestHistory(c.messageID)}
  }, processResult:function(a) {
    var c = null, e = this, b, f = null, i, m, j;
    try {
      c = JSON.parse(a)
    }catch(k) {
      h("Couldn't parse the reply from the unity engine", k)
    }
    if(c && c.type === this.k_typGlobalEvent) {
      console.log("Global event received: " + c.event), this.cancelEvents()
    }else {
      if(a = this.m_requestCallbacks[c.messageID], a !== void 0 ? delete this.m_requestCallbacks[c.messageID] : a = this.m_eventCallbacks[c.messageID], c.status < 0) {
        console.error("processResult error: " + c), a && a(c, null)
      }else {
        if(c.type === this.k_typGetStubInfo) {
          j = {}, j.events = c.result.events, $.each(c.result.properties, function(a, b) {
            j[b.name] = b.value
          }), $.each(c.result.methods, function(a, d) {
            j[d.name] = function() {
              arguments.length < 1 && g("last argument is not of type function for callback, callback ignored", e.makeReplyData(null, c));
              var a = null;
              typeof arguments[arguments.length - 1] !== "function" ? g("last argument is not of type function for callback, callback ignored", e.makeReplyData(null, c)) : a = arguments[arguments.length - 1];
              b = {type:e.k_typInvoke, destination:c.reference, method:d.name, params:[]};
              i = 0;
              for(m = arguments.length - (a ? 1 : 0);i < m;i++) {
                b.params.push(arguments[i])
              }
              e.callProxyMgr(b, a)
            }
          }), j.on = function(a, b) {
            if(this.events.indexOf(a) === -1) {
              throw"Cannot register to unknown event <" + a + ">";
            }
            e.callProxyMgr({type:e.k_typOnEvent, destination:c.reference, event:a}, b)
          }, j.off = function(a) {
            e.cancelEvent(a)
          }, f = j
        }else {
          if(c.type === this.k_typInvoke) {
            f = c.result
          }else {
            if(c.type === this.k_typEvent) {
              f = c.result
            }
          }
        }
        try {
          a && a(null, f)
        }catch(n) {
          h("An error occured in the callback for the request", this.makeReplyData(n, c))
        }
      }
    }
  }}
};
window.unityObj = new UnityObj;
window.unityOnEvent = function(g) {
  window.unityObj.processResult(g)
};
Kharma.Admin = function() {
  var g = "", h = "pendingReview", a = !1, d = null, c, e, b, f, i, m, j, k, n, l, o, p, r, s, q, v, t, y, x;
  i = function(b) {
    var c = $("#adminarea"), d = $("<input id='adminlistsearch' type='text'/>"), e = $("<select id='adminliststatus'><option value='pendingReview'>Pending Review</option><option value='accepted'>Accepted</option><option value='declined'>Declined</option><option value='published'>Published</option><option value='disabled'>Disabled</option><option value='any'>Any</option></select>"), m = $("<form id='adminsearchform'>"), l = $("#admin-header"), j = $("<a class='button' id='admin-close'>Close<span class='icon'></span></a>");
    a = !0;
    h === "declined" || h === "published" ? b || (b = 1) : b = null;
    l.length === 0 ? (l = $("<div id='admin-header'></div>"), c.append(l, "<div id='admin-content'><div id='admin-package-list'><h1>Loading...</h1></div></div>")) : (g = $.trim($("#adminlistsearch").val()), l.empty());
    !Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && (l.append(j), j.off().on("click", function() {
      Kharma.toolbar.goAdmin()
    }));
    l.append(e);
    e.val(h);
    l.append(m.append(d));
    m.on("submit", function() {
      i();
      return!1
    });
    d.val($.trim(g));
    l.append("<div id='paging' class='paging'></div>");
    l.append(f("refresh", "Refresh"));
    r(b);
    Kharma.toolbar.addAdministration();
    Kharma.toolbar.addAdminModeButton()
  };
  x = function() {
    var a, c, e = $("#admin-package-list").empty();
    a = 0;
    for(c = d.length;a < c;a++) {
      e.append(k(d[a]))
    }
    d.length % 2 && e.append("<div class='admin-package-filler'></div>");
    b()
  };
  r = function(a) {
    Kharma.io.post({uri:"/api/vetting/list.json", parameters:{queue:-1, status:h, query:g, page:a || 1, rows:12}, onSuccess:function(a) {
      var b = a.json.paging || {};
      b.onclick = function(a) {
        r(a)
      };
      d = a.json.results;
      $("#paging").paginate(b);
      x()
    }})
  };
  k = function(a) {
    var b = $("<div class='admin-package'></div>"), a = Handlebars.templates.packageVersionBox({item:a});
    b.append(a);
    return b
  };
  f = function(a, b, c, d) {
    a = $("<a class='" + a + "' href='#'>" + b + "</a>");
    c && (a.attr("package-id", c.package_id), a.attr("package-version-id", c.package_version_id), a.attr("package-upload-id", c.package_upload_id));
    d && a.attr("data-content", d);
    return $("<span class='admin-button'></span>").append(a)
  };
  b = function() {
    $(".refresh").off().on("click", i);
    $("#adminliststatus").off().on("change", function() {
      h = $(this).val();
      i()
    });
    $(".loghistory").off().on("click", p);
    $(".showversionlist").off().on("click", t);
    $(".accept").off().on("click", c);
    $(".decline").off().on("click", n);
    $(".revert").off().on("click", q);
    $(".enable").off().on("click", o);
    $(".disable").off().on("click", j);
    $(".comment").off().on("click", m);
    $(".preview").off().on("click", s);
    $(".download").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.toolbar.goAdmin();
      $.address.value("com.unity3d.kharma:download/vetting-package/" + $(a.target).attr("package-version-id") + "-" + $(a.target).attr("package-upload-id"))
    })
  };
  p = function(a) {
    a.stopPropagation();
    a.preventDefault();
    var b = $(a.target).attr("package-name");
    Kharma.io.get({uri:"/api/vetting/log-history/" + $(a.target).attr("package-id") + ".json", onSuccess:function(a) {
      (new Kharma.TextMessage({title:"Package Log for " + b, message:Handlebars.templates.adminLogHistory({entries:a.json.results})})).getElement().addClass("admin")
    }})
  };
  t = function(a) {
    a.stopPropagation();
    a.preventDefault();
    y($(a.target).attr("package-id"), $(a.target).attr("package-name"))
  };
  y = function(a, b) {
    Kharma.io.get({uri:"/api/admin/package-versions/" + a + ".json", onSuccess:function(c) {
      var d, e = $("<div></div>"), f = $('<table class="version-table"></table>'), i = ["id", "published", "version_name", "status", "price", "max_unity_version", "min_unity_version", "size_pretty"], g = $("<tr></tr>");
      $.each(i, function(a, b) {
        $("<th>").append(b).appendTo(g)
      });
      f.append(g);
      $.each(c.json.package_versions, function(b, c) {
        var d = $("<tr>");
        $.each(i, function(b, e) {
          var f = c[e], i = $("<td>").addClass(e);
          f !== null ? e === "id" ? i.append("<a href='#!/preview/" + a + "/" + f + "'>" + f + "</a>") : e === "price" ? i.append(f === "0.00" ? "Free" : "$" + f) : i.append(f) : i.addClass("null").append("null");
          e === "status" && i.addClass(c[e]);
          d.append(i)
        });
        f.append(d)
      });
      e.append(f);
      d = new Kharma.TextMessage({title:"Version List for " + b, message:e.html()});
      c = d.getElement();
      c.addClass("admin");
      $(c.find(".id")).off().on("click", function() {
        d.close();
        Kharma.toolbar.goAdmin()
      })
    }})
  };
  m = function(a) {
    a.stopPropagation();
    a.preventDefault();
    l("comment", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  c = function(a) {
    a.stopPropagation();
    a.preventDefault();
    l("accept", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  n = function(a) {
    a.stopPropagation();
    a.preventDefault();
    l("decline", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  l = function(a, b, c, d) {
    Kharma.session.getSession(function(e) {
      new Kharma.AdminStatusDialog({header:a.charAt(0).toUpperCase() + a.substr(1).replace(/e$/, "") + "ing " + d, necker:"Package ID " + b + ", Package Version ID " + c, action:a, emailUrl:"/api/admin/email-redirect/" + a + "/" + b + "/" + c + ".json?xunitysession=" + e, onSubmit:function(d) {
        v(a, b, c, d)
      }})
    })
  };
  v = function(a, b, c, d) {
    Kharma.io.post({uri:"/api/vetting/" + a + "/" + b + "/" + c + ".json", parameters:d, onSuccess:function(d) {
      d.json && d.json.status === "ok" ? new Kharma.TimedMessage({title:"OK", message:"Action successful.", timeout:2}) : e(a, b, c)
    }, onFailure:function() {
      e(a, b, c)
    }})
  };
  e = function(a, b, c) {
    new Kharma.TimedMessage({title:"Error", message:"Action '" + a + "' not applied to package " + b + " / package version " + c + ". Check package log for details", timeout:5})
  };
  q = function(a) {
    a.stopPropagation();
    a.preventDefault();
    l("revert", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  o = function(a) {
    a.stopPropagation();
    a.preventDefault();
    l("enable", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  s = function(a) {
    a.stopPropagation();
    a.preventDefault();
    $.address.value("preview/" + $(a.target).attr("package-id") + "/" + $(a.target).attr("package-version-id"));
    Kharma.toolbar.goAdmin()
  };
  j = function(a, b, c) {
    $("#featured_in_top").checked ? new Kharma.TimedMessage({title:"DISABLE PACKAGE", message:"Top Featured package can NOT be disabled.", timeout:3}) : (a.stopPropagation(), a.preventDefault(), b ? l("disable", b, c) : l("disable", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name")))
  };
  return{acceptPackage:c, buildAdmin:i, disablePackage:j, declinePackage:n, disableAdmin:function() {
    a = !1;
    Kharma.toolbar.removeAdministration()
  }, goPage:function(a) {
    a.stopPropagation();
    a.preventDefault();
    (a = $(a.target).attr("data-page")) && i(a)
  }, isActive:a}
};
Kharma.admin = new Kharma.Admin;
Kharma.AdminContent = function(g) {
  var g = g || {}, h = g.categoryId, a = g.packageId, d = g.packageVersionId || 0, c = g.isPreview, e = g.packageName, b = g.publisherId, f, i, m, j, k, n, l, o;
  n = function() {
    c || i();
    f()
  };
  i = function() {
    Kharma.io.get({uri:"/api/admin/package-featured/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      var b = $("#featured_in_top"), c = $("#featured_in_home"), d = $("#featured_in_category"), e = Kharma.toolbar;
      b && c && (a.json.primary ? (b.attr("checked", "checked"), b.prop("checked", !0), c.attr("disabled", !0), b.attr("disabled", !0)) : (b.removeAttr("checked"), b.prop("checked", !1), c.removeAttr("disabled"), b.removeAttr("disabled")), c.removeAttr("checked"), a.json.secondary && (c.attr("checked", "checked"), c.prop("checked", !0)), d && (d.removeAttr("disabled"), d.removeAttr("checked"), d.prop("checked", !1), a.json.category && (d.attr("checked", "checked"), d.prop("checked", !0))), e.loader && 
      e.loader.clear())
    }})
  };
  f = function() {
    var b = 0, e, f = $(".featured"), i = function(a) {
      $(a.target).attr("checked") ? (o(a, "remove"), $(a.target).removeAttr("checked"), $(a.target).prop("checked", !1)) : (o(a, "assign"), $(a.target).attr("checked", "checked"), $(a.target).prop("checked", !0))
    };
    if(f && f.length > 0) {
      for(e = f.length;b < e;b++) {
        $(f[b]).off().on("click", i)
      }
    }
    $("#editname").off().on("click", k);
    $("#editdescription").off().on("click", j);
    $("#editcategory").off().on("click", m);
    if(!c) {
      $("#disablepackage").off().on("click", function(b) {
        Kharma.admin.disablePackage(b, a, d)
      })
    }
  };
  o = function(b, c) {
    var d = $(b.target).attr("featured-in");
    b.stopPropagation();
    b.preventDefault();
    Kharma.toolbar.loader = $("#pageload") && new Kharma.UI.Loader($("#pageload"), "Contacting Asset Store");
    switch(d) {
      case "category":
        Kharma.io.flushCacheKey("/api/category/featured/" + h + ".json");
        break;
      case "home":
      ;
      case "top":
        Kharma.io.flushCacheKey("/api/home/featured.json")
    }
    Kharma.io.post({uri:"/api/admin/assign_featured/" + a + ".json", parameters:{featured:d, action:c}, pageSpecific:!0, onSuccess:function() {
      n()
    }})
  };
  j = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      new Kharma.TextDialog({className:"admindialog admindescription", header:"Description", text:a.json.content.description, callback:function(a) {
        l({description:a.text})
      }})
    }})
  };
  k = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      new Kharma.TextDialog({className:"admindialog admineditname", header:"Package Title", text:a.json.content.title, callback:function(a) {
        l({name:a.text})
      }, type:"textField"})
    }})
  };
  m = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/vetting/metadata/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.io.get({uri:"/api/admin/categories.json", pageSpecific:!0, onSuccess:function(a) {
        var a = a.json.categories, b = 0, c;
        for(c = a.length;b < c;b++) {
          a[b].attributes.selected = a[b].attributes.value === h || !1
        }
        h = a;
        new Kharma.TextDialog({className:"admindialog admineditcategory", header:"Package Category", text:a, callback:function(a) {
          l({category_id:a.text})
        }, type:"selectField"})
      }})
    }})
  };
  l = function(b) {
    Kharma.io.post({uri:"/api/vetting/metadata/" + a + "/" + d + ".json", parameters:b, pageSpecific:!0, onSuccess:function() {
      var b = Kharma.history.getCurrentPage();
      c || Kharma.io.flushCacheKey("/api/content/overview/" + a + ".json");
      c ? (b.clear(), b.load()) : Kharma.history.replacePage(new Kharma.ContentPage({id:a}))
    }})
  };
  (function() {
    var a = $("<div id='adminlayer' class='adminlayer_background admin_group'></div>"), d = $("<div class='adminlayer_content admin_group'><h1>Admin</h1></div>"), f = $("#content"), i = $("<span></span>");
    $(".admin_group").remove();
    c || d.append("<p>Featured:</p><p id='adminfeaturedpackage'><label><input type='checkbox' class='featured' disabled='true' id='featured_in_category' featured-in='category'>Category</label><br><label><input type='checkbox' class='featured' disabled='true' id='featured_in_home' featured-in='home'>Home</label><br><label><input type='checkbox' class='featured' disabled='true' id='featured_in_top' featured-in='top'>Top</label><br></p><br>");
    d.append("<p><span>[<a id='editname'> Edit Name </a>]</span></p>");
    d.append("<p><span>[<a id='editdescription'> Edit Description </a>]</span></p>");
    d.append("<p><span>[<a id='editcategory'> Edit Category </a>]</span></p><br>");
    c || d.append("<p><span>[<a id='disablepackage'> Disable </a>]</span></p><br>");
    d.append($("<p></p>").append(i));
    Kharma.io.get({uri:"/api/admin/publishers/" + b + ".json", pageSpecific:!0, onSuccess:function(a) {
      a.json.publishers[0] && i.append('<a href="mailto:' + encodeURIComponent(a.json.publishers[0].email) + "?subject=" + encodeURIComponent(e) + '" class="icon" id="admin-email">Email</a>')
    }});
    f.append(a);
    f.append(d);
    n()
  })(g)
};
Kharma.Version = "0";
Kharma.AssetStore = function() {
  return{login:function() {
    Kharma.ga.event("login", {action:"login", label:"loginUnityEditor"})
  }, openURL:function(g) {
    setTimeout(function() {
      var h = g.substring(0, g.indexOf("?")), a = {}, d = g.substring(g.indexOf("?") + 1);
      Kharma.unityEditor.getInitialOpenURL(function(c) {
        if(c) {
          throw c.message;
        }else {
          Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && ((g.indexOf("com.unity3d.kharma:") !== -1 || g.indexOf("content") !== -1) && $.address.value(g), g.indexOf("mixamo") !== -1 && (h.indexOf("start_transaction") !== -1 ? ($(d.split(/[&;]/)).each(function(c, b) {
            var d = b.split("=");
            a[d[0]] = decodeURIComponent(d[1].replace(/\+/g, "%20"))
          }), Kharma.login.loginRequired(function(c) {
            if(c) {
              var b = new Kharma.TextMessage({title:Kharma.l10n.mixamo.title, message:Kharma.l10n.mixamo.message, options:{size:"small"}, noButtons:!0});
              Kharma.cart = Kharma.cart || new Kharma.Cart;
              Kharma.cart.addAction([Kharma.cart.addMixamoItem, {transactionId:a.transaction_id, amount:a.amount, description:a.description, url:a.base_url, showCart:!0, callback:function() {
                b.close()
              }}])
            }
          })) : console.error("Error: Invalid action info.type:" + g)))
        }
      })
    }, 100)
  }, refreshSkinIndex:function() {
    var g = $("body");
    g.removeClass("skin0");
    g.removeClass("skin1");
    Kharma.unityEditor.getSkinIndex(function(h, a) {
      if(h) {
        throw h.message;
      }else {
        g.addClass("skin" + a)
      }
    })
  }}
};
Kharma.Cart = function() {
  var g = !1, h, a, d = [], c, e = "$ 0", b, f = "$ 0", i, m, j, k, n, l, o, p, r, s, q;
  k = function() {
    Kharma.cart.active = !1;
    a.hide();
    h.remove()
  };
  q = function(b, c, i) {
    var g = b ? Kharma.io.post : Kharma.io.get;
    $("h1", a).prepend('<div class="loading-indicator"></div>');
    Kharma.login.user && !Kharma.login.user.is_anonymous && g({uri:"/api/purchase/overview.json", parameters:b || null, onSuccess:function(g) {
      var h = g.transport.getResponseHeader("X-Unity-Add-Service-Error"), m = g.json, l = m.express_checkout;
      $(".loading-indicator", a).remove();
      h ? (h === "Already Purchased" ? $.address.value("com.unity3d.kharma:download/service-instance/" + g.transport.getResponseHeader("X-Unity-ServiceInstance")) : new Kharma.TimedError({message:[Kharma.l10n.cart.error, Kharma.l10n.supplant(Kharma.l10n.cart.errorMessage, {item:b ? b.get("mixamo_description") : ""}) + h], timeout:7}), i && i()) : (Kharma.cart.items = d = m.cart, e = m.pricetext, f = m.vat, n(), d.length === 0 ? k() : c && (l && d.length === 1 && m.price !== 0 ? new Kharma.ExpressCheckoutDialog(g) : 
      r(), i && i()), Kharma.toolbar.updateButtons())
    }})
  };
  p = function(a) {
    var b = {remove_package:a.id};
    a.type === "service-instance" && (b = {remove_service_instance:a.id});
    q(b)
  };
  m = function(c, d, i) {
    var g = a.find("#" + c.link.type + "-" + c.link.id), d = parseInt(d, 10);
    g.find(".price, .amount").animate({top:"-150%"});
    g.find(".amount input").attr("disabled", "disabled");
    Kharma.io.post({uri:"/api/purchase/overview.json", parameters:{update_package:c.link.id + "," + d}, onSuccess:function(a) {
      var a = a.json, d = "";
      $.each(a.cart, function(a, b) {
        if(b.link.id === c.link.id && b.link.type === c.link.type) {
          return c.quantity = b.quantity, c.price_unit = b.price_unit, c.pricetext = b.pricetext, c.pricetext_unit = b.pricetext_unit, !1
        }
        return!0
      });
      g.find(".amount input").val(c.quantity);
      g.find(".price").html(c.pricetext);
      g.find(".unit.price").html(c.pricetext_unit);
      e = a.pricetext;
      f = a.vat;
      d += "<span class='end_extra_key'>" + Kharma.l10n.cart.vat + "</span><span class='end_extra_value'>" + f + "</span>";
      d += "<span class='end_key end_grandtotal'>" + Kharma.l10n.cart.total + "</span><span class='end_value end_grandtotal'>" + e + "</span><br/>";
      b.html(d);
      g.find(".price, .amount").animate({top:"0%"});
      g.find(".amount input").removeAttr("disabled");
      i && i()
    }, onFailure:function() {
      q()
    }})
  };
  i = function() {
    var d = $("<button>" + Kharma.l10n.cart.checkout + "</button>"), e = $("<button>" + Kharma.l10n.cart.continueShopping + "</button>"), f = $("<div class='header'><div class='description'>" + Kharma.l10n.pkg.pkg + "</div><div class='unit price'>" + Kharma.l10n.cart.unitPrice + "</div><div class='amount'>" + Kharma.l10n.cart.quantity + "&nbsp;&nbsp;&nbsp;</div><div class='price'>" + Kharma.l10n.cart.subtotal + "</div></div>"), i = $('<div class="buttonbox" />'), g = $('<span class="buttonstrip close" />'), 
    h = $('<span class="buttonstrip checkout" />'), m = $('<span class="split" />'), l = $('<span class="split" />');
    a.empty();
    a.append("<h1>" + Kharma.l10n.cart.cart + "</h1>");
    a.append(f[0]);
    c = $("<div class='cartlist vscroll'></div>");
    a.append(c);
    b = $('<div class="totalbox"><div class="loading-indicator"></div></div>');
    a.append(b[0]);
    m.append(g);
    l.append(h);
    g.append(e);
    h.append(d);
    i.append(m);
    i.append(l);
    a.append(i[0]);
    e.on("click", k);
    d.on("click", s);
    q()
  };
  l = function(a, b) {
    Kharma.io.get({uri:"/api/content/license/" + b.id + ".json", onSuccess:function(b) {
      a.push(b.json.result.license)
    }})
  };
  s = function() {
    var a = 0, b, c, e, f = [], i = 0;
    for(e = d.length;a < e;a++) {
      c = d[a], c.license && (i++, l(f, c))
    }
    i === 0 ? j() : b = setInterval(function() {
      i === f.length && i > 0 && (clearInterval(b), new Kharma.TextMessage({title:Kharma.l10n.cart.license, message:f.join("\n\n\n\n"), withCancel:!0, callback:function(a) {
        a && j()
      }}))
    }, 500)
  };
  j = function(a) {
    a && a[0] === !1 ? r() : Kharma.io.get({uri:"/api/user/overview/0.json", onSuccess:function(a) {
      a = a.json.address || {firstname:null, lastname:null, organization:null};
      (a.firstname && a.lastname || a.organization) && a.address && a.city && a.country && (a.state || a.country !== "us" && a.country !== "ca") ? Kharma.addressHelper.zipCodes[a.country] && (!a.zip || !Kharma.addressHelper.zipCodes[a.country][2].test(a.zip)) ? (k(), new Kharma.AddressDialog({callback:j, addressData:a, addressError:Kharma.addressHelper.zipCodes[a.country], errorField:"zip"})) : o() : (k(), new Kharma.AddressDialog({addressData:a}))
    }})
  };
  o = function() {
    document.purchaseDialog = new Kharma.PurchaseDialog;
    Kharma.cart.active = !1;
    a.hide();
    h.remove();
    Kharma.toolbar.updateButtons()
  };
  n = function() {
    var a = "";
    if(c && b) {
      c.text(""), a += "<span class='end_extra_key'>" + Kharma.l10n.cart.vat + "</span><span class='end_extra_value'>" + f + "</span><span class='end_key end_grandtotal'>" + Kharma.l10n.cart.total + "</span><span class='end_value end_grandtotal'>" + e + "</span><br/>", b.html(a), d = Kharma.cart.items, d.sort(function(a, b) {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      }), $.each(d, function(a, b) {
        var d = $('<div id="' + b.link.type + "-" + b.link.id + '" class="cartitem"></div>'), e = $('<span class="description">' + b.title + " by " + b.publisher.label + "</span>"), f = $('<span class="price">' + b.pricetext + "</span>"), i = $('<span class="imgs"></span>'), g = $('<a class="icon remove">Remove Item</a>'), h = $('<span class="amount"><input type="text" name="amount" value="' + b.quantity + '" maxlength="3" /></span>'), l = h.find("input"), j = $('<span class="unit price">' + b.pricetext_unit + 
        "</span>");
        i.append(g);
        d.append(i);
        d.append(e);
        d.append(f);
        e.after(j);
        j.after(h);
        b.multiple ? b.sale_limit !== 1 && (e.append("<em class='multiple-seats-notice'>" + Kharma.l10n.cart.requireLicense + "</em>"), b.licenses_own && b.licenses_own > 0 && e.append("<em class='multiple-seats-notice'>" + Kharma.l10n.supplant(Kharma.l10n.cart.ownLicenses, {licenses:b.licenses_own}) + "</em>"), d.addClass("multiple-licenses-available"), l.keydown(function(a) {
          if(!(a.keyCode === 46 || a.keyCode === 8 || a.keyCode === 9) && !(a.keyCode >= 37 && a.keyCode <= 40 || a.ctrlKey)) {
            (a.keyCode < 48 || a.keyCode > 57) && (a.keyCode < 96 || a.keyCode > 105) && a.preventDefault()
          }
        }), l.change(function() {
          m(b, l.val())
        }), l.blur(function(a) {
          a.target.value = a.target.value.replace(/[^\d]/g, "")
        })) : (b.quantity <= 1 && l.val("-"), l.attr("disabled", "disabled"));
        g.click(function() {
          Kharma.ga.event("cart", {action:"remove", label:"cart", target:{packageId:b.id, packageName:b.title, publisherName:b.publisher.label}});
          p(b.link)
        });
        c.append(d)
      })
    }
  };
  r = function() {
    Kharma.cart.active = g = !Kharma.cart.active;
    $("#assetstore").append(h);
    h.on("click", k);
    h.show();
    a.show()
  };
  (function() {
    var b = $("#assetstore");
    h = $("<div class='modalblocker'></div>");
    a = $("<div id='cartarea' class='dialog cartform main'></div>");
    b.append(a);
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, i)
  })();
  return{active:g, hasItem:function(a) {
    for(var b in d) {
      if(parseInt(d[b].id, 10) === a) {
        return!0
      }
    }
    return!1
  }, addItem:function(a, b, c) {
    Kharma.ga.view("cart");
    q({add_package:a}, b, c)
  }, addMixamoItem:function(a) {
    q({add_service_instance:"mixamo", mixamo_transaction_id:a.transactionId, mixamo_amount_cents:a.amount, mixamo_description:a.description, mixamo_base_url:a.url}, a.showCart, a.callback)
  }, items:d, addAction:function(a) {
    var b = a, c = [];
    $.isArray(a) && (b = a.shift(), c = a);
    typeof b === "function" && b.apply(this, c)
  }, removeItem:p, showCart:r, updateCartContents:q}
};
Kharma.Download = function() {
  var g, h, a, d;
  h = function(a, d, b, f) {
    var i, g = b.length, h, k, n;
    for(i = 0;i < g;i++) {
      if(k = b[i], (h = k.link || {id:k.id, type:k.type}) && h.id === d && h.type === a) {
        n = k;
        break
      }
    }
    f(n)
  };
  a = function(a, d) {
    Kharma.io.post({uri:"/api/account/downloads.json", data:JSON.stringify(a), onSuccess:d})
  };
  g = function(a, d) {
    a && (parseInt(d, 10) ? new Kharma.TextMessage({title:Kharma.l10n.pkg.importing, message:Kharma.l10n.pkg.importingMessage, withCancel:!0, options:{size:"small", accept:Kharma.l10n.pkg.importPkg}, callback:function(b) {
      b && g(a, !1)
    }}) : Kharma.unityEditor.openPackage(a, function(a) {
      if(a) {
        throw a.message;
      }
    }))
  };
  d = function(a) {
    var d = [];
    $.each(a, function(a, c) {
      d.push({local_path:c.local_path, id:c.id, name:c.name, version:c.version, version_id:c.version_id, upload_id:c.upload_id})
    });
    return d
  };
  return{findLocalPath:function(a, d) {
    Kharma.unityEditor.getPackageList(function(b, f) {
      var i, g;
      if(b) {
        throw b.message;
      }else {
        for(var h = 0, k = f.results.length;h < k;h++) {
          if((i = f.results[h].link) && i.id === a && i.type === "content") {
            g = f.results[h].local_path;
            break
          }
        }
        d(g)
      }
    })
  }, findPackageById:h, getLocalPackageById:function(a, d, b) {
    Kharma.unityEditor.isEditor() ? Kharma.unityEditor.getPackageList(function(f, i) {
      if(f) {
        throw f.message;
      }else {
        h(a, d, i.results, b)
      }
    }) : b()
  }, getLocalPackages:function(c) {
    Kharma.unityEditor.isEditor() ? Kharma.unityEditor.getPackageList(function(e, b) {
      if(e) {
        throw e.message;
      }else {
        a(d(b.results), c)
      }
    }) : a([], c)
  }, importPackage:g}
};
Kharma.DownloadProgressTracker = function() {
  var g = !0, h, a, d = {}, c;
  h = function(c, b, f, i) {
    if(c.type && c.id) {
      c = c.type + "/" + c.id, d[c] || (d[c] = {}), d[c].downloadedBytes = f, d[c].totalBytes = i, d[c].status = b, (g || b !== "downloading") && a(), (b === "ok" || b.indexOf("Error") !== -1) && delete d[c]
    }
  };
  a = function() {
    clearTimeout(c);
    g = !1;
    Kharma.io.post({uri:"/public-api/track/download-progress.json", data:JSON.stringify(d)});
    c = setTimeout(function() {
      g = !0
    }, 1E4)
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(a, b, c, d, g) {
      h(b, c, d, g)
    });
    setInterval(function() {
      g && !$.isEmptyObject(d) && a()
    }, 6E4)
  })();
  return{}
};
Kharma.ErrorHandler = function() {
  var g, h, a;
  h = function() {
    if(Kharma && Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous) {
      var a = "[";
      Kharma.cart && Kharma.cart.items && Kharma.cart.items.length > 0 && $.each(Kharma.cart.items, function(c, e) {
        a += e.id;
        c < Kharma.cart.items.length - 1 && (a += ", ")
      });
      a += "]";
      console.log(a)
    }
  };
  g = function(a, c, e) {
    var b, f = "notLogged";
    if(typeof a === "string") {
      c = a + " [" + c + ":" + e + "]"
    }else {
      if(typeof a === "object" && a.constructor === Error) {
        c = a.stack || "[" + a.sourceURL + ":" + a.line + "]"
      }else {
        for(b in c = a.toString() + "\n", a) {
          a.hasOwnProperty(b) && (c += b + ":" + a[b] + ".\n")
        }
      }
    }
    Kharma && Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous && (f = "logged");
    console.error("[Global Exception] " + (c + " " + f));
    h()
  };
  a = function(a) {
    console.error("[Manually trapped Exception] " + a.message, a);
    h()
  };
  (function() {
    Kharma.utils.windowWrapper.onError(g);
    $().ajaxError(function(d, c, e, b) {
      b ? a(b) : a(Error("[JQuery Ajax Error]"))
    })
  })();
  return{treatException:a}
};
Kharma.GA = function() {
  var g = "", h = 0, a = "CN:N1", d = "CT:T1", c = "Undefined", e = "", b = "", f = [], i = !1, m = {}, j = document.location.href.match(/https?:\/\/\w+-(\w+)/), k = j ? !1 : !0, n = !1, l = !1, o = !0, p, r, s, q, v, t, y, x, A, z, C, u, w, J, G, I, K, B;
  J = function() {
    window.ga("create", "UA-19129298-" + (!j ? "7" : j[1] === "qa" ? "6" : "5"), "assetstore.unity3d.com");
    window.ga("require", "displayfeatures");
    window.ga(function(a) {
      g = a.get("clientId")
    });
    if(Kharma.unityEditor.isEditor()) {
      var c;
      a = "CN:N2";
      if(e = Kharma.unityEditor.getEditorVersion()) {
        c = e.split(/^(\d+\.\d+)\.?.*?/), c.length > 1 && (e = c[1])
      }
      Kharma.unityEditor.getLicenseFlags(function(a, c) {
        c && (b = c.indexOf(1) !== -1 ? "UL:L2" : c.indexOf(63) !== -1 ? "UL:L3" : "UL:L1")
      })
    }else {
      a = "CN:N3"
    }
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, q);
    $("#mainContent").on(Kharma.utils.events.onLanguageChange, r);
    $(window).on("beforeunload", v);
    i = !0;
    t()
  };
  p = function(a) {
    if(k && a && window.ga.getByName && o) {
      var b = a.replace(/-/g, "");
      m[b] || (window.ga("create", a, "assetstore.unity3d.com", {name:b}), m[b] = window.ga.getByName(b), window.ga(b + ".require", "displayfeatures"))
    }
  };
  r = function() {
    k && o && (n || (n = !0, window._fbq.push(["addPixelId", "310067432528885"]), window._fbq.push(["track", "PixelInitialized", {}])), l || (l = !0, window.twttr.conversion.trackPid("l5ej9")))
  };
  s = function() {
    if(k && o) {
      for(var a = 0, b = Kharma.cart.items.length, c, d = 0;a < b;a++) {
        c = parseFloat(Kharma.cart.items[a].price_unit_usd_exvat), c *= parseInt(Kharma.cart.items[a].quantity, 10), d += c
      }
      d = parseFloat(d) || 0;
      d > 0 && (window._fbq.push(["track", "6021714763372", {value:d, currency:"USD"}]), window.twttr.conversion.trackPid("l5ej7", {tw_sale_amount:d}))
    }
  };
  q = function() {
    c = Kharma.login.getUuid() || "Undefined";
    d = Kharma.login.getType() || "CT:T1";
    i = !0;
    t()
  };
  v = function() {
    t()
  };
  t = function() {
    if(i && f.length > 0) {
      for(;f.length;) {
        z(f.shift())
      }
    }
  };
  y = function(a, b) {
    for(var c in b) {
      b.hasOwnProperty(c) && (a[c] ? a[c] += ";" + b[c] : a[c] = b[c])
    }
  };
  z = function(a) {
    var b;
    a && o && (i ? a.custom ? (b = a.custom.id.replace(/-/g, ""), delete a.custom, k && m[b] && m[b].send(a)) : window.ga("send", a) : f.push(a))
  };
  x = function(c) {
    if(c) {
      var f = {};
      f.dimension4 = Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US";
      f.dimension5 = a;
      f.dimension6 = d;
      if(a === "CN:N2") {
        f.dimension12 = e, f.dimension13 = b
      }
      y(c, f);
      z(c)
    }
  };
  A = function(a) {
    if(a && a.custom) {
      var b = a.custom.path, b = b.replace(/\s/g, "");
      if(b === "") {
        b = "/assetstore"
      }else {
        for(/^\//.test(b) || (b = "/" + b);/\/$/.test(b);) {
          b = b.slice(0, -1)
        }
      }
      p(a.custom.id);
      a.page = b + a.page;
      z(a)
    }
  };
  C = {home:function() {
    h++;
    u({page:"/home", title:"Home", dimension8:"Home"})
  }, category:function(a) {
    if(a) {
      a = parseInt(a, 10) || 0;
      h++;
      var b = "/api/head/category/" + a + ".json", c = "/category/" + a;
      Kharma.io.get({uri:b, onSuccess:function(a) {
        var d = "", e = "";
        a.json.result ? (d = c, e = a.json.result.title) : a.json.error ? (d = c, e = "404 Not Found") : (d = b, e = a.transport.status + " " + a.transport.statusText);
        u({page:d, title:e, dimension8:"Categories"})
      }, onFailure:function(a) {
        u({page:b, title:a.transport.status + " " + a.transport.statusText, dimension8:"Categories"})
      }})
    }
  }, "package":function(a, b) {
    if(a) {
      a = parseInt(a, 10) || 0;
      h++;
      var c = "/api/head/package/" + a + ".json", d = "/package/" + a;
      Kharma.io.get({uri:c, onSuccess:function(a) {
        var e = "", f = "", i, g, h;
        b && b(a.json.result.redirect);
        a.json.result ? (e = d, f = a.json.result.title, i = a.json.result.publisher, g = a.json.result.category) : a.json.error ? (e = d, f = "404 Not Found") : (e = c, f = a.transport.status + " " + a.transport.statusText);
        h = {page:e, title:f, dimension8:"Packages"};
        if(i) {
          h.dimension9 = i
        }
        if(g) {
          h.dimension11 = g
        }
        u(h);
        a.json.result && a.json.result.ga && a.json.result.ga.id && w({custom:a.json.result.ga, page:e, title:f})
      }, onFailure:function(a) {
        u({page:c, title:a.transport.status + " " + a.transport.statusText, dimension8:"Packages"})
      }})
    }
  }, packageReview:function(a, b, c, d) {
    var a = parseInt(a, 10) || 0, b = parseInt(b, 10) || 0, e = "", f = "", e = {"/edit":"Edit Review", "/edit/success":"Edit Review Success", "/edit/failed":"Edit Review Failed", "/reply":"Reply Review", "/reply/success":"Reply Review Success", "/reply/failed":"Reply Review Failed", "/reply/edit":"Edit Reply", "/reply/edit/success":"Edit Reply Success", "/reply/edit/failed":"Edit Reply Failed", "/delete":"Delete Review", "/delete/success":"Delete Review Success", "/delete/failed":"Delete Review Failed", 
    "/delete/reply":"Delete Reply", "/delete/reply/success":"Delete Reply Success", "/delete/reply/failed":"Delete Reply Failed", "/report/abuse":"Report Abuse", "/report/abuse/success":"Report Abuse Success", "/report/abuse/failed":"Report Abuse Failed"};
    e[c] ? (e = "Package: " + e[c], f = "/package/" + a + "/review/" + b + c) : (e = "Package Review: Unknown Action", f = "/package/" + a + "/unknown" + c);
    if(!a || !b) {
      e = "404 Not Found"
    }
    a = {page:f, title:e, dimension8:"Packages"};
    if(d) {
      a.dimension16 = d
    }
    u(a)
  }, packageOther:function(a, b, c) {
    var a = parseInt(a, 10) || 0, d = "", e = "", d = {"/review":"Create Review", "/review/success":"Create Review Success", "/review/failed":"Create Review Failed", "/report/abuse":"Report Abuse", "/report/abuse/success":"Report Abuse Success", "/report/abuse/failed":"Report Abuse Failed", "/release-notes":"Release notes"};
    d[b] ? (d = "Package: " + d[b], e = "/package/" + a + b) : (d = "Package Other: Unknown Action", e = "/package/" + a + "/unknown" + b);
    a || (d = "404 Not Found");
    a = {page:e, title:d, dimension8:"Packages"};
    if(c) {
      a.dimension16 = c
    }
    u(a)
  }, publisher:function(a) {
    if(a) {
      a = parseInt(a, 10) || 0;
      h++;
      var b = "/api/head/publisher/" + a + ".json", c = "/publisher/" + a;
      Kharma.io.get({uri:b, onSuccess:function(a) {
        var d = "", e = "";
        a.json.result ? (d = c, e = a.json.result.title) : a.json.error ? (d = c, e = "404 Not Found") : (d = b, e = a.transport.status + " " + a.transport.statusText);
        u({page:d, title:e, dimension8:"Publishers"});
        a.json.result && a.json.result.ga && a.json.result.ga.id && w({custom:a.json.result.ga, page:d, title:e})
      }, onFailure:function(a) {
        u({page:b, title:a.transport.status + " " + a.transport.statusText, dimension8:"Publishers"})
      }})
    }
  }, publisherOther:function(a, b, c) {
    var a = parseInt(a, 10) || 0, d = "", e = "", d = {"/report/abuse":"Report Abuse", "/report/abuse/success":"Report Abuse Success", "/report/abuse/failed":"Report Abuse Failed"};
    d[b] ? (d = "Publisher: " + d[b], e = "/publisher/" + a + b) : (d = "Publisher: Unknown Action", e = "/publisher/" + a + "/unknown" + b);
    a || (d = "404 Not Found");
    a = {page:e, title:d, dimension8:"Publishers"};
    if(c) {
      a.dimension16 = c
    }
    u(a)
  }, search:function(a) {
    a = encodeURIComponent(a.replace(/\s*&\s*/, " "));
    a = {page:"/search-result?q=" + a, title:"Search Results", dimension8:"Searching"};
    h++;
    u(a)
  }, sale:function() {
    h++;
    u({page:"/sale", title:"Sale", dimension8:"Sales"})
  }, level11:function() {
    h++;
    u({page:"/level11", title:"Level 11", dimension8:"Sales"})
  }, createAccount:function() {
    u({page:"/create-account", title:"Create Account", dimension8:"User Account"})
  }, preview:function(a) {
    a = parseInt(a, 10) || 0;
    u({page:"/preview/" + a, title:"Package Preview", dimension8:"Previews"})
  }, profile:function(a) {
    a = parseInt(a, 10) || 0;
    a = {page:"/profile/" + a, title:"User Profile", dimension8:"User Profiles"};
    h++;
    u(a)
  }, account:function(a, b, c) {
    var a = parseInt(a, 10) || 0, d = "", e = "", d = {"/licenses":"Licenses", "/transactions":"Transactions", "/transactions/credits":"Credits", "/profile/bio/edit":"Edit Biography", "/profile/bio/edit/success":"Edit Biography Success", "/profile/bio/edit/failed":"Edit Biography Failed", "/profile/billing-address/edit":"Edit Billing Address", "/profile/billing-address/edit/success":"Edit Billing Address Success", "/profile/billing-address/edit/failed":"Edit Billing Address Failed", "/profile/username/edit":"Change Display Name", 
    "/profile/username/edit/success":"Change Display Name Success", "/profile/username/edit/failed":"Change Display Name Failed", "/profile/password/edit":"Change Password", "/profile/password/edit/success":"Change Password Success", "/profile/password/edit/failed":"Change Password Failed", "/voucher/redeem":"Redeem Voucher", "/voucher/redeem/success":"Redeem Voucher Success", "/voucher/redeem/failed":"Redeem Voucher Failed", "/report/abuse":"Report Abuse", "/report/abuse/success":"Report Abuse Success", 
    "/report/abuse/failed":"Report Abuse Failed"};
    d[b] ? (d = "User Account: " + d[b], e = "/account/" + a + b) : (d = "User Account", e = "/account/" + a);
    a || (d = "401 Unauthorized");
    a = {page:e, title:d, dimension8:"User Account"};
    if(c) {
      a.dimension16 = c
    }
    u(a)
  }, downloadManager:function() {
    u({page:"/download-manager", title:"Download Manager", dimension8:"Download Manager"})
  }, wishlist:function(a) {
    a = parseInt(a, 10) || 0;
    u({page:"/wishlist/" + a, title:"User Wishlist", dimension8:"User Profiles"})
  }, cart:function() {
    u({page:"/cart", title:"Cart", dimension8:"Shopping"})
  }, checkout:function(a, b) {
    var c = "", d = "";
    switch(a) {
      case "/receipt":
        s();
        c = "Checkout Receipt";
        d = "/checkout/receipt";
        break;
      case "/failed":
        c = "Checkout Failed";
        d = "/checkout/failed";
        break;
      case "/unknown":
        c = "Checkout Unknown";
        d = "/checkout/unknown";
        break;
      default:
        c = "Checkout", d = "/checkout"
    }
    c = {page:d, title:c, dimension8:"Checkout"};
    if(b) {
      c.dimension16 = b
    }
    u(c)
  }, login:function(a) {
    var b = "", d = "";
    switch(a) {
      case "/success":
        b = "Login Success";
        d = "/login/success";
        break;
      case "/failed":
        b = "Login Failed";
        d = "/login/failed";
        break;
      default:
        b = "Login", d = "/login"
    }
    b = {page:d, title:b, dimension8:"Account"};
    if(a === "/success" && (b.dimension3 = c, h > 1)) {
      b.sessionControl = "start"
    }
    u(b)
  }, logout:function() {
    u({page:"/logout", title:"Logout Completed", sessionControl:"end", dimension8:"Account"})
  }, apmMusicStore:function() {
    h++;
    u({page:"/apmMusicStore", title:"APM Music Store", dimension8:"Partner Store"})
  }};
  u = function(a) {
    if(a) {
      a.hitType = "pageview", x(a)
    }
  };
  w = function(a) {
    if(a) {
      a.hitType = "pageview", A(a)
    }
  };
  K = {facebook:function(a) {
    var b = {socialNetwork:"Facebook"};
    switch(a.action) {
      case "share":
        b.socialAction = "Share"
    }
    B(b, a)
  }, googlePlus:function(a) {
    var b = {socialNetwork:"Google+"};
    switch(a.action) {
      case "share":
        b.socialAction = "Share"
    }
    B(b, a)
  }, twitter:function(a) {
    var b = {socialNetwork:"Twitter"};
    switch(a.action) {
      case "tweet":
        b.socialAction = "Tweet"
    }
    B(b, a)
  }};
  B = function(a, b) {
    if(a) {
      a.hitType = "social";
      if(b.url) {
        a.socialTarget = b.url
      }
      switch(b.target.type) {
        case "package":
          a.dimension8 = "Packages";
          a.dimension9 = b.target.publisherName;
          a.dimension10 = b.target.packageName;
          break;
        case "publisher":
          a.dimension8 = "Publishers", a.dimension9 = b.target.publisherName
      }
      x(a)
    }
  };
  G = {wishlist:function(a) {
    if(a) {
      var b = {eventCategory:"Wishlist", nonInteraction:!0, eventAction:{add:"Add", remove:"Remove"}[a.action], eventLabel:{"package":"Package", wishlist:"Wishlist"}[a.label], dimension9:a.target.publisherName, dimension10:a.target.packageName};
      if(a.action === "add") {
        b.metric5 = 1
      }else {
        if(a.action === "remove") {
          b.metric5 = -1
        }
      }
      I(b)
    }
  }, cart:function(a) {
    if(a) {
      var b = {eventCategory:"Cart", nonInteraction:!0, eventAction:{add:"Add", remove:"Remove"}[a.action], eventLabel:{"package":"Package", wishlist:"Wishlist", cart:"Cart"}[a.label], dimension9:a.target.publisherName, dimension10:a.target.packageName};
      if(a.action === "add") {
        b.metric6 = 1
      }else {
        if(a.action === "remove") {
          b.metric6 = -1
        }
      }
      I(b)
    }
  }, login:function(a) {
    a && I({eventAction:{login:"Login"}[a.action], eventLabel:{loginUnityEditor:"Login called from Unity Editor"}[a.label]})
  }, promotion:function(a) {
    if(a) {
      var b = {eventCategory:"Promotion", nonInteraction:!0, eventAction:{dailyDeal:"Daily Deal", homePrimary:"Home Primary", homeSecondary:"Home Secondary", categorySecondary:"Category Secondary"}[a.action], eventLabel:a.position, dimension9:a.target.publisherName, dimension10:a.target.packageName};
      if(a.action === "categorySecondary") {
        b.dimension11 = a.origin.categoryName
      }
      I(b)
    }
  }, newsletter:function() {
    I({eventCategory:"Newsletter Signup", nonInteraction:!0})
  }, inbound:function(a) {
    if(a) {
      var b = {eventCategory:"Inbound", nonInteraction:!0, eventAction:{mostPopular:"Most Popular", searchResult:"Search Result", recommendations:"Recommendations", moreFromPublisher:"More From Publisher", topFree:"Top Free", topPaid:"Top Paid", topGrossing:"Top Grossing", topLatest:"Top Latest", topSale:"Top Sale"}[a.action], dimension9:a.target.publisherName, dimension10:a.target.packageName};
      if(a.label) {
        b.eventLabel = a.label
      }else {
        if(a.position) {
          b.eventLabel = "Position " + a.position
        }
      }
      if(a.value) {
        b.eventValue = a.value
      }
      I(b)
    }
  }, outbound:function(a) {
    a && I({eventCategory:"Outbound", nonInteraction:!0, eventAction:{link:"Link"}[a.action], eventLabel:a.label})
  }, "package":function(a) {
    if(a) {
      var b = {free:"Free", paid:"Paid"}, c = {eventCategory:"Package", nonInteraction:!0, eventAction:{download:"Download", update:"Update", "import":"Import"}[a.action], dimension8:{packages:"Packages", downloadManager:"Download Manager"}[a.area], dimension9:a.publisherName, dimension10:a.packageName};
      if(a.label) {
        c.eventLabel = b[a.label]
      }
      I(c)
    }
  }, review:function(a) {
    if(a) {
      var b = {nonInteraction:!0, eventCategory:"Reviews", eventAction:{review:"Review", replay:"Replay", editReview:"Edit Review", editReplay:"Edit Replay", deleteReview:"Delete Review", deleteReplay:"Delete Replay"}[a.action], dimension8:a.target.area, dimension9:a.target.publisherName, dimension10:a.target.packageName};
      switch(a.action) {
        case "review":
          b.metric7 = 1;
          break;
        case "replay":
          b.metric8 = 1;
          break;
        case "deleteReview":
          b.metric7 = -1;
          break;
        case "deleteReplay":
          b.metric8 = -1
      }
      I(b)
    }
  }, rating:function(a) {
    if(a && a.value) {
      var b = {nonInteraction:!0, eventCategory:"Reviews", eventAction:"Rating", dimension8:a.target.area, dimension9:a.target.publisherName, dimension10:a.target.packageName}, c = a.value;
      switch(a.value) {
        case 1:
          b.metric12 = 1;
          break;
        case 2:
          b.metric13 = 1;
          break;
        case 3:
          b.metric14 = 1;
          break;
        case 4:
          b.metric15 = 1;
          break;
        case 5:
          b.metric16 = 1
      }
      if(a.previousValue && a.previousValue !== a.value) {
        switch(c = a.value - a.previousValue, a.previousValue) {
          case 1:
            b.metric12 = -1;
            break;
          case 2:
            b.metric13 = -1;
            break;
          case 3:
            b.metric14 = -1;
            break;
          case 4:
            b.metric15 = -1;
            break;
          case 5:
            b.metric16 = -1
        }
      }
      b.metric10 = 1;
      b.metric11 = c;
      I(b)
    }
  }, artwork:function(a) {
    if(a) {
      var b = {screenshot:"Graphic", youtube:"YouTube", vimeo:"Vimeo", soundcloud:"SoundCloud", mixcloud:"Mixcloud", sketchfab:"Sketchfab", unityplayer:"Unity Player"}, c = {eventCategory:"Artwork", nonInteraction:!0, dimension9:a.target.publisherName, dimension10:a.target.packageName, metric17:1};
      if(b[a.action]) {
        if(c.eventAction = b[a.action], a.type === "av") {
          c.metric19 = 1
        }else {
          if(a.type === "graphic") {
            c.metric18 = 1
          }
        }
      }else {
        c.eventAction = "Unknown"
      }
      if(a.position) {
        c.eventLabel = "Position " + a.position
      }
      I(c)
    }
  }};
  I = function(a) {
    if(a) {
      a.hitType = "event", x(a)
    }
  };
  /PhantomJS/.test(window.navigator.userAgent) ? o = !1 : J();
  return{event:function() {
    var a = Array.prototype.slice.call(arguments), b = a.shift();
    G[b] && typeof G[b] === "function" && G[b].apply(G[b], a)
  }, social:function() {
    var a = Array.prototype.slice.call(arguments), b = a.shift();
    K[b] && typeof K[b] === "function" && K[b].apply(K[b], a)
  }, view:function() {
    var a = Array.prototype.slice.call(arguments), b = a.shift();
    C[b] && typeof C[b] === "function" && C[b].apply(C[b], a)
  }, paymentInfo:function() {
    var c = {client_id:g, navigator:a, language:Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US"};
    if(a === "CN:N2") {
      c.editor_version = Kharma.unityEditor.getEditorVersion(), c.editor_license = b
    }
    return c
  }}
};
Kharma.History = function() {
  var g = 0, h = [], a = null, d = Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated(), c, e;
  c = function(b) {
    d ? h.push(b) : h[0] = b;
    a = 0;
    b.load()
  };
  e = function(b) {
    a !== null && (h[a].clear(), h[a].isLoaded() || (b.load(), h[a] = b, Kharma.toolbar.updateButtons()))
  };
  return{getCurrentPage:function() {
    return Kharma.history.page
  }, getDistance:function() {
    return g
  }, getHistory:function() {
    return h
  }, getIndex:function() {
    return a
  }, goBackOrHome:function() {
    a > 0 ? d ? (h[a].clear(), h.pop(), a--, h[a].load()) : Kharma.utils.windowWrapper.history.go(-1) : $.address.value("/")
  }, historyPage:function() {
    d ? a >= 0 && (h[a].clear(), a += g, g = 0, h[a].load(), Kharma.toolbar.updateButtons()) : (Kharma.utils.windowWrapper.history.go(g), g = 0)
  }, newPage:function(b) {
    if(b) {
      if(Kharma.history.page && Kharma.history.page.getRequestUrl() === b.getRequestUrl()) {
        return e(b)
      }
      Kharma.history.page = b;
      if(a === null || a < 0) {
        $("#mainContent").on(Kharma.utils.events.onLoginSuccessful, function() {
          c(Kharma.history.page)
        })
      }else {
        h[a].clear(), h[a].isLoaded() || (b.load(), h.push(b), a++, Kharma.toolbar.updateButtons())
      }
    }
  }, replacePage:e, resetHistory:function() {
    h = [];
    a = null
  }, setDistance:function(a) {
    g = a
  }}
};
Kharma.Time = {SECOND:1E3, MINUTE:6E4, HOUR:36E5, DAY:864E5, MONTH:2592E6, YEAR:31536E6};
Kharma.IO = function() {
  var g = [], h = {}, a = {}, d = Kharma.Time.MINUTE * 10, c = "en-US", e, b, f, i, m, j, k;
  e = function(a, b) {
    return function(c, d, e) {
      d = {transport:e, success:d, error:c};
      j(e);
      a && (b.context && b.context === Kharma.history.getCurrentPage() ? a.call(b.context, d, c) : a(d, c))
    }
  };
  b = function(a, c) {
    return function(d, i, h) {
      var m = Kharma.history.getCurrentPage(), k = {transport:d, success:i, error:h}, h = k.transport.getResponseHeader("X-Kharma-ExceptionType"), v = k.transport.status;
      m && m.setLoaded(!0);
      switch(h) {
        case "ServerVersionUpdated":
          new Kharma.TimedError({message:[Kharma.l10n.error.serverVersionUpdated, Kharma.l10n.error.serverVersionUpdatedMessage], timeout:7});
          setTimeout(function() {
            location.reload(!0)
          }, 3E3);
          break;
        case "ReloadRequired":
          new Kharma.TimedError({message:[Kharma.l10n.error.reloadRequired, Kharma.l10n.error.reloadRequiredMessage], timeout:7});
          setTimeout(function() {
            location.reload(!0)
          }, 3E3);
          break;
        case "UserNotActivated":
          if(c.uri === "/login") {
            break
          }
          new Kharma.TimedError({message:Kharma.errorsHelper.errors.activation, timeout:7});
          break;
        case "MustAcceptUserTerms":
          new Kharma.TermsDialog({callback:function(a) {
            if(a) {
              g.push({request:$.ajax(c).done(f(c.onSuccess, c)).fail(b(c.onFailure, c)).error(e(c.onException, c)), options:c})
            }else {
              c.onFailure(k)
            }
          }});
          return
      }
      v === 404 && $.address.value("/404");
      m = {401:Kharma.errorsHelper.errors.notLoggedIn, 403:Kharma.errorsHelper.errors.unknown, 404:Kharma.errorsHelper.errors.notFound, 500:Kharma.errorsHelper.errors.internalServerError}[v] || Kharma.errorsHelper.errors.unknown;
      a ? c.context && c.context === Kharma.history.getCurrentPage() ? a.call(c.context, k) : a(k) : i !== "abort" && m && !Kharma.io.ignoreErrors && console.error(m, k.error);
      j(d)
    }
  };
  f = function(b, d) {
    return function(e, f, i) {
      f = {json:e, success:f, transport:i};
      j(i);
      if(d.uri === "/login") {
        c = e.language_code, Kharma.helper.loadLanguage(c)
      }
      if(d.uri && (d.uri.indexOf(".json") !== -1 || d.requestHeaders.Accept && d.requestHeaders.Accept.indexOf("application/json") !== -1) && !f.json) {
        if(i.status === 0) {
          return
        }else {
          return new Kharma.TimedError({message:Kharma.errorsHelper.errors.parse, timeout:7, internalErrorMsg:d.url})
        }
      }
      a[d.uri] = (new Date).getTime() + d.cacheExpiryPeriod;
      h[d.uri] = f;
      b && (d.pageSpecific ? d.context === Kharma.history.getCurrentPage() && b.call(d.context, f) : b(f))
    }
  };
  i = function(b) {
    delete a[b];
    delete h[b]
  };
  m = function() {
    return d
  };
  j = function(a) {
    $.each(g, function(b, c) {
      c && c.request === a && g.splice(b, 1)
    })
  };
  k = function(a) {
    var b, c = [];
    for(b in a) {
      a.hasOwnProperty(b) && c.push(encodeURIComponent(b) + "=" + a[b])
    }
    c.length > 0 && (c = c.join("&"));
    return c
  };
  return{abortRequests:function() {
    $.each(g, function(a, b) {
      b && b.options && b.options.pageSpecific && b && b.request && b.request.abort()
    })
  }, ajaxRequests:g, buildIOWrapper:function(i) {
    return function() {
      var j, o, p, r, s, q = Array.prototype.slice.call(arguments).pop(), v, t = $.extend({}, i), y, x;
      Kharma.session.getSession(function(i) {
        x = {"X-Requested-With":"UnityAssetStore", "X-Unity-Session":i || "26c4202eb475d02864b40827dfff11a14657aa41", "X-Kharma-Version":Kharma.Version};
        for(var n in q) {
          q.hasOwnProperty(n) && (t[n] = q[n])
        }
        if(c) {
          t.uri = t.uri.replace("/api/", "/api/" + c + "/")
        }
        t.requestHeaders = $.extend(x, t.requestHeaders);
        t.context = t.pageSpecific && Kharma.history.getCurrentPage() || {};
        y = t.method;
        d = t.cacheExpiryPeriod || m();
        o = t.context;
        v = t.onSuccess;
        r = t.parameters && t.hideParameters !== !0 ? "?" + k(t.parameters) : "";
        if(y === "get" && (p = a[t.uri + r])) {
          if(s = (new Date).getTime(), p > s && (j = h[t.uri + r])) {
            return o ? v.call(o, j) : v(j), !0
          }
        }
        g.push({request:$.ajax({async:t.async !== !1, cache:!0, context:o, data:t.parameters || t.data || {}, type:y, traditional:!0, url:t.uri, headers:t.requestHeaders}).done(f(v, t)).fail(b(t.onFailure, t)).error(e(t.onException, t)), options:t})
      })
    }
  }, buildExceptionWrapper:e, buildFailureWrapper:b, buildSuccessWrapper:f, flushCacheAll:function() {
    a = {};
    h = {}
  }, flushCacheExpired:function() {
    var b = (new Date).getTime();
    (h && Object.keys(h).length) > 0 && $.each(a, function(a, c) {
      b - c >= d && i(a)
    })
  }, getCacheDefaultExpiryPeriod:m, flushCacheKey:i, ignoreErrors:!1}
};
Kharma.UserMenus = function() {
  return{login:function() {
    return{location:null, commands:[{label:Kharma.l10n.user.logIn, action:function() {
      (new Kharma.LoginDialog).show()
    }}]}
  }, profile:function(g) {
    var h = [];
    g.admin && h.push({label:Kharma.l10n.admin.activate, action:Kharma.admin.buildAdmin});
    h.push({label:Kharma.l10n.user.account, action:Kharma.login.goAccountPage}, {label:Kharma.l10n.user.creditCardPayPalTransactions, action:function() {
      $.address.value("/account/transactions")
    }}, {label:Kharma.l10n.user.transactions, action:function() {
      $.address.value("/account/transactions/credits")
    }}, {label:Kharma.l10n.user.license.licenses, action:function() {
      $.address.value("/account/licenses")
    }}, {label:Kharma.l10n.user.publicProfile, action:function() {
      $.address.value("/user/" + Kharma.login.user.id)
    }});
    g.server_switcher && (h = h.concat(["https://kharma.assetstore.unity3d.com", "https://kharma-qa.assetstore.unity3d.com/only_to_be_used_for_development.html", "https://kharma-dev.assetstore.unity3d.com/only_to_be_used_for_development.html", "http://kharma-local.assetstore.unity3d.com/only_to_be_used_for_development.html"].map(function(a) {
      return{label:Kharma.helper.getURLFlavour(a) + " Server", action:function() {
        Kharma.session.clearSession();
        Kharma.utils.windowWrapper.location.setHref(a)
      }}
    })));
    if(g.admin && (!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated())) {
      h.push({label:Kharma.unityEditor.isEmulated() ? Kharma.l10n.editor.disable : Kharma.l10n.editor.enable, action:Kharma.unityContext.toggle})
    }
    h.push({label:Kharma.l10n.user.logOut, action:Kharma.login.logout});
    return{location:null, commands:h}
  }}
};
Kharma.Login = function(g) {
  var h = !1, a = !1, d = !1, c = "", e = !1, b, f, i, m, j, k, n, l, o, p, r, s, q, v, t, y, x, A, z;
  f = function(a) {
    var b = $("body");
    b.removeClass("language-en langauge-kr language-jp");
    b.addClass("language-" + (a || "en"))
  };
  i = function(a) {
    if(Kharma.preloaded === void 0) {
      var b = Kharma.utils.windowWrapper.history.hasHistory(), c = Kharma.utils.windowWrapper.location.getHref(), d = Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated(), e = Kharma.login.user.language_url_code, f = Kharma.utils.windowWrapper.location.getPathName();
      if(d) {
        Kharma.io.ignoreErrors = !0
      }
      f.split("/").length > 2 ? /\w{2}/.exec(f)[0] !== e ? (c = c.replace(/\w{2}/.exec(f)[0], e), Kharma.utils.windowWrapper.location.setHref(c)) : a && /\w{2}/.exec(f)[0] !== a ? (c = c.replace(/\w{2}/.exec(f)[0], a), d ? Kharma.utils.windowWrapper.location.setHref(c) : b && (Kharma.utils.windowWrapper.history.replaceState({}, document.title, c), Kharma.utils.windowWrapper.location.reload())) : d && Kharma.unityEditor.getInitialOpenURL(function(a, b) {
        if(a) {
          throw a.message;
        }else {
          b && Kharma.assetStore.openURL(b)
        }
      }) : d ? f === "/" ? Kharma.utils.windowWrapper.location.setHref(c + "en/") : Kharma.utils.windowWrapper.location.setHref(c.replace(Kharma.utils.windowWrapper.location.getPathName(), "/en" + Kharma.utils.windowWrapper.location.getPathName())) : b && Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getPathName().replace(f, "/" + e + f + Kharma.utils.windowWrapper.location.getHash()))
    }
    $("#mainContent").trigger(Kharma.utils.events.onLanguageChange)
  };
  j = function(a) {
    var c = $('<div class="language"></div>'), d = $('<div class="language-menu"></div>'), e = $('<div class="language-status"></div>');
    e.on("click", function(a) {
      a.stopPropagation();
      a = $("#header .menu");
      b.hasClass("active") && b.toggleClass("active");
      a.hasClass("active") && a.toggleClass("active");
      $("body").one("click", function() {
        c.hasClass("active") && (c.removeClass("active"), d.removeClass("active"))
      });
      c.toggleClass("active");
      d.toggleClass("active")
    });
    q(d);
    c.append(e);
    a.append(c);
    g.append(d);
    Kharma.helper.updateLanguageStatus()
  };
  k = function() {
    var a = $("<div class='container'></div>"), b = $('<div class="menu"></div>'), c = $('<div class="user-ui"></div>'), d = $('<div class="status"></div>');
    d.on("click", function(a) {
      a.stopPropagation();
      var a = $(".language"), d = $(".language-menu");
      a.hasClass("active") && a.toggleClass("active");
      d.hasClass("active") && d.toggleClass("active");
      $("body").one("click", function() {
        c.hasClass("active") && m()
      });
      c.toggleClass("active");
      b.toggleClass("active")
    });
    $("<img>").addClass("user-icon").appendTo(d);
    $("<div>").addClass("user-status").appendTo(d);
    $("<div>").addClass("user-log-out").appendTo(d);
    $('<div class="user-ui-signed-out"></div>').appendTo(a);
    $(".container").length === 0 && (a.append(c.append(d)).appendTo(g), g.append(b));
    return c
  };
  l = function() {
    var a = Kharma.utils.windowWrapper.location.getPathName();
    return a.split("/").length > 2 ? /\w{2}/.exec(a)[0] : ""
  };
  o = function(a) {
    Kharma.unityEditor.getLicenseAndHardwareHash(function(b, c, d) {
      if(b) {
        throw b.message;
      }
      Kharma.io.post({parameters:{license_hash:c, hardware_hash:d, language_code:l()}, uri:"/login", requestHeaders:{Accept:"application/json"}, onSuccess:function(b) {
        p(b, a)
      }, onFailure:function() {
        n()
      }})
    })
  };
  p = function(b, g) {
    var m = $("#mainContent");
    Kharma.session.setSession(b.json.xunitysession, b.json.username, b.json.is_anonymous);
    /unity3d.com$/.test(b.json.username) && (a = !0);
    if(b.json.uuid) {
      c = b.json.uuid
    }
    b.json.publisher && (d = !0);
    Kharma.login.user = b.json;
    g && g(!0, "success");
    h = Kharma.login.isAdmin = b.json.roles && b.json.roles.admin ? !0 : !1;
    if(b.json && b.json.kharma_version) {
      Kharma.Version = b.json.kharma_version
    }
    m.trigger(Kharma.utils.events.onLoginSuccessful);
    m.trigger(Kharma.utils.events.onUserStateChange);
    m.trigger(Kharma.utils.events.onUserLogin);
    e = !1;
    i();
    f(Kharma.login.user.language_url_code)
  };
  r = function(a) {
    var b = $(a.target), a = b.attr("l10n");
    Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:a}, onSuccess:function() {
      i(b.attr("url"))
    }})
  };
  q = function(a) {
    var b = $("<ul>");
    $.each(Kharma.helper.getLanguages(), function(a, c) {
      $("<li>").append($("<a>").attr("l10n", c.language).text(c.label).attr("url", c.url).on("click", r)).appendTo(b)
    });
    a.empty().append(b)
  };
  x = function(a, c) {
    a || c ? (b.find(".user-status").text(a || c).attr("title", c), b.find(".status").show()) : b.find(".status").hide()
  };
  v = function(a) {
    var c = b.find(".user-icon");
    a !== null ? (c.attr("src", a), c.show()) : c.hide()
  };
  t = function(a) {
    var b = g.find(".menu"), c = $("<ul>");
    $.each(a.commands, function(a, b) {
      $("<li>").append($("<a>").attr("id", "menu-item-" + b.label.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/\W+/g, "-")).text(b.label).on("click", {item:b}, function(a) {
        a.preventDefault();
        m();
        b.action()
      })).appendTo(c)
    });
    b.empty().append(c)
  };
  y = function(a) {
    var b = a.commands, c = 0, d, e = $(".user-ui-signed-out").empty(), f = function(a) {
      a.preventDefault();
      a.data.command.action()
    };
    g.addClass("signed-out");
    e.append($("<div>").attr("id", "menu-item-create-account").html('<a target="_blank" href="https://accounts.unity3d.com/sign-up">' + Kharma.l10n.user.createAccount + "</a>"));
    for(d = b.length;c < d;c++) {
      a = b[c], e.append($("<div>").attr("id", "menu-item-log-in").text(a.label).on("click", {command:a}, f))
    }
  };
  m = function() {
    b.removeClass("active");
    g.find(".menu").removeClass("active")
  };
  z = function() {
    if(Kharma.unityEditor.isEditor()) {
      var a = new Kharma.UserMenus, c = $(".user-ui-signed-out"), d = $(".container"), e = Kharma.login && Kharma.login.user && Kharma.login.user.roles || {};
      d.find(".language").remove();
      j(d);
      e.level11member && b.addClass("level-11");
      Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? (b.show(), c.hide(), g.removeClass("signed-out"), x(Kharma.login.user.name + (h ? " (" + Kharma.helper.getCurrentURLFlavour() + ")" : ""), Kharma.login.username), Kharma.login.user.keyimage && v(Kharma.login.user.keyimage.icon24), t(a.profile(e))) : (c.show(), b.hide(), g.addClass("signed-out"), v(null), x(), y(a.login()))
    }
  };
  A = function() {
    z()
  };
  n = function() {
    e = !1;
    Kharma.session.clearSession();
    $("#mainContent").trigger(Kharma.utils.events.onUserStateChange)
  };
  s = function(a) {
    var b, c;
    e = !0;
    Kharma.unityEditor.getLicenseAndHardwareHash(function(d, e, f) {
      if(d) {
        throw d.message;
      }
      a ? (c = {license_hash:e, hardware_hash:f, reuse_session:a, language_code:l()}, Kharma.io.post({uri:"/login", requestHeaders:{Accept:"application/json"}, parameters:c, onSuccess:function(a) {
        p(a, null)
      }, onFailure:function() {
        n();
        o()
      }})) : (b = Kharma.history.getCurrentPage(), (!b || b.type !== "log") && A())
    })
  };
  (function() {
    b = Kharma.unityEditor.isEditor() ? k() : $("<div>");
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, A);
    Kharma.session.getSession(function(a) {
      a ? s(a) : o()
    })
  })();
  return{authenticate:function(a, b, c) {
    e = !0;
    Kharma.unityEditor.getLicenseAndHardwareHash(function(d, e, f) {
      if(d) {
        throw d.message;
      }
      Kharma.io.post({uri:"/login", hideParameters:!0, requestHeaders:{Accept:"application/json"}, parameters:{license_hash:e, hardware_hash:f, language_code:l(), user:b, pass:c}, onSuccess:function(b) {
        Kharma.io.flushCacheAll();
        p(b, a)
      }, onFailure:function(d) {
        n();
        b && c && Kharma.ga.view("login", "/failed");
        a(!1, d.transport.getResponseHeader("X-Kharma-ExceptionType") || "Unknown Error")
      }})
    })
  }, changeLanguageUrl:i, goAccountPage:function() {
    $.address.value("/account")
  }, isAdmin:h, loginRequired:function(a) {
    var b = Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous, c = $('<div class="modalblocker login">');
    c.appendTo("body");
    if(b) {
      a(!0), c.remove()
    }else {
      if(e) {
        $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
          a(Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous);
          c.remove()
        })
      }else {
        c.remove(), (new Kharma.LoginDialog).show({messageText:Kharma.l10n.user.pleaseLogIn, callback:function(b) {
          a(b)
        }, avoidReload:!0})
      }
    }
  }, logout:function() {
    Kharma.ga.view("logout");
    Kharma.io.post({uri:"/logout", requestHeaders:{Accept:"application/json"}});
    o(function() {
      h = Kharma.login.isAdmin = !1;
      d = Kharma.login.isPublisher = !1;
      a = Kharma.login.isUnity = !1;
      c = "";
      Kharma.admin.disableAdmin();
      Kharma.cart.items = [];
      Kharma.cart.addAction(function() {
        Kharma.cart.active && Kharma.cart.showCart()
      });
      Kharma.toolbar.updateButtons();
      Kharma.io.flushCacheAll()
    })
  }, reload:function() {
    var a = Kharma.history.getCurrentPage();
    a && (a.clear(), a.load())
  }, updateToolbar:z, getUuid:function() {
    return c
  }, getType:function() {
    var b = Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous;
    return h ? "CT:T5" : a ? "CT:T4" : d ? "CT:T3" : b ? "CT:T2" : "CT:T1"
  }}
};
Kharma.Router = function() {
  var g, h, a, d, c;
  g = function() {
    $(".modalblocker").click()
  };
  h = function(a, b) {
    var c = a && a.parser ? a.parser(b.path.substring(1).split("/")) : {}, c = a.className && new a.className(c);
    c.setRequestUrl(b.value.replace("/directpurchase", ""));
    return c
  };
  a = function(a) {
    return{type:a[0], id:a[1]}
  };
  d = function(a) {
    return{type:a[0], id:a[1], packageVersionId:a[2]}
  };
  c = function() {
    Kharma.unityEditor.isEditor() && Kharma.localStorage.setItem("kharma.server", document.location.href, function(a) {
      if(a) {
        throw a.message;
      }
    })
  };
  return{dispatch:function(e) {
    var b = [{prefix:"/account/downloads", className:Kharma.DownloadsPage, parser:function(a) {
      return{action:a[2], type:a[3], id:a[4]}
    }}, {prefix:"/account/licenses", className:Kharma.LicensesPage}, {prefix:"/account/transactions/credits", className:Kharma.TransactionsCreditsPage}, {prefix:"/account/transactions", className:Kharma.TransactionsPage}, {prefix:"/account", className:Kharma.AccountPage}, {prefix:"/404", className:Kharma.Page404}, {prefix:"/home", className:Kharma.HomePage}, {prefix:"/categories", className:Kharma.CategoriesPage}, {prefix:"/", className:Kharma.HomePage}, {prefix:"/sale", className:Kharma.SalePage, 
    parser:a}, {prefix:"/level11", className:Kharma.Level11Page}, {prefix:"/generalstoretest", className:Kharma.GeneralStoreTestPage}, {prefix:"/apmmusicstore", className:Kharma.ApmMusicStorePage}, {prefix:"/songlilystore", className:Kharma.SongLilyStorePage}, {prefix:"/com.unity3d.kharma:content", className:Kharma.ContentPage, parser:a}, {prefix:"/com.unity3d.kharma:publisher", className:Kharma.PublisherPage}, {prefix:"/com.unity3d.kharma:preview", className:Kharma.PreviewPage, parser:d}, {prefix:"/com.unity3d.kharma:download", 
    className:Kharma.DownloadsPage, parser:function(a) {
      return{action:"download", type:a[1], id:a[2]}
    }}, {prefix:"/category", className:Kharma.CategoryPage, parser:function(a) {
      for(var b, c = {type:a[0], id:a[1]};a.length > 0;) {
        b = a.splice(0, 2), c[b[0]] = b[1]
      }
      return c
    }}, {prefix:"/content", className:Kharma.ContentPage, parser:function(a) {
      return{type:a[0], id:a[1], directPurchase:a[2]}
    }}, {prefix:"/preview", className:Kharma.PreviewPage, parser:d}, {prefix:"/publisher", className:Kharma.PublisherPage, parser:a}, {prefix:"/search", className:Kharma.SearchPage, parser:function(a) {
      return{type:a[0], search:decodeURIComponent(a[1])}
    }}, {prefix:"/user", className:Kharma.UserPage, parser:a}, {prefix:"/wishlist", className:Kharma.WishListPage, parser:a}], f, i, m = 0, j, k;
    for(j = b.length;m < j;m++) {
      if(f = b[m], i = RegExp("^" + f.prefix + "(/|\\?|$)"), i.test(e.value)) {
        k = f;
        break
      }
    }
    if(k) {
      c();
      g();
      document.title = Kharma.l10n.page.title;
      Kharma.io.abortRequests();
      if(Kharma.unityEditor.isEditor() && Kharma.history.getDistance()) {
        return Kharma.history.historyPage()
      }
      return Kharma.history.newPage(h(k, e))
    }else {
      $.address.value("/404")
    }
  }}
};
Kharma.Search = function() {
  var g;
  (function() {
    g = $("#searchInput");
    g.on("keydown", function(h) {
      switch(h.keyCode) {
        case 27:
          h.preventDefault(), g.val("")
      }
    });
    $("#searchForm").on("submit", function(h) {
      var a = g.val();
      h.preventDefault();
      a !== "" && $.address.value("/search/" + encodeURIComponent(a))
    })
  })();
  return{getRecommendations:function(g, a) {
    Kharma.io.get({uri:"/api/search/recommend.json", pageSpecific:!0, parameters:{package_id:g, limit:30}, onSuccess:function(d) {
      a(d.json)
    }, onFailure:function() {
      var a = $("#packageRecommendationsBox .body");
      a.empty();
      a.text(Kharma.l10n.search.searchProviderUnavailable)
    }})
  }, search:function(g, a) {
    Kharma.io.get({uri:"/api/search/results.json", pageSpecific:!0, parameters:{q:g, limit:99}, onSuccess:function(d) {
      a(d.json)
    }, onFailure:function() {
      var a = $("#catresults");
      a.empty();
      a.text(Kharma.l10n.search.searchProviderUnavailable)
    }})
  }}
};
Kharma.Session = function() {
  var g;
  g = function(g) {
    Kharma.localStorage.getItem("kharma.remember_session", function(a, d) {
      if(a) {
        throw a.message;
      }else {
        g(d === "1")
      }
    })
  };
  return{clearSession:function() {
    Kharma.sessionStorage.removeItem("kharma.anonymous_sessionid", function(g) {
      if(g) {
        throw g.message;
      }
    });
    Kharma.sessionStorage.removeItem("kharma.active_sessionid", function(g) {
      if(g) {
        throw g.message;
      }
    });
    Kharma.localStorage.removeItem("kharma.sessionid", function(g) {
      if(g) {
        throw g.message;
      }
    });
    Kharma.localStorage.removeItem("kharma.user", function(g) {
      if(g) {
        throw g.message;
      }
    })
  }, getRememberSession:g, getSession:function(h) {
    Kharma.sessionStorage.hasItem("kharma.active_sessionid", function(a, d) {
      if(a) {
        throw a.message;
      }else {
        if(d) {
          Kharma.sessionStorage.getItem("kharma.active_sessionid", function(a, d) {
            if(a) {
              throw a.message;
            }else {
              h(d)
            }
          });
          return
        }
      }
      g(function(a) {
        Kharma.localStorage.hasItem("kharma.sessionid", function(d, b) {
          if(d) {
            throw d.message;
          }else {
            a && b ? Kharma.localStorage.getItem("kharma.sessionid", function(a, b) {
              if(a) {
                throw a.message;
              }else {
                h(b)
              }
            }) : Kharma.sessionStorage.hasItem("kharma.anonymous_sessionid", function(a, b) {
              if(a) {
                throw a.message;
              }else {
                b ? Kharma.sessionStorage.getItem("kharma.anonymous_sessionid", function(a, b) {
                  if(a) {
                    throw a.message;
                  }else {
                    h(b)
                  }
                }) : h(null)
              }
            })
          }
        })
      })
    })
  }, setRememberSession:function(g) {
    Kharma.localStorage.setItem("kharma.remember_session", g ? "1" : "0", function(a) {
      if(a) {
        throw a.message;
      }
    })
  }, setSession:function(h, a, d) {
    d ? (Kharma.sessionStorage.setItem("kharma.anonymous_sessionid", h, function(a) {
      if(a) {
        throw a.message;
      }
    }), Kharma.sessionStorage.removeItem("kharma.active_sessionid", function(a) {
      if(a) {
        throw a.message;
      }
    }), Kharma.localStorage.removeItem("kharma.sessionid", function(a) {
      if(a) {
        throw a.message;
      }
    }), Kharma.localStorage.removeItem("kharma.user", function(a) {
      if(a) {
        throw a.message;
      }
    })) : (Kharma.sessionStorage.removeItem("kharma.anonymous_sessionid", function(a) {
      if(a) {
        throw a.message;
      }
    }), Kharma.sessionStorage.setItem("kharma.active_sessionid", h, function(a) {
      if(a) {
        throw a.message;
      }
    }), Kharma.localStorage.setItem("kharma.user", a, function(a) {
      if(a) {
        throw a.message;
      }
    }), g(function(a) {
      a ? Kharma.localStorage.setItem("kharma.sessionid", h, function(a) {
        if(a) {
          throw a.message;
        }
      }) : Kharma.localStorage.removeItem("kharma.sessionid", function(a) {
        if(a) {
          throw a.message;
        }
      })
    }))
  }}
};
Kharma.WishList = function() {
  var g = null, h;
  h = function(a, d, c) {
    a && Kharma.io.get({uri:"/api/user/wishlist/" + a + "/" + (c || 0) + ".json", onSuccess:function(a) {
      g = a.json.results;
      $("#mainContent").trigger(Kharma.utils.events.onWishList);
      d && d(g, a.json.total)
    }})
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? h(Kharma.login.user.id) : g = null
    })
  })();
  return{addToWishList:function(a, d) {
    Kharma.io.post({uri:"/api/user/wishlist/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{action:"add", package_id:a}, onSuccess:function(a) {
      var e = a.json.results[0];
      g = a.json.results;
      new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.wishList.packageAdded, {packageName:Kharma.utils.windowWrapper.innerWidth() >= 767 ? e.title : ""}), e);
      d(a.json);
      $("#mainContent").trigger(Kharma.utils.events.onAddedToWishList)
    }})
  }, deleteFromWishList:function(a, d) {
    Kharma.io.post({uri:"/api/user/wishlist/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{action:"remove", package_id:a}, onSuccess:function(c) {
      g = c.json.results || [];
      $("#mainContent").trigger(Kharma.utils.events.onDeletedFromWishList, {packageId:a});
      d && d(g)
    }})
  }, getWishList:h}
};
Kharma.UnityContext = function() {
  var g, h, a;
  g = function() {
    Kharma.localStorage.setItem("emulateEditor", "false", function(a) {
      if(a) {
        throw a.message;
      }
    });
    Kharma.utils.windowWrapper.location.reload()
  };
  h = function() {
    Kharma.localStorage.setItem("emulateEditor", "true", function(a) {
      if(a) {
        throw a.message;
      }
    });
    Kharma.utils.windowWrapper.location.reload()
  };
  a = function(a) {
    Kharma.localStorage.getItem("emulateEditor", function(c, e) {
      if(c) {
        throw c.message;
      }else {
        a(e === "true")
      }
    })
  };
  return{disable:g, Download:function() {
  }, emulated:!0, enable:h, GetAuthToken:function() {
    return"26c4202eb475d02864b40827dfff11a14657aa4126c4202eb475d02864b40827dfff11a14657aa41"
  }, GetEditorVersion:function() {
    return"4.0.0f7"
  }, GetInitialOpenURL:function() {
    return"home"
  }, GetLicenseFlags:function() {
    return[1]
  }, GetPackageList:function() {
    return{results:[{title:"Penelope", link:{type:"content", id:"1"}, id:"1", version:"1.1", pubdate:"05 May 2010", category:{label:"Complete Projects", id:"1"}, publisher:{label:"Unity Technologies", id:"1"}}, {title:"ITween", link:{type:"content", id:"84"}, id:"84", version:"2.0.45.1", pubdate:"05 May 2010", category:{label:"Complete Projects", id:"1"}, publisher:{label:"Unity Technologies", id:"1"}}, {title:"Unlimited+ for Mecanim by Mixamo", link:{type:"content", id:"6439"}, id:"6439", version:"0.5", 
    pubdate:"05 May 2010", category:{label:"Editor Ext/Animation", id:"137"}, publisher:{label:"Mixamo", id:"150"}}, {title:"Character Controller", id:"{C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Character Controller.unityPackage}", publisher:{label:"Unity Technologies", id:"1"}, category:{label:"Prefab Packages", id:"4"}, version:"3.5.0.0", version_id:"-1", local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Character Controller.unityPackage"}, {title:"Glass Refraction (Pro Only)", id:"{C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Glass Refraction (Pro Only).unityPackage}", publisher:{label:"Unity Technologies", id:"1"}, category:{label:"Prefab Packages", id:"4"}, version:"3.5.0.0", version_id:"-1", local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Glass Refraction (Pro Only).unityPackage"}, {link:{type:"content", id:"2828"}, pubdate:"24 Dec 2012", version:"1.16", version_id:"11354", description:'Aperture Cutscene Editor is a powerful cutscene editor for Unity. It allows you to easily setup curve based animations for cameras, materials, characters, or anything else you want to animate. Aperture also has a powerful event triggering system. See your animation in edit mode with the Play Preview button for quick revisions, and setup scripted gameplay event chains.<br><br> You can easily create extension Actions and Events to conform to your projects needs, and the entire editor is open source if you really need some low level access.<br><br>For more info, visit <a href="http://www.aperturecutscene.com">http://www.aperturecutscene.com</a>. <br><br>', 
    category:{label:"Editor Extensions/Animation", id:"102"}, id:"2828", title:"Aperture Cutscene Editor", publisher:{label:"Kurt Loeffler", id:"7"}, local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Users/Leo/AppData/Roaming/Unity/Asset Store/Kurt Loeffler/Editor ExtensionsAnimation/Aperture Cutscene Editor.unitypackage"}, {title:"The Way U Luv Me (81891)", id:"/Users/lasse/Library/Unity/Asset Store-5.x/APM Music/AudioMusic/The Way U Luv Me (81891).unitypackage", version:null, version_id:null, local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"/Users/lasse/Library/Unity/Asset Store-5.x/APM Music/AudioMusic/The Way U Luv Me (81891).unitypackage", pubdate:null, description:null, publisher:null, category:null, link:null}]}
  }, GetSkinIndex:function() {
    return 0
  }, isEnabled:a, MakeMenu:function(a, c, e) {
    $("body").one("click", function(a) {
      a.stopImmediatePropagation()
    });
    c += 100;
    e += 100;
    Kharma.UI.ContextMenu({menuObject:a, left:c, top:e})
  }, OpenBrowser:function(a) {
    Kharma.utils.windowWrapper.open(a)
  }, OpenPackage:function() {
  }, toggle:function() {
    a(function(a) {
      a ? g() : h()
    })
  }}
};
Kharma.UnityEditor = function(g) {
  var h, a, d, c, e;
  h = function(a) {
    return a.type + "__" + a.id
  };
  a = function(a) {
    a = a.toString().match(/(.*)__(.*)/i);
    return{type:a[1], id:a[2]}
  };
  d = function(b, c, d, e) {
    $("#mainContent").trigger(Kharma.utils.events.onDownloadProgress, [a(b), c, d, e])
  };
  c = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\/5.1/)
  };
  e = function() {
    return window.context !== void 0
  };
  (function(a) {
    c() && !window.context && unityObj.getUnityObject("AssetStoreContext", function(c, d) {
      window.context = d;
      a()
    });
    if(!document.AssetStore) {
      document.AssetStore = Kharma.assetStore
    }
    if(!document.AssetStore.pkgs) {
      document.AssetStore.pkgs = {OnDownloadProgress:d}
    }
  })(g);
  return{download:function(a, d) {
    var e = {title:a.filename_safe_package_name, category:{label:a.filename_safe_category_name}, publisher:{label:a.filename_safe_publisher_name}}, g = {id:h(a.link), url:a.url, key:a.key};
    c() ? window.context.Download(e, g, d) : d(null, window.context.Download(e, g))
  }, onDownloadProgress:d, getLicenseAndHardwareHash:function(a) {
    if(e()) {
      var d = function(c, d) {
        d && d.length === 80 ? a(c, d.substr(0, 40), d.substr(40)) : a(c, null, null)
      };
      c() ? window.context.GetAuthToken(d) : d(null, window.context.GetAuthToken())
    }else {
      a(null, null, null)
    }
  }, getEditorVersion:function() {
    var a = null;
    e() && (a = Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\/([^\s]+)/), a = a !== null ? a[1] : Kharma.l10n.editor.unknownVersion);
    return a
  }, getInitialOpenURL:function(a) {
    c() ? window.context.GetInitialOpenURL(a) : a(null, window.context.GetInitialOpenURL())
  }, getLicenseFlags:function(a) {
    c() ? window.context.GetLicenseFlags(a) : a(null, window.context.GetLicenseFlags())
  }, getPackageList:function(a) {
    try {
      if(c()) {
        return window.context.GetPackageList(a)
      }else {
        a(null, window.context.GetPackageList())
      }
    }catch(d) {
      var e = document.title;
      document.title = Kharma.l10n.editor.refreshingContext;
      document.title = e;
      a(null, window.context.GetPackageList())
    }
  }, getSkinIndex:function(a) {
    var d;
    e() ? c() ? window.context.GetSkinIndex(a) : (d = window.context.GetSkinIndex(), a(null, d)) : a(null, 0)
  }, isChromium:c, isEditor:e, isEmulated:function() {
    return window.context && window.context.emulated ? !0 : !1
  }, makeMenu:function(a, c, d) {
    Kharma.UI.ContextMenu({menuObject:a, left:c, top:d})
  }, openBrowser:function(a, d) {
    e() ? c() ? window.context.OpenBrowser(a, d) : d(null, window.context.OpenBrowser(a)) : (Kharma.utils.windowWrapper.open(a), d())
  }, openPackage:function(a, d) {
    a = "{" + a + "}";
    c() ? window.context.OpenPackage(a, d) : d(null, window.context.OpenPackage(a))
  }}
};
Kharma.Dialog = function(g) {
  var h = null, a = null, g = g || {}, d = g.message, c = g.title;
  (function() {
    document.currentMessage = this;
    document.activeElement && document.activeElement.blur();
    h = $("#assetstore");
    a = $("<div id='message' class='dialog message'></div>");
    h.append(a);
    a.append("<h1>" + c + "</h1>");
    a.append('<div class="message-body">' + d + "</div>");
    Kharma.editorHelper.show(a)
  })(g);
  return{base:h, cancel:function() {
    a.css("opacity", 0);
    setTimeout(function() {
      a.remove()
    }, 1E3)
  }, element:a}
};
Kharma.Header = function() {
  var g, h, a, d, c, e, b, f, i, m, j, k;
  g = function(a) {
    a.removeClass("not-active")
  };
  h = function(a) {
    a.addClass("not-active")
  };
  a = function(a) {
    Kharma.unityEditor.isEditor() ? a.hide() : a.fadeOut("fast")
  };
  d = function(b) {
    b && (b.stopPropagation(), b.preventDefault());
    Kharma.unityEditor.isEditor() && a($("#downloadarea"));
    f($("#adminarea"))
  };
  c = function(a) {
    a && (a.stopPropagation(), a.preventDefault());
    !$("#cart").hasClass("not-active") && !$("#cart").hasClass("disabled") && (Kharma.ga.view("cart"), Kharma.cart.showCart())
  };
  e = function(a) {
    a && (a.stopPropagation(), a.preventDefault());
    $.address.value("/account/downloads")
  };
  b = function() {
    var a = $("#adminMode"), b = Kharma.history.getCurrentPage();
    Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous && (b.type === "con" || b.type === "pre") ? (a.removeClass("not-active"), b.openAdminMode()) : (a.addClass("not-active"), $("#adminlayer").hide(), $(".adminlayer_content").hide())
  };
  f = function(b) {
    b.is(":visible") ? (a(b), b.hide()) : b.show()
  };
  i = function() {
    var a = $("#cart"), b = $(a.find(".count"));
    Kharma.cart && Kharma.cart.items && Kharma.cart.items.length > 0 ? (g(a), b.text(Kharma.cart.items.length), b.show()) : (h(a), b.hide());
    Kharma.cart && Kharma.cart.active && g(a)
  };
  m = function() {
    g($("#downloads"))
  };
  j = function() {
    var a = $("#home");
    Kharma.history.getIndex() !== null && Kharma.history.getCurrentPage().type !== "hom" ? g(a) : h(a)
  };
  k = function() {
    $.each($(".buttonstrip a"), function(a, b) {
      $(b).attr("title", Kharma.l10n.toolbar[$(b).attr("data-title")])
    })
  };
  return{addAdministration:function() {
    var a = $("#adminstrip");
    a.addClass("buttonstrip");
    $("#admin").length === 0 && (a.append('<a id="admin" title="' + Kharma.l10n.admin.incomingPackages + '" href="#"><span class="icon" /></a>'), $("#admin").off().on("click", d))
  }, addAdminModeButton:function() {
    var a = $('<a id="adminMode" title="' + Kharma.l10n.admin.showMenu + '" href="#" class="not-active"><span class="icon" /></a>'), c = $("#adminstrip");
    $("#adminMode").length === 0 && c.append(a);
    a.off().on("click", function(b) {
      var c = Kharma.history.getCurrentPage();
      b.stopPropagation();
      b.preventDefault();
      !$("#adminlayer").is(":visible") && c.openAdminMode ? (a.removeClass("not-active"), c.openAdminMode()) : ($("#adminlayer").hide(), $(".adminlayer_content").hide())
    });
    b();
    $("#mainContent").on(Kharma.utils.events.onPageLoadComplete, function() {
      b()
    })
  }, addEvents:function() {
    $("#downloads").off().on("click", e);
    $("#cart").off().on("click", c)
  }, goAdmin:d, goDownloads:e, removeAdministration:function() {
    $("#adminstrip").empty();
    $("#adminarea").is(":visible") && d()
  }, updateButtons:function() {
    j();
    m();
    i();
    k()
  }}
};
Kharma.header = new Kharma.Header;
Kharma.Page = function(g) {
  var h, a = [], d = g || {}, c = d.id || "0", e = "", b = !1, f = [], i = [], m = "", j, k = d.sortby, n, l, o, p, r, s, q, v, t, y, x, A, z, C, u, w, J, G;
  n = function() {
    var a = $(".apm-banner"), b = Kharma.unityEditor.getEditorVersion();
    if(b && parseFloat(b) < 5) {
      a.on("click", function(a) {
        var b = Kharma.utils.windowWrapper.location.getHref(), c = b.indexOf("#"), b = c > 0 ? b.substr(0, c) : b;
        a.stopPropagation();
        a.preventDefault();
        Kharma.unityEditor.openBrowser(b + "#!/apmmusicstore", function(a) {
          if(a) {
            throw a.message;
          }
        })
      })
    }else {
      a.attr("href", "#!/apmmusicstore")
    }
  };
  o = function(a) {
    var b = function() {
      var a = new Date, c = a = Math.round((Kharma.dailyDeal.end.getTime() - a.getTime()) / 1E3), e, f = (c - c % 3600) / 3600;
      c -= f * 3600;
      e = (c - c % 60) / 60;
      c -= e * 60;
      f < 10 && (f = "0" + f);
      e < 10 && (e = "0" + e);
      c < 10 && (c = "0" + c);
      d.hour.text(f);
      d.min.text(e);
      d.sec.text(c);
      if(a > 0) {
        Kharma.dailyDeal.timer = setTimeout(b, 250)
      }
    }, c = $("#daily"), d = {};
    Kharma.dailyDeal === void 0 ? Kharma.dailyDeal = {end:null, timer:null} : clearTimeout(Kharma.dailyDeal.timer);
    c.length === 0 && ($(".level-11-banner").before($(Handlebars.templates.daily({json:a}))), c = $("#daily"), c.on("click", function() {
      Kharma.ga.event("promotion", {action:"dailyDeal", position:"Position 1", target:{packageId:a.id, packageName:a.title, publisherName:a.publisher.label}});
      $.address.value("/content/" + a.id)
    }));
    d = {hour:c.find(".hour"), min:c.find(".min"), sec:c.find(".sec")};
    if(a.remaining > 0) {
      Kharma.dailyDeal.end = new Date, Kharma.dailyDeal.end.setTime(Kharma.dailyDeal.end.getTime() + a.remaining * 1E3), b()
    }
  };
  p = function() {
    var a = Kharma.utils.windowWrapper.location.getPathName().split("/"), b = a[1], c = $("head"), d, e = 0, f, g = Kharma.helper.getLanguages(), i;
    $("link[hreflang]").remove();
    $("html").attr("lang", b);
    for(f = g.length;e < f;e++) {
      i = g[e].url, i !== b && (d = Kharma.utils.windowWrapper.location.getOrigin() + "/" + i + "/" + (a[2] || "") + (Kharma.utils.windowWrapper.location.getHash() || ""), d = $("<link rel='alternate' hreflang='" + (i === "cn" ? "zh-Hans" : i) + "' href='" + d + "'/>"), c.append(d))
    }
  };
  r = function(a, b) {
    Kharma.io.get({uri:"/api/sale/results/10.json", onSuccess:function(a) {
      var c = $("#topBox .body.sale"), d = a.json, e = d.daily, f = $();
      c.empty();
      d && e && b && b(d);
      e && o(e);
      a.json.results.length === 0 ? (c.removeClass("enabled"), c.prev().removeClass("enabled"), c.attr("style", "")) : (f = f.add(c).add(c.prev()), f.addClass("enabled"), f.trigger("autoclick"), f.prependTo(f.parent()), (new Kharma.UI.TopList(a.json.results ? a.json.results : [], !0)).render(c), c.on("click", function(a) {
        G("sale", a)
      }), a.json.feed && a.json.feed !== "" && (a.json.results.length > 1 && c.first().append($("<ul style='padding:5px 0px 10px 20px'><li class='see-more'><a href='#!/sale'>" + Kharma.l10n.sale.allOffers + "</a></li></ul>")), c.prev().find("#feedsale a").first().attr("href", a.json.feed).parent().css("display", "block")), a.json.title && a.json.title !== "" && (a = c.prev().find("h2").empty().append('<a href="#!/sale">' + a.json.title + "</a>"), a.find("a").click(function(a) {
        c.prev().hasClass("active-head") || a.preventDefault()
      })))
    }})
  };
  v = function() {
    var a = [], b = document.getElementsByTagName("meta"), c, d = b.length, e;
    for(c = 0;c < d;c++) {
      (e = b[c] && b[c].getAttribute("property")) && (e.indexOf("og:") !== -1 || e.indexOf("fb:") !== -1) && a.push(b[c])
    }
    c = 0;
    for(d = a.length;c < d;c++) {
      $(a[c]).remove()
    }
  };
  y = function() {
    (e === "acc" || e === "tra" || e === "lic" || e === "dow") && $("#sidebar").hide()
  };
  z = function(a, b, c) {
    Kharma.io.get({uri:a, cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      (new Kharma.UI.TopList(a.json && a.json.results ? a.json.results : [])).render(c);
      c.on("click", function(a) {
        G(b, a)
      });
      a.json.feed && a.json.feed !== "" && $("#feedlatest a").first().attr("href", a.json.feed).parent().css("display", "block")
    }})
  };
  C = function(a) {
    b = a;
    a === !0 && $("#mainContent").trigger(Kharma.utils.events.onPageLoadComplete)
  };
  x = function(a) {
    Kharma.io.get({uri:"/api/home/categories.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(b) {
      var c = Kharma.utils.windowWrapper.innerWidth(), d = c > 980 ? $("#categoryBox .body") : $("#unav-sidebar"), c = c > 980 ? "categoryTree" : "mobileCategoryTree";
      d.empty();
      b.json.categories[0] && b.json.categories[0].id !== "home" && b.json.categories.unshift({id:"home", name:Kharma.l10n.categories.home});
      Kharma.UI.categoryTreeList = new Kharma.UI.TreeList(c, b.json, k);
      Kharma.UI.categoryTreeList.render(d, a)
    }})
  };
  A = function() {
    var a = h !== null && h !== void 0;
    $("#searchInput").attr("placeholder", Kharma.l10n.search.searchAssetStore);
    x(h);
    z(a ? "/api/category/top/paid/" + h + "/10.json" : "/api/home/top/paid/10.json", "paid", $("#topBox .top-paid"));
    z(a ? "/api/category/top/free/" + h + "/10.json" : "/api/home/top/free/10.json", "free", $("#topBox .top-free"));
    z(a ? "/api/category/top/grossing/" + h + "/10.json" : "/api/home/top/grossing/10.json", "grossing", $("#topBox .top-grossing"));
    z(a ? "/api/category/top/latest/" + h + "/10.json" : "/api/home/top/latest/10.json", "latest", $("#topBox .top-latest"));
    Kharma.UI.sidebarAccordion = new Kharma.UI.Accordion($("#topBox"));
    Kharma.search = new Kharma.Search
  };
  l = function(a, b) {
    new Kharma.UI.DownloadButton({content:b, targetElement:a})
  };
  w = function(a, b) {
    $(".userRating.noRating", b).removeClass("noRating").append(Kharma.l10n.pkg.yourRating).after((new Kharma.UI.Rating({packageId:a.id, value:a.rating && a.rating.user, classes:"inline"})).render()).next().after("<br/>")
  };
  u = function() {
    $("#sidebar").remove();
    $("#mainContent").after(j);
    A()
  };
  q = function() {
    s($("#mainContent"));
    f = [];
    $("#contentarea").scrollTop(0)
  };
  s = function(a) {
    var b = 0, c = f.length;
    if(a) {
      for(c = f.length;b < c;b++) {
        $.contains(a[0], f[b].target) && $(f[b].target).hide()
      }
      a.empty()
    }
  };
  t = function(a) {
    var b = [];
    a.data.price_upgrade && $.each(a.data.price_upgrade, function(a, c) {
      b.push(parseFloat(Kharma.helper.formatPrice(c)))
    });
    return $(Handlebars.templates.contentPageFull({categoryLabel:Kharma.l10n.pkg.category, content:a.data, error:a.error, level11:a.level11, message:a.message, notEditor:!Kharma.unityEditor.isEditor(), oneLicense:Kharma.l10n.supplant(Kharma.l10n.level11.oneLicense, {saleLimit:a.data.price_level11member && a.data.price_level11member.sale_limit}), publisherLabel:Kharma.l10n.pkg.publisher, priceLabel:Kharma.l10n.pkg.price, priceUpgrade:b.length > 0 && b.length === 1 ? Kharma.helper.getFormattedPrice(a.data.price_upgrade[a.data.upgrade_package]) : 
    b.length > 0 && Kharma.helper.getCurrency() + Math.min.apply(null, b) + " - " + Kharma.helper.getCurrency() + Math.max.apply(null, b), priceUpgradeLabel:Kharma.l10n.pkg.upgrade, ratingCount:!0, ratingLabel:Kharma.l10n.pkg.rating, userRatingLabel:Kharma.l10n.pkg.yourRating, requireLicense:Kharma.l10n.cart.requireLicense, saleBeforeLabel:Kharma.l10n.sale.before, saleNowLabel:Kharma.l10n.sale.now, urlLabel:Kharma.l10n.pkg.url}))
  };
  J = function(a) {
    var b, c, d, e;
    b = "3.1.0f4";
    var f;
    if(b = navigator.userAgent.match(/ Unity\/[0-9\.a-z]+/i)) {
      b = b[0].substring(7)
    }else {
      return""
    }
    if(a) {
      b = b.replace(/[a-z]\d+$/, "");
      a = a.replace(/[a-z]\d+$/, "");
      f = b.match(/\d+/g);
      c = a.match(/\d+/g);
      for(b = 0;c[b];b++) {
        e = parseInt(f[b], 10);
        d = parseInt(c[b], 10);
        if(e > d) {
          break
        }
        if(e < d) {
          return a
        }
      }
    }
    return""
  };
  G = function(a, b) {
    for(var c = b.target;c && c !== this;) {
      if(c instanceof HTMLLIElement || c instanceof HTMLImageElement) {
        var d;
        c instanceof HTMLImageElement ? (c = $(c.parentNode), d = 0) : (c = $(c), d = parseInt(c.data("idx"), 10));
        Kharma.ga.event("inbound", {action:{paid:"topPaid", free:"topFree", grossing:"topGrossing", latest:"topLatest", sale:"topSale"}[a], position:d || d === 0 ? d + 1 : "-1", target:{packageName:c.data("pkg") || "n/a", publisherName:c.data("pub") || "n/a"}});
        break
      }
      if(c) {
        c = c.parentNode
      }
    }
  };
  (function() {
    var a = $("#innerNewsletter.header-box"), b = $("#innerSocial.header-box");
    e = d.type && d.type.substr(0, 3) || d;
    C(!1);
    e === "hom" ? (a.show(), Kharma.unityEditor.isEditor() || b.show()) : (a.hide(), Kharma.unityEditor.isEditor() || b.hide());
    v();
    Kharma.unityEditor.isEditor() || (Kharma.utils.windowWrapper.onhashchange(p), p())
  })();
  return{activateLinks:function() {
    var a = $(".rating");
    i = [];
    a.each(function(a, b) {
      $(b).hasClass("ready") || i.push(new Kharma.UI.Rating({packageId:b, value:!0}))
    })
  }, addFooter:function(a) {
    var b = parseInt(Kharma.login.user.vat_percent, 10) > 0 ? Kharma.l10n.supplant(Kharma.l10n.user.pricesIncludeVAT, {vat:Kharma.login.user.vat_percent}) : Kharma.l10n.user.exclusiveVAT, c = $(".vat-info");
    c.remove();
    a && a.find(".vat-info").length === 0 ? a.append($("<div class='vat-info'></div>").text(b)) : c.text(b)
  }, addOpenGraph:function(a, b) {
    $("head").prepend(b({content:a, description:$("<div/>").html(a.description).text().slice(0, 1024), imageBig:a.keyimage && a.keyimage.big && a.keyimage.big.replace(/^(https?:)?/, "http:"), imageSmall:a.keyimage && a.keyimage.small && a.keyimage.small.replace(/^(https?:)?/, "http:"), url:Kharma.utils.windowWrapper.location.getHref()}))
  }, addSocial:function(a) {
    $("#innerSocial").remove();
    a.append(Handlebars.templates.social({deal:Kharma.l10n.social.deal, follow:Kharma.l10n.social.follow}))
  }, addTopSaleList:r, sanitizeHTMLText:function(a) {
    return a.replace(/[<>]/g, function(a) {
      return a === "<" ? "&lt;" : "&gt;"
    }).replace(/(\r\n|\r|\n)/g, "<br />")
  }, clear:function() {
    $.each(a, function(a, b) {
      b()
    });
    a = [];
    C(!1)
  }, clearElement:s, createFull:function(a) {
    var b = a.callback, c = a.element, d = a.data, e;
    e = t(a);
    w(d, e);
    c.append(e);
    c.find(".fulldescription").append(d.description);
    c = e.filter("p.linkbar");
    a.preview || (e = J(d.min_unity_version), d.short_url && (a = new Kharma.UI.SharingBar({type:"package", title:d.title, publisher:d.publisher.label, twitterMessage:d.title + Kharma.l10n.page.by + d.publisher.label, id:d.id}), c.append(a.getSharingBar())), e === "" ? d.flags.external_link ? d.url && $(c[0]).prepend('<a class="info active" href="' + d.url + '" target="_blank">' + Kharma.l10n.page.readMore + "</a>") : l(c, d) : c.append("<br><br><strong>" + Kharma.l10n.editor.upgrade + e + "</strong><br>"));
    b && typeof b === "function" && b()
  }, createFullTemplate:t, clearList:a, createDetails:function(a, b, c) {
    b = Handlebars.templates.packageDetails({level11:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member, result:b});
    a.prepend(b);
    c && typeof c === "function" && c()
  }, getRequestUrl:function() {
    return m
  }, id:c, isLoaded:function() {
    return b
  }, linkElement:function(a, b, c, d) {
    d ? a.append($('<a href="#!' + b + "/" + c + '" class="livelink">' + d + "</a>")) : $(a).addClass("livelink").attr({"data-template":b, "data-link":c})
  }, load:function() {
    if($("body")[0]) {
      $("body")[0].id = "as" + e + c
    }
    y();
    $("#mainContent").trigger(Kharma.utils.events.onPageLoadStart);
    a.push(q);
    C(!1);
    return!1
  }, loadSideBar:function(a, b) {
    h = a;
    $("#sidebar").remove();
    j = $(Handlebars.templates.sideBar({categories:Kharma.l10n.sideBar.categories, hotDeals:Kharma.l10n.sideBar.hotDeals, latest:Kharma.l10n.sideBar.latest, search:Kharma.l10n.search.searchAssetStore, topFree:Kharma.l10n.sideBar.topFree, topGrossing:Kharma.l10n.sideBar.topGrossing, topPaid:Kharma.l10n.sideBar.topPaid}));
    u();
    n();
    r(e, b);
    $(".loadarea").each(function(a, b) {
      $.contains($("#content")[0], $(b)[0]) && f.push(new Kharma.UI.Loader($(b), Kharma.l10n.page.loadingPage))
    })
  }, miniLink:function(a, b) {
    var c = Kharma.unityEditor.getEditorVersion(), d = Handlebars.templates.packageSmallLink({level11:Kharma.login.user.roles.level11member || b, result:a, unityVersion:c});
    if(a.flags && a.flags.override_url && c && parseFloat(c) < 5) {
      $(".override_url").on("click", {url:a.url}, function(a) {
        var b = Kharma.utils.windowWrapper.location.getHash(), c = Kharma.utils.windowWrapper.location.getHref(), b = c.indexOf(b) > 0 ? c.substr(0, c.indexOf(b)) : c;
        a.stopPropagation();
        a.preventDefault();
        Kharma.unityEditor.openBrowser(b + a.data.url, function(a) {
          if(a) {
            throw a.message;
          }
        })
      })
    }
    return d
  }, onResize:function() {
    u();
    Kharma.helper.updateLanguageStatus()
  }, setBackground:function(a) {
    var b, c = a.callback, d = a.element, e = a.link, f, g = a.smallBackgroundUrl;
    d.find(".icon-bg").length === 0 && (b = e ? $("<a href='" + e + "'class='background livelink'></a>") : $("<div class='background'></div>"), d.append(b), g && (f = e ? $("<a href='" + e + "' class='smallBackground livelink'></a>") : $("<div class='smallBackground'></div>"), d.append(f)));
    b.css("background-image", "url('" + a.backgroundUrl + "')");
    g && f.css("background-image", "url('" + g + "')");
    if(c) {
      d.on("click", function(a) {
        var b = Kharma.utils.windowWrapper.location.getHash(), d = Kharma.utils.windowWrapper.location.getHref(), b = d.indexOf(b) > 0 ? d.substr(0, d.indexOf(b)) : d;
        a.stopPropagation();
        a.preventDefault();
        c(b + e, function(a) {
          if(a) {
            throw a.message;
          }
        })
      })
    }
  }, setExternalLinks:function(a) {
    a = $("." + a + " a");
    $.each(a, function(a, b) {
      $(b).attr("target", "_blank").addClass("externallink").off().on("click", function() {
        Kharma.ga.event("outbound", {action:"link", label:$(this).attr("href")})
      })
    })
  }, setLoaded:C, setRequestUrl:function(a) {
    a && (m = a)
  }, setPageTitle:function(a) {
    if(!Kharma.unityEditor.isEditor()) {
      document.title = a && a !== "" ? a + " - " + Kharma.l10n.page.title : Kharma.l10n.page.title
    }
  }, setTemplate:function(a) {
    var b = $("#mainContent");
    b.find("select").selectBox("destroy");
    b.html(a);
    b.removeAttr("class");
    (a = b.children().first().attr("id")) && a !== "" && b.addClass("main-" + a);
    f = [];
    $(".loadarea").each(function(a, b) {
      $.contains($("#content")[0], $(b)[0]) && f.push(new Kharma.UI.Loader($(b), Kharma.l10n.page.loadingPage))
    })
  }, type:e, versionRequired:J}
};
Kharma.AddressHelper = function() {
  var g = {}, h, a, d, c, e, b, f, i;
  h = function(b, c, d, e) {
    var f = !1, g = $('<select id="country" name="country">'), i;
    e && g.attr("disabled", "disabled");
    $.each(b, function(a, b) {
      i = $('<option value="' + b.value + '">' + b.name + "</option>");
      b.value === c && (i.attr("selected", "selected"), f = !0);
      g.append(i)
    });
    f || g.append($('<option value="' + (c || "") + '" selected="selected">' + (d || "N/A") + "</option>"));
    a(g)
  };
  d = function() {
    var a = $("select#state"), b = a.parent().find("a.selectBox"), c = b.data("selectBoxOptions");
    a.length > 0 && (c && c.remove(), b.remove(), a.parent().find(".callout").css("opacity", "0"))
  };
  e = function(a) {
    Kharma.io.get({uri:"templates/states.json", onSuccess:function(b) {
      i(b, a)
    }})
  };
  c = function(a) {
    Kharma.io.get({uri:"/api/account/ip-country.json", onSuccess:function(b) {
      b.json && h(a, b.json.country)
    }})
  };
  a = function(a) {
    $("#country").length > 0 && a !== null && a.find("option").length > 0 && (a.replaceAll("#country"), $(".country").each(function(a, b) {
      var c = $(b).find("select");
      c.on("change", function() {
        e($(this).val());
        f()
      });
      c.change();
      c.selectBox();
      $("#contentarea").on("scroll", function() {
        c.selectBox("hide")
      })
    }))
  };
  f = function() {
    var a = $("#country").val(), b = $(".state"), c = $(".zip");
    $("#country").length > 0 || (a === "us" || a === "ca" || a === "cn" ? b.addClass("req") : b.removeClass("req"), g[a] ? c.addClass("req") : c.removeClass("req"))
  };
  b = function(a) {
    a && (a.addClass("problem"), a.is("select") && a.parent().find(".selectBox").addClass("problem"))
  };
  i = function(a, b) {
    var c, e = a.json.states[b], g;
    d();
    e ? (c = $('<select id="state" name="state"/>'), c.append($('<option value="">' + Kharma.l10n.address.state + "</option>")), $.each(e, function(a, b) {
      g = $('<option value="' + b.value + '">' + b.name + "</option>");
      b.value === $("#state").val() && g.attr("selected", "selected");
      c.append(g)
    }), c.replaceAll("#state"), $(".state").css("display", "block"), c.selectBox(), c.parent().find(".selectBox").on("click", function() {
      $(this).removeClass("problem");
      $(this).parent().find(".callout").css("opacity", "0")
    })) : ($('<input type="text" class="precallout" name="state" id="state" placeholder=""/>').replaceAll("#state"), $(".state").css("display", "none"));
    f()
  };
  g = Kharma.l10n && {us:[Kharma.l10n.address.title.invalidZipCode, Kharma.l10n.address.message.invalidUSZipCode, /^\d{5}(-\d{4}|-\d{6})?$/], au:[Kharma.l10n.address.title.invalidPostcode, Kharma.l10n.address.message.invalidAUPostcode, /^\d{4}$/], be:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidBEPostalCode, /^(BE-)?[1-9]\d{3}$/i], dk:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidDKPostalCode, /^(DK-)?\d{4}$/i], de:[Kharma.l10n.address.title.invalidPostalCode, 
  Kharma.l10n.address.message.invalidDEPostalCode, /^(DE-)?\d{5}$/i], at:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidATPostalCode, /^(AT-)?\d{4}$/i], it:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidITPostalCode, /^(IT-)?\d{5}$/i], gb:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidGBPostalCode, /^[A-Z]{1,2}\d[A-Z0-9]?(\s+\d[ABD-HJLNP-UW-Z]{2})?$/i], ca:[Kharma.l10n.address.title.invalidPostalCode, 
  Kharma.l10n.address.message.invalidCAPostalCode, /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]\s*\d[A-Z]\d$/i]};
  return{applyCountries:a, editAddress:function(a) {
    var b = Kharma.login.user && Kharma.login.user.id;
    Kharma.io.get({uri:"/api/user/overview/" + b + ".json", onSuccess:function(c) {
      c.json.address ? c.json.address.id = b : c.json.address = {id:b};
      new Kharma.AddressDialog({callback:a, addressData:c.json.address})
    }})
  }, getCountries:function(a, b, d) {
    Kharma.io.get({uri:"templates/countries.json", cacheExpiryPeriod:Kharma.Time.DAY, onSuccess:function(e) {
      if(e.json) {
        e = e.json.countries, a ? h(e, a, b, d) : c(e)
      }
    }})
  }, getStates:e, markProblem:b, problemZip:function() {
    $("#message").length === 0 && new Kharma.TimedError({message:g[$("#country").val()], timeout:7});
    b($("#zip"))
  }, problemPhone:function() {
    $("#message").length === 0 && new Kharma.TimedError({message:[Kharma.l10n.address.title.invalidPhoneNumber, Kharma.l10n.address.message.invalidPhoneNumber], timeout:7});
    b($("#phone"))
  }, problemVAT:function(a) {
    $("#message").length === 0 && new Kharma.TimedError({message:a ? [Kharma.l10n.address.title.invalidVAT, a] : Kharma.errorsHelper.errors.invalidVAT, timeout:7});
    b($("#vat_no"))
  }, setReqFields:f, zipCodes:g}
};
Kharma.EditorHelper = function() {
  var g;
  g = function(g, a) {
    a && a.remove();
    g.remove()
  };
  return{hide:function(h, a) {
    Kharma.unityEditor.isEditor() ? g(h, a) : h.fadeOut("fast", function() {
      g(h, a)
    })
  }, tabInEditor:function(g, a) {
    var d = g.val(), c = d.indexOf("\t");
    c !== -1 && (g.val(d.substr(0, c)), setTimeout(function() {
      a.focus()
    }, 0))
  }, show:function(g) {
    Kharma.unityEditor.isEditor() ? g.show() : g.fadeIn("fast")
  }}
};
Kharma.editorHelper = new Kharma.EditorHelper;
Kharma.ErrorsHelper = function() {
  var g = {}, h = {}, g = Kharma.l10n && {template:[Kharma.l10n.error.pageTemplate, Kharma.l10n.error.pageTemplateMessage], notFound:[Kharma.l10n.error.pageNotExisting, Kharma.l10n.error.pageNotExistingMessage], parse:[Kharma.l10n.error.parsingContent, Kharma.l10n.error.parsingContentMessage], internalServerError:[Kharma.l10n.error.internalServerError, Kharma.l10n.error.internalServerErrorMessage], login:[Kharma.l10n.error.loggingIn, Kharma.l10n.error.loggingInMessage], loginInfo:[Kharma.l10n.error.missingInformation, 
  Kharma.l10n.error.missingInformationMessage], loginPasswordMismatch:[Kharma.l10n.error.passwordMismatch, Kharma.l10n.error.passwordMismatchMessage], loginUnknown:[Kharma.l10n.error.loginUnknown, ""], notLoggedIn:[Kharma.l10n.error.notLoggedIn, Kharma.l10n.error.notLoggedInMessage], loginPasswordWrong:[Kharma.l10n.error.wrongPassword, Kharma.l10n.error.wrongPasswordMessage], activation:[Kharma.l10n.error.activation, Kharma.l10n.error.activationMessage], addressRequired:[Kharma.l10n.error.addressRequired, 
  Kharma.l10n.error.addressRequiredMessage], invalidVAT:[Kharma.l10n.address.title.invalidVAT, Kharma.l10n.error.invalidVATMessage], unknown:[Kharma.l10n.error.unknown, Kharma.l10n.error.unknownMessage], acceptTerms:[Kharma.l10n.error.acceptTerms, Kharma.l10n.error.acceptTermsMessage]}, h = Kharma.l10n && {BadCredentials:Kharma.l10n.error.incorrectCredentials, AccountDisabled:Kharma.l10n.error.accountDisabled, UserNotActivated:Kharma.l10n.error.activation + ". " + Kharma.l10n.error.activationMessage, 
  AuthAccountExists:Kharma.l10n.user.alreadyExists};
  return{errors:g, exceptions:h}
};
Handlebars.registerHelper("ifCond", function(g, h, a, d) {
  switch(h) {
    case "===":
      return g === a ? d.fn(this) : d.inverse(this);
    case "!==":
      return g !== a ? d.fn(this) : d.inverse(this);
    case "<":
      return g < a ? d.fn(this) : d.inverse(this);
    case "<=":
      return g <= a ? d.fn(this) : d.inverse(this);
    case ">":
      return g > a ? d.fn(this) : d.inverse(this);
    case ">=":
      return g >= a ? d.fn(this) : d.inverse(this);
    case "&&":
      return g && a ? d.fn(this) : d.inverse(this);
    case "||":
      return g || a ? d.fn(this) : d.inverse(this);
    default:
      return d.inverse(this)
  }
});
Handlebars.registerHelper("debug", function(g) {
  console.log("Current Context", this);
  g && console.log("Value", g)
});
Handlebars.registerHelper("ratingUI", function(g, h, a, d, c) {
  return(a ? (new Kharma.UI.Rating({count:g, value:h, classes:"inline", packageId:c, showCount:!0, includeMicroData:d})).render() : (new Kharma.UI.Rating({count:g, packageId:c, value:h})).render())[0].outerHTML
});
Handlebars.registerHelper("formattedPrice", function(g) {
  return Kharma.helper.getFormattedPrice(g)
});
Handlebars.registerHelper("formattedDate", function(g) {
  for(var h = (new Date).getTime(), a = new Date(g.replace(/-/g, "/")), d = new Date(a.getTime() - a.getTimezoneOffset() * 6E4), a = 0, c = [[60, Kharma.l10n.time.second, Kharma.l10n.time.seconds, 60], [3600, Kharma.l10n.time.minute, Kharma.l10n.time.minutes, 60], [86400, Kharma.l10n.time.hour, Kharma.l10n.time.hours, 3600], [604800, Kharma.l10n.time.day, Kharma.l10n.time.days, 86400], [2419200, Kharma.l10n.time.week, Kharma.l10n.time.weeks, 604800], [29030400, Kharma.l10n.time.month, Kharma.l10n.time.months, 
  2419200], [290304E4, Kharma.l10n.time.year, Kharma.l10n.time.years, 29030400]], d = (h - d.getTime()) / 1E3, h = c[a++];h;) {
    if(h && d < h[0]) {
      return g = Math.floor(d / h[3]), a = g > 0 ? g > 1 ? h[2] : h[1] : Kharma.l10n.time.moments, Kharma.l10n.supplant(a, {time:g})
    }
    h = c[a++]
  }
  return g
});
Handlebars.registerHelper("adminFormattedDate", function() {
  return this.status_updated_at && this.status_updated_at.split("T")[0]
});
Handlebars.registerHelper("adminFormattedTime", function() {
  return this.status_updated_at && this.status_updated_at.split("T")[1].substring(0, 5)
});
Handlebars.registerHelper("adminFormattedPublisherEmail", function() {
  return"mailto:" + encodeURIComponent(this.publisher.email) + "?subject=" + encodeURIComponent(this.package_name)
});
Handlebars.registerHelper("salePercentage", function(g, h) {
  return Math.floor((1 - g.USD / h.USD) * 100)
});
Handlebars.registerHelper("minimumVersion", function(g) {
  return Kharma.l10n.supplant(Kharma.l10n.page.minimumUnityVersion, {minimumVersion:g.substr(0, g.lastIndexOf(".") + 2)})
});
Handlebars.registerHelper("helpfulReview", function(g) {
  return Kharma.l10n.supplant(Kharma.l10n.review.helpful, {score:g.score, count:g.count})
});
Handlebars.registerHelper("canReply", function(g, h, a) {
  if(h.can_reply && !g) {
    return a.fn(this)
  }
});
Handlebars.registerHelper("isEditable", function(g, h, a) {
  if(g.editable || h.can_reply && !g.replies) {
    return a.fn(this)
  }
});
Handlebars.registerHelper("isAdmin", function(g, h) {
  if(Kharma.login.isAdmin || g) {
    return h.fn(this)
  }
});
Handlebars.registerHelper("reviewHelpful", function(g, h) {
  if(Kharma.login.user && !Kharma.login.user.is_anonymous && this.user.id !== Kharma.login.user.id) {
    return h.fn(this)
  }
});
Handlebars.registerHelper("text", function() {
  return this.full.replace(/[<>]/g, function(g) {
    return g === "<" ? "&lt;" : "&gt;"
  }).replace(/(\r\n|\r|\n)/g, "<br />")
});
Handlebars.registerHelper("formattedBio", function(g) {
  return g.bio && g.bio !== "" ? g.bio.replace(/[<>]/g, function(g) {
    return g === "<" ? "&lt;" : "&gt;"
  }).replace(/(\r\n|\r|\n)/g, "<br />") : Kharma.l10n.user.noBio
});
Handlebars.registerHelper("method", function() {
  return this.action.toUpperCase()
});
Handlebars.registerHelper("negativeAmountClass", function() {
  return this.amount.charAt(0) === "-" ? "negative" : ""
});
Handlebars.registerHelper("paymentRowClass", function(g, h) {
  var a = h++ % 2 === 0 ? "grey" : "";
  if(g.transactionsCredits && h === g.transactionsCredits.length || g.transactions && h === g.transactions.length) {
    a += " last"
  }
  return a
});
Handlebars.registerHelper("action", function() {
  return this.method === "Credit Card" ? Kharma.l10n.purchase.creditCard.toUpperCase() : Kharma.l10n.purchase.payPal
});
Handlebars.registerHelper("qnty", function() {
  return this.quantity > 1 ? this.quantity + "x" : ""
});
Handlebars.registerHelper("assetHierarchyIcon", function() {
  var g = null, g = this.label;
  this.folder ? g = "folder" : (g = g.toLowerCase(), g = g.split("."), g = g[g.length - 1], g === "asset" && this.guid.substring(0, 16) === "0000000000000000" && (g = "projectsettings"));
  (g = Kharma.Icons[g]) || (g = "icons/default.png");
  return"/images/" + g
});
Handlebars.registerHelper("padding", function(g) {
  return g * 20 + "px"
});
Handlebars.registerHelper("displayGroup", function(g, h, a) {
  var d, c = a[g], a = a[g - 1], e;
  if(h === "title-first" || !h) {
    if(g === 0 || c.name.toLowerCase()[0] !== a.name.toLowerCase()[0]) {
      e = c.name[0] && c.name[0].toUpperCase()
    }
  }else {
    d = c.category.name;
    var b = g > 0 && a.category.name, f = d.indexOf("/") !== -1 ? d.substring(0, d.indexOf("/")) : d;
    if(h === "category") {
      if(g === 0 || f !== (b.indexOf("/") !== -1 ? b.substring(0, b.indexOf("/")) : b)) {
        e = f
      }
    }else {
      if(h === "category-full") {
        if(g === 0 || d !== b) {
          e = d
        }
      }else {
        if(h === "publisher") {
          if(d = c.publisher.name, g === 0 || d !== a.publisher.name) {
            e = d
          }
        }else {
          if(h === "purchase-date-id") {
            if(c = c.purchased_at || c.last_downloaded_at, d = a && (a.purchased_at || a.last_downloaded_at), a = c && new Date(c.replace(/-/g, "/").replace("T", " ")), h = d && new Date(d.replace(/-/g, "/").replace("T", " ")), a && isNaN(a.valueOf()) && (a = c && new Date(c)), h && isNaN(h.valueOf()) && (h = d && new Date(d)), c = a && c !== "0" ? Kharma.helper.getMonths()[a.getMonth()] + " " + a.getFullYear() : Kharma.l10n.pkg.unknownDate, d = h && d !== "0" ? Kharma.helper.getMonths()[h.getMonth()] + 
            " " + h.getFullYear() : Kharma.l10n.pkg.unknownDate, g === 0 || c !== d) {
              e = c
            }
          }else {
            if(h === "publish-date-id") {
              if(h = c.published_at && new Date(c.published_at.replace(/-/g, "/").replace("T", " ")), d = a && a.published_at && new Date(a.published_at.replace(/-/g, "/").replace("T", " ")), h && isNaN(h.valueOf()) && (h = c.published_at && new Date(c.published_at)), d && isNaN(d.valueOf()) && (d = a.published_at && new Date(a.published_at)), h = h && Kharma.helper.getMonths()[h.getMonth()] + " " + h.getFullYear(), d = d && Kharma.helper.getMonths()[d.getMonth()] + " " + d.getFullYear(), g === 0 || 
              h !== d) {
                e = h
              }
            }else {
              if(h === "rating") {
                if(g === 0 || c.user_rating !== a.user_rating) {
                  e = (new Kharma.UI.Rating({count:1, value:c.user_rating, classes:"hide-unlit-stars inline"})).render().get(0).outerHTML
                }
              }else {
                if(h === "packagestatus" && (c = c.can_update ? Kharma.l10n.pkg.update : c.local_path ? Kharma.l10n.pkg.importPkg : c.can_download ? Kharma.l10n.button.download : "", a = a && (a.can_update ? Kharma.l10n.pkg.update : a.local_path ? Kharma.l10n.pkg.importPkg : a.can_download ? Kharma.l10n.button.download : ""), g === 0 || c !== a)) {
                  e = c
                }
              }
            }
          }
        }
      }
    }
  }
  if(e) {
    return'<div class="group">' + e + '<span class="collapse" title="Collapse">-</span></div>'
  }
});
Kharma.Helper = function() {
  var g = {EUR:"\u20ac", JPY:"\u00a5", USD:"$"}, h, a, d, c;
  h = function(a) {
    var b = Kharma.login.user, a = a[b.currency], c = b.rounding, a = parseFloat(a);
    if(a === 0) {
      return a
    }
    a += Math.round(a * parseInt(b.vat_percent, 10) / 100 / parseFloat(c)) * parseFloat(c);
    a = c < 1 && parseInt(a, 10) !== a ? a.toFixed(2) : a.toFixed();
    return a.toLocaleString(b.language_code)
  };
  a = function() {
    return g[Kharma.login.user.currency]
  };
  c = function(a) {
    return(a = a.match(/https?:\/\/\w+-(\w+)/)) ? a[1].toUpperCase() : "PROD"
  };
  d = function() {
    return[{label:Kharma.l10n && Kharma.l10n.language.languages["en-US"], language:"en-US", url:"en"}, {label:Kharma.l10n && Kharma.l10n.language.languages["ko-KR"], language:"ko-KR", url:"kr"}, {label:Kharma.l10n && Kharma.l10n.language.languages["ja-JP"], language:"ja-JP", url:"jp"}, {label:Kharma.l10n && Kharma.l10n.language.languages["zh-CN"], language:"zh-CN", url:"cn"}]
  };
  return{formatPrice:h, getCurrency:a, getFormattedPrice:function(c) {
    if(!c) {
      return Kharma.l10n.page.free
    }
    c = h(c);
    if(!c) {
      return Kharma.l10n.page.free
    }
    return a() + c
  }, getLanguages:d, getMonths:function() {
    return[Kharma.l10n.months.january, Kharma.l10n.months.february, Kharma.l10n.months.march, Kharma.l10n.months.april, Kharma.l10n.months.may, Kharma.l10n.months.june, Kharma.l10n.months.july, Kharma.l10n.months.august, Kharma.l10n.months.september, Kharma.l10n.months.october, Kharma.l10n.months.november, Kharma.l10n.months.december]
  }, getURLFlavour:c, getCurrentURLFlavour:function() {
    return c(document.location.href)
  }, loadLanguage:function(a, b) {
    var c = Kharma.utils.windowWrapper.location.getPathName(), c = c.split("/").length > 2 ? /\w{2}/.exec(c)[0] : "", g = d(), h, j;
    h = 0;
    for(j = g.length;h < j;h++) {
      if(g[h].url === c) {
        a = g[h].language;
        break
      }
    }
    $.getJSON("/js/kharma/l10n/" + a + ".json", function(a) {
      Kharma.l10n = a || {};
      Kharma.l10n.supplant = function(a, b) {
        return a && a.replace(/{([^{}]*)}/g, function(a, c) {
          var d = b[c];
          return typeof d === "string" || typeof d === "number" ? d : a
        })
      };
      b && b()
    })
  }, updateLanguageStatus:function() {
    var a = d(), b = Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US", c = $(".language-status");
    if(Kharma.utils.windowWrapper.innerWidth() > 768) {
      c.text(Kharma.l10n.language.language + ":" + Kharma.l10n.language.languages[b])
    }else {
      for(var g = 0, h = a.length;g < h;g++) {
        if(a[g].language === b) {
          c.text(a[g].url.toUpperCase());
          break
        }
      }
    }
  }, validatePassword:function(a) {
    var b = $(".password-message"), c = $(".login-submit"), a = $(a.target), d = a.val(), g = d.length;
    g === 0 ? (a.removeClass("valid"), a.removeClass("invalid"), b.text("")) : g > 0 && g < 8 || !/^((?=.*[a-z])(?=.*[A-Z])((?=.*\d))).+$/.test(d) ? (a.removeClass("valid"), a.addClass("invalid"), c.attr("disabled", "disabled"), b.text(Kharma.l10n.error.passwordValidation)) : (a.removeClass("invalid"), a.addClass("valid"), c.removeAttr("disabled"), b.text(""))
  }}
};
Kharma.helper = new Kharma.Helper;
Kharma.LayoutHelper = function() {
  (function() {
    var g = $("body"), h = $("#mainContent");
    Kharma.unityEditor.isEditor() ? (g.removeClass("skin0"), g.removeClass("skin1"), Kharma.unityEditor.getSkinIndex(function(a, d) {
      if(a) {
        throw a.message;
      }else {
        g.addClass("unity-editor skin" + d)
      }
    }), g.css({"-webkit-user-select":"none", "-webkit-user-drag":"none"})) : g.addClass("external-browser");
    $(document).on("click", ".livelink", function(a) {
      var d = $(this);
      a.stopPropagation();
      this.tagName !== "A" && $.address.value(d.data("template") + "/" + d.data("link"))
    });
    h.on(Kharma.utils.events.onPageLoadStart, function() {
      var a = $("#pageload");
      Kharma.toolbar.loader = a && new Kharma.UI.Loader(a, Kharma.l10n.page.contacting);
      Kharma.utils.windowWrapper.onResize()
    });
    h.on(Kharma.utils.events.onPageLoadComplete, function() {
      Kharma.toolbar.loader && Kharma.toolbar.loader.clear()
    })
  })()
};
Kharma.SaleHelper = function() {
  var g, h, a, d, c;
  c = function() {
    var e, b;
    e = new Date;
    var f = h.getTime() - e.getTime();
    b = h.getTime() - e.getTime();
    var i = (b - b % 36E5) / 36E5;
    b -= i * 36E5;
    e = (b - b % 6E4) / 6E4;
    b -= e * 6E4;
    b /= 1E3;
    b -= b % 1;
    g.text(a + i + (i === 1 ? " " + Kharma.l10n.time.hour : " " + Kharma.l10n.time.hours) + " " + e + (e === 1 ? " " + Kharma.l10n.time.minute : " " + Kharma.l10n.time.minutes) + " " + b + (b === 1 ? " " + Kharma.l10n.time.second : " " + Kharma.l10n.time.seconds));
    f > 0 ? d = setTimeout(c, 500) : Kharma.utils.windowWrapper.location.reload()
  };
  return{startCountdown:function(e, b, f) {
    e = e || 0;
    h = new Date;
    g = b;
    a = f;
    h.setTime(h.getTime() + e * 1E3);
    d || c()
  }}
};
Kharma.saleHelper = new Kharma.SaleHelper;
Kharma.ExpressCheckoutDialog = function(g) {
  var h, a, d;
  d = function() {
    h.remove();
    a.remove()
  };
  (function() {
    h = $(Handlebars.templates.expressCheckoutDialog({accountPassword:Kharma.l10n.purchase.accountPassword, allowPopups:Kharma.l10n.purchase.allowPopups, cancel:Kharma.l10n.button.cancel, chargeCreditCard:Kharma.l10n.purchase.chargeCreditCard, data:g.json, goToCart:Kharma.l10n.purchase.goToShoppingCart, header:Kharma.l10n.purchase.expressCheckout.assetStoreExpressCheckout, pkg:Kharma.l10n.pkg.pkg, purchase:Kharma.l10n.purchase.purchase, vatLabel:Kharma.l10n.cart.vat}));
    a = $("<div class='modalblocker'></div>");
    a.on("click", function(a) {
      a.stopPropagation();
      d()
    });
    $("#assetstore").append(a);
    $("#assetstore").append(h);
    h.find(".purchase-button").on("click", function(a) {
      var e = Kharma.ga.paymentInfo();
      a.stopPropagation();
      a.preventDefault();
      e.processor = "Express";
      e.account_password = $(".express-checkout-dialog .account-password input").val();
      e.express_processor = "CyberSourceSAWebMobile";
      Kharma.io.post({uri:"/api/purchase/create_payment.json", async:!1, parameters:e, onSuccess:function(a) {
        var c;
        if(!document.purchaseDialog) {
          document.purchaseDialog = new Kharma.PurchaseDialog(!0)
        }
        a.json.status === "ok" ? (document.purchaseDialog.onCreatePayment(a, "payloader_cybersource"), d()) : (c = h.find(".status"), c.addClass("error"), document.purchaseDialog.showCreditsPurchaseError(c, a.json.status))
      }})
    });
    h.find(".cancel-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.cart.removeItem(Kharma.cart.items[0]);
      Kharma.toolbar.updateButtons();
      d()
    });
    h.find(".go-to-cart").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      d();
      Kharma.cart.showCart()
    });
    a.show();
    Kharma.editorHelper.show(h)
  })()
};
Kharma.OverviewDialog = function(g) {
  var h, a = "", d = "", c, e, b, g = g || {}, f, i, m, j;
  m = function() {
    var e = $("<button>" + Kharma.l10n.button.cancel + "</button>"), f = $("<div class='form'></div>"), g = $("<span class='buttonstrip'></span>"), m = $("<span class='buttonstrip'></span>"), p = $("<button>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>");
    b.append($("<h1>" + Kharma.l10n.user.biographyFor + d + "</h1>"));
    b.append(f);
    h = $("<textarea class='input' placeholder='" + Kharma.l10n.user.biography + "'>" + a + "</textarea>");
    f.append(h);
    g.append(e);
    m.append(p);
    b.append(g);
    b.append(m);
    c.show();
    Kharma.editorHelper.show(b);
    h.focus();
    c.on("click", function(a) {
      a.stopPropagation();
      i()
    });
    e.on("click", function() {
      i()
    });
    p.on("click", function() {
      j()
    })
  };
  i = function() {
    Kharma.editorHelper.hide(b, c)
  };
  j = function() {
    e({bio:h.val(), user:f});
    i()
  };
  (function(g) {
    Kharma.ga.view("account", g.userID, "/profile/bio/edit");
    var h = $("#assetstore");
    e = g.callback;
    f = g.userID;
    c = $("<div class='modalblocker'></div>");
    b = $("<div class='dialog messageform biography'></div>");
    h.append(c);
    h.append(b);
    Kharma.io.get({uri:"/api/user/overview/" + f + ".json", onSuccess:function(b) {
      a = b.json.bio;
      d = b.json.name;
      m()
    }, onFailure:function() {
      i()
    }})
  })(g)
};
Kharma.AddressDialog = function(g) {
  var h, a, d, c, e, g = g || {}, b, f, i, m, j, k, n;
  b = function() {
    a.on("click", function(a) {
      a.stopPropagation();
      f()
    });
    Kharma.unityEditor.isEditor() && ($("#firstname").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#lastname"))
    }), $("#lastname").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#organization"))
    }), $("#organization").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#address"))
    }), $("#address").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#address2"))
    }), $("#address2").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#zip"))
    }), $("#zip").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#city"))
    }), $("#city").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#phone"))
    }), $("#phone").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#vat_no"))
    }), $("#vat_no").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#btnSaveAddress"))
    }), $("#vat_no").on("change", function() {
      $("#btnSaveAddress").click()
    }))
  };
  f = function(b) {
    $("#addressform select").selectBox("destroy");
    Kharma.editorHelper.hide(c, a);
    d && d(b)
  };
  i = function(a) {
    $("#firstname").val(!a.firstname ? "" : a.firstname).focus();
    $("#lastname").val(!a.lastname ? "" : a.lastname);
    $("#organization").val(!a.organization ? "" : a.organization);
    $("#address").val(!a.address ? "" : a.address);
    $("#address2").val(!a.address2 ? "" : a.address2);
    $("#zip").val(!a.zip ? "" : a.zip);
    $("#city").val(!a.city ? "" : a.city);
    $("#state").val(!a.state ? "" : a.state);
    $("#phone").val(!a.phone ? "" : a.phone);
    $("#vat_no").val(!a.vat_no ? "" : a.vat_no);
    $("#country").val(!a.country ? "" : a.country)
  };
  m = function() {
    var a = $("#country").val(), b, c = ["firstname", "lastname", "address", "city", "country"];
    $("#message").length === 0 && new Kharma.TimedError({message:Kharma.errorsHelper.errors.loginInfo, timeout:7});
    (a === "us" || a === "ca" || a === "cn") && c.push("state");
    Kharma.addressHelper.zipCodes[a] && c.push("zip");
    for(b in c) {
      c.hasOwnProperty(b) && (a = $("#" + c[b])) && a.val() === "" && Kharma.addressHelper.markProblem(a)
    }
  };
  j = function() {
    var b = $("<button>" + Kharma.l10n.button.cancel + "</button>"), d = $("<button id='btnSaveAddress'>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>"), g = $("<span class='buttonstrip'></span>"), i = $("<span class='buttonstrip'></span>");
    g.append(b);
    i.append(d);
    c.append(g);
    c.append(i);
    a.show();
    Kharma.editorHelper.show(c);
    $(c.find("#firstname")).focus();
    b.on("click", function() {
      f()
    });
    d.on("click", function() {
      k()
    });
    e && Kharma.addressHelper.markProblem($(e))
  };
  k = function() {
    var a, b, c, d, e = $("#vat_no");
    e.val() !== "" ? (a = $('<div class="adrvatcheck">' + Kharma.l10n.address.vatChecking + "</div>"), e.after(a), c = !1, b = d = null, Kharma.io.get({uri:"/api/user/check-vat.json", parameters:{vat_no:e.val(), country:$("#country").val()}, onSuccess:function(f) {
      c = f.json.valid;
      b = f.json.message;
      if(f.json.vat_no && f.json.vat_no !== "") {
        d = f.json.vat_no
      }
      a.remove();
      d && e.val(d);
      c ? n() : Kharma.addressHelper.problemVAT(b)
    }})) : n()
  };
  n = function() {
    var a = {firstname:$("#firstname").val(), lastname:$("#lastname").val(), organization:$("#organization").val(), address:$("#address").val(), address2:$("#address2").val(), zip:$("#zip").val(), city:$("#city").val(), state:$("#state").val(), country:$("#country").val(), phone:$("#phone").val(), vat_no:$("#vat_no").val()}, b = {firstname:$("#firstname"), lastname:$("#lastname"), address:$("#address"), zip:$("#zip"), city:$("#city"), state:$("#state"), country:$("#country")};
    $.each(b, function(a, b) {
      b.val() === "" ? b.addClass("problem") : b.removeClass("problem")
    });
    a.address === "" || a.firstname === "" || a.lastname === "" || a.city === "" || a.country === "" || a.state === "" && (a.country === "us" || a.country === "ca" || a.country === "cn") || Kharma.addressHelper.zipCodes[a.country] && a.zip === "" ? m() : Kharma.addressHelper.zipCodes[a.country] && !Kharma.addressHelper.zipCodes[a.country][2].test(a.zip) ? Kharma.addressHelper.problemZip() : a.phone !== "" && !/^[0-9\-\+\ ]+$/.test(a.phone) ? Kharma.addressHelper.problemPhone() : Kharma.io.post({uri:"/api/user/overview/" + 
    (h.id || "0") + ".json", parameters:a, onSuccess:function() {
      h.id && Kharma.ga.view("account", h.id, "/profile/billing-address/edit/success");
      f(!0)
    }})
  };
  (function(f) {
    var g = f.addressError || Kharma.errorsHelper.errors.addressRequired, m = $("#assetstore"), k = $("<div id='addressform' class='addresslist vscroll'></div>");
    Kharma.ga.view("account", f.addressData && f.addressData.id ? f.addressData.id : 0, "/profile/billing-address/edit");
    a = $("<div class='modalblocker'></div>");
    c = $("<div class='dialog messageaddress'><h1 class='noaddresshead'>" + g[0] + "</h1><p class='noaddresspara'>" + g[1] + "</p><h1 class='addresshead'>" + Kharma.l10n.address.editBillingAddress + "</h1></div>");
    h = f.addressData;
    d = f.callback;
    e = f.errorField;
    m.append(a);
    m.append(c);
    c.append(k);
    k.append(Handlebars.templates.addressForm({lockAddressFields:h.lock_address_fields, required:Kharma.l10n.address.required, locked:Kharma.l10n.address.locked, address1:Kharma.l10n.user.address1, address2:Kharma.l10n.user.address2, city:Kharma.l10n.user.city, country:Kharma.l10n.user.country, firstName:Kharma.l10n.user.firstName, lastName:Kharma.l10n.user.lastName, loading:Kharma.l10n.page.loadingPage, organization:Kharma.l10n.user.organization, phoneNumber:Kharma.l10n.user.phoneNumber, state:Kharma.l10n.user.state, 
    vat:Kharma.l10n.user.vat, zip:Kharma.l10n.user.zip}));
    b();
    i(h);
    $("#address").val() || c.addClass("noaddress");
    (h.country === "ca" || h.country === "us" || h.country === "cn") && Kharma.addressHelper.getStates(h.country);
    h.lock_address_fields ? (Kharma.addressHelper.getCountries(h.country, h.country_name, "disabled"), $(".vat").addClass("req"), $("#vat_no").attr("disabled", "disabled")) : Kharma.addressHelper.getCountries(h.country, h.country_name);
    j()
  })(g)
};
Kharma.UsernameDialog = function(g) {
  var h, a, d, c, e, b = "", g = g || {}, f, i, m;
  i = function() {
    var a = $("<button>" + Kharma.l10n.button.cancel + "</button>"), c = $("<div class='form'></div>"), g = $("<h1>" + Kharma.l10n.user.editDisplayName + "</h1>"), i = $("<button>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>"), o = $("<span class='buttonstrip'></span>"), p = $("<span class='buttonstrip'></span>");
    e = $("<input class='input' placeholder='" + Kharma.l10n.user.displayName + "' value='" + b + "'>");
    d.append(g);
    d.append(c);
    c.append(e);
    o.append(a);
    p.append(i);
    d.append(o);
    d.append(p);
    h.show();
    Kharma.editorHelper.show(d);
    e.focus();
    h.on("click", function(a) {
      a.stopPropagation();
      f()
    });
    a.on("click", function() {
      f()
    });
    i.on("click", function() {
      m()
    })
  };
  f = function() {
    Kharma.editorHelper.hide(d, h)
  };
  m = function() {
    a({username:e.val(), user:c});
    f()
  };
  (function(e) {
    Kharma.ga.view("account", e.userID, "/profile/username/edit");
    var g = $("#assetstore");
    a = e.callback;
    c = e.userID;
    h = $("<div class='modalblocker'></div>");
    d = $("<div class='dialog message manageusername'></div>");
    g.append(h);
    g.append(d);
    Kharma.io.get({uri:"/api/user/overview/" + c + ".json", onSuccess:function(a) {
      b = a.json.name;
      i()
    }, onFailure:function() {
      f()
    }})
  })(g)
};
Kharma.PasswordDialog = function(g) {
  var h, a, d, c, e = g || {}, b, f, i, m, j, k;
  j = function() {
    var d = $("<button>" + Kharma.l10n.button.cancel + "</button>"), e = $("<button>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>"), f = $("<span class='buttonstrip'></span>"), g = $("<span class='buttonstrip'></span>"), i = $("#password");
    f.append(d);
    g.append(e);
    c.append(f);
    c.append(g);
    a.show();
    Kharma.editorHelper.show(c);
    $("#password_old").focus();
    if(Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated()) {
      i.on("input", Kharma.helper.validatePassword)
    }else {
      i.on("keyup", Kharma.helper.validatePassword)
    }
    d.on("click", function() {
      b()
    });
    e.on("click", function() {
      k()
    })
  };
  b = function() {
    Kharma.editorHelper.hide(c, a)
  };
  i = function() {
    var a = $("#password_old"), b = $("#password"), c = $("#password_confirmation");
    b.val() !== "" && b.val() !== c.val() ? (new Kharma.TimedError({message:Kharma.errorsHelper.errors.loginPasswordMismatch, timeout:7}), f(b), f(c)) : (new Kharma.TimedError({message:Kharma.errorsHelper.errors.loginInfo, timeout:7}), a.val() === "" && f(a), b.val() === "" && f(b), c.val() === "" && f(c))
  };
  m = function() {
    new Kharma.TimedError({message:Kharma.errorsHelper.errors.loginPasswordWrong, timeout:7});
    f($("#password_old"))
  };
  k = function() {
    var a = $("#password_old"), c = $("#password"), e = $("#password_confirmation");
    a.val() !== "" && c.val() !== "" && c.val() === e.val() ? Kharma.io.post({uri:"/api/user/overview/" + h + ".json", parameters:{passold:a.val(), pass:c.val()}, onSuccess:function() {
      Kharma.ga.view("account", h, "/profile/password/edit/success");
      d();
      b()
    }, onFailure:function() {
      m()
    }}) : i()
  };
  f = function(a) {
    a.addClass("problem")
  };
  (function() {
    Kharma.ga.view("account", e.accountId, "/profile/password/edit");
    var f = $("#assetstore"), g = $("<div id='addressform' class='passwordlist vscroll'></div>");
    h = e.accountId;
    d = e.callback;
    a = $("<div class='modalblocker'></div>");
    c = $("<div class='dialog messagepassword'><h1>" + Kharma.l10n.user.changePassword + "</h1></div>");
    a.on("click", function(a) {
      a.stopPropagation();
      b()
    });
    f.append(a);
    f.append(c);
    c.append(g);
    g.append(Handlebars.templates.passwordForm({currentPassword:Kharma.l10n.user.currentPassword, newPassword:Kharma.l10n.user.newPassword, repeatNewPassword:Kharma.l10n.user.repeatNewPassword}));
    j()
  })(e)
};
Kharma.LoginDialog = function() {
  var g = $("#assetstore"), h, a = null, d, c, e, b = !1, f, i, m, j, k, n, l, o, p;
  f = function() {
    var a = function(a) {
      switch(a.keyCode || a.which) {
        case 13:
          a.preventDefault(), o()
      }
    };
    e.append(Handlebars.templates.loginForm({cancel:Kharma.l10n.button.cancel, email:Kharma.l10n.user.email, forgotPassword:Kharma.l10n.user.forgotPassword, keepLoggedIn:Kharma.l10n.user.keepLoggedIn, logIn:Kharma.l10n.page.logIn, logInButton:Kharma.l10n.user.logIn, password:Kharma.l10n.user.password}));
    h.show();
    Kharma.editorHelper.show(d);
    e.find("#cancel-login-button").on("click", function() {
      i()
    });
    e.find("#login-button").on("click", o);
    $("#login-password").on("keydown", a);
    Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && ($("#login-username").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#login-password"))
    }), $("#login-password").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#login-button"))
    }), $("#login-password").on("change", function() {
      $("#login-button").click()
    }));
    $("#login-remember_session").on("keydown", a);
    p();
    $("#login-remember_session").change(function() {
      Kharma.session.setRememberSession($(this).prop("checked"))
    });
    $("#login-username").focus()
  };
  m = function() {
    Kharma.editorHelper.hide(d, h)
  };
  i = function() {
    typeof a === "function" && a(!1);
    m()
  };
  n = function() {
    var a = $("#login-username"), b = $("#login-password");
    c.text(Kharma.errorsHelper.errors.loginInfo[1]);
    b.val() === "" && k(b);
    a.val() === "" && k(a)
  };
  l = function(a, b) {
    var d = $("#login-username").removeAttr("disabled"), e = $("#login-password").removeAttr("disabled");
    c.text(Kharma.errorsHelper.exceptions[a] || a || b);
    k(e);
    k(d)
  };
  o = function() {
    var a = $("#login-username"), d = $("#login-password");
    b || (a.val() !== "" && d.val() !== "" ? (b = !0, c.text(Kharma.l10n.user.logging), a.attr("disabled", !0), d.attr("disabled", !0), Kharma.login.authenticate(j, a.val(), d.val())) : n())
  };
  j = function(c, d, e) {
    b = !1;
    c ? (typeof a === "function" && a(!0), m()) : l(d, e)
  };
  k = function(a) {
    a.addClass("problem");
    a.on("keydown", function() {
      $("#login-username").removeClass("problem");
      $("#login-password").removeClass("problem");
      c.text("")
    })
  };
  p = function() {
    Kharma.session.getRememberSession(function(a) {
      $("#login-remember_session").attr("checked", a)
    })
  };
  return{show:function(b) {
    Kharma.ga.view("login", "/");
    var b = b || {}, i = b.messageText || "";
    a = b.callback;
    g || (g = $("#assetstore"));
    h = g.find("#loginModalBlocker");
    h[0] || (h = $("<div id='loginModalBlocker' class='modalblocker'></div>"));
    h.on("click", function(a) {
      a.stopPropagation();
      m()
    });
    g.append(h);
    d = g.find("#loginDialog");
    c = $("<p></p>");
    e = $('<div id="addressform"></div>');
    d[0] ? ($(d.find("form")[0]).val(""), d.css("opacity", 1)) : (d = $("<div id='loginDialog' class='dialog messagelogin'></div>"), d.append(e), d.append(c));
    g.append(d);
    c.text("");
    c.text(i);
    e.empty();
    f()
  }}
};
Kharma.ReviewDialog = function(g) {
  var h, a, d, c, e, b, f, i, m = g || {}, j, k, n, l, o, p, r, s;
  p = function() {
    var a = $("<button>" + Kharma.l10n.button.cancel + "</button>"), g = $("<div class='form'></div>"), m = new Kharma.UI.Rating({packageId:i, value:k, callback:function(a) {
      k = a
    }}), n = $("<button>" + Kharma.l10n.button.submit + "</button>"), p = $("<span class='buttonstrip reviewCancel'></span>"), s = $("<span class='buttonstrip reviewSubmit'></span>");
    d === null ? c.append("<h1>" + Kharma.l10n.review.writeReview + "</h1>") : c.append("<h1>" + Kharma.l10n.review.editReview + "</h1>");
    c.append(g);
    b = $("<input class='input' placeholder='" + Kharma.l10n.review.headline + "' value='" + f + "'>");
    l = $("<textarea class='input' spellcheck='true' placeholder='" + Kharma.l10n.review.review + "'>" + e + "</textarea>");
    g.append(b);
    g.append("<br />");
    g.append(m.render()[0]);
    g.append("<br />");
    g.append(l);
    g.append($("<p>").addClass("note").html(Kharma.l10n.supplant(Kharma.l10n.review.reviewsAreNotForSupport, {publisherUrl:"#!/publisher/" + j})));
    p.append(a);
    s.append(n);
    c.append(p);
    c.append(s);
    h.show();
    Kharma.editorHelper.show(c);
    b.focus();
    a.on("click", function() {
      o()
    });
    n.on("click", function() {
      r()
    })
  };
  o = function() {
    Kharma.editorHelper.hide(c, h)
  };
  r = function() {
    s();
    o()
  };
  s = function() {
    b.val() ? l.val() ? Kharma.io.post({uri:"/api/content/comments/" + i + (d ? "/" + d : "") + ".json", parameters:{subject:b.val(), rating:k, full:l.val()}, onSuccess:function() {
      var b = {area:"Packages", publisherName:m.publisherName || "", packageName:m.packageName || ""};
      if(d) {
        if(Kharma.ga.view("packageReview", i, d, "/edit/success"), Kharma.ga.event("review", {action:"editReview", target:b}), (parseInt(k, 10) || 0) !== n) {
          Kharma.ga.event("rating", {value:parseInt(k, 10) || 0, previousValue:n, target:b})
        }
      }else {
        Kharma.ga.view("packageOther", i, "/review/success"), Kharma.ga.event("review", {action:"review", target:b}), k && Kharma.ga.event("rating", {value:parseInt(k, 10) || 0, target:b})
      }
      b = Kharma.history.getHistory()[Kharma.history.getIndex()];
      Kharma.io.flushCacheKey("/api/content/comments/" + i + ".json");
      Kharma.io.flushCacheKey("/api/content/overview/" + i + ".json");
      (b.type === "use" || b.type === "con" && b.id === i) && b.load();
      a && a(k)
    }}) : new Kharma.TimedError({message:[Kharma.l10n.review.reviewError, Kharma.l10n.review.missingMessage], timeout:7}) : new Kharma.TimedError({message:[Kharma.l10n.review.reviewError, Kharma.l10n.supplant(Kharma.l10n.review.missingHeadline, {review:l.val()})], timeout:7})
  };
  (function(b) {
    var g = $("#assetstore");
    a = b.callback;
    d = b.commentID || 0;
    i = b.packageID;
    j = b.publisherID;
    k = b.rating;
    n = parseInt(b.rating, 10) || 0;
    d ? Kharma.ga.view("packageReview", i, d, "/edit") : Kharma.ga.view("packageOther", i, "/review");
    e = f = "";
    h = $("<div class='modalblocker'></div>");
    c = $("<div class='dialog messageform reviewform'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      o()
    });
    if(Kharma.utils.windowWrapper.hasProperty("onhashchange")) {
      Kharma.utils.WindowWrapper.onhashchange(o)
    }
    g.append(h);
    g.append(c);
    Kharma.io.get({uri:"/api/content/review/" + i + "/" + d + ".json", onSuccess:function(a) {
      f = a.json.subject || "";
      n = parseInt(a.json.rating, 10) || 0;
      e = a.json.full || "";
      p()
    }, onFailure:function() {
      o()
    }})
  })(m)
};
Kharma.ReplyReviewDialog = function(g) {
  var h, a, d, c, e, b, f = g || {}, i, m, j, k, n, l, o, p;
  l = function() {
    var a = $("<button>" + Kharma.l10n.button.cancel + "</button>"), b = $("<div class='form'></div>"), e = $("<div class='reviewBlock'><p><b>" + i + "</b></p><p>" + m + "</p></div>"), f = $("<button>" + Kharma.l10n.button.submit + "</button>"), g = $("<span class='buttonstrip replyReviewCancel'></span>"), l = $("<span class='buttonstrip replyReviewSubmit'></span>");
    j = $("<textarea class='input' placeholder='" + Kharma.l10n.reply.reply + "'></textarea>");
    k === null ? d.append("<h1>" + Kharma.l10n.reply.replyReview + "</h1>") : (d.append("<h1>" + Kharma.l10n.reply.editReply + "</h1>"), j.append(c));
    d.append(b);
    b.append(e);
    b.append(j);
    g.append(a);
    l.append(f);
    d.append(g);
    d.append(l);
    h.show();
    Kharma.editorHelper.show(d);
    j.focus();
    a.on("click", function() {
      n()
    });
    f.on("click", function() {
      o()
    })
  };
  n = function() {
    Kharma.editorHelper.hide(d, h)
  };
  o = function() {
    p();
    n()
  };
  p = function() {
    Kharma.io.post({uri:k ? "/api/content/comments/" + b + "/" + a + ".json" : "/api/content/comments/" + b + ".json", parameters:{reply:k || a, subject:e, rating:-1, full:j.val()}, onSuccess:function() {
      var c = {area:"Packages", publisherName:f.publisherName || "", packageName:f.packageName || ""};
      k ? (Kharma.ga.view("packageReview", b, a, "/reply/edit/success"), Kharma.ga.event("review", {action:"editReplay", target:c})) : (Kharma.ga.view("packageReview", b, a, "/reply/success"), Kharma.ga.event("review", {action:"replay", target:c}));
      c = Kharma.history.getHistory()[Kharma.history.getIndex()];
      Kharma.io.flushCacheKey("/api/content/comments/" + b + ".json");
      Kharma.io.flushCacheKey("/api/content/overview/" + b + ".json");
      (c.type === "use" || c.type === "con" && c.id === b) && c.load()
    }})
  };
  (function(f) {
    var g = $("#assetstore"), j = f.replyReply;
    a = f.commentID;
    b = f.packageID;
    c = "";
    Kharma.ga.view("packageReview", b, a, "/reply");
    h = $("<div class='modalblocker'></div>");
    d = $("<div class='dialog messageform reviewform replyform'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      n()
    });
    g.append(h);
    g.append(d);
    a && b ? Kharma.io.get({uri:"/api/content/review/" + b + "/" + a + ".json", onSuccess:function(a) {
      var a = a.json, b = a.parent;
      b && !j ? (i = b.subject, m = b.full, k = b.id, c = a.full, e = a.subject) : (i = a.subject, m = a.full, k = null, e = Kharma.l10n.reply.replySubject);
      l()
    }, onFailure:function() {
      n()
    }}) : l()
  })(f)
};
Kharma.TermsDialog = function(g) {
  var h = g || {}, a, d, c = h.callback, e, b, f, i;
  b = function(a, b, c) {
    b.append(a);
    a.on("click", function(a) {
      a.stopPropagation();
      f();
      c && c(!1)
    })
  };
  f = function() {
    Kharma.editorHelper.hide(a, d)
  };
  i = function(a) {
    Kharma.io.get({uri:"/api/user/terms/" + Kharma.login.user.id + ".json", onSuccess:function(b) {
      e = b.json.terms.id;
      a(b.json)
    }})
  };
  (function() {
    var f = new Kharma.Dialog({title:Kharma.l10n.page.loadingPage, message:Kharma.l10n.page.loadingPage});
    d = $("<div class='modalblocker'></div>");
    a = f.element;
    a.addClass("dialog message superbig vscroll eula");
    d && b(d, f.base);
    h.noCancel ? b($("<button>" + Kharma.l10n.button.ok + "</button>"), a) : (b($("<button class='cancel'>" + Kharma.l10n.button.cancel + "</button>"), a, c), b($("<button class='accept'>" + Kharma.l10n.button.accept + "</button>"), a, function() {
      Kharma.io.post({uri:"/api/user/terms/" + Kharma.login.user.id + ".json", requestHeaders:{Accept:"application/json"}, parameters:{terms_id:e}, onSuccess:function() {
        c && c(!0)
      }})
    }));
    d && d.show();
    Kharma.editorHelper.show(a);
    i(function(a) {
      f.element.find("h1").text(a.terms.title);
      f.element.find(".message-body").text(a.terms.description)
    })
  })()
};
Kharma.TextDialog = function(g) {
  var h, a, g = g || {}, d = g.callback, c = g.text, e, b = g.type, f, i, m;
  i = function() {
    var a = 0, d, e;
    if(b === "textField") {
      e = $("<input type='text' class='input' placeholder='" + Kharma.l10n.button.text + "'>"), c && e.val(c)
    }else {
      if(b === "selectField") {
        if(e = $("<select class='input'></select>"), c) {
          for(d = c.length;a < d;a++) {
            e.append($("<option>" + c[a].name + "</option>").attr(c[a].attributes))
          }
        }
      }else {
        e = $("<textarea class='input' placeholder='" + Kharma.l10n.button.text + "'></textarea>"), c && e.val(c)
      }
    }
    return e
  };
  f = function() {
    Kharma.editorHelper.hide(a, h)
  };
  m = function(a) {
    a.stopPropagation();
    d({text:e.val()});
    f()
  };
  (function(b) {
    var c = $("#assetstore"), d = $("<button>" + Kharma.l10n.button.cancel + "</button>"), g = $("<div class='form'></div>"), o = $("<button>" + Kharma.l10n.button.submit + "</button>"), p = $("<span class='buttonstrip'></span>"), r = $("<span class='buttonstrip'></span>");
    h = b.noModalBlocker ? null : $("<div class='modalblocker'></div>");
    a = $("<div class='textform message dialog'><h1>" + b.header + "</h1></div>");
    b.className && a.addClass(b.className);
    h && (h.on("click", function(a) {
      a.stopPropagation();
      f()
    }), c.append(h));
    c.append(a);
    a.append(g);
    e = i();
    g.append(e);
    p.append(o);
    r.append(d);
    Kharma.utils.windowWrapper.navigator.appVersion.indexOf("Mac") !== -1 ? (a.append(r), a.append(p)) : (a.append(p), a.append(r));
    h && h.show();
    Kharma.editorHelper.show(a);
    e.focus();
    d.on("click", function() {
      f()
    });
    o.on("click", function(a) {
      m(a)
    })
  })(g)
};
Kharma.TimedMessage = function(g) {
  var h = null, g = g || {}, a, d;
  d = function() {
    h.remove();
    clearTimeout(a)
  };
  (function(c) {
    h = (new Kharma.Dialog({title:c.title, message:c.message})).element;
    a = setTimeout(function() {
      d()
    }, c.timeout * 1E3 - 500);
    h.on("click", function() {
      d()
    })
  })(g);
  return{element:h}
};
Kharma.TimedError = function(g) {
  var h, a, g = g || {}, d, c;
  c = function() {
    h.remove();
    a.remove();
    clearTimeout(d)
  };
  (function(e) {
    var b = $("#assetstore"), f = e.message || [], e = e.timeout;
    h = $("<div class='modalblocker'></div>");
    typeof f === "string" && (f = f.split(":"));
    a = (new Kharma.TimedMessage({title:f[0], message:f[1], timeout:e})).element;
    b.append(h);
    h.on("click", function(a) {
      a.stopPropagation();
      c()
    });
    a.on("click", function() {
      c()
    });
    d = setTimeout(function() {
      c()
    }, e * 1E3 - 500)
  })(g)
};
Kharma.TextMessage = function(g) {
  var h = g || {}, a, d, c = h.options || {}, e = h.callback, b = h.withCancel, f = h.noButtons || !1, i;
  i = function() {
    Kharma.editorHelper.hide(a, d)
  };
  (function() {
    var g = new Kharma.Dialog({title:h.title, message:h.message}), j = $("<button class='cancel'></button>"), k, n = c.accept || Kharma.l10n.button.ok;
    k = c.accept || Kharma.l10n.button.accept;
    var l = c.cancel || Kharma.l10n.button.cancel;
    d = h.noModalBlocker ? null : $("<div class='modalblocker'></div>");
    a = g.element;
    d && (d.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      i()
    }), g.base.append(d));
    a.addClass(c.size === "small" ? "dialog message vscroll" : "dialog message superbig vscroll");
    c.className && a.addClass(a.attr("class") + " " + c.className);
    f || (g = $("<span class='buttonstrip'></span>"), b ? (a.append("<br/>"), j.append("<span>" + l + "</span>"), g.append(j), j.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      i()
    }), j = $("<span class='buttonstrip'></span>"), k = $("<button class='ok'><span>" + k + "</span></span>"), j.append(k), k.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!0);
      i()
    }), a.append(g), a.append(j)) : (j.append("<span>" + n + "</span>"), g.append(j), a.append("<br/>"), a.append(g), j.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      Kharma.utils.windowWrapper.location.getHref().indexOf("version") !== -1 && Kharma.utils.windowWrapper.location.setHref(Kharma.utils.windowWrapper.location.getHref().replace("version", ""));
      i()
    })));
    d && d.show();
    Kharma.editorHelper.show(a)
  })();
  return{getElement:function() {
    return a
  }, setMessage:function(b) {
    a.find(".message-body").html(b)
  }, setTitle:function(b) {
    a.find("> h1").html(b)
  }, close:i}
};
Kharma.AdminStatusDialog = function(g) {
  var h, a, d, c, g = g || {}, e, b, f;
  b = function() {
    return{comment:a.val()}
  };
  e = function() {
    Kharma.editorHelper.hide(d, h)
  };
  f = function() {
    c(b());
    e()
  };
  (function(b) {
    var g = b.action, j = $("#assetstore"), k = $("<button>" + Kharma.l10n.button.cancel + "</button>"), n = b.emailUrl, n = n ? $("<a class='externallink' target='_blank' href='" + n + "'>" + Kharma.l10n.admin.fogBugzEmail + "</a>") : "", l = $("<div class='form'></div>"), o = 0, p = g.charAt(0).toUpperCase() + g.substr(1), r = $("<button>" + p + "</button>"), s = $("<span class='buttonstrip'></span>").append(r), q = $("<span class='buttonstrip'></span>").append(k);
    d = $("<div class='dialog message admin status'></div>");
    c = b.onSubmit;
    h = $("<div class='modalblocker'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      e()
    });
    j.append(h);
    j.append(d);
    a = $("<textarea class='input comment' placeholder='" + Kharma.l10n.admin.commentPlaceholder + "'></textarea>");
    d.append($("<h1>" + b.header + "</h1>"));
    d.append($("<p>" + b.necker));
    g !== "comment" && (l.append($("<h2>" + (++o + ". " + Kharma.l10n.admin.emailPublisher) + "</h2>")), l.append($("<p></p>").append(n)));
    l.append($("<h2>" + (++o + ". " + Kharma.l10n.admin.internalComment) + "</h2>"));
    l.append(a);
    l.append($("<h2></h2>").append(++o + ". " + Kharma.l10n.button.click + "  <code>" + p + "</code> " + Kharma.l10n.admin.saveComment + (g !== "comment" ? " " + Kharma.l10n.admin.changePackageStatus : "")));
    d.append(l);
    Kharma.utils.windowWrapper.navigator.appVersion.indexOf("Mac") !== -1 ? (d.append(q), d.append(s)) : (d.append(s), d.append(q));
    h.show();
    Kharma.editorHelper.show(d);
    a.focus();
    k.on("click", function() {
      e()
    });
    r.on("click", function() {
      f()
    })
  })(g)
};
Kharma.PurchaseDialog = function(g) {
  var h, a, d, c, e, b, f, i, m, j, k, n, l, o, p, r, s, q, v;
  e = function() {
    c.find(".terms a").on("click", function() {
      new Kharma.TermsDialog({noCancel:!0})
    });
    c.find(".terms input").on("click", function(a) {
      a.preventDefault();
      a.stopPropagation()
    });
    c.find(".address-container button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      i()
    });
    c.find(".cancel-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      b()
    });
    c.find(".purchase-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      n()
    });
    c.find(".disable-express-purchase-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      f()
    });
    c.find(".express-purchase a").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      p()
    });
    $(".modalblocker").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      b()
    });
    c.find(".select-box").on("change", function() {
      var a = c.find(".account-balance"), b = c.find(".account-password"), d = c.find(".express-purchase"), e = c.find(".disable-express-purchase-button"), f = c.find(".terms"), g = c.find(".express-purchase-payment"), i = c.find(".status"), h = c.find(".payment-method-label"), m = $(this).val();
      m === "cybersource" ? (h.text(Kharma.l10n.purchase.chargeCreditCard), d.show(), a.hide(), b.hide(), i.hide(), g.hide(), e.hide(), f.show()) : m === "paypal" ? (h.text(Kharma.l10n.purchase.chargePayPal), d.hide(), a.hide(), b.hide(), i.hide(), g.hide(), e.hide(), f.show()) : m === "credits" ? (h.text(Kharma.l10n.purchase.chargeAccount), d.hide(), a.show(), b.show(), i.show(), g.hide(), e.hide(), f.show()) : m === "express-checkout" && (h.text(Kharma.l10n.purchase.chargeCreditCard), a.hide(), 
      b.show(), g.show(), c.find(".purchase-button").removeAttr("disabled"), f.hide(), e.show())
    })
  };
  b = function() {
    c.find(".select-box").selectBox("destroy");
    h.remove();
    c.remove()
  };
  f = function() {
    new Kharma.TextMessage({title:Kharma.l10n.purchase.expressCheckout.disable, message:Kharma.l10n.purchase.expressCheckout.disableMessage + "<br><br><br>", withCancel:!0, options:{size:"small", accept:Kharma.l10n.button.yes}, callback:function(a) {
      a && Kharma.io.get({uri:"/api/purchase/deactivate-express/" + Kharma.login.user.id + ".json", onSuccess:function() {
        b();
        j()
      }})
    }})
  };
  i = function() {
    Kharma.addressHelper.editAddress(function(a) {
      a && l()
    })
  };
  m = function() {
    var b, c = 0, d, e = !1, f = setInterval(function() {
      e ? clearInterval(f) : (Kharma.io.get({uri:"/api/purchase/transaction_status.json", parameters:{transactionId:a.transactionId}, onSuccess:function(a) {
        a.json.status === "ok" ? (b && b.close(), e = !0, q(a.json), clearInterval(f)) : c === 1 && (b = new Kharma.TextMessage({title:Kharma.l10n.purchase.purchaseInformation, options:{size:"small"}, message:Kharma.l10n.purchase.checkingPayment, noButtons:!0}))
      }}), c === 60 && (clearInterval(f), d = $("<button class='ok'><span>" + Kharma.l10n.button.ok + "</span></span>"), b.getElement().append(d), d.on("click", function(a) {
        a.stopPropagation();
        b.close()
      }), b.setMessage(Kharma.l10n.purchase.transactionTimeOut)));
      c++
    }, 1E3)
  };
  j = function() {
    Kharma.io.get({uri:"/api/purchase/overview.json", onSuccess:function(a) {
      d = parseFloat(a.json.price);
      a.json.has_accepted_latest_terms ? o(a) : new Kharma.TermsDialog({callback:function(b) {
        b && o(a)
      }})
    }})
  };
  k = function(b, d) {
    var e = {}, f;
    (a = b.json) && b.json.hiddenFields && $.each(b.json.hiddenFields, function(a, b) {
      e[a] = b
    });
    if(d === "payloader") {
      e.payment_method = "account", e.account_password = c.find(".account-password input").val()
    }
    b.json.status === "ok" ? v(e, d) : (f = c.find(".status"), f.addClass("error"), r(c.find(".status"), b.json.status))
  };
  n = function() {
    var a = Kharma.ga.paymentInfo(), e = c.find(".select-box").val(), f;
    if(d) {
      if(e === "paypal") {
        a.processor = "PayPal", f = "payloader_paypal"
      }else {
        if(e === "cybersource") {
          a.processor = "CyberSourceSAWebMobile", a.express_checkout = c.find(".express-purchase input").is(":checked") ? 1 : 0, f = "payloader_cybersource"
        }else {
          if(e === "credits") {
            a.processor = "Account", f = "payloader"
          }else {
            if(e === "express-checkout") {
              a.processor = "Express", a.account_password = c.find(".account-password input").val(), a.express_processor = "CyberSourceSAWebMobile", f = "payloader_cybersource"
            }
          }
        }
      }
    }else {
      a.processor = "FreeOnly", f = "payloader"
    }
    Kharma.io.post({uri:"/api/purchase/create_payment.json", async:!1, parameters:a, onSuccess:function(a) {
      a.json.status === "error" ? new Kharma.TextMessage({title:Kharma.l10n.error.error, callback:function() {
        b()
      }, options:{className:"purchase-status-message", size:"small"}, message:a.json.message}) : a.json && k(a, f)
    }})
  };
  l = function() {
    Kharma.io.get({uri:"/api/user/address/0.json", onSuccess:function(a) {
      $(".address").html(Handlebars.templates.address({address:a.json.address, phoneLabel:Kharma.l10n.user.phone, vatLabel:Kharma.l10n.cart.vat}))
    }})
  };
  o = function(a) {
    var b = $("#assetstore");
    c = $(Handlebars.templates.purchaseDialog({accountBalance:Kharma.l10n.purchase.accountBalance, accountPassword:Kharma.l10n.purchase.accountPassword, allowPopups:Kharma.l10n.purchase.allowPopups, billingAddress:Kharma.l10n.purchase.billingAddress, cancel:Kharma.l10n.button.cancel, cardNumber:Kharma.l10n.purchase.cardNumber, chargeAccount:Kharma.l10n.purchase.chargeAccount, creditCard:Kharma.l10n.purchase.creditCard, credits:Kharma.l10n.purchase.credits, data:a.json, disableExpressPurchase:Kharma.l10n.purchase.expressCheckout.disable, 
    editAddress:Kharma.l10n.address.editAddress, expressCheckout:Kharma.l10n.purchase.expressCheckout.title, expressPurchase:Kharma.l10n.purchase.expressCheckout.activate, expressPurchasePayment:Kharma.l10n.purchase.expressCheckout.purchasePayment, header:Kharma.l10n.purchase.purchaseInformation, insufficient:Kharma.l10n.purchase.insufficientFunds, message:Kharma.l10n.purchase.message, payPal:Kharma.l10n.purchase.payPal, paymentMethod:Kharma.l10n.purchase.paymentMethod, price:parseFloat(a.json.price), 
    purchase:Kharma.l10n.purchase.purchase, terms:Kharma.l10n.purchase.terms, total:Kharma.l10n.cart.total}));
    h = $("<div class='modalblocker'></div>");
    b.append(h);
    h.show();
    b.append(c);
    c.find(".select-box").selectBox();
    c.find(".select-box").val() === "cybersource" && $(c.find(".payment-method-label")).text(Kharma.l10n.purchase.chargeCreditCard);
    l();
    e()
  };
  p = function() {
    new Kharma.TextMessage({title:Kharma.l10n.purchase.expressCheckout.assetStoreExpressCheckout, message:Kharma.l10n.purchase.expressCheckout.about, options:{className:"about-express-checkout"}})
  };
  r = function(a, b) {
    switch(b) {
      case "review":
        a.text(Kharma.l10n.purchase.transactionProblem);
        break;
      case "reject":
        a.text(Kharma.l10n.purchase.transactionRejected);
        break;
      case "error":
        a.text(Kharma.l10n.purchase.transactionError);
        break;
      case "timeout":
        a.text(Kharma.l10n.purchase.transactionTimeOut);
        break;
      case "unauthorized":
        a.text(Kharma.l10n.purchase.invalidPassword)
    }
  };
  s = function(a, b) {
    new Kharma.TextMessage({title:a, callback:function() {
      m()
    }, options:{size:"small"}, message:b})
  };
  q = function(a, d) {
    var e;
    a.transactionStatus.toLowerCase() === "accept" ? (Kharma.ga.view("checkout", "/receipt"), Kharma.cart.updateCartContents(), d && b(), new Kharma.PurchaseSuccessfulDialog, $("#mainContent").trigger(Kharma.utils.events.onPurchaseSuccessful)) : (Kharma.ga.view("checkout", "/failed", Kharma.l10n.purchase.error[a.statusCode] || a.statusText), d ? (e = c.find(".status"), e.addClass("error"), r(e, a.transactionStatus.toLocaleLowerCase())) : new Kharma.TextMessage({title:Kharma.l10n.purchase.purchaseInformation, 
    options:{className:"purchase-status-message", size:"small"}, message:Kharma.l10n.purchase.finalizeMessage + "<p>" + (Kharma.l10n.purchase.error[a.statusCode] || a.statusText) + "</p>"}))
  };
  v = function(d, e) {
    var f = e === "payloader_cybersource", i, h, m;
    f || e === "payloader_paypal" ? Kharma.unityEditor.openBrowser(Kharma.utils.windowWrapper.location.getProtocol() + "//" + Kharma.utils.windowWrapper.location.getHost() + "/" + Kharma.login.user.language_url_code + "/payment/payment.html?transactionId=" + (d.transaction_uuid || d.custom) + "&xunitysession=" + Kharma.login.user.xunitysession, function(a) {
      if(a) {
        throw a.message;
      }else {
        g || b(), f ? s(Kharma.l10n.purchase.creditCardPayment, Kharma.l10n.purchase.finalizeCreditCardPayment) : s(Kharma.l10n.purchase.payPalPayment, Kharma.l10n.purchase.finalizePayPalPayment)
      }
    }) : (i = new Kharma.utils.IframeTransport, i.createForm("postFrame", e, function() {
      i.prepareFormData(a.postActionUrl, "postFrame", "payloadForm", d);
      Kharma.utils.windowWrapper.frames.postFrame.document.getElementById("payloadForm").submit();
      m = c.find(".status");
      m.removeClass("error");
      m.text(Kharma.l10n.purchase.sendingPayment)
    }))
  };
  Kharma.ga.view("checkout", "/");
  g || j();
  return{purchaseStatusCallback:function(a, b) {
    q({transactionStatus:a, statusText:b}, !0)
  }, showCreditsPurchaseError:r, onCreatePayment:k}
};
Kharma.PurchaseSuccessfulDialog = function() {
  var g, h, a;
  a = function() {
    Kharma.editorHelper.hide(g, h)
  };
  (function() {
    var d = new Kharma.Dialog({title:Kharma.l10n.purchase.purchaseInformation, message:Kharma.l10n.purchase.transactionSuccessful}), c = $("<button class='cancel'>" + Kharma.l10n.button.close + "</button>"), e = $("<button class='open-download-manager'>" + Kharma.l10n.purchase.openDownloadManager + "</button>");
    h = $("<div class='modalblocker'></div>");
    $("#assetstore").append(h);
    g = d.element;
    h.on("click", function(b) {
      b.stopPropagation();
      a()
    });
    g.addClass("dialog message vscroll purchase-successful");
    g.append(e);
    g.append(c);
    e.on("click", function() {
      a();
      $.address.value("/account/downloads")
    });
    c.on("click", function(b) {
      b.stopPropagation();
      a()
    });
    h.show();
    Kharma.editorHelper.show(g)
  })()
};
Kharma.ReportDialog = function(g) {
  var h, a, g = g || {}, d = g.commentId, c = g.packageData, e = g.publisherId, b = g.message, f = g.title, i = g.type, m = g.userId, j, k, n, l, o, p;
  n = function() {
    var c = $("<button>" + Kharma.l10n.button.cancel + "</button>"), d = $("<div class='form'></div>"), e = $("<button>" + Kharma.l10n.button.submit + "</button>"), g = $("<span class='buttonstrip reportCancel'></span>"), i = $("<span class='buttonstrip reportSubmit'></span>");
    a.append("<h1>" + f + "</h1>");
    a.append(d);
    j = $("<textarea placeholder='" + Kharma.l10n.report.report + "'>" + b + "</textarea>");
    j.on("focus", function() {
      var a = $(this);
      a.is(":focus") || (a.val(""), j.off("focus"))
    });
    d.append(j);
    a.append("<form><div><input class='offensive' type='checkbox' name='Offensive Content'/><span class='offensive'>" + Kharma.l10n.report.offensiveContent + "</span></div><div><input type='checkbox' class='copyright' name='Copyright infringement'/><span class='copyright'>" + Kharma.l10n.report.copyrightInfringement + "</span></div><div><input type='checkbox' class='misleading' name='Misleading or false advertising'/><span class='misleading'>" + Kharma.l10n.report.misleading + "</span></div><div class='other'><input class='other' class='other' type='checkbox' name='Other'/><span class='other'>" + 
    Kharma.l10n.report.other + "</span></form></div>");
    g.append(c);
    i.append(e);
    a.append(g);
    a.append(i);
    a.find("form input.other").on("change", function() {
      l()
    });
    a.find("form span").on("click", function(b) {
      b = $(a.find("." + $(b.target).attr("class")));
      b.is(":checked") ? b.removeAttr("checked") : b.attr("checked", "checked");
      b.hasClass("other") && l()
    });
    h.show();
    Kharma.editorHelper.show(a);
    j.focus();
    c.on("click", function() {
      k()
    });
    e.on("click", function() {
      o()
    })
  };
  k = function() {
    Kharma.editorHelper.hide(a, h)
  };
  o = function() {
    p();
    k()
  };
  p = function() {
    var b = a.find("form input"), g = [], h;
    i === "violation" ? h = "/api/content/report-abuse/" + c.id + ".json" : i === "comment" ? h = "/api/content/report-abuse/" + c.id + "/comment/" + d + ".json" : i === "user" ? h = "/api/user/report-abuse/" + m + ".json" : i === "publisher" && (h = "/api/publisher/report-abuse/" + e + ".json");
    $.each(b, function(b, c) {
      var d = $(c);
      d.is(":checked") && (d.hasClass("other") ? g.push(d.attr("name") + ": " + $(a.find("input.reason")).val()) : g.push(d.attr("name")))
    });
    Kharma.io.post({uri:h, parameters:{title:f, description:g.length > 0 ? "[" + g.join(", ") + "] " + j.val() : j.val()}, onSuccess:function() {
      i === "violation" ? Kharma.ga.view("packageOther", c.id, "/report/abuse/success") : i === "comment" ? Kharma.ga.view("packageReview", c.id, d, "/report/abuse/success") : i === "user" ? Kharma.ga.view("account", m, "/report/abuse/success") : i === "publisher" && Kharma.ga.view("publisherOther", e, "/report/abuse/success");
      new Kharma.TimedMessage({title:Kharma.l10n.report.thankYou, message:Kharma.l10n.report.thankYouMessage, timeout:5})
    }})
  };
  l = function() {
    var b = a.find(".reason");
    b.length === 0 ? (a.find("form div.other").append($("<input class='reason' type='text' name='reason' placeholder=''>")), b.focus()) : b.remove()
  };
  (function() {
    var b = $("#assetstore");
    i === "violation" ? Kharma.ga.view("packageOther", c.id, "/report/abuse") : i === "comment" ? Kharma.ga.view("packageReview", c.id, d, "/report/abuse") : i === "user" ? Kharma.ga.view("account", m, "/report/abuse") : i === "publisher" && Kharma.ga.view("publisherOther", e, "/report/abuse");
    h = $("<div class='modalblocker'></div>");
    a = $("<div class='dialog messageform reviewform report'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      k()
    });
    b.append(h);
    b.append(a);
    n()
  })()
};
Kharma.LanguageDialog = function(g) {
  var h, a, d, c, e, b;
  c = function() {
    var c = $("<button>" + Kharma.l10n.button.cancel + "</button>"), g = $("<button>" + Kharma.l10n.button.submit + "</button>");
    e = $('<select id="languageSelect"></select>');
    a.append($("<h1>" + Kharma.l10n.language.changeLanguage + "</h1><br>"));
    a.append(e);
    $.each(Kharma.helper.getLanguages(), function(a, b) {
      e.append($('<option value="' + b.url + '" l10n="' + b.language + '">' + b.label + "</option>"))
    });
    a.append("<br>&nbsp;<br>");
    a.append(c);
    a.append(g);
    h.show();
    Kharma.editorHelper.show(a);
    h.on("click", function(a) {
      a.stopPropagation();
      d()
    });
    c.on("click", d);
    g.on("click", b)
  };
  d = function() {
    Kharma.editorHelper.hide(a, h)
  };
  b = function() {
    Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:$("#languageSelect :selected").attr("l10n")}, onSuccess:function() {
      Kharma.login.changeLanguageUrl(e.val())
    }})
  };
  (function() {
    var b = $("#assetstore");
    h = $("<div class='modalblocker'></div>");
    b.append(h);
    a = $("<div class='dialog message change-language'></div>");
    b.append(a);
    c()
  })(g)
};
Kharma.CategoryPage = function(g) {
  var h = null, g = g || {}, a = g.id || "0", d = g.page, c = g.sortby, e = {name:"name", popularity:"hotness", price:"price", rating:"rating", releasedate:"date"}, b, f, i, m, j;
  f = function() {
    i.call(this);
    m.call(this)
  };
  i = function() {
    Kharma.io.get({uri:"/api/category/featured/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      b(a.json)
    }})
  };
  b = function(b) {
    var c = $("#cattitle"), d, e;
    h.addOpenGraph(b, Handlebars.templates.openGraphCategory);
    if(c) {
      d = b.title, c.html(d), h.setPageTitle(d), e = b.featured, $(".quarter .item").each(function(b, c) {
        var f, g = $(c), i, m = Kharma.unityEditor.getEditorVersion();
        h.clearElement(g);
        if(b < e.length) {
          i = e[b];
          f = i.keyimage.small;
          if(f === null) {
            f = i.keyimage.icon75, g.addClass("icon-bg")
          }
          h.setBackground({element:g, backgroundUrl:f, link:i.flags && i.flags.override_url ? i.url : "#!/" + i.link.type + "/" + i.link.id, callback:i.flags && i.flags.override_url && m && parseFloat(m) < 5 && Kharma.unityEditor.openBrowser});
          h.createDetails(g, i);
          g.on("click", function() {
            Kharma.ga.event("promotion", {action:"categorySecondary", position:"Position " + (b + 1), origin:{categoryId:a, categoryName:d}, target:{packageId:i.id, packageName:i.title, publisherName:i.publisher.label}})
          })
        }
      })
    }
  };
  m = function() {
    Kharma.io.get({uri:!isNaN(parseInt(d, 10)) ? "/api/category/results/" + a + ".json?rows=36&page=" + d + "&order_by=" + e[c] : "/api/category/results/" + a + ".json?&order_by=" + e[c], pageSpecific:!0, onSuccess:function(a) {
      j.call(this, a.json)
    }})
  };
  j = function(b) {
    var e = $("#catresults");
    b.feed && b.feed !== "" && $("#feedlatest a").first().attr("href", b.feed).parent().css("display", "block");
    h.clearElement(e);
    new Kharma.UI.PaginationList({callback:h.miniLink, category:a, data:b, element:e, page:d, results:b.results, sortBy:c, withSorting:!0, withPagination:!0});
    h.setLoaded(!0)
  };
  h = new Kharma.Page("cat", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("category", a);
    if(h.load()) {
      return!0
    }
    h.setTemplate(Handlebars.templates.categoryPage({loading:Kharma.l10n.page.loadingPage}));
    h.addFooter($("#mainContent"));
    h.loadSideBar(a);
    f.call(this)
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.CategoriesPage = function() {
  var g = null, h;
  h = function() {
    Kharma.io.get({uri:"/api/home/categories.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      var d = $("#categories-tree");
      d.empty();
      a.json.categories[0] && a.json.categories[0].id !== "home" && a.json.categories.unshift({id:"home", name:Kharma.l10n.categories.home});
      Kharma.UI.categoryTreeList = new Kharma.UI.TreeList("categoriesPage", a.json);
      Kharma.UI.categoryTreeList.render(d)
    }})
  };
  g = new Kharma.Page("categories");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("categories");
    if(g.load()) {
      return!0
    }
    g.setTemplate($('<div id="categories-tree"><span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span></div>'));
    g.addFooter();
    h();
    g.loadSideBar();
    g.setLoaded(!0)
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.ContentPage = function(g) {
  var h = null, a, d, c, e, b, f = g || {}, i, m, j, k, n, l, o, p, r, s, q, v, t, y, x, A, z, C, u, w, J, G, I, K, B, H, M, D, Q, L, O, N, E;
  k = function(a) {
    var b = $("#contentoverview"), c = $('<a class="report-violation" title="' + Kharma.l10n.report.violation + '"></a>');
    b.find(".report-violation").length === 0 && $(b.find("h1")).append(c);
    c.on("click", function() {
      new Kharma.ReportDialog({title:Kharma.l10n.report.violationTitle, message:Kharma.l10n.report.violationPackageMessage, type:"violation", packageData:a})
    })
  };
  n = function(a, b) {
    a.can_download && a.publisher.support_email && a.publisher.support_email !== "" && b.append('<span class="right"><a href="mailto:' + a.publisher.support_email + '" target="_blank">' + Kharma.l10n.page.supportEmail + "</a></span>")
  };
  r = function(a) {
    var b = $("#contentaside .item"), c = a.pubdate && a.pubdate.match("(\\w+) (\\d+), (\\d+)");
    b.empty();
    c && (c = c[1].substring(0, 3) + " " + c[2] + ", " + c[3]);
    a.version && (b.append('<span class="left">' + Kharma.l10n.page.version + ' <a href="#" class="livelink show-release-notes">' + a.version + "</a> (" + c + ")</span>"), $(".show-release-notes", b).on("click", function(a) {
      a.stopPropagation();
      L();
      return!1
    }));
    a.sizetext && b.append('<span class="left">' + Kharma.l10n.pkg.size + " " + a.sizetext + "</span>");
    a.license && (b.append('<span class="left"><a href="#" class="livelink show-license">' + Kharma.l10n.page.licenseAgreement + "</a></span>"), $(".show-license", b).on("click", function(a) {
      a.stopPropagation();
      Q();
      return!1
    }));
    b.append('<span class="left break"></span>');
    a.publisher.url !== "" && b.append('<span class="right"><a href="' + a.publisher.url + '" target="_blank">' + Kharma.l10n.page.publisherWebsite + "</a></span>");
    a.publisher.support_url && a.publisher.support_url !== "" && b.append('<span class="right"><a href="' + a.publisher.support_url + '" target="_blank">' + Kharma.l10n.page.supportWebsite + "</a></span>");
    n(a, b)
  };
  v = function(a) {
    var b = function() {
      Kharma.cart = Kharma.cart || new Kharma.Cart;
      Kharma.cart.addItem(a, !0)
    };
    (!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated()) && Kharma.utils.windowWrapper.history.replaceState({}, "", location.pathname + location.hash.replace("/directpurchase", ""));
    if(Kharma.login && Kharma.login.user) {
      b()
    }else {
      $("#mainContent").off(Kharma.utils.events.onLoginSuccessful, b).on(Kharma.utils.events.onLoginSuccessful, b)
    }
  };
  y = function(a) {
    $("#recommendations").show();
    if(!Kharma.search) {
      Kharma.search = new Kharma.Search
    }
    Kharma.search.getRecommendations(h.id, function(b) {
      var c = $("#recommendations .body"), b = b.results;
      $("#recommendations .loadarea").hide();
      b.length > 0 ? (c = new Kharma.UI.ShowMoreList({callback:h.miniLink, results:a ? b : b.slice(0, 9), element:c, withInitialSorting:!0, withSorting:!0, ga:{action:"recommendations"}}), b.length > 9 && !a && c.addShowMoreLink(b, 9, $("#recommendations"))) : c.append("<p class='no-recommendations'>" + Kharma.l10n.recommendations.noRecommendations + "</p>")
    })
  };
  N = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReviewDialog({commentID:null, packageID:h.id, publisherID:i, packageName:e.content.title, publisherName:e.content.publisher.label})
  };
  x = function(a) {
    h.loadSideBar(a.category.id, function(b) {
      var c = $(".salesBadget");
      c.length > 0 && b.badge && b.badge !== "" && c.css("background-image", 'url("' + b.badge + '")').addClass("visible");
      c.length > 0 && (Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && a.price_level11member ? c.css("background-image", 'url("/images/badges/level11-badge.png")').addClass("visible") : h.id === b.daily.id && c.css("background-image", 'url("/images/badges/24hourdeals.png")').addClass("visible"))
    })
  };
  l = function() {
    var a = $("#contentoverview"), b = $("<button class='add-remove-wish-list' title='" + Kharma.l10n.wishList.add + "'><div class='hearth'></div><span></span></button>");
    a.find(".add-remove-wish-list").length === 0 && $(a.find("h1")).append(b);
    e.content.is_on_wishlist ? (b.addClass("remove"), $(b.find("span")).text(Kharma.l10n.wishList.remove)) : (b.removeClass("remove"), $(b.find("span")).text(Kharma.l10n.wishList.add));
    b.off().on("click", function() {
      var a;
      if(!Kharma.wishList) {
        Kharma.wishList = new Kharma.WishList
      }
      Kharma.login.user.is_anonymous || (b.hasClass("remove") ? (a = "remove", Kharma.wishList.deleteFromWishList(e.content.id, function() {
        b.removeClass("remove");
        $(b.find("span")).text(Kharma.l10n.wishList.add)
      })) : (a = "add", Kharma.wishList.addToWishList(e.content.id, function() {
        b.addClass("remove");
        $(b.find("span")).text(Kharma.l10n.wishList.remove)
      })), Kharma.ga.event("wishlist", {action:a, label:"package", target:{packageId:e.content.id, packageName:e.content.title, publisherName:e.content.publisher.label}}))
    });
    $("#mainContent").on(Kharma.utils.events.onAddedToWishList, function() {
      b.addClass("remove");
      $(b.find("span")).text(Kharma.l10n.wishList.remove)
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function(a, c) {
      c.packageId === h.id && (b.removeClass("remove"), $(b.find("span")).text(Kharma.l10n.wishList.add))
    })
  };
  z = function() {
    Kharma.io.get({uri:"/api/content/overview/" + h.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      var b, c = a.json;
      c.error === "not found" ? $.address.value("/404") : c.error === "disabled" ? (b = Kharma.l10n.supplant(Kharma.l10n.pkg.disabled, {name:c.content.title}), C(a, b)) : Kharma.download.getLocalPackageById("content", h.id, function(d) {
        Kharma.io.post({uri:"/api/content/user-overview/" + h.id + ".json", data:JSON.stringify(d), onSuccess:function(d) {
          if(c.error) {
            if(c.content) {
              c.content.can_download = d.json.content.can_download, b = Kharma.l10n.supplant(Kharma.l10n.pkg.deprecated, {name:c.content.title}), C(a, b)
            }
          }else {
            u(a, d)
          }
          y(c.error)
        }})
      })
    }})
  };
  C = function(a, b) {
    var c = $("#contentoverview"), d = $("#contentoverview h1"), e = a.json, f = e.content, c = $(c.find(".item")), g = f.title;
    $("#contentpage").addClass("error");
    h.clearElement(c);
    d.html(g);
    d.attr("title", g);
    c.append(h.createFullTemplate({data:f, error:e.error, message:b}));
    h.setPageTitle(g);
    x(f);
    f.can_download ? r(f) : $("#contentaside").hide();
    h.setLoaded(!0)
  };
  u = function(a, b) {
    var c = b.json.content;
    $("#contentpage .blocked").addClass("full");
    a.json.content.rating.user = c.rating.user;
    a.json.content.can_download = c.can_download;
    a.json.content.can_update = c.can_update;
    a.json.content.is_on_wishlist = c.is_on_wishlist;
    a.json.content.purchased_at = c.purchased_at;
    a.json.content.last_downloaded_at = c.last_downloaded_at;
    a.json.content.compatibility = c.compatibility;
    a.json.content.upgrade_package = c.upgrade_package;
    e = a.json;
    I(e);
    h.setLoaded(!0);
    M(a)
  };
  J = function() {
    $("#adminstrip").find("#adminMode").removeClass("not-active");
    new Kharma.AdminContent({packageId:h.id, categoryId:c, publisherId:i, packageName:b})
  };
  I = function(e) {
    var e = e.content, f = $("#contentpage"), g = $("#contentoverview h1");
    d = $("#contentoverview .full .item");
    c = e.category.id;
    i = e.publisher.id;
    b = e.title;
    h.setPageTitle(b);
    x(e);
    Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && e.price_level11member ? f.addClass("level-11-sale") : e.price_original && f.addClass("sale");
    g && (g.html("<span class='content-title'>" + e.title + "</span>"), g.attr("title", e.title));
    d.length > 0 && D(e);
    O(e);
    e.flags && !e.flags.no_content && ($("#packageContents").removeClass("hidden"), w(), new Kharma.UI.AssetHierarchy(a, e));
    Kharma.login && Kharma.login.isAdmin && $("#adminlayer").is(":visible") && J();
    h.activateLinks();
    r(e);
    h.addOpenGraph(e, Handlebars.templates.openGraphContent)
  };
  D = function(a) {
    var b = a.keyimage.big, c = $('<div class="overview-text-overlay" />');
    a.category.multiple === "Y" && c.addClass("multiple-seats");
    a.rating && a.rating.user !== 0 && c.addClass("my-rating");
    if(b === null) {
      b = a.keyimage.icon75, d.addClass("icon-bg")
    }
    h.clearElement(d);
    h.setBackground({element:d, backgroundUrl:b, smallBackgroundUrl:a.keyimage.small});
    d.append(c);
    h.createFull({element:c, data:a, callback:function() {
      h.setExternalLinks("fulldescription");
      $(".fulldescription.vscroll")
    }, level11:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && a.price_level11member});
    (a.price_original || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && a.price_level11member) && $(".background").after($("<div class='salesBadget'></div>"));
    if(a.publishnotes && a.publishnotes !== "n/a") {
      m = a.publishnotes
    }
    k(a);
    Kharma.login.user && !Kharma.login.user.is_anonymous && l()
  };
  O = function(a) {
    var b = {}, c, d = (c = Kharma.unityEditor.getEditorVersion()) && parseFloat(c) >= 5 ? !0 : !1;
    if(a.images && a.images.length > 0) {
      c = a.images.length - 1;
      if(Kharma.unityEditor.isEditor() && !d) {
        for(;c > -1;c--) {
          a.images[c].type !== "screenshot" && a.images.splice(c, 1)
        }
      }
      for(;c > -1;c--) {
        b[a.images[c].type] || (b[a.images[c].type] = []), b[a.images[c].type].indexOf(a.images[c].link) === -1 ? b[a.images[c].type].push(a.images[c].link) : a.images.splice(c, 1)
      }
      new Kharma.UI.ScreenShot(a.images)
    }
  };
  j = function(a, b) {
    var c, d = a.length;
    if(a && d > 0) {
      for(c = 0;c < d;c++) {
        $(a[c]).on("click", b)
      }
    }
  };
  w = function() {
    j($(".edit-review"), t);
    j($(".delete-review"), p);
    j($(".reply-review"), B);
    j($(".reply-reply"), K);
    j($(".edit-reply"), B);
    j($(".delete-reply"), o);
    j($(".yes"), function(a) {
      E($(a.target), 1)
    });
    j($(".no"), function(a) {
      E($(a.target), 0)
    });
    j($(".reportAbuse"), function(a) {
      new Kharma.ReportDialog({packageData:e.content, title:Kharma.l10n.report.title, message:Kharma.l10n.report.message, type:"comment", commentId:$(a.target).attr("data-id")})
    })
  };
  t = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReviewDialog({commentID:a.target.getAttribute("data-id"), packageID:h.id, publisherID:e.content.publisher.id, packageName:e.content.title, publisherName:e.content.publisher.label})
  };
  p = function(a) {
    var b = a.target.getAttribute("data-id");
    Kharma.ga.view("packageReview", h.id, b, "/delete");
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.review.deleteReview, message:Kharma.l10n.review.deleteReviewMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(b) {
      b && q(a.target.getAttribute("data-id"))
    }})
  };
  q = function(a) {
    Kharma.io.del({uri:"/api/content/comments/" + h.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.ga.view("packageReview", h.id, a, "/delete/success");
      Kharma.ga.event("review", {action:"deleteReview", target:{area:"Packages", publisherName:e.content.title, packageName:e.content.publisher.label}});
      Kharma.io.flushCacheKey("/api/content/comments/" + h.id + ".json");
      A.call(this)
    }})
  };
  B = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReplyReviewDialog({commentID:a.target.getAttribute("data-id"), packageID:h.id, packageName:e.content.title, publisherName:e.content.publisher.label})
  };
  K = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReplyReviewDialog({commentID:a.target.getAttribute("data-id"), packageID:h.id, replyReply:!0, packageName:e.content.title, publisherName:e.content.publisher.label})
  };
  o = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.reply.deleteReply, message:Kharma.l10n.reply.deleteReplyMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(b) {
      b && (Kharma.ga.view("packageReview", h.id, a.target.getAttribute("data-id"), "/delete/reply/success"), Kharma.ga.event("review", {action:"deleteReplay", target:{area:"Packages", publisherName:e.content.title, packageName:e.content.publisher.label}}), s(a.target.getAttribute("data-id")))
    }})
  };
  s = function(a) {
    Kharma.io.del({uri:"/api/content/comments/" + h.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.io.flushCacheKey("/api/content/comments/" + h.id + ".json");
      A.call(this)
    }})
  };
  L = function() {
    if(m = m.replace(/<a/g, "<a target=_blank")) {
      Kharma.ga.view("packageOther", h.id, "/release-notes"), new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:m})
    }
  };
  A = function(a) {
    a || Kharma.io.get({uri:"/api/content/comments/" + h.id + "/3.json", pageSpecific:!0, onSuccess:function(a) {
      G(a.json, "show")
    }})
  };
  G = function(a, b) {
    var c = $("#contentcomments .body"), d = {admin:Kharma.login.isAdmin, comments:a.comments, data:a, deleteButton:Kharma.l10n.button.deleteButton, edit:Kharma.l10n.button.edit, isHelpful:Kharma.l10n.review.isHelpful, no:Kharma.l10n.button.no, noReviews:Kharma.l10n.review.noReviews, replyButton:Kharma.l10n.button.reply, reportAbuse:Kharma.l10n.report.title, showCount:!1, writeReview:Kharma.l10n.review.writeReview, yes:Kharma.l10n.button.yes};
    c.empty();
    d = Handlebars.templates.comments(d);
    c.append(d);
    $(c.find(".write-review")).off().on("click", function(a) {
      N(a)
    });
    c = $(c.find(".show-all"));
    b === "show" ? c.text(Kharma.l10n.supplant(Kharma.l10n.page.showAllReviews, {count:a.count})) : c.text(Kharma.l10n.page.hideAllReviews);
    c.off().on("click", function() {
      b === "show" ? H() : A()
    });
    w()
  };
  E = function(a, b) {
    Kharma.io.post({uri:"/api/content/comment-vote/" + h.id + "/" + a.attr("data-id") + ".json", pageSpecific:!0, parameters:{is_helpful:b}, onSuccess:function() {
      Kharma.io.get({uri:"/api/content/comments/" + h.id + ".json", pageSpecific:!0, onSuccess:function(b) {
        $.each(b.json.comments, function(b, c) {
          if(c.id === a.attr("data-id")) {
            var d = $(a.find("h2")[0]);
            d.text(c.subject);
            d.append("<div class='helpful'>(" + c.is_helpful.score + " of " + c.is_helpful.count + " " + Kharma.l10n.review.helpful + ")</div>")
          }
        });
        a.parent().text(Kharma.l10n.review.thankYou)
      }})
    }})
  };
  H = function() {
    Kharma.io.get({uri:"/api/content/comments/" + h.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      G(a.json, "hide")
    }})
  };
  M = function(a) {
    a.json.content.flags && !a.json.content.flags.no_review && ($("#contentcomments").removeClass("hidden"), A(void 0))
  };
  Q = function() {
    var a = new Kharma.TextMessage({title:Kharma.l10n.page.license, message:'<span class="loadstatus loading">&nbsp;</span>'});
    Kharma.io.get({uri:"/api/content/license/" + h.id + ".json", pageSpecific:!0, onSuccess:function(b) {
      a.setMessage(b.json.result.license)
    }})
  };
  h = new Kharma.Page(f);
  return{clear:h.clear, clearElement:h.clearElement, id:h.id, type:h.type, isLoaded:h.isLoaded, load:function() {
    var b = h.id || 0;
    Kharma.ga.view("package", b);
    f.directPurchase && v(b);
    if(h.load()) {
      return!0
    }
    a = this;
    h.setTemplate(Handlebars.templates.contentPage({expand:Kharma.l10n.page.expand, loading:Kharma.l10n.page.loadingPage, packageContents:Kharma.l10n.page.packageContents, recommendations:Kharma.l10n.recommendations.title, userReviews:Kharma.l10n.review.userReviews}));
    z();
    h.addFooter($(".main-content"))
  }, makeEditable:w, openAdminMode:J, renderComments:G, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setTemplate:h.setTemplate, showLicense:Q, showReleaseNotes:L, startReview:N, onResize:h.onResize, versionRequired:h.versionRequired}
};
Kharma.GeneralStoreTestPage = function() {
  var g = null, h, a, d;
  h = function() {
    $(window).on("message", function(a) {
      a = a.originalEvent.data;
      a === "checkout" ? (Kharma.cart.updateCartContents(), Kharma.cart.showCart()) : a.action === "login" ? Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous && (new Kharma.LoginDialog).show() : a.action === "address" && a.value && Kharma.utils.windowWrapper.history.replaceState({}, document.title, "#!/generalstoretest/" + a.value);
      $(window).on(Kharma.utils.events.onPurchaseSuccessful, function() {
        Kharma.utils.windowWrapper.frames.generalStore.postMessage("reply", "*")
      })
    })
  };
  a = function() {
    Kharma.io.get({uri:"/api/sale/results.json", pageSpecific:!0, onSuccess:function() {
      d()
    }})
  };
  d = function() {
    g.setPageTitle("GeneralStore Test");
    g.setLoaded(!0)
  };
  g = new Kharma.Page("generalStoreTest");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    g.load();
    g.loadSideBar();
    Kharma.io.get({uri:"/api/partner-store/enter/generalStore.json", onFailure:function(a) {
      a.transport.getResponseHeader("X-Kharma-ExceptionType") === "MustHaveAddress" ? new Kharma.AddressDialog({callback:function() {
        Kharma.history.goBackOrHome()
      }, addressData:{}, errorField:"country"}) : Kharma.history.goBackOrHome()
    }, onSuccess:function(c) {
      g.setTemplate($('<iframe name="generalStore" id="generalStore" frameborder="0" allowtransparency="1"></iframe>'));
      a();
      document.getElementById("generalStore").src = c.json.url + Kharma.utils.windowWrapper.location.getHash().replace(/!\/generalstoretest\/?/, "");
      h()
    }})
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.ApmMusicStorePage = function() {
  var g = null, h, a, d;
  h = function() {
    $(window).on("message", function(a) {
      a = a.originalEvent.data;
      a === "checkout" ? (Kharma.cart.updateCartContents(), Kharma.cart.showCart()) : a.action === "login" ? Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous && (new Kharma.LoginDialog).show() : a.action === "address" && a.value && Kharma.utils.windowWrapper.history.replaceState({}, document.title, "#!/apmmusicstore/" + a.value);
      $(window).on(Kharma.utils.events.onPurchaseSuccessful, function() {
        Kharma.utils.windowWrapper.frames.apmMusicStore.postMessage("reply", "*")
      })
    })
  };
  a = function() {
    Kharma.io.get({uri:"/api/sale/results.json", pageSpecific:!0, onSuccess:function() {
      d()
    }})
  };
  d = function() {
    g.setPageTitle("APM Music Store");
    g.setLoaded(!0)
  };
  g = new Kharma.Page("apmMusicStore");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("apmMusicStore");
    g.load();
    g.loadSideBar();
    Kharma.io.get({uri:"/api/partner-store/enter/apmMusicStore.json", onFailure:function(a) {
      a.transport.getResponseHeader("X-Kharma-ExceptionType") === "MustHaveAddress" ? new Kharma.AddressDialog({callback:function() {
        Kharma.history.goBackOrHome()
      }, addressData:{}, errorField:"country"}) : Kharma.history.goBackOrHome()
    }, onSuccess:function(c) {
      $("#sidebar").find(".vat-info-box").length === 0 && $("#sidebar").append("<div class='vat-info-box'>" + Kharma.l10n.apm.vatInfo + "</div>");
      g.setTemplate($('<iframe name="apmMusicStore" id="apmMusicStore" frameborder="0" allowtransparency="1"></iframe>'));
      a();
      document.getElementById("apmMusicStore").src = c.json.url + Kharma.utils.windowWrapper.location.getHash().replace(/!\/apmmusicstore\/?/, "");
      h()
    }})
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.SongLilyStorePage = function() {
  var g = null, h, a, d;
  h = function() {
    $(window).on("message", function(a) {
      a = a.originalEvent.data;
      a === "checkout" ? (Kharma.cart.updateCartContents(), Kharma.cart.showCart()) : a.action === "login" ? Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous && (new Kharma.LoginDialog).show() : a.action === "address" && a.value && Kharma.utils.windowWrapper.history.replaceState({}, document.title, "#!/songlilystore/" + a.value);
      $(window).on(Kharma.utils.events.onPurchaseSuccessful, function() {
        Kharma.utils.windowWrapper.frames.songLilyStore.postMessage("reply", "*")
      })
    })
  };
  a = function() {
    Kharma.io.get({uri:"/api/sale/results.json", pageSpecific:!0, onSuccess:function() {
      d()
    }})
  };
  d = function() {
    g.setPageTitle("SongLily Store");
    g.setLoaded(!0)
  };
  g = new Kharma.Page("songLilyStore");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("songLilyStore");
    g.load();
    g.loadSideBar();
    Kharma.io.get({uri:"/api/partner-store/enter/songLilyStore.json", onFailure:function(a) {
      a.transport.getResponseHeader("X-Kharma-ExceptionType") === "MustHaveAddress" ? new Kharma.AddressDialog({callback:function() {
        Kharma.history.goBackOrHome()
      }, addressData:{}, errorField:"country"}) : Kharma.history.goBackOrHome()
    }, onSuccess:function(c) {
      g.setTemplate($('<iframe name="songLilyStore" id="songLilyStore" frameborder="0" allowtransparency="1"></iframe>'));
      a();
      document.getElementById("songLilyStore").src = c.json.url + Kharma.utils.windowWrapper.location.getHash().replace(/!\/songlilystore\/?/, "");
      h()
    }})
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.HomePage = function() {
  var g = null, h, a, d, c, e, b, f, i, m, j;
  b = function() {
    Kharma.io.get({uri:"/api/home/featured.json", cacheExpiryPeriod:Kharma.Time.HOUR, pageSpecific:!0, onSuccess:function(b) {
      c(b.json.primary);
      e.call(this, b.json.secondary);
      f.call(this, b.json.hottest);
      a.call(this, b.json.assetstoretools);
      d();
      j();
      g.activateLinks();
      g.setLoaded(!0)
    }})
  };
  c = function(a) {
    var b = a.keyimage.big, c = a.keyimage.small, d = $('<div class="overview-text-overlay" />'), e = $(".full .item"), f = $("<a class='livelink salesBadget'></a>"), j = Kharma.unityEditor.getEditorVersion();
    h = $('<p class="featureddescription vscroll" />');
    m = a.id;
    g.clearElement(e);
    if(b === null) {
      b = a.keyimage.icon75, e.addClass("icon-bg")
    }
    g.setBackground({element:e, backgroundUrl:b, smallBackgroundUrl:c, link:a.flags && a.flags.override_url ? a.url : "#!/" + a.link.type + "/" + a.link.id, callback:a.flags && a.flags.override_url && j && parseFloat(j) < 5 && Kharma.unityEditor.openBrowser});
    a.flags.banner_size && e.addClass("banner");
    a.price_level11member && Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? ($(".background").after(f), f.attr("href", "#!/" + a.link.type + "/" + a.link.id), f.css("background-image", 'url("/images/badges/level11-badge.png")').show()) : a.price_original && ($(".background").after(f), f.attr("href", "#!/" + a.link.type + "/" + a.link.id), i && (m === i.daily.id ? f.css("background-image", 'url("/images/badges/24hourdeals.png")').show() : i.badge !== 
    "" && f.css("background-image", 'url("' + i.badge + '")').show()));
    a.flags && !a.flags.no_text_on_big_keyimage && (g.createDetails(d, a), h.append(a.description), d.append(h), e.append(d));
    g.setExternalLinks("featureddescription");
    e.on("click", function() {
      Kharma.ga.event("promotion", {action:"homePrimary", position:"Position 1", target:{packageId:a.id, packageName:a.title, publisherName:a.publisher.label}})
    })
  };
  e = function(a) {
    var b = $(".quarter .item"), c = Kharma.unityEditor.getEditorVersion();
    b.each(function(b, d) {
      var e, f = $(d), i;
      g.clearElement(f);
      if(b < a.length) {
        i = a[b];
        e = i.keyimage.small;
        if(e === null) {
          e = i.keyimage.icon75, f.addClass("icon-bg")
        }
        g.setBackground({element:f, backgroundUrl:e, link:i.flags && i.flags.override_url ? i.url : "#!/" + i.link.type + "/" + i.link.id, callback:i.flags && i.flags.override_url && c && parseFloat(c) < 5 && Kharma.unityEditor.openBrowser});
        g.createDetails(f, i);
        f.on("click", function() {
          Kharma.ga.event("promotion", {action:"homeSecondary", position:"Position " + (b + 1), target:{packageId:i.id, packageName:i.title, publisherName:i.publisher.label}})
        })
      }
    })
  };
  f = function(a) {
    var b = $("#popresults");
    g.clearElement(b);
    new Kharma.UI.PaginationList({callback:g.miniLink, element:b, results:a.slice(0, 24), ga:{action:"mostPopular"}})
  };
  a = function(a) {
    var b = $("#assetstoretools");
    a && b.length > 0 && (g.clearElement(b), g.linkElement(b, a.link.type, a.link.id, Kharma.l10n.page.publishStuff))
  };
  d = function() {
    var a = $("#terms");
    a.length > 0 && a.append('<a href="http://unity3d.com/company/legal/as_terms" target="_blank">' + Kharma.l10n.page.termsOfService + '</a> &nbsp; <a href="http://unity3d.com/company/legal/privacy-policy#cookies" target="_blank">' + Kharma.l10n.page.cookies + "</a>")
  };
  j = function() {
    !Kharma.unityEditor.isEditor() && $.cookie("cookies") !== "accepted" && ($("body").append('<div class="cookie-dialog"><div class="content"><span>This site uses cookies.</span> <wbr /><span>Click <a href="http://unity3d.com/company/legal/privacy-policy#cookies" target="_blank">here</a> for more information. <div class="blue-btn smallbtn">OK</div></span></div></div>'), $(".cookie-dialog .blue-btn").on("click", function() {
      $.cookie("cookies", "accepted", {expires:365, path:"/", domain:".unity3d.com"});
      $(".cookie-dialog").remove()
    }))
  };
  g = new Kharma.Page("hom");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("home");
    if(g.load()) {
      return!0
    }
    g.setTemplate(Handlebars.templates.homePage({mostPopular:Kharma.l10n.page.mostPopular}));
    g.addFooter();
    g.loadSideBar(null, function(a) {
      i = a;
      a = $(".salesBadget");
      a.length > 0 && (m === i.daily.id ? a.css("background-image", 'url("/images/badges/24hourdeals.png")').addClass("visible") : i.badge !== "" && a.css("background-image", 'url("' + i.badge + '")').addClass("visible"));
      new Kharma.UI.Newsletter($("#sidebar"), "home", function() {
        Kharma.unityEditor.isEditor() || g.addSocial($("#sidebar"))
      })
    });
    b.call(this)
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.Level11Page = function() {
  var g = null, h, a;
  h = function() {
    Kharma.io.get({uri:"/api/sale/level11.json", pageSpecific:!0, onSuccess:function(d) {
      g.load();
      g.setTemplate(Handlebars.templates.level11Page({data:d.json, level11:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? Kharma.l10n.level11.level11member : Kharma.login && Kharma.login.user && Kharma.login.user.roles && !Kharma.login.user.roles.level11member && !Kharma.login.user.is_anonymous ? Kharma.l10n.level11.notLevel11member : Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.is_anonymous ? Kharma.l10n.level11.loggedOut : 
      "", notLevel11:Kharma.login && Kharma.login.user && Kharma.login.user.roles && !Kharma.login.user.roles.level11member || Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous}));
      $(".log-in").off().on("click", function() {
        (new Kharma.LoginDialog).show()
      });
      g.addFooter($("#mainContent"));
      g.loadSideBar(g.id);
      g.setPageTitle(Kharma.l10n.browserMenu.title.level11);
      a(d.json)
    }})
  };
  a = function(a) {
    var c;
    c = $("#resultsSale");
    $("#catresults").empty();
    a && a.level11sale && a.level11sale.results && a.level11sale.results.length > 0 && (c = $(c.find(".item")), c.empty(), new Kharma.UI.PaginationList({callback:g.miniLink, level11:!0, element:c, results:a.level11sale.results}));
    a && a.level11free && a.level11free.results && a.level11free.results.length > 0 && (c = $("#resultsFree .item"), c.empty(), new Kharma.UI.PaginationList({callback:g.miniLink, level11:!0, element:c, results:a.level11free.results}));
    g.setLoaded(!0)
  };
  g = new Kharma.Page("level11");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("level11");
    h()
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.PreviewPage = function(g) {
  var h = null, g = g || {}, a = g.id || "0", d = g.packageVersionId || "0", c, e, b, f, i, m, j, k, n;
  i = function() {
    h.loadSideBar(c, function(a) {
      f = a
    })
  };
  j = function(a) {
    var d = a.content, a = d.min_unity_version;
    c = d.category.id;
    b = d.publisher.id;
    e = d.title;
    h.setTemplate(Handlebars.templates.previewPage({content:d, id:h.id, minimumUnityVersion:a && Kharma.l10n.supplant(Kharma.l10n.page.minimumUnityVersion, {minimumVersion:a.substr(0, a.lastIndexOf(".") + 2)}), saleData:f, sizeText:Kharma.l10n.preview.size, versionText:Kharma.l10n.page.version}));
    a = $("#contentaside .item");
    h.createFull({element:$(".details"), data:d, preview:!0});
    setTimeout(function() {
      h.setExternalLinks("fulldescription")
    }, 100);
    h.setPageTitle(e);
    i();
    d.images && d.images.length > 0 && new Kharma.UI.ScreenShot(d.images);
    a.find(".show-release-notes").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      n(d.publishnotes);
      return!1
    })
  };
  m = function(a) {
    var b = a.content;
    $(".quarter").each(function(a, c) {
      var d = $(c).find(".item");
      h.createDetails(d, b);
      d.attr({"data-template":b.link.type, "data-link":b.link.id})
    });
    new Kharma.UI.PaginationList({callback:h.miniLink, element:$("#popresults"), results:[a.content, a.content, a.content]})
  };
  n = function(a) {
    a && a !== "n/a" && new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:a})
  };
  k = function() {
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      a = a.json;
      j.call(this, a);
      h.setLoaded(!0);
      m(a)
    }})
  };
  h = new Kharma.Page("pre");
  return{clear:h.clear, getRequestUrl:h.getRequestUrl, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("preview", a);
    if(h.load()) {
      return!0
    }
    Kharma.login.loginRequired(function() {
      Kharma.login.user && k();
      $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
        k()
      })
    })
  }, openAdminMode:function() {
    $("#adminstrip").find("#adminMode").removeClass("not-active");
    new Kharma.AdminContent({packageId:a, packageVersionId:d, categoryId:c, isPreview:!0, publisherId:b, packageName:e})
  }, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl, type:h.type}
};
Kharma.Page404 = function() {
  var g = null, h, g = new Kharma.Page("404");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view("404");
    g.load();
    g.loadSideBar();
    h = $(Handlebars.templates.page404({message:Kharma.l10n.page.notFound.message, notFound:Kharma.l10n.page.notFound.title}));
    g.setTemplate(h);
    Kharma.io.get({uri:"/api/home/random.json", pageSpecific:!0, onSuccess:function(a) {
      var d = h.find(".list");
      d.empty();
      new Kharma.UI.PaginationList({callback:g.miniLink, element:d, results:a.json.results})
    }})
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.PublisherPage = function(g) {
  var h = null, g = g || {}, a = g.id || "0", d, c, e, b, f, i;
  e = function() {
    Kharma.io.get({uri:"/api/publisher/overview/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      f.call(this, a.json);
      h.addOpenGraph(a.json.overview, Handlebars.templates.openGraphPublisher)
    }})
  };
  f = function(b) {
    var b = b.overview, e;
    e = $("#contentoverview h1");
    var f = $("#contentaside .item"), g = $("<p class='details linkbar'></p>"), i = new Kharma.UI.SharingBar({type:"publisher", title:b.name}), o = !0, p = $('<a class="report-violation" title="' + Kharma.l10n.report.violation + '"></a>'), r;
    if(d = $("#contentoverview .full .item")) {
      h.clearElement(d), h.setPageTitle(b.name), e.html(b.name), d.empty(), b.keyimage.big && h.setBackground({element:d, backgroundUrl:b.keyimage.big, smallBackgroundUrl:b.keyimage.small}), r = $('<div class="overview-text-overlay"></div>'), d.append(r), e = $("<p class='details'></p>"), b.rating && b.rating.average !== -1 && (e.append("<span>" + Kharma.l10n.rating.rating + "</span>"), e.append((new Kharma.UI.Rating({count:b.rating.count, value:b.rating.average, classes:"inline"})).render()[0]), 
      e.append("<br>")), g.append(i.getSharingBar()), r.append(e), r.append(g), r.append("<br>"), c = $('<p class="fulldescription vscroll">' + b.description + "</p>"), r.append(c), h.setExternalLinks("fulldescription"), $("#contentoverview").prepend(p), p.on("click", function() {
        new Kharma.ReportDialog({title:Kharma.l10n.report.violationTitle, message:Kharma.l10n.report.violationPublisherMessage, type:"publisher", publisherId:a})
      }), f.empty(), b.url && b.url !== "" && (f.append('<span class="left"><a href="' + b.url + '" target="_blank">' + Kharma.l10n.page.publisherWebsite + "</a></span>"), o = !1), b.support_url && b.support_url !== "" && (f.append('<span class="left"><a href="' + b.support_url + '" target="_blank">' + Kharma.l10n.page.supportWebsite + "</a></span>"), o = !1), b.support_email && b.support_email !== "" && (f.append('<span class="left"><a href="mailto:' + b.support_email + '" target="_blank">' + Kharma.l10n.page.supportEmail + 
      "</a></span>"), o = !1), o || $("#contentaside").css("display", "block")
    }
  };
  b = function() {
    Kharma.io.get({uri:"/api/publisher/results/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      i.call(this, a.json)
    }})
  };
  i = function(a) {
    var b = $("#catresults");
    h.clearElement(b);
    new Kharma.UI.PaginationList({callback:h.miniLink, element:b, results:a.results, withSorting:!0, ga:{action:"moreFromPublisher"}});
    h.setLoaded(!0)
  };
  h = new Kharma.Page("pub", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("publisher", a);
    if(h.load()) {
      return!0
    }
    h.setTemplate(Handlebars.templates.publisherPage({loading:Kharma.l10n.page.loadingPage, publisher:Kharma.l10n.page.publisher}));
    h.addFooter($("#mainContent"));
    h.loadSideBar(null, function() {
      h.addTopSaleList()
    });
    e.call(this);
    b.call(this)
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.SalePage = function(g) {
  var h = null, a = g || {}, d, c;
  d = function() {
    Kharma.io.get({uri:"/api/sale/results.json", pageSpecific:!0, onSuccess:function(a) {
      c.call(this, a.json)
    }})
  };
  c = function(a) {
    var b = "", c = "", d = parseInt(a.remaining, 10), g = parseInt(a.days_left, 10);
    a.banner !== "" ? c = a.banner : (b = a.title && a.title !== "" ? a.title : Kharma.l10n.sale.title, c = "/images/sale.jpg");
    b && $("#saleHeadline").text(b);
    h.setPageTitle(a.title);
    c && $(".banner").css("background-image", "url(" + c + ")");
    a.countdown && d > 0 && Kharma.saleHelper.startCountdown(d, $("#countdown"), Kharma.l10n.sale.remainingTime);
    $("#catresults").empty();
    a.results && a.results.length > 0 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:$("#catresults"), results:a.results, withSorting:!0}) : ($("#catresults").parent().hide(), $("#noSale").show(), new Kharma.UI.Newsletter($("#noSaleBody"), "home", function() {
      Kharma.unityEditor.isEditor() || h.addSocial($("#noSaleBody"))
    }));
    g > 0 && (a = g > 1 ? g + " " + Kharma.l10n.sale.daysLeft : Kharma.l10n.sale.lastDay, $("#contentoverview .banner").append('<div class="daysLeft">' + a + "</div>"));
    h.setLoaded(!0)
  };
  (function() {
    h = new Kharma.Page("sal");
    a.id === "daily" && Kharma.io.get({uri:"/api/sale/results/10.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      return Kharma.history.newPage(a.json.daily ? new Kharma.ContentPage({id:a.json.daily.id}) : new Kharma.HomePage)
    }})
  })();
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("sale");
    h.load();
    h.setTemplate(Handlebars.templates.salePage());
    h.addFooter($("#mainContent"));
    h.loadSideBar(h.id);
    d.call(this)
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.SearchPage = function(g) {
  var h = null, a, g = g || {}, d = g.search || "", c, e;
  e = function() {
    if(!Kharma.search) {
      Kharma.search = new Kharma.Search
    }
    Kharma.search.search(d, function(b) {
      c(b.results);
      a = !0;
      $("#mainContent").trigger(Kharma.utils.events.onResultsLoaded)
    })
  };
  c = function(a) {
    var c = $("#catresults");
    h.clearElement(c);
    a && a.length === 1 ? (h.setLoaded(!0), $.address.value("/content/" + a[0].link.id), Kharma.ga.event("inbound", {action:"searchResult", label:d, value:1, target:{packageName:a[0].title || "n/a", publisherName:a[0].publisher.label || "n/a"}})) : a.length > 1 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:c, results:a, withSorting:!1, ga:{action:"searchResult", label:d, value:a.length}}) : c.append('<p class="noresults">' + Kharma.l10n.search.noResults + "</p>")
  };
  h = new Kharma.Page("sea", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("search", d);
    if(h.load()) {
      return!0
    }
    h.setTemplate(Handlebars.templates.search({title:Kharma.l10n.search.title}));
    h.addFooter($("#content"));
    h.loadSideBar(null, function() {
      h.addTopSaleList("sea")
    });
    h.setPageTitle(d.trim());
    a = !1;
    $("#mainContent").on(Kharma.utils.events.onResultsLoaded, function() {
      a && h.setLoaded(!0)
    });
    e.call(this)
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.UserPage = function(g) {
  var h = null, g = g || {}, a = g.id || "0", d, c, e, b, f, i, m, j, k;
  d = function(a) {
    var b = a.target.getAttribute("data-id"), d = a.target.getAttribute("data-package-id");
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.review.deleteReview, message:Kharma.l10n.review.deleteReviewMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(a) {
      a && c(d, b)
    }})
  };
  c = function(a, b) {
    Kharma.login.user && Kharma.io.del({uri:"api/content/comments/" + a + "/" + b + ".json", pageSpecific:!0, onSuccess:function() {
      i()
    }})
  };
  e = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReviewDialog({callback:i, commentID:a.target.getAttribute("data-id"), packageID:a.target.getAttribute("data-package-id")})
  };
  b = function() {
    f();
    h.setLoaded(!0)
  };
  f = function() {
    Kharma.io.get({uri:"/api/user/overview/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      $("#pageload").hide();
      m(a.json)
    }})
  };
  m = function(b) {
    var c = b.name, d = c && c.indexOf(" ") !== -1 ? c.substring(0, c.indexOf(" ")) : c;
    h.setPageTitle(c);
    Kharma.io.get({uri:"/api/user/toprated/" + a + ".json", pageSpecific:!0, onSuccess:function(e) {
      h.setTemplate(Handlebars.templates.userPage({data:b, gravatar:Kharma.l10n.user.gravatar, highestRatedAssets:Kharma.l10n.user.highestRatedAssets, name:d, profile:Kharma.l10n.user.profile, reportAbuse:Kharma.l10n.report.title, reviews:Kharma.l10n.review.reviews, username:c, wishListName:Kharma.l10n.supplant(Kharma.l10n.wishList.title, {user:d}), noRatedPackages:Kharma.l10n.user.noRatedPackages, topRated:e.json.toprated}));
      h.addFooter($("#mainContent"));
      b.keyimage && b.keyimage.small && $(".bioimage").attr("src", b.keyimage.small);
      $("#userBox .reportAbuse").on("click", function() {
        new Kharma.ReportDialog({title:Kharma.l10n.report.title, message:Kharma.l10n.report.messageBiography, type:"user", userId:a})
      });
      j();
      i()
    }})
  };
  i = function() {
    Kharma.io.get({uri:"/api/user/comments/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      k(a.json)
    }})
  };
  k = function(a) {
    var a = {admin:Kharma.login.isAdmin, comments:a.comments, data:a, deleteButton:Kharma.l10n.button.deleteButton, editButton:Kharma.l10n.button.edit, noReviews:Kharma.l10n.user.noPostedReviews, reportAbuse:Kharma.l10n.report.title}, b = $("#comments .body").empty();
    b.append(Handlebars.templates.userPageComments(a));
    b.find(".edit-review").on("click", e);
    b.find(".delete-review").on("click", d);
    b.find(".report-abuse").on("click", function(a) {
      new Kharma.ReportDialog({packageData:{id:$(a.target).attr("data-package-id")}, title:Kharma.l10n.report.title, message:Kharma.l10n.report.message, type:"comment", commentId:$(a.target).attr("data-id")})
    })
  };
  j = function() {
    var b = $("#wishList .body"), c;
    $("#wishList .loadarea").hide();
    if(!Kharma.wishList) {
      Kharma.wishList = new Kharma.WishList
    }
    Kharma.wishList.getWishList(a, function(d, e) {
      b.empty();
      d.length > 0 ? (c = new Kharma.UI.ShowMoreList({callback:h.miniLink, results:d, element:b, withSorting:!0}), e > 9 && c.addShowAllLink("/wishlist/" + a)) : b.append('<p class="noresults">' + Kharma.l10n.wishList.empty + "</p>")
    }, 9)
  };
  h = new Kharma.Page("use", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("profile", a);
    h.load();
    h.loadSideBar(null, function() {
      h.addTopSaleList("use")
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function() {
      j()
    });
    b()
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.WishListPage = function(g) {
  var h = null, g = g || {}, a = g.id, d, c, e;
  e = function() {
    if(!Kharma.wishList) {
      Kharma.wishList = new Kharma.WishList
    }
    Kharma.wishList.getWishList(a, function(a) {
      c(a);
      d = !0;
      $("#mainContent").trigger(Kharma.utils.events.onResultsLoaded)
    })
  };
  c = function(b) {
    var c = $("#catresults");
    c.empty();
    b.length > 0 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:c, results:b, withSorting:!0}) : c.append('<p class="noresults">' + Kharma.l10n.wishList.empty + "</p>");
    b = c.find(".wish-list-buy");
    c = c.find(".wish-list");
    Kharma.login.user && !Kharma.login.user.is_anonymous && Kharma.login.user.id === a ? (b.show(), c.show()) : (Kharma.login.user && !Kharma.login.user.is_anonymous ? b.show() : b.hide(), c.hide())
  };
  h = new Kharma.Page("wis", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view("wishlist", a);
    if(h.load()) {
      return!0
    }
    h.setTemplate(Handlebars.templates.wishList());
    h.addFooter($("#mainContent"));
    h.loadSideBar(null, function() {
      h.addTopSaleList("wis")
    });
    d = !1;
    $("#mainContent").on(Kharma.utils.events.onResultsLoaded, function() {
      d && h.setLoaded(!0)
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function() {
      e()
    });
    Kharma.io.get({uri:"/api/user/overview/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      a = a.json.name;
      a = a.indexOf(" ") !== -1 ? a.substring(0, a.indexOf(" ")) : a;
      a = Kharma.l10n.supplant(Kharma.l10n.wishList.title, {user:a});
      $("#cattitle").text(a);
      h.setPageTitle(a)
    }});
    e()
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.AccountPage = function() {
  var g = null, h, a, d, c, e, b, f, i, m, j, k, n, l, o, p, r, s;
  h = function(g) {
    $(".body .bio").on("click", d);
    $(".billing-address.body").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      $(this).hasClass("loading") || Kharma.addressHelper.editAddress(function(a) {
        a && f()
      })
    });
    $(".user-name").on("click", e);
    $(".change-password").on("click", c);
    $(".language button").on("click", a);
    $(".redeem-voucher button").on("click", o);
    if(g.express_checkout) {
      $(".express-purchase button").on("click", b)
    }else {
      $(".express-purchase button").hide()
    }
  };
  a = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.LanguageDialog
  };
  d = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.OverviewDialog({userID:Kharma.login.user.id, callback:p})
  };
  c = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.PasswordDialog({callback:r, accountId:Kharma.login.user.id})
  };
  e = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.UsernameDialog({userID:Kharma.login.user.id, callback:s})
  };
  b = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.purchase.expressCheckout.disable, message:Kharma.l10n.purchase.expressCheckout.disableMessage, withCancel:!0, options:{size:"small", accept:Kharma.l10n.button.yes}, callback:function(a) {
      a && Kharma.io.get({uri:"/api/purchase/deactivate-express/" + Kharma.login.user.id + ".json", pageSpecific:!0, onSuccess:function() {
        $(".express-purchase-info").html(Kharma.l10n.purchase.expressCheckout.disabled);
        $(".express-purchase").addClass("no-hover");
        $(".express-purchase.body").off("click")
      }})
    }})
  };
  f = function() {
    var a;
    if(Kharma.login.user && Kharma.login.user.id) {
      a = Kharma.login.user.id
    }
    Kharma.ga.view("account", a, "/");
    a && a !== "0" ? (g.load(), g.setPageTitle("User Account"), $("#pageload").hide(), i(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account" && i()
    })) : Kharma.history.goBackOrHome()
  };
  i = function() {
    Kharma.io.get({uri:"/api/user/overview/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(a) {
      n(a.json);
      g.setLoaded(!0)
    }})
  };
  m = function() {
    Kharma.io.get({uri:"/api/user/address/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(a) {
      j(a.json)
    }})
  };
  n = function(a) {
    var b = Kharma.login.user.language_code || "en-US", c = a.keyimage;
    g.setTemplate(Handlebars.templates.accountPage({account:Kharma.l10n.user.account, balance:Kharma.l10n.user.balance, billingAddress:Kharma.l10n.user.billingAddress, changeLanguage:Kharma.l10n.language.changeLanguage, changePassword:Kharma.l10n.user.changePassword, creditCard:a.express_checkout && a.express_checkout.creditcard ? "<p>" + Kharma.l10n.purchase.creditCard + ":</p>" : "", creditCardNumber:a.express_checkout && a.express_checkout.creditcard ? a.express_checkout.creditcard.card_number : 
    Kharma.l10n.purchase.expressCheckout.notActivated, credits:Kharma.l10n.purchase.credits, creditsAmount:a.balance && a.balance.amount_text, creditsBalance:a.balance && parseInt(a.balance.amount, 10) > 0, data:a, disable:Kharma.l10n.purchase.expressCheckout.disable, email:a.email, expressPurchase:Kharma.l10n.purchase.expressCheckout.title, gravatar:Kharma.l10n.user.gravatar, id:Kharma.login.user && Kharma.login.user.id, language:Kharma.l10n.language.language, newsletter:Kharma.l10n.newsletter.newsletter, 
    redeemVoucher:Kharma.l10n.redeemVoucher.redeemVoucher, redeemVoucherPlaceholder:Kharma.l10n.redeemVoucher.voucherCode, submit:Kharma.l10n.button.submit, userName:a.name}));
    c !== void 0 && c.small !== void 0 && $(".bioimage").attr("src", c.small);
    $(".language p").text(Kharma.l10n.language.languages[b]);
    h(a);
    new Kharma.UI.Newsletter($(".newsletter"), "account");
    m()
  };
  j = function(a) {
    var a = a.address, b = $(".body.billing-address");
    a ? $(".billing-address-info").html(Handlebars.templates.address({address:a, phoneLabel:Kharma.l10n.user.phone, vatLabel:Kharma.l10n.cart.vat})) : b.find(".loadarea").remove();
    b.removeClass("loading")
  };
  k = function() {
    Kharma.ga.view("account", Kharma.login.user.id, "/voucher/redeem/failed", Kharma.l10n.redeemVoucher.error);
    new Kharma.TextMessage({title:Kharma.l10n.redeemVoucher.redeemVoucher, message:Kharma.l10n.redeemVoucher.error, options:{size:"small"}})
  };
  l = function(a, b, c) {
    Kharma.ga.view("account", Kharma.login.user.id, "/voucher/redeem/success");
    new Kharma.TextMessage({title:Kharma.l10n.redeemVoucher.redeemVoucher, message:a, withCancel:c, options:{size:"small"}, callback:b})
  };
  o = function(a, b) {
    var c = b || {code:$(".redeem-voucher input").val()};
    Kharma.io.get({uri:"/api/voucher/redeem.json", parameters:c, onSuccess:function(a) {
      a && a.json ? a.json.status === "confirm" ? l(a.json.message, function(a) {
        if(a) {
          c.confirmed_exchange_rate = 1, o(null, c)
        }
      }, !0) : l(a.json.message, function() {
        a.json.package_id && $.address.value("/content/" + a.json.package_id)
      }) : k()
    }, onFailure:function() {
      k()
    }})
  };
  p = function(a) {
    Kharma.io.post({uri:"/api/user/overview/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{bio:a.bio}, onSuccess:function() {
      Kharma.ga.view("account", Kharma.login.user.id, "/profile/bio/edit/success");
      f()
    }})
  };
  r = function() {
    new Kharma.TimedMessage({title:Kharma.l10n.user.passwordChanged, message:Kharma.l10n.user.passwordChangedMessage, timeout:4})
  };
  s = function(a) {
    Kharma.io.post({uri:"/api/user/overview/" + a.user + ".json", parameters:{name:a.username}, pageSpecific:!0, onSuccess:function() {
      Kharma.ga.view("account", Kharma.login.user.id, "/profile/username/edit/success");
      f.call(this)
    }})
  };
  g = new Kharma.Page("acc");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:f, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.DownloadsPage = function(g) {
  var h = null, a = [], d = $(".download-manager"), c = g || {}, e = c.type, b = [], f = [], i, m = 0, j, k, n, l, o, p, r, s, q, v, t, y, x, A, z, C, u;
  j = function() {
    var b = d.find(".package-search"), c = b.find("input");
    d.find(".group-by select").off().on("change", function() {
      i = $(this).val();
      $(".collapse-all").text(Kharma.l10n.button.collapseAll);
      Kharma.localStorage.setItem("kharma.download.groupby", i, function(a) {
        if(a) {
          throw a.message;
        }
      });
      z(a, i)
    });
    if(!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated()) {
      c.off().on("keyup", function(a) {
        switch(a.keyCode) {
          case 13:
            a.preventDefault()
        }
        y($(this).val())
      })
    }else {
      b.off().on("submit", function(a) {
        a.preventDefault();
        a.stopPropagation();
        y(c.val())
      })
    }
    d.off().on("click", function(a) {
      a.stopPropagation();
      var c = b.find("input"), a = $(a.target);
      a.hasClass("collapse-all") ? n(a) : a.hasClass("tab") ? C(a) : a.hasClass("clear") ? (c.val(""), y("")) : a.hasClass("update-all") && u()
    });
    d.find(".packages").off().on("click", function(a) {
      a.stopPropagation();
      a = $(a.target);
      a.hasClass("collapse") ? k(a) : a.hasClass("open-in-unity") ? Kharma.utils.windowWrapper.location.setHref("com.unity3d.kharma:content/" + a.attr("data-id")) : a.hasClass("import") ? Kharma.download.importPackage(a.attr("data-local-path"), a.attr("data-complete-project")) : a.hasClass("release-notes") ? A(a.attr("data-id")) : a.hasClass("review") ? v(a.attr("data-id"), a.attr("data-publisher")) : a.hasClass("download") && (Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous ? 
      (new Kharma.LoginDialog).show() : (a.text(Kharma.l10n.button.wait), l(a.attr("data-type"), a.attr("data-id"))))
    })
  };
  k = function(a) {
    var b = $(a.parent().nextAll(".group:first")).prevUntil(".group");
    b.length === 0 && (b = $(a.parent().nextAll()));
    a.text() === "-" ? (b.hide(), a.text("+")) : (b.show(), a.text("-"), $(".collapse-all").text(Kharma.l10n.button.collapseAll))
  };
  n = function(a) {
    var b = d.find(".collapse"), c = d.find(".package-details");
    c.is(":visible") ? (c.hide(), a.text(Kharma.l10n.button.expandAll), b.text("+")) : (c.show(), a.text(Kharma.l10n.button.collapseAll), b.text("-"))
  };
  l = function(a, b) {
    c.action === "download" && $.address.value("/account/downloads/show/Mixamo%20Animations/" + c.id);
    Kharma.io.get({uri:"/api/" + a + "/download/" + b + ".json", onSuccess:function(c) {
      Kharma.unityEditor.download(c.json.download, function(c) {
        if(c) {
          throw c.message;
        }
        $(".package-details." + a + "-" + b).removeClass("downloading")
      })
    }})
  };
  o = function(a, c) {
    var d, e, f, g, i = b.length;
    for(d = 0;d < i;d++) {
      g = b[d].items;
      for(e = 0;e < g.length;e++) {
        if(f = g[e], f.id === c && f.type === a) {
          return d
        }
      }
    }
  };
  p = function() {
    var b = 0, c;
    if(a) {
      for(c = a.length;b < c;b++) {
        if(a[b].can_update) {
          return!0
        }
      }
    }
  };
  r = function(c, e, f, g) {
    var i, f = parseInt(f / g * 100, 10), h = $($.find("button#" + c.type + "-" + c.id)), m, g = h.parent().find(".progress-bar");
    e === "connecting" ? h.text(f + "%") : e === "downloading" ? f && (h.text(f + "%"), g.css("width", f + "%")) : e.indexOf("Error") !== -1 ? (h.text(Kharma.l10n.error.error), g.addClass("error"), h.attr("title", e), new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.pkg.downloadErrorMessage, {name:h.attr("data-name")}))) : e === "ok" && (i = $(h.parent().parent().find(".import")), i.removeAttr("disabled"), e = $(h.parent().parent().parent().find(".review")), e.removeClass("not-visible"), 
    Kharma.download.getLocalPackages(function(e) {
      b = e.json.results;
      m = o(c.type, c.id);
      a = b[m].items;
      Kharma.download.findPackageById(c.type, c.id, a, function(a) {
        new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.pkg.downloadSuccessfulMessage, {name:a.name, version:a.local_version_name || ""}));
        q(a);
        $(h.parent().parent().parent().find(".version")).text(a.local_version_name);
        p() || $(d.find(".update-all")).attr("disabled", "disabled");
        i.attr("data-local-path", a.local_path)
      })
    }));
    f && g.attr("data-progress", f)
  };
  s = function(b, c) {
    var e = d.find(".packages");
    e.empty();
    e.append($(Handlebars.templates.downloadPackage({downloadPkg:Kharma.l10n.button.download, importPkg:Kharma.l10n.pkg.importPkg, inBrowser:!Kharma.unityEditor.isEditor(), loggedIn:Kharma.login.user && !Kharma.login.user.is_anonymous, noPackages:Kharma.l10n.pkg.noPackages, openInUnity:Kharma.l10n.share.openInUnity, noResults:Kharma.l10n.pkg.noSearchPackagesResults, packages:b, releaseNotes:Kharma.l10n.page.releaseNotes, review:Kharma.l10n.pkg.review, sortBy:c, updatePkg:Kharma.l10n.pkg.update})));
    $.each(e.find(".package-rating"), function(d, e) {
      var g = b[d] && b[d].id;
      f[g] = new Kharma.UI.Rating({count:1, packageId:g, submitRatingCallback:function(b) {
        a[d].user_rating = b.toString();
        z(a, c)
      }, value:a[d] && a[d].user_rating});
      $(e).append(f[g].render())
    });
    h.setLoaded(!0)
  };
  q = function() {
    var b = 0, c;
    if(a) {
      for(c = a.length;b < c;b++) {
      }
    }
  };
  v = function(b, c) {
    new Kharma.ReviewDialog({packageID:b, publisherID:c, rating:f[b].getValue(), callback:function(c) {
      Kharma.download.findPackageById("content", b, a, function(a) {
        a.last_downloaded_at = !0;
        f[b].setValue(c)
      })
    }})
  };
  t = function(a, d) {
    var e = c.type;
    b = a.json.results || [];
    m = o(e, d) || 0;
    x(a, function() {
      var a = $(".service-instance-" + d), a = a && a.offset() && a.offset().top;
      $("#contentarea").scrollTop((a > screen.height ? a : a / 2) - 50);
      $(".package-details.service-instance-" + d).addClass("downloading")
    })
  };
  y = function(b) {
    s(a.filter(function(a) {
      return a.name.toLowerCase().indexOf(b.toLowerCase()) !== -1
    }), i)
  };
  x = function(e, f) {
    var g, h;
    b = e.json.results || [];
    b.length > 0 ? ($.each(b, function(a, b) {
      b.items && b.items.length > 0 && d.find(".tabs").append("<li id='" + b.name.replace(/[^a-zA-Z0-9_-]/g, "") + "' class='tab' data-id='" + a + "'>" + b.name + "</li>")
    }), a = b[m] && b[m].items || [], Kharma.unityEditor.isEditor() && !p() && $(d.find(".update-all")).attr("disabled", "disabled"), j(), c.action === "group" || c.action === "show" ? (h = decodeURIComponent(c.type).replace(/[^a-zA-Z0-9_-]/g, ""), g = "#" + h, $(d.find(g)).click()) : Kharma.localStorage.getItem("kharma.download.group", function(a, b) {
      if(a) {
        throw a.message;
      }else {
        g = b ? "#" + b : "#Packages", $(d.find(g)).click()
      }
    })) : (a = [], d.find(".tabs").append("<li>" + Kharma.l10n.pkg.packages + "</li>"));
    Kharma.localStorage.getItem("kharma.download.groupby", function(b, c) {
      if(b) {
        throw b.message;
      }else {
        (i = c) && d.find(".group-by select").val(i), z(a, a ? i : "noPackages"), f && f()
      }
    })
  };
  z = function(a, b) {
    switch(b) {
      case "category":
      ;
      case "category-full":
        a.sort(function(a, b) {
          return a.category.name.localeCompare(b.category.name)
        });
        break;
      case "publisher":
        a.sort(function(a, b) {
          return a.publisher.name.localeCompare(b.publisher.name)
        });
        break;
      case "publish-date-id":
        a.sort(function(a, b) {
          var c = a.published_at || (new Date(a.published_at)).toString(), d = b.published_at || (new Date(b.published_at)).toString();
          if(c === d) {
            return b.name.localeCompare(a.name)
          }
          return c.localeCompare(d)
        });
        a.reverse();
        break;
      case "packagestatus":
        a.sort(function(a, b) {
          var c = a.can_update ? Kharma.l10n.pkg.update : a.local_path ? Kharma.l10n.pkg.importPkg : a.can_download ? Kharma.l10n.button.download : "", d = b.can_update ? Kharma.l10n.pkg.update : b.local_path ? Kharma.l10n.pkg.importPkg : b.can_download ? Kharma.l10n.button.download : "";
          if(c === d) {
            return b.name.localeCompare(a.name)
          }
          return c.localeCompare(d)
        });
        a.reverse();
        break;
      case "purchase-date-id":
        a.sort(function(a, b) {
          var c = a.purchased_at || a.last_downloaded_at || "", d = b.purchased_at || b.last_downloaded_at || "";
          if(c === d) {
            return a.name.localeCompare(b.name)
          }
          return c.localeCompare(d)
        });
        a.reverse();
        break;
      case "rating":
        a.sort(function(a, b) {
          var c = a.user_rating.toString(), d = b.user_rating.toString();
          if(c === d) {
            return b.name.localeCompare(a.name)
          }
          return c.localeCompare(d)
        });
        a.reverse();
        break;
      default:
        a.sort(function(a, b) {
          return a.name.localeCompare(b.name)
        })
    }
    s(a, b)
  };
  A = function(a) {
    Kharma.io.get({uri:"/api/content/overview/" + a + ".json", onSuccess:function(a) {
      (a = a.json.content.publishnotes) && new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:a})
    }})
  };
  C = function(c) {
    Kharma.utils.windowWrapper.history.hasHistory() && Kharma.utils.windowWrapper.history.replaceState({}, document.title, "#!/account/downloads/group/" + encodeURIComponent(c.text()));
    $(d.find(".tabs li")).removeClass("selected");
    c.addClass("selected");
    $(".collapse-all").text(Kharma.l10n.button.collapseAll);
    a = b[parseInt(c.attr("data-id"), 10)].items;
    z(a, i);
    Kharma.localStorage.setItem("kharma.download.group", c.attr("id"), function(a) {
      if(a) {
        throw a.message;
      }
    })
  };
  u = function() {
    var b = 0, c, e;
    for(c = a.length;b < c;b++) {
      e = a[b], e.can_update && l(e.type, e.id)
    }
    d.find(".update-all").attr("disabled", "disabled")
  };
  h = new Kharma.Page("dow");
  return{clear:h.clear, getRequestUrl:h.getRequestUrl, isLoaded:h.isLoaded, load:function() {
    h.load();
    d = $(Handlebars.templates.downloadsPage({category:Kharma.l10n.pkg.category, close:Kharma.l10n.button.close, collapseAll:Kharma.l10n.button.collapseAll, downloads:Kharma.l10n.pkg.downloads, expandAll:Kharma.l10n.button.expandAll, groupBy:Kharma.l10n.pkg.groupBy, inBrowser:!Kharma.unityEditor.isEditor(), loading:Kharma.l10n.page.loadingPage, myRating:Kharma.l10n.pkg.myRating, publisher:Kharma.l10n.pkg.publisher, publishDate:Kharma.l10n.pkg.publishDate, purchaseDate:Kharma.l10n.pkg.purchaseDate, 
    search:Kharma.l10n.pkg.search, status:Kharma.l10n.pkg.status, subcategory:Kharma.l10n.pkg.subcategory, title:Kharma.l10n.pkg.title, updateAll:Kharma.l10n.button.updateAll}));
    h.setTemplate(d);
    $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(a, b, c, d, e) {
      r(b, c, d, e)
    });
    c.action === "download" && l(e, c.id);
    Kharma.download.getLocalPackages(function(a) {
      c.action === "show" ? t(a, c.id) : x(a)
    })
  }, onResize:h.onResize, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl}
};
Kharma.TransactionsPage = function() {
  var g = null, h, a;
  h = function() {
    Kharma.io.get({uri:"/api/user/transactions/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(d) {
      a(d.json.transactions)
    }})
  };
  a = function(a) {
    g.setTemplate(Handlebars.templates.transactions({account:Kharma.l10n.user.account, action:Kharma.l10n.user.credits.action, amount:Kharma.l10n.user.credits.amount, balance:Kharma.l10n.user.credits.balance, credits:Kharma.l10n.purchase.credits, date:Kharma.l10n.user.credits.date, description:Kharma.l10n.user.credits.description, enableTransactions:!0, header:Kharma.l10n.user.creditCardPayPalTransactions, id:Kharma.login.user && Kharma.login.user.id, noTransactionsLabel:Kharma.l10n.user.credits.noTransactions, 
    transactionsLabel:Kharma.l10n.user.transactions, transactions:a}));
    $(".loadarea").remove()
  };
  g = new Kharma.Page("tra");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var a;
    if(Kharma.login.user && Kharma.login.user.id) {
      a = Kharma.login.user.id
    }
    Kharma.ga.view("account", a, "/transactions");
    g.load();
    g.setPageTitle("User Account");
    a && a !== "0" ? ($("#pageload").hide(), h(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/transactions" && h()
    })) : Kharma.history.goBackOrHome()
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.TransactionsCreditsPage = function() {
  var g = null, h, a;
  h = function() {
    Kharma.io.get({uri:"/api/user/account-transactions/" + Kharma.login.user.id + ".json", pageSpecific:!0, onSuccess:function(d) {
      a(d.json.transactions)
    }})
  };
  a = function(a) {
    g.setTemplate(Handlebars.templates.transactions({account:Kharma.l10n.user.account, action:Kharma.l10n.user.credits.action, amount:Kharma.l10n.user.credits.amount, balance:Kharma.l10n.user.credits.balance, credits:Kharma.l10n.purchase.credits, date:Kharma.l10n.user.credits.date, description:Kharma.l10n.user.credits.description, enableCredits:!0, header:Kharma.l10n.user.credits.transactions, noTransactionsLabel:Kharma.l10n.user.credits.noTransactions, transactionsCredits:a, transactionsLabel:Kharma.l10n.user.transactions}));
    $(".loadarea").remove()
  };
  g = new Kharma.Page("tra");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var a;
    if(Kharma.login.user && Kharma.login.user.id) {
      a = Kharma.login.user.id
    }
    Kharma.ga.view("account", a, "/transactions/credits");
    a && a !== "0" ? (g.load(), g.setPageTitle("User Account"), $("#pageload").hide(), h(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/transactions/credits" && h()
    })) : Kharma.history.goBackOrHome()
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.LicensesPage = function() {
  var g = null, h, a;
  h = function() {
    Kharma.io.get({uri:"/api/user/licenses/" + Kharma.login.user.id + ".json", pageSpecific:!0, onSuccess:function(d) {
      a(d.json)
    }})
  };
  a = function(a) {
    g.setTemplate(Handlebars.templates.licensesPage({account:Kharma.l10n.user.account, buyMore:Kharma.l10n.user.license.buyMore, credits:Kharma.l10n.purchase.credits, id:Kharma.login.user && Kharma.login.user.id, licenses:a.licenses, licensesLabel:Kharma.l10n.user.license.licenses, noLicensesLabel:Kharma.l10n.user.noLicenses, name:Kharma.l10n.user.license.name, quantity:Kharma.l10n.user.license.quantity}));
    $($("#licenses .buyMore")).off().on("click", function(a) {
      Kharma.cart.addItem($(a.target).attr("data"), !0)
    })
  };
  g = new Kharma.Page("lic");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var a;
    if(Kharma.login.user && Kharma.login.user.id) {
      a = Kharma.login.user.id
    }
    Kharma.ga.view("account", a, "/licenses");
    g.load();
    g.setPageTitle("User Account");
    a && a !== "0" ? ($("#pageload").hide(), h(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/licenses" && h()
    })) : Kharma.history.goBackOrHome()
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.FallbackStorage = function() {
  var g = [];
  return{getItem:function(h, a) {
    a(null, g[h])
  }, hasItem:function(h, a) {
    a(null, h in g)
  }, removeItem:function(h, a) {
    delete g[h];
    a()
  }, setItem:function(h, a, d) {
    g[h] = a;
    d()
  }}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.HTML5LocalStorage = function() {
  return{getItem:function(g, h) {
    h(null, localStorage.getItem(g))
  }, hasItem:function(g, h) {
    h(null, g in localStorage)
  }, removeItem:function(g, h) {
    h(null, localStorage.removeItem(g))
  }, setItem:function(g, h, a) {
    try {
      a(null, localStorage.setItem(g, h))
    }catch(d) {
      console.log("LocalStorage error: " + d)
    }
  }}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.HTML5SessionStorage = function() {
  return{getItem:function(g, h) {
    h(null, sessionStorage.getItem(g))
  }, hasItem:function(g, h) {
    h(null, g in sessionStorage)
  }, removeItem:function(g, h) {
    h(null, sessionStorage.removeItem(g))
  }, setItem:function(g, h, a) {
    try {
      a(null, sessionStorage.setItem(g, h))
    }catch(d) {
      console.log("SessionStorage error: " + d)
    }
  }}
};
Kharma.Storage.UnityEditorLocalStorage = function() {
  var g = window.context.GetString && window.context.HasKey && window.context.DeleteKey && window.context.SetString;
  return g ? {getItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.GetString(g, a) : a(null, window.context.GetString(g))
  }, hasItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.HasKey(g, a) : a(null, window.context.HasKey(g))
  }, removeItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.DeleteKey(g, a) : a(null, window.context.DeleteKey(g))
  }, setItem:function(g, a, d) {
    Kharma.unityEditor.isChromium() ? window.context.SetString(g, a, d) : d(null, window.context.SetString(g, a))
  }} : null
};
Kharma.Storage.UnityEditorSessionStorage = function() {
  var g = window.context.SessionGetString && window.context.SessionHasString && window.context.SessionRemoveString && window.context.SessionSetString;
  return g ? {getItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionGetString(g, a) : a(null, window.context.SessionGetString(g))
  }, hasItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionHasString(g, a) : a(null, window.context.SessionHasString(g))
  }, removeItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionRemoveString(g, a) : a(null, window.context.SessionRemoveString(g))
  }, setItem:function(g, a, d) {
    if(a === void 0 || a === null) {
      a = ""
    }
    Kharma.unityEditor.isChromium() ? window.context.SessionSetString(g, a, d) : d(null, window.context.SessionSetString(g, a))
  }} : null
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Accordion = function(g) {
  (function(g) {
    g.find(".head:first").addClass("active-head");
    g.find(".head:last").addClass("last-head");
    g.find(".body").each(function(a, d) {
      $(d).addClass("body-" + a)
    });
    g.find(".head").each(function(a, d) {
      $(d).on("click autoclick", function() {
        var a = g.find(".body:visible"), d = $(this), b = d.next();
        b.is(":hidden") && (g.find(".head").removeClass("active-head"), d.addClass("active-head"), $().add(a).add(b).slideToggle())
      })
    })
  })(g)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.AssetHierarchy = function(g, h) {
  var a, d = 1, c = h.flags, e, b, f, i, m, j, k, n;
  e = function() {
    a.scroll(function() {
      a[0].scrollHeight - a.scrollTop() === a.outerHeight() && (b(), d++)
    });
    b();
    d++
  };
  b = function() {
    Kharma.io.get({uri:"/api/content/assets/" + g.id + "/" + h.package_version_id + ".json?rows=35&page=" + d, pageSpecific:!0, onSuccess:function(a) {
      j(a.json);
      i()
    }})
  };
  i = function() {
    $("#expandPackageContents").click(function() {
      var b = $("body").innerHeight() - 120, c = $(this);
      a.height() < 300 ? a.animate({height:b}, 1E3, function() {
        c.text(Kharma.l10n.page.collapse);
        a.css("overflow", "auto")
      }) : a.animate({height:240}, 1E3, function() {
        c.text(Kharma.l10n.page.expand);
        a.css("overflow", "auto")
      })
    })
  };
  j = function(b) {
    b && a && (a.find(".loadarea").hide(), m(b.assets))
  };
  f = function(a) {
    var b = $(a.currentTarget), c = b.attr("data-guid");
    a.stopPropagation();
    c ? c && k(b[0]) : (c = b.parent().attr("data-guid")) && k(b.parent()[0])
  };
  m = function(b) {
    a.append(Handlebars.templates.assetHierarchy({assets:b}));
    $(a.find("div")).on("click", f);
    (b = a.children("div:not(.folder)")[0]) && k(b)
  };
  n = function(a) {
    var b = $("#assetview");
    b && Kharma.io.get({uri:"/api/content/asset-preview/" + g.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      b.css("backgroundImage", "url(" + a.json.result.preview + ")")
    }})
  };
  k = function(b) {
    var c = $(a.find("div")), d = $(b);
    b && c.is(d) !== !1 && (c.removeClass("selected"), d.addClass("selected"), n(d.attr("data-guid")))
  };
  (function(b, c) {
    var d;
    a = $("#assettree");
    c && c.external_download ? (d = $("#packageContents"), $(d.find(".body")).empty().append('<p class="noContent">' + Kharma.l10n.pkg.noContent + "</p>"), $(d.find(".head-buttons")).remove()) : e()
  })(g, c)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.BrowserToolbar = function() {
  var g = null, h, a, d, c = !1, e, b;
  h = function(a) {
    switch(a) {
      case "unav-login":
        (new Kharma.LoginDialog).show();
        break;
      case "unav-admin":
        Kharma.admin.buildAdmin();
        break;
      case "unav-sim":
        Kharma.unityContext.toggle();
        break;
      case "unav-vetting":
        Kharma.admin.buildAdmin();
        g.goAdmin();
        break;
      case "unav-logout":
        Kharma.login.logout();
        break;
      case "unav-home":
        $.address.value("/home");
        break;
      case "unav-pkg":
        Kharma.login.user.is_anonymous || g.goDownloads();
        break;
      case "unav-wishlist":
        Kharma.login.user.is_anonymous || $.address.value("/wishlist/" + Kharma.login.user.id)
    }
  };
  a = function() {
    var a = $("#unav");
    $(".search-icon").off().on("click", function() {
      var a = $(this), b = $(".search-wrapper");
      b.hasClass("search-expanded") ? (b.removeClass("search-expanded"), a.removeClass("close-icon")) : (b.addClass("search-expanded"), a.addClass("close-icon"), b.contents().find("input.search-input").focus())
    });
    $(".unav-user-icon").off().on("click", function() {
      var a = $(".user-wrapper");
      a.hasClass("user-expanded") ? a.removeClass("user-expanded") : a.addClass("user-expanded")
    });
    $(".m-navbtn").off().on("click", function() {
      c ? ($(this).removeClass("close"), $("html").removeClass("menuopen"), $(".mobile-menu").removeAttr("style"), c = !1) : ($(this).addClass("close"), $("html").addClass("menuopen"), c = !0)
    });
    $("html").off().on("click", function(a) {
      a = $(a.target);
      (a.closest(".user-wrapper").length === 0 && a.closest(".unav-user-icon").length === 0 || a.attr("href")) && $(".user-wrapper").removeClass("user-expanded")
    });
    a.off().on("click", function(a) {
      h(a.target.id)
    });
    a.find("#unavSearchForm").on("submit", function(b) {
      b.preventDefault();
      var c = b.target, b = b.target.search.value;
      if(b !== "") {
        $.address.value("/search/" + encodeURIComponent(b)), c.search.value = "", a.find(".search-icon").removeClass("close-icon")
      }
    });
    a.find("a[lang]").on("click", function(a) {
      a.preventDefault();
      var a = $(this), b = a.attr("lang"), c = a.attr("href").replace("/", "");
      Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:b}, onSuccess:function() {
        Kharma.login.changeLanguageUrl(c)
      }})
    });
    g.addEvents()
  };
  d = function() {
    $("#unav").empty();
    $("#contentarea").prepend($(Handlebars.templates.browserMenu({activateAdmin:Kharma.l10n.admin.activate, admin:Kharma.login.isAdmin, assetStore:Kharma.l10n.browserMenu.title.assetStore, assetStoreLink:Kharma.l10n.browserMenu.link.assetStore, blog:Kharma.l10n.browserMenu.title.blog, blogLink:Kharma.l10n.browserMenu.link.blog, categories:Kharma.l10n.sideBar.categories, community:Kharma.l10n.browserMenu.title.community, communityLink:Kharma.l10n.browserMenu.link.community, create:Kharma.l10n.browserMenu.menu.createAccount, 
    creditCardPayPalTransactions:Kharma.l10n.user.creditCardPayPalTransactions, devServer:"Developer server", editAccount:Kharma.l10n.browserMenu.menu.myAccount, editAccountText:Kharma.l10n.browserMenu.menu.description, enableSim:Kharma.l10n.editor.enable, headline:Kharma.l10n.browserMenu.menu.unityAccount, help:Kharma.l10n.browserMenu.title.help, helpLink:Kharma.l10n.browserMenu.link.help, home:Kharma.l10n.browserMenu.title.home, homeLink:Kharma.l10n.browserMenu.link.home, icon:!Kharma.login.user.is_anonymous && 
    Kharma.login.user.keyimage && Kharma.login.user.keyimage.icon, id:Kharma.login.user && Kharma.login.user.id, industries:Kharma.l10n.browserMenu.title.industries, industriesLink:Kharma.l10n.browserMenu.link.industries, intro:Kharma.l10n.browserMenu.menu.intro, language:Kharma.l10n.language.language, learn:Kharma.l10n.browserMenu.title.learn, learnLink:Kharma.l10n.browserMenu.link.learn, level11:Kharma.l10n.browserMenu.title.level11, level11Link:Kharma.l10n.browserMenu.link.level11, level11Member:Kharma.login.user && 
    Kharma.login.user.roles && Kharma.login.user.roles.level11member, licenses:Kharma.l10n.user.license.licenses, localServer:"Local server", login:Kharma.l10n.user.logIn, logout:Kharma.l10n.browserMenu.menu.logOut, navigation:Kharma.l10n.browserMenu.menu.navigation, prodServer:"Production server", publicProfile:Kharma.l10n.user.publicProfile, publisherLogin:Kharma.l10n.browserMenu.title.publisherLogin, publisherLoginLink:Kharma.l10n.browserMenu.link.publisherLogin, qaServer:"QA server", sellAssets:Kharma.l10n.browserMenu.title.sellAssets, 
    sellAssetsLink:Kharma.l10n.browserMenu.link.sellAssets, servers:Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.server_switcher, servicePartners:Kharma.l10n.browserMenu.title.servicePartners, servicePartnersLink:Kharma.l10n.browserMenu.link.servicePartners, showcase:Kharma.l10n.browserMenu.title.showcase, showcaseLink:Kharma.l10n.browserMenu.link.showcase, showVetting:Kharma.l10n.admin.incomingPackages, transactions:Kharma.l10n.user.transactions, unity:Kharma.l10n.browserMenu.title.unity, 
    unityLink:Kharma.l10n.browserMenu.link.unity, user:Kharma.login && !Kharma.login.user.is_anonymous, username:Kharma.login.user.name})));
    a();
    b()
  };
  e = function() {
    Kharma.login && !Kharma.login.user.is_anonymous && (Kharma.cart.items.length > 0 ? $("#cart > div").html(Kharma.cart.items.length) : $("#cart > div").empty())
  };
  b = function() {
    var a = $(".unav-user-icon");
    Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? a.addClass("level-11") : a.removeClass("level-11");
    Kharma.login && !Kharma.login.user.is_anonymous ? a.find("img").length === 0 && (a.addClass("icon"), a.append("<img src='" + (Kharma.login.user.keyimage && Kharma.login.user.keyimage.icon) + "'>")) : (a.removeClass("icon"), a.find("img").remove())
  };
  (function() {
    g = new Kharma.Header;
    $("#mainContent").on(Kharma.utils.events.onUserLogin, function() {
      d()
    })
  })();
  return{addAdministration:g.addAdministration, addAdminModeButton:g.addAdminModeButton, goAdmin:g.goAdmin, goDownloads:g.goDownloads, onResize:function() {
    $("#unav").find(".close-icon").click()
  }, removeAdministration:g.removeAdministration, updateButtons:function() {
    e();
    g.updateButtons()
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ContextMenu = function(g) {
  var h = g || {}, a, d;
  a = function(a) {
    $("#contentarea").scroll(function() {
      a.remove()
    });
    $("body").on("click", function() {
      a.is(":visible") && a.remove()
    })
  };
  d = function(a) {
    var d = 0, b, f, g, m = a.find("ul"), j = function(a) {
      a.stopPropagation();
      $(".popupMenu").empty().remove();
      a.data.item.action()
    }, k = h.menuObject.commands;
    for(b = k.length;d < b;d++) {
      f = $("<li>"), a = k[d], a.action ? (g = $("<a></a>"), g.on("click", {item:a}, j), g.append(a.label), f.append(g)) : f.addClass("separator"), m.append(f)
    }
  };
  (function(c) {
    var e = c.left, c = c.top, b = $("<div class='popupMenu'><div class='user-ui active'><div class='menu'><ul></ul></div></div></div>");
    c += Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? 15 : 2;
    b.css({left:e, top:c});
    d(b);
    $("#assetstore").prepend(b);
    a(b)
  })(h)
};
Kharma.UI.DownloadButton = function(g) {
  var h, a = !1, d = $("<button class='download'></button>"), c = g || {}, e = c.content, b = (g = e && e.link) && g.id, f = !1, i = g && g.type, m, j = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && e && e.price_level11member ? Kharma.helper.getFormattedPrice(e.price_level11member) : e && e.price ? Kharma.helper.getFormattedPrice(e.price) : null, k = e && e.price_upgrade && e.upgrade_package && e.price_upgrade[e.upgrade_package], n, l, o = 
  e && e.purchased_at && j && e.category && e.category.multiple === "Y" ? !0 : !1, p, r, s, q, v, t, y, x, A, z;
  p = function() {
    $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(a, c, d, e, f) {
      i === c.type && b === c.id && y(c, d, e, f)
    });
    $("#mainContent").on(Kharma.utils.events.onPurchaseSuccessful, function() {
      Kharma.download.getLocalPackageById("content", b, function(a) {
        Kharma.io.post({uri:"/api/content/user-overview/" + b + ".json", data:JSON.stringify(a), onSuccess:function(a) {
          e.can_download = a.json.content.can_download;
          t()
        }})
      })
    });
    d.off().on("click", function(c) {
      var g = parseInt(d.css("height"), 10), i = $(".popupMenu"), h = d.offset().left, g = d.offset().top + (Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? g / 2 : g);
      c.stopPropagation();
      c.preventDefault();
      if(Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous) {
        (new Kharma.LoginDialog).show()
      }else {
        if(l === "inBrowser") {
          Kharma.utils.windowWrapper.location.setHref("com.unity3d.kharma:content/" + b)
        }else {
          (!e.license || a) && !Kharma.login.user.roles.downloader && d.text(Kharma.l10n.button.wait);
          switch(l) {
            case "download":
            ;
            case "update":
              f = !0;
              s();
              break;
            case "import":
              Kharma.download.importPackage(m);
              break;
            case "buy":
            ;
            case "upgrade":
              Kharma.login.user.roles.downloader ? i.is(":visible") ? i.remove() : Kharma.unityEditor.isEditor() ? (d.text("Buy / Download"), Kharma.unityEditor.makeMenu({commands:[{label:Kharma.l10n.button.download, action:function() {
                s()
              }}, {label:Kharma.l10n.button.buy, action:function() {
                r()
              }}]}, h, g)) : r() : r()
          }
          x()
        }
      }
    });
    if(o) {
      $(c.targetElement.find(".licenses")).off().on("click", function() {
        Kharma.cart.hasItem(parseInt(b, 10)) || Kharma.ga.event("cart", {action:"add", label:"package", target:{packageId:b, packageName:e.title, publisherName:e.publisher.label}});
        Kharma.cart.addItem(b, !0)
      })
    }
    Kharma.utils.windowWrapper.onResize(p)
  };
  r = function() {
    var a = e.compatibility && e.compatibility.warning;
    f = !1;
    a ? A(a) : q()
  };
  s = function() {
    var a = e.compatibility && e.compatibility.warning;
    Kharma.ga.event("package", {action:"download", area:"packages", label:e.price ? "paid" : "free", packageId:e.id, packageName:e.title, publisherName:e.publisher});
    a && !e.last_downloaded_at ? (f = !0, A(a)) : v()
  };
  q = function() {
    d.text(Kharma.l10n.button.wait);
    Kharma.cart.hasItem(parseInt(b, 10)) || Kharma.ga.event("cart", {action:"add", label:"package", target:{packageId:b, packageName:e.title, publisherName:e.publisher.label}});
    Kharma.cart.addItem(b, !0, x)
  };
  v = function() {
    var c = b < 0 ? "incoming" : "content";
    !e.license || a ? (d.text(Kharma.l10n.button.wait), Kharma.io.get({uri:"/api/" + c + "/download/" + b + ".json", onSuccess:function(a) {
      Kharma.unityEditor.download(a.json.download, function(a) {
        if(a) {
          throw a.message;
        }
      })
    }})) : z()
  };
  t = function() {
    Kharma.unityEditor.isEditor() ? Kharma.download.findLocalPath(b, function(a) {
      k ? l = "upgrade" : e.can_update ? (l = "update", h.addClass("update")) : a ? (l = "import", m = a) : l = e.can_download ? "download" : j ? "buy" : "download";
      x()
    }) : (l = k && !e.can_download ? "upgrade" : e && !e.can_download && j ? "buy" : "inBrowser", x())
  };
  y = function(a, c, e, g) {
    a = parseInt(e / g * 100, 10);
    l = c;
    l === "connecting" ? d.text(a + "%") : l === "downloading" ? a && (d.text(a + "%"), n.css("width", a + "%")) : l.indexOf("Error") !== -1 ? (d.text(Kharma.l10n.error.error), d.attr("title", l), n.addClass("error")) : l === "ok" && ($("#mainContent").off(Kharma.utils.events.onDownloadProgress), f && Kharma.download.findLocalPath(b, function(a) {
      Kharma.download.importPackage(a)
    }), t());
    a && n.attr("data-progress", a)
  };
  x = function() {
    switch(l) {
      case "inBrowser":
        d.text(Kharma.l10n.share.openInUnity);
        d.attr("href", "#!/content/" + b);
        $($(".sharing a")[0]).hide();
        break;
      case "download":
        d.text(Kharma.l10n.button.download);
        break;
      case "import":
        d.text(Kharma.l10n.pkg.importPkg);
        break;
      case "update":
        d.text(Kharma.l10n.pkg.update);
        break;
      case "buy":
        d.text((j === "Free" ? Kharma.l10n.button.get : Kharma.l10n.button.buy) + " " + j);
        d.attr("href", "#!/content/" + b + "/basketpurchase");
        break;
      case "upgrade":
        d.addClass("upgrade"), d.text(Kharma.l10n.pkg.upgrade + " " + Kharma.helper.getFormattedPrice(k)), d.attr("href", "#!/content/" + b + "/basketpurchase")
    }
  };
  A = function(a) {
    new Kharma.TextMessage({title:a.title, message:a.message, withCancel:!0, callback:function(a) {
      a ? f ? v() : q() : x()
    }})
  };
  z = function() {
    Kharma.io.get({uri:"/api/content/license/" + b + ".json", onSuccess:function(b) {
      if(b.transport.status === 200) {
        var c;
        try {
          c = JSON.parse(b.transport.responseText)
        }catch(e) {
          c = !1
        }
        c && new Kharma.TextMessage({title:Kharma.l10n.page.license, message:c.result.license, withCancel:!0, callback:function(b) {
          b && (f = a = !0, d.text(Kharma.l10n.button.wait), s())
        }})
      }
    }})
  };
  h = $("<div class='action-container'></div>");
  n = $("<div class='progress-bar'></div>");
  h.append(n);
  h.append(d);
  c.targetElement.prepend(h);
  o && c.targetElement.append($("<br><div class='license-container'><button class='licenses'>" + Kharma.l10n.page.buyAdditionalLicenses + "</button></div>"));
  t();
  p()
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Loader = function(g, h) {
  var a, d, c;
  c = function() {
    d.empty();
    a.css("background-image", "none")
  };
  (function(e, b) {
    a = e.first();
    d = a.children().next();
    c();
    d.append(b);
    a.css({backgroundImage:"url(/images/loader.gif)", marginLeft:"16px"})
  })(g, h);
  return{clear:c, target:g[0]}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Newsletter = function(g, h, a) {
  var d, c, e, b, f;
  d = function(c, d) {
    var f, g;
    f = Handlebars.templates.newsletter({headline:Kharma.l10n.newsletter.headline, newsletterTitle:Kharma.l10n.newsletter.title, page:d, privacyPolicy:Kharma.l10n.newsletter.privacyPolicy, save:Kharma.l10n.newsletter.save, titleSignedIn:Kharma.l10n.newsletter.titleSignedIn, username:Kharma.login && Kharma.login.user && Kharma.login.user.username});
    d === "account" ? c.append($(f).find(".signup")) : $("#innerNewsletter").length === 0 && (c.append(f), a && a());
    b();
    f = $(".body-buttons");
    g = $(".privacy-policy input");
    f.find("a").on("click", function(a) {
      a.preventDefault();
      e(a)
    });
    g.click(function() {
      g.attr("checked") ? g.attr("checked", !1) : g.attr("checked", "checked")
    })
  };
  c = function(a) {
    Kharma.ga.event("newsletter");
    var b = "https://unity3d.com/newsletters/lists/asset_store_user.json";
    h === "home" && (b = "https://unity3d.com/newsletters/lists/asset_store_home.json");
    $.post(b, {email:a || Kharma.login.user.username}, function() {
      var a = $("#innerNewsletter .body"), b = a.find(".response");
      g.find(".privacy-policy input").attr("checked") === "checked" && (Kharma.UI.Notification(Kharma.l10n.newsletter.success, null, "newsletter-notification"), a.css("height", a.height() + 3), a.find(".signup").fadeOut(), b.children().first().text(Kharma.l10n.newsletter.success), b.fadeIn())
    })
  };
  e = function(a) {
    var b = $(".email"), d = b.val(), e = g.find(".privacy-policy input"), h = $(".privacy-policy");
    a.stopPropagation();
    a.preventDefault();
    b.on("focus", function() {
      b.removeClass("not-valid")
    });
    e.on("click", function() {
      h.removeClass("not-valid")
    });
    f(d) ? e.attr("checked") === "checked" ? c(d) : h.addClass("not-valid") : b.addClass("not-valid")
  };
  b = function() {
    var a = $(".email");
    Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? a.val(Kharma.login.user.username) : a.val(Kharma.l10n.newsletter.email)
  };
  f = function(a) {
    return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
  };
  (function(a, c) {
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      a.length === 0 ? d(a, c) : b()
    });
    d(a, c)
  })(g, h);
  return{submitNewsletter:c}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Notification = function(g, h, a) {
  var d;
  (function(a, e, b) {
    var f = $("#assetstore"), g = f.find(".notification");
    g.empty();
    g.length === 0 && (g = $("<div class='notification'></div>"), f.append(g), b && g.addClass(b));
    g.append("<p>" + a + "</p>");
    e && (a = new Kharma.UI.SharingBar({type:"package", title:e.title, publisher:e.publisher.label, id:e.id, twitterMessage:Kharma.l10n.supplant(Kharma.l10n.wishList.twitterMessage, {packageName:e.title})}), g.append(a.getSharingBar()));
    g.slideDown("slow");
    d = setTimeout(function() {
      g.slideUp("slow")
    }, 3E3);
    g.off().hover(function() {
      clearTimeout(d)
    }, function() {
      d = setTimeout(function() {
        g.slideUp("slow")
      }, 3E3)
    })
  })(g, h, a)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.PaginationList = function(g) {
  var h = $("<div id='packageList' class='package-list'></div>"), a = g || {}, d = a.callback, c = a.category, e = a.data, b = a.element, f = a.page, i = a.results, m = isNaN(parseInt(f, 10)), j = a.sortBy, k = a.withPagination, n = a.withSorting, l = a.ga || null, o, p, r, s, q, v;
  o = function() {
    var a = $("<div id='pagination' class='paginate'></div>"), d = $("<div id='pagination2' class='paginate'></div>");
    a.smartpaginator({datacontainer:"packageList", totalrecords:e && e.total, recordsperpage:36, initval:f, display:"single", next:"Next", prev:"Prev", first:"First", last:"Last", onchange:function(a) {
      r(d);
      $.address.value("/category/" + c + "/page/" + a + "/sortby/" + j)
    }});
    b.prepend(a);
    b.append(d);
    r(d)
  };
  p = function() {
    var a = $("<button class='show-all-pagination-list'>" + (m ? Kharma.l10n.button.hideAll : Kharma.l10n.button.showAll) + "</button>");
    a.off().on("click", function() {
      $(this).text() === Kharma.l10n.button.showAll ? s() : q()
    });
    b.prepend(a)
  };
  r = function(a) {
    var b = $("#pagination > *").clone(!0);
    $("#pagination2").empty();
    b.appendTo(a)
  };
  s = function() {
    $.address.value("/category/" + c + "/sortby/" + (j || f))
  };
  q = function() {
    $.address.value("/category/" + c + "/page/1/sortby/" + (j || f))
  };
  v = function(a) {
    var b = $(a.find(".wish-list")), a = $(a.find(".wish-list-buy")), c = $("#userpage");
    a.off().on("click", function(a) {
      a = $(a.target).parent().parent().parent().attr("data-link");
      Kharma.cart.hasItem(parseInt(a, 10)) || Kharma.ga.event("cart", {action:"add", label:"wishlist", target:{packageId:a, packageName:$(this).parent().parent().data("package"), publisherName:$(this).parent().parent().data("publisher")}});
      Kharma.ga.view("cart");
      Kharma.cart.addItem(a, !0)
    }).attr("title", Kharma.l10n.wishList.buy);
    Kharma.login && Kharma.login.user ? (b.show(), a.css("display", "block")) : (b.hide(), a.hide());
    $("#wishListPage").length > 0 || c.length > 0 && Kharma.login.user ? (b.attr("title", Kharma.l10n.wishList.remove), b.addClass("on-wish-list"), b.off().on("click", function(a) {
      a = $(a.target).parent().parent().parent().attr("data-link");
      Kharma.ga.event("wishlist", {action:"remove", label:"wishlist", target:{packageId:a, packageName:$(this).parent().parent().data("package"), publisherName:$(this).parent().parent().data("publisher")}});
      Kharma.wishList.deleteFromWishList(a)
    })) : b.hide()
  };
  g = function(b) {
    var c, f = k ? !m ? b.length > 36 ? 36 : b.length : b.length : b.length, g = "";
    k || h.empty();
    if(d) {
      for(c = 0;c < f;c++) {
        g += d(b[c], a.level11)
      }
    }
    h.append(g);
    v(h);
    k && (m || o(), e && e.total > 36 && p());
    if(l) {
      h.off().on("click", function(a) {
        for(a = $(a.target);a.length > 0 && a !== h;) {
          if(a[0] === h[0]) {
            break
          }else {
            if(a.data("link")) {
              Kharma.ga.event("inbound", {action:l.action, label:l.label, value:l.value, target:{packageName:a.data("package") || "n/a", publisherName:a.data("publisher") || "n/a"}});
              break
            }
          }
          a = a.parent()
        }
      })
    }
  };
  b.append(h);
  i && i.length > 0 && (g(i), n && (i = new Kharma.UI.SortingLinks({callback:g, results:i, element:b, categoryId:c, page:f, sorting:j}), i.selectLinks()));
  return{renderLinks:g}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Rating = function(g) {
  var g = g || {}, h = g.callback, a = g.classes || "", d = null, c = g.count || 0, e = g.showCount || !1, b = g.includeMicroData || !1, f = g.packageId, i = g.submitRatingCallback, m = f ? !0 : !1, j = g.value || 0, k = j || 0, n, l, o, p;
  o = function(a) {
    j = a;
    n("selected", j);
    h ? h(j) : p()
  };
  l = function(a) {
    n("hover", a)
  };
  n = function(a, b) {
    var c = d;
    $(d.find("span")).length > 0 && (c = $(d.find("span")));
    c.children().each(function(c, d) {
      c < b ? $(d).addClass(a) : $(d).removeClass(a)
    })
  };
  p = function() {
    j !== k && (Kharma.io.flushCacheKey("/api/content/comments/" + f + ".json"), Kharma.io.flushCacheKey("/api/content/overview/" + f + ".json"), Kharma.io.post({uri:"/api/content/comments/" + f + ".json", parameters:{rating:j}, pageSpecific:!0, onSuccess:function() {
      i && i(j)
    }, onFailure:function() {
      new Kharma.TimedMessage({title:Kharma.login.user.is_anonymous ? Kharma.l10n.rating.errorLogin : Kharma.l10n.rating.error, message:Kharma.l10n.rating.errorMessage, timeout:7})
    }}), k = j)
  };
  return{render:function() {
    var f, g, i, h = function(a) {
      o(a.data.value)
    }, k = function(a) {
      l(a.data.value)
    };
    d = $("<div class='rating'></div>").addClass(a);
    b && (g = $("<span itemprop='ratingValue'>"), d.attr("itemprop", "aggregateRating"), d.attr("itemscope", ""), d.attr("itemtype", "http://schema.org/AggregateRating"), d.append(g));
    if(!m && j === 0) {
      return d.append("<span class='unrated'>" + Kharma.l10n.rating.notEnough + "</span>"), d
    }
    m && d.addClass("interactive");
    d.on("mouseleave", function() {
      l(0)
    });
    for(f = 1;f <= 5;f++) {
      i = $("<div/>"), m && (i.on("click", {value:f}, h), i.on("mouseenter", {value:f}, k)), b ? g.append(i) : d.append(i)
    }
    n("selected", j);
    b && g.attr("content", d.find(".selected").length);
    e && c > 0 && (d.append("<div class='count'>(<span class='rating-count'></span>" + c + ")</div>"), b && (d.find(".count").attr("itemprop", "ratingCount"), d.find(".count").attr("content", c)));
    return d
  }, getValue:function() {
    return j
  }, setValue:o, submitRating:p}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ScreenShot = function(g) {
  var h = null, a, d, c, e, b = 0, f, i, m, j, k, n, l, o, p, r, s, q, v, t, y, x, A, z = {}, C = [140, 126, 119, 91, 71], u = [5, 5, 5, 4, 3], w;
  o = function(a, b) {
    function c(a) {
      var b = d.protocol + "//" + d.hostname;
      b += !/^\//.test(d.pathname) ? "/" + d.pathname : d.pathname;
      var e = [], f;
      for(f in a) {
        a.hasOwnProperty(f) && e.push(f + "=" + a[f])
      }
      a = "?" + e.join("&");
      b += a;
      b += d.hash;
      return b
    }
    if(a && b) {
      var d = document.createElement("a"), e = {}, f, g, i = 0, h;
      d.href = b;
      f = d.search.replace("?", "");
      f = f !== "" ? f.split("&") : [];
      for(h = f.length;i < h;i++) {
        g = f[i].split("="), e[g[0].trim()] = g[1].trim()
      }
      return a === "youtube" ? (e.autoplay = 1, e.rel = 0, e.html5 = 1, c(e)) : a === "vimeo" ? (e.autoplay = 1, c(e)) : a === "soundcloud" ? (e.auto_play = "true", e.visual = "false", c(e)) : a === "mixcloud" ? (e.autoplay = "1", e.hide_cover = "1", c(e)) : a === "sketchfab" ? (e.autostart = "1", e.autospin = "0.2", e.controls = "1", c(e)) : a === "unity" ? "/unityplayer.html?" + b : ""
    }else {
      return""
    }
  };
  r = function(a) {
    var b = 0, d = u[f()];
    e = c = -1;
    k = [];
    $.each(a, function(a, d) {
      if(!d.type) {
        d.type = ""
      }
      var f = $('<img src="' + d.thumb + '" width="140" data-type="' + d.type + '" data-full="' + d.link + '" data-width="' + d.width + '" data-height="' + d.height + '" + data-index="' + b + '"/>');
      b++;
      k.push(f);
      i.append(f);
      $(f[0]).on("click", function(a) {
        var b = $(a.target), d = parseInt(b.attr("data-index"), 10);
        a.stopPropagation();
        if(c !== d) {
          if(c = d, e = b.attr("data-type"), z[b.attr("data-full")]) {
            v(z[b.attr("data-full")])
          }else {
            switch(l.show().css("left", b.position().left + b.width() / 2), e) {
              case "youtube":
              ;
              case "vimeo":
              ;
              case "soundcloud":
              ;
              case "mixcloud":
              ;
              case "sketchfab":
                b.attr("data-src", o(e, b.attr("data-full")));
                q(b);
                break;
              case "unityplayer":
                b.attr("data-src", "/unityplayer.html?" + b.attr("data-full"));
                q(b);
                break;
              default:
                s(b)
            }
          }
        }
      })
    });
    k.length <= d ? (j.css("visibility", "hidden"), m.css("visibility", "hidden")) : (j.addClass("right active"), j.on("click", function(a) {
      a.stopPropagation();
      t(1)
    }), m.on("click", function(a) {
      a.stopPropagation();
      t(-1)
    }));
    k.length <= 1 ? (A.css("visibility", "hidden"), x.css("visibility", "hidden")) : (A.on("click", function() {
      j.click();
      c < k.length - 1 && $(i.find("img")[c + 1]).click()
    }), x.on("click", function() {
      m.click();
      c > 0 && $(i.find("img")[c - 1]).click()
    }));
    w()
  };
  p = function(b) {
    var c = $("#imagestrip"), e = $('<a href="#" id="screenshot-close" class="button"><span class="icon right">' + Kharma.l10n.button.close + "</span></a>");
    c.length === 0 && (c = $("<div id='imagestrip' />"));
    c.html("");
    $("#contentaside").after(c);
    d = $("<div id='screenshot-viwer-container' class='blocked' style='display: none;' />");
    n = $("<div id='screenshot-viwer' class='item' />");
    c.before(d);
    d.append(n);
    d.append(e);
    e.on("click", a);
    c.append(b);
    i = $("<div id='innerimagestrip' />");
    b.append(i);
    m = $("<div class='left'></div>");
    j = $("<div class='right'></div>");
    b.before(m);
    b.after(j);
    x = $("<div class='leftViewButton'></div>");
    A = $("<div class='rightViewButton'></div>");
    d.append(x);
    d.append(A);
    l = $('<div class="loading-indicator"></div>');
    i.append(l)
  };
  t = function(a) {
    var c = u[f()], a = b + a;
    k.length <= c || (a <= 0 ? (a = 0, m.addClass("left"), m.removeClass("active"), j.addClass("right active")) : (a >= k.length - c ? (a = k.length - c, j.addClass("right"), j.removeClass("active")) : j.addClass("right active"), m.addClass("left active")), a !== b && (b = a, i.animate({left:-b * (k[0].width() + 10)}, 400)))
  };
  a = function(a) {
    a && a.preventDefault();
    d && d.length > 0 && (e = c = -1, d.slideUp("", function() {
      n.empty()
    }), h.remove())
  };
  s = function(a) {
    var b = $('<img class="preview" />');
    b.on("load", function() {
      l.hide();
      var c = $('<div class="frame" data-type="image" />').append(b);
      z[a.attr("data-full")] = c;
      v(c)
    });
    b.attr("src", a.attr("data-full"))
  };
  q = function(a) {
    var b = $('<div class="frame" data-type="embed"/>'), c = $('<iframe type="text/html" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />');
    c.attr("data-src", a.attr("data-src"));
    c.attr("width", a.attr("data-width"));
    c.attr("height", a.attr("data-height"));
    b.append(c);
    z[a.attr("data-full")] = b;
    v(b);
    l.hide()
  };
  v = function(a) {
    var e = a.children().first(), g = a.attr("data-type"), m = n.children().last(), j = m.attr("data-type"), l = 0, o = k[c], p = u[f()];
    n.append(a);
    d.css("display") === "none" ? (d.show().css({height:0}), l = Math.min(e.height(), 400), d.animate({height:e.height() + 22}, l, function() {
      if(g === "embed") {
        var b = a.children().first()[0];
        b.contentWindow.location.replace(b.getAttribute("data-src"))
      }
    }), y.animate({scrollTop:y.scrollTop() + d.position().top - 5}, l)) : (a.css("opacity", 0), l = Math.min(Math.abs(e.height() - m.children().first().height()) * 2, 400), d.animate({height:e.height() + 22}, l, function() {
      a.animate({opacity:1}, 300, function() {
        if(g === "embed") {
          var b = a.children().first()[0];
          b.contentWindow.location.replace(b.getAttribute("data-src"))
        }
        m && j === "embed" && m.children().first()[0].contentWindow.location.replace("")
      })
    }));
    k.length > 1 && (c > 0 ? x.addClass("active") : x.removeClass("active"), c < k.length - 1 ? A.addClass("active") : A.removeClass("active"));
    h = i.find("#active-bg");
    h.length === 0 ? (h = $("<div id='active-bg' />"), i.prepend(h), h.css({width:o.width() + 10, left:o.position().left + parseInt(o.css("margin-left"), 10) - 5}), h.fadeIn()) : h.animate({width:o.width() + 10, left:o.position().left + parseInt(o.css("margin-left"), 10) - 5}, 200);
    c - b >= p ? t(c - b - (p - 1)) : c < b && t(c - b)
  };
  f = function() {
    var a = 0, b, c, d = [Infinity, 1060, 980, 768, 478];
    if(window.ieFallback) {
      c = 0
    }else {
      for(b = d.length;a < b;a++) {
        if(Kharma.utils.windowWrapper.innerWidth() > d[a]) {
          break
        }
      }
      c !== a - 1 && (c = a - 1)
    }
    return c
  };
  w = function() {
    var a, d = i.find("#active-bg"), e = k.length, g = C[f()];
    if(k && e > 0) {
      for(a = 0;a < e;a++) {
        k[a].attr("width", g)
      }
      i.css("left", -b * (k[0].width() + 10));
      d.length > 0 && d.css({width:k[c].width() + 10, left:k[c].position().left})
    }
  };
  (function(a) {
    y = $("#contentarea");
    var b = $("<div id='imageblock' class='images' />");
    p(b);
    r(a)
  })(g);
  return{updateLayout:w}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.SharingBar = function(g) {
  var h, a, d = g || {}, c = {type:d.type}, e = Kharma.utils.windowWrapper.location.getHref(), b = d.title, f = d.twitterMessage, i, m;
  i = function(a, b, c, d) {
    a.attr("href", b);
    a.off().on("click", function() {
      m(c, d)
    });
    h.append(a)
  };
  m = function(a, b) {
    Kharma.ga.social(a, {action:b || "share", url:e, target:c})
  };
  (function() {
    var g = $("<a title='" + Kharma.l10n.supplant(Kharma.l10n.share.openInExternalBrowser, {title:b}) + "' target='_blank' class='externallink'><img src='/images/social/link.png' alt='" + Kharma.l10n.share.openInBrowser + "'></a>"), m = $("<a title='" + Kharma.l10n.share.openUnity + "' target='_blank' class='externallink'><img src='/images/social/unity.png' alt='" + Kharma.l10n.share.openInUnity + "'></a>"), n = $("<a title='" + Kharma.l10n.supplant(Kharma.l10n.share.onTwitter, {title:b}) + "' target='_blank' class='externallink'><img src='/images/social/twitter.png' alt='" + 
    Kharma.l10n.share.shareOnTwitter + "'></a>"), l = $("<a title='" + Kharma.l10n.supplant(Kharma.l10n.share.onFb, {title:b}) + "' target='_blank' class='externallink'><img src='/images/social/facebook.png' alt='" + Kharma.l10n.share.shareOnFb + "'></a>"), o = $("<a title='" + Kharma.l10n.supplant(Kharma.l10n.share.onGoogle, {title:b}) + "' target='_blank' class='externallink'><img src='/images/social/googleplus.png' alt='" + Kharma.l10n.share.shareOnGoogle + "'></a>");
    h = $("<div class='sharing'></div>");
    switch(d.type) {
      case "package":
        c.packageName = d.title;
        c.publisherName = d.publisher;
        c.area = "Packages";
        break;
      case "publisher":
        c.publisherName = d.title, c.area = "Publishers"
    }
    !Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? (h.append(m), m.on("click", function() {
      document.location = "com.unity3d.kharma:content/" + d.id
    })) : (g.attr("href", e), h.append(g), g.click(function(b) {
      b.preventDefault();
      a && (a.remove(), a = null);
      var c = $(b.target).parents(".linkbar");
      a = $('<div class="copylink"><input type="text" value="' + e + '"><div class="close"></div></div>');
      c.length === 0 ? c = $(b.target) : a.css({"margin-left":"-5px", width:parseInt(c.width() + 5, 10)});
      a.insertAfter(c).find(".close").off().on("click", function() {
        a.remove();
        a = null
      });
      $("input", a).focus()
    }));
    i(n, "http://twitter.com/?status=" + encodeURIComponent((f || Kharma.l10n.supplant(Kharma.l10n.share.twitterMessage, {title:b})) + " " + e + " #unity3d"), "twitter", "tweet");
    i(l, "http://facebook.com/share.php?u=" + encodeURIComponent(e), "facebook");
    i(o, "http://plus.google.com/share?url=" + encodeURIComponent(e), "googlePlus")
  })();
  return{getSharingBar:function() {
    return h
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ShowMoreList = function(g) {
  var h = $("<div class='package-list-show-more'></div>"), g = g || {}, a = g.callback, d = g.element, c = g.results, e, b = g.withSorting, f = g.ga || null, i;
  i = function(b, c) {
    var d, e, g = "";
    c && h.empty();
    d = 0;
    for(e = b.length;d < e;d++) {
      g += a(b[d])
    }
    h.append(g);
    if(f) {
      h.off().on("click", function(a) {
        for(a = $(a.target);a.length > 0 && a !== h;) {
          if(a[0] === h[0]) {
            break
          }else {
            if(a.data("link")) {
              Kharma.ga.event("inbound", {action:f.action, label:f.label, value:f.value, target:{packageName:a.data("package") || "n/a", publisherName:a.data("publisher") || "n/a"}});
              break
            }
          }
          a = a.parent()
        }
      })
    }
  };
  d.append(h);
  b && (e = new Kharma.UI.SortingLinks({results:c, element:d, callback:i}), e.selectLinks());
  return{addShowAllLink:function(a) {
    d.append($("<a class='show-all' href=#!" + a + ">" + Kharma.l10n.button.showAll + "</a>"))
  }, addShowMoreLink:function(a, c, f) {
    var g = !1, l = $("<div class='show-more'><a>" + Kharma.l10n.button.showMore + "</a><div></div></div>");
    d.append(l);
    l.on("click", function() {
      var o = l.detach(), p = o.find("a");
      g ? (p.text(Kharma.l10n.button.showMore), o.removeClass("hide"), h.empty(), b && e.sort(a.slice(0, c)), d.find(".sortby.bottom-links").remove(), $("#contentarea").animate({scrollTop:f.offset().top + $("#contentarea").scrollTop() - 30}, "slow"), i(a.slice(0, c)), g = !1) : (p.text(Kharma.l10n.button.hideMore), o.addClass("hide"), b && (a.length > 16 && new Kharma.UI.SortingLinks({results:a, element:d, callback:i}), $(".sortlink").hasClass("selected") && (h.empty(), e.sort(a))), i(a), g = !0);
      d.append(o);
      b && e.selectLinks()
    })
  }, renderLinks:i}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.SortingLinks = function(g) {
  var g = g || {}, h = g.results, a = g.element, d = g.callback, c = g.categoryId, e = g.page, b = g.sorting, f = [{key:"wished_date_iso", text:Kharma.l10n.sorting.addedDate, sorting:"addeddate"}, {key:"weight", text:Kharma.l10n.sorting.relevance, sorting:"relevance"}, {key:"hotness", text:Kharma.l10n.sorting.popularity, sorting:"popularity"}, {key:"title", text:Kharma.l10n.sorting.name, sorting:"name"}, {key:"price", text:Kharma.l10n.sorting.price, sorting:"price"}, {key:"rating", text:Kharma.l10n.sorting.rating, 
  sorting:"rating"}, {key:"pubdate_iso", text:Kharma.l10n.sorting.releaseDate, sorting:"releasedate"}], i, m, j, k;
  i = function(a) {
    $(".sortlink").unbind().on("click", {results:a}, function(a) {
      var f = a.data.results, g = $(a.target), i = g.attr("sorting");
      a.stopPropagation();
      a.preventDefault();
      $(".sortlink").removeClass("selected");
      Kharma.UI.SortingLinks.previousSort = b = g.attr("sort-by");
      j();
      c ? $.address.value(!isNaN(parseInt(e, 10)) ? "/category/" + c + "/page/" + e + "/sortby/" + i : "/category/" + c + "/sortby/" + i) : (k(f), d && (d(f, !0), $("#catresults").offset() ? $("#contentarea").animate({scrollTop:$("#catresults").offset().top + $("#contentarea").scrollTop() - 80}, "slow") : $("#recommendations").offset() && $("#contentarea").animate({scrollTop:$("#recommendations").offset().top + $("#contentarea").scrollTop() - 30}, "slow")))
    })
  };
  m = function(a, c) {
    var d = a.title.toLowerCase(), e = c.title.toLowerCase();
    switch(b) {
      case "price":
        d = a.price ? parseFloat(a.price.USD) : 0;
        e = c.price ? parseFloat(c.price.USD) : 0;
        break;
      case "rating":
        d = c.rating && c.rating.average ? parseInt(c.rating.average, 10) : 0;
        e = a.rating && a.rating.average ? parseInt(a.rating.average, 10) : 0;
        break;
      case "pubdate_iso":
        d = c.pubdate_iso;
        e = a.pubdate_iso;
        break;
      case "wished_date_iso":
        d = c.wished_date_iso;
        e = a.wished_date_iso;
        break;
      case "hotness":
        d = parseFloat(c.hotness);
        e = parseFloat(a.hotness);
        break;
      case "weight":
        d = c.weight, e = a.weight
    }
    d = d < e ? -1 : d > e ? 1 : 0;
    b === "rating" && d === 0 && (d = parseInt(c.rating.count, 10) < parseInt(a.rating.count, 10) ? -1 : parseInt(c.rating.count, 10) > parseInt(a.rating.count, 10) ? 1 : 0);
    d === 0 && (d = c.hotness < a.hotness ? -1 : c.hotness > a.hotness ? 1 : 0);
    d === 0 && (d = a.title < c.title ? -1 : a.title > c.title ? 1 : 0);
    return d
  };
  j = function() {
    $.each($(".sortlink"), function(a, c) {
      c = $(c);
      c.attr("sorting") && c.attr("sorting") === b ? c.addClass("selected") : c.attr("sort-by") === b && c.addClass("selected")
    })
  };
  k = function(a) {
    i(a);
    a.sort(m)
  };
  (function(a, e) {
    var g = 0, h, m = a[0], s = $("<div class='sortby'></div>"), q, v = $("<p><span>" + Kharma.l10n.sorting.sortBy + "</span> </p>");
    b || (b = Kharma.UI.SortingLinks.previousSort ? Kharma.UI.SortingLinks.previousSort : m.wished_date_iso ? "wished_date_iso" : m.weight ? "weight" : m.hotness ? "hotness" : "title");
    j();
    for(h = f.length;g < h;g++) {
      if(f[g].key === "rating" || f[g].key === "price" || m[f[g].key]) {
        q = $("<a class='sortlink' sorting=" + f[g].sorting + " sort-by=" + f[g].key + ">" + f[g].text + "</a>"), v.append(q), g + 1 < f.length && v.append('<span class="split"> / </span>')
      }
    }
    s.append(v);
    c || (k(a), d && d(a));
    e.find(".sortby").length === 0 ? e.prepend(s) : e.append(s.addClass("bottom-links"));
    i(a)
  })(h, a);
  return{selectLinks:j, sort:k}
};
Kharma.UI.Toolbar = function() {
  var g, h = null, a, d = null, c, e, b, f, i, m, j, k, n, l, o;
  e = function(a) {
    a.removeClass("not-active")
  };
  b = function(a) {
    a.addClass("not-active")
  };
  i = function(b) {
    n(b);
    !Kharma.cart.active && !a && ($("#forward").hasClass("not-active") || m(1))
  };
  f = function(b) {
    n(b);
    !Kharma.cart.active && !a && ($("#back").hasClass("not-active") || m(-1))
  };
  m = function(a) {
    if(!Kharma.cart.active) {
      d = new Kharma.UI.Loader($("#pageload"), Kharma.l10n.page.loading), Kharma.history.setDistance(a), Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? (a = Kharma.history.getHistory()[Kharma.history.getIndex() + a], Kharma.history.page = a, Kharma.utils.windowWrapper.location.setHash(a.getRequestUrl())) : Kharma.utils.windowWrapper.history.go(a)
    }
  };
  j = function() {
    var c = $("#back"), d = $("#forward"), f = Kharma.history.getHistory(), i = Kharma.history.getIndex();
    i !== null && f.length > 0 && !a && !g ? (i > 0 ? e(c) : b(c), i < f.length - 1 ? e(d) : b(d)) : (b(c), b(d))
  };
  k = function() {
    var a = $("#wishList");
    a.hasClass("toggled") || (Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? e(a) : b(a))
  };
  l = function() {
    j();
    k();
    h.updateButtons()
  };
  n = function(a) {
    a && (a.stopPropagation(), a.preventDefault())
  };
  h = new Kharma.Header;
  c = {strips:[[{name:"back"}, {name:"forward"}], [{name:"home"}, {name:"categories"}, {name:"search"}], [{name:"downloads"}, {name:"cart"}, {name:"wishList"}]]};
  g = a = !1;
  (function() {
    var a = $("<header id='header' class='main'></header>"), b = $("<div id='historyarea'></div>");
    a.append(b);
    b.append(Handlebars.templates.toolbar({buttons:c.strips}));
    Kharma.unityEditor.isEditor() && Kharma.unityEditor.isEmulated() && $(".buttonstrip", b).first().css("display", "none");
    $("#assetstore").append(a)
  })();
  (function() {
    $("#back").off().on("click", f);
    $("#forward").off().on("click", i);
    $("#wishList").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      o || (o = new Kharma.UI.WishListDropDown);
      o.toggleDropDown()
    });
    $("#search").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      $("#editorSearchArea").hasClass("active") ? $("#editorSearchArea").removeClass("active") : $("#editorSearchArea").addClass("active")
    });
    $("#editorSearchForm").on("submit", function(a) {
      a.preventDefault();
      var b = a.target, a = a.target.search.value;
      if(a !== "") {
        $.address.value("/search/" + encodeURIComponent(a)), b.search.value = ""
      }
    });
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      l()
    });
    h.addEvents()
  })();
  return{addAdministration:h.addAdministration, addAdminModeButton:h.addAdminModeButton, goAdmin:h.goAdmin, goDownloads:h.goDownloads, goPage:m, loader:d, removeAdministration:h.removeAdministration, updateButtons:l}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.TopList = function(g, h) {
  return{render:function(a) {
    a.empty();
    a.append(Handlebars.templates.topList({noPackages:Kharma.l10n.page.noPackages, isSale:h, item:g}))
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.TreeList = function(g, h, a) {
  var d = !1, c, e;
  c = function() {
    var a = $(this).siblings("ul");
    $(this).toggleClass("node-btn-open");
    a.slideToggle()
  };
  e = function(b, c, d, g) {
    var h = $("<ul/>"), k, n;
    c && (h.attr("id", c).addClass("tree-list"), c = null);
    $.each(b, function(b, o) {
      var p = o.id || o.data, r, s = o.name || o.label, q = $("<li/>");
      if(s === "Other") {
        s = Kharma.l10n.categories.other
      }
      o.id && (k = p === "home" ? "#!/" + p : "#!/category/" + p + "/page/1/sortby/" + (a || "popularity"));
      n = d === 0 ? s : g + "/" + s;
      if(o.id || o.data) {
        r = $("<a/>").attr("data-path", n).attr("href", k).addClass("livelink cat-" + p)
      }
      r.text(s);
      o.count && r.append($("<span/>").addClass("count").text(o.count));
      q.append(r);
      o.subs && q.append(e(o.subs, c, d + 1, n));
      o.node && q.append(e(o.node, c, d + 1, n));
      h.append(q)
    });
    return h
  };
  return{render:function(a, f) {
    var i;
    i = $("<span/>").attr("class", "node-btn");
    var m;
    d || (d = !0, g && a && h && (m = e(h.categories, g, 0), a.append(m)), i.on("click autoclick", c), $("#" + g + " li:has(ul)").prepend(i), $("#" + g + " li:not(li:has(ul))").prepend($("<span/>").attr("class", "node-btn node-empty")), $("#" + g + " li:has(.cat-home) span").removeClass("node-empty").addClass("node-home"), i = $("#" + g + " a.cat-" + f), $("#" + g + " a.active-item").removeClass("active-item"), $("#" + g + " a.cat-" + f).addClass("active-item"), (!g || g === "home") && $("#" + g + 
    " a").prev(".node-btn-open").trigger("autoclick"), (i.parent().parent().attr("id") === "categoryTree" || i.parent().parent().attr("id") === "mobileCategoryTree") && $("#" + g + " > li > a").not(i).prev(".node-btn-open").trigger("autoclick"), i.parentsUntil(".tree-list").each(function() {
      $(this).siblings(".node-btn").not(".node-btn-open").trigger("autoclick")
    }), i.prev(".node-btn").not(".node-btn-open").trigger("autoclick"))
  }}
};
Kharma.UI.WishListDropDown = function() {
  var g, h;
  g = function() {
    $(".wish-list-buy").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.cart.addItem($(a.target).attr("data-id"), !0)
    });
    $(".wish-list").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.wishList.deleteFromWishList($(a.target).attr("data-id"))
    })
  };
  h = function() {
    Kharma.wishList.getWishList(Kharma.login.user.id, function(a, d) {
      $(".wish-list-drop-down").html(Handlebars.templates.wishListDropDown({id:Kharma.login.user.id, results:a || [], total:d || 0, wishListIsEmpty:Kharma.l10n.wishList.empty, seeAll:Kharma.l10n.wishList.seeAll}));
      g()
    }, 3)
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onAddedToWishList + " " + Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function(a) {
      a.stopPropagation();
      a.preventDefault();
      h(a)
    });
    $("body").on("click", function() {
      $(".wish-list-drop-down").hide()
    })
  })();
  return{toggleDropDown:function() {
    var a = $(".wish-list-drop-down");
    if(!$("#wishList").hasClass("not-active")) {
      if(a.length) {
        a.is(":visible") ? a.hide() : a.show()
      }else {
        if(!Kharma.wishList) {
          Kharma.wishList = new Kharma.WishList
        }
        $("#header").append('<div class="wish-list-drop-down">');
        h()
      }
    }
  }}
};
Kharma.utils = Kharma.utils || {};
Kharma.utils.events = {onAddedToWishList:"onAddedToWishList", onDeletedFromWishList:"onDeletedFromWishList", onDownloadProgress:"onDownloadProgress", onLoginSuccessful:"onLoginSuccessful", onMixamoAnimationDownload:"onMixamoAnimationDownload", onPageLoadComplete:"onPageLoadComplete", onPageLoadStart:"onPageLoadStart", onPurchaseSuccessful:"onPurchaseSuccessful", onResultsLoaded:"onResultsLoaded", onUserLogin:"onUserLogin", onUserStateChange:"onUserStateChange", onWishList:"onWishList", onLanguageChange:"onLanguageChange"};
Kharma.Icons = {folder:"icons/folder.png", unity:"icons/scene.png", anim:"icons/animation.png", cubemap:"icons/cubemap.png", flare:"icons/flare.png", fontsettings:"icons/font.png", rendertexture:"icons/rendertexture.png", physicmaterial:"icons/physicmaterial.png", guiskin:"icons/guiskin.png", asset:"icons/terrain.png", projectsettings:"icons/GameManager@16.png", sbsar:"icons/SubstanceArchive@16.png", mat:"icons/material.png", prefab:"icons/prefab.png", ogg:"icons/audio.png", aif:"icons/audio.png", 
aiff:"icons/audio.png", wav:"icons/audio.png", mp3:"icons/audio.png", mod:"icons/audio.png", it:"icons/audio.png", s3m:"icons/audio.png", ext:"icons/audio.png", dds:"icons/default.png", fbx:"icons/model.png", mb:"icons/model.png", ma:"icons/model.png", max:"icons/model.png", jas:"icons/model.png", dae:"icons/model.png", dfx:"icons/model.png", obj:"icons/model.png", c4d:"icons/model.png", blend:"icons/model.png", "3ds":"icons/model.png", dll:"icons/monoscript.png", mov:"icons/movie.png", avi:"icons/movie.png", 
asf:"icons/movie.png", mpg:"icons/movie.png", mpeg:"icons/movie.png", mp4:"icons/movie.png", cginc:"icons/shader.png", shader:"icons/shader.png", txt:"icons/text.png", html:"icons/text.png", htm:"icons/text.png", xml:"icons/text.png", bytes:"icons/text.png", cs:"icons/script.png", js:"icons/script.png", boo:"icons/script.png", jpg:"icons/image.png", jpeg:"icons/image.png", tif:"icons/image.png", tiff:"icons/image.png", tga:"icons/image.png", gif:"icons/image.png", png:"icons/image.png", psd:"icons/image.png", 
bmp:"icons/image.png", iff:"icons/image.png", pict:"icons/image.png", pic:"icons/image.png", pct:"icons/image.png", exr:"icons/image.png", ttf:"icons/font.png", dfont:"icons/font.png", otf:"icons/font.png"};
Kharma.utils.IframeTransport = function() {
  return{createForm:function(g, h, a) {
    $("#" + g + "Id").remove();
    $("body").append($("<iframe/>").attr("name", g).attr("id", g + "Id").attr("src", "templates/iframe/" + h + ".html").attr("style", "width: 500px; height: 740px; position: absolute; left: 0; top: 31px;z-index: 10000; display: none;").one("load", a))
  }, prepareFormData:function(g, h, a, d) {
    var c = $(Kharma.utils.windowWrapper.frames[h].document.getElementById(a));
    c.empty();
    c.attr("action", g);
    $.each(d, function(a, b) {
      c.append($("<input/>").attr("type", "text").attr("name", a).attr("value", b))
    })
  }}
};
Kharma.utils = Kharma.utils || {};
Kharma.utils.WindowWrapper = function() {
  return{frames:window.frames, hasProperty:function(g) {
    window.hasOwnProperty(g)
  }, history:{hasHistory:function() {
    return window.history && window.history.pushState ? !0 : !1
  }, go:function(g) {
    window.history.go(g)
  }, replaceState:function(g, h, a) {
    window.history.replaceState(g, h, a)
  }}, innerWidth:function() {
    return window.innerWidth
  }, location:{getHash:function() {
    return window.location.hash
  }, getHref:function() {
    return window.location.href
  }, getHost:function() {
    return window.location.host
  }, getOrigin:function() {
    return window.location.origin
  }, getPathName:function() {
    return window.location.pathname
  }, getProtocol:function() {
    return window.location.protocol
  }, reload:function() {
    window.location.reload()
  }, replace:function(g) {
    window.location.replace(g)
  }, setHash:function(g) {
    window.location.hash = g
  }, setHref:function(g) {
    window.location.href = g
  }}, navigator:{appVersion:window.navigator.appVersion, userAgent:window.navigator.userAgent}, onhashchange:function(g) {
    $(window).on("hashchange", g)
  }, onError:function(g) {
    window.onerror = g
  }, onResize:function() {
    window.onresize = function() {
      var g = Kharma.history.getCurrentPage();
      if(g.onResize instanceof Function) {
        g.onResize()
      }
    }
  }, open:function(g) {
    window.open(g)
  }}
};
Kharma.Init = function(g) {
  var h, a, d, c, e;
  e = function() {
    d();
    a();
    if(!Kharma.unityContext) {
      Kharma.unityContext = new Kharma.UnityContext
    }
    Kharma.unityContext.isEnabled(function(a) {
      if(a) {
        window.context = Kharma.unityContext
      }
      if(!Kharma.session) {
        Kharma.session = new Kharma.Session
      }
      if(!Kharma.layoutHelper) {
        Kharma.layoutHelper = new Kharma.LayoutHelper
      }
      if(!Kharma.history) {
        Kharma.history = new Kharma.History
      }
      if(!Kharma.toolbar) {
        Kharma.toolbar = Kharma.unityEditor.isEditor() ? new Kharma.UI.Toolbar : new Kharma.UI.BrowserToolbar
      }
      Kharma.io || h();
      if(!Kharma.router) {
        Kharma.router = new Kharma.Router
      }
      if(!Kharma.login) {
        Kharma.login = new Kharma.Login(Kharma.unityEditor.isEditor() ? $("#header") : $())
      }
      if(!Kharma.ga) {
        Kharma.ga = new Kharma.GA
      }
      if(!Kharma.cart) {
        Kharma.cart = Kharma.cart || new Kharma.Cart
      }
      if(!Kharma.download) {
        Kharma.download = new Kharma.Download
      }
      if(!Kharma.downloadProgressTracker) {
        Kharma.downloadProgressTracker = new Kharma.DownloadProgressTracker
      }
      Kharma.router.dispatch(g)
    })
  };
  h = function() {
    Kharma.io = new Kharma.IO;
    Kharma.io.get = Kharma.io.buildIOWrapper({method:"get"});
    Kharma.io.post = Kharma.io.buildIOWrapper({method:"post"});
    Kharma.io.del = Kharma.io.buildIOWrapper({method:"delete", requestHeaders:{"X-HTTP-Method-Override":"DELETE"}});
    setInterval(Kharma.io.flushCacheExpired, Kharma.io.getCacheDefaultExpiryPeriod())
  };
  a = function() {
    if(!Kharma.sessionStorage) {
      Kharma.sessionStorage = Kharma.unityEditor.isEditor() ? $.isEmptyObject(new Kharma.Storage.UnityEditorSessionStorage) ? new Kharma.Storage.FallbackStorage : new Kharma.Storage.UnityEditorSessionStorage : new Kharma.Storage.HTML5SessionStorage
    }
    if(!Kharma.localStorage) {
      Kharma.localStorage = Kharma.unityEditor.isEditor() ? $.isEmptyObject(new Kharma.Storage.UnityEditorLocalStorage) ? new Kharma.Storage.FallbackStorage : new Kharma.Storage.UnityEditorLocalStorage : new Kharma.Storage.HTML5LocalStorage
    }
  };
  d = function() {
    if(Kharma.unityEditor.isEditor() && Kharma.utils.windowWrapper.location.getHref().indexOf("only_to_be_used_for_development.html") === -1) {
      window.oncontextmenu = function() {
        return!1
      }
    }
  };
  c = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\/5.1/)
  };
  (function() {
    if(!Kharma.utils.windowWrapper) {
      Kharma.utils.windowWrapper = new Kharma.utils.WindowWrapper
    }
    Kharma.helper.loadLanguage("en-US", function() {
      if(!Kharma.errorHandler) {
        Kharma.errorHandler = new Kharma.ErrorHandler
      }
      if(!Kharma.errorsHelper) {
        Kharma.errorsHelper = new Kharma.ErrorsHelper
      }
      if(!Kharma.addressHelper) {
        Kharma.addressHelper = new Kharma.AddressHelper
      }
      if(!Kharma.assetStore) {
        Kharma.assetStore = new Kharma.AssetStore
      }
      if(c()) {
        Kharma.unityEditor ? e() : Kharma.unityEditor = new Kharma.UnityEditor(function() {
          e()
        })
      }else {
        if(!Kharma.unityEditor) {
          Kharma.unityEditor = new Kharma.UnityEditor
        }
        e()
      }
    })
  })()
};
$.address.change(function(g) {
  Kharma.router ? Kharma.router.dispatch(g) : new Kharma.Init(g)
});
(function() {
  var g = Handlebars.template, h = Handlebars.templates = Handlebars.templates || {};
  h.accountPage = g({"1":function() {
    return""
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div class="head">\n        <h2>' + f((b = (b = d.credits || (a != null ? a.credits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"credits", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body credits">\n        <div class="credits-info">\n            <p>' + f((b = (b = d.balance || (a != null ? a.balance : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"balance", hash:{}, data:e}) : b)) + ':</p>\n            <p class="amount">' + f((b = 
    (b = d.creditsAmount || (a != null ? a.creditsAmount : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"creditsAmount", hash:{}, data:e}) : b)) + "</p>\n        </div>\n    </div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = this.escapeExpression, j = d.blockHelperMissing, k = '<section id="account" class="section header-box">\n    <div class="head user-name-header">\n        <h2 class="user-name">' + h((b = (b = d.userName || (a != null ? a.userName : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"userName", hash:{}, data:e}) : b)) + '</h2>\n        <div class="icon"></div>\n    </div>\n    <div class="body user">\n        <a href="http://gravatar.com" target="_blank" title="' + 
    h((b = (b = d.gravatar || (a != null ? a.gravatar : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"gravatar", hash:{}, data:e}) : b)) + '"><img class="bioimage"></a>\n        <p class="bio">', c = (d.formattedBio || a && a.formattedBio || g).call(a, a != null ? a.data : a, {name:"formattedBio", hash:{}, data:e});
    c != null && (k += c);
    k += '</p>\n        <div class="icon"></div>\n    </div>\n    <div class="head billing-address">\n        <h2>' + h((b = (b = d.billingAddress || (a != null ? a.billingAddress : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"billingAddress", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body billing-address loading">\n        <div class="billing-address-info">\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            ';
    c = (b = (b = d.address || (a != null ? a.address : a)) != null ? b : g, f = {name:"address", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.address || (c = j.call(a, c, f));
    c != null && (k += c);
    k += '\n        </div>\n        <div class="icon"></div>\n    </div>\n    <div class="head change-password">\n        <h2>' + h((b = (b = d.changePassword || (a != null ? a.changePassword : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"changePassword", hash:{}, data:e}) : b)) + '</h2>\n        <div class="icon"></div>\n    </div>\n';
    c = d["if"].call(a, a != null ? a.creditsBalance : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '    <div class="head voucher">\n        <h2>' + h((b = (b = d.redeemVoucher || (a != null ? a.redeemVoucher : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"redeemVoucher", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body redeem-voucher">\n        <div>\n            <form id="voucher">\n                <input class=\'input\' placeholder=\'' + h((b = (b = d.redeemVoucherPlaceholder || (a != null ? a.redeemVoucherPlaceholder : a)) != null ? b : g, typeof b === 
    "function" ? b.call(a, {name:"redeemVoucherPlaceholder", hash:{}, data:e}) : b)) + "'>\n            </form>\n        </div>\n        <button>" + h((b = (b = d.submit || (a != null ? a.submit : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"submit", hash:{}, data:e}) : b)) + '</button>\n    </div>\n    <div class="head">\n        <h2>' + h((b = (b = d.expressPurchase || (a != null ? a.expressPurchase : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"expressPurchase", 
    hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body express-purchase">\n        <div class="express-purchase-info">\n            ';
    c = (b = (b = d.creditCard || (a != null ? a.creditCard : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"creditCard", hash:{}, data:e}) : b);
    c != null && (k += c);
    return k + '\n            <p class="amount">' + h((b = (b = d.creditCardNumber || (a != null ? a.creditCardNumber : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"creditCardNumber", hash:{}, data:e}) : b)) + "</p>\n        </div>\n        <button>" + h((b = (b = d.disable || (a != null ? a.disable : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"disable", hash:{}, data:e}) : b)) + '</button>\n    </div>\n    <div class="head">\n        <h2>' + h((b = (b = d.newsletter || 
    (a != null ? a.newsletter : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"newsletter", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body newsletter"></div>\n    <div class="head localization">\n        <h2>' + h((b = (b = d.language || (a != null ? a.language : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"language", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body language localization">\n        <p></p>\n        <button>' + 
    h((b = (b = d.changeLanguage || (a != null ? a.changeLanguage : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"changeLanguage", hash:{}, data:e}) : b)) + "</button>\n    </div>\n</section>"
  }, useData:!0});
  h.address = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = "<p>" + h((f = (f = d.organization || (a != null ? a.organization : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"organization", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.firstname || (a != null ? a.firstname : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"firstname", hash:{}, data:e}) : f)) + " " + h((f = (f = d.lastname || (a != null ? a.lastname : a)) != null ? f : g, typeof f === "function" ? 
    f.call(a, {name:"lastname", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.address || (a != null ? a.address : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"address", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.address2 || (a != null ? a.address2 : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"address2", hash:{}, data:e}) : f)) + "</p>\n<p>", c = d["if"].call(a, a != null ? a.state : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.noop, 
    data:e});
    c != null && (j += c);
    j += "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.state : a, {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.program(6, e, b), data:e});
    c != null && (j += c);
    j += "</p>\n<p>" + h((f = (f = d.country_name || (a != null ? a.country_name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"country_name", hash:{}, data:e}) : f)) + "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.phone : a, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.vat_no : a, {name:"if", hash:{}, fn:this.program(10, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "</p>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.city || (a != null ? a.city : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b))
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.state || (a != null ? a.state : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"state", hash:{}, data:e}) : b)) + " " + f((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b))
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b)) + " " + f((b = (b = d.city || (a != null ? a.city : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b))
  }, "8":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return g(c(b[2] != null ? b[2].phoneLabel : b[2], a)) + " " + g((f = (f = d.phone || (a != null ? a.phone : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"phone", hash:{}, data:e}) : f))
  }, "10":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return g(c(b[2] != null ? b[2].vatLabel : b[2], a)) + " " + g((f = (f = d.vat_no || (a != null ? a.vat_no : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"vat_no", hash:{}, data:e}) : f))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.address || (a != null ? a.address : a)) != null ? f : h, g = {name:"address", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.address || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.addressForm = g({"1":function() {
    return"*"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<form method="post" action="#">\n    <div class="req">\n        <div class="label">' + g((b = (b = d.firstName || (a != null ? a.firstName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"firstName", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="firstname" id="firstname" placeholder=""/>*\n    </div>\n    <div class="req">\n        <div class="label">' + g((b = (b = d.lastName || 
    (a != null ? a.lastName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"lastName", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="lastname" id="lastname" placeholder=""/>*\n    </div>\n    <div>\n        <div class="label">' + g((b = (b = d.organization || (a != null ? a.organization : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"organization", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="organization" id="organization" placeholder=""/>\n    </div>\n    <div class="req">\n        <div class="label">' + 
    g((b = (b = d.address1 || (a != null ? a.address1 : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"address1", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="address" id="address" placeholder=""/>*\n    </div>\n    <div class="label">' + g((b = (b = d.address2 || (a != null ? a.address2 : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"address2", hash:{}, data:e}) : b)) + '</div>\n    <input type="text" class="precallout" name="address2" id="address2" placeholder=""/>\n    <br/>\n\n    <div class="zip req">\n        <div class="label">' + 
    g((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="zip" id="zip" placeholder=""/>*\n    </div>\n    <div class="req">\n        <div class="label">' + g((b = (b = d.city || (a != null ? a.city : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="city" id="city" placeholder=""/>*\n    </div>\n    <div class="country req">\n        <div class="label">' + 
    g((b = (b = d.country || (a != null ? a.country : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"country", hash:{}, data:e}) : b)) + '</div>\n        <select class="precallout" name="country" id="country">\n            <option>' + g((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + '</option>\n        </select>*\n    </div>\n    <div class="state">\n        <div class="label">' + 
    g((b = (b = d.state || (a != null ? a.state : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"state", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="state" id="state" placeholder=""/>*\n    </div>\n    <div class="label">' + g((b = (b = d.phoneNumber || (a != null ? a.phoneNumber : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"phoneNumber", hash:{}, data:e}) : b)) + '</div>\n    <input type="text" class="precallout" name="phone" id="phone" placeholder=""/><br/>\n    <div class="vat">\n        <div class="label">' + 
    g((b = (b = d.vat || (a != null ? a.vat : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"vat", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="vat_no" id="vat_no" placeholder=""/>\n        ', c = d["if"].call(a, a != null ? a.lockAddressFields : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '\n    </div>\n    <div class="label star">* ' + g((b = (b = d.required || (a != null ? a.required : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"required", hash:{}, data:e}) : b)) + "</div>\n</form>\n"
  }, useData:!0});
  h.adminLogHistory = g({"1":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "\n<tr><th>" + g((b = (b = d.created || (a != null ? a.created : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"created", hash:{}, data:e}) : b)) + "</th><th>" + g((b = (b = d.status || (a != null ? a.status : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "</th><th>", c = d["if"].call(a, a != null ? a.user : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.program(4, 
    e), data:e});
    c != null && (h += c);
    return h + "</th></tr>\n<tr><td colspan='3'>" + g((b = (b = d.message || (a != null ? a.message : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b)) + "</td></tr>\n"
  }, "2":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.user : a) != null ? d.email : d, a))
  }, "4":function() {
    return"-"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    c = "<table class='package-log'>";
    a = d.each.call(a, a != null ? a.entries : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</table>"
  }, useData:!0});
  h.assetHierarchy = g({"1":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "    <div data-guid='" + g((b = (b = d.guid || (a != null ? a.guid : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"guid", hash:{}, data:e}) : b)) + "' style='padding-left: " + g((d.padding || a && a.padding || f).call(a, a != null ? a.level : a, {name:"padding", hash:{}, data:e})) + "' ", c = d["if"].call(a, a != null ? a.folder : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + ">\n        <img height='16' width='16' src=" + g((b = (b = d.assetHierarchyIcon || (a != null ? a.assetHierarchyIcon : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"assetHierarchyIcon", hash:{}, data:e}) : b)) + ">\n        " + g((b = (b = d.label || (a != null ? a.label : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "\n    </div>\n"
  }, "2":function() {
    return'class="folder"'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    a = d.each.call(a, a != null ? a.assets : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, useData:!0});
  h.browserMenu = g({"1":function() {
    return" disabled"
  }, "3":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "                    <h2>" + g((b = (b = d.username || (a != null ? a.username : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"username", hash:{}, data:e}) : b)) + '</h2>\n                    <p><a href="#!/account">' + g((b = (b = d.editAccount || (a != null ? a.editAccount : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAccount", hash:{}, data:e}) : b)) + '</a></p>\n                    <small class="border-bottom margin">' + 
    g((b = (b = d.editAccountText || (a != null ? a.editAccountText : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAccountText", hash:{}, data:e}) : b)) + '</small>\n                    <p><a href="#!/account/transactions">' + g((b = (b = d.creditCardPayPalTransactions || (a != null ? a.creditCardPayPalTransactions : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"creditCardPayPalTransactions", hash:{}, data:e}) : b)) + '</a></p>\n                    <p><a href="#!/account/transactions/credits">' + 
    g((b = (b = d.transactions || (a != null ? a.transactions : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"transactions", hash:{}, data:e}) : b)) + '</a></p>\n                    <p><a href="#!/account/licenses">' + g((b = (b = d.licenses || (a != null ? a.licenses : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"licenses", hash:{}, data:e}) : b)) + '</a></p>\n                    <p class="border-bottom margin"><a href="#!/user/' + g((b = (b = d.id || (a != null ? 
    a.id : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.publicProfile || (a != null ? a.publicProfile : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publicProfile", hash:{}, data:e}) : b)) + "</a></p>\n", c = d["if"].call(a, a != null ? a.level11Member : a, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e});
    c != null && (h += c);
    c = d["if"].call(a, a != null ? a.admin : a, {name:"if", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    c != null && (h += c);
    c = d["if"].call(a, a != null ? a.servers : a, {name:"if", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '                    <a id="unav-logout" class="gray-btn">' + g((b = (b = d.logout || (a != null ? a.logout : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"logout", hash:{}, data:e}) : b)) + "</a>\n"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                        <p class="border-bottom"><a href="#!/level11">' + f((b = (b = d.level11 || (a != null ? a.level11 : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"level11", hash:{}, data:e}) : b)) + "</a></p>\n"
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                        <p><a id="unav-admin">' + f((b = (b = d.activateAdmin || (a != null ? a.activateAdmin : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"activateAdmin", hash:{}, data:e}) : b)) + '</a></p>\n                        <p><a id="unav-vetting">' + f((b = (b = d.showVetting || (a != null ? a.showVetting : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"showVetting", hash:{}, data:e}) : b)) + '</a></p>\n                        <p class="border-bottom margin"><a id="unav-sim">' + 
    f((b = (b = d.enableSim || (a != null ? a.enableSim : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"enableSim", hash:{}, data:e}) : b)) + "</a></p>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                        <p><a href="https://kharma.assetstore.unity3d.com">' + f((b = (b = d.prodServer || (a != null ? a.prodServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"prodServer", hash:{}, data:e}) : b)) + '</a></p>\n                        <p><a href="https://kharma-qa.assetstore.unity3d.com/only_to_be_used_for_development.html">' + f((b = (b = d.qaServer || (a != null ? a.qaServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qaServer", 
    hash:{}, data:e}) : b)) + '</a></p>\n                        <p><a href="https://kharma-dev.assetstore.unity3d.com/only_to_be_used_for_development.html">' + f((b = (b = d.devServer || (a != null ? a.devServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"devServer", hash:{}, data:e}) : b)) + '</a></p>\n                        <p class="border-bottom margin"><a href="http://kharma-local.assetstore.unity3d.com/only_to_be_used_for_development.html">' + f((b = (b = d.localServer || 
    (a != null ? a.localServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"localServer", hash:{}, data:e}) : b)) + "</a></p>\n"
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <h2>" + f((b = (b = d.headline || (a != null ? a.headline : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"headline", hash:{}, data:e}) : b)) + '</h2>\n                    <small class="border-bottom margin">' + f((b = (b = d.intro || (a != null ? a.intro : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"intro", hash:{}, data:e}) : b)) + '</small>\n                    <a id="unav-login" class="blue-btn">' + f((b = (b = d.login || (a != 
    null ? a.login : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"login", hash:{}, data:e}) : b)) + '</a>\n                    <a class="gray-btn" target="_blank" href="https://accounts.unity3d.com/sign-up">' + f((b = (b = d.create || (a != null ? a.create : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"create", hash:{}, data:e}) : b)) + "</a>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div id="unav">\n    <header>\n        <div class="fill"></div>\n        <div class="shard"></div>\n        <div class="logo"><a href="' + g((b = (b = d.homeLink || (a != null ? a.homeLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"homeLink", hash:{}, data:e}) : b)) + '"></a></div>\n        <ul class="main-menu">\n            <li><a href="' + g((b = (b = d.unityLink || (a != null ? a.unityLink : a)) != null ? b : 
    f, typeof b === "function" ? b.call(a, {name:"unityLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.unity || (a != null ? a.unity : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"unity", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.industriesLink || (a != null ? a.industriesLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"industriesLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.industries || (a != null ? a.industries : 
    a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"industries", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.showcaseLink || (a != null ? a.showcaseLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"showcaseLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.showcase || (a != null ? a.showcase : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"showcase", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + 
    g((b = (b = d.learnLink || (a != null ? a.learnLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"learnLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.learn || (a != null ? a.learn : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"learn", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.communityLink || (a != null ? a.communityLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"communityLink", hash:{}, 
    data:e}) : b)) + '">' + g((b = (b = d.community || (a != null ? a.community : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"community", hash:{}, data:e}) : b)) + '</a></li>\n            <li class="last"><a href="' + g((b = (b = d.assetStoreLink || (a != null ? a.assetStoreLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"assetStoreLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.assetStore || (a != null ? a.assetStore : a)) != null ? b : f, typeof b === 
    "function" ? b.call(a, {name:"assetStore", hash:{}, data:e}) : b)) + '</a></li>\n        </ul>\n        <div class="unav-icons" id="unav-home"></div>\n        <div class="unav-icons', c = d.unless.call(a, a != null ? a.user : a, {name:"unless", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '" id="unav-pkg"></div>\n        <div class="unav-icons';
    c = d.unless.call(a, a != null ? a.user : a, {name:"unless", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '" id="cart"><div></div></div>\n        <div class="unav-icons';
    c = d.unless.call(a, a != null ? a.user : a, {name:"unless", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '" id="unav-wishlist"></div>\n        <div class="unav-user-icon"></div>\n        <div class="m-navbtn">\n            <div class="lines"></div>\n        </div>\n        <div class="search-icon"></div>\n        <div class="search-wrapper">\n            <form id="unavSearchForm">\n                <input type="text" class="search-input" name="search"/>\n                <input type="image" src="/images/blank.gif" class="search-icon" title="search" />\n            </form>\n        </div>\n        <div class="user-wrapper">\n            <div class="content" id="unav-user-menu">\n';
    c = d["if"].call(a, a != null ? a.user : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.program(10, e), data:e});
    c != null && (h += c);
    return h + '            </div>\n        </div>\n        <div class="sub-fill"></div>\n        <ul class="sub-menu">\n            <li><a href="' + g((b = (b = d.sellAssetsLink || (a != null ? a.sellAssetsLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"sellAssetsLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.sellAssets || (a != null ? a.sellAssets : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"sellAssets", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + 
    g((b = (b = d.blogLink || (a != null ? a.blogLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"blogLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.blog || (a != null ? a.blog : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"blog", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.servicePartnersLink || (a != null ? a.servicePartnersLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"servicePartnersLink", 
    hash:{}, data:e}) : b)) + '">' + g((b = (b = d.servicePartners || (a != null ? a.servicePartners : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"servicePartners", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.publisherLoginLink || (a != null ? a.publisherLoginLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisherLoginLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.publisherLogin || (a != null ? a.publisherLogin : 
    a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisherLogin", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + g((b = (b = d.level11Link || (a != null ? a.level11Link : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"level11Link", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.level11 || (a != null ? a.level11 : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"level11", hash:{}, data:e}) : b)) + '</a></li>\n            <li class="last"><a href="' + 
    g((b = (b = d.helpLink || (a != null ? a.helpLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"helpLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.help || (a != null ? a.help : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"help", hash:{}, data:e}) : b)) + '</a></li>\n            <li class="right"><a href="/en" lang="en-US" hreflang="en">English</a></li>\n            <li class="right"><a href="/jp" lang="ja-JP" hreflang="ja">\u65e5\u672c\u8a9e</a></li>\n            <li class="right"><a href="/kr" lang="ko-KR" hreflang="ko">\ud55c\uad6d\uc5b4</a></li>\n            <li class="right"><a href="/cn" lang="zh-CN" hreflang="cn">\u7b80\u4f53\u4e2d\u6587</a></li>\n        </ul>\n    </header>\n    <nav class="mobile-menu">\n        <div class="wrap">\n            <div class="unav-menu">\n                <h2>' + 
    g((b = (b = d.categories || (a != null ? a.categories : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"categories", hash:{}, data:e}) : b)) + '</h2>\n                <div id="unav-sidebar"></div>\n                <h2>' + g((b = (b = d.navigation || (a != null ? a.navigation : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"navigation", hash:{}, data:e}) : b)) + '</h2>\n                <ul>\n                    <li><a href="' + g((b = (b = d.homeLink || (a != null ? 
    a.homeLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"homeLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.home || (a != null ? a.home : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"home", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.unityLink || (a != null ? a.unityLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"unityLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.unity || 
    (a != null ? a.unity : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"unity", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.industriesLink || (a != null ? a.industriesLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"industriesLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.industries || (a != null ? a.industries : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"industries", hash:{}, data:e}) : 
    b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.showcaseLink || (a != null ? a.showcaseLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"showcaseLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.showcase || (a != null ? a.showcase : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"showcase", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.learnLink || (a != null ? a.learnLink : a)) != null ? 
    b : f, typeof b === "function" ? b.call(a, {name:"learnLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.learn || (a != null ? a.learn : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"learn", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.communityLink || (a != null ? a.communityLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"communityLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.community || (a != null ? 
    a.community : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"community", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + g((b = (b = d.assetStoreLink || (a != null ? a.assetStoreLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"assetStoreLink", hash:{}, data:e}) : b)) + '" class="active-trail">' + g((b = (b = d.assetStore || (a != null ? a.assetStore : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"assetStore", 
    hash:{}, data:e}) : b)) + '</a>\n                        <ul class="secondary-menu">\n                            <li class="active-trail first active"><a href="' + g((b = (b = d.sellAssetsLink || (a != null ? a.sellAssetsLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"sellAssetsLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.sellAssets || (a != null ? a.sellAssets : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"sellAssets", hash:{}, data:e}) : b)) + 
    '</a></li>\n                            <li><a href="' + g((b = (b = d.blogLink || (a != null ? a.blogLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"blogLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.blog || (a != null ? a.blog : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"blog", hash:{}, data:e}) : b)) + '</a></li>\n                            <li><a href="' + g((b = (b = d.servicePartnersLink || (a != null ? a.servicePartnersLink : a)) != null ? 
    b : f, typeof b === "function" ? b.call(a, {name:"servicePartnersLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.servicePartners || (a != null ? a.servicePartners : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"servicePartners", hash:{}, data:e}) : b)) + '</a></li>\n                            <li><a href="' + g((b = (b = d.publisherLoginLink || (a != null ? a.publisherLoginLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisherLoginLink", hash:{}, 
    data:e}) : b)) + '">' + g((b = (b = d.publisherLogin || (a != null ? a.publisherLogin : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisherLogin", hash:{}, data:e}) : b)) + '</a></li>\n                            <li><a href="' + g((b = (b = d.level11Link || (a != null ? a.level11Link : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"level11Link", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.level11 || (a != null ? a.level11 : a)) != null ? b : f, typeof b === 
    "function" ? b.call(a, {name:"level11", hash:{}, data:e}) : b)) + '</a></li>\n                            <li class="last"><a href="' + g((b = (b = d.helpLink || (a != null ? a.helpLink : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"helpLink", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.help || (a != null ? a.help : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"help", hash:{}, data:e}) : b)) + '</a></li>\n                        </ul>\n                    </li>\n                </ul>\n                <div class="lang">\n                    <h2>' + 
    g((b = (b = d.language || (a != null ? a.language : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"language", hash:{}, data:e}) : b)) + '</h2>\n                    <ul>\n                        <li><a href="/en" lang="en-US" hreflang="en">English</a></li>\n                        <li><a href="/jp" lang="ja-JP" hreflang="ja">\u65e5\u672c\u8a9e</a></li>\n                        <li><a href="/kr" lang="ko-KR" hreflang="ko">\ud55c\uad6d\uc5b4</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n'
  }, useData:!0});
  h.categoryPage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="category" class="category-page">\n    <section id="featured" class="section">\n    <h1 id="cattitle">' + f((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + '</h1>\n        <div class="blocked quarter first feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter second feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter third feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter last feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        </section>\n    </section>\n</div>'
  }, useData:!0});
  h.comments = g({"1":function(a, d, c, e) {
    var b, c = '    <div class="more">\n        <a class="show-all"></a>\n';
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.can_comment : b, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c + "    </div>\n"
  }, "2":function(a, d, c, e) {
    var b, c = "";
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.has_commented : b, {name:"unless", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <button class="write-review">' + f((b = (b = d.writeReview || (a != null ? a.writeReview : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"writeReview", hash:{}, data:e}) : b)) + "</button>\n"
  }, "5":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.can_comment : b, {name:"if", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "6":function(a, d, c, e) {
    var b, c = "";
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.has_commented : b, {name:"unless", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "7":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <div class="more">\n                <button class="write-review">' + f((b = (b = d.writeReview || (a != null ? a.writeReview : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"writeReview", hash:{}, data:e}) : b)) + "</button>\n            </div>\n"
  }, "9":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.comments : a, {name:"each", hash:{}, fn:this.program(10, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "10":function(a, d, c, e, b) {
    var f, g, h = this.lambda, j = this.escapeExpression, k = d.helperMissing, n = d.blockHelperMissing, l = '        <div class="comment-block">\n            <a class="reportAbuse" rel="external" title="' + j(h(b[2] != null ? b[2].reportAbuse : b[2], a)) + '" data-id=' + j((f = (f = d.id || (a != null ? a.id : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + "></a>\n", c = (d.isEditable || a && a.isEditable || k).call(a, a, b[2] != null ? b[2].data : 
    b[2], {name:"isEditable", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += '            <div class="comment-body ';
    c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += " ";
    c = (d.isEditable || a && a.isEditable || k).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += '">\n                <div class="user">\n                    <a href="#!/user/' + j(h((c = a != null ? a.user : a) != null ? c.id : c, a)) + '"><img src="' + j(h((c = a != null ? a.user : a) != null ? c.icon : c, a)) + '"></a>\n                    <div><a href="#!/user/' + j(h((c = a != null ? a.user : a) != null ? c.id : c, a)) + '">' + j(h((c = a != null ? a.user : a) != null ? c.name : c, a)) + '</a></div>\n                </div>\n                <div class="comment">\n                    <div class="date"><p>' + 
    j((d.formattedDate || a && a.formattedDate || k).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + "</p></div>\n                    <h2>" + j((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + "</h2>\n";
    c = (f = (f = d.is_helpful || (a != null ? a.is_helpful : a)) != null ? f : k, g = {name:"is_helpful", hash:{}, fn:this.program(20, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.is_helpful || (c = n.call(a, c, g));
    c != null && (l += c);
    l += '                    <p class="comment-text">';
    c = (f = (f = d.text || (a != null ? a.text : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"text", hash:{}, data:e}) : f);
    c != null && (l += c);
    l += "</p>\n";
    c = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += "                </div>\n";
    c = (d.reviewHelpful || a && a.reviewHelpful || k).call(a, a, {name:"reviewHelpful", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += "            </div>\n";
    c = d.each.call(a, a != null ? a.replies : a, {name:"each", hash:{}, fn:this.program(26, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    return l + "        </div>\n"
  }, "11":function(a, d, c, e, b) {
    var f = d.helperMissing, g = '            <div class="body-buttons">\n', c = (d.canReply || a && a.canReply || f).call(a, b[1] != null ? b[1].replies : b[1], b[3] != null ? b[3].data : b[3], {name:"canReply", hash:{}, fn:this.program(12, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    c = (d.isAdmin || a && a.isAdmin || f).call(a, a != null ? a.editable : a, {name:"isAdmin", hash:{}, fn:this.program(14, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "            </div>\n"
  }, "12":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <a href="#" class="reply-review" data-id=' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(h(b[3] != null ? b[3].replyButton : b[3], a)) + "</a>\n"
  }, "14":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <a href="#" class="edit-review" data-id=' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(h(b[3] != null ? b[3].edit : b[3], a)) + '</a>\n                    <a href="#" class="delete-review" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">' + g(h(b[3] != null ? b[3].deleteButton : 
    b[3], a)) + "</a>\n"
  }, "16":function() {
    return"admin"
  }, "18":function() {
    return"editable"
  }, "20":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                        <div class='helpful'>(" + b((d.helpfulReview || a && a.helpfulReview || c).call(a, a, {name:"helpfulReview", hash:{}, data:e})) + ")</div>\n"
  }, "22":function(a, d, c, e) {
    var b = d.helperMissing, c = "                        ", a = (d.ratingUI || a && a.ratingUI || b).call(a, 1, a != null ? a.rating : a, a != null ? a.showCount : a, {name:"ratingUI", hash:{}, data:e});
    a != null && (c += a);
    return c + "\n"
  }, "24":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return"                    <div class='opinion'>" + g(c(b[2] != null ? b[2].isHelpful : b[2], a)) + "\n                        <button class='yes' data-id=" + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(c(b[2] != null ? b[2].yes : b[2], a)) + "</button>\n                        <button class='no' data-id=" + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, 
    {name:"id", hash:{}, data:e}) : f)) + ">" + g(c(b[2] != null ? b[2].no : b[2], a)) + "</button>\n                    </div>\n"
  }, "26":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = '                <div class="reply-block">\n', c = (d.isEditable || a && a.isEditable || g).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(27, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '                    <div class="comment-body ';
    c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += " ";
    c = (d.isEditable || a && a.isEditable || g).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '">\n                        <div class="comment">\n                            <h2 class="comment">' + h((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + '\n                                <div class="date"><p>' + h((d.formattedDate || a && a.formattedDate || g).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + '</p></div>\n                            </h2>\n                            <p class="comment-text">';
    c = (f = (f = d.text || (a != null ? a.text : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"text", hash:{}, data:e}) : f);
    c != null && (j += c);
    return j + "</p>\n                        </div>\n                    </div>\n                </div>\n"
  }, "27":function(a, d, c, e, b) {
    var f = this.lambda, g = this.escapeExpression, c = d.helperMissing, f = '                        <div class="body-buttons">\n                            <a href="#" class="reply-reply" data-id=' + g(f(b[1] != null ? b[1].id : b[1], a)) + ">Reply</a>\n", a = (d.isAdmin || a && a.isAdmin || c).call(a, a != null ? a.editable : a, {name:"isAdmin", hash:{}, fn:this.program(28, e, b), inverse:this.noop, data:e});
    a != null && (f += a);
    return f + "                        </div>\n"
  }, "28":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                                <a href="#" class="edit-reply" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">Edit</a>\n                                <a href="#" class="delete-reply" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">' + g(h(b[4] != null ? b[4].deleteButton : b[4], a)) + 
    "</a>\n"
  }, "30":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div style="padding: 1em;">' + f((b = (b = d.noReviews || (a != null ? a.noReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noReviews", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.data : a) != null ? f.count : f, ">", 3, {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(5, e, b), data:e});
    f != null && (g += f);
    f = d["if"].call(a, (f = a != null ? a.comments : a) != null ? f.length : f, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(30, e, b), data:e});
    f != null && (g += f);
    return g
  }, useData:!0, useDepths:!0});
  h.contentPage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="contentpage">\n    <section class="main-content">\n        <section id="contentoverview" class="section">\n            <div itemscope itemtype="http://schema.org/Product">\n                <h1 itemprop="name">' + f((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + '</h1>\n                <div class="blocked">\n                    <div class="item">\n                        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section id="contentaside" class="section">\n            <div class="blocked full">\n                <div class="item">&nbsp;</div>\n            </div>\n        </section>\n        <section id="packageContents" class="section hidden">\n            <div id="packageContentsBox" class="header-box">\n                <div class="head">\n                    <div style="float: right;" class="head-buttons">\n                        <a id="expandPackageContents">' + 
    f((b = (b = d.expand || (a != null ? a.expand : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"expand", hash:{}, data:e}) : b)) + "</a>\n                    </div>\n                    <h2>" + f((b = (b = d.packageContents || (a != null ? a.packageContents : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"packageContents", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                    <div id="leftpackage">\n                        <div class="vscroll" id="assettree">\n                            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                        </div>\n                    </div>\n                    <div id="assetview"></div>\n                </div>\n            </div>\n        </section>\n        <section id="recommendations" class="section" style="display: none">\n            <div id="packageRecommendationsBox" class="header-box">\n                <div class="head">\n                    <h2>' + 
    f((b = (b = d.recommendations || (a != null ? a.recommendations : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"recommendations", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                    <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                </div>\n            </div>\n        </section>\n        <section id="contentcomments" class="hidden">\n            <div id="reviewBox" class="header-box">\n                <div class="head">\n                    <h2>' + 
    f((b = (b = d.userReviews || (a != null ? a.userReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"userReviews", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                   <div style="padding: 1em;"><span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span></div>\n                </div>\n            </div>\n        </section>\n    </section>\n</div>'
  }, useData:!0});
  h.contentPageFull = g({"1":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, j = "", e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    e != null && (j += e);
    return j
  }, "2":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression, c = '    <div class="details">\n        <span>' + c(d(b[2] != null ? b[2].categoryLabel : b[2], a)) + ': </span><a href="#!/category/' + c(d((f = a != null ? a.category : a) != null ? f.tree_id : f, a)) + '/page/1/sortby/popularity" class="livelink detaillink">' + c(d((f = a != null ? a.category : a) != null ? f.label : f, a)) + "</a><br>\n        <span>" + c(d(b[2] != null ? b[2].publisherLabel : b[2], a)) + ': </span><a href="#!/publisher/' + 
    c(d((f = a != null ? a.publisher : a) != null ? f.id : f, a)) + '" class="livelink detaillink">' + c(d((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + "</a><br>\n        <h2>";
    f = d(b[1] != null ? b[1].message : b[1], a);
    f != null && (c += f);
    return c + "</h2>\n    </div>\n"
  }, "4":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, j = "", e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    e != null && (j += e);
    return j
  }, "5":function(a, d, c, e, b) {
    var f, c = "";
    f = d["if"].call(a, (f = a != null ? a.flags : a) != null ? f.external_link : f, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(8, e, b), data:e});
    f != null && (c += f);
    f = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(37, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += '        <p class="details linkbar"></p>\n';
    f = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(43, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += '        <p class="fulldescription vscroll">\n';
    f = d["if"].call(a, a != null ? a.min_unity_version : a, {name:"if", hash:{}, fn:this.program(46, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c + "        </p>\n"
  }, "6":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return'            <p class="details">\n                <span>' + c(d(b[2] != null ? b[2].categoryLabel : b[2], a)) + ': </span><a href="#!/category/' + c(d((f = b[1] != null ? b[1].category : b[1]) != null ? f.tree_id : f, a)) + '/page/1/sortby/popularity" class="livelink detaillink">' + c(d((f = b[1] != null ? b[1].category : b[1]) != null ? f.label : f, a)) + "</a><br />\n                <span>" + c(d(b[2] != null ? b[2].publisherLabel : b[2], a)) + ': </span><a href="#!/publisher/' + c(d((f = 
    b[1] != null ? b[1].publisher : b[1]) != null ? f.id : f, a)) + '" class="livelink detaillink">' + c(d((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.label : f, a)) + "</a><br />\n                <span>" + c(d(b[2] != null ? b[2].urlLabel : b[2], a)) + ': </span><a href="' + c(d(b[1] != null ? b[1].url : b[1], a)) + '" target="_blank">' + c(d(b[1] != null ? b[1].url : b[1], a)) + "</a><br />\n            </p>\n"
  }, "8":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing, j = '            <div class="details">\n                <span>' + g(c(b[2] != null ? b[2].categoryLabel : b[2], a)) + ': </span><a href="#!/category/' + g(c((f = b[1] != null ? b[1].category : b[1]) != null ? f.tree_id : f, a)) + '/page/1/sortby/popularity" class="livelink detaillink">' + g(c((f = b[1] != null ? b[1].category : b[1]) != null ? f.label : f, a)) + "</a><br />\n                <span>" + g(c(b[2] != null ? b[2].publisherLabel : 
    b[2], a)) + ': </span><a href="#!/publisher/' + g(c((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.id : f, a)) + '" class="livelink detaillink">' + g(c((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.label : f, a)) + "</a><br />\n                <span>" + g(c(b[2] != null ? b[2].ratingLabel : b[2], a)) + ": </span>";
    f = (d.ratingUI || a && a.ratingUI || h).call(a, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.count : f, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.average : f, b[2] != null ? b[2].ratingCount : b[2], !0, !1, {name:"ratingUI", hash:{}, data:e});
    f != null && (j += f);
    j += "<br>\n                ";
    f = (d.ifCond || a && a.ifCond || h).call(a, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.user : f, ">", "0", {name:"ifCond", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    j += "\n\n                <span>" + g(c(b[3] != null ? b[3].priceLabel : b[3], a)) + ": </span>";
    f = d["if"].call(a, b[1] != null ? b[1].price_original : b[1], {name:"if", hash:{}, fn:this.program(11, e, b), inverse:this.program(13, e, b), data:e});
    f != null && (j += f);
    j += "<span>";
    f = d["if"].call(a, b[2] != null ? b[2].level11 : b[2], {name:"if", hash:{}, fn:this.program(17, e, b), inverse:this.program(20, e, b), data:e});
    f != null && (j += f);
    j += "</span><br>\n";
    f = d["if"].call(a, b[2] != null ? b[2].priceUpgrade : b[2], {name:"if", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    j += "            </div>\n";
    f = d["if"].call(a, b[2] != null ? b[2].level11 : b[2], {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(34, e, b), data:e});
    f != null && (j += f);
    return j
  }, "9":function(a, d, c, e, b) {
    var f, g = this.lambda, h = this.escapeExpression, c = d.helperMissing, g = "<span>" + h(g(b[3] != null ? b[3].userRatingLabel : b[3], a)) + ": </span>";
    f = (d.ratingUI || a && a.ratingUI || c).call(a, 1, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.user : f, !1, !1, !1, {name:"ratingUI", hash:{}, data:e});
    f != null && (g += f);
    return g + "<br>"
  }, "11":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return'<span class="original-price">' + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[1] != null ? b[1].price_original : b[1], {name:"formattedPrice", hash:{}, data:e})) + "</span>"
  }, "13":function(a, d, c, e, b) {
    a = d["if"].call(a, b[3] != null ? b[3].level11 : b[3], {name:"if", hash:{}, fn:this.program(14, e, b), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, "14":function(a, d, c, e, b) {
    a = d["if"].call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"if", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, "15":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return'<span class="original-price">' + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[1] != null ? b[1].price : b[1], {name:"formattedPrice", hash:{}, data:e})) + "</span>"
  }, "17":function(a, d, c, e, b) {
    a = d["if"].call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"if", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, "18":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"formattedPrice", hash:{}, data:e}))
  }, "20":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[1] != null ? b[1].price : b[1], {name:"formattedPrice", hash:{}, data:e}))
  }, "22":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"                    <span>" + c(d(b[3] != null ? b[3].priceUpgradeLabel : b[3], a)) + ": </span><span>" + c(d(b[3] != null ? b[3].priceUpgrade : b[3], a)) + "</span><br>\n"
  }, "24":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"if", hash:{}, fn:this.program(25, e, b), inverse:this.program(32, e, b), data:e});
    a != null && (c += a);
    return c
  }, "25":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.lambda, h = this.escapeExpression, j = '                    <div id="saleLevel11" ';
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = b[2] != null ? b[2].price_level11member : b[2]) != null ? f.USD : f, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(26, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    j += '>\n                        <div class="percentage">';
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = b[2] != null ? b[2].price_level11member : b[2]) != null ? f.USD : f, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(28, e, b), inverse:this.program(30, e, b), data:e});
    f != null && (j += f);
    return j + '</div>\n                        <div class="before">' + h(g(b[4] != null ? b[4].saleBeforeLabel : b[4], a)) + ": " + h((d.formattedPrice || a && a.formattedPrice || c).call(a, b[2] != null ? b[2].price : b[2], {name:"formattedPrice", hash:{}, data:e})) + '</div>\n                        <div class="now">' + h(g(b[4] != null ? b[4].saleNowLabel : b[4], a)) + ": " + h((d.formattedPrice || a && a.formattedPrice || c).call(a, b[2] != null ? b[2].price_level11member : b[2], {name:"formattedPrice", 
    hash:{}, data:e})) + "</div>\n                    </div>\n"
  }, "26":function() {
    return'class="free"'
  }, "28":function() {
    return""
  }, "30":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return f((d.salePercentage || a && a.salePercentage || c).call(a, b[2] != null ? b[2].price_level11member : b[2], b[2] != null ? b[2].price : b[2], {name:"salePercentage", hash:{}, data:e})) + "%"
  }, "32":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression, g = this.lambda;
    return'                    <div id="sale">\n                        <div class="percentage">' + f((d.salePercentage || a && a.salePercentage || c).call(a, b[4] != null ? b[4].price : b[4], b[3] != null ? b[3].price_original : b[3], {name:"salePercentage", hash:{}, data:e})) + '%</div>\n                        <div class="before">' + f(g(b[5] != null ? b[5].saleBeforeLabel : b[5], a)) + ": " + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[3] != null ? b[3].price_original : b[3], 
    {name:"formattedPrice", hash:{}, data:e})) + '</div>\n                        <div class="now">' + f(g(b[5] != null ? b[5].saleNowLabel : b[5], a)) + ": " + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[4] != null ? b[4].price : b[4], {name:"formattedPrice", hash:{}, data:e})) + "</div>\n                    </div>\n"
  }, "34":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[2] != null ? b[2].price_original : b[2], {name:"if", hash:{}, fn:this.program(35, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "35":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression, g = this.lambda;
    return'                    <div id="sale">\n                        <div class="percentage">' + f((d.salePercentage || a && a.salePercentage || c).call(a, b[3] != null ? b[3].price : b[3], b[2] != null ? b[2].price_original : b[2], {name:"salePercentage", hash:{}, data:e})) + '%</div>\n                        <div class="before">' + f(g(b[4] != null ? b[4].saleBeforeLabel : b[4], a)) + ": " + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[2] != null ? b[2].price_original : b[2], 
    {name:"formattedPrice", hash:{}, data:e})) + '</div>\n                        <div class="now">' + f(g(b[4] != null ? b[4].saleNowLabel : b[4], a)) + ": " + f((d.formattedPrice || a && a.formattedPrice || c).call(a, b[3] != null ? b[3].price : b[3], {name:"formattedPrice", hash:{}, data:e})) + "</div>\n                    </div>\n"
  }, "37":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.category : a) != null ? f.multiple : f, "===", "Y", {name:"ifCond", hash:{}, fn:this.program(38, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "38":function(a, d, c, e, b) {
    var f = this.lambda, c = "", a = d.blockHelperMissing.call(a, f(b[1] != null ? b[1].price_level11member : b[1], a), {name:"../price_level11member", hash:{}, fn:this.program(39, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "39":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[4] != null ? b[4].level11 : b[4], {name:"if", hash:{}, fn:this.program(40, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "40":function(a, d, c, e, b) {
    var f = d.helperMissing, c = "", a = (d.ifCond || a && a.ifCond || f).call(a, b[1] != null ? b[1].sale_limit : b[1], "===", 1, {name:"ifCond", hash:{}, fn:this.program(41, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "41":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                            <em class="sale-limit">' + c(d(b[6] != null ? b[6].oneLicense : b[6], a)) + "</em>\n"
  }, "43":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.category : a) != null ? f.multiple : f, "===", "Y", {name:"ifCond", hash:{}, fn:this.program(44, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "44":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"                <p class='multiple-seats-notice'>" + c(d(b[3] != null ? b[3].requireLicense : b[3], a)) + "</p>\n"
  }, "46":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[2] != null ? b[2].notEditor : b[2], {name:"if", hash:{}, fn:this.program(47, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "47":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='min-unity-version'>" + f((d.minimumVersion || a && a.minimumVersion || c).call(a, b[1] != null ? b[1].min_unity_version : b[1], {name:"minimumVersion", hash:{}, data:e})) + "</span><br><br>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    a = d["if"].call(a, a != null ? a.error : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(4, e, b), data:e});
    return a != null ? a : ""
  }, useData:!0, useDepths:!0});
  h.daily = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = this.lambda, f = this.escapeExpression, g = d.helperMissing;
    return'<a href="#!/content/' + f(c((b = a != null ? a.json : a) != null ? b.id : b, a)) + '">\n    <div id="daily" class="header-box">\n        <div class="body">\n            <div class="timeLeft">\n                <div class="t hour">00</div>\n                <div class="d">:</div><div class="t min">00</div>\n                <div class="d">:</div><div class="t sec">00</div>\n            </div>\n            <div class="detail">\n                <h3>' + f(c((b = a != null ? a.json : a) != null ? 
    b.title : b, a)) + '</h3>\n                <span class="now">' + f((d.formattedPrice || a && a.formattedPrice || g).call(a, (b = a != null ? a.json : a) != null ? b.price : b, {name:"formattedPrice", hash:{}, data:e})) + '</span>\n                <span class="before">' + f((d.formattedPrice || a && a.formattedPrice || g).call(a, (b = a != null ? a.json : a) != null ? b.price_original : b, {name:"formattedPrice", hash:{}, data:e})) + "</span><br>\n            </div>\n        </div>\n    </div>\n</a>"
  }, useData:!0});
  h.downloadPackage = g({"1":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"    <span class='no-packages'>" + c(d(b[1] != null ? b[1].noPackages : b[1], a)) + "</span>\n"
  }, "3":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.packages : a, {name:"each", hash:{}, fn:this.program(4, e, b), inverse:this.program(37, e, b), data:e});
    a != null && (c += a);
    return c
  }, "4":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = "        ", c = (d.displayGroup || a && a.displayGroup || g).call(a, e && e.index, b[1] != null ? b[1].sortBy : b[1], b[1] != null ? b[1].packages : b[1], {name:"displayGroup", hash:{}, data:e});
    c != null && (k += c);
    k += '\n        <div class="package-details ' + h((f = (f = d.type || (a != null ? a.type : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + "-" + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">\n            <div>\n                <a href="#!/content/' + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", 
    hash:{}, data:e}) : f)) + '" title="' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '"><img src="';
    c = d["if"].call(a, a != null ? a.icon : a, {name:"if", hash:{}, fn:this.program(5, e, b), inverse:this.program(7, e, b), data:e});
    c != null && (k += c);
    k += '"></a>\n            </div>\n            <div class="info">\n                <div>\n                    <a class="title ';
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "!==", "content", {name:"ifCond", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" ';
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += ' title="' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '">' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + "</a>\n                    ";
    c = d["if"].call(a, a != null ? a.local_version_name : a, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += "\n                </div>\n";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '                <br>\n                <div>\n                    <a href="#!/publisher/' + h(j((c = a != null ? a.publisher : a) != null ? c.id : c, a)) + '" title="' + h(j((c = a != null ? a.publisher : a) != null ? c.name : c, a)) + '">' + h(j((c = a != null ? a.publisher : a) != null ? c.name : c, a)) + '</a>\n                </div>\n                <div class="category">\n                    <a ';
    c = d["if"].call(a, (c = a != null ? a.category : a) != null ? c.id : c, {name:"if", hash:{}, fn:this.program(17, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += ' title="' + h(j((c = a != null ? a.category : a) != null ? c.name : c, a)) + '">' + h(j((c = a != null ? a.category : a) != null ? c.name : c, a)) + '</a>\n                </div>\n            </div>\n            <div class="action">\n';
    c = d["if"].call(a, b[1] != null ? b[1].inBrowser : b[1], {name:"if", hash:{}, fn:this.program(19, e, b), inverse:this.program(21, e, b), data:e});
    c != null && (k += c);
    k += "            </div>\n";
    c = d["if"].call(a, a != null ? a.id : a, {name:"if", hash:{}, fn:this.program(33, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    return k + "        </div>\n"
  }, "5":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[1] != null ? b[1].icon : b[1], a))
  }, "7":function() {
    return"images/icons/icon_75_hat.png"
  }, "9":function() {
    return"no-click"
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'href="#!/' + f((b = (b = d.type || (a != null ? a.type : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"type", hash:{}, data:e}) : b)) + "/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '"'
  }, "13":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<span class="version">' + f((b = (b = d.local_version_name || (a != null ? a.local_version_name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"local_version_name", hash:{}, data:e}) : b)) + "</span>"
  }, "15":function() {
    return'                    <div class="package-rating"></div>\n'
  }, "17":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'href="#!/category/' + e(c((d = a != null ? a.category : a) != null ? d.id : d, a)) + '/page/1/sortby/popularity"'
  }, "19":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                <button class="open-in-unity" data-id="' + c(d(b[1] != null ? b[1].id : b[1], a)) + '">' + c(d(b[2] != null ? b[2].openInUnity : b[2], a)) + "</button>\n"
  }, "21":function(a, d, c, e, b) {
    var f = "", c = d["if"].call(a, b[1] != null ? b[1].local_path : b[1], {name:"if", hash:{}, fn:this.program(22, e, b), inverse:this.program(24, e, b), data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.can_download : a, {name:"if", hash:{}, fn:this.program(26, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    return f
  }, "22":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                    <button class="import" data-local-path="' + c(d(b[1] != null ? b[1].local_path : b[1], a)) + '" data-complete-project="' + c(d(b[1] != null ? b[1].is_complete_project : b[1], a)) + '">' + c(d(b[3] != null ? b[3].importPkg : b[3], a)) + "</button>\n"
  }, "24":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                    <button class="import" disabled="disabled" data-local-path="' + c(d(b[1] != null ? b[1].local_path : b[1], a)) + '">' + c(d(b[3] != null ? b[3].importPkg : b[3], a)) + "</button>\n"
  }, "26":function(a, d, c, e, b) {
    var f = this.lambda, g = this.escapeExpression, h = '                    <div class="action-container', c = d["if"].call(a, a != null ? a.can_update : a, {name:"if", hash:{}, fn:this.program(27, e, b), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '">\n                        <button id="' + g(f(b[2] != null ? b[2].type : b[2], a)) + "-" + g(f(b[2] != null ? b[2].id : b[2], a)) + '" class="download" data-id="' + g(f(b[2] != null ? b[2].id : b[2], a)) + '" data-type="' + g(f(b[2] != null ? b[2].type : b[2], a)) + '" data-name="' + g(f(b[2] != null ? b[2].name : b[2], a)) + '">';
    c = d["if"].call(a, a != null ? a.can_update : a, {name:"if", hash:{}, fn:this.program(29, e, b), inverse:this.program(31, e, b), data:e});
    c != null && (h += c);
    return h + '</button>\n                        <div class="progress-bar"></div>\n                    </div>\n'
  }, "27":function() {
    return" update"
  }, "29":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[4] != null ? b[4].updatePkg : b[4], a))
  }, "31":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[4] != null ? b[4].downloadPkg : b[4], a))
  }, "33":function(a, d, c, e, b) {
    var f = d.helperMissing, c = "", a = (d.ifCond || a && a.ifCond || f).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(34, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "34":function(a, d, c, e, b) {
    var c = this.lambda, f = this.escapeExpression, g = '                    <div class="review-release-notes">\n                        <a class="release-notes" data-id="' + f(c(b[2] != null ? b[2].id : b[2], a)) + '">' + f(c(b[3] != null ? b[3].releaseNotes : b[3], a)) + '</a>\n                        <a class="review', d = d.unless.call(a, b[2] != null ? b[2].last_downloaded_at : b[2], {name:"unless", hash:{}, fn:this.program(35, e, b), inverse:this.noop, data:e});
    d != null && (g += d);
    return g + '" data-id="' + f(c(b[2] != null ? b[2].id : b[2], a)) + '" data-publisher="' + f(c((d = b[2] != null ? b[2].publisher : b[2]) != null ? d.id : d, a)) + '">' + f(c(b[3] != null ? b[3].review : b[3], a)) + "</a>\n                    </div>\n"
  }, "35":function() {
    return" not-visible"
  }, "37":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"        <span class='no-search'>" + f((b = (b = d.noResults || (a != null ? a.noResults : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noResults", hash:{}, data:e}) : b)) + "</span>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f = d.helperMissing, c = "", a = (d.ifCond || a && a.ifCond || f).call(a, a != null ? a.sortBy : a, "===", "noPackages", {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(3, e, b), data:e});
    a != null && (c += a);
    return c
  }, useData:!0, useDepths:!0});
  h.downloadsPage = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="right">\n                    <button class="update-all">' + f((b = (b = d.updateAll || (a != null ? a.updateAll : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"updateAll", hash:{}, data:e}) : b)) + "</button>\n                </div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div class="download-manager">\n    <div class="head">\n        <h2>' + g((b = (b = d.downloads || (a != null ? a.downloads : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"downloads", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="header">\n        <div class="manager">\n            <div class="left">\n                <button class="collapse-all basic light">' + g((b = (b = d.collapseAll || (a != null ? 
    a.collapseAll : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"collapseAll", hash:{}, data:e}) : b)) + '</button>\n                <div class="group-by">\n                    <label>' + g((b = (b = d.groupBy || (a != null ? a.groupBy : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"groupBy", hash:{}, data:e}) : b)) + '</label>\n                    <select>\n                        <option value="title-first">' + g((b = (b = d.title || (a != null ? a.title : a)) != 
    null ? b : f, typeof b === "function" ? b.call(a, {name:"title", hash:{}, data:e}) : b)) + '</option>\n                        <option value="category">' + g((b = (b = d.category || (a != null ? a.category : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"category", hash:{}, data:e}) : b)) + '</option>\n                        <option value="category-full">' + g((b = (b = d.subcategory || (a != null ? a.subcategory : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"subcategory", 
    hash:{}, data:e}) : b)) + '</option>\n                        <option value="publisher">' + g((b = (b = d.publisher || (a != null ? a.publisher : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisher", hash:{}, data:e}) : b)) + '</option>\n                        <option value="publish-date-id">' + g((b = (b = d.publishDate || (a != null ? a.publishDate : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publishDate", hash:{}, data:e}) : b)) + '</option>\n                        <option value="packagestatus">' + 
    g((b = (b = d.status || (a != null ? a.status : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + '</option>\n                        <option value="purchase-date-id">' + g((b = (b = d.purchaseDate || (a != null ? a.purchaseDate : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"purchaseDate", hash:{}, data:e}) : b)) + '</option>\n                        <option value="rating">' + g((b = (b = d.myRating || (a != null ? a.myRating : 
    a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"myRating", hash:{}, data:e}) : b)) + '</option>\n                    </select>\n                </div>\n                <div class="manager-search">\n                    <label class="search">' + g((b = (b = d.search || (a != null ? a.search : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"search", hash:{}, data:e}) : b)) + '</label>\n                    <form class="package-search">\n                        <input>\n                        <img class="clear" src="../../images/icons/close.png">\n                    </form>\n                </div>\n            </div>\n', 
    c = d.unless.call(a, a != null ? a.inBrowser : a, {name:"unless", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '        </div>\n        <ul class="tabs"></ul>\n        <div class="packages">\n            <div class="loader">\n                <div class="graphic"></div>\n                <div class="label">' + g((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + "</div>\n            </div>\n        </div>\n    </div>\n</div>"
  }, useData:!0});
  h.expressCheckoutDialog = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'<div class="dialog express-checkout-dialog">\n    <h1>' + g((f = (f = d.header || (a != null ? a.header : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"header", hash:{}, data:e}) : f)) + '</h1>\n    <div class="package">\n        <p class="package-label">' + g((f = (f = d.pkg || (a != null ? a.pkg : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"pkg", hash:{}, data:e}) : f)) + ':</p>\n        <p class="package-name">' + g(h((i = (b = (b = a != null ? 
    a.data : a) != null ? b.cart : b) != null ? b["0"] : b, b = i) != null ? b.title : b, a)) + '</p>\n    </div>\n    <div class="account-password">\n        <p class="account-password-label">' + g((f = (f = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountPassword", hash:{}, data:e}) : f)) + '</p>\n        <input type="password" name="account-password">\n    </div>\n    <div class="charge">\n        ' + g((d.debug || a && 
    a.debug || c).call(a, a != null ? a.data : a, {name:"debug", hash:{}, data:e})) + '\n        <p class="payment-method-label">' + g((f = (f = d.chargeCreditCard || (a != null ? a.chargeCreditCard : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"chargeCreditCard", hash:{}, data:e}) : f)) + '</p>\n        <p class="charge-amount">' + g(h((b = a != null ? a.data : a) != null ? b.pricetext : b, a)) + '</p>\n        <p class="vat-label">' + g((f = (f = d.vatLabel || (a != null ? a.vatLabel : 
    a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"vatLabel", hash:{}, data:e}) : f)) + '</p>\n        <p class="vat-amount">' + g(h((b = a != null ? a.data : a) != null ? b.vat : b, a)) + '</p>\n    </div>\n    <button class="cancel-button">' + g((f = (f = d.cancel || (a != null ? a.cancel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"cancel", hash:{}, data:e}) : f)) + '</button>\n    <button class="go-to-cart">' + g((f = (f = d.goToCart || (a != null ? a.goToCart : 
    a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"goToCart", hash:{}, data:e}) : f)) + '</button>\n    <button class="purchase-button">' + g((f = (f = d.purchase || (a != null ? a.purchase : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"purchase", hash:{}, data:e}) : f)) + '</button><br>\n    <p class="allow-popups">' + g((f = (f = d.allowPopups || (a != null ? a.allowPopups : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"allowPopups", hash:{}, 
    data:e}) : f)) + '</p>\n    <div class="status"></div>\n    <div class="card-banner" title="Visa mastercard, discover, paypal."></div>\n</div>'
  }, useData:!0});
  h.homePage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="homePage">\n    <section id="featured" class="main-area section">\n        <div class="blocked full feature-big">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter first feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter second feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter third feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter last feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div id="popularBox" class="header-box">\n            <div class="head">\n                <h2>' + 
    f((b = (b = d.mostPopular || (a != null ? a.mostPopular : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"mostPopular", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body">\n                <div id="popresults" style="padding: 5px;">\n                    <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                </div>\n            </div>\n        </div>\n        <div id="terms"></div>\n        <div class="vat-info"></div>\n        <div id="assetstoretools"></div>\n    </section>\n</div>'
  }, useData:!0});
  h.level11Page = g({"1":function() {
    return"../images/level-11-no-access.png"
  }, "3":function() {
    return"../images/level-11-banner.png"
  }, "5":function(a, d, c, e) {
    var f;
    var b, c = '    <section id="resultsFree" class="section';
    f = d.unless.call(a, (b = (b = a != null ? a.data : a) != null ? b.level11sale : b) != null ? b.results : b, {name:"unless", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e}), b = f;
    b != null && (c += b);
    return c + '">\n        <div class="blocked full">\n            <h2>Free</h2>\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n'
  }, "6":function() {
    return" single"
  }, "8":function(a, d, c, e) {
    var f;
    var b, c = '    <section id="resultsSale" class="section';
    f = d.unless.call(a, (b = (b = a != null ? a.data : a) != null ? b.level11free : b) != null ? b.results : b, {name:"unless", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e}), b = f;
    b != null && (c += b);
    return c + '">\n        <div class="blocked full">\n            <h2>Discounted</h2>\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var k;
    var i;
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = '<div id="level11Page">\n    <section id="featured" class="main-content section">\n        <section id="contentoverview" class="section">\n            <div class="blocked full">\n                <img src="', c = (b = (b = d.notLevel11 || (a != null ? a.notLevel11 : a)) != null ? b : g, f = {name:"notLevel11", hash:{}, fn:this.program(1, e), inverse:this.program(3, e), data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.notLevel11 || (c = h.call(a, c, f));
    c != null && (j += c);
    j += '" class="banner">\n            </div>\n        </section>\n    </section><br>\n    <h2 class="header">';
    c = (b = (b = d.level11 || (a != null ? a.level11 : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"level11", hash:{}, data:e}) : b);
    c != null && (j += c);
    j += "</h2><br>\n";
    i = d["if"].call(a, (c = (c = a != null ? a.data : a) != null ? c.level11free : c) != null ? c.results : c, {name:"if", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e}), c = i;
    c != null && (j += c);
    k = d["if"].call(a, (c = (c = a != null ? a.data : a) != null ? c.level11sale : c) != null ? c.results : c, {name:"if", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e}), c = k;
    c != null && (j += c);
    return j + "</div>"
  }, useData:!0});
  h.licensesPage = g({"1":function(a, d, c, e, b) {
    c = '                <div class="licensesContent">\n';
    a = d.each.call(a, a != null ? a.licenses : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "                </div>\n"
  }, "2":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return"                        <div class='license-item'>\n                            <div>" + g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + "</div>\n                            <button class='buyMore' data='" + g((f = (f = d.package_id || (a != null ? a.package_id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"package_id", hash:{}, data:e}) : f)) + "'>" + g(h(b[2] != null ? b[2].buyMore : 
    b[2], a)) + "</button>\n                            <div class='quantity'>" + g((f = (f = d.quantity || (a != null ? a.quantity : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"quantity", hash:{}, data:e}) : f)) + "</div><br>\n                        </div>\n"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="licensesContent no-results">' + f((b = (b = d.noLicensesLabel || (a != null ? a.noLicensesLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noLicensesLabel", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, c = '<section id="licenses" class="section limited">\n    <div class="header-box">\n        <div class="licenses">\n            <div class="head license">\n                <h2>' + g((f = (f = d.licensesLabel || (a != null ? a.licensesLabel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"licensesLabel", hash:{}, data:e}) : f)) + '</h2>\n            </div>\n        </div>\n        <div id="licensesData" class="body">\n            <div class="header">\n                <div class="name">' + 
    g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '</div>\n                <div class="quantity">' + g((f = (f = d.quantity || (a != null ? a.quantity : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"quantity", hash:{}, data:e}) : f)) + "</div>\n            </div>\n", a = d["if"].call(a, a != null ? a.licenses : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(4, e, 
    b), data:e});
    a != null && (c += a);
    return c + "        </div>\n    </div>\n</section>"
  }, useData:!0, useDepths:!0});
  h.loginForm = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"<h1>" + f((b = (b = d.logIn || (a != null ? a.logIn : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"logIn", hash:{}, data:e}) : b)) + '</h1>\n<form method="post" action="#" id="loginform">\n    <div class="input-form">\n        <div>\n            <label class="label" for="login-username">' + f((b = (b = d.email || (a != null ? a.email : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"email", hash:{}, data:e}) : b)) + '</label>\n            <input type="text" name="username" id="login-username">\n        </div>\n        <div>\n            <label class="label" for="login-password">' + 
    f((b = (b = d.password || (a != null ? a.password : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"password", hash:{}, data:e}) : b)) + '</label>\n            <input type="password" name="password" id="login-password">\n        </div>\n        <div class="login-forgot">\n            <a href="https://accounts.unity3d.com/password/new" target="_blank">' + f((b = (b = d.forgotPassword || (a != null ? a.forgotPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"forgotPassword", 
    hash:{}, data:e}) : b)) + '</a>\n        </div>\n        <div>\n            <input type="checkbox" name="remember_password" id="login-remember_session">\n            <label for="login-remember_session">' + f((b = (b = d.keepLoggedIn || (a != null ? a.keepLoggedIn : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"keepLoggedIn", hash:{}, data:e}) : b)) + '</label>\n        </div>\n    </div>\n</form>\n<button id="login-button">' + f((b = (b = d.logInButton || (a != null ? a.logInButton : 
    a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"logInButton", hash:{}, data:e}) : b)) + '</button>\n<button id="cancel-login-button">' + f((b = (b = d.cancel || (a != null ? a.cancel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"cancel", hash:{}, data:e}) : b)) + "</button>\n"
  }, useData:!0});
  h.newsletter = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<div id="innerNewsletter" class="header-box">\n    <div class="head">\n        <h2>' + f((b = (b = d.headline || (a != null ? a.headline : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"headline", hash:{}, data:e}) : b)) + "</h2>\n    </div>\n    <div class=\"body\">\n        <div class='signup'>\n            <p>" + f((b = (b = d.newsletterTitle || (a != null ? a.newsletterTitle : a)) != null ? b : c, typeof b === "function" ? 
    b.call(a, {name:"newsletterTitle", hash:{}, data:e}) : b)) + "</p>\n            <form id='newsletterselection'>\n                <input class=\"email\" type='text' name='newsletter'>\n            </form>\n            <div class='actions'>\n                <div class='body-buttons'><a href='#'>" + f((b = (b = d.save || (a != null ? a.save : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"save", hash:{}, data:e}) : b)) + "</a></div>\n            </div>\n            <div class='privacy-policy'>\n                <input type='checkbox' checked='checked'>", 
    a = (b = (b = d.privacyPolicy || (a != null ? a.privacyPolicy : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"privacyPolicy", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + "\n            </div>\n        </div>\n        <div class='response'><p></p></div>\n    </div>\n</div>\n"
  }, useData:!0});
  h.openGraphCategory = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'    <meta property="og:title" content="' + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" />\n    <meta property="og:type" content="category" />\n    <meta property="og:url" content="' + g(h(b[1] != null ? b[1].url : b[1], a)) + '" />\n    <meta property="og:site_name" content="Unity Asset Store" />\n    <meta property="fb:app_id" content="1012447922112596">\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.openGraphContent = g({"1":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda;
    return'<meta property="og:title" content="' + h((g = (g = d.title || (a != null ? a.title : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + " by " + h(j((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + '" />\n<meta property="og:description" content="' + h(j(b[1] != null ? b[1].description : b[1], a)) + '" />\n<meta property="og:type" content="product" />\n<meta property="og:image" content="' + h(j(b[1] != null ? b[1].imageBig : b[1], 
    a)) + '" />\n<meta property="og:url" content="' + h(j(b[1] != null ? b[1].url : b[1], a)) + '" />\n<meta property="og:site_name" content="Unity Asset Store" />\n<meta property="fb:app_id" content="1012447922112596">\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.openGraphPublisher = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'    <meta property="og:title" content="' + g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '" />\n    <meta property="og:description" content="' + g(h(b[1] != null ? b[1].description : b[1], a)) + '" />\n    <meta property="og:type" content="company" />\n    <meta property="og:image" content="' + g(h(b[1] != null ? b[1].imageSmall : b[1], a)) + '" />\n    <meta property="og:url" content="' + g(h(b[1] != 
    null ? b[1].url : b[1], a)) + '" />\n    <meta property="og:site_name" content="Unity Asset Store" />\n    <meta property="fb:app_id" content="1012447922112596">\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageDetails = g({"1":function(a, d, c, e, b) {
    var f, c = "";
    f = d.unless.call(a, (f = a != null ? a.flags : a) != null ? f.no_text_on_small_keyimage : f, {name:"unless", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c
  }, "2":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, j = d.blockHelperMissing, k = this.escapeExpression, n = '<div class="details', c = (f = (f = d.price_original || (a != null ? a.price_original : a)) != null ? f : h, g = {name:"price_original", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.price_original || (c = j.call(a, c, g));
    c != null && (n += c);
    n += '">\n    <h2 title="' + k((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '"><a href="#!/content/' + k((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" class="livelink">' + k((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : 
    f)) + "</a></h2>\n    ";
    c = (f = (f = d.category || (a != null ? a.category : a)) != null ? f : h, g = {name:"category", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.category || (c = j.call(a, c, g));
    c != null && (n += c);
    n += "\n    ";
    c = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : h, g = {name:"publisher", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (c = j.call(a, c, g));
    c != null && (n += c);
    n += "\n    ";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_rating : c, {name:"unless", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "\n    ";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"unless", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "\n    </div>\n";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"unless", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (n += c);
    return n
  }, "3":function() {
    return" sale"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/category/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '/page/1/sortby/popularity" class="livelink">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "</a><br>"
  }, "7":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/publisher/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "</a><br>"
  }, "9":function(a, d, c, e) {
    var b, c = d.helperMissing, f = "";
    b = (d.ratingUI || a && a.ratingUI || c).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    b != null && (f += b);
    return f + "<br>"
  }, "11":function(a, d, c, e) {
    var b = d.helperMissing, f = "", c = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(12, e), inverse:this.noop, data:e});
    c != null && (f += c);
    f += '\n        <span class="price">';
    c = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    c != null && (f += c);
    return f + "</span>"
  }, "12":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "13":function() {
    return""
  }, "15":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[3] != null ? b[3].level11 : b[3], {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.program(22, e, b), data:e});
    a != null && (c += a);
    return c
  }, "16":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"if", hash:{}, fn:this.program(17, e, b), inverse:this.program(19, e, b), data:e});
    a != null && (c += a);
    return c
  }, "17":function() {
    return'            <span class="sale-level-11-indicator" />\n'
  }, "19":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "            ", e = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(20, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "\n"
  }, "20":function() {
    return'<span class="sale-indicator" />'
  }, "22":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "        ", e = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(20, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.result || (a != null ? a.result : a)) != null ? f : h, g = {name:"result", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.result || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageSmallLink = g({"1":function(a, d, c, e, b) {
    var f, g, h = this.lambda, j = this.escapeExpression, k = d.helperMissing, n = d.blockHelperMissing, l = '    <div class="littleblock ', c = d["if"].call(a, b[1] != null ? b[1].level11 : b[1], {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.program(5, e, b), data:e});
    c != null && (l += c);
    l += '" data-template="' + j(h((c = a != null ? a.link : a) != null ? c.type : c, a)) + '" data-link="' + j(h((c = a != null ? a.link : a) != null ? c.id : c, a)) + '" data-package="' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" data-publisher="' + j(h((c = a != null ? a.publisher : a) != null ? c.label : c, a)) + '">\n    <a href="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (l += c);
    l += '" class="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(12, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += 'livelink">\n        <div class="microimage" style="background-image:url(\'';
    c = d["if"].call(a, a != null ? a.keyimage : a, {name:"if", hash:{}, fn:this.program(14, e, b), inverse:this.program(17, e, b), data:e});
    c != null && (l += c);
    l += '\');"></div>\n    </a>\n    <div class="details microblock">\n        <strong><a href="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (l += c);
    l += '" class="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(12, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += 'livelink" title="' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '">' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a></strong>\n        ";
    c = d["if"].call(a, a != null ? a.category : a, {name:"if", hash:{}, fn:this.program(19, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += '<br>\n        <span class="publisher">';
    c = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : k, g = {name:"publisher", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (c = n.call(a, c, g));
    c != null && (l += c);
    l += "</span><br>\n        ";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_rating : c, {name:"unless", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    l += "<br>\n";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"unless", hash:{}, fn:this.program(26, e, b), inverse:this.noop, data:e});
    c != null && (l += c);
    return l + "    </div>\n</div>\n"
  }, "2":function(a, d, c, e) {
    a = d["if"].call(a, a != null ? a.price_level11member : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.program(5, e), data:e});
    return a != null ? a : ""
  }, "3":function() {
    return"level-11"
  }, "5":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, e = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (e = c.call(a, e, f));
    return e != null ? e : ""
  }, "6":function() {
    return" sale"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.url || (a != null ? a.url : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"url", hash:{}, data:e}) : b))
  }, "10":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return"#!/" + e(c((d = a != null ? a.link : a) != null ? d.type : d, a)) + "/" + e(c((d = a != null ? a.link : a) != null ? d.id : d, a))
  }, "12":function() {
    return"override_url "
  }, "14":function(a, d, c, e) {
    var b;
    b = d["if"].call(a, (b = a != null ? a.keyimage : a) != null ? b.icon75 : b, {name:"if", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    return b != null ? b : ""
  }, "15":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.icon75 : d, a))
  }, "17":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.icon : d, a))
  }, "19":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = '<span class="category">', e = (b = (b = d.category || (a != null ? a.category : a)) != null ? b : g, f = {name:"category", hash:{}, fn:this.program(20, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.category || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "</span>"
  }, "20":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/category/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '/page/1/sortby/popularity" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, 
    data:e}) : b)) + "</a>"
  }, "22":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/publisher/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "</a>"
  }, "24":function(a, d, c, e) {
    var b, c = d.helperMissing;
    b = (d.ratingUI || a && a.ratingUI || c).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    return b != null ? b : ""
  }, "26":function(a, d, c, e, b) {
    c = '        <div class="prices">\n            <a class="wish-list"></a>\n            <a class="wish-list-buy"></a>\n';
    a = d["if"].call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"if", hash:{}, fn:this.program(27, e, b), inverse:this.program(35, e, b), data:e});
    a != null && (c += a);
    return c + "        </div>\n"
  }, "27":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[3] != null ? b[3].level11 : b[3], {name:"if", hash:{}, fn:this.program(28, e, b), inverse:this.program(32, e, b), data:e});
    a != null && (c += a);
    return c
  }, "28":function(a, d, c, e, b) {
    var f = d.helperMissing, g = "                    ", c = d["if"].call(a, b[2] != null ? b[2].price_level11member : b[2], {name:"if", hash:{}, fn:this.program(29, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    g += '<span class="price">';
    c = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[1] != null ? b[1].price_level11member : b[1], {name:"formattedPrice", hash:{}, fn:this.program(30, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "</span>\n"
  }, "29":function(a, d, c, e, b) {
    var f = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[3] != null ? b[3].price : b[3], {name:"formattedPrice", hash:{}, fn:this.program(30, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "30":function() {
    return""
  }, "32":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = "                    ", c = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(33, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (c = h.call(a, c, f));
    c != null && (j += c);
    j += '<span class="price">';
    c = (d.formattedPrice || a && a.formattedPrice || g).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(30, e), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "</span>\n"
  }, "33":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a, {name:"formattedPrice", hash:{}, fn:this.program(30, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "35":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = "                ", c = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(33, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (c = h.call(a, c, f));
    c != null && (j += c);
    j += '<span class="price">';
    c = (d.formattedPrice || a && a.formattedPrice || g).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(30, e), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "</span>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.result || (a != null ? a.result : a)) != null ? f : h, g = {name:"result", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.result || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageVersionBox = g({"1":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = d.blockHelperMissing, n = "<table>\n    <tr>\n        <td id='left' rowspan='2'>\n            <div class='package-icon'>\n                <h1 class='date'>", c = d["if"].call(a, a != null ? a.status_updated_at : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "</h1>\n                <h2 class='time'>";
    c = d["if"].call(a, a != null ? a.status_updated_at : a, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "\n                    <span class='change-type change-type-" + h((b = (b = d.change_type || (a != null ? a.change_type : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"change_type", hash:{}, data:e}) : b)) + "'>" + h((b = (b = d.change_type || (a != null ? a.change_type : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"change_type", hash:{}, data:e}) : b)) + "</span>\n                </h2>\n                <img src='" + h((b = (b = d.icon || (a != null ? 
    a.icon : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"icon", hash:{}, data:e}) : b)) + "'>\n            </div>\n        </td>\n        <td id='center-top'>\n            <h1>" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + " " + h((b = (b = d.version || (a != null ? a.version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"version", hash:{}, data:e}) : b)) + "</h1>\n\n            <h2>by " + 
    h(j((c = a != null ? a.publisher : a) != null ? c.label : c, a)) + "\n                <a href='" + h((b = (b = d.adminFormattedPublisherEmail || (a != null ? a.adminFormattedPublisherEmail : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"adminFormattedPublisherEmail", hash:{}, data:e}) : b)) + "' class='externallink email-icon' title='Email publisher' target='_blank'/>\n            </h2>\n        </td>\n        <td id='right' rowspan='2'>\n            <div class='actions'>\n";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "published", {name:"ifCond", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "disabled", {name:"ifCond", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "!==", "error", {name:"ifCond", hash:{}, fn:this.program(10, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "pendingReview", {name:"ifCond", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "disabled", {name:"ifCond", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "                <span class='admin-button'>\n                    <a class='comment' href='#' package-name='" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "' data-content=" + h((b = (b = d.comment || (a != null ? a.comment : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"comment", hash:{}, data:e}) : b)) + ">Comment</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='preview' href='#' package-name='" + h((b = (b = d.name || (a != null ? 
    a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Preview</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='download' href='#' package-name='" + 
    h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", 
    hash:{}, data:e}) : b)) + "' package-upload-id='" + h((b = (b = d.max_package_upload_id || (a != null ? a.max_package_upload_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"max_package_upload_id", hash:{}, data:e}) : b)) + "'>Download</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='loghistory' href='#' package-name='" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, 
    {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Log</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='showversionlist' href='#' package-name='" + 
    h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", 
    hash:{}, data:e}) : b)) + "'>Versions</a>\n                </span>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td id='center-mid'>\n            <div class='center'>\n                <h3>Status</h3>\n\n                <div class='status'>\n                    <span class='status-" + h((b = (b = d.status || (a != null ? a.status : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "'>" + h((b = (b = d.status || (a != null ? a.status : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "</span>\n                </div>\n";
    c = d["if"].call(a, a != null ? a.vetting_comment : a, {name:"if", hash:{}, fn:this.program(17, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = d["if"].call(a, a != null ? a.submit_message : a, {name:"if", hash:{}, fn:this.program(19, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "            </div>\n        </td>\n    </tr>\n    <tr>\n        <td id='center-bottom' colspan='3'>\n            <table class=\"info\">\n                <tr>\n                    <th>Unity</th>\n                    <td><b>Version</b></td>\n                    <th>Min</th>\n                    <td>" + h((b = (b = d.min_unity_version || (a != null ? a.min_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"min_unity_version", hash:{}, data:e}) : b));
    c = (b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, f = {name:"max_unity_version", hash:{}, fn:this.noop, inverse:this.program(21, e), data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.max_unity_version || (c = k.call(a, c, f));
    c != null && (n += c);
    n += "</td>\n                    <th>Admin</th>\n                    <td>";
    c = d["if"].call(a, a != null ? a.last_admin : a, {name:"if", hash:{}, fn:this.program(23, e), inverse:this.program(29, e), data:e});
    c != null && (n += c);
    n += '</td>\n                    <th>Case</th>\n                    <td><a class="externallink" href=\'' + h((b = (b = d.case_url || (a != null ? a.case_url : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"case_url", hash:{}, data:e}) : b)) + '\' target="_blank">' + h((b = (b = d.case_id || (a != null ? a.case_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"case_id", hash:{}, data:e}) : b)) + "</a></td>\n\n                    <th>Package ID</th>\n                    <td>\n                        <a class='externallink' href='https://admin.assetstore.unity3d.com/admin/browse/view/Package/" + 
    h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' target='_blank'\n                           title='View Package " + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + " in DataBrowser'>\n                            " + h((b = (b = d.package_id || (a != null ? a.package_id : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "\n                        </a>\n                    </td>\n                </tr>\n                <tr>\n                    <th>Used</th>\n                    <td>" + h((b = (b = d.used_unity_version || (a != null ? a.used_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"used_unity_version", hash:{}, data:e}) : b)) + "</td>\n                    <th>Max</th>\n                    <td>" + 
    h((b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"max_unity_version", hash:{}, data:e}) : b));
    c = (b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, f = {name:"max_unity_version", hash:{}, fn:this.noop, inverse:this.program(31, e), data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.max_unity_version || (c = k.call(a, c, f));
    c != null && (n += c);
    n += "</td>\n                    <th>Price</th>\n                    <td>";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.price : a, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(33, e), inverse:this.program(35, e), data:e});
    c != null && (n += c);
    return n + "</td>\n                    <th>Size</th>\n                    <td>" + h((b = (b = d.sizetext || (a != null ? a.sizetext : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"sizetext", hash:{}, data:e}) : b)) + "</td>\n\n                    <th>PackageVersion ID</th>\n                    <td>\n                        <a class='externallink' href='https://admin.assetstore.unity3d.com/admin/browse/view/PackageVersion/" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "' target='_blank'\n                           title='View PackageVersion " + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + " in DataBrowser'>\n                            " + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != 
    null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "\n                        </a>\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n</table>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.adminFormattedDate || (a != null ? a.adminFormattedDate : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"adminFormattedDate", hash:{}, data:e}) : b))
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.adminFormattedTime || (a != null ? a.adminFormattedTime : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"adminFormattedTime", hash:{}, data:e}) : b))
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='revert' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Revert</a>\n                    </span>\n                    <span class='admin-button'>\n                        <a class='disable' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || 
    (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Disable</a>\n                    </span>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='enable' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Enable</a>\n                    </span>\n"
  }, "10":function(a, d, c, e) {
    var b = d.helperMissing, f = "", c = (d.ifCond || a && a.ifCond || b).call(a, a != null ? a.status : a, "===", "pendingReview", {name:"ifCond", hash:{}, fn:this.program(11, e), inverse:this.noop, data:e});
    c != null && (f += c);
    c = (d.ifCond || a && a.ifCond || b).call(a, a != null ? a.status : a, "===", "declined", {name:"ifCond", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    c != null && (f += c);
    return f
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='accept' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Accept</a>\n                    </span>\n"
  }, "13":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                        <span class='admin-button'>\n                        <a class='accept' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Accept</a>\n                    </span>\n"
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='decline' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Decline</a>\n                    </span>\n"
  }, "17":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <h3>Vetting Comment</h3>\n                <div class='last-message'>" + f((b = (b = d.vetting_comment || (a != null ? a.vetting_comment : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"vetting_comment", hash:{}, data:e}) : b)) + "</div>\n"
  }, "19":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <h3>Publisher Submit Message</h3>\n                <div class='last-message'>" + f((b = (b = d.submit_message || (a != null ? a.submit_message : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"submit_message", hash:{}, data:e}) : b)) + "</div>\n"
  }, "21":function() {
    return"?"
  }, "23":function(a, d, c, e) {
    var b;
    b = d["if"].call(a, (b = a != null ? a.last_admin : a) != null ? b.email : b, {name:"if", hash:{}, fn:this.program(24, e), inverse:this.program(29, e), data:e});
    return b != null ? b : ""
  }, "24":function(a, d, c, e) {
    var b, c = this.lambda, f = this.escapeExpression, c = "\n                        <a class='externallink' href='mailto:" + f(c((b = a != null ? a.last_admin : a) != null ? b.email : b, a)) + "' target='_blank'\n                           title='" + f(c((b = a != null ? a.last_admin : a) != null ? b.name : b, a)) + "<" + f(c((b = a != null ? a.last_admin : a) != null ? b.email : b, a)) + ">'>\n                            ";
    b = d["if"].call(a, (b = a != null ? a.last_admin : a) != null ? b.short_name : b, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.program(27, e), data:e});
    b != null && (c += b);
    return c + "\n                        </a>\n                    "
  }, "25":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.last_admin : a) != null ? d.short_name : d, a))
  }, "27":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.last_admin : a) != null ? d.email : d, a))
  }, "29":function() {
    return"none"
  }, "31":function() {
    return"&infin;"
  }, "33":function() {
    return"Free"
  }, "35":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"$" + f((b = (b = d.price || (a != null ? a.price : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"price", hash:{}, data:e}) : b))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "<\!-- vetting interface package version box --\>\n", e = (b = (b = d.item || (a != null ? a.item : a)) != null ? b : g, f = {name:"item", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.item || (e = c.call(a, e, f));
    e != null && (h += e);
    return h
  }, useData:!0});
  h.page404 = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<div>\n    <div>\n        <h1 class="title404">' + f((b = (b = d.notFound || (a != null ? a.notFound : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"notFound", hash:{}, data:e}) : b)) + '</h1>\n        <p class="message404">', a = (b = (b = d.message || (a != null ? a.message : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + '</p>\n    </div>\n    <div class="list">\n        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n    </div>\n</div>'
  }, useData:!0});
  h.passwordForm = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<form method="post" action="#">\n    <div class="req">\n        <div class="label">' + f((b = (b = d.currentPassword || (a != null ? a.currentPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"currentPassword", hash:{}, data:e}) : b)) + '</div>\n        <input type="password" cname="password_old" id="password_old">\n    </div>\n    <div class="req">\n        <div class="label">' + f((b = (b = d.newPassword || (a != null ? a.newPassword : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"newPassword", hash:{}, data:e}) : b)) + '</div>\n        <input type="password" cname="password" id="password">\n    </div>\n    <div class="req">\n        <div class="label">' + f((b = (b = d.repeatNewPassword || (a != null ? a.repeatNewPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"repeatNewPassword", hash:{}, data:e}) : b)) + '</div>\n        <input type="password" name="password_confirmation" id="password_confirmation">\n        <div class="password-message"></div>\n    </div>\n</form>\n'
  }, useData:!0});
  h.previewPage = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = '<div id="contentpage" class="', c = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '">\n    <section id="contentoverview" class="section">\n        <h1>' + h((f = (f = d.title || (a != null ? a.title : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '&nbsp<p class="status">';
    c = d["if"].call(a, a != null ? a.status : a, {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '</p></h1>\n        <div class="blocked full">\n            <div class="item" ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += ">\n                <div class='smallBackground' style=\"background-image: url('" + h(j((c = a != null ? a.keyimage : a) != null ? c.small : c, a)) + "')\"></div>\n                <div class='background' style=\"background-image: url('";
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.big : c, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (k += c);
    k += "')\"></div>\n                <div class='salesBadget' style=\"background-image: url('";
    c = d["if"].call(a, a != null ? a.saleData : a, {name:"if", hash:{}, fn:this.program(12, e, b), inverse:this.program(15, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                <div class="overview-text-overlay ';
    c = d["if"].call(a, (c = a != null ? a.category : a) != null ? c.multiple : c, {name:"if", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '">\n                    <div class="details"></div>\n                    <p class="fulldescription vscroll">\n                        <span class="min-unity-version">' + h((f = (f = d.minimumUnityVersion || (a != null ? a.minimumUnityVersion : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"minimumUnityVersion", hash:{}, data:e}) : f)) + '</span>\n                    </p>\n                </div>\n            </div>\n        </div>\n        </section>\n        <section id="contentaside" class="section">\n            <div class="blocked full">\n                <div class="item">\n                    <span class="left">' + 
    h(j(b[1] != null ? b[1].versionText : b[1], a)) + '\n                        <a class="livelink show-release-notes" target=_blank>' + h((f = (f = d.version || (a != null ? a.version : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"version", hash:{}, data:e}) : f)) + "</a>\n                        ";
    c = d["if"].call(a, a != null ? a.pubdate : a, {name:"if", hash:{}, fn:this.program(20, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '\n                    </span>\n                    <span class="left">';
    c = d["if"].call(a, a != null ? a.sizetext : a, {name:"if", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += " " + h((f = (f = d.sizetext || (a != null ? a.sizetext : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"sizetext", hash:{}, data:e}) : f)) + '</span>\n                </div>\n            </div>\n        </section>\n        <section id="featured" class="section">\n            <h1 id="cattitle">Featured Preview</h1>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div  class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(10, e, b), data:e});
    c != null && (k += c);
    return k + '\')"></div>\n                </div>\n            </div>\n            <div id="popularBox" class="header-box">\n                <div class="head">\n                    <h2>Icon Preview</h2>\n                </div>\n                <div class="body">\n                    <div id="popresults" style="padding: 5px;"></div>\n                </div>\n            </div>\n        </section>\n    </section>\n</div>\n'
  }, "2":function() {
    return"sale"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"[" + f((b = (b = d.status || (a != null ? a.status : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "]"
  }, "6":function() {
    return"icon-bg"
  }, "8":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.big : d, a))
  }, "10":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.icon75 : d, a))
  }, "12":function(a, d, c, e) {
    var b;
    b = d["if"].call(a, a != null ? a.id : a, "===", (b = a != null ? a.daily : a) != null ? b.id : b, {name:"if", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    return b != null ? b : ""
  }, "13":function() {
    return"/images/badges/24hourdeals.png"
  }, "15":function(a, d, c, e) {
    a = d["if"].call(a, a != null ? a.badge : a, {name:"if", hash:{}, fn:this.program(16, e), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, "16":function() {
    return"saleData.badge"
  }, "18":function() {
    return"multiple-seats"
  }, "20":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"(" + f((b = (b = d.pubdate || (a != null ? a.pubdate : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"pubdate", hash:{}, data:e}) : b)) + ")"
  }, "22":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[2] != null ? b[2].sizeText : b[2], a))
  }, "24":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.small : d, a))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.publisherPage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="publisherpage">\n    <section id="contentoverview" class="section">\n        <h1>' + f((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + '</h1>\n        <div class="blocked full">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n    <section id="contentaside" class="section">\n        <div class="blocked full">\n            <div class="item">&nbsp;</div>\n        </div>\n    </section>\n    <section id="publisherall" class="section">\n        <h2>' + 
    f((b = (b = d.publisher || (a != null ? a.publisher : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisher", hash:{}, data:e}) : b)) + '</h2>\n        <div class="blocked full" id="results">\n            <div class="item" id="catresults">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.purchaseDialog = g({"1":function(a, d, c, e) {
    var j;
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = '        <div class="payment-method">\n            <p>' + g((f = (f = d.paymentMethod || (a != null ? a.paymentMethod : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"paymentMethod", hash:{}, data:e}) : f)) + '</p>\n            <select size="1" class="select-box">\n';
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    b != null && (h += b);
    i = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e}), b = i;
    b != null && (h += b);
    h += '                <option value="cybersource">' + g((f = (f = d.creditCard || (a != null ? a.creditCard : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"creditCard", hash:{}, data:e}) : f)) + '</option>\n                <option value="paypal">' + g((f = (f = d.payPal || (a != null ? a.payPal : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"payPal", hash:{}, data:e}) : f)) + "</option>\n            </select>\n        </div>\n\n";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    b != null && (h += b);
    h += "\n";
    j = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"if", hash:{}, fn:this.program(8, e), inverse:this.program(14, e), data:e}), b = j;
    b != null && (h += b);
    return h
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                    <option value="express-checkout">' + f((b = (b = d.expressCheckout || (a != null ? a.expressCheckout : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"expressCheckout", hash:{}, data:e}) : b)) + "</option>\n"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                    <option value="credits">' + f((b = (b = d.credits || (a != null ? a.credits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"credits", hash:{}, data:e}) : b)) + "</option>\n"
  }, "6":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'            <div class="express-purchase-payment">\n                <p class="express-purchase-payment-label">' + g((f = (f = d.expressPurchasePayment || (a != null ? a.expressPurchasePayment : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"expressPurchasePayment", hash:{}, data:e}) : f)) + '</p>\n                <p class="card-number">' + g((f = (f = d.cardNumber || (a != null ? a.cardNumber : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"cardNumber", 
    hash:{}, data:e}) : f)) + " " + g(h((i = (b = (b = a != null ? a.data : a) != null ? b.express_checkout : b) != null ? b.creditcard : b, b = i) != null ? b.card_number : b, a)) + "</p>\n            </div>\n"
  }, "8":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, c = '            <div class="account-password">\n                <p class="account-password-label">' + g((f = (f = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountPassword", hash:{}, data:e}) : f)) + '</p>\n                <input type="password" name="account-password">\n            </div>\n';
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"unless", hash:{}, fn:this.program(9, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "9":function(a, d, c, e) {
    var i;
    var b, c = d.helperMissing, f = '                <div class="account-balance">\n';
    i = (d.ifCond || a && a.ifCond || c).call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.charge : b, ">", "0", {name:"ifCond", hash:{}, fn:this.program(10, e), inverse:this.program(12, e), data:e}), b = i;
    b != null && (f += b);
    return f + "                </div>\n"
  }, "10":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                        <p class="account-balance-label">' + g((f = (f = d.accountBalance || (a != null ? a.accountBalance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountBalance", hash:{}, data:e}) : f)) + '</p>\n                        <p class="account-balance-text error">' + g(h((b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balancetext : b, a)) + " " + g((f = (f = d.insufficient || (a != null ? a.insufficient : a)) != null ? f : c, 
    typeof f === "function" ? f.call(a, {name:"insufficient", hash:{}, data:e}) : f)) + "</p>\n"
  }, "12":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                        <p class="account-balance-label">' + g((f = (f = d.accountBalance || (a != null ? a.accountBalance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountBalance", hash:{}, data:e}) : f)) + '</p>\n                        <p class="account-balance-text">' + g(h((b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balancetext : b, a)) + "</p>\n"
  }, "14":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="account-password">\n                    <p class="account-password-label">' + f((b = (b = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"accountPassword", hash:{}, data:e}) : b)) + '</p>\n                    <input type="password" name="account-password">\n                </div>\n'
  }, "17":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.chargeAccount || (a != null ? a.chargeAccount : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"chargeAccount", hash:{}, data:e}) : b))
  }, "19":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.total || (a != null ? a.total : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"total", hash:{}, data:e}) : b))
  }, "21":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(22, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "22":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <button class="disable-express-purchase-button">' + f((b = (b = d.disableExpressPurchase || (a != null ? a.disableExpressPurchase : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"disableExpressPurchase", hash:{}, data:e}) : b)) + "</button>\n"
  }, "24":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = '            <div class="express-purchase" ';
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.noop, data:e});
    b != null && (g += b);
    g += " ";
    i = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.noop, data:e}), b = i;
    b != null && (g += b);
    g += '>\n                <input type="checkbox" value="1">\n                <a>';
    b = (f = (f = d.expressPurchase || (a != null ? a.expressPurchase : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"expressPurchase", hash:{}, data:e}) : f);
    b != null && (g += b);
    return g + "</a>\n            </div><br>\n"
  }, "25":function() {
    return'style="display: none;"'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = this.lambda, j = '<div class="dialog purchase-dialog">\n    <h1>' + g((b = (b = d.header || (a != null ? a.header : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"header", hash:{}, data:e}) : b)) + "</h1>\n    <p>" + g((b = (b = d.message || (a != null ? a.message : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b)) + "</p><br>\n", c = d["if"].call(a, a != null ? a.price : 
    a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '\n    <div class="charge">\n        <p class="payment-method-label">';
    c = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(17, e), inverse:this.program(19, e), data:e});
    c != null && (j += c);
    j += '</p>\n        <p class="charge-amount">' + g(h((c = a != null ? a.data : a) != null ? c.pricetext : c, a)) + "</p>\n    </div>\n\n";
    c = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(21, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '\n    <div>\n        <div>\n            <p class="billing-address-label">' + g((b = (b = d.billingAddress || (a != null ? a.billingAddress : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"billingAddress", hash:{}, data:e}) : b)) + '</p>\n            <div class="address-container">\n                <div class="address"></div>\n                <button>' + g((b = (b = d.editAddress || (a != null ? a.editAddress : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAddress", 
    hash:{}, data:e}) : b)) + "</button>\n            </div>\n        </div>\n\n";
    c = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(24, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '\n        <div class="terms">\n            <input type="checkbox" checked>\n            <a>';
    c = (b = (b = d.terms || (a != null ? a.terms : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"terms", hash:{}, data:e}) : b);
    c != null && (j += c);
    return j + '</a>\n        </div>\n    </div>\n    <button class="cancel-button">' + g((b = (b = d.cancel || (a != null ? a.cancel : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"cancel", hash:{}, data:e}) : b)) + '</button>\n    <button class="purchase-button"> ' + g((b = (b = d.purchase || (a != null ? a.purchase : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"purchase", hash:{}, data:e}) : b)) + '</button><br>\n    <p class="allow-popups">' + g((b = (b = 
    d.allowPopups || (a != null ? a.allowPopups : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"allowPopups", hash:{}, data:e}) : b)) + '</p>\n    <div class="status"></div>\n    <div class="card-banner" title="Visa mastercard, discover, paypal."></div>\n</div>'
  }, useData:!0});
  h.salePage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return'<div id="salepage">\n    <section id="featured" class="main-content section">\n        <section id="contentoverview" class="section">\n            <div class="blocked full">\n                <div class="banner">\n                    <h1 id="saleHeadline">&nbsp;</h1>\n                    <h2 id="countdown">&nbsp;</h2>\n                </div>\n            </div>\n        </section>\n    </section>\n    <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div id="noSale" class="full">\n        \n            <div id="noSaleHead" class="item">\n                <p>No sale at the moment.</p>\n            </div>\n            <div id="noSaleBody"></div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.search = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="search">\n    <h1 id="cattitle">' + f((b = (b = d.title || (a != null ? a.title : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"title", hash:{}, data:e}) : b)) + '</h1>\n    <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.sideBar = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<section id="sidebar" class="section">\n\n    <div id="searchArea">\n        <form id="searchForm" action="#" method="post"><input id=\'searchInput\' type=\'text\' name=\'search\' placeholder="' + f((b = (b = d.search || (a != null ? a.search : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"search", hash:{}, data:e}) : b)) + '"></form>\n        <div class="header-box">\n            <div class="head">\n                <h2>' + f((b = (b = d.search || (a != null ? a.search : 
    a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"search", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body"></div>\n        </div>\n    </div>\n    \n    <div id="categoryBox" class="header-box">\n        <div class="body nohead">\n            <div class="load">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <a class="level-11-banner" href="#!/level11"></a>\n\n    <a class="apm-banner">\n        <div class="apm">\n            <div class="apm-body"></div>\n        </div>\n    </a>\n\n    <div id="topBox" class="header-box accordion-box top-list">\n        <div class="head">\n            <h2>' + 
    f((b = (b = d.topPaid || (a != null ? a.topPaid : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topPaid", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body top-paid">\n            <div class="load">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="head sale">\n            <div id="feedsale"\n                 onmouseover="$(this).find(\'img\').attr(\'src\', \'images/icons/rss_orange.png\');"\n                 onmouseout="$(this).find(\'img\').attr(\'src\', \'/images/icons/rss_grey.png\');"><a\n                    href="#" title="Subscribe to RSS feed" target="_blank" class="externallink"><img\n                    src="/images/icons/rss_grey.png" alt="RSS"/></a></div>\n            <h2>' + 
    f((b = (b = d.hotDeals || (a != null ? a.hotDeals : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"hotDeals", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body sale"></div>\n        <div class="head">\n            <h2>' + f((b = (b = d.topFree || (a != null ? a.topFree : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topFree", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body top-free"></div>\n        <div class="head">\n            <h2>' + 
    f((b = (b = d.topGrossing || (a != null ? a.topGrossing : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topGrossing", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body top-grossing"></div>\n        <div class="head top-latest-head">\n            <div id="feedlatest"\n                 onmouseover="$(this).find(\'img\').attr(\'src\', \'images/icons/rss_orange.png\');"\n                 onmouseout="$(this).find(\'img\').attr(\'src\', \'/images/icons/rss_grey.png\');"><a\n                    href="#" title="Subscribe to RSS feed" target="_blank" class="externallink"><img\n                    src="/images/icons/rss_grey.png" alt="RSS"/></a></div>\n            <h2>' + 
    f((b = (b = d.latest || (a != null ? a.latest : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"latest", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body top-latest"></div>\n    </div>\n</section>'
  }, useData:!0});
  h.social = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="innerSocial" class="header-box">\n    <div class="head">\n        <h2>' + f((b = (b = d.deal || (a != null ? a.deal : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"deal", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body">\n        <a href="https://twitter.com/UnityAssetStore" class="twitter-follow-button" data-show-count="false" data-size="small">' + f((b = (b = d.follow || (a != null ? a.follow : a)) != null ? b : c, typeof b === "function" ? 
    b.call(a, {name:"follow", hash:{}, data:e}) : b)) + " @UnityAssetStore</a>\n        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');<\/script>\n\n        <iframe src=\"https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FAssetStore&amp&amp;show_faces=false&amp;header=false&amp;stream=false&amp;show_border=false\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" style=\"border:none; overflow:hidden; width:200px; height:68px;\"></iframe>\n    </div>\n</div>"
  }, useData:!0});
  h.toolbar = g({"1":function(a, d, c, e) {
    c = '<span class="buttonstrip">';
    a = d.each.call(a, a, {name:"each", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "2":function(a, d, c, e) {
    c = d.helperMissing;
    a = (d.ifCond || a && a.ifCond || c).call(a, a != null ? a.name : a, "===", "search", {name:"ifCond", hash:{}, fn:this.program(3, e), inverse:this.program(5, e), data:e});
    return a != null ? a : ""
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a id="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" data-title="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '"><span class="icon"></span>\n</a>'
  }, "5":function(a, d, c, e) {
    c = d.helperMissing;
    a = (d.ifCond || a && a.ifCond || c).call(a, a != null ? a.name : a, "===", "categories", {name:"ifCond", hash:{}, fn:this.program(6, e), inverse:this.program(8, e), data:e});
    return a != null ? a : ""
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a id="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" data-title="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" href="#!/categories">\n    <span class="icon"></span>\n</a>'
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<a id="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" data-title="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" href="#!/home" class="not-active">\n    <span class="icon"></span>\n', a = (d.ifCond || a && a.ifCond || c).call(a, a != null ? 
    a.name : a, "===", "cart", {name:"ifCond", hash:{}, fn:this.program(9, e), inverse:this.noop, data:e});
    a != null && (f += a);
    return f + "</a>"
  }, "9":function() {
    return'        <span class="count"></span>\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    c = "";
    a = d.each.call(a, a != null ? a.buttons : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + '\n<span id="adminstrip"></span>\n<div id="editorSearchArea">\n    <form id="editorSearchForm" action="#" method="post"><input id="editorSearchInput" type="text" name="search" placeholder="Search Asset Store"></form>\n</div>\n<div class="page-loader">\n    <span id="pageload" class="loadarea"><span class="loadstatus">&nbsp;</span><span\n            class="loadtext">&nbsp;</span></span>\n</div>'
  }, useData:!0});
  h.topList = g({"1":function(a) {
    var f;
    var b;
    var d, c = this.lambda, e = this.escapeExpression;
    return'    <a href="#!/content/' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.id : d, a)) + '" data-pkg="' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.title : d, a)) + '" data-pub="' + e(c((b = (d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.publisher : d, d = b) != null ? d.label : d, a)) + '" class="livelink" title="' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.title : d, a)) + '">\n        <img src="' + 
    e(c((f = (d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.keyimage : d, d = f) != null ? d.icon75 : d, a)) + '" class="icon75">\n    </a>\n'
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"    <div class='no-packages'>" + f((b = (b = d.noPackages || (a != null ? a.noPackages : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noPackages", hash:{}, data:e}) : b)) + "</div>\n"
  }, "5":function(a, d, c, e, b) {
    var f, g, h = this.lambda, c = this.escapeExpression, j = d.helperMissing, h = '    <li data-idx="' + c(h(e && e.index, a)) + '" data-pkg="' + c((g = (g = d.title || (a != null ? a.title : a)) != null ? g : j, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '" data-pub="' + c(h((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + '">\n        <a ';
    f = (d.ifCond || a && a.ifCond || j).call(a, a != null ? a.id : a, ">", 0, {name:"ifCond", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    f != null && (h += f);
    h += ' class="livelink">\n            <span class="title" title="' + c((g = (g = d.title || (a != null ? a.title : a)) != null ? g : j, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '">' + c((g = (g = d.title || (a != null ? a.title : a)) != null ? g : j, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + "</span>\n            <br>\n            <small>\n";
    f = d["if"].call(a, a != null ? a.category : a, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.program(10, e, b), data:e});
    f != null && (h += f);
    h += "            </small>\n            <br>\n";
    f = d["if"].call(a, b[1] != null ? b[1].isSale : b[1], {name:"if", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    f != null && (h += f);
    return h + "        </a>\n    </li>\n"
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'href="#!/content/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '"'
  }, "8":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return"                    " + e(c((d = a != null ? a.category : a) != null ? d.label : d, a)) + "\n"
  }, "10":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.publisher : a, {name:"if", hash:{}, fn:this.program(11, e), inverse:this.program(13, e), data:e});
    a != null && (c += a);
    return c
  }, "11":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return"                        " + e(c((d = a != null ? a.publisher : a) != null ? d.label : d, a)) + "\n"
  }, "13":function() {
    return"                        N/A\n"
  }, "15":function(a, d, c, e) {
    var b = d.helperMissing, f = this.escapeExpression, g = "", c = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(16, e), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "                <span>" + f((d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, data:e})) + "</span>\n"
  }, "16":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                <span class="original-price">\n                    ' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, data:e})) + "\n                </span>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.item : a) != null ? f.length : f, ">", 0, {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(3, e, b), data:e});
    f != null && (g += f);
    g += "<ol>\n";
    f = d.each.call(a, a != null ? a.item : a, {name:"each", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g + "</ol>"
  }, useData:!0, useDepths:!0});
  h.transactions = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda, c = '            <div class="header">\n                <div class="date">' + g((f = (f = d.date || (a != null ? a.date : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + '</div>\n                <div class="action">' + g(h(b[1] != null ? b[1].action : b[1], a)) + '</div>\n                <div class="description">' + g((f = (f = d.description || (a != null ? a.description : a)) != 
    null ? f : c, typeof f === "function" ? f.call(a, {name:"description", hash:{}, data:e}) : f)) + '</div>\n                <div class="balance">' + g((f = (f = d.balance || (a != null ? a.balance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"balance", hash:{}, data:e}) : f)) + '</div>\n                <div class="amount">' + g((f = (f = d.amount || (a != null ? a.amount : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + '</div>\n            </div>\n\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n\n            <div id="transactions" class="body">\n', 
    a = d.each.call(a, a != null ? a.transactionsCredits : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "            </div>\n"
  }, "2":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = "                <div class='transactions-item " + h((d.paymentRowClass || a && a.paymentRowClass || g).call(a, b[1], e && e.index, {name:"paymentRowClass", hash:{}, data:e})) + "'>\n                    <div>" + h((f = (f = d.date || (a != null ? a.date : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + "</div>\n                    <div class='action " + h((f = (f = d.negativeAmountClass || 
    (a != null ? a.negativeAmountClass : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"negativeAmountClass", hash:{}, data:e}) : f)) + "'>" + h((f = (f = d.method || (a != null ? a.method : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"method", hash:{}, data:e}) : f)) + "</div>\n                    <div class='description'>", c = (f = (f = d.description || (a != null ? a.description : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"description", 
    hash:{}, data:e}) : f);
    c != null && (j += c);
    j += "\n";
    c = d.each.call(a, a != null ? a.items : a, {name:"each", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "                    </div>\n                <div class='balance'>" + h((f = (f = d.balance || (a != null ? a.balance : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"balance", hash:{}, data:e}) : f)) + "</div>\n                <div class='final " + h((f = (f = d.negativeAmountClass || (a != null ? a.negativeAmountClass : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"negativeAmountClass", hash:{}, data:e}) : f)) + "'>" + h((f = (f = d.amount || (a != 
    null ? a.amount : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + "</div>\n                </div>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                        <br><a href='#!/content/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + "'>" + f((b = (b = d.package_name || (a != null ? a.package_name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_name", hash:{}, data:e}) : b)) + "</a>\n                        <div class='amount'>" + f((b = (b = d.amount || (a != null ? a.amount : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"amount", hash:{}, data:e}) : b)) + "</div>\n                        <div class='quantity'>" + f((b = (b = d.qnty || (a != null ? a.qnty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qnty", hash:{}, data:e}) : b)) + "</div>\n"
  }, "5":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, a != null ? a.transactions : a, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(10, e, b), data:e});
    a != null && (c += a);
    return c
  }, "6":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda, c = '                <div class="header">\n                    <div class="date">' + g((f = (f = d.date || (a != null ? a.date : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + '</div>\n                    <div class="action">' + g(h(b[1] != null ? b[1].action : b[1], a)) + '</div>\n                    <div class="description">' + g((f = (f = d.description || (a != null ? a.description : 
    a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"description", hash:{}, data:e}) : f)) + '</div>\n                    <div class="amount">' + g((f = (f = d.amount || (a != null ? a.amount : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + '</div>\n                </div>\n\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n\n                <div id="transactions" class="body">\n', 
    a = d.each.call(a, a != null ? a.transactions : a, {name:"each", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "                </div>\n"
  }, "7":function(a, d, c, e, b) {
    var i;
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda, j = "                        <div class='transactions-item " + h((d.paymentRowClass || a && a.paymentRowClass || c).call(a, b[1], e && e.index, {name:"paymentRowClass", hash:{}, data:e})) + "'>\n                            <div>" + h((g = (g = d.date || (a != null ? a.date : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"date", hash:{}, data:e}) : g)) + "</div>\n                            <div class='action'>" + 
    h((g = (g = d.action || (a != null ? a.action : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"action", hash:{}, data:e}) : g)) + "</div>\n                            <div class='description'>\n                                <span>" + h(j((i = (f = (f = a != null ? a.Kharma : a) != null ? f.l10n : f) != null ? f.user : f, f = i) != null ? f.invoice : f, a)) + "# " + h((g = (g = d.invoice || (a != null ? a.invoice : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"invoice", 
    hash:{}, data:e}) : g)) + "</span><br>\n";
    f = d.each.call(a, a != null ? a.items : a, {name:"each", hash:{}, fn:this.program(8, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    return j + "                            </div>\n                            <div class='balance'>" + h((g = (g = d.amount || (a != null ? a.amount : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"amount", hash:{}, data:e}) : g)) + "</div>\n                        </div>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                                    <a href='#!/content/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + "'>" + f((b = (b = d.package_name || (a != null ? a.package_name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_name", hash:{}, data:e}) : b)) + "</a>\n                                    <div class='amount'>" + f((b = (b = d.amount || (a != null ? a.amount : a)) != null ? 
    b : c, typeof b === "function" ? b.call(a, {name:"amount", hash:{}, data:e}) : b)) + "</div>\n                                    <div class='quantity'>" + f((b = (b = d.qnty || (a != null ? a.qnty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qnty", hash:{}, data:e}) : b)) + "</div><br>\n"
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div id="transactionsCreditPaypal" class="body no-results">' + f((b = (b = d.noTransactionsLabel || (a != null ? a.noTransactionsLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noTransactionsLabel", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, c = '<section id="orders-transactions" class="section limited">\n    <div class="header-box">\n        <div class="head">\n            <h2>' + g((f = (f = d.header || (a != null ? a.header : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"header", hash:{}, data:e}) : f)) + "</h2>\n        </div>\n\n", a = d["if"].call(a, a != null ? a.transactionsCredits : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(5, 
    e, b), data:e});
    a != null && (c += a);
    return c + "    </div>\n</section>"
  }, useData:!0, useDepths:!0});
  h.userPage = g({"1":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "                <div>", e = (b = (b = d.topRated || (a != null ? a.topRated : a)) != null ? b : g, f = {name:"topRated", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.topRated || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "</div>\n"
  }, "2":function(a, d, c, e) {
    var b, f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing, c = "<div class='top-rated'>\n                    <a href='#!" + g(c((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + g(c((b = a != null ? a.link : a) != null ? b.id : b, a)) + "' class='livelink'>" + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a><br>\n                    ";
    b = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c + "\n                    </div>"
  }, "3":function(a, d, c, e) {
    c = d.helperMissing;
    a = (d.ratingUI || a && a.ratingUI || c).call(a, 1, a != null ? a.rating : a, {name:"ratingUI", hash:{}, data:e});
    return a != null ? a : ""
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <div style='padding: 1em;'>" + f((b = (b = d.noRatedPackages || (a != null ? a.noRatedPackages : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noRatedPackages", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div id="userpage">\n    <section id="commentandrated" class="section">\n        <h1>' + g((b = (b = d.profile || (a != null ? a.profile : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"profile", hash:{}, data:e}) : b)) + '</h1>\n        <div class="longfull" id="left">\n            <div id="userBox" class="header-box">\n                <div class="head">\n                    <h2>' + g((b = (b = d.username || (a != null ? 
    a.username : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"username", hash:{}, data:e}) : b)) + '</h2>\n                    <a class="reportAbuse" rel="external" title="' + g((b = (b = d.reportAbuse || (a != null ? a.reportAbuse : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"reportAbuse", hash:{}, data:e}) : b)) + '"></a>\n                </div>\n                <div class="body">\n                    <a href="http://gravatar.com" target="_blank" title="' + 
    g((b = (b = d.gravatar || (a != null ? a.gravatar : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"gravatar", hash:{}, data:e}) : b)) + '"><img class="bioimage"></a>\n                    <p class="bio">', c = (d.formattedBio || a && a.formattedBio || f).call(a, a != null ? a.data : a, {name:"formattedBio", hash:{}, data:e});
    c != null && (h += c);
    h += '</p>\n                </div>\n            </div>\n        </div>\n        <div class="header-box" id="right">\n            <div class="head" id="headUserTopRated">\n                <h2>' + g((b = (b = d.highestRatedAssets || (a != null ? a.highestRatedAssets : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"highestRatedAssets", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body vscroll" id="innerUserTopRated">\n';
    c = d["if"].call(a, a != null ? a.topRated : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(5, e), data:e});
    c != null && (h += c);
    return h + '            </div>\n        </div>\n    </section>\n    <section id="wishList" class="section">\n        <div class="header-box">\n            <div class="wish-list">\n                <div class="head wish-list">\n                    <h2>' + g((b = (b = d.wishListName || (a != null ? a.wishListName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"wishListName", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n            </div>\n            <div class="body vscroll">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n    <section id="comments" class="section limited">\n        <div id="reviewBox" class="header-box">\n            <div class="head">\n                <h2>' + 
    g((b = (b = d.reviews || (a != null ? a.reviews : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"reviews", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.userPageComments = g({"1":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.comments : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "2":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.lambda, j = this.escapeExpression, k = '        <div class="comment-block user-page">\n            <div class="comment-body ', c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += " ";
    c = (d.isEditable || a && a.isEditable || g).call(a, b[1] != null ? b[1].data : b[1], a, {name:"isEditable", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '">\n                <a class="reportAbuse" rel="external" title="' + j(h(b[2] != null ? b[2].reportAbuse : b[2], a)) + '" data-id=' + j((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + " data-package-id=" + j(h((c = a != null ? a.link : a) != null ? c.id : c, a)) + "></a>\n";
    c = d["if"].call(a, (c = b[2] != null ? b[2].data : b[2]) != null ? c.editable : c, {name:"if", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, a != null ? a.title : a, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(11, e, b), data:e});
    c != null && (k += c);
    k += '                <div class="date"><p>' + j((d.formattedDate || a && a.formattedDate || g).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + '</p></div>\n                <div class="comment">\n                    <h3>' + j((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + '</h3>\n                    <p class="comment-text">';
    c = (f = (f = d.text || (a != null ? a.text : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"text", hash:{}, data:e}) : f);
    c != null && (k += c);
    k += "</p>\n";
    c = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += "                </div>\n            </div>\n";
    c = d.each.call(a, a != null ? a.replies : a, {name:"each", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    return k + "        </div>\n"
  }, "3":function() {
    return"admin"
  }, "5":function() {
    return"editable"
  }, "7":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda;
    return'                    <div class="body-buttons">\n                        <a href="#" class="edit-review" data-id=' + h((g = (g = d.id || (a != null ? a.id : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"id", hash:{}, data:e}) : g)) + " data-package-id=" + h(j((f = a != null ? a.link : a) != null ? f.id : f, a)) + ">" + h(j(b[2] != null ? b[2].editButton : b[2], a)) + '</a>\n                        <a href="#" class="delete-review" data-id=' + h((g = (g = d.id || (a != 
    null ? a.id : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"id", hash:{}, data:e}) : g)) + " data-package-id=" + h(j((f = a != null ? a.link : a) != null ? f.id : f, a)) + ">" + h(j(b[2] != null ? b[2].deleteButton : b[2], a)) + "</a>\n                    </div>\n"
  }, "9":function(a, d, c, e) {
    var b, f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return'                    <h2 class="package-name"><a class="livelink" href="#!/' + g(c((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + g(c((b = a != null ? a.link : a) != null ? b.id : b, a)) + '">' + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a></h2>\n"
  }, "11":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'                    <h2 class="package-name livelink" data-template="' + e(c((d = a != null ? a.link : a) != null ? d.type : d, a)) + '" data-link="' + e(c((d = a != null ? a.link : a) != null ? d.id : d, a)) + '"></h2>\n'
  }, "13":function(a, d, c, e) {
    var b = d.helperMissing, c = "                        ", a = (d.ratingUI || a && a.ratingUI || b).call(a, 1, a != null ? a.rating : a, {name:"ratingUI", hash:{}, data:e});
    a != null && (c += a);
    return c + "\n"
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '                <div class="reply-block">\n                    <div class="comment-body">\n                        <div class="comment">\n                            <h2 class="comment">' + f((b = (b = d.subject || (a != null ? a.subject : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"subject", hash:{}, data:e}) : b)) + '</h2>\n                            <div class="date"><p>' + f((b = (b = d.date || (a != null ? a.date : 
    a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"date", hash:{}, data:e}) : b)) + '</p></div>\n                            <p class="comment-text">', a = (b = (b = d.text || (a != null ? a.text : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"text", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + "</p>\n                        </div>\n                    </div>\n                </div>\n"
  }, "17":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div style="padding: 1em;">' + f((b = (b = d.noReviews || (a != null ? a.noReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noReviews", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f;
    f = d["if"].call(a, (f = a != null ? a.comments : a) != null ? f.length : f, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(17, e, b), data:e});
    return f != null ? f : ""
  }, useData:!0, useDepths:!0});
  h.wishList = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return'<div id="wishListPage">\n    <h1 id="cattitle"></h1>\n    <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.wishListDropDown = g({"1":function(a, d, c, e) {
    c = "";
    a = d.each.call(a, a != null ? a.results : a, {name:"each", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "2":function(a, d, c, e) {
    var b, f, g, h = this.lambda, c = this.escapeExpression, j = d.helperMissing, k = d.blockHelperMissing, h = '        <div class="wish-list-result">\n            <a href="#!/' + c(h((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + c(h((b = a != null ? a.link : a) != null ? b.id : b, a)) + '"><img src="' + c(h((b = a != null ? a.keyimage : a) != null ? b.icon75 : b, a)) + '"></a>\n            <div class="wish-list-details">\n                <a href="#!/' + c(h((b = a != null ? a.link : 
    a) != null ? b.type : b, a)) + "/" + c(h((b = a != null ? a.link : a) != null ? b.id : b, a)) + '" class="title" title="' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '">' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a>\n                ";
    b = (f = (f = d.category || (a != null ? a.category : a)) != null ? f : j, g = {name:"category", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.category || (b = k.call(a, b, g));
    b != null && (h += b);
    h += "\n                ";
    b = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : j, g = {name:"publisher", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (b = k.call(a, b, g));
    b != null && (h += b);
    h += "\n                ";
    b = (d.ratingUI || a && a.ratingUI || j).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    b != null && (h += b);
    h += '<br>\n                <a data-id="' + c((f = (f = d.id || (a != null ? a.id : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" class="wish-list on-wish-list"></a><a class="wish-list-buy" data-id="' + c((f = (f = d.id || (a != null ? a.id : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + "\" title=' + Kharma.l10n.wishList.buy + '></a>";
    b = (f = (f = d.price_original || (a != null ? a.price_original : a)) != null ? f : j, g = {name:"price_original", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.price_original || (b = k.call(a, b, g));
    b != null && (h += b);
    h += '<span class="price">';
    b = (d.formattedPrice || a && a.formattedPrice || j).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    b != null && (h += b);
    return h + "</span>\n            </div>\n        </div>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#category/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '/page/1/sortby/popularity" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, 
    data:e}) : b)) + "</a>"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#publisher/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "</a>"
  }, "7":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a, {name:"formattedPrice", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "8":function() {
    return""
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div class="wish-list-empty">' + f((b = (b = d.wishListIsEmpty || (a != null ? a.wishListIsEmpty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"wishListIsEmpty", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = "";
    b = d["if"].call(a, (b = a != null ? a.results : a) != null ? b.length : b, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(10, e), data:e});
    b != null && (h += b);
    return h + '<div class="all"><a href="#!/wishlist/' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">' + g((f = (f = d.seeAll || (a != null ? a.seeAll : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"seeAll", hash:{}, data:e}) : f)) + " (" + g((f = (f = d.total || (a != null ? a.total : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"total", hash:{}, data:e}) : f)) + ")</a></div>\n"
  }, useData:!0})
})();

