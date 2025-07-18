/*! bootstrap-switch-button 2020-02-16 */
"use strict";
!function() {
    class t {
        constructor(t, e) {
            const s = "On"
              , i = "primary"
              , n = "Off"
              , o = "light"
              , h = ""
              , l = ""
              , d = null
              , a = null;
            e = e || {},
            this.element = t,
            this.options = {
                onlabel: t.getAttribute("data-onlabel") || e.onlabel || s,
                onstyle: t.getAttribute("data-onstyle") || e.onstyle || i,
                offlabel: t.getAttribute("data-offlabel") || e.offlabel || n,
                offstyle: t.getAttribute("data-offstyle") || e.offstyle || o,
                size: t.getAttribute("data-size") || e.size || h,
                style: t.getAttribute("data-style") || e.style || l,
                width: t.getAttribute("data-width") || e.width || d,
                height: t.getAttribute("data-height") || e.height || a
            },
            this.render()
        }
        render() {
            function t(t) {
                const e = window.getComputedStyle(t)
                  , s = t.offsetHeight
                  , i = parseFloat(e.borderTopWidth);
                return s - parseFloat(e.borderBottomWidth) - i - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom)
            }
            var e = document.createElement("label");
            e.setAttribute("class", "btn btn-" + this.options.onstyle + " btn-" + this.options.size),
            e.setAttribute("for", this.element.id),
            e.innerHTML = this.options.onlabel;
            var s = document.createElement("label");
            s.setAttribute("class", "btn btn-" + this.options.offstyle + " btn-" + this.options.size),
            e.setAttribute("for", this.element.id),
            s.innerHTML = this.options.offlabel;
            var i = document.createElement("span");
            i.setAttribute("class", "switch-handle btn btn-light btn-" + this.options.size);
            var n = document.createElement("div");
            n.setAttribute("class", "switch-group"),
            n.appendChild(e),
            n.appendChild(s),
            n.appendChild(i);
            var o = document.createElement("div");
            o.setAttribute("class", "switch btn"),
            o.classList.add(this.element.checked ? "btn-" + this.options.onstyle : "btn-" + this.options.offstyle),
            this.options.size && o.classList.add("btn-" + this.options.size),
            this.options.style && o.classList.add(this.options.style),
            this.element.parentElement.insertBefore(o, this.element),
            o.appendChild(this.element),
            o.appendChild(n),
            o.style.width = (this.options.width || Math.max(e.getBoundingClientRect().width, s.getBoundingClientRect().width + i.getBoundingClientRect().width / 2)) + "px",
            o.style.height = (this.options.height || Math.max(e.getBoundingClientRect().height, s.getBoundingClientRect().height)) + "px",
            e.classList.add("switch-on"),
            s.classList.add("switch-off"),
            this.options.height && (e.style.lineHeight = t(e) + "px",
            s.style.lineHeight = t(s) + "px"),
            o.addEventListener("touchstart", this.toggle.bind(this)),
            o.addEventListener("click", this.toggle.bind(this)),
            this.switch = o,
            this.element.switchBtn = this,
            this.update(!0)
        }
        toggle(t) {
            this.element.checked ? this.off() : this.on(),
            void 0 !== t && t && t.preventDefault()
        }
        on(t) {
            if (this.element.disabled)
                return !1;
            this.switch.classList.remove("btn-" + this.options.offstyle),
            this.switch.classList.add("btn-" + this.options.onstyle),
            this.switch.classList.remove("off"),
            this.element.checked = !0,
            t || this.trigger()
        }
        off(t) {
            if (this.element.disabled)
                return !1;
            this.switch.classList.remove("btn-" + this.options.onstyle),
            this.switch.classList.add("btn-" + this.options.offstyle),
            this.switch.classList.add("off"),
            this.element.checked = !1,
            t || this.trigger()
        }
        enable() {
            this.switch.classList.remove("disabled"),
            this.switch.removeAttribute("disabled"),
            this.element.removeAttribute("disabled")
        }
        disable() {
            this.switch.classList.add("disabled"),
            this.switch.setAttribute("disabled", "disabled"),
            this.element.setAttribute("disabled", "disabled")
        }
        update(t) {
            this.element.disabled ? this.disable() : this.enable(),
            this.element.checked ? this.on(t) : this.off(t)
        }
        trigger(t) {
            t || this.element.dispatchEvent(new Event("change",{
                bubbles: !0
            }))
        }
        destroy() {
            this.switch.parentNode.insertBefore(this.element, this.switch),
            this.switch.parentNode.removeChild(this.switch),
            delete this.element.switchBtn,
            delete this.switch
        }
    }
    Element.prototype.switchButton = function(e, s) {
        var i = this.switchBtn || new t(this,e);
        e && "string" == typeof e && ("toggle" == e.toLowerCase() ? i.toggle() : "on" == e.toLowerCase() ? i.on(s) : "off" == e.toLowerCase() ? i.off(s) : "enable" == e.toLowerCase() ? i.enable() : "disable" == e.toLowerCase() ? i.disable() : "destroy" == e.toLowerCase() && i.destroy())
    }
    ,
    "undefined" != typeof window && (window.onload = function() {
        document.querySelectorAll('input[type=checkbox][data-toggle="switchbutton"]').forEach(function(t) {
            t.switchButton()
        })
    }
    ),
    "undefined" != typeof module && module.exports && (module.exports = t)
}();
//# sourceMappingURL=bootstrap-switch-button.min.js.map
