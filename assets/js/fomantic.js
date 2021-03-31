 /*
  * # Fomantic UI - 2.8.4
  * https://github.com/fomantic/Fomantic-UI
  * http://fomantic-ui.com/
  *
  * Copyright 2014 Contributors
  * Released under the MIT license
  * http://opensource.org/licenses/MIT
  *
  */
 ! function(p, h, v, b) {
    p.isFunction = p.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, p.site = p.fn.site = function(e) {
        var s, l, i = (new Date).getTime(),
            o = [],
            t = e,
            n = "string" == typeof t,
            c = [].slice.call(arguments, 1),
            u = p.isPlainObject(e) ? p.extend(!0, {}, p.site.settings, e) : p.extend({}, p.site.settings),
            a = u.namespace,
            d = u.error,
            r = "module-" + a,
            f = p(v),
            m = this,
            g = f.data(r);
        return s = {
            initialize: function() {
                s.instantiate()
            },
            instantiate: function() {
                s.verbose("Storing instance of site", s), g = s, f.data(r, s)
            },
            normalize: function() {
                s.fix.console(), s.fix.requestAnimationFrame()
            },
            fix: {
                console: function() {
                    s.debug("Normalizing window.console"), console !== b && console.log !== b || (s.verbose("Console not available, normalizing events"), s.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (s.verbose("Console group not available, normalizing events"), h.console.group = function() {}, h.console.groupEnd = function() {}, h.console.groupCollapsed = function() {}), void 0 === console.markTimeline && (s.verbose("Mark timeline not available, normalizing events"), h.console.markTimeline = function() {})
                },
                consoleClear: function() {
                    s.debug("Disabling programmatic console clearing"), h.console.clear = function() {}
                },
                requestAnimationFrame: function() {
                    s.debug("Normalizing requestAnimationFrame"), h.requestAnimationFrame === b && (s.debug("RequestAnimationFrame not available, normalizing event"), h.requestAnimationFrame = h.requestAnimationFrame || h.mozRequestAnimationFrame || h.webkitRequestAnimationFrame || h.msRequestAnimationFrame || function(e) {
                        setTimeout(e, 0)
                    })
                }
            },
            moduleExists: function(e) {
                return p.fn[e] !== b && p.fn[e].settings !== b
            },
            enabled: {
                modules: function(e) {
                    var n = [];
                    return e = e || u.modules, p.each(e, function(e, t) {
                        s.moduleExists(t) && n.push(t)
                    }), n
                }
            },
            disabled: {
                modules: function(e) {
                    var n = [];
                    return e = e || u.modules, p.each(e, function(e, t) {
                        s.moduleExists(t) || n.push(t)
                    }), n
                }
            },
            change: {
                setting: function(o, a, e, r) {
                    e = "string" == typeof e ? "all" === e ? u.modules : [e] : e || u.modules, r = r === b || r, p.each(e, function(e, t) {
                        var n, i = !s.moduleExists(t) || (p.fn[t].settings.namespace || !1);
                        s.moduleExists(t) && (s.verbose("Changing default setting", o, a, t), p.fn[t].settings[o] = a, r && i && 0 < (n = p(":data(module-" + i + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", o, a)))
                    })
                },
                settings: function(i, e, o) {
                    e = "string" == typeof e ? [e] : e || u.modules, o = o === b || o, p.each(e, function(e, t) {
                        var n;
                        s.moduleExists(t) && (s.verbose("Changing default setting", i, t), p.extend(!0, p.fn[t].settings, i), o && a && 0 < (n = p(":data(module-" + a + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", i)))
                    })
                }
            },
            enable: {
                console: function() {
                    s.console(!0)
                },
                debug: function(e, t) {
                    e = e || u.modules, s.debug("Enabling debug for modules", e), s.change.setting("debug", !0, e, t)
                },
                verbose: function(e, t) {
                    e = e || u.modules, s.debug("Enabling verbose debug for modules", e), s.change.setting("verbose", !0, e, t)
                }
            },
            disable: {
                console: function() {
                    s.console(!1)
                },
                debug: function(e, t) {
                    e = e || u.modules, s.debug("Disabling debug for modules", e), s.change.setting("debug", !1, e, t)
                },
                verbose: function(e, t) {
                    e = e || u.modules, s.debug("Disabling verbose debug for modules", e), s.change.setting("verbose", !1, e, t)
                }
            },
            console: function(e) {
                if (e) {
                    if (g.cache.console === b) return void s.error(d.console);
                    s.debug("Restoring console function"), h.console = g.cache.console
                } else s.debug("Disabling console function"), g.cache.console = h.console, h.console = {
                    clear: function() {},
                    error: function() {},
                    group: function() {},
                    groupCollapsed: function() {},
                    groupEnd: function() {},
                    info: function() {},
                    log: function() {},
                    markTimeline: function() {},
                    warn: function() {}
                }
            },
            destroy: function() {
                s.verbose("Destroying previous site for", f), f.removeData(r)
            },
            cache: {},
            setting: function(e, t) {
                if (p.isPlainObject(e)) p.extend(!0, u, e);
                else {
                    if (t === b) return u[e];
                    u[e] = t
                }
            },
            internal: function(e, t) {
                if (p.isPlainObject(e)) p.extend(!0, s, e);
                else {
                    if (t === b) return s[e];
                    s[e] = t
                }
            },
            debug: function() {
                u.debug && (u.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), s.debug.apply(console, arguments)))
            },
            verbose: function() {
                u.verbose && u.debug && (u.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), s.verbose.apply(console, arguments)))
            },
            error: function() {
                s.error = Function.prototype.bind.call(console.error, console, u.name + ":"), s.error.apply(console, arguments)
            },
            performance: {
                log: function(e) {
                    var t, n;
                    u.performance && (n = (t = (new Date).getTime()) - (i || t), i = t, o.push({
                        Element: m,
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                    })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                },
                display: function() {
                    var e = u.name + ":",
                        n = 0;
                    i = !1, clearTimeout(s.performance.timer), p.each(o, function(e, t) {
                        n += t["Execution Time"]
                    }), e += " " + n + "ms", (console.group !== b || console.table !== b) && 0 < o.length && (console.groupCollapsed(e), console.table ? console.table(o) : p.each(o, function(e, t) {
                        console.log(t.Name + ": " + t["Execution Time"] + "ms")
                    }), console.groupEnd()), o = []
                }
            },
            invoke: function(i, e, t) {
                var o, a, n, r = g;
                return e = e || c, t = m || t, "string" == typeof i && r !== b && (i = i.split(/[\. ]/), o = i.length - 1, p.each(i, function(e, t) {
                    var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                    if (p.isPlainObject(r[n]) && e != o) r = r[n];
                    else {
                        if (r[n] !== b) return a = r[n], !1;
                        if (!p.isPlainObject(r[t]) || e == o) return r[t] !== b ? a = r[t] : s.error(d.method, i), !1;
                        r = r[t]
                    }
                })), p.isFunction(a) ? n = a.apply(t, e) : a !== b && (n = a), Array.isArray(l) ? l.push(n) : l !== b ? l = [l, n] : n !== b && (l = n), a
            }
        }, n ? (g === b && s.initialize(), s.invoke(t)) : (g !== b && s.destroy(), s.initialize()), l !== b ? l : this
    }, p.site.settings = {
        name: "Site",
        namespace: "site",
        error: {
            console: "Console cannot be restored, most likely it was overwritten outside of module",
            method: "The method you called is not defined."
        },
        debug: !1,
        verbose: !1,
        performance: !0,
        modules: ["accordion", "api", "calendar", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "slider", "rating", "shape", "sidebar", "state", "sticky", "tab", "toast", "transition", "visibility", "visit"],
        siteNamespace: "site",
        namespaceStub: {
            cache: {},
            config: {},
            sections: {},
            section: {},
            utilities: {}
        }
    }, p.extend(p.expr[":"], {
        data: p.expr.createPseudo ? p.expr.createPseudo(function(t) {
            return function(e) {
                return !!p.data(e, t)
            }
        }) : function(e, t, n) {
            return !!p.data(e, n[3])
        }
    })
}(jQuery, window, document),
function(M, I, j, q) {
    "use strict";
    M.isFunction = M.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, I = void 0 !== I && I.Math == Math ? I : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), M.fn.form = function(k) {
        var T, S = M(this),
            D = S.selector || "",
            A = (new Date).getTime(),
            E = [],
            F = k,
            P = arguments[1],
            O = "string" == typeof F,
            R = [].slice.call(arguments, 1);
        return S.each(function() {
            var n, f, t, e, g, c, m, p, h, i, u, o, a, s, l, v, d = M(this),
                b = this,
                y = [],
                x = !1,
                r = !1,
                C = !1,
                w = ["clean", "clean"];
            (v = {
                initialize: function() {
                    v.get.settings(), O ? (l === q && v.instantiate(), v.invoke(F)) : (l !== q && l.invoke("destroy"), v.verbose("Initializing form validation", d, g), v.bindEvents(), v.set.defaults(), g.autoCheckRequired && v.set.autoCheck(), v.instantiate())
                },
                instantiate: function() {
                    v.verbose("Storing instance of module", v), l = v, d.data(a, v)
                },
                destroy: function() {
                    v.verbose("Destroying previous module", l), v.removeEvents(), d.removeData(a)
                },
                refresh: function() {
                    v.verbose("Refreshing selector cache"), n = d.find(p.field), f = d.find(p.group), t = d.find(p.message), d.find(p.prompt), e = d.find(p.submit), d.find(p.clear), d.find(p.reset)
                },
                submit: function() {
                    v.verbose("Submitting form", d), r = !0, d.submit()
                },
                attachEvents: function(e, t) {
                    t = t || "submit", M(e).on("click" + s, function(e) {
                        v[t](), e.preventDefault()
                    })
                },
                bindEvents: function() {
                    v.verbose("Attaching form events"), d.on("submit" + s, v.validate.form).on("blur" + s, p.field, v.event.field.blur).on("click" + s, p.submit, v.submit).on("click" + s, p.reset, v.reset).on("click" + s, p.clear, v.clear), g.keyboardShortcuts && d.on("keydown" + s, p.field, v.event.field.keydown), n.each(function(e, t) {
                        var n = M(t),
                            i = n.prop("type"),
                            o = v.get.changeEvent(i, n);
                        n.on(o + s, v.event.field.change)
                    }), g.preventLeaving && M(I).on("beforeunload" + s, v.event.beforeUnload), n.on("change click keyup keydown blur", function(e) {
                        M(this).triggerHandler(e.type + ".dirty")
                    }), n.on("change.dirty click.dirty keyup.dirty keydown.dirty blur.dirty", v.determine.isDirty), d.on("dirty" + s, function(e) {
                        g.onDirty.call()
                    }), d.on("clean" + s, function(e) {
                        g.onClean.call()
                    })
                },
                clear: function() {
                    n.each(function(e, t) {
                        var n = M(t),
                            i = n.parent(),
                            o = n.closest(f),
                            a = o.find(p.prompt),
                            r = n.closest(p.uiCalendar),
                            s = n.data(m.defaultValue) || "",
                            l = i.is(p.uiCheckbox),
                            c = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                            u = 0 < r.length && v.can.useElement("calendar");
                        o.hasClass(h.error) && (v.verbose("Resetting error on field", o), o.removeClass(h.error), a.remove()), c ? (v.verbose("Resetting dropdown value", i, s), i.dropdown("clear", !0)) : l ? n.prop("checked", !1) : u ? r.calendar("clear") : (v.verbose("Resetting field value", n, s), n.val(""))
                    })
                },
                reset: function() {
                    n.each(function(e, t) {
                        var n = M(t),
                            i = n.parent(),
                            o = n.closest(f),
                            a = n.closest(p.uiCalendar),
                            r = o.find(p.prompt),
                            s = n.data(m.defaultValue),
                            l = i.is(p.uiCheckbox),
                            c = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                            u = 0 < a.length && v.can.useElement("calendar"),
                            d = o.hasClass(h.error);
                        s !== q && (d && (v.verbose("Resetting error on field", o), o.removeClass(h.error), r.remove()), c ? (v.verbose("Resetting dropdown value", i, s), i.dropdown("restore defaults", !0)) : l ? (v.verbose("Resetting checkbox value", i, s), n.prop("checked", s)) : u ? a.calendar("set date", s) : (v.verbose("Resetting field value", n, s), n.val(s)))
                    }), v.determine.isDirty()
                },
                determine: {
                    isValid: function() {
                        var n = !0;
                        return M.each(c, function(e, t) {
                            v.validate.field(t, e, !0) || (n = !1)
                        }), n
                    },
                    isDirty: function(e) {
                        var o = !1;
                        n.each(function(e, t) {
                            var n, i = M(t);
                            n = 0 < i.filter(p.checkbox).length ? v.is.checkboxDirty(i) : v.is.fieldDirty(i), i.data(g.metadata.isDirty, n), o |= n
                        }), o ? v.set.dirty() : v.set.clean(), e && "dirty" === e.namespace && (e.stopImmediatePropagation(), e.preventDefault())
                    }
                },
                is: {
                    bracketedRule: function(e) {
                        return e.type && e.type.match(g.regExp.bracket)
                    },
                    shorthandFields: function(e) {
                        var t = e[Object.keys(e)[0]];
                        return v.is.shorthandRules(t)
                    },
                    shorthandRules: function(e) {
                        return "string" == typeof e || Array.isArray(e)
                    },
                    empty: function(e) {
                        return !e || 0 === e.length || (e.is(p.checkbox) ? !e.is(":checked") : v.is.blank(e))
                    },
                    blank: function(e) {
                        return "" === M.trim(e.val())
                    },
                    valid: function(e) {
                        var n = !0;
                        return e ? (v.verbose("Checking if field is valid", e), v.validate.field(c[e], e, !1)) : (v.verbose("Checking if form is valid"), M.each(c, function(e, t) {
                            v.is.valid(e) || (n = !1)
                        }), n)
                    },
                    dirty: function() {
                        return C
                    },
                    clean: function() {
                        return !C
                    },
                    fieldDirty: function(e) {
                        var t = e.data(m.defaultValue);
                        null == t && (t = "");
                        var n = e.val();
                        null == n && (n = "");
                        var i = /^(true|false)$/i;
                        return i.test(t) && i.test(n) ? !new RegExp("^" + t + "$", "i").test(n) : n !== t
                    },
                    checkboxDirty: function(e) {
                        return e.data(m.defaultValue) !== e.is(":checked")
                    },
                    justDirty: function() {
                        return "dirty" === w[0]
                    },
                    justClean: function() {
                        return "clean" === w[0]
                    }
                },
                removeEvents: function() {
                    d.off(s), n.off(s), e.off(s), n.off(s)
                },
                event: {
                    field: {
                        keydown: function(e) {
                            var t = M(this),
                                n = e.which,
                                i = t.is(p.input),
                                o = t.is(p.checkbox),
                                a = 0 < t.closest(p.uiDropdown).length,
                                r = 13;
                            n == 27 && (v.verbose("Escape key pressed blurring field"), t.blur()), e.ctrlKey || n != r || !i || a || o || (x || (t.one("keyup" + s, v.event.field.keyup), v.submit(), v.debug("Enter pressed on input submitting form")), x = !0)
                        },
                        keyup: function() {
                            x = !1
                        },
                        blur: function(e) {
                            var t = M(this),
                                n = t.closest(f),
                                i = v.get.validation(t);
                            n.hasClass(h.error) ? (v.debug("Revalidating field", t, i), i && v.validate.field(i)) : "blur" == g.on && i && v.validate.field(i)
                        },
                        change: function(e) {
                            var t = M(this),
                                n = t.closest(f),
                                i = v.get.validation(t);
                            i && ("change" == g.on || n.hasClass(h.error) && g.revalidate) && (clearTimeout(v.timer), v.timer = setTimeout(function() {
                                v.debug("Revalidating field", t, v.get.validation(t)), v.validate.field(i)
                            }, g.delay))
                        }
                    },
                    beforeUnload: function(e) {
                        if (v.is.dirty() && !r) return (e = e || I.event) && (e.returnValue = g.text.leavingMessage), g.text.leavingMessage
                    }
                },
                get: {
                    ancillaryValue: function(e) {
                        return !(!e.type || !e.value && !v.is.bracketedRule(e)) && (e.value !== q ? e.value : e.type.match(g.regExp.bracket)[1] + "")
                    },
                    ruleName: function(e) {
                        return v.is.bracketedRule(e) ? e.type.replace(e.type.match(g.regExp.bracket)[0], "") : e.type
                    },
                    changeEvent: function(e, t) {
                        return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : v.get.inputEvent()
                    },
                    inputEvent: function() {
                        return j.createElement("input").oninput !== q ? "input" : j.createElement("input").onpropertychange !== q ? "propertychange" : "keyup"
                    },
                    fieldsFromShorthand: function(e) {
                        var i = {};
                        return M.each(e, function(n, e) {
                            "string" == typeof e && (e = [e]), i[n] = {
                                rules: []
                            }, M.each(e, function(e, t) {
                                i[n].rules.push({
                                    type: t
                                })
                            })
                        }), i
                    },
                    prompt: function(e, t) {
                        var n, i, o = v.get.ruleName(e),
                            a = v.get.ancillaryValue(e),
                            r = v.get.field(t.identifier),
                            s = r.val(),
                            l = M.isFunction(e.prompt) ? e.prompt(s) : e.prompt || g.prompt[o] || g.text.unspecifiedRule,
                            c = -1 !== l.search("{value}"),
                            u = -1 !== l.search("{name}");
                        return c && (l = l.replace(/\{value\}/g, r.val())), u && (i = 1 == (n = r.closest(p.group).find("label").eq(0)).length ? n.text() : r.prop("placeholder") || g.text.unspecifiedField, l = l.replace(/\{name\}/g, i)), l = (l = l.replace(/\{identifier\}/g, t.identifier)).replace(/\{ruleValue\}/g, a), e.prompt || v.verbose("Using default validation prompt for type", l, o), l
                    },
                    settings: function() {
                        if (M.isPlainObject(k)) {
                            var e = Object.keys(k);
                            0 < e.length && (k[e[0]].identifier !== q && k[e[0]].rules !== q) ? (g = M.extend(!0, {}, M.fn.form.settings, P), c = M.extend({}, M.fn.form.settings.defaults, k), v.error(g.error.oldSyntax, b), v.verbose("Extending settings from legacy parameters", c, g)) : (k.fields && v.is.shorthandFields(k.fields) && (k.fields = v.get.fieldsFromShorthand(k.fields)), g = M.extend(!0, {}, M.fn.form.settings, k), c = M.extend({}, M.fn.form.settings.defaults, g.fields), v.verbose("Extending settings", c, g))
                        } else g = M.fn.form.settings, c = M.fn.form.settings.defaults, v.verbose("Using default form validation", c, g);
                        o = g.namespace, m = g.metadata, p = g.selector, h = g.className, i = g.regExp, u = g.error, a = "module-" + o, s = "." + o, l = d.data(a), v.refresh()
                    },
                    field: function(e) {
                        var t;
                        return v.verbose("Finding field with identifier", e), e = v.escape.string(e), 0 < (t = n.filter("#" + e)).length ? t : 0 < (t = n.filter('[name="' + e + '"]')).length ? t : 0 < (t = n.filter('[name="' + e + '[]"]')).length ? t : 0 < (t = n.filter("[data-" + m.validate + '="' + e + '"]')).length ? t : M("<input/>")
                    },
                    fields: function(e) {
                        var n = M();
                        return M.each(e, function(e, t) {
                            n = n.add(v.get.field(t))
                        }), n
                    },
                    validation: function(i) {
                        var o, a;
                        return !!c && (M.each(c, function(e, n) {
                            a = n.identifier || e, M.each(v.get.field(a), function(e, t) {
                                if (t == i[0]) return n.identifier = a, o = n, !1
                            })
                        }), o || !1)
                    },
                    value: function(e) {
                        var t = [];
                        return t.push(e), v.get.values.call(b, t)[e]
                    },
                    values: function(e) {
                        var t = Array.isArray(e) ? v.get.fields(e) : n,
                            m = {};
                        return t.each(function(e, t) {
                            var n = M(t),
                                i = n.closest(p.uiCalendar),
                                o = n.prop("name"),
                                a = n.val(),
                                r = n.is(p.checkbox),
                                s = n.is(p.radio),
                                l = -1 !== o.indexOf("[]"),
                                c = 0 < i.length && v.can.useElement("calendar"),
                                u = !!r && n.is(":checked");
                            if (o)
                                if (l) o = o.replace("[]", ""), m[o] || (m[o] = []), r ? u ? m[o].push(a || !0) : m[o].push(!1) : m[o].push(a);
                                else if (s) m[o] !== q && !1 !== m[o] || (m[o] = !!u && (a || !0));
                            else if (r) m[o] = !!u && (a || !0);
                            else if (c) {
                                var d = i.calendar("get date");
                                if (null !== d) {
                                    if ("date" == g.dateHandling) m[o] = d;
                                    else if ("input" == g.dateHandling) m[o] = i.calendar("get input date");
                                    else if ("formatter" == g.dateHandling) {
                                        var f = i.calendar("setting", "type");
                                        switch (f) {
                                            case "date":
                                                m[o] = g.formatter.date(d);
                                                break;
                                            case "datetime":
                                                m[o] = g.formatter.datetime(d);
                                                break;
                                            case "time":
                                                m[o] = g.formatter.time(d);
                                                break;
                                            case "month":
                                                m[o] = g.formatter.month(d);
                                                break;
                                            case "year":
                                                m[o] = g.formatter.year(d);
                                                break;
                                            default:
                                                v.debug("Wrong calendar mode", i, f), m[o] = ""
                                        }
                                    }
                                } else m[o] = ""
                            } else m[o] = a
                        }), m
                    },
                    dirtyFields: function() {
                        return n.filter(function(e, t) {
                            return M(t).data(m.isDirty)
                        })
                    }
                },
                has: {
                    field: function(e) {
                        return v.verbose("Checking for existence of a field with identifier", e), "string" != typeof(e = v.escape.string(e)) && v.error(u.identifier, e), 0 < n.filter("#" + e).length || (0 < n.filter('[name="' + e + '"]').length || 0 < n.filter("[data-" + m.validate + '="' + e + '"]').length)
                    }
                },
                can: {
                    useElement: function(e) {
                        return M.fn[e] !== q || (v.error(u.noElement.replace("{element}", e)), !1)
                    }
                },
                escape: {
                    string: function(e) {
                        return (e = String(e)).replace(i.escape, "\\$&")
                    }
                },
                add: {
                    rule: function(e, t) {
                        v.add.field(e, t)
                    },
                    field: function(n, e) {
                        c[n] !== q && c[n].rules !== q || (c[n] = {
                            rules: []
                        });
                        var i = {
                            rules: []
                        };
                        v.is.shorthandRules(e) ? (e = Array.isArray(e) ? e : [e], M.each(e, function(e, t) {
                            i.rules.push({
                                type: t
                            })
                        })) : i.rules = e.rules, M.each(i.rules, function(e, t) {
                            0 == M.grep(c[n].rules, function(e) {
                                return e.type == t.type
                            }).length && c[n].rules.push(t)
                        }), v.debug("Adding rules", i.rules, c)
                    },
                    fields: function(e) {
                        var t;
                        t = e && v.is.shorthandFields(e) ? v.get.fieldsFromShorthand(e) : e, c = M.extend({}, c, t)
                    },
                    prompt: function(e, t, n) {
                        var i = v.get.field(e).closest(f),
                            o = i.children(p.prompt),
                            a = 0 !== o.length;
                        t = "string" == typeof t ? [t] : t, v.verbose("Adding field error state", e), n || i.addClass(h.error), g.inline && (a || (o = g.templates.prompt(t, h.label)).appendTo(i), o.html(t[0]), a ? v.verbose("Inline errors are disabled, no inline error added", e) : g.transition && v.can.useElement("transition") && d.transition("is supported") ? (v.verbose("Displaying error with css transition", g.transition), o.transition(g.transition + " in", g.duration)) : (v.verbose("Displaying error with fallback javascript animation"), o.fadeIn(g.duration)))
                    },
                    errors: function(e) {
                        v.debug("Adding form error messages", e), v.set.error(), t.html(g.templates.error(e))
                    }
                },
                remove: {
                    rule: function(n, e) {
                        var i = Array.isArray(e) ? e : [e];
                        if (c[n] !== q && Array.isArray(c[n].rules)) return e === q ? (v.debug("Removed all rules"), void(c[n].rules = [])) : void M.each(c[n].rules, function(e, t) {
                            t && -1 !== i.indexOf(t.type) && (v.debug("Removed rule", t.type), c[n].rules.splice(e, 1))
                        })
                    },
                    field: function(e) {
                        var t = Array.isArray(e) ? e : [e];
                        M.each(t, function(e, t) {
                            v.remove.rule(t)
                        })
                    },
                    rules: function(e, n) {
                        Array.isArray(e) ? M.each(e, function(e, t) {
                            v.remove.rule(t, n)
                        }) : v.remove.rule(e, n)
                    },
                    fields: function(e) {
                        v.remove.field(e)
                    },
                    prompt: function(e) {
                        var t = v.get.field(e).closest(f),
                            n = t.children(p.prompt);
                        t.removeClass(h.error), g.inline && n.is(":visible") && (v.verbose("Removing prompt for field", e), g.transition && v.can.useElement("transition") && d.transition("is supported") ? n.transition(g.transition + " out", g.duration, function() {
                            n.remove()
                        }) : n.fadeOut(g.duration, function() {
                            n.remove()
                        }))
                    }
                },
                set: {
                    success: function() {
                        d.removeClass(h.error).addClass(h.success)
                    },
                    defaults: function() {
                        n.each(function(e, t) {
                            var n = M(t),
                                i = n.parent(),
                                o = 0 < n.filter(p.checkbox).length,
                                a = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                                r = n.closest(p.uiCalendar),
                                s = 0 < r.length && v.can.useElement("calendar"),
                                l = o ? n.is(":checked") : n.val();
                            a ? i.dropdown("save defaults") : s && r.calendar("refresh"), n.data(m.defaultValue, l), n.data(m.isDirty, !1)
                        })
                    },
                    error: function() {
                        d.removeClass(h.success).addClass(h.error)
                    },
                    value: function(e, t) {
                        var n = {};
                        return n[e] = t, v.set.values.call(b, n)
                    },
                    values: function(e) {
                        M.isEmptyObject(e) || M.each(e, function(e, t) {
                            var n, i = v.get.field(e),
                                o = i.parent(),
                                a = i.closest(p.uiCalendar),
                                r = Array.isArray(t),
                                s = o.is(p.uiCheckbox) && v.can.useElement("checkbox"),
                                l = o.is(p.uiDropdown) && v.can.useElement("dropdown"),
                                c = i.is(p.radio) && s,
                                u = 0 < a.length && v.can.useElement("calendar");
                            0 < i.length && (r && s ? (v.verbose("Selecting multiple", t, i), o.checkbox("uncheck"), M.each(t, function(e, t) {
                                n = i.filter('[value="' + t + '"]'), o = n.parent(), 0 < n.length && o.checkbox("check")
                            })) : c ? (v.verbose("Selecting radio value", t, i), i.filter('[value="' + t + '"]').parent(p.uiCheckbox).checkbox("check")) : s ? (v.verbose("Setting checkbox value", t, o), !0 === t || 1 === t ? o.checkbox("check") : o.checkbox("uncheck")) : l ? (v.verbose("Setting dropdown value", t, o), o.dropdown("set selected", t)) : u ? a.calendar("set date", t) : (v.verbose("Setting field value", t, i), i.val(t)))
                        })
                    },
                    dirty: function() {
                        v.verbose("Setting state dirty"), C = !0, w[0] = w[1], w[1] = "dirty", v.is.justClean() && d.trigger("dirty")
                    },
                    clean: function() {
                        v.verbose("Setting state clean"), C = !1, w[0] = w[1], w[1] = "clean", v.is.justDirty() && d.trigger("clean")
                    },
                    asClean: function() {
                        v.set.defaults(), v.set.clean()
                    },
                    asDirty: function() {
                        v.set.defaults(), v.set.dirty()
                    },
                    autoCheck: function() {
                        v.debug("Enabling auto check on required fields"), n.each(function(e, t) {
                            var n = M(t),
                                i = M(t).closest(f),
                                o = 0 < n.filter(p.checkbox).length,
                                a = n.prop("required") || i.hasClass(h.required) || i.parent().hasClass(h.required),
                                r = n.prop("disabled") || i.hasClass(h.disabled) || i.parent().hasClass(h.disabled),
                                s = v.get.validation(n),
                                l = !!s && 0 !== M.grep(s.rules, function(e) {
                                    return "empty" == e.type
                                }),
                                c = s.identifier || n.attr("id") || n.attr("name") || n.data(m.validate);
                            !a || r || l || c === q || (o ? (v.verbose("Adding 'checked' rule on field", c), v.add.rule(c, "checked")) : (v.verbose("Adding 'empty' rule on field", c), v.add.rule(c, "empty")))
                        })
                    }
                },
                validate: {
                    form: function(e, t) {
                        var n = v.get.values();
                        if (x) return !1;
                        if (y = [], v.determine.isValid()) {
                            if (v.debug("Form has no validation errors, submitting"), v.set.success(), !0 !== t) return g.onSuccess.call(b, e, n)
                        } else if (v.debug("Form has errors"), v.set.error(), g.inline || v.add.errors(y), e && d.data("moduleApi") !== q && e.stopImmediatePropagation(), !0 !== t) return g.onFailure.call(b, y, n)
                    },
                    field: function(i, e, o) {
                        o = o === q || o, "string" == typeof i && (v.verbose("Validating field", i), i = c[e = i]);
                        var a = i.identifier || e,
                            t = v.get.field(a),
                            n = !!i.depends && v.get.field(i.depends),
                            r = !0,
                            s = [];
                        i.identifier || (v.debug("Using field name as identifier", a), i.identifier = a);
                        var l = !0;
                        return M.each(t, function() {
                            if (!M(this).prop("disabled")) return l = !1
                        }), l ? v.debug("Field is disabled. Skipping", a) : i.optional && v.is.blank(t) ? v.debug("Field is optional and blank. Skipping", a) : i.depends && v.is.empty(n) ? v.debug("Field depends on another value that is not present or empty. Skipping", n) : i.rules !== q && (t.closest(f).removeClass(h.error), M.each(i.rules, function(e, t) {
                            if (v.has.field(a)) {
                                var n = v.validate.rule(i, t, !0) || [];
                                0 < n.length && (v.debug("Field is invalid", a, t.type), s.push(v.get.prompt(t, i)), r = !1, o && M(n).closest(f).addClass(h.error))
                            }
                        })), r ? (o && (v.remove.prompt(a, s), g.onValid.call(t)), !0) : (o && (y = y.concat(s), v.add.prompt(a, s, !0), g.onInvalid.call(t, s)), !1)
                    },
                    rule: function(e, t, n) {
                        function i(e) {
                            var t = c ? M(e).filter(":checked").val() : M(e).val();
                            return t = t === q || "" === t || null === t ? "" : g.shouldTrim ? M.trim(t + "") : String(t + ""), s.call(e, t, a, d)
                        }
                        var o = v.get.field(e.identifier),
                            a = v.get.ancillaryValue(t),
                            r = v.get.ruleName(t),
                            s = g.rules[r],
                            l = [],
                            c = o.is(p.checkbox);
                        if (M.isFunction(s)) return c ? i(o) || (l = o) : M.each(o, function(e, t) {
                            i(t) || l.push(t)
                        }), n ? l : !(0 < l.length);
                        v.error(u.noRule, r)
                    }
                },
                setting: function(e, t) {
                    if (M.isPlainObject(e)) M.extend(!0, g, e);
                    else {
                        if (t === q) return g[e];
                        g[e] = t
                    }
                },
                internal: function(e, t) {
                    if (M.isPlainObject(e)) M.extend(!0, v, e);
                    else {
                        if (t === q) return v[e];
                        v[e] = t
                    }
                },
                debug: function() {
                    !g.silent && g.debug && (g.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), v.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !g.silent && g.verbose && g.debug && (g.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), v.verbose.apply(console, arguments)))
                },
                error: function() {
                    g.silent || (v.error = Function.prototype.bind.call(console.error, console, g.name + ":"), v.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        g.performance && (n = (t = (new Date).getTime()) - (A || t), A = t, E.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: b,
                            "Execution Time": n
                        })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500)
                    },
                    display: function() {
                        var e = g.name + ":",
                            n = 0;
                        A = !1, clearTimeout(v.performance.timer), M.each(E, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", D && (e += " '" + D + "'"), 1 < S.length && (e += " (" + S.length + ")"), (console.group !== q || console.table !== q) && 0 < E.length && (console.groupCollapsed(e), console.table ? console.table(E) : M.each(E, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), E = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = l;
                    return e = e || R, t = b || t, "string" == typeof i && r !== q && (i = i.split(/[\. ]/), o = i.length - 1, M.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (M.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== q) return a = r[n], !1;
                            if (!M.isPlainObject(r[t]) || e == o) return r[t] !== q && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), M.isFunction(a) ? n = a.apply(t, e) : a !== q && (n = a), Array.isArray(T) ? T.push(n) : T !== q ? T = [T, n] : n !== q && (T = n), a
                }
            }).initialize()
        }), T !== q ? T : this
    }, M.fn.form.settings = {
        name: "Form",
        namespace: "form",
        debug: !1,
        verbose: !1,
        performance: !0,
        fields: !1,
        keyboardShortcuts: !0,
        on: "submit",
        inline: !1,
        delay: 200,
        revalidate: !0,
        shouldTrim: !0,
        transition: "scale",
        duration: 200,
        autoCheckRequired: !1,
        preventLeaving: !1,
        dateHandling: "date",
        onValid: function() {},
        onInvalid: function() {},
        onSuccess: function() {
            return !0
        },
        onFailure: function() {
            return !1
        },
        onDirty: function() {},
        onClean: function() {},
        metadata: {
            defaultValue: "default",
            validate: "validate",
            isDirty: "isDirty"
        },
        regExp: {
            htmlID: /^[a-zA-Z][\w:.-]*$/g,
            bracket: /\[(.*)\]/i,
            decimal: /^\d+\.?\d*$/,
            email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,
            flags: /^\/(.*)\/(.*)?/,
            integer: /^\-?\d+$/,
            number: /^\-?\d*(\.\d+)?$/,
            url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
        },
        text: {
            unspecifiedRule: "Please enter a valid value",
            unspecifiedField: "This field",
            leavingMessage: "There are unsaved changes on this page which will be discarded if you continue."
        },
        prompt: {
            empty: "{name} must have a value",
            checked: "{name} must be checked",
            email: "{name} must be a valid e-mail",
            url: "{name} must be a valid url",
            regExp: "{name} is not formatted correctly",
            integer: "{name} must be an integer",
            decimal: "{name} must be a decimal number",
            number: "{name} must be set to a number",
            is: '{name} must be "{ruleValue}"',
            isExactly: '{name} must be exactly "{ruleValue}"',
            not: '{name} cannot be set to "{ruleValue}"',
            notExactly: '{name} cannot be set to exactly "{ruleValue}"',
            contain: '{name} must contain "{ruleValue}"',
            containExactly: '{name} must contain exactly "{ruleValue}"',
            doesntContain: '{name} cannot contain  "{ruleValue}"',
            doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"',
            minLength: "{name} must be at least {ruleValue} characters",
            length: "{name} must be at least {ruleValue} characters",
            exactLength: "{name} must be exactly {ruleValue} characters",
            maxLength: "{name} cannot be longer than {ruleValue} characters",
            match: "{name} must match {ruleValue} field",
            different: "{name} must have a different value than {ruleValue} field",
            creditCard: "{name} must be a valid credit card number",
            minCount: "{name} must have at least {ruleValue} choices",
            exactCount: "{name} must have exactly {ruleValue} choices",
            maxCount: "{name} must have {ruleValue} or less choices"
        },
        selector: {
            checkbox: 'input[type="checkbox"], input[type="radio"]',
            clear: ".clear",
            field: "input, textarea, select",
            group: ".field",
            input: "input",
            message: ".error.message",
            prompt: ".prompt.label",
            radio: 'input[type="radio"]',
            reset: '.reset:not([type="reset"])',
            submit: '.submit:not([type="submit"])',
            uiCheckbox: ".ui.checkbox",
            uiDropdown: ".ui.dropdown",
            uiCalendar: ".ui.calendar"
        },
        className: {
            error: "error",
            label: "ui basic red pointing prompt label",
            pressed: "down",
            success: "success",
            required: "required",
            disabled: "disabled"
        },
        error: {
            identifier: "You must specify a string identifier for each field",
            method: "The method you called is not defined.",
            noRule: "There is no rule matching the one you specified",
            oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",
            noElement: "This module requires ui {element}"
        },
        templates: {
            error: function(e) {
                var n = '<ul class="list">';
                return M.each(e, function(e, t) {
                    n += "<li>" + t + "</li>"
                }), M(n += "</ul>")
            },
            prompt: function(e, t) {
                return M("<div/>").addClass(t).html(e[0])
            }
        },
        formatter: {
            date: function(e) {
                return Intl.DateTimeFormat("en-GB").format(e)
            },
            datetime: function(e) {
                return Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }).format(e)
            },
            time: function(e) {
                return Intl.DateTimeFormat("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }).format(e)
            },
            month: function(e) {
                return Intl.DateTimeFormat("en-GB", {
                    month: "2-digit",
                    year: "numeric"
                }).format(e)
            },
            year: function(e) {
                return Intl.DateTimeFormat("en-GB", {
                    year: "numeric"
                }).format(e)
            }
        },
        rules: {
            empty: function(e) {
                return !(e === q || "" === e || Array.isArray(e) && 0 === e.length)
            },
            checked: function() {
                return 0 < M(this).filter(":checked").length
            },
            email: function(e) {
                return M.fn.form.settings.regExp.email.test(e)
            },
            url: function(e) {
                return M.fn.form.settings.regExp.url.test(e)
            },
            regExp: function(e, t) {
                if (t instanceof RegExp) return e.match(t);
                var n, i = t.match(M.fn.form.settings.regExp.flags);
                return i && (t = 2 <= i.length ? i[1] : t, n = 3 <= i.length ? i[2] : ""), e.match(new RegExp(t, n))
            },
            integer: function(e, t) {
                var n, i, o, a = M.fn.form.settings.regExp.integer;
                return t && -1 === ["", ".."].indexOf(t) && (-1 == t.indexOf("..") ? a.test(t) && (n = i = t - 0) : (o = t.split("..", 2), a.test(o[0]) && (n = o[0] - 0), a.test(o[1]) && (i = o[1] - 0))), a.test(e) && (n === q || n <= e) && (i === q || e <= i)
            },
            decimal: function(e) {
                return M.fn.form.settings.regExp.decimal.test(e)
            },
            number: function(e) {
                return M.fn.form.settings.regExp.number.test(e)
            },
            is: function(e, t) {
                return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t
            },
            isExactly: function(e, t) {
                return e == t
            },
            not: function(e, t) {
                return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t)
            },
            notExactly: function(e, t) {
                return e != t
            },
            contains: function(e, t) {
                return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t, "i"))
            },
            containsExactly: function(e, t) {
                return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t))
            },
            doesntContain: function(e, t) {
                return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t, "i"))
            },
            doesntContainExactly: function(e, t) {
                return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t))
            },
            minLength: function(e, t) {
                return e !== q && e.length >= t
            },
            length: function(e, t) {
                return e !== q && e.length >= t
            },
            exactLength: function(e, t) {
                return e !== q && e.length == t
            },
            maxLength: function(e, t) {
                return e !== q && e.length <= t
            },
            match: function(e, t, n) {
                var i, o;
                return 0 < (o = n.find('[data-validate="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find("#" + t)).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '[]"]')).length && (i = o), i !== q && e.toString() == i.toString()
            },
            different: function(e, t, n) {
                var i, o;
                return 0 < (o = n.find('[data-validate="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find("#" + t)).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '[]"]')).length && (i = o), i !== q && e.toString() !== i.toString()
            },
            creditCard: function(n, e) {
                var t, i, o = {
                        visa: {
                            pattern: /^4/,
                            length: [16]
                        },
                        amex: {
                            pattern: /^3[47]/,
                            length: [15]
                        },
                        mastercard: {
                            pattern: /^5[1-5]/,
                            length: [16]
                        },
                        discover: {
                            pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                            length: [16]
                        },
                        unionPay: {
                            pattern: /^(62|88)/,
                            length: [16, 17, 18, 19]
                        },
                        jcb: {
                            pattern: /^35(2[89]|[3-8][0-9])/,
                            length: [16]
                        },
                        maestro: {
                            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                            length: [12, 13, 14, 15, 16, 17, 18, 19]
                        },
                        dinersClub: {
                            pattern: /^(30[0-5]|^36)/,
                            length: [14]
                        },
                        laser: {
                            pattern: /^(6304|670[69]|6771)/,
                            length: [16, 17, 18, 19]
                        },
                        visaElectron: {
                            pattern: /^(4026|417500|4508|4844|491(3|7))/,
                            length: [16]
                        }
                    },
                    a = {},
                    r = !1,
                    s = "string" == typeof e && e.split(",");
                if ("string" == typeof n && 0 !== n.length) {
                    if (n = n.replace(/[\-]/g, ""), s && (M.each(s, function(e, t) {
                            (i = o[t]) && (a = {
                                length: -1 !== M.inArray(n.length, i.length),
                                pattern: -1 !== n.search(i.pattern)
                            }).length && a.pattern && (r = !0)
                        }), !r)) return !1;
                    if ((t = {
                            number: -1 !== M.inArray(n.length, o.unionPay.length),
                            pattern: -1 !== n.search(o.unionPay.pattern)
                        }).number && t.pattern) return !0;
                    for (var l = n.length, c = 0, u = [
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                            [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                        ], d = 0; l--;) d += u[c][parseInt(n.charAt(l), 10)], c ^= 1;
                    return d % 10 == 0 && 0 < d
                }
            },
            minCount: function(e, t) {
                return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t)
            },
            exactCount: function(e, t) {
                return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
            },
            maxCount: function(e, t) {
                return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t)
            }
        }
    }
}(jQuery, window, document),
function(k, T, e, S) {
    "use strict";
    k.isFunction = k.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, T = void 0 !== T && T.Math == Math ? T : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.accordion = function(a) {
        var v, r = k(this),
            b = (new Date).getTime(),
            y = [],
            x = a,
            C = "string" == typeof x,
            w = [].slice.call(arguments, 1);
        return r.each(function() {
            var e, c, u = k.isPlainObject(a) ? k.extend(!0, {}, k.fn.accordion.settings, a) : k.extend({}, k.fn.accordion.settings),
                d = u.className,
                t = u.namespace,
                f = u.selector,
                s = u.error,
                n = "." + t,
                i = "module-" + t,
                o = r.selector || "",
                m = k(this),
                g = m.find(f.title),
                p = m.find(f.content),
                l = this,
                h = m.data(i);
            c = {
                initialize: function() {
                    c.debug("Initializing", m), c.bind.events(), u.observeChanges && c.observeChanges(), c.instantiate()
                },
                instantiate: function() {
                    h = c, m.data(i, c)
                },
                destroy: function() {
                    c.debug("Destroying previous instance", m), m.off(n).removeData(i)
                },
                refresh: function() {
                    g = m.find(f.title), p = m.find(f.content)
                },
                observeChanges: function() {
                    "MutationObserver" in T && ((e = new MutationObserver(function(e) {
                        c.debug("DOM tree modified, updating selector cache"), c.refresh()
                    })).observe(l, {
                        childList: !0,
                        subtree: !0
                    }), c.debug("Setting up mutation observer", e))
                },
                bind: {
                    events: function() {
                        c.debug("Binding delegated events"), m.on(u.on + n, f.trigger, c.event.click)
                    }
                },
                event: {
                    click: function() {
                        c.toggle.call(this)
                    }
                },
                toggle: function(e) {
                    var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                        n = t.next(p),
                        i = n.hasClass(d.animating),
                        o = n.hasClass(d.active),
                        a = o && !i,
                        r = !o && i;
                    c.debug("Toggling visibility of content", t), a || r ? u.collapsible ? c.close.call(t) : c.debug("Cannot close accordion content collapsing is disabled") : c.open.call(t)
                },
                open: function(e) {
                    var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                        n = t.next(p),
                        i = n.hasClass(d.animating);
                    n.hasClass(d.active) || i ? c.debug("Accordion already open, skipping", n) : (c.debug("Opening accordion content", t), u.onOpening.call(n), u.onChanging.call(n), u.exclusive && c.closeOthers.call(t), t.addClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? n.children().transition({
                        animation: "fade in",
                        queue: !1,
                        useFailSafe: !0,
                        debug: u.debug,
                        verbose: u.verbose,
                        duration: u.duration,
                        skipInlineHidden: !0,
                        onComplete: function() {
                            n.children().removeClass(d.transition)
                        }
                    }) : n.children().stop(!0, !0).animate({
                        opacity: 1
                    }, u.duration, c.resetOpacity)), n.slideDown(u.duration, u.easing, function() {
                        n.removeClass(d.animating).addClass(d.active), c.reset.display.call(this), u.onOpen.call(this), u.onChange.call(this)
                    }))
                },
                close: function(e) {
                    var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                        n = t.next(p),
                        i = n.hasClass(d.animating),
                        o = n.hasClass(d.active);
                    !o && !(!o && i) || o && i || (c.debug("Closing accordion content", n), u.onClosing.call(n), u.onChanging.call(n), t.removeClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? n.children().transition({
                        animation: "fade out",
                        queue: !1,
                        useFailSafe: !0,
                        debug: u.debug,
                        verbose: u.verbose,
                        duration: u.duration,
                        skipInlineHidden: !0
                    }) : n.children().stop(!0, !0).animate({
                        opacity: 0
                    }, u.duration, c.resetOpacity)), n.slideUp(u.duration, u.easing, function() {
                        n.removeClass(d.animating).removeClass(d.active), c.reset.display.call(this), u.onClose.call(this), u.onChange.call(this)
                    }))
                },
                closeOthers: function(e) {
                    var t, n, i, o = e !== S ? g.eq(e) : k(this).closest(f.title),
                        a = o.parents(f.content).prev(f.title),
                        r = o.closest(f.accordion),
                        s = f.title + "." + d.active + ":visible",
                        l = f.content + "." + d.active + ":visible";
                    i = u.closeNested ? (t = r.find(s).not(a)).next(p) : (t = r.find(s).not(a), n = r.find(l).find(s).not(a), (t = t.not(n)).next(p)), 0 < t.length && (c.debug("Exclusive enabled, closing other content", t), t.removeClass(d.active), i.removeClass(d.animating).stop(!0, !0), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? i.children().transition({
                        animation: "fade out",
                        useFailSafe: !0,
                        debug: u.debug,
                        verbose: u.verbose,
                        duration: u.duration,
                        skipInlineHidden: !0
                    }) : i.children().stop(!0, !0).animate({
                        opacity: 0
                    }, u.duration, c.resetOpacity)), i.slideUp(u.duration, u.easing, function() {
                        k(this).removeClass(d.active), c.reset.display.call(this)
                    }))
                },
                reset: {
                    display: function() {
                        c.verbose("Removing inline display from element", this), k(this).css("display", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
                    },
                    opacity: function() {
                        c.verbose("Removing inline opacity from element", this), k(this).css("opacity", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
                    }
                },
                setting: function(e, t) {
                    if (c.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, u, e);
                    else {
                        if (t === S) return u[e];
                        k.isPlainObject(u[e]) ? k.extend(!0, u[e], t) : u[e] = t
                    }
                },
                internal: function(e, t) {
                    if (c.debug("Changing internal", e, t), t === S) return c[e];
                    k.isPlainObject(e) ? k.extend(!0, c, e) : c[e] = t
                },
                debug: function() {
                    !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
                },
                error: function() {
                    u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        u.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: l,
                            "Execution Time": n
                        })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                    },
                    display: function() {
                        var e = u.name + ":",
                            n = 0;
                        b = !1, clearTimeout(c.performance.timer), k.each(y, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", o && (e += " '" + o + "'"), (console.group !== S || console.table !== S) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), y = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = h;
                    return e = e || w, t = l || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (k.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== S) return a = r[n], !1;
                            if (!k.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : c.error(s.method, i), !1;
                            r = r[t]
                        }
                    })), k.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(v) ? v.push(n) : v !== S ? v = [v, n] : n !== S && (v = n), a
                }
            }, C ? (h === S && c.initialize(), c.invoke(x)) : (h !== S && h.invoke("destroy"), c.initialize())
        }), v !== S ? v : this
    }, k.fn.accordion.settings = {
        name: "Accordion",
        namespace: "accordion",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        observeChanges: !0,
        exclusive: !0,
        collapsible: !0,
        closeNested: !1,
        animateChildren: !0,
        duration: 350,
        easing: "easeOutQuad",
        onOpening: function() {},
        onClosing: function() {},
        onChanging: function() {},
        onOpen: function() {},
        onClose: function() {},
        onChange: function() {},
        error: {
            method: "The method you called is not defined"
        },
        className: {
            active: "active",
            animating: "animating",
            transition: "transition"
        },
        selector: {
            accordion: ".accordion",
            title: ".title",
            trigger: ".title",
            content: ".content"
        }
    }, k.extend(k.easing, {
        easeOutQuad: function(e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        }
    })
}(jQuery, window, document),
function(pe, e, k, T) {
    "use strict";
    pe.isFunction = pe.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), pe.fn.calendar = function(o) {
        var h, e = pe(this),
            a = e.selector || "",
            v = (new Date).getTime(),
            b = [],
            y = o,
            x = "string" == typeof y,
            C = [].slice.call(arguments, 1),
            w = {
                5: {
                    row: 4,
                    column: 3
                },
                10: {
                    row: 3,
                    column: 2
                },
                15: {
                    row: 2,
                    column: 2
                },
                20: {
                    row: 3,
                    column: 1
                },
                30: {
                    row: 2,
                    column: 1
                }
            };
        return e.each(function() {
            var f, le, ce = pe.isPlainObject(o) ? pe.extend(!0, {}, pe.fn.calendar.settings, o) : pe.extend({}, pe.fn.calendar.settings),
                ue = ce.className,
                e = ce.namespace,
                r = ce.selector,
                de = ce.formatter,
                n = ce.parser,
                fe = ce.metadata,
                me = w[ce.minTimeGap],
                s = ce.error,
                t = "." + e,
                i = "module-" + e,
                l = pe(this),
                c = l.find(r.input),
                ge = l.find(r.popup),
                u = l.find(r.activator),
                d = this,
                m = l.data(i),
                g = !1,
                p = !1;
            le = {
                initialize: function() {
                    le.debug("Initializing calendar for", d, l), f = le.get.isTouch(), le.setup.config(), le.setup.popup(), le.setup.inline(), le.setup.input(), le.setup.date(), le.create.calendar(), le.bind.events(), le.instantiate()
                },
                instantiate: function() {
                    le.verbose("Storing instance of calendar"), m = le, l.data(i, m)
                },
                destroy: function() {
                    le.verbose("Destroying previous calendar for", d), l.removeData(i), le.unbind.events()
                },
                setup: {
                    config: function() {
                        null !== le.get.minDate() && le.set.minDate(l.data(fe.minDate)), null !== le.get.maxDate() && le.set.maxDate(l.data(fe.maxDate)), le.setting("type", le.get.type())
                    },
                    popup: function() {
                        if (!ce.inline && (u.length || (u = l.children().first()).length))
                            if (pe.fn.popup !== T) {
                                if (!ge.length) {
                                    var e = u.parent(),
                                        t = 0 !== e.closest(r.append).length ? "appendTo" : "prependTo";
                                    ge = pe("<div/>").addClass(ue.popup)[t](e)
                                }
                                ge.addClass(ue.calendar);
                                var n = ce.onVisible,
                                    i = ce.onHidden;
                                c.length || (ge.attr("tabindex", "0"), n = function() {
                                    return le.focus(), ce.onVisible.apply(ge, arguments)
                                }, i = function() {
                                    return le.blur(), ce.onHidden.apply(ge, arguments)
                                });
                                var o = ce.on || (c.length ? "focus" : "click"),
                                    a = pe.extend({}, ce.popupOptions, {
                                        popup: ge,
                                        on: o,
                                        hoverable: "hover" === o,
                                        onShow: function() {
                                            return le.set.focusDate(le.get.date()), le.set.mode(ce.startMode), ce.onShow.apply(ge, arguments)
                                        },
                                        onVisible: n,
                                        onHide: ce.onHide,
                                        onHidden: i
                                    });
                                le.popup(a)
                            } else le.error(s.popup)
                    },
                    inline: function() {
                        u.length && !ce.inline || (ge = pe("<div/>").addClass(ue.calendar).appendTo(l), c.length || ge.attr("tabindex", "0"))
                    },
                    input: function() {
                        ce.touchReadonly && c.length && f && c.prop("readonly", !0)
                    },
                    date: function() {
                        var e;
                        ce.initialDate ? e = n.date(ce.initialDate, ce) : l.data(fe.date) !== T ? e = n.date(l.data(fe.date), ce) : c.length && (e = n.date(c.val(), ce)), le.set.date(e, ce.formatInput, !1)
                    }
                },
                create: {
                    calendar: function() {
                        var e, t, n, i, o, a, r, s = le.get.mode(),
                            l = new Date,
                            c = le.get.date(),
                            u = le.get.focusDate(),
                            d = u || c || ce.initialDate || l;
                        d = le.helper.dateInRange(d), u || (u = d, le.set.focusDate(u, !1, !1));
                        var f = "year" === s,
                            m = "month" === s,
                            g = "day" === s,
                            p = "hour" === s,
                            h = "minute" === s,
                            v = "time" === ce.type,
                            b = Math.max(ce.multiMonth, 1),
                            y = g ? le.get.monthOffset() : 0,
                            x = d.getMinutes(),
                            C = d.getHours(),
                            w = d.getDate(),
                            k = d.getMonth() + y,
                            T = d.getFullYear(),
                            S = g ? ce.showWeekNumbers ? 8 : 7 : p ? 4 : me.column,
                            D = g || p ? 6 : me.row,
                            A = g ? b : 1,
                            E = ge,
                            F = E.hasClass("left") ? "right center" : "left center";
                        for (E.empty(), 1 < A && (r = pe("<div/>").addClass(ue.grid).appendTo(E)), i = 0; i < A; i++) {
                            if (1 < A) E = pe("<div/>").addClass(ue.column).appendTo(r);
                            var P = k + i,
                                O = (new Date(T, P, 1).getDay() - ce.firstDayOfWeek % 7 + 7) % 7;
                            if (!ce.constantHeight && g) {
                                var R = new Date(T, P + 1, 0).getDate() + O;
                                D = Math.ceil(R / 7)
                            }
                            var M = f ? 10 : m ? 1 : 0,
                                I = g ? 1 : 0,
                                j = p || h ? 1 : 0,
                                q = p || h ? w : 1,
                                L = new Date(T - M, P - I, q - j, C),
                                V = new Date(T + M, P + I, q + j, C),
                                z = f ? new Date(10 * Math.ceil(T / 10) - 9, 0, 0) : m ? new Date(T, 0, 0) : g ? new Date(T, P, 0) : new Date(T, P, w, -1),
                                N = f ? new Date(10 * Math.ceil(T / 10) + 1, 0, 1) : m ? new Date(T + 1, 0, 1) : g ? new Date(T, P + 1, 1) : new Date(T, P, w + 1),
                                H = s;
                            g && ce.showWeekNumbers && (H += " andweek");
                            var U = pe("<table/>").addClass(ue.table).addClass(H).appendTo(E),
                                B = S;
                            if (!v) {
                                var W = pe("<thead/>").appendTo(U);
                                o = pe("<tr/>").appendTo(W), a = pe("<th/>").attr("colspan", "" + S).appendTo(o);
                                var Y = f || m ? new Date(T, 0, 1) : g ? new Date(T, P, 1) : new Date(T, P, w, C, x),
                                    Q = pe("<span/>").addClass(ue.link).appendTo(a);
                                Q.text(de.header(Y, s, ce));
                                var X = m ? ce.disableYear ? "day" : "year" : g ? ce.disableMonth ? "year" : "month" : "day";
                                if (Q.data(fe.mode, X), 0 === i) {
                                    var $ = pe("<span/>").addClass(ue.prev).appendTo(a);
                                    $.data(fe.focusDate, L), $.toggleClass(ue.disabledCell, !le.helper.isDateInRange(z, s)), pe("<i/>").addClass(ue.prevIcon).appendTo($)
                                }
                                if (i === A - 1) {
                                    var G = pe("<span/>").addClass(ue.next).appendTo(a);
                                    G.data(fe.focusDate, V), G.toggleClass(ue.disabledCell, !le.helper.isDateInRange(N, s)), pe("<i/>").addClass(ue.nextIcon).appendTo(G)
                                }
                                if (g)
                                    for (o = pe("<tr/>").appendTo(W), ce.showWeekNumbers && ((a = pe("<th/>").appendTo(o)).text(ce.text.weekNo), a.addClass(ue.weekCell), B--), e = 0; e < B; e++)(a = pe("<th/>").appendTo(o)).text(de.dayColumnHeader((e + ce.firstDayOfWeek) % 7, ce))
                            }
                            var K = pe("<tbody/>").appendTo(U);
                            for (e = f ? 10 * Math.ceil(T / 10) - 9 : g ? 1 - O : 0, t = 0; t < D; t++)
                                for (o = pe("<tr/>").appendTo(K), g && ce.showWeekNumbers && ((a = pe("<th/>").appendTo(o)).text(le.get.weekOfYear(T, P, e + 1 - ce.firstDayOfWeek)), a.addClass(ue.weekCell)), n = 0; n < B; n++, e++) {
                                    var J = f ? new Date(e, P, 1, C, x) : m ? new Date(T, e, 1, C, x) : g ? new Date(T, P, e, C, x) : p ? new Date(T, P, w, e) : new Date(T, P, w, C, e * ce.minTimeGap),
                                        Z = f ? e : m ? ce.text.monthsShort[e] : g ? J.getDate() : de.time(J, ce, !0);
                                    (a = pe("<td/>").addClass(ue.cell).appendTo(o)).text(Z), a.data(fe.date, J);
                                    var _ = g && J.getMonth() !== (P + 12) % 12,
                                        ee = !ce.selectAdjacentDays && _ || !le.helper.isDateInRange(J, s) || ce.isDisabled(J, s) || le.helper.isDisabled(J, s) || !le.helper.isEnabled(J, s);
                                    if (ee) {
                                        var te = le.helper.findDayAsObject(J, s, ce.disabledDates);
                                        null !== te && te[fe.message] && (a.attr("data-tooltip", te[fe.message]), a.attr("data-position", F))
                                    } else {
                                        var ne = le.helper.findDayAsObject(J, s, ce.eventDates);
                                        null !== ne && (a.addClass(ne[fe.class] || ce.eventClass), ne[fe.message] && (a.attr("data-tooltip", ne[fe.message]), a.attr("data-position", F)))
                                    }
                                    var ie = le.helper.dateEqual(J, c, s),
                                        oe = le.helper.dateEqual(J, l, s);
                                    a.toggleClass(ue.adjacentCell, _), a.toggleClass(ue.disabledCell, ee), a.toggleClass(ue.activeCell, ie && !_), p || h || a.toggleClass(ue.todayCell, !_ && oe);
                                    var ae = {
                                        mode: s,
                                        adjacent: _,
                                        disabled: ee,
                                        active: ie,
                                        today: oe
                                    };
                                    de.cell(a, J, ae), le.helper.dateEqual(J, u, s) && le.set.focusDate(J, !1, !1)
                                }
                            if (ce.today) {
                                var re = pe("<tr/>").appendTo(K),
                                    se = pe("<td/>").attr("colspan", "" + S).addClass(ue.today).appendTo(re);
                                se.text(de.today(ce)), se.data(fe.date, l)
                            }
                            le.update.focus(!1, U)
                        }
                    }
                },
                update: {
                    focus: function(e, t) {
                        t = t || ge;
                        var s = le.get.mode(),
                            n = le.get.date(),
                            l = le.get.focusDate(),
                            c = le.get.startDate(),
                            u = le.get.endDate(),
                            d = (e ? l : null) || n || (f ? null : l);
                        t.find("td").each(function() {
                            var e = pe(this),
                                t = e.data(fe.date);
                            if (t) {
                                var n = e.hasClass(ue.disabledCell),
                                    i = e.hasClass(ue.activeCell),
                                    o = e.hasClass(ue.adjacentCell),
                                    a = le.helper.dateEqual(t, l, s),
                                    r = !!d && (!!c && le.helper.isDateInRange(t, s, c, d) || !!u && le.helper.isDateInRange(t, s, d, u));
                                e.toggleClass(ue.focusCell, a && (!f || g) && (!o || ce.selectAdjacentDays && o) && !n), le.helper.isTodayButton(e) || e.toggleClass(ue.rangeCell, r && !i && !n)
                            }
                        })
                    }
                },
                refresh: function() {
                    le.create.calendar()
                },
                bind: {
                    events: function() {
                        le.debug("Binding events"), ge.on("mousedown" + t, le.event.mousedown), ge.on("touchstart" + t, le.event.mousedown), ge.on("mouseup" + t, le.event.mouseup), ge.on("touchend" + t, le.event.mouseup), ge.on("mouseover" + t, le.event.mouseover), c.length ? (c.on("input" + t, le.event.inputChange), c.on("focus" + t, le.event.inputFocus), c.on("blur" + t, le.event.inputBlur), c.on("click" + t, le.event.inputClick), c.on("keydown" + t, le.event.keydown)) : ge.on("keydown" + t, le.event.keydown)
                    }
                },
                unbind: {
                    events: function() {
                        le.debug("Unbinding events"), ge.off(t), c.length && c.off(t)
                    }
                },
                event: {
                    mouseover: function(e) {
                        var t = pe(e.target).data(fe.date),
                            n = 1 === e.buttons;
                        t && le.set.focusDate(t, !1, !0, n)
                    },
                    mousedown: function(e) {
                        c.length && e.preventDefault(), g = 0 <= e.type.indexOf("touch");
                        var t = pe(e.target).data(fe.date);
                        t && le.set.focusDate(t, !1, !0, !0)
                    },
                    mouseup: function(e) {
                        le.focus(), e.preventDefault(), e.stopPropagation(), g = !1;
                        var t = pe(e.target);
                        if (!t.hasClass("disabled")) {
                            var n = t.parent();
                            (n.data(fe.date) || n.data(fe.focusDate) || n.data(fe.mode)) && (t = n);
                            var i = t.data(fe.date),
                                o = t.data(fe.focusDate),
                                a = t.data(fe.mode);
                            if (i && !1 !== ce.onSelect.call(d, i, le.get.mode())) {
                                var r = t.hasClass(ue.today);
                                le.selectDate(i, r)
                            } else o ? le.set.focusDate(o) : a && le.set.mode(a)
                        }
                    },
                    keydown: function(e) {
                        var t = e.which;
                        if (27 !== t && 9 !== t || le.popup("hide"), le.popup("is visible"))
                            if (37 === t || 38 === t || 39 === t || 40 === t) {
                                var n = "day" === (d = le.get.mode()) ? 7 : "hour" === d ? 4 : "minute" === d ? me.column : 3,
                                    i = 37 === t ? -1 : 38 === t ? -n : 39 == t ? 1 : n;
                                i *= "minute" === d ? ce.minTimeGap : 1;
                                var o = le.get.focusDate() || le.get.date() || new Date,
                                    a = o.getFullYear() + ("year" === d ? i : 0),
                                    r = o.getMonth() + ("month" === d ? i : 0),
                                    s = o.getDate() + ("day" === d ? i : 0),
                                    l = o.getHours() + ("hour" === d ? i : 0),
                                    c = o.getMinutes() + ("minute" === d ? i : 0),
                                    u = new Date(a, r, s, l, c);
                                "time" === ce.type && (u = le.helper.mergeDateTime(o, u)), le.helper.isDateInRange(u, d) && le.set.focusDate(u)
                            } else if (13 === t) {
                            var d = le.get.mode(),
                                f = le.get.focusDate();
                            f && !ce.isDisabled(f, d) && !le.helper.isDisabled(f, d) && le.helper.isEnabled(f, d) && le.selectDate(f), e.preventDefault(), e.stopPropagation()
                        }
                        38 !== t && 40 !== t || (e.preventDefault(), le.popup("show"))
                    },
                    inputChange: function() {
                        var e = c.val(),
                            t = n.date(e, ce);
                        le.set.date(t, !1)
                    },
                    inputFocus: function() {
                        ge.addClass(ue.active)
                    },
                    inputBlur: function() {
                        if (ge.removeClass(ue.active), ce.formatInput) {
                            var e = le.get.date(),
                                t = de.datetime(e, ce);
                            c.val(t)
                        }
                    },
                    inputClick: function() {
                        le.popup("show")
                    }
                },
                get: {
                    weekOfYear: function(e, t, n) {
                        var i, o, a;
                        return i = Date.UTC(e, t, n + 3) / 864e5, o = Math.floor(i / 7), a = new Date(6048e5 * o).getUTCFullYear(), o - Math.floor(Date.UTC(a, 0, 7) / 6048e5) + 1
                    },
                    date: function() {
                        return le.helper.sanitiseDate(l.data(fe.date)) || null
                    },
                    inputDate: function() {
                        return c.val()
                    },
                    focusDate: function() {
                        return l.data(fe.focusDate) || null
                    },
                    startDate: function() {
                        var e = le.get.calendarModule(ce.startCalendar);
                        return (e ? e.get.date() : l.data(fe.startDate)) || null
                    },
                    endDate: function() {
                        var e = le.get.calendarModule(ce.endCalendar);
                        return (e ? e.get.date() : l.data(fe.endDate)) || null
                    },
                    minDate: function() {
                        return l.data(fe.minDate) || null
                    },
                    maxDate: function() {
                        return l.data(fe.maxDate) || null
                    },
                    monthOffset: function() {
                        return l.data(fe.monthOffset) || 0
                    },
                    mode: function() {
                        var e = l.data(fe.mode) || ce.startMode,
                            t = le.get.validModes();
                        return 0 <= pe.inArray(e, t) ? e : "time" === ce.type ? "hour" : "month" === ce.type ? "month" : "year" === ce.type ? "year" : "day"
                    },
                    type: function() {
                        return l.data(fe.type) || ce.type
                    },
                    validModes: function() {
                        var e = [];
                        return "time" !== ce.type && (ce.disableYear && "year" !== ce.type || e.push("year"), (ce.disableMonth || "year" === ce.type) && "month" !== ce.type || e.push("month"), 0 <= ce.type.indexOf("date") && e.push("day")), 0 <= ce.type.indexOf("time") && (e.push("hour"), ce.disableMinute || e.push("minute")), e
                    },
                    isTouch: function() {
                        try {
                            return k.createEvent("TouchEvent"), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    calendarModule: function(e) {
                        return e ? (e instanceof pe || (e = pe(e).first()), e.data(i)) : null
                    }
                },
                set: {
                    date: function(e, t, n) {
                        t = !1 !== t, n = !1 !== n, e = le.helper.sanitiseDate(e), e = le.helper.dateInRange(e);
                        var i = le.get.mode(),
                            o = de.datetime(e, ce);
                        if (n && !1 === ce.onBeforeChange.call(d, e, o, i)) return !1;
                        if (le.set.focusDate(e), ce.isDisabled(e, i)) return !1;
                        var a = le.get.endDate();
                        a && e && a < e && le.set.endDate(T), le.set.dataKeyValue(fe.date, e), t && c.length && c.val(o), n && ce.onChange.call(d, e, o, i)
                    },
                    startDate: function(e, t) {
                        e = le.helper.sanitiseDate(e);
                        var n = le.get.calendarModule(ce.startCalendar);
                        n && n.set.date(e), le.set.dataKeyValue(fe.startDate, e, t)
                    },
                    endDate: function(e, t) {
                        e = le.helper.sanitiseDate(e);
                        var n = le.get.calendarModule(ce.endCalendar);
                        n && n.set.date(e), le.set.dataKeyValue(fe.endDate, e, t)
                    },
                    focusDate: function(e, t, n, i) {
                        e = le.helper.sanitiseDate(e), e = le.helper.dateInRange(e);
                        var o = "day" === le.get.mode(),
                            a = le.get.focusDate();
                        if (o && e && a) {
                            var r = 12 * (e.getFullYear() - a.getFullYear()) + e.getMonth() - a.getMonth();
                            if (r) {
                                var s = le.get.monthOffset() - r;
                                le.set.monthOffset(s, !1)
                            }
                        }
                        var l = le.set.dataKeyValue(fe.focusDate, e, t);
                        n = !1 !== n && l && !1 === t || p != i, p = i, n && le.update.focus(i)
                    },
                    minDate: function(e) {
                        e = le.helper.sanitiseDate(e), null !== ce.maxDate && ce.maxDate <= e ? le.verbose("Unable to set minDate variable bigger that maxDate variable", e, ce.maxDate) : (le.setting("minDate", e), le.set.dataKeyValue(fe.minDate, e))
                    },
                    maxDate: function(e) {
                        e = le.helper.sanitiseDate(e), null !== ce.minDate && ce.minDate >= e ? le.verbose("Unable to set maxDate variable lower that minDate variable", e, ce.minDate) : (le.setting("maxDate", e), le.set.dataKeyValue(fe.maxDate, e))
                    },
                    monthOffset: function(e, t) {
                        var n = Math.max(ce.multiMonth, 1);
                        e = Math.max(1 - n, Math.min(0, e)), le.set.dataKeyValue(fe.monthOffset, e, t)
                    },
                    mode: function(e, t) {
                        le.set.dataKeyValue(fe.mode, e, t)
                    },
                    dataKeyValue: function(e, t, n) {
                        var i = l.data(e),
                            o = i === t || i <= t && t <= i;
                        return t ? l.data(e, t) : l.removeData(e), (n = !1 !== n && !o) && le.refresh(), !o
                    }
                },
                selectDate: function(e, t) {
                    le.verbose("New date selection", e);
                    var n = le.get.mode();
                    if (t || "minute" === n || ce.disableMinute && "hour" === n || "date" === ce.type && "day" === n || "month" === ce.type && "month" === n || "year" === ce.type && "year" === n) {
                        if (!(!1 === le.set.date(e)) && ce.closable) {
                            le.popup("hide");
                            var i = le.get.calendarModule(ce.endCalendar);
                            i && (i.popup("show"), i.focus())
                        }
                    } else {
                        var o = "year" === n ? ce.disableMonth ? "day" : "month" : "month" === n ? "day" : "day" === n ? "hour" : "minute";
                        le.set.mode(o), "hour" === n || "day" === n && le.get.date() ? le.set.date(e) : le.set.focusDate(e)
                    }
                },
                changeDate: function(e) {
                    le.set.date(e)
                },
                clear: function() {
                    le.set.date(T)
                },
                popup: function() {
                    return u.popup.apply(u, arguments)
                },
                focus: function() {
                    c.length ? c.focus() : ge.focus()
                },
                blur: function() {
                    c.length ? c.blur() : ge.blur()
                },
                helper: {
                    isDisabled: function(n, i) {
                        return ("day" === i || "month" === i || "year" === i) && (-1 !== ce.disabledDaysOfWeek.indexOf(n.getDay()) || ce.disabledDates.some(function(e) {
                            if ("string" == typeof e && (e = le.helper.sanitiseDate(e)), e instanceof Date) return le.helper.dateEqual(n, e, i);
                            if (null !== e && "object" == typeof e)
                                if (e[fe.year]) {
                                    if ("number" == typeof e[fe.year]) return n.getFullYear() == e[fe.year];
                                    if (Array.isArray(e[fe.year])) return -1 < e[fe.year].indexOf(n.getFullYear())
                                } else if (e[fe.month]) {
                                if ("number" == typeof e[fe.month]) return n.getMonth() == e[fe.month];
                                if (Array.isArray(e[fe.month])) return -1 < e[fe.month].indexOf(n.getMonth());
                                if (e[fe.month] instanceof Date) {
                                    var t = le.helper.sanitiseDate(e[fe.month]);
                                    return n.getMonth() == t.getMonth() && n.getFullYear() == t.getFullYear()
                                }
                            } else if (e[fe.date] && "day" === i) {
                                if (e[fe.date] instanceof Date) return le.helper.dateEqual(n, le.helper.sanitiseDate(e[fe.date]), i);
                                if (Array.isArray(e[fe.date])) return e[fe.date].some(function(e) {
                                    return le.helper.dateEqual(n, e, i)
                                })
                            }
                        }))
                    },
                    isEnabled: function(t, n) {
                        return "day" !== n || (0 === ce.enabledDates.length || ce.enabledDates.some(function(e) {
                            return "string" == typeof e && (e = le.helper.sanitiseDate(e)), e instanceof Date ? le.helper.dateEqual(t, e, n) : null !== e && "object" == typeof e && e[fe.date] ? le.helper.dateEqual(t, le.helper.sanitiseDate(e[fe.date]), n) : void 0
                        }))
                    },
                    findDayAsObject: function(t, n, e) {
                        if ("day" === n || "month" === n || "year" === n)
                            for (var i, o = 0; o < e.length; o++) {
                                if ("string" == typeof(i = e[o]) && (i = le.helper.sanitiseDate(i)), i instanceof Date && le.helper.dateEqual(t, i, n)) {
                                    var a = {};
                                    return a[fe.date] = i, a
                                }
                                if (null !== i && "object" == typeof i)
                                    if (i[fe.year]) {
                                        if ("number" == typeof i[fe.year] && t.getFullYear() == i[fe.year]) return i;
                                        if (Array.isArray(i[fe.year]) && -1 < i[fe.year].indexOf(t.getFullYear())) return i
                                    } else if (i[fe.month]) {
                                    if ("number" == typeof i[fe.month] && t.getMonth() == i[fe.month]) return i;
                                    if (Array.isArray(i[fe.month])) {
                                        if (-1 < i[fe.month].indexOf(t.getMonth())) return i
                                    } else if (i[fe.month] instanceof Date) {
                                        var r = le.helper.sanitiseDate(i[fe.month]);
                                        if (t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear()) return i
                                    }
                                } else if (i[fe.date] && "day" === n) {
                                    if (i[fe.date] instanceof Date && le.helper.dateEqual(t, le.helper.sanitiseDate(i[fe.date]), n)) return i;
                                    if (Array.isArray(i[fe.date]) && i[fe.date].some(function(e) {
                                            return le.helper.dateEqual(t, e, n)
                                        })) return i
                                }
                            }
                        return null
                    },
                    sanitiseDate: function(e) {
                        return e ? (e instanceof Date || (e = n.date("" + e, ce)), !e || null === e || isNaN(e.getTime()) ? T : e) : T
                    },
                    dateDiff: function(e, t, n) {
                        n = n || "day";
                        var i = "time" === ce.type,
                            o = "year" === n,
                            a = o || "month" === n,
                            r = "minute" === n,
                            s = r || "hour" === n;
                        return e = new Date(i ? 2e3 : e.getFullYear(), i ? 0 : o ? 0 : e.getMonth(), i ? 1 : a ? 1 : e.getDate(), s ? e.getHours() : 0, r ? ce.minTimeGap * Math.floor(e.getMinutes() / ce.minTimeGap) : 0), (t = new Date(i ? 2e3 : t.getFullYear(), i ? 0 : o ? 0 : t.getMonth(), i ? 1 : a ? 1 : t.getDate(), s ? t.getHours() : 0, r ? ce.minTimeGap * Math.floor(t.getMinutes() / ce.minTimeGap) : 0)).getTime() - e.getTime()
                    },
                    dateEqual: function(e, t, n) {
                        return !!e && !!t && 0 === le.helper.dateDiff(e, t, n)
                    },
                    isDateInRange: function(e, t, n, i) {
                        if (!n && !i) {
                            var o = le.get.startDate();
                            n = o && ce.minDate ? new Date(Math.max(o, ce.minDate)) : o || ce.minDate, i = ce.maxDate
                        }
                        return n = n && new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), ce.minTimeGap * Math.ceil(n.getMinutes() / ce.minTimeGap)), !(!e || n && 0 < le.helper.dateDiff(e, n, t) || i && 0 < le.helper.dateDiff(i, e, t))
                    },
                    dateInRange: function(e, t, n) {
                        if (!t && !n) {
                            var i = le.get.startDate();
                            t = i && ce.minDate ? new Date(Math.max(i, ce.minDate)) : i || ce.minDate, n = ce.maxDate
                        }
                        t = t && new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), ce.minTimeGap * Math.ceil(t.getMinutes() / ce.minTimeGap));
                        var o = "time" === ce.type;
                        return e ? t && 0 < le.helper.dateDiff(e, t, "minute") ? o ? le.helper.mergeDateTime(e, t) : t : n && 0 < le.helper.dateDiff(n, e, "minute") ? o ? le.helper.mergeDateTime(e, n) : n : e : e
                    },
                    mergeDateTime: function(e, t) {
                        return e && t ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), t.getHours(), t.getMinutes()) : t
                    },
                    isTodayButton: function(e) {
                        return e.text() === ce.text.today
                    }
                },
                setting: function(e, t) {
                    if (le.debug("Changing setting", e, t), pe.isPlainObject(e)) pe.extend(!0, ce, e);
                    else {
                        if (t === T) return ce[e];
                        pe.isPlainObject(ce[e]) ? pe.extend(!0, ce[e], t) : ce[e] = t
                    }
                },
                internal: function(e, t) {
                    if (pe.isPlainObject(e)) pe.extend(!0, le, e);
                    else {
                        if (t === T) return le[e];
                        le[e] = t
                    }
                },
                debug: function() {
                    !ce.silent && ce.debug && (ce.performance ? le.performance.log(arguments) : (le.debug = Function.prototype.bind.call(console.info, console, ce.name + ":"), le.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !ce.silent && ce.verbose && ce.debug && (ce.performance ? le.performance.log(arguments) : (le.verbose = Function.prototype.bind.call(console.info, console, ce.name + ":"), le.verbose.apply(console, arguments)))
                },
                error: function() {
                    ce.silent || (le.error = Function.prototype.bind.call(console.error, console, ce.name + ":"), le.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        ce.performance && (n = (t = (new Date).getTime()) - (v || t), v = t, b.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: d,
                            "Execution Time": n
                        })), clearTimeout(le.performance.timer), le.performance.timer = setTimeout(le.performance.display, 500)
                    },
                    display: function() {
                        var e = ce.name + ":",
                            n = 0;
                        v = !1, clearTimeout(le.performance.timer), pe.each(b, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", a && (e += " '" + a + "'"), (console.group !== T || console.table !== T) && 0 < b.length && (console.groupCollapsed(e), console.table ? console.table(b) : pe.each(b, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), b = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = m;
                    return e = e || C, t = d || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, pe.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (pe.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== T) return a = r[n], !1;
                            if (!pe.isPlainObject(r[t]) || e == o) return r[t] !== T ? a = r[t] : le.error(s.method, i), !1;
                            r = r[t]
                        }
                    })), pe.isFunction(a) ? n = a.apply(t, e) : a !== T && (n = a), Array.isArray(h) ? h.push(n) : h !== T ? h = [h, n] : n !== T && (h = n), a
                }
            }, x ? (m === T && le.initialize(), le.invoke(y)) : (m !== T && m.invoke("destroy"), le.initialize())
        }), h !== T ? h : this
    }, pe.fn.calendar.settings = {
        name: "Calendar",
        namespace: "calendar",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !1,
        type: "datetime",
        firstDayOfWeek: 0,
        constantHeight: !0,
        today: !1,
        closable: !0,
        monthFirst: !0,
        touchReadonly: !0,
        inline: !1,
        on: null,
        initialDate: null,
        startMode: !1,
        minDate: null,
        maxDate: null,
        ampm: !0,
        disableYear: !1,
        disableMonth: !1,
        disableMinute: !1,
        formatInput: !0,
        startCalendar: null,
        endCalendar: null,
        multiMonth: 1,
        minTimeGap: 5,
        showWeekNumbers: null,
        disabledDates: [],
        disabledDaysOfWeek: [],
        enabledDates: [],
        eventDates: [],
        centuryBreak: 60,
        currentCentury: 2e3,
        selectAdjacentDays: !1,
        popupOptions: {
            position: "bottom left",
            lastResort: "bottom left",
            prefer: "opposite",
            hideOnScroll: !1
        },
        text: {
            days: ["S", "M", "T", "W", "T", "F", "S"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            now: "Now",
            am: "AM",
            pm: "PM",
            weekNo: "Week"
        },
        formatter: {
            header: function(e, t, n) {
                return "year" === t ? n.formatter.yearHeader(e, n) : "month" === t ? n.formatter.monthHeader(e, n) : "day" === t ? n.formatter.dayHeader(e, n) : "hour" === t ? n.formatter.hourHeader(e, n) : n.formatter.minuteHeader(e, n)
            },
            yearHeader: function(e, t) {
                var n = 10 * Math.ceil(e.getFullYear() / 10);
                return n - 9 + " - " + (2 + n)
            },
            monthHeader: function(e, t) {
                return e.getFullYear()
            },
            dayHeader: function(e, t) {
                return t.text.months[e.getMonth()] + " " + e.getFullYear()
            },
            hourHeader: function(e, t) {
                return t.formatter.date(e, t)
            },
            minuteHeader: function(e, t) {
                return t.formatter.date(e, t)
            },
            dayColumnHeader: function(e, t) {
                return t.text.days[e]
            },
            datetime: function(e, t) {
                if (!e) return "";
                var n = "time" === t.type ? "" : t.formatter.date(e, t),
                    i = t.type.indexOf("time") < 0 ? "" : t.formatter.time(e, t, !1);
                return n + ("datetime" === t.type ? " " : "") + i
            },
            date: function(e, t) {
                if (!e) return "";
                var n = e.getDate(),
                    i = t.text.months[e.getMonth()],
                    o = e.getFullYear();
                return "year" === t.type ? o : "month" === t.type ? i + " " + o : (t.monthFirst ? i + " " + n : n + " " + i) + ", " + o
            },
            time: function(e, t, n) {
                if (!e) return "";
                var i = e.getHours(),
                    o = e.getMinutes(),
                    a = "";
                return t.ampm && (a = " " + (i < 12 ? t.text.am : t.text.pm), i = 0 === i ? 12 : 12 < i ? i - 12 : i), i + ":" + (o < 10 ? "0" : "") + o + a
            },
            today: function(e) {
                return "date" === e.type ? e.text.today : e.text.now
            },
            cell: function(e, t, n) {}
        },
        parser: {
            date: function(e, t) {
                if (e instanceof Date) return e;
                if (!e) return null;
                if (0 === (e = ("" + e).trim().toLowerCase()).length) return null;
                e = t.monthFirst ? e : e.replace(/[\/\-\.]/g, "/").replace(/([0-9]+)\/([0-9]+)/, "$2/$1");
                var n, i, o, a = new Date(e);
                if (!isNaN(a.getDate())) return a;
                var r, s, l, c = -1,
                    u = -1,
                    d = -1,
                    f = -1,
                    m = -1,
                    g = T,
                    p = "time" === t.type,
                    h = t.type.indexOf("time") < 0,
                    v = e.split(t.regExp.dateWords),
                    b = e.split(t.regExp.dateNumbers);
                if (!h)
                    for (g = 0 <= pe.inArray(t.text.am.toLowerCase(), v) || !(0 <= pe.inArray(t.text.pm.toLowerCase(), v)) && T, n = 0; n < b.length; n++)
                        if (0 <= (s = b[n]).indexOf(":")) {
                            if (u < 0 || c < 0)
                                for (l = s.split(":"), o = 0; o < Math.min(2, l.length); o++) i = parseInt(l[o]), isNaN(i) && (i = 0), 0 === o ? u = i % 24 : c = i % 60;
                            b.splice(n, 1)
                        }
                if (!p) {
                    for (n = 0; n < v.length; n++)
                        if (!((r = v[n]).length <= 0)) {
                            for (i = 0; i < t.text.months.length; i++)
                                if (t.text.months[i].substring(0, r.length).toLowerCase() === r) {
                                    f = i + 1;
                                    break
                                }
                            if (0 <= f) break
                        }
                    for (n = 0; n < b.length; n++)
                        if (i = parseInt(b[n]), !isNaN(i) && i >= t.centuryBreak && n === b.length - 1) {
                            i <= 99 && (i += t.currentCentury - 100), m = i, b.splice(n, 1);
                            break
                        }
                    if (f < 0)
                        for (n = 0; n < b.length; n++)
                            if (o = 1 < n || t.monthFirst ? n : 1 === n ? 0 : 1, i = parseInt(b[o]), !isNaN(i) && 1 <= i && i <= 12) {
                                f = i, b.splice(o, 1);
                                break
                            }
                    for (n = 0; n < b.length; n++)
                        if (i = parseInt(b[n]), !isNaN(i) && 1 <= i && i <= 31) {
                            d = i, b.splice(n, 1);
                            break
                        }
                    if (m < 0)
                        for (n = b.length - 1; 0 <= n; n--)
                            if (i = parseInt(b[n]), !isNaN(i)) {
                                i <= 99 && (i += t.currentCentury), m = i, b.splice(n, 1);
                                break
                            }
                }
                if (!h) {
                    if (u < 0)
                        for (n = 0; n < b.length; n++)
                            if (i = parseInt(b[n]), !isNaN(i) && 0 <= i && i <= 23) {
                                u = i, b.splice(n, 1);
                                break
                            }
                    if (c < 0)
                        for (n = 0; n < b.length; n++)
                            if (i = parseInt(b[n]), !isNaN(i) && 0 <= i && i <= 59) {
                                c = i, b.splice(n, 1);
                                break
                            }
                }
                if (c < 0 && u < 0 && d < 0 && f < 0 && m < 0) return null;
                c < 0 && (c = 0), u < 0 && (u = 0), d < 0 && (d = 1), f < 0 && (f = 1), m < 0 && (m = (new Date).getFullYear()), g !== T && (g ? 12 === u && (u = 0) : u < 12 && (u += 12));
                var y = new Date(m, f - 1, d, u, c);
                return y.getMonth() === f - 1 && y.getFullYear() === m || (y = new Date(m, f, 0, u, c)), isNaN(y.getTime()) ? null : y
            }
        },
        onBeforeChange: function(e, t, n) {
            return !0
        },
        onChange: function(e, t, n) {},
        onShow: function() {},
        onVisible: function() {},
        onHide: function() {},
        onHidden: function() {},
        onSelect: function(e, t) {},
        isDisabled: function(e, t) {
            return !1
        },
        selector: {
            popup: ".ui.popup",
            input: "input",
            activator: "input",
            append: ".inline.field,.inline.fields"
        },
        regExp: {
            dateWords: /[^A-Za-z\u00C0-\u024F]+/g,
            dateNumbers: /[^\d:]+/g
        },
        error: {
            popup: "UI Popup, a required component is not included in this page",
            method: "The method you called is not defined."
        },
        className: {
            calendar: "calendar",
            active: "active",
            popup: "ui popup",
            grid: "ui equal width grid",
            column: "column",
            table: "ui celled center aligned unstackable table",
            prev: "prev link",
            next: "next link",
            prevIcon: "chevron left icon",
            nextIcon: "chevron right icon",
            link: "link",
            cell: "link",
            disabledCell: "disabled",
            weekCell: "disabled",
            adjacentCell: "adjacent",
            activeCell: "active",
            rangeCell: "range",
            focusCell: "focus",
            todayCell: "today",
            today: "today link"
        },
        metadata: {
            date: "date",
            focusDate: "focusDate",
            startDate: "startDate",
            endDate: "endDate",
            minDate: "minDate",
            maxDate: "maxDate",
            mode: "mode",
            type: "type",
            monthOffset: "monthOffset",
            message: "message",
            class: "class",
            month: "month",
            year: "year"
        },
        eventClass: "blue"
    }
}(jQuery, window, document),
function(S, D, A, E) {
    "use strict";
    S.isFunction = S.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.checkbox = function(u) {
        var d, e = S(this),
            f = e.selector || "",
            x = (new Date).getTime(),
            C = [],
            w = u,
            k = "string" == typeof w,
            T = [].slice.call(arguments, 1);
        return e.each(function() {
            var e, m, g = S.extend(!0, {}, S.fn.checkbox.settings, u),
                t = g.className,
                n = g.namespace,
                p = g.selector,
                s = g.error,
                i = "." + n,
                o = "module-" + n,
                h = S(this),
                a = S(this).children(p.label),
                v = S(this).children(p.input),
                b = v[0],
                r = !1,
                y = !1,
                l = h.data(o),
                c = this;
            m = {
                initialize: function() {
                    m.verbose("Initializing checkbox", g), m.create.label(), m.bind.events(), m.set.tabbable(), m.hide.input(), m.observeChanges(), m.instantiate(), m.setup()
                },
                instantiate: function() {
                    m.verbose("Storing instance of module", m), l = m, h.data(o, m)
                },
                destroy: function() {
                    m.verbose("Destroying module"), m.unbind.events(), m.show.input(), h.removeData(o)
                },
                fix: {
                    reference: function() {
                        h.is(p.input) && (m.debug("Behavior called on <input> adjusting invoked element"), h = h.closest(p.checkbox), m.refresh())
                    }
                },
                setup: function() {
                    m.set.initialLoad(), m.is.indeterminate() ? (m.debug("Initial value is indeterminate"), m.indeterminate()) : m.is.checked() ? (m.debug("Initial value is checked"), m.check()) : (m.debug("Initial value is unchecked"), m.uncheck()), m.remove.initialLoad()
                },
                refresh: function() {
                    a = h.children(p.label), v = h.children(p.input), b = v[0]
                },
                hide: {
                    input: function() {
                        m.verbose("Modifying <input> z-index to be unselectable"), v.addClass(t.hidden)
                    }
                },
                show: {
                    input: function() {
                        m.verbose("Modifying <input> z-index to be selectable"), v.removeClass(t.hidden)
                    }
                },
                observeChanges: function() {
                    "MutationObserver" in D && ((e = new MutationObserver(function(e) {
                        m.debug("DOM tree modified, updating selector cache"), m.refresh()
                    })).observe(c, {
                        childList: !0,
                        subtree: !0
                    }), m.debug("Setting up mutation observer", e))
                },
                attachEvents: function(e, t) {
                    var n = S(e);
                    t = S.isFunction(m[t]) ? m[t] : m.toggle, 0 < n.length ? (m.debug("Attaching checkbox events to element", e, t), n.on("click" + i, t)) : m.error(s.notFound)
                },
                preventDefaultOnInputTarget: function() {
                    "undefined" != typeof event && null !== event && S(event.target).is(p.input) && (m.verbose("Preventing default check action after manual check action"), event.preventDefault())
                },
                event: {
                    change: function(e) {
                        m.should.ignoreCallbacks() || g.onChange.call(b)
                    },
                    click: function(e) {
                        var t = S(e.target);
                        t.is(p.input) ? m.verbose("Using default check action on initialized checkbox") : t.is(p.link) ? m.debug("Clicking link inside checkbox, skipping toggle") : (m.toggle(), v.focus(), e.preventDefault())
                    },
                    keydown: function(e) {
                        var t = e.which,
                            n = 13,
                            i = 32,
                            o = 27,
                            a = 37,
                            r = 38,
                            s = 39,
                            l = 40,
                            c = m.get.radios(),
                            u = c.index(h),
                            d = c.length,
                            f = !1;
                        if (t == a || t == r ? f = (0 === u ? d : u) - 1 : t != s && t != l || (f = u === d - 1 ? 0 : u + 1), !m.should.ignoreCallbacks() && !1 !== f) {
                            if (!1 === g.beforeUnchecked.apply(b)) return m.verbose("Option not allowed to be unchecked, cancelling key navigation"), !1;
                            if (!1 === g.beforeChecked.apply(S(c[f]).children(p.input)[0])) return m.verbose("Next option should not allow check, cancelling key navigation"), !1
                        }
                        y = t == o ? (m.verbose("Escape key pressed blurring field"), v.blur(), !0) : !(e.ctrlKey || !(t == i || t == n && g.enableEnterKey)) && (m.verbose("Enter/space key pressed, toggling checkbox"), m.toggle(), !0)
                    },
                    keyup: function(e) {
                        y && e.preventDefault()
                    }
                },
                check: function() {
                    m.should.allowCheck() && (m.debug("Checking checkbox", v), m.set.checked(), m.should.ignoreCallbacks() || (g.onChecked.call(b), m.trigger.change()), m.preventDefaultOnInputTarget())
                },
                uncheck: function() {
                    m.should.allowUncheck() && (m.debug("Unchecking checkbox"), m.set.unchecked(), m.should.ignoreCallbacks() || (g.onUnchecked.call(b), m.trigger.change()), m.preventDefaultOnInputTarget())
                },
                indeterminate: function() {
                    m.should.allowIndeterminate() ? m.debug("Checkbox is already indeterminate") : (m.debug("Making checkbox indeterminate"), m.set.indeterminate(), m.should.ignoreCallbacks() || (g.onIndeterminate.call(b), m.trigger.change()))
                },
                determinate: function() {
                    m.should.allowDeterminate() ? m.debug("Checkbox is already determinate") : (m.debug("Making checkbox determinate"), m.set.determinate(), m.should.ignoreCallbacks() || (g.onDeterminate.call(b), m.trigger.change()))
                },
                enable: function() {
                    m.is.enabled() ? m.debug("Checkbox is already enabled") : (m.debug("Enabling checkbox"), m.set.enabled(), m.should.ignoreCallbacks() || (g.onEnable.call(b), g.onEnabled.call(b), m.trigger.change()))
                },
                disable: function() {
                    m.is.disabled() ? m.debug("Checkbox is already disabled") : (m.debug("Disabling checkbox"), m.set.disabled(), m.should.ignoreCallbacks() || (g.onDisable.call(b), g.onDisabled.call(b), m.trigger.change()))
                },
                get: {
                    radios: function() {
                        var e = m.get.name();
                        return S('input[name="' + e + '"]').closest(p.checkbox)
                    },
                    otherRadios: function() {
                        return m.get.radios().not(h)
                    },
                    name: function() {
                        return v.attr("name")
                    }
                },
                is: {
                    initialLoad: function() {
                        return r
                    },
                    radio: function() {
                        return v.hasClass(t.radio) || "radio" == v.attr("type")
                    },
                    indeterminate: function() {
                        return v.prop("indeterminate") !== E && v.prop("indeterminate")
                    },
                    checked: function() {
                        return v.prop("checked") !== E && v.prop("checked")
                    },
                    disabled: function() {
                        return v.prop("disabled") !== E && v.prop("disabled")
                    },
                    enabled: function() {
                        return !m.is.disabled()
                    },
                    determinate: function() {
                        return !m.is.indeterminate()
                    },
                    unchecked: function() {
                        return !m.is.checked()
                    }
                },
                should: {
                    allowCheck: function() {
                        return m.is.determinate() && m.is.checked() && !m.is.initialLoad() ? (m.debug("Should not allow check, checkbox is already checked"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeChecked.apply(b)) || (m.debug("Should not allow check, beforeChecked cancelled"), !1)
                    },
                    allowUncheck: function() {
                        return m.is.determinate() && m.is.unchecked() && !m.is.initialLoad() ? (m.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeUnchecked.apply(b)) || (m.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1)
                    },
                    allowIndeterminate: function() {
                        return m.is.indeterminate() && !m.is.initialLoad() ? (m.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeIndeterminate.apply(b)) || (m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1)
                    },
                    allowDeterminate: function() {
                        return m.is.determinate() && !m.is.initialLoad() ? (m.debug("Should not allow determinate, checkbox is already determinate"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeDeterminate.apply(b)) || (m.debug("Should not allow determinate, beforeDeterminate cancelled"), !1)
                    },
                    ignoreCallbacks: function() {
                        return r && !g.fireOnInit
                    }
                },
                can: {
                    change: function() {
                        return !(h.hasClass(t.disabled) || h.hasClass(t.readOnly) || v.prop("disabled") || v.prop("readonly"))
                    },
                    uncheck: function() {
                        return "boolean" == typeof g.uncheckable ? g.uncheckable : !m.is.radio()
                    }
                },
                set: {
                    initialLoad: function() {
                        r = !0
                    },
                    checked: function() {
                        m.verbose("Setting class to checked"), h.removeClass(t.indeterminate).addClass(t.checked), m.is.radio() && m.uncheckOthers(), m.is.indeterminate() || !m.is.checked() ? (m.verbose("Setting state to checked", b), v.prop("indeterminate", !1).prop("checked", !0)) : m.debug("Input is already checked, skipping input property change")
                    },
                    unchecked: function() {
                        m.verbose("Removing checked class"), h.removeClass(t.indeterminate).removeClass(t.checked), m.is.indeterminate() || !m.is.unchecked() ? (m.debug("Setting state to unchecked"), v.prop("indeterminate", !1).prop("checked", !1)) : m.debug("Input is already unchecked")
                    },
                    indeterminate: function() {
                        m.verbose("Setting class to indeterminate"), h.addClass(t.indeterminate), m.is.indeterminate() ? m.debug("Input is already indeterminate, skipping input property change") : (m.debug("Setting state to indeterminate"), v.prop("indeterminate", !0))
                    },
                    determinate: function() {
                        m.verbose("Removing indeterminate class"), h.removeClass(t.indeterminate), m.is.determinate() ? m.debug("Input is already determinate, skipping input property change") : (m.debug("Setting state to determinate"), v.prop("indeterminate", !1))
                    },
                    disabled: function() {
                        m.verbose("Setting class to disabled"), h.addClass(t.disabled), m.is.disabled() ? m.debug("Input is already disabled, skipping input property change") : (m.debug("Setting state to disabled"), v.prop("disabled", "disabled"))
                    },
                    enabled: function() {
                        m.verbose("Removing disabled class"), h.removeClass(t.disabled), m.is.enabled() ? m.debug("Input is already enabled, skipping input property change") : (m.debug("Setting state to enabled"), v.prop("disabled", !1))
                    },
                    tabbable: function() {
                        m.verbose("Adding tabindex to checkbox"), v.attr("tabindex") === E && v.attr("tabindex", 0)
                    }
                },
                remove: {
                    initialLoad: function() {
                        r = !1
                    }
                },
                trigger: {
                    change: function() {
                        var e = A.createEvent("HTMLEvents"),
                            t = v[0];
                        t && (m.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                    }
                },
                create: {
                    label: function() {
                        0 < v.prevAll(p.label).length ? (v.prev(p.label).detach().insertAfter(v), m.debug("Moving existing label", a)) : m.has.label() || (a = S("<label>").insertAfter(v), m.debug("Creating label", a))
                    }
                },
                has: {
                    label: function() {
                        return 0 < a.length
                    }
                },
                bind: {
                    events: function() {
                        m.verbose("Attaching checkbox events"), h.on("click" + i, m.event.click).on("change" + i, m.event.change).on("keydown" + i, p.input, m.event.keydown).on("keyup" + i, p.input, m.event.keyup)
                    }
                },
                unbind: {
                    events: function() {
                        m.debug("Removing events"), h.off(i)
                    }
                },
                uncheckOthers: function() {
                    var e = m.get.otherRadios();
                    m.debug("Unchecking other radios", e), e.removeClass(t.checked)
                },
                toggle: function() {
                    m.can.change() ? m.is.indeterminate() || m.is.unchecked() ? (m.debug("Currently unchecked"), m.check()) : m.is.checked() && m.can.uncheck() && (m.debug("Currently checked"), m.uncheck()) : m.is.radio() || m.debug("Checkbox is read-only or disabled, ignoring toggle")
                },
                setting: function(e, t) {
                    if (m.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, g, e);
                    else {
                        if (t === E) return g[e];
                        S.isPlainObject(g[e]) ? S.extend(!0, g[e], t) : g[e] = t
                    }
                },
                internal: function(e, t) {
                    if (S.isPlainObject(e)) S.extend(!0, m, e);
                    else {
                        if (t === E) return m[e];
                        m[e] = t
                    }
                },
                debug: function() {
                    !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                },
                error: function() {
                    g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        g.performance && (n = (t = (new Date).getTime()) - (x || t), x = t, C.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: c,
                            "Execution Time": n
                        })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                    },
                    display: function() {
                        var e = g.name + ":",
                            n = 0;
                        x = !1, clearTimeout(m.performance.timer), S.each(C, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", f && (e += " '" + f + "'"), (console.group !== E || console.table !== E) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : S.each(C, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), C = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = l;
                    return e = e || T, t = c || t, "string" == typeof i && r !== E && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (S.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== E) return a = r[n], !1;
                            if (!S.isPlainObject(r[t]) || e == o) return r[t] !== E ? a = r[t] : m.error(s.method, i), !1;
                            r = r[t]
                        }
                    })), S.isFunction(a) ? n = a.apply(t, e) : a !== E && (n = a), Array.isArray(d) ? d.push(n) : d !== E ? d = [d, n] : n !== E && (d = n), a
                }
            }, k ? (l === E && m.initialize(), m.invoke(w)) : (l !== E && l.invoke("destroy"), m.initialize())
        }), d !== E ? d : this
    }, S.fn.checkbox.settings = {
        name: "Checkbox",
        namespace: "checkbox",
        silent: !1,
        debug: !1,
        verbose: !0,
        performance: !0,
        uncheckable: "auto",
        fireOnInit: !1,
        enableEnterKey: !0,
        onChange: function() {},
        beforeChecked: function() {},
        beforeUnchecked: function() {},
        beforeDeterminate: function() {},
        beforeIndeterminate: function() {},
        onChecked: function() {},
        onUnchecked: function() {},
        onDeterminate: function() {},
        onIndeterminate: function() {},
        onEnable: function() {},
        onDisable: function() {},
        onEnabled: function() {},
        onDisabled: function() {},
        className: {
            checked: "checked",
            indeterminate: "indeterminate",
            disabled: "disabled",
            hidden: "hidden",
            radio: "radio",
            readOnly: "read-only"
        },
        error: {
            method: "The method you called is not defined"
        },
        selector: {
            checkbox: ".ui.checkbox",
            label: "label, .box",
            input: 'input[type="checkbox"], input[type="radio"]',
            link: "a[href]"
        }
    }
}(jQuery, window, document),
function(k, e, T, S) {
    "use strict";
    k.isFunction = k.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.dimmer = function(p) {
        var h, v = k(this),
            b = (new Date).getTime(),
            y = [],
            x = p,
            C = "string" == typeof x,
            w = [].slice.call(arguments, 1);
        return v.each(function() {
            var a, t, s, r = k.isPlainObject(p) ? k.extend(!0, {}, k.fn.dimmer.settings, p) : k.extend({}, k.fn.dimmer.settings),
                n = r.selector,
                e = r.namespace,
                i = r.className,
                l = r.error,
                o = "." + e,
                c = "module-" + e,
                u = v.selector || "",
                d = "ontouchstart" in T.documentElement ? "touchstart" : "click",
                f = k(this),
                m = this,
                g = f.data(c);
            (s = {
                preinitialize: function() {
                    a = s.is.dimmer() ? (t = f.parent(), f) : (t = f, s.has.dimmer() ? r.dimmerName ? t.find(n.dimmer).filter("." + r.dimmerName) : t.find(n.dimmer) : s.create())
                },
                initialize: function() {
                    s.debug("Initializing dimmer", r), s.bind.events(), s.set.dimmable(), s.instantiate()
                },
                instantiate: function() {
                    s.verbose("Storing instance of module", s), g = s, f.data(c, g)
                },
                destroy: function() {
                    s.verbose("Destroying previous module", a), s.unbind.events(), s.remove.variation(), t.off(o)
                },
                bind: {
                    events: function() {
                        "hover" == r.on ? t.on("mouseenter" + o, s.show).on("mouseleave" + o, s.hide) : "click" == r.on && t.on(d + o, s.toggle), s.is.page() && (s.debug("Setting as a page dimmer", t), s.set.pageDimmer()), s.is.closable() && (s.verbose("Adding dimmer close event", a), t.on(d + o, n.dimmer, s.event.click))
                    }
                },
                unbind: {
                    events: function() {
                        f.removeData(c), t.off(o)
                    }
                },
                event: {
                    click: function(e) {
                        s.verbose("Determining if event occured on dimmer", e), 0 !== a.find(e.target).length && !k(e.target).is(n.content) || (s.hide(), e.stopImmediatePropagation())
                    }
                },
                addContent: function(e) {
                    var t = k(e);
                    s.debug("Add content to dimmer", t), t.parent()[0] !== a[0] && t.detach().appendTo(a)
                },
                create: function() {
                    var e = k(r.template.dimmer(r));
                    return r.dimmerName && (s.debug("Creating named dimmer", r.dimmerName), e.addClass(r.dimmerName)), e.appendTo(t), e
                },
                show: function(e) {
                    e = k.isFunction(e) ? e : function() {}, s.debug("Showing dimmer", a, r), s.set.variation(), s.is.dimmed() && !s.is.animating() || !s.is.enabled() ? s.debug("Dimmer is already shown or disabled") : (s.animate.show(e), r.onShow.call(m), r.onChange.call(m))
                },
                hide: function(e) {
                    e = k.isFunction(e) ? e : function() {}, s.is.dimmed() || s.is.animating() ? (s.debug("Hiding dimmer", a), s.animate.hide(e), r.onHide.call(m), r.onChange.call(m)) : s.debug("Dimmer is not visible")
                },
                toggle: function() {
                    s.verbose("Toggling dimmer visibility", a), s.is.dimmed() ? s.is.closable() && s.hide() : s.show()
                },
                animate: {
                    show: function(e) {
                        e = k.isFunction(e) ? e : function() {}, r.useCSS && k.fn.transition !== S && a.transition("is supported") ? (r.useFlex ? (s.debug("Using flex dimmer"), s.remove.legacy()) : (s.debug("Using legacy non-flex dimmer"), s.set.legacy()), "auto" !== r.opacity && s.set.opacity(), a.transition({
                            displayType: r.useFlex ? "flex" : "block",
                            animation: r.transition + " in",
                            queue: !1,
                            duration: s.get.duration(),
                            useFailSafe: !0,
                            onStart: function() {
                                s.set.dimmed()
                            },
                            onComplete: function() {
                                s.set.active(), e()
                            }
                        })) : (s.verbose("Showing dimmer animation with javascript"), s.set.dimmed(), "auto" == r.opacity && (r.opacity = .8), a.stop().css({
                            opacity: 0,
                            width: "100%",
                            height: "100%"
                        }).fadeTo(s.get.duration(), r.opacity, function() {
                            a.removeAttr("style"), s.set.active(), e()
                        }))
                    },
                    hide: function(e) {
                        e = k.isFunction(e) ? e : function() {}, r.useCSS && k.fn.transition !== S && a.transition("is supported") ? (s.verbose("Hiding dimmer with css"), a.transition({
                            displayType: r.useFlex ? "flex" : "block",
                            animation: r.transition + " out",
                            queue: !1,
                            duration: s.get.duration(),
                            useFailSafe: !0,
                            onComplete: function() {
                                s.remove.dimmed(), s.remove.variation(), s.remove.active(), e()
                            }
                        })) : (s.verbose("Hiding dimmer with javascript"), a.stop().fadeOut(s.get.duration(), function() {
                            s.remove.dimmed(), s.remove.active(), a.removeAttr("style"), e()
                        }))
                    }
                },
                get: {
                    dimmer: function() {
                        return a
                    },
                    duration: function() {
                        return "object" == typeof r.duration ? s.is.active() ? r.duration.hide : r.duration.show : r.duration
                    }
                },
                has: {
                    dimmer: function() {
                        return r.dimmerName ? 0 < f.find(n.dimmer).filter("." + r.dimmerName).length : 0 < f.find(n.dimmer).length
                    }
                },
                is: {
                    active: function() {
                        return a.hasClass(i.active)
                    },
                    animating: function() {
                        return a.is(":animated") || a.hasClass(i.animating)
                    },
                    closable: function() {
                        return "auto" == r.closable ? "hover" != r.on : r.closable
                    },
                    dimmer: function() {
                        return f.hasClass(i.dimmer)
                    },
                    dimmable: function() {
                        return f.hasClass(i.dimmable)
                    },
                    dimmed: function() {
                        return t.hasClass(i.dimmed)
                    },
                    disabled: function() {
                        return t.hasClass(i.disabled)
                    },
                    enabled: function() {
                        return !s.is.disabled()
                    },
                    page: function() {
                        return t.is("body")
                    },
                    pageDimmer: function() {
                        return a.hasClass(i.pageDimmer)
                    }
                },
                can: {
                    show: function() {
                        return !a.hasClass(i.disabled)
                    }
                },
                set: {
                    opacity: function(e) {
                        var t = a.css("background-color"),
                            n = t.split(","),
                            i = n && 3 == n.length,
                            o = n && 4 == n.length;
                        e = 0 === r.opacity ? 0 : r.opacity || e, t = i || o ? (n[3] = e + ")", n.join(",")) : "rgba(0, 0, 0, " + e + ")", s.debug("Setting opacity to", e), a.css("background-color", t)
                    },
                    legacy: function() {
                        a.addClass(i.legacy)
                    },
                    active: function() {
                        a.addClass(i.active)
                    },
                    dimmable: function() {
                        t.addClass(i.dimmable)
                    },
                    dimmed: function() {
                        t.addClass(i.dimmed)
                    },
                    pageDimmer: function() {
                        a.addClass(i.pageDimmer)
                    },
                    disabled: function() {
                        a.addClass(i.disabled)
                    },
                    variation: function(e) {
                        (e = e || r.variation) && a.addClass(e)
                    }
                },
                remove: {
                    active: function() {
                        a.removeClass(i.active)
                    },
                    legacy: function() {
                        a.removeClass(i.legacy)
                    },
                    dimmed: function() {
                        t.removeClass(i.dimmed)
                    },
                    disabled: function() {
                        a.removeClass(i.disabled)
                    },
                    variation: function(e) {
                        (e = e || r.variation) && a.removeClass(e)
                    }
                },
                setting: function(e, t) {
                    if (s.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, r, e);
                    else {
                        if (t === S) return r[e];
                        k.isPlainObject(r[e]) ? k.extend(!0, r[e], t) : r[e] = t
                    }
                },
                internal: function(e, t) {
                    if (k.isPlainObject(e)) k.extend(!0, s, e);
                    else {
                        if (t === S) return s[e];
                        s[e] = t
                    }
                },
                debug: function() {
                    !r.silent && r.debug && (r.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), s.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !r.silent && r.verbose && r.debug && (r.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), s.verbose.apply(console, arguments)))
                },
                error: function() {
                    r.silent || (s.error = Function.prototype.bind.call(console.error, console, r.name + ":"), s.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        r.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: m,
                            "Execution Time": n
                        })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                    },
                    display: function() {
                        var e = r.name + ":",
                            n = 0;
                        b = !1, clearTimeout(s.performance.timer), k.each(y, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", u && (e += " '" + u + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== S || console.table !== S) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), y = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = g;
                    return e = e || w, t = m || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (k.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== S) return a = r[n], !1;
                            if (!k.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : s.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), k.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(h) ? h.push(n) : h !== S ? h = [h, n] : n !== S && (h = n), a
                }
            }).preinitialize(), C ? (g === S && s.initialize(), s.invoke(x)) : (g !== S && g.invoke("destroy"), s.initialize())
        }), h !== S ? h : this
    }, k.fn.dimmer.settings = {
        name: "Dimmer",
        namespace: "dimmer",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        useFlex: !0,
        dimmerName: !1,
        variation: !1,
        closable: "auto",
        useCSS: !0,
        transition: "fade",
        on: !1,
        opacity: "auto",
        duration: {
            show: 500,
            hide: 500
        },
        displayLoader: !1,
        loaderText: !1,
        loaderVariation: "",
        onChange: function() {},
        onShow: function() {},
        onHide: function() {},
        error: {
            method: "The method you called is not defined."
        },
        className: {
            active: "active",
            animating: "animating",
            dimmable: "dimmable",
            dimmed: "dimmed",
            dimmer: "dimmer",
            disabled: "disabled",
            hide: "hide",
            legacy: "legacy",
            pageDimmer: "page",
            show: "show",
            loader: "ui loader"
        },
        selector: {
            dimmer: "> .ui.dimmer",
            content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
        },
        template: {
            dimmer: function(e) {
                var t, n = k("<div/>").addClass("ui dimmer");
                return e.displayLoader && (t = k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation), e.loaderText && (t.text(e.loaderText), t.addClass("text")), n.append(t)), n
            }
        }
    }
}(jQuery, window, document),
function(_, ee, te, ne) {
    "use strict";
    _.isFunction = _.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, ee = void 0 !== ee && ee.Math == Math ? ee : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), _.fn.dropdown = function(H) {
        var U, B = _(this),
            W = _(te),
            Y = B.selector || "",
            Q = "ontouchstart" in te.documentElement,
            X = Q ? "touchstart" : "click",
            $ = (new Date).getTime(),
            G = [],
            K = H,
            J = "string" == typeof K,
            Z = [].slice.call(arguments, 1);
        return B.each(function(n) {
            var c, e, t, i, o, a, r, s, p, g = _.isPlainObject(H) ? _.extend(!0, {}, _.fn.dropdown.settings, H) : _.extend({}, _.fn.dropdown.settings),
                h = g.className,
                u = g.message,
                l = g.fields,
                v = g.keys,
                b = g.metadata,
                d = g.namespace,
                f = g.regExp,
                y = g.selector,
                m = g.error,
                x = g.templates,
                C = "." + d,
                w = "module-" + d,
                k = _(this),
                T = _(g.context),
                S = k.find(y.text),
                D = k.find(y.search),
                A = k.find(y.sizer),
                E = k.find(y.input),
                F = k.find(y.icon),
                P = k.find(y.clearIcon),
                O = 0 < k.prev().find(y.text).length ? k.prev().find(y.text) : k.prev(),
                R = k.children(y.menu),
                M = R.find(y.item),
                I = g.hideDividers ? M.parent().children(y.divider) : _(),
                j = !1,
                q = !1,
                L = !1,
                V = !1,
                z = this,
                N = k.data(w);
            p = {
                initialize: function() {
                    p.debug("Initializing dropdown", g), p.is.alreadySetup() ? p.setup.reference() : (g.ignoreDiacritics && !String.prototype.normalize && (g.ignoreDiacritics = !1, p.error(m.noNormalize, z)), p.setup.layout(), g.values && p.change.values(g.values), p.refreshData(), p.save.defaults(), p.restore.selected(), p.create.id(), p.bind.events(), p.observeChanges(), p.instantiate())
                },
                instantiate: function() {
                    p.verbose("Storing instance of dropdown", p), N = p, k.data(w, p)
                },
                destroy: function() {
                    p.verbose("Destroying previous dropdown", k), p.remove.tabbable(), p.remove.active(), R.transition("stop all"), R.removeClass(h.visible).addClass(h.hidden), k.off(C).removeData(w), R.off(C), W.off(o), p.disconnect.menuObserver(), p.disconnect.selectObserver()
                },
                observeChanges: function() {
                    "MutationObserver" in ee && (r = new MutationObserver(p.event.select.mutation), s = new MutationObserver(p.event.menu.mutation), p.debug("Setting up mutation observer", r, s), p.observe.select(), p.observe.menu())
                },
                disconnect: {
                    menuObserver: function() {
                        s && s.disconnect()
                    },
                    selectObserver: function() {
                        r && r.disconnect()
                    }
                },
                observe: {
                    select: function() {
                        p.has.input() && r && r.observe(k[0], {
                            childList: !0,
                            subtree: !0
                        })
                    },
                    menu: function() {
                        p.has.menu() && s && s.observe(R[0], {
                            childList: !0,
                            subtree: !0
                        })
                    }
                },
                create: {
                    id: function() {
                        a = (Math.random().toString(16) + "000000000").substr(2, 8), o = "." + a, p.verbose("Creating unique id for element", a)
                    },
                    userChoice: function(e) {
                        var n, i, o;
                        return !!(e = e || p.get.userValues()) && (e = Array.isArray(e) ? e : [e], _.each(e, function(e, t) {
                            !1 === p.get.item(t) && (o = g.templates.addition(p.add.variables(u.addResult, t)), i = _("<div />").html(o).attr("data-" + b.value, t).attr("data-" + b.text, t).addClass(h.addition).addClass(h.item), g.hideAdditions && i.addClass(h.hidden), n = n === ne ? i : n.add(i), p.verbose("Creating user choices for value", t, i))
                        }), n)
                    },
                    userLabels: function(e) {
                        var t = p.get.userValues();
                        t && (p.debug("Adding user labels", t), _.each(t, function(e, t) {
                            p.verbose("Adding custom user value"), p.add.label(t, t)
                        }))
                    },
                    menu: function() {
                        R = _("<div />").addClass(h.menu).appendTo(k)
                    },
                    sizer: function() {
                        A = _("<span />").addClass(h.sizer).insertAfter(D)
                    }
                },
                search: function(e) {
                    e = e !== ne ? e : p.get.query(), p.verbose("Searching for query", e), p.has.minCharacters(e) ? p.filter(e) : p.hide(null, !0)
                },
                select: {
                    firstUnfiltered: function() {
                        p.verbose("Selecting first non-filtered element"), p.remove.selectedItem(), M.not(y.unselectable).not(y.addition + y.hidden).eq(0).addClass(h.selected)
                    },
                    nextAvailable: function(e) {
                        var t = (e = e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),
                            n = e.prevAll(y.item).not(y.unselectable).eq(0);
                        0 < t.length ? (p.verbose("Moving selection to", t), t.addClass(h.selected)) : (p.verbose("Moving selection to", n), n.addClass(h.selected))
                    }
                },
                setup: {
                    api: function() {
                        var e = {
                            debug: g.debug,
                            urlData: {
                                value: p.get.value(),
                                query: p.get.query()
                            },
                            on: !1
                        };
                        p.verbose("First request, initializing API"), k.api(e)
                    },
                    layout: function() {
                        k.is("select") && (p.setup.select(), p.setup.returnedObject()), p.has.menu() || p.create.menu(), p.is.selection() && p.is.clearable() && !p.has.clearItem() && (p.verbose("Adding clear icon"), P = _("<i />").addClass("remove icon").insertBefore(S)), p.is.search() && !p.has.search() && (p.verbose("Adding search input"), D = _("<input />").addClass(h.search).prop("autocomplete", "off").insertBefore(S)), p.is.multiple() && p.is.searchSelection() && !p.has.sizer() && p.create.sizer(), g.allowTab && p.set.tabbable()
                    },
                    select: function() {
                        var e = p.get.selectValues();
                        p.debug("Dropdown initialized on a select", e), k.is("select") && (E = k), 0 < E.parent(y.dropdown).length ? (p.debug("UI dropdown already exists. Creating dropdown menu only"), k = E.closest(y.dropdown), p.has.menu() || p.create.menu(), R = k.children(y.menu), p.setup.menu(e)) : (p.debug("Creating entire dropdown from select"), k = _("<div />").attr("class", E.attr("class")).addClass(h.selection).addClass(h.dropdown).html(x.dropdown(e, l, g.preserveHTML, g.className)).insertBefore(E), E.hasClass(h.multiple) && !1 === E.prop("multiple") && (p.error(m.missingMultiple), E.prop("multiple", !0)), E.is("[multiple]") && p.set.multiple(), E.prop("disabled") && (p.debug("Disabling dropdown"), k.addClass(h.disabled)), E.removeAttr("required").removeAttr("class").detach().prependTo(k)), p.refresh()
                    },
                    menu: function(e) {
                        R.html(x.menu(e, l, g.preserveHTML, g.className)), M = R.find(y.item), I = g.hideDividers ? M.parent().children(y.divider) : _()
                    },
                    reference: function() {
                        p.debug("Dropdown behavior was called on select, replacing with closest dropdown"), k = k.parent(y.dropdown), N = k.data(w), z = k.get(0), p.refresh(), p.setup.returnedObject()
                    },
                    returnedObject: function() {
                        var e = B.slice(0, n),
                            t = B.slice(n + 1);
                        B = e.add(k).add(t)
                    }
                },
                refresh: function() {
                    p.refreshSelectors(), p.refreshData()
                },
                refreshItems: function() {
                    M = R.find(y.item), I = g.hideDividers ? M.parent().children(y.divider) : _()
                },
                refreshSelectors: function() {
                    p.verbose("Refreshing selector cache"), S = k.find(y.text), D = k.find(y.search), E = k.find(y.input), F = k.find(y.icon), O = 0 < k.prev().find(y.text).length ? k.prev().find(y.text) : k.prev(), R = k.children(y.menu), M = R.find(y.item), I = g.hideDividers ? M.parent().children(y.divider) : _()
                },
                refreshData: function() {
                    p.verbose("Refreshing cached metadata"), M.removeData(b.text).removeData(b.value)
                },
                clearData: function() {
                    p.verbose("Clearing metadata"), M.removeData(b.text).removeData(b.value), k.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)
                },
                toggle: function() {
                    p.verbose("Toggling menu visibility"), p.is.active() ? p.hide() : p.show()
                },
                show: function(e, t) {
                    if (e = _.isFunction(e) ? e : function() {}, !p.can.show() && p.is.remote() && (p.debug("No API results retrieved, searching before show"), p.queryRemote(p.get.query(), p.show)), p.can.show() && !p.is.active()) {
                        if (p.debug("Showing dropdown"), !p.has.message() || p.has.maxSelections() || p.has.allResultsFiltered() || p.remove.message(), p.is.allFiltered()) return !0;
                        !1 !== g.onShow.call(z) && p.animate.show(function() {
                            p.can.click() && p.bind.intent(), p.has.search() && !t && p.focusSearch(), p.set.visible(), e.call(z)
                        })
                    }
                },
                hide: function(e, t) {
                    e = _.isFunction(e) ? e : function() {}, p.is.active() && !p.is.animatingOutward() ? (p.debug("Hiding dropdown"), !1 !== g.onHide.call(z) && p.animate.hide(function() {
                        p.remove.visible(), p.is.focusedOnSearch() && !0 !== t && D.blur(), e.call(z)
                    })) : p.can.click() && p.unbind.intent()
                },
                hideOthers: function() {
                    p.verbose("Finding other dropdowns to hide"), B.not(k).has(y.menu + "." + h.visible).dropdown("hide")
                },
                hideMenu: function() {
                    p.verbose("Hiding menu  instantaneously"), p.remove.active(), p.remove.visible(), R.transition("hide")
                },
                hideSubMenus: function() {
                    var e = R.children(y.item).find(y.menu);
                    p.verbose("Hiding sub menus", e), e.transition("hide")
                },
                bind: {
                    events: function() {
                        p.bind.keyboardEvents(), p.bind.inputEvents(), p.bind.mouseEvents()
                    },
                    keyboardEvents: function() {
                        p.verbose("Binding keyboard events"), k.on("keydown" + C, p.event.keydown), p.has.search() && k.on(p.get.inputEvent() + C, y.search, p.event.input), p.is.multiple() && W.on("keydown" + o, p.event.document.keydown)
                    },
                    inputEvents: function() {
                        p.verbose("Binding input change events"), k.on("change" + C, y.input, p.event.change)
                    },
                    mouseEvents: function() {
                        p.verbose("Binding mouse events"), p.is.multiple() && k.on(X + C, y.label, p.event.label.click).on(X + C, y.remove, p.event.remove.click), p.is.searchSelection() ? (k.on("mousedown" + C, p.event.mousedown).on("mouseup" + C, p.event.mouseup).on("mousedown" + C, y.menu, p.event.menu.mousedown).on("mouseup" + C, y.menu, p.event.menu.mouseup).on(X + C, y.icon, p.event.icon.click).on(X + C, y.clearIcon, p.event.clearIcon.click).on("focus" + C, y.search, p.event.search.focus).on(X + C, y.search, p.event.search.focus).on("blur" + C, y.search, p.event.search.blur).on(X + C, y.text, p.event.text.focus), p.is.multiple() && k.on(X + C, p.event.click)) : ("click" == g.on ? k.on(X + C, y.icon, p.event.icon.click).on(X + C, p.event.test.toggle) : "hover" == g.on ? k.on("mouseenter" + C, p.delay.show).on("mouseleave" + C, p.delay.hide) : k.on(g.on + C, p.toggle), k.on("mousedown" + C, p.event.mousedown).on("mouseup" + C, p.event.mouseup).on("focus" + C, p.event.focus).on(X + C, y.clearIcon, p.event.clearIcon.click), p.has.menuSearch() ? k.on("blur" + C, y.search, p.event.search.blur) : k.on("blur" + C, p.event.blur)), R.on((Q ? "touchstart" : "mouseenter") + C, y.item, p.event.item.mouseenter).on("mouseleave" + C, y.item, p.event.item.mouseleave).on("click" + C, y.item, p.event.item.click)
                    },
                    intent: function() {
                        p.verbose("Binding hide intent event to document"), Q && W.on("touchstart" + o, p.event.test.touch).on("touchmove" + o, p.event.test.touch), W.on(X + o, p.event.test.hide)
                    }
                },
                unbind: {
                    intent: function() {
                        p.verbose("Removing hide intent event from document"), Q && W.off("touchstart" + o).off("touchmove" + o), W.off(X + o)
                    }
                },
                filter: function(e) {
                    function t() {
                        p.is.multiple() && p.filterActive(), (e || !e && 0 == p.get.activeItem().length) && p.select.firstUnfiltered(), p.has.allResultsFiltered() ? g.onNoResults.call(z, n) ? g.allowAdditions ? g.hideAdditions && (p.verbose("User addition with no menu, setting empty style"), p.set.empty(), p.hideMenu()) : (p.verbose("All items filtered, showing message", n), p.add.message(u.noResults)) : (p.verbose("All items filtered, hiding dropdown", n), p.hideMenu()) : (p.remove.empty(), p.remove.message()), g.allowAdditions && p.add.userSuggestion(p.escape.htmlEntities(e)), p.is.searchSelection() && p.can.show() && p.is.focusedOnSearch() && p.show()
                    }
                    var n = e !== ne ? e : p.get.query();
                    g.useLabels && p.has.maxSelections() || (g.apiSettings ? p.can.useAPI() ? p.queryRemote(n, function() {
                        g.filterRemoteData && p.filterItems(n);
                        var e = E.val();
                        Array.isArray(e) || (e = e && "" !== e ? e.split(g.delimiter) : []), _.each(e, function(e, t) {
                            M.filter('[data-value="' + t + '"]').addClass(h.filtered)
                        }), t()
                    }) : p.error(m.noAPI) : (p.filterItems(n), t()))
                },
                queryRemote: function(e, n) {
                    var t = {
                        errorDuration: !1,
                        cache: "local",
                        throttle: g.throttle,
                        urlData: {
                            query: e
                        },
                        onError: function() {
                            p.add.message(u.serverError), n()
                        },
                        onFailure: function() {
                            p.add.message(u.serverError), n()
                        },
                        onSuccess: function(e) {
                            var t = e[l.remoteValues];
                            Array.isArray(t) || (t = []), p.remove.message(), p.setup.menu({
                                values: t
                            }), 0 !== t.length || g.allowAdditions || p.add.message(u.noResults), n()
                        }
                    };
                    k.api("get request") || p.setup.api(), t = _.extend(!0, {}, t, g.apiSettings), k.api("setting", t).api("query")
                },
                filterItems: function(e) {
                    var i = p.remove.diacritics(e !== ne ? e : p.get.query()),
                        o = null,
                        t = p.escape.string(i),
                        n = (g.ignoreSearchCase ? "i" : "") + "gm",
                        a = new RegExp("^" + t, n);
                    p.has.query() && (o = [], p.verbose("Searching for matching values", i), M.each(function() {
                        var e, t, n = _(this);
                        if (n.hasClass(h.unfilterable)) return o.push(this), !0;
                        if ("both" === g.match || "text" === g.match) {
                            if (-1 !== (e = p.remove.diacritics(String(p.get.choiceText(n, !1)))).search(a)) return o.push(this), !0;
                            if ("exact" === g.fullTextSearch && p.exactSearch(i, e)) return o.push(this), !0;
                            if (!0 === g.fullTextSearch && p.fuzzySearch(i, e)) return o.push(this), !0
                        }
                        if ("both" === g.match || "value" === g.match) {
                            if (-1 !== (t = p.remove.diacritics(String(p.get.choiceValue(n, e)))).search(a)) return o.push(this), !0;
                            if ("exact" === g.fullTextSearch && p.exactSearch(i, t)) return o.push(this), !0;
                            if (!0 === g.fullTextSearch && p.fuzzySearch(i, t)) return o.push(this), !0
                        }
                    })), p.debug("Showing only matched items", i), p.remove.filteredItem(), o && M.not(o).addClass(h.filtered), p.has.query() ? !0 === g.hideDividers ? I.addClass(h.hidden) : "empty" === g.hideDividers && I.removeClass(h.hidden).filter(function() {
                        var e = _(this).nextUntil(y.item);
                        return 0 === (e.length ? e : _(this)).nextUntil(y.divider).filter(y.item + ":not(." + h.filtered + ")").length
                    }).addClass(h.hidden) : I.removeClass(h.hidden)
                },
                fuzzySearch: function(e, t) {
                    var n = t.length,
                        i = e.length;
                    if (e = g.ignoreSearchCase ? e.toLowerCase() : e, t = g.ignoreSearchCase ? t.toLowerCase() : t, n < i) return !1;
                    if (i === n) return e === t;
                    e: for (var o = 0, a = 0; o < i; o++) {
                        for (var r = e.charCodeAt(o); a < n;)
                            if (t.charCodeAt(a++) === r) continue e;
                        return !1
                    }
                    return !0
                },
                exactSearch: function(e, t) {
                    return e = g.ignoreSearchCase ? e.toLowerCase() : e, -1 < (t = g.ignoreSearchCase ? t.toLowerCase() : t).indexOf(e)
                },
                filterActive: function() {
                    g.useLabels && M.filter("." + h.active).addClass(h.filtered)
                },
                focusSearch: function(e) {
                    p.has.search() && !p.is.focusedOnSearch() && (e ? (k.off("focus" + C, y.search), D.focus(), k.on("focus" + C, y.search, p.event.search.focus)) : D.focus())
                },
                blurSearch: function() {
                    p.has.search() && D.blur()
                },
                forceSelection: function() {
                    var e = M.not(h.filtered).filter("." + h.selected).eq(0),
                        t = M.not(h.filtered).filter("." + h.active).eq(0),
                        n = 0 < e.length ? e : t,
                        i = 0 < n.length;
                    g.allowAdditions || i && !p.is.multiple() ? (p.debug("Forcing partial selection to selected item", n), p.event.item.click.call(n, {}, !0)) : p.remove.searchTerm()
                },
                change: {
                    values: function(e) {
                        g.allowAdditions || p.clear(), p.debug("Creating dropdown with specified values", e), p.setup.menu({
                            values: e
                        }), _.each(e, function(e, t) {
                            if (1 == t.selected && (p.debug("Setting initial selection to", t[l.value]), p.set.selected(t[l.value]), !p.is.multiple())) return !1
                        }), p.has.selectInput() && (p.disconnect.selectObserver(), E.html(""), E.append("<option disabled selected value></option>"), _.each(e, function(e, t) {
                            var n = g.templates.deQuote(t[l.value]),
                                i = g.templates.escape(t[l.name] || "", g.preserveHTML);
                            E.append('<option value="' + n + '">' + i + "</option>")
                        }), p.observe.select())
                    }
                },
                event: {
                    change: function() {
                        L || (p.debug("Input changed, updating selection"), p.set.selected())
                    },
                    focus: function() {
                        g.showOnFocus && !j && p.is.hidden() && !t && p.show()
                    },
                    blur: function(e) {
                        t = te.activeElement === this, j || t || (p.remove.activeLabel(), p.hide())
                    },
                    mousedown: function() {
                        p.is.searchSelection() ? i = !0 : j = !0
                    },
                    mouseup: function() {
                        p.is.searchSelection() ? i = !1 : j = !1
                    },
                    click: function(e) {
                        _(e.target).is(k) && (p.is.focusedOnSearch() ? p.show() : p.focusSearch())
                    },
                    search: {
                        focus: function(e) {
                            j = !0, p.is.multiple() && p.remove.activeLabel(), (g.showOnFocus || "focus" !== e.type && "focusin" !== e.type) && p.search()
                        },
                        blur: function(e) {
                            t = te.activeElement === this, p.is.searchSelection() && !i && (q || t || (g.forceSelection ? p.forceSelection() : g.allowAdditions || p.remove.searchTerm(), p.hide())), i = !1
                        }
                    },
                    clearIcon: {
                        click: function(e) {
                            p.clear(), p.is.searchSelection() && p.remove.searchTerm(), p.hide(), e.stopPropagation()
                        }
                    },
                    icon: {
                        click: function(e) {
                            V = !0, p.has.search() ? p.is.active() ? p.blurSearch() : g.showOnFocus ? p.focusSearch() : p.toggle() : p.toggle()
                        }
                    },
                    text: {
                        focus: function(e) {
                            j = !0, p.focusSearch()
                        }
                    },
                    input: function(e) {
                        (p.is.multiple() || p.is.searchSelection()) && p.set.filtered(), clearTimeout(p.timer), p.timer = setTimeout(p.search, g.delay.search)
                    },
                    label: {
                        click: function(e) {
                            var t = _(this),
                                n = k.find(y.label),
                                i = n.filter("." + h.active),
                                o = t.nextAll("." + h.active),
                                a = t.prevAll("." + h.active),
                                r = 0 < o.length ? t.nextUntil(o).add(i).add(t) : t.prevUntil(a).add(i).add(t);
                            e.shiftKey ? (i.removeClass(h.active), r.addClass(h.active)) : e.ctrlKey ? t.toggleClass(h.active) : (i.removeClass(h.active), t.addClass(h.active)), g.onLabelSelect.apply(this, n.filter("." + h.active))
                        }
                    },
                    remove: {
                        click: function() {
                            var e = _(this).parent();
                            e.hasClass(h.active) ? p.remove.activeLabels() : p.remove.activeLabels(e)
                        }
                    },
                    test: {
                        toggle: function(e) {
                            var t = p.is.multiple() ? p.show : p.toggle;
                            p.is.bubbledLabelClick(e) || p.is.bubbledIconClick(e) || p.determine.eventOnElement(e, t) && e.preventDefault()
                        },
                        touch: function(e) {
                            p.determine.eventOnElement(e, function() {
                                "touchstart" == e.type ? p.timer = setTimeout(function() {
                                    p.hide()
                                }, g.delay.touch) : "touchmove" == e.type && clearTimeout(p.timer)
                            }), e.stopPropagation()
                        },
                        hide: function(e) {
                            p.determine.eventInModule(e, p.hide) && z.id && _(e.target).attr("for") === z.id && e.preventDefault()
                        }
                    },
                    select: {
                        mutation: function(e) {
                            p.debug("<select> modified, recreating menu"), p.is.selectMutation(e) && (p.disconnect.selectObserver(), p.refresh(), p.setup.select(), p.set.selected(), p.observe.select())
                        }
                    },
                    menu: {
                        mutation: function(e) {
                            var t = e[0],
                                n = t.addedNodes ? _(t.addedNodes[0]) : _(!1),
                                i = t.removedNodes ? _(t.removedNodes[0]) : _(!1),
                                o = n.add(i),
                                a = o.is(y.addition) || 0 < o.closest(y.addition).length,
                                r = o.is(y.message) || 0 < o.closest(y.message).length;
                            a || r ? (p.debug("Updating item selector cache"), p.refreshItems()) : (p.debug("Menu modified, updating selector cache"), p.refresh())
                        },
                        mousedown: function() {
                            q = !0
                        },
                        mouseup: function() {
                            q = !1
                        }
                    },
                    item: {
                        mouseenter: function(e) {
                            var t = _(e.target),
                                n = _(this),
                                i = n.children(y.menu),
                                o = n.siblings(y.item).children(y.menu),
                                a = 0 < i.length;
                            0 < i.find(t).length || !a || (clearTimeout(p.itemTimer), p.itemTimer = setTimeout(function() {
                                p.verbose("Showing sub-menu", i), _.each(o, function() {
                                    p.animate.hide(!1, _(this))
                                }), p.animate.show(!1, i)
                            }, g.delay.show), e.preventDefault())
                        },
                        mouseleave: function(e) {
                            var t = _(this).children(y.menu);
                            0 < t.length && (clearTimeout(p.itemTimer), p.itemTimer = setTimeout(function() {
                                p.verbose("Hiding sub-menu", t), p.animate.hide(!1, t)
                            }, g.delay.hide))
                        },
                        click: function(e, t) {
                            var n = _(this),
                                i = _(e ? e.target : ""),
                                o = n.find(y.menu),
                                a = p.get.choiceText(n),
                                r = p.get.choiceValue(n, a),
                                s = 0 < o.length,
                                l = 0 < o.find(i).length;
                            "input" !== te.activeElement.tagName.toLowerCase() && _(te.activeElement).blur(), l || s && !g.allowCategorySelection || (p.is.searchSelection() && (g.allowAdditions && p.remove.userAddition(), p.remove.searchTerm(), p.is.focusedOnSearch() || 1 == t || p.focusSearch(!0)), g.useLabels || (p.remove.filteredItem(), p.set.scrollPosition(n)), p.determine.selectAction.call(this, a, r))
                        }
                    },
                    document: {
                        keydown: function(e) {
                            var t = e.which;
                            if (p.is.inObject(t, v)) {
                                var n = k.find(y.label),
                                    i = n.filter("." + h.active),
                                    o = (i.data(b.value), n.index(i)),
                                    a = n.length,
                                    r = 0 < i.length,
                                    s = 1 < i.length,
                                    l = 0 === o,
                                    c = o + 1 == a,
                                    u = p.is.searchSelection(),
                                    d = p.is.focusedOnSearch(),
                                    f = p.is.focused(),
                                    m = d && 0 === p.get.caretPosition(!1),
                                    g = m && 0 !== p.get.caretPosition(!0);
                                if (u && !r && !d) return;
                                t == v.leftArrow ? !f && !m || r ? r && (e.shiftKey ? p.verbose("Adding previous label to selection") : (p.verbose("Selecting previous label"), n.removeClass(h.active)), l && !s ? i.addClass(h.active) : i.prev(y.siblingLabel).addClass(h.active).end(), e.preventDefault()) : (p.verbose("Selecting previous label"), n.last().addClass(h.active)) : t == v.rightArrow ? (f && !r && n.first().addClass(h.active), r && (e.shiftKey ? p.verbose("Adding next label to selection") : (p.verbose("Selecting next label"), n.removeClass(h.active)), c ? u ? d ? n.removeClass(h.active) : p.focusSearch() : s ? i.next(y.siblingLabel).addClass(h.active) : i.addClass(h.active) : i.next(y.siblingLabel).addClass(h.active), e.preventDefault())) : t == v.deleteKey || t == v.backspace ? r ? (p.verbose("Removing active labels"), c && u && !d && p.focusSearch(), i.last().next(y.siblingLabel).addClass(h.active), p.remove.activeLabels(i), e.preventDefault()) : !m || g || r || t != v.backspace || (p.verbose("Removing last label on input backspace"), i = n.last().addClass(h.active), p.remove.activeLabels(i)) : i.removeClass(h.active)
                            }
                        }
                    },
                    keydown: function(e) {
                        var t = e.which;
                        if (p.is.inObject(t, v)) {
                            var n, i = M.not(y.unselectable).filter("." + h.selected).eq(0),
                                o = R.children("." + h.active).eq(0),
                                a = 0 < i.length ? i : o,
                                r = 0 < a.length ? a.siblings(":not(." + h.filtered + ")").addBack() : R.children(":not(." + h.filtered + ")"),
                                s = a.children(y.menu),
                                l = a.closest(y.menu),
                                c = l.hasClass(h.visible) || l.hasClass(h.animating) || 0 < l.parent(y.menu).length,
                                u = 0 < s.length,
                                d = 0 < a.length,
                                f = 0 < a.not(y.unselectable).length,
                                m = t == v.delimiter && g.allowAdditions && p.is.multiple();
                            if (g.allowAdditions && g.hideAdditions && (t == v.enter || m) && f && (p.verbose("Selecting item from keyboard shortcut", a), p.event.item.click.call(a, e), p.is.searchSelection() && p.remove.searchTerm(), p.is.multiple() && e.preventDefault()), p.is.visible()) {
                                if (t != v.enter && !m || (t == v.enter && d && u && !g.allowCategorySelection ? (p.verbose("Pressed enter on unselectable category, opening sub menu"), t = v.rightArrow) : f && (p.verbose("Selecting item from keyboard shortcut", a), p.event.item.click.call(a, e), p.is.searchSelection() && (p.remove.searchTerm(), p.is.multiple() && D.focus())), e.preventDefault()), d && (t == v.leftArrow && l[0] !== R[0] && (p.verbose("Left key pressed, closing sub-menu"), p.animate.hide(!1, l), a.removeClass(h.selected), l.closest(y.item).addClass(h.selected), e.preventDefault()), t == v.rightArrow && u && (p.verbose("Right key pressed, opening sub-menu"), p.animate.show(!1, s), a.removeClass(h.selected), s.find(y.item).eq(0).addClass(h.selected), e.preventDefault())), t == v.upArrow) {
                                    if (n = d && c ? a.prevAll(y.item + ":not(" + y.unselectable + ")").eq(0) : M.eq(0), r.index(n) < 0) return p.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                    p.verbose("Up key pressed, changing active item"), a.removeClass(h.selected), n.addClass(h.selected), p.set.scrollPosition(n), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), e.preventDefault()
                                }
                                if (t == v.downArrow) {
                                    if (0 === (n = d && c ? n = a.nextAll(y.item + ":not(" + y.unselectable + ")").eq(0) : M.eq(0)).length) return p.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                    p.verbose("Down key pressed, changing active item"), M.removeClass(h.selected), n.addClass(h.selected), p.set.scrollPosition(n), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), e.preventDefault()
                                }
                                t == v.pageUp && (p.scrollPage("up"), e.preventDefault()), t == v.pageDown && (p.scrollPage("down"), e.preventDefault()), t == v.escape && (p.verbose("Escape key pressed, closing dropdown"), p.hide())
                            } else m && e.preventDefault(), t != v.downArrow || p.is.visible() || (p.verbose("Down key pressed, showing dropdown"), p.show(), e.preventDefault())
                        } else p.has.search() || p.set.selectedLetter(String.fromCharCode(t))
                    }
                },
                trigger: {
                    change: function() {
                        var e = te.createEvent("HTMLEvents"),
                            t = E[0];
                        t && (p.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                    }
                },
                determine: {
                    selectAction: function(e, t) {
                        c = !0, p.verbose("Determining action", g.action), _.isFunction(p.action[g.action]) ? (p.verbose("Triggering preset action", g.action, e, t), p.action[g.action].call(z, e, t, this)) : _.isFunction(g.action) ? (p.verbose("Triggering user action", g.action, e, t), g.action.call(z, e, t, this)) : p.error(m.action, g.action), c = !1
                    },
                    eventInModule: function(e, t) {
                        var n = _(e.target),
                            i = 0 < n.closest(te.documentElement).length,
                            o = 0 < n.closest(k).length;
                        return t = _.isFunction(t) ? t : function() {}, i && !o ? (p.verbose("Triggering event", t), t(), !0) : (p.verbose("Event occurred in dropdown, canceling callback"), !1)
                    },
                    eventOnElement: function(e, t) {
                        var n = _(e.target),
                            i = n.closest(y.siblingLabel),
                            o = te.body.contains(e.target),
                            a = 0 === k.find(i).length || !(p.is.multiple() && g.useLabels),
                            r = 0 === n.closest(R).length;
                        return t = _.isFunction(t) ? t : function() {}, o && a && r ? (p.verbose("Triggering event", t), t(), !0) : (p.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                    }
                },
                action: {
                    nothing: function() {},
                    activate: function(e, t, n) {
                        t = t !== ne ? t : e, p.can.activate(_(n)) && (p.set.selected(t, _(n)), p.is.multiple() || p.hideAndClear())
                    },
                    select: function(e, t, n) {
                        t = t !== ne ? t : e, p.can.activate(_(n)) && (p.set.value(t, e, _(n)), p.is.multiple() || p.hideAndClear())
                    },
                    combo: function(e, t, n) {
                        t = t !== ne ? t : e, p.set.selected(t, _(n)), p.hideAndClear()
                    },
                    hide: function(e, t, n) {
                        p.set.value(t, e, _(n)), p.hideAndClear()
                    }
                },
                get: {
                    id: function() {
                        return a
                    },
                    defaultText: function() {
                        return k.data(b.defaultText)
                    },
                    defaultValue: function() {
                        return k.data(b.defaultValue)
                    },
                    placeholderText: function() {
                        return "auto" != g.placeholder && "string" == typeof g.placeholder ? g.placeholder : k.data(b.placeholderText) || ""
                    },
                    text: function() {
                        return S.text()
                    },
                    query: function() {
                        return _.trim(D.val())
                    },
                    searchWidth: function(e) {
                        return e = e !== ne ? e : D.val(), A.text(e), Math.ceil(A.width() + 1)
                    },
                    selectionCount: function() {
                        var e = p.get.values();
                        return p.is.multiple() ? Array.isArray(e) ? e.length : 0 : "" !== p.get.value() ? 1 : 0
                    },
                    transition: function(e) {
                        return "auto" == g.transition ? p.is.upward(e) ? "slide up" : "slide down" : g.transition
                    },
                    userValues: function() {
                        var e = p.get.values();
                        return !!e && (e = Array.isArray(e) ? e : [e], _.grep(e, function(e) {
                            return !1 === p.get.item(e)
                        }))
                    },
                    uniqueArray: function(n) {
                        return _.grep(n, function(e, t) {
                            return _.inArray(e, n) === t
                        })
                    },
                    caretPosition: function(e) {
                        var t, n, i = D.get(0);
                        return e && "selectionEnd" in i ? i.selectionEnd : !e && "selectionStart" in i ? i.selectionStart : te.selection ? (i.focus(), n = (t = te.selection.createRange()).text.length, e ? n : (t.moveStart("character", -i.value.length), t.text.length - n)) : void 0
                    },
                    value: function() {
                        var e = 0 < E.length ? E.val() : k.data(b.value),
                            t = Array.isArray(e) && 1 === e.length && "" === e[0];
                        return e === ne || t ? "" : e
                    },
                    values: function() {
                        var e = p.get.value();
                        return "" === e ? "" : !p.has.selectInput() && p.is.multiple() ? "string" == typeof e ? p.escape.htmlEntities(e).split(g.delimiter) : "" : e
                    },
                    remoteValues: function() {
                        var e = p.get.values(),
                            i = !1;
                        return e && ("string" == typeof e && (e = [e]), _.each(e, function(e, t) {
                            var n = p.read.remoteData(t);
                            p.verbose("Restoring value from session data", n, t), n && ((i = i || {})[t] = n)
                        })), i
                    },
                    choiceText: function(e, t) {
                        if (t = t !== ne ? t : g.preserveHTML, e) return 0 < e.find(y.menu).length && (p.verbose("Retrieving text of element with sub-menu"), (e = e.clone()).find(y.menu).remove(), e.find(y.menuIcon).remove()), e.data(b.text) !== ne ? e.data(b.text) : t ? _.trim(e.html()) : _.trim(e.text())
                    },
                    choiceValue: function(e, t) {
                        return t = t || p.get.choiceText(e), !!e && (e.data(b.value) !== ne ? String(e.data(b.value)) : "string" == typeof t ? _.trim(g.ignoreSearchCase ? t.toLowerCase() : t) : String(t))
                    },
                    inputEvent: function() {
                        var e = D[0];
                        return !!e && (e.oninput !== ne ? "input" : e.onpropertychange !== ne ? "propertychange" : "keyup")
                    },
                    selectValues: function() {
                        var r = {},
                            s = [];
                        return r.values = [], k.find("option").each(function() {
                            var e = _(this),
                                t = e.html(),
                                n = e.attr("disabled"),
                                i = e.attr("value") !== ne ? e.attr("value") : t,
                                o = e.data(b.text) !== ne ? e.data(b.text) : t,
                                a = e.parent("optgroup");
                            "auto" === g.placeholder && "" === i ? r.placeholder = t : (a.length === s.length && a[0] === s[0] || (r.values.push({
                                type: "header",
                                divider: g.headerDivider,
                                name: a.attr("label") || ""
                            }), s = a), r.values.push({
                                name: t,
                                value: i,
                                text: o,
                                disabled: n
                            }))
                        }), g.placeholder && "auto" !== g.placeholder && (p.debug("Setting placeholder value to", g.placeholder), r.placeholder = g.placeholder), g.sortSelect ? (!0 === g.sortSelect ? r.values.sort(function(e, t) {
                            return e.name.localeCompare(t.name)
                        }) : "natural" === g.sortSelect ? r.values.sort(function(e, t) {
                            return e.name.toLowerCase().localeCompare(t.name.toLowerCase())
                        }) : _.isFunction(g.sortSelect) && r.values.sort(g.sortSelect), p.debug("Retrieved and sorted values from select", r)) : p.debug("Retrieved values from select", r), r
                    },
                    activeItem: function() {
                        return M.filter("." + h.active)
                    },
                    selectedItem: function() {
                        var e = M.not(y.unselectable).filter("." + h.selected);
                        return 0 < e.length ? e : M.eq(0)
                    },
                    itemWithAdditions: function(e) {
                        var t = p.get.item(e),
                            n = p.create.userChoice(e);
                        return n && 0 < n.length && (t = 0 < t.length ? t.add(n) : n), t
                    },
                    item: function(i, o) {
                        var e, a, r = !1;
                        return i = i !== ne ? i : p.get.values() !== ne ? p.get.values() : p.get.text(), e = (a = p.is.multiple() && Array.isArray(i)) ? 0 < i.length : i !== ne && null !== i, o = "" === i || !1 === i || !0 === i || (o || !1), e && M.each(function() {
                            var e = _(this),
                                t = p.get.choiceText(e),
                                n = p.get.choiceValue(e, t);
                            if (null !== n && n !== ne)
                                if (a) - 1 !== _.inArray(p.escape.htmlEntities(String(n)), i.map(function(e) {
                                    return String(e)
                                })) && (r = r ? r.add(e) : e);
                                else if (o) {
                                if (p.verbose("Ambiguous dropdown value using strict type check", e, i), n === i) return r = e, !0
                            } else if (g.ignoreCase && (n = n.toLowerCase(), i = i.toLowerCase()), p.escape.htmlEntities(String(n)) === p.escape.htmlEntities(String(i))) return p.verbose("Found select item by value", n, i), r = e, !0
                        }), r
                    }
                },
                check: {
                    maxSelections: function(e) {
                        return !g.maxSelections || ((e = e !== ne ? e : p.get.selectionCount()) >= g.maxSelections ? (p.debug("Maximum selection count reached"), g.useLabels && (M.addClass(h.filtered), p.add.message(u.maxSelections)), !0) : (p.verbose("No longer at maximum selection count"), p.remove.message(), p.remove.filteredItem(), p.is.searchSelection() && p.filterItems(), !1))
                    }
                },
                restore: {
                    defaults: function(e) {
                        p.clear(e), p.restore.defaultText(), p.restore.defaultValue()
                    },
                    defaultText: function() {
                        var e = p.get.defaultText();
                        e === p.get.placeholderText ? (p.debug("Restoring default placeholder text", e), p.set.placeholderText(e)) : (p.debug("Restoring default text", e), p.set.text(e))
                    },
                    placeholderText: function() {
                        p.set.placeholderText()
                    },
                    defaultValue: function() {
                        var e = p.get.defaultValue();
                        e !== ne && (p.debug("Restoring default value", e), "" !== e ? (p.set.value(e), p.set.selected()) : (p.remove.activeItem(), p.remove.selectedItem()))
                    },
                    labels: function() {
                        g.allowAdditions && (g.useLabels || (p.error(m.labels), g.useLabels = !0), p.debug("Restoring selected values"), p.create.userLabels()), p.check.maxSelections()
                    },
                    selected: function() {
                        p.restore.values(), p.is.multiple() ? (p.debug("Restoring previously selected values and labels"), p.restore.labels()) : p.debug("Restoring previously selected values")
                    },
                    values: function() {
                        p.set.initialLoad(), g.apiSettings && g.saveRemoteData && p.get.remoteValues() ? p.restore.remoteValues() : p.set.selected();
                        var e = p.get.value();
                        !e || "" === e || Array.isArray(e) && 0 === e.length ? E.addClass(h.noselection) : E.removeClass(h.noselection), p.remove.initialLoad()
                    },
                    remoteValues: function() {
                        var e = p.get.remoteValues();
                        p.debug("Recreating selected from session data", e), e && (p.is.single() ? _.each(e, function(e, t) {
                            p.set.text(t)
                        }) : _.each(e, function(e, t) {
                            p.add.label(e, t)
                        }))
                    }
                },
                read: {
                    remoteData: function(e) {
                        var t;
                        if (ee.Storage !== ne) return (t = sessionStorage.getItem(e)) !== ne && t;
                        p.error(m.noStorage)
                    }
                },
                save: {
                    defaults: function() {
                        p.save.defaultText(), p.save.placeholderText(), p.save.defaultValue()
                    },
                    defaultValue: function() {
                        var e = p.get.value();
                        p.verbose("Saving default value as", e), k.data(b.defaultValue, e)
                    },
                    defaultText: function() {
                        var e = p.get.text();
                        p.verbose("Saving default text as", e), k.data(b.defaultText, e)
                    },
                    placeholderText: function() {
                        var e;
                        !1 !== g.placeholder && S.hasClass(h.placeholder) && (e = p.get.text(), p.verbose("Saving placeholder text as", e), k.data(b.placeholderText, e))
                    },
                    remoteData: function(e, t) {
                        ee.Storage !== ne ? (p.verbose("Saving remote data to session storage", t, e), sessionStorage.setItem(t, e)) : p.error(m.noStorage)
                    }
                },
                clear: function(e) {
                    p.is.multiple() && g.useLabels ? p.remove.labels() : (p.remove.activeItem(), p.remove.selectedItem(), p.remove.filteredItem()), p.set.placeholderText(), p.clearValue(e)
                },
                clearValue: function(e) {
                    p.set.value("", null, null, e)
                },
                scrollPage: function(e, t) {
                    var n, i, o = t || p.get.selectedItem(),
                        a = o.closest(y.menu),
                        r = a.outerHeight(),
                        s = a.scrollTop(),
                        l = M.eq(0).outerHeight(),
                        c = Math.floor(r / l),
                        u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
                        d = M.not(y.unselectable);
                    i = "up" == e ? d.index(o) - c : d.index(o) + c, 0 < (n = ("up" == e ? 0 <= i : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length && (p.debug("Scrolling page", e, n), o.removeClass(h.selected), n.addClass(h.selected), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), a.scrollTop(u))
                },
                set: {
                    filtered: function() {
                        var e = p.is.multiple(),
                            t = p.is.searchSelection(),
                            n = e && t,
                            i = t ? p.get.query() : "",
                            o = "string" == typeof i && 0 < i.length,
                            a = p.get.searchWidth(),
                            r = "" !== i;
                        e && o && (p.verbose("Adjusting input width", a, g.glyphWidth), D.css("width", a)), o || n && r ? (p.verbose("Hiding placeholder text"), S.addClass(h.filtered)) : e && (!n || r) || (p.verbose("Showing placeholder text"), S.removeClass(h.filtered))
                    },
                    empty: function() {
                        k.addClass(h.empty)
                    },
                    loading: function() {
                        k.addClass(h.loading)
                    },
                    placeholderText: function(e) {
                        e = e || p.get.placeholderText(), p.debug("Setting placeholder text", e), p.set.text(e), S.addClass(h.placeholder)
                    },
                    tabbable: function() {
                        p.is.searchSelection() ? (p.debug("Added tabindex to searchable dropdown"), D.val("").attr("tabindex", 0), R.attr("tabindex", -1)) : (p.debug("Added tabindex to dropdown"), k.attr("tabindex") === ne && (k.attr("tabindex", 0), R.attr("tabindex", -1)))
                    },
                    initialLoad: function() {
                        p.verbose("Setting initial load"), e = !0
                    },
                    activeItem: function(e) {
                        g.allowAdditions && 0 < e.filter(y.addition).length ? e.addClass(h.filtered) : e.addClass(h.active)
                    },
                    partialSearch: function(e) {
                        var t = p.get.query().length;
                        D.val(e.substr(0, t))
                    },
                    scrollPosition: function(e, t) {
                        var n, i, o, a, r, s;
                        n = (e = e || p.get.selectedItem()).closest(y.menu), i = e && 0 < e.length, t = t !== ne && t, 0 === p.get.activeItem().length && (t = !1), e && 0 < n.length && i && (e.position().top, n.addClass(h.loading), o = (a = n.scrollTop()) - n.offset().top + e.offset().top, t || (s = a + n.height() < o + 5, r = o - 5 < a), p.debug("Scrolling to active item", o), (t || r || s) && n.scrollTop(o), n.removeClass(h.loading))
                    },
                    text: function(e) {
                        "combo" === g.action ? (p.debug("Changing combo button text", e, O), g.preserveHTML ? O.html(e) : O.text(e)) : "activate" === g.action && (e !== p.get.placeholderText() && S.removeClass(h.placeholder), p.debug("Changing text", e, S), S.removeClass(h.filtered), g.preserveHTML ? S.html(e) : S.text(e))
                    },
                    selectedItem: function(e) {
                        var t = p.get.choiceValue(e),
                            n = p.get.choiceText(e, !1),
                            i = p.get.choiceText(e, !0);
                        p.debug("Setting user selection to item", e), p.remove.activeItem(), p.set.partialSearch(n), p.set.activeItem(e), p.set.selected(t, e), p.set.text(i)
                    },
                    selectedLetter: function(e) {
                        var t, n = M.filter("." + h.selected),
                            i = 0 < n.length && p.has.firstLetter(n, e),
                            o = !1;
                        i && (t = n.nextAll(M).eq(0), p.has.firstLetter(t, e) && (o = t)), o || M.each(function() {
                            if (p.has.firstLetter(_(this), e)) return o = _(this), !1
                        }), o && (p.verbose("Scrolling to next value with letter", e), p.set.scrollPosition(o), n.removeClass(h.selected), o.addClass(h.selected), g.selectOnKeydown && p.is.single() && p.set.selectedItem(o))
                    },
                    direction: function(e) {
                        "auto" == g.direction ? (e ? p.is.upward(e) && p.remove.upward(e) : p.remove.upward(), p.can.openDownward(e) ? p.remove.upward(e) : p.set.upward(e), p.is.leftward(e) || p.can.openRightward(e) || p.set.leftward(e)) : "upward" == g.direction && p.set.upward(e)
                    },
                    upward: function(e) {
                        (e || k).addClass(h.upward)
                    },
                    leftward: function(e) {
                        (e || R).addClass(h.leftward)
                    },
                    value: function(e, t, n, i) {
                        e === ne || "" === e || Array.isArray(e) && 0 === e.length ? E.addClass(h.noselection) : E.removeClass(h.noselection);
                        var o = p.escape.value(e),
                            a = 0 < E.length,
                            r = p.get.values(),
                            s = e !== ne ? String(e) : e;
                        if (a) {
                            if (!g.allowReselection && s == r && (p.verbose("Skipping value update already same value", e, r), !p.is.initialLoad())) return;
                            p.is.single() && p.has.selectInput() && p.can.extendSelect() && (p.debug("Adding user option", e), p.add.optionValue(e)), p.debug("Updating input value", o, r), L = !0, E.val(o), !1 === g.fireOnInit && p.is.initialLoad() ? p.debug("Input native change event ignored on initial load") : !0 !== i && p.trigger.change(), L = !1
                        } else p.verbose("Storing value in metadata", o, E), o !== r && k.data(b.value, s);
                        !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("No callback on initial load", g.onChange) : !0 !== i && g.onChange.call(z, e, t, n)
                    },
                    active: function() {
                        k.addClass(h.active)
                    },
                    multiple: function() {
                        k.addClass(h.multiple)
                    },
                    visible: function() {
                        k.addClass(h.visible)
                    },
                    exactly: function(e, t) {
                        p.debug("Setting selected to exact values"), p.clear(), p.set.selected(e, t)
                    },
                    selected: function(e, s) {
                        var l = p.is.multiple();
                        (s = g.allowAdditions ? s || p.get.itemWithAdditions(e) : s || p.get.item(e)) && (p.debug("Setting selected menu item to", s), p.is.multiple() && p.remove.searchWidth(), p.is.single() ? (p.remove.activeItem(), p.remove.selectedItem()) : g.useLabels && p.remove.selectedItem(), s.each(function() {
                            var e = _(this),
                                t = p.get.choiceText(e),
                                n = p.get.choiceValue(e, t),
                                i = e.hasClass(h.filtered),
                                o = e.hasClass(h.active),
                                a = e.hasClass(h.addition),
                                r = l && 1 == s.length;
                            l ? !o || a ? (g.apiSettings && g.saveRemoteData && p.save.remoteData(t, n), g.useLabels ? (p.add.label(n, t, r), p.add.value(n, t, e), p.set.activeItem(e), p.filterActive(), p.select.nextAvailable(s)) : (p.add.value(n, t, e), p.set.text(p.add.variables(u.count)), p.set.activeItem(e))) : i || !g.useLabels && !c || (p.debug("Selected active value, removing label"), p.remove.selected(n)) : (g.apiSettings && g.saveRemoteData && p.save.remoteData(t, n), p.set.text(t), p.set.value(n, t, e), e.addClass(h.active).addClass(h.selected))
                        }), p.remove.searchTerm())
                    }
                },
                add: {
                    label: function(e, t, n) {
                        var i, o = p.is.searchSelection() ? D : S,
                            a = p.escape.value(e);
                        g.ignoreCase && (a = a.toLowerCase()), i = _("<a />").addClass(h.label).attr("data-" + b.value, a).html(x.label(a, t, g.preserveHTML, g.className)), i = g.onLabelCreate.call(i, a, t), p.has.label(e) ? p.debug("User selection already exists, skipping", a) : (g.label.variation && i.addClass(g.label.variation), !0 === n ? (p.debug("Animating in label", i), i.addClass(h.hidden).insertBefore(o).transition({
                            animation: g.label.transition,
                            debug: g.debug,
                            verbose: g.verbose,
                            duration: g.label.duration
                        })) : (p.debug("Adding selection label", i), i.insertBefore(o)))
                    },
                    message: function(e) {
                        var t = R.children(y.message),
                            n = g.templates.message(p.add.variables(e));
                        0 < t.length ? t.html(n) : t = _("<div/>").html(n).addClass(h.message).appendTo(R)
                    },
                    optionValue: function(e) {
                        var t = p.escape.value(e);
                        0 < E.find('option[value="' + p.escape.string(t) + '"]').length || (p.disconnect.selectObserver(), p.is.single() && (p.verbose("Removing previous user addition"), E.find("option." + h.addition).remove()), _("<option/>").prop("value", t).addClass(h.addition).html(e).appendTo(E), p.verbose("Adding user addition as an <option>", e), p.observe.select())
                    },
                    userSuggestion: function(e) {
                        var t, n = R.children(y.addition),
                            i = p.get.item(e),
                            o = i && i.not(y.addition).length,
                            a = 0 < n.length;
                        g.useLabels && p.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(b.value, e).data(b.text, e).attr("data-" + b.value, e).attr("data-" + b.text, e).removeClass(h.filtered), g.hideAdditions || (t = g.templates.addition(p.add.variables(u.addResult, e)), n.html(t)), p.verbose("Replacing user suggestion with new value", n)) : ((n = p.create.userChoice(e)).prependTo(R), p.verbose("Adding item choice to menu corresponding with user choice addition", n)), g.hideAdditions && !p.is.allFiltered() || n.addClass(h.selected).siblings().removeClass(h.selected), p.refreshItems()))
                    },
                    variables: function(e, t) {
                        var n, i, o = -1 !== e.search("{count}"),
                            a = -1 !== e.search("{maxCount}"),
                            r = -1 !== e.search("{term}");
                        return p.verbose("Adding templated variables to message", e), o && (n = p.get.selectionCount(), e = e.replace("{count}", n)), a && (n = p.get.selectionCount(), e = e.replace("{maxCount}", g.maxSelections)), r && (i = t || p.get.query(), e = e.replace("{term}", i)), e
                    },
                    value: function(e, t, n) {
                        var i, o = p.get.values();
                        p.has.value(e) ? p.debug("Value already selected") : "" !== e ? (i = Array.isArray(o) ? (i = o.concat([e]), p.get.uniqueArray(i)) : [e], p.has.selectInput() ? p.can.extendSelect() && (p.debug("Adding value to select", e, i, E), p.add.optionValue(e)) : (i = i.join(g.delimiter), p.debug("Setting hidden input to delimited value", i, E)), !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("Skipping onadd callback on initial load", g.onAdd) : g.onAdd.call(z, e, t, n), p.set.value(i, t, n), p.check.maxSelections()) : p.debug("Cannot select blank values from multiselect")
                    }
                },
                remove: {
                    active: function() {
                        k.removeClass(h.active)
                    },
                    activeLabel: function() {
                        k.find(y.label).removeClass(h.active)
                    },
                    empty: function() {
                        k.removeClass(h.empty)
                    },
                    loading: function() {
                        k.removeClass(h.loading)
                    },
                    initialLoad: function() {
                        e = !1
                    },
                    upward: function(e) {
                        (e || k).removeClass(h.upward)
                    },
                    leftward: function(e) {
                        (e || R).removeClass(h.leftward)
                    },
                    visible: function() {
                        k.removeClass(h.visible)
                    },
                    activeItem: function() {
                        M.removeClass(h.active)
                    },
                    filteredItem: function() {
                        g.useLabels && p.has.maxSelections() || (g.useLabels && p.is.multiple() ? M.not("." + h.active).removeClass(h.filtered) : M.removeClass(h.filtered), g.hideDividers && I.removeClass(h.hidden), p.remove.empty())
                    },
                    optionValue: function(e) {
                        var t = p.escape.value(e),
                            n = E.find('option[value="' + p.escape.string(t) + '"]');
                        0 < n.length && n.hasClass(h.addition) && (r && (r.disconnect(), p.verbose("Temporarily disconnecting mutation observer")), n.remove(), p.verbose("Removing user addition as an <option>", t), r && r.observe(E[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    },
                    message: function() {
                        R.children(y.message).remove()
                    },
                    searchWidth: function() {
                        D.css("width", "")
                    },
                    searchTerm: function() {
                        p.verbose("Cleared search term"), D.val(""), p.set.filtered()
                    },
                    userAddition: function() {
                        M.filter(y.addition).remove()
                    },
                    selected: function(e, t) {
                        if (!(t = g.allowAdditions ? t || p.get.itemWithAdditions(e) : t || p.get.item(e))) return !1;
                        t.each(function() {
                            var e = _(this),
                                t = p.get.choiceText(e),
                                n = p.get.choiceValue(e, t);
                            p.is.multiple() ? g.useLabels ? (p.remove.value(n, t, e), p.remove.label(n)) : (p.remove.value(n, t, e), 0 === p.get.selectionCount() ? p.set.placeholderText() : p.set.text(p.add.variables(u.count))) : p.remove.value(n, t, e), e.removeClass(h.filtered).removeClass(h.active), g.useLabels && e.removeClass(h.selected)
                        })
                    },
                    selectedItem: function() {
                        M.removeClass(h.selected)
                    },
                    value: function(e, t, n) {
                        var i, o = p.get.values();
                        e = p.escape.htmlEntities(e), p.has.selectInput() ? (p.verbose("Input is <select> removing selected option", e), i = p.remove.arrayValue(e, o), p.remove.optionValue(e)) : (p.verbose("Removing from delimited values", e), i = (i = p.remove.arrayValue(e, o)).join(g.delimiter)), !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("No callback on initial load", g.onRemove) : g.onRemove.call(z, e, t, n), p.set.value(i, t, n), p.check.maxSelections()
                    },
                    arrayValue: function(t, e) {
                        return Array.isArray(e) || (e = [e]), e = _.grep(e, function(e) {
                            return t != e
                        }), p.verbose("Removed value from delimited string", t, e), e
                    },
                    label: function(e, t) {
                        var n = k.find(y.label).filter("[data-" + b.value + '="' + p.escape.string(g.ignoreCase ? e.toLowerCase() : e) + '"]');
                        p.verbose("Removing label", n), n.remove()
                    },
                    activeLabels: function(e) {
                        e = e || k.find(y.label).filter("." + h.active), p.verbose("Removing active label selections", e), p.remove.labels(e)
                    },
                    labels: function(e) {
                        e = e || k.find(y.label), p.verbose("Removing labels", e), e.each(function() {
                            var e = _(this),
                                t = e.data(b.value),
                                n = t !== ne ? String(t) : t,
                                i = p.is.userValue(n);
                            !1 !== g.onLabelRemove.call(e, t) ? (p.remove.message(), i ? (p.remove.value(n), p.remove.label(n)) : p.remove.selected(n)) : p.debug("Label remove callback cancelled removal")
                        })
                    },
                    tabbable: function() {
                        p.is.searchSelection() ? (p.debug("Searchable dropdown initialized"), D.removeAttr("tabindex")) : (p.debug("Simple selection dropdown initialized"), k.removeAttr("tabindex")), R.removeAttr("tabindex")
                    },
                    diacritics: function(e) {
                        return g.ignoreDiacritics ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e
                    }
                },
                has: {
                    menuSearch: function() {
                        return p.has.search() && 0 < D.closest(R).length
                    },
                    clearItem: function() {
                        return 0 < P.length
                    },
                    search: function() {
                        return 0 < D.length
                    },
                    sizer: function() {
                        return 0 < A.length
                    },
                    selectInput: function() {
                        return E.is("select")
                    },
                    minCharacters: function(e) {
                        return g.minCharacters && !V ? (e = e !== ne ? String(e) : String(p.get.query())).length >= g.minCharacters : !(V = !1)
                    },
                    firstLetter: function(e, t) {
                        var n;
                        return !(!e || 0 === e.length || "string" != typeof t) && (n = p.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase())
                    },
                    input: function() {
                        return 0 < E.length
                    },
                    items: function() {
                        return 0 < M.length
                    },
                    menu: function() {
                        return 0 < R.length
                    },
                    message: function() {
                        return 0 !== R.children(y.message).length
                    },
                    label: function(e) {
                        var t = p.escape.value(e),
                            n = k.find(y.label);
                        return g.ignoreCase && (t = t.toLowerCase()), 0 < n.filter("[data-" + b.value + '="' + p.escape.string(t) + '"]').length
                    },
                    maxSelections: function() {
                        return g.maxSelections && p.get.selectionCount() >= g.maxSelections
                    },
                    allResultsFiltered: function() {
                        var e = M.not(y.addition);
                        return e.filter(y.unselectable).length === e.length
                    },
                    userSuggestion: function() {
                        return 0 < R.children(y.addition).length
                    },
                    query: function() {
                        return "" !== p.get.query()
                    },
                    value: function(e) {
                        return g.ignoreCase ? p.has.valueIgnoringCase(e) : p.has.valueMatchingCase(e)
                    },
                    valueMatchingCase: function(e) {
                        var t = p.get.values();
                        return !!(Array.isArray(t) ? t && -1 !== _.inArray(e, t) : t == e)
                    },
                    valueIgnoringCase: function(n) {
                        var e = p.get.values(),
                            i = !1;
                        return Array.isArray(e) || (e = [e]), _.each(e, function(e, t) {
                            if (String(n).toLowerCase() == String(t).toLowerCase()) return !(i = !0)
                        }), i
                    }
                },
                is: {
                    active: function() {
                        return k.hasClass(h.active)
                    },
                    animatingInward: function() {
                        return R.transition("is inward")
                    },
                    animatingOutward: function() {
                        return R.transition("is outward")
                    },
                    bubbledLabelClick: function(e) {
                        return _(e.target).is("select, input") && 0 < k.closest("label").length
                    },
                    bubbledIconClick: function(e) {
                        return 0 < _(e.target).closest(F).length
                    },
                    alreadySetup: function() {
                        return k.is("select") && k.parent(y.dropdown).data(w) !== ne && 0 === k.prev().length
                    },
                    animating: function(e) {
                        return e ? e.transition && e.transition("is animating") : R.transition && R.transition("is animating")
                    },
                    leftward: function(e) {
                        return (e || R).hasClass(h.leftward)
                    },
                    clearable: function() {
                        return k.hasClass(h.clearable) || g.clearable
                    },
                    disabled: function() {
                        return k.hasClass(h.disabled)
                    },
                    focused: function() {
                        return te.activeElement === k[0]
                    },
                    focusedOnSearch: function() {
                        return te.activeElement === D[0]
                    },
                    allFiltered: function() {
                        return (p.is.multiple() || p.has.search()) && !(0 == g.hideAdditions && p.has.userSuggestion()) && !p.has.message() && p.has.allResultsFiltered()
                    },
                    hidden: function(e) {
                        return !p.is.visible(e)
                    },
                    initialLoad: function() {
                        return e
                    },
                    inObject: function(n, e) {
                        var i = !1;
                        return _.each(e, function(e, t) {
                            if (t == n) return i = !0
                        }), i
                    },
                    multiple: function() {
                        return k.hasClass(h.multiple)
                    },
                    remote: function() {
                        return g.apiSettings && p.can.useAPI()
                    },
                    single: function() {
                        return !p.is.multiple()
                    },
                    selectMutation: function(e) {
                        var n = !1;
                        return _.each(e, function(e, t) {
                            if (_(t.target).is("select") || _(t.addedNodes).is("select")) return !(n = !0)
                        }), n
                    },
                    search: function() {
                        return k.hasClass(h.search)
                    },
                    searchSelection: function() {
                        return p.has.search() && 1 === D.parent(y.dropdown).length
                    },
                    selection: function() {
                        return k.hasClass(h.selection)
                    },
                    userValue: function(e) {
                        return -1 !== _.inArray(e, p.get.userValues())
                    },
                    upward: function(e) {
                        return (e || k).hasClass(h.upward)
                    },
                    visible: function(e) {
                        return e ? e.hasClass(h.visible) : R.hasClass(h.visible)
                    },
                    verticallyScrollableContext: function() {
                        var e = T.get(0) !== ee && T.css("overflow-y");
                        return "auto" == e || "scroll" == e
                    },
                    horizontallyScrollableContext: function() {
                        var e = T.get(0) !== ee && T.css("overflow-X");
                        return "auto" == e || "scroll" == e
                    }
                },
                can: {
                    activate: function(e) {
                        return !!g.useLabels || (!p.has.maxSelections() || !(!p.has.maxSelections() || !e.hasClass(h.active)))
                    },
                    openDownward: function(e) {
                        var t, n, i = e || R,
                            o = !0;
                        return i.addClass(h.loading), n = {
                            context: {
                                offset: T.get(0) === ee ? {
                                    top: 0,
                                    left: 0
                                } : T.offset(),
                                scrollTop: T.scrollTop(),
                                height: T.outerHeight()
                            },
                            menu: {
                                offset: i.offset(),
                                height: i.outerHeight()
                            }
                        }, p.is.verticallyScrollableContext() && (n.menu.offset.top += n.context.scrollTop), o = (t = {
                            above: n.context.scrollTop <= n.menu.offset.top - n.context.offset.top - n.menu.height,
                            below: n.context.scrollTop + n.context.height >= n.menu.offset.top - n.context.offset.top + n.menu.height
                        }).below ? (p.verbose("Dropdown can fit in context downward", t), !0) : t.below || t.above ? (p.verbose("Dropdown cannot fit below, opening upward", t), !1) : (p.verbose("Dropdown cannot fit in either direction, favoring downward", t), !0), i.removeClass(h.loading), o
                    },
                    openRightward: function(e) {
                        var t, n, i = e || R,
                            o = !0;
                        return i.addClass(h.loading), n = {
                            context: {
                                offset: T.get(0) === ee ? {
                                    top: 0,
                                    left: 0
                                } : T.offset(),
                                scrollLeft: T.scrollLeft(),
                                width: T.outerWidth()
                            },
                            menu: {
                                offset: i.offset(),
                                width: i.outerWidth()
                            }
                        }, p.is.horizontallyScrollableContext() && (n.menu.offset.left += n.context.scrollLeft), (t = n.menu.offset.left - n.context.offset.left + n.menu.width >= n.context.scrollLeft + n.context.width) && (p.verbose("Dropdown cannot fit in context rightward", t), o = !1), i.removeClass(h.loading), o
                    },
                    click: function() {
                        return Q || "click" == g.on
                    },
                    extendSelect: function() {
                        return g.allowAdditions || g.apiSettings
                    },
                    show: function() {
                        return !p.is.disabled() && (p.has.items() || p.has.message())
                    },
                    useAPI: function() {
                        return _.fn.api !== ne
                    }
                },
                animate: {
                    show: function(e, t) {
                        var n, i = t || R,
                            o = t ? function() {} : function() {
                                p.hideSubMenus(), p.hideOthers(), p.set.active()
                            };
                        e = _.isFunction(e) ? e : function() {}, p.verbose("Doing menu show animation", i), p.set.direction(t), n = p.get.transition(t), p.is.selection() && p.set.scrollPosition(p.get.selectedItem(), !0), (p.is.hidden(i) || p.is.animating(i)) && ("none" == n ? (o(), i.transition("show"), e.call(z)) : _.fn.transition !== ne && k.transition("is supported") ? i.transition({
                            animation: n + " in",
                            debug: g.debug,
                            verbose: g.verbose,
                            duration: g.duration,
                            queue: !0,
                            onStart: o,
                            onComplete: function() {
                                e.call(z)
                            }
                        }) : p.error(m.noTransition, n))
                    },
                    hide: function(e, t) {
                        var n = t || R,
                            i = t ? function() {} : function() {
                                p.can.click() && p.unbind.intent(), p.remove.active()
                            },
                            o = p.get.transition(t);
                        e = _.isFunction(e) ? e : function() {}, (p.is.visible(n) || p.is.animating(n)) && (p.verbose("Doing menu hide animation", n), "none" == o ? (i(), n.transition("hide"), e.call(z)) : _.fn.transition !== ne && k.transition("is supported") ? n.transition({
                            animation: o + " out",
                            duration: g.duration,
                            debug: g.debug,
                            verbose: g.verbose,
                            queue: !1,
                            onStart: i,
                            onComplete: function() {
                                e.call(z)
                            }
                        }) : p.error(m.transition))
                    }
                },
                hideAndClear: function() {
                    p.remove.searchTerm(), p.has.maxSelections() || (p.has.search() ? p.hide(function() {
                        p.remove.filteredItem()
                    }) : p.hide())
                },
                delay: {
                    show: function() {
                        p.verbose("Delaying show event to ensure user intent"), clearTimeout(p.timer), p.timer = setTimeout(p.show, g.delay.show)
                    },
                    hide: function() {
                        p.verbose("Delaying hide event to ensure user intent"), clearTimeout(p.timer), p.timer = setTimeout(p.hide, g.delay.hide)
                    }
                },
                escape: {
                    value: function(e) {
                        var t = Array.isArray(e),
                            n = "string" == typeof e,
                            i = !n && !t,
                            o = n && -1 !== e.search(f.quote),
                            a = [];
                        return i || !o ? e : (p.debug("Encoding quote values for use in select", e), t ? (_.each(e, function(e, t) {
                            a.push(t.replace(f.quote, "&quot;"))
                        }), a) : e.replace(f.quote, "&quot;"))
                    },
                    string: function(e) {
                        return (e = String(e)).replace(f.escape, "\\$&")
                    },
                    htmlEntities: function(e) {
                        var t = {
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        };
                        return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                            return t[e]
                        }) : e
                    }
                },
                setting: function(e, t) {
                    if (p.debug("Changing setting", e, t), _.isPlainObject(e)) _.extend(!0, g, e);
                    else {
                        if (t === ne) return g[e];
                        _.isPlainObject(g[e]) ? _.extend(!0, g[e], t) : g[e] = t
                    }
                },
                internal: function(e, t) {
                    if (_.isPlainObject(e)) _.extend(!0, p, e);
                    else {
                        if (t === ne) return p[e];
                        p[e] = t
                    }
                },
                debug: function() {
                    !g.silent && g.debug && (g.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), p.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !g.silent && g.verbose && g.debug && (g.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), p.verbose.apply(console, arguments)))
                },
                error: function() {
                    g.silent || (p.error = Function.prototype.bind.call(console.error, console, g.name + ":"), p.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        g.performance && (n = (t = (new Date).getTime()) - ($ || t), $ = t, G.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: z,
                            "Execution Time": n
                        })), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500)
                    },
                    display: function() {
                        var e = g.name + ":",
                            n = 0;
                        $ = !1, clearTimeout(p.performance.timer), _.each(G, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", Y && (e += " '" + Y + "'"), (console.group !== ne || console.table !== ne) && 0 < G.length && (console.groupCollapsed(e), console.table ? console.table(G) : _.each(G, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), G = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = N;
                    return e = e || Z, t = z || t, "string" == typeof i && r !== ne && (i = i.split(/[\. ]/), o = i.length - 1, _.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (_.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== ne) return a = r[n], !1;
                            if (!_.isPlainObject(r[t]) || e == o) return r[t] !== ne ? a = r[t] : p.error(m.method, i), !1;
                            r = r[t]
                        }
                    })), _.isFunction(a) ? n = a.apply(t, e) : a !== ne && (n = a), Array.isArray(U) ? U.push(n) : U !== ne ? U = [U, n] : n !== ne && (U = n), a
                }
            }, J ? (N === ne && p.initialize(), p.invoke(K)) : (N !== ne && N.invoke("destroy"), p.initialize())
        }), U !== ne ? U : B
    }, _.fn.dropdown.settings = {
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        action: "activate",
        values: !1,
        clearable: !1,
        apiSettings: !1,
        selectOnKeydown: !0,
        minCharacters: 0,
        filterRemoteData: !1,
        saveRemoteData: !0,
        throttle: 200,
        context: ee,
        direction: "auto",
        keepOnScreen: !0,
        match: "both",
        fullTextSearch: !1,
        ignoreDiacritics: !1,
        hideDividers: !1,
        placeholder: "auto",
        preserveHTML: !0,
        sortSelect: !1,
        forceSelection: !0,
        allowAdditions: !1,
        ignoreCase: !1,
        ignoreSearchCase: !0,
        hideAdditions: !0,
        maxSelections: !1,
        useLabels: !0,
        delimiter: ",",
        showOnFocus: !0,
        allowReselection: !1,
        allowTab: !0,
        allowCategorySelection: !1,
        fireOnInit: !1,
        transition: "auto",
        duration: 200,
        glyphWidth: 1.037,
        headerDivider: !0,
        label: {
            transition: "scale",
            duration: 200,
            variation: !1
        },
        delay: {
            hide: 300,
            show: 200,
            search: 20,
            touch: 50
        },
        onChange: function(e, t, n) {},
        onAdd: function(e, t, n) {},
        onRemove: function(e, t, n) {},
        onLabelSelect: function(e) {},
        onLabelCreate: function(e, t) {
            return _(this)
        },
        onLabelRemove: function(e) {
            return !0
        },
        onNoResults: function(e) {
            return !0
        },
        onShow: function() {},
        onHide: function() {},
        name: "Dropdown",
        namespace: "dropdown",
        message: {
            addResult: "Add <b>{term}</b>",
            count: "{count} selected",
            maxSelections: "Max {maxCount} selections",
            noResults: "No results found.",
            serverError: "There was an error contacting the server"
        },
        error: {
            action: "You called a dropdown action that was not defined",
            alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
            labels: "Allowing user additions currently requires the use of labels.",
            missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
            method: "The method you called is not defined.",
            noAPI: "The API module is required to load resources remotely",
            noStorage: "Saving remote data requires session storage",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
            noNormalize: '"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'
        },
        regExp: {
            escape: /[-[\]{}()*+?.,\\^$|#\s:=@]/g,
            quote: /"/g
        },
        metadata: {
            defaultText: "defaultText",
            defaultValue: "defaultValue",
            placeholderText: "placeholder",
            text: "text",
            value: "value"
        },
        fields: {
            remoteValues: "results",
            values: "values",
            disabled: "disabled",
            name: "name",
            value: "value",
            text: "text",
            type: "type",
            image: "image",
            imageClass: "imageClass",
            icon: "icon",
            iconClass: "iconClass",
            class: "class",
            divider: "divider"
        },
        keys: {
            backspace: 8,
            delimiter: 188,
            deleteKey: 46,
            enter: 13,
            escape: 27,
            pageUp: 33,
            pageDown: 34,
            leftArrow: 37,
            upArrow: 38,
            rightArrow: 39,
            downArrow: 40
        },
        selector: {
            addition: ".addition",
            divider: ".divider, .header",
            dropdown: ".ui.dropdown",
            hidden: ".hidden",
            icon: "> .dropdown.icon",
            input: '> input[type="hidden"], > select',
            item: ".item",
            label: "> .label",
            remove: "> .label > .delete.icon",
            siblingLabel: ".label",
            menu: ".menu",
            message: ".message",
            menuIcon: ".dropdown.icon",
            search: "input.search, .menu > .search > input, .menu input.search",
            sizer: "> input.sizer",
            text: "> .text:not(.icon)",
            unselectable: ".disabled, .filtered",
            clearIcon: "> .remove.icon"
        },
        className: {
            active: "active",
            addition: "addition",
            animating: "animating",
            disabled: "disabled",
            empty: "empty",
            dropdown: "ui dropdown",
            filtered: "filtered",
            hidden: "hidden transition",
            icon: "icon",
            image: "image",
            item: "item",
            label: "ui label",
            loading: "loading",
            menu: "menu",
            message: "message",
            multiple: "multiple",
            placeholder: "default",
            sizer: "sizer",
            search: "search",
            selected: "selected",
            selection: "selection",
            upward: "upward",
            leftward: "left",
            visible: "visible",
            clearable: "clearable",
            noselection: "noselection",
            delete: "delete",
            header: "header",
            divider: "divider",
            groupIcon: "",
            unfilterable: "unfilterable"
        }
    }, _.fn.dropdown.settings.templates = {
        deQuote: function(e) {
            return String(e).replace(/"/g, "")
        },
        escape: function(e, t) {
            if (t) return e;
            var n = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                return n[e]
            }) : e
        },
        dropdown: function(e, t, n, i) {
            var o = e.placeholder || !1,
                a = "",
                r = _.fn.dropdown.settings.templates.escape;
            return a += '<i class="dropdown icon"></i>', a += o ? '<div class="default text">' + r(o, n) + "</div>" : '<div class="text"></div>', a += '<div class="' + i.menu + '">', a += _.fn.dropdown.settings.templates.menu(e, t, n, i), a += "</div>"
        },
        menu: function(e, s, l, c) {
            var t = e[s.values] || [],
                u = "",
                d = _.fn.dropdown.settings.templates.escape,
                f = _.fn.dropdown.settings.templates.deQuote;
            return _.each(t, function(e, t) {
                var n = t[s.type] ? t[s.type] : "item";
                if ("item" === n) {
                    var i = t[s.text] ? ' data-text="' + f(t[s.text]) + '"' : "",
                        o = t[s.disabled] ? c.disabled + " " : "";
                    u += '<div class="' + o + (t[s.class] ? f(t[s.class]) : c.item) + '" data-value="' + f(t[s.value]) + '"' + i + ">", t[s.image] && (u += '<img class="' + (t[s.imageClass] ? f(t[s.imageClass]) : c.image) + '" src="' + f(t[s.image]) + '">'), t[s.icon] && (u += '<i class="' + f(t[s.icon]) + " " + (t[s.iconClass] ? f(t[s.iconClass]) : c.icon) + '"></i>'), u += d(t[s.name] || "", l), u += "</div>"
                } else if ("header" === n) {
                    var a = d(t[s.name] || "", l),
                        r = t[s.icon] ? f(t[s.icon]) : c.groupIcon;
                    "" === a && "" === r || (u += '<div class="' + (t[s.class] ? f(t[s.class]) : c.header) + '">', "" !== r && (u += '<i class="' + r + " " + (t[s.iconClass] ? f(t[s.iconClass]) : c.icon) + '"></i>'), u += a, u += "</div>"), t[s.divider] && (u += '<div class="' + c.divider + '"></div>')
                }
            }), u
        },
        label: function(e, t, n, i) {
            return (0, _.fn.dropdown.settings.templates.escape)(t, n) + '<i class="' + i.delete + ' icon"></i>'
        },
        message: function(e) {
            return e
        },
        addition: function(e) {
            return e
        }
    }
}(jQuery, window, document),
function(T, e, t, S) {
    "use strict";
    T.isFunction = T.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.embed = function(p) {
        var h, v = T(this),
            b = v.selector || "",
            y = (new Date).getTime(),
            x = [],
            C = p,
            w = "string" == typeof C,
            k = [].slice.call(arguments, 1);
        return v.each(function() {
            var s, i = T.isPlainObject(p) ? T.extend(!0, {}, T.fn.embed.settings, p) : T.extend({}, T.fn.embed.settings),
                e = i.selector,
                t = i.className,
                o = i.sources,
                l = i.error,
                a = i.metadata,
                n = i.namespace,
                r = i.templates,
                c = "." + n,
                u = "module-" + n,
                d = T(this),
                f = (d.find(e.placeholder), d.find(e.icon), d.find(e.embed)),
                m = this,
                g = d.data(u);
            s = {
                initialize: function() {
                    s.debug("Initializing embed"), s.determine.autoplay(), s.create(), s.bind.events(), s.instantiate()
                },
                instantiate: function() {
                    s.verbose("Storing instance of module", s), g = s, d.data(u, s)
                },
                destroy: function() {
                    s.verbose("Destroying previous instance of embed"), s.reset(), d.removeData(u).off(c)
                },
                refresh: function() {
                    s.verbose("Refreshing selector cache"), d.find(e.placeholder), d.find(e.icon), f = d.find(e.embed)
                },
                bind: {
                    events: function() {
                        s.has.placeholder() && (s.debug("Adding placeholder events"), d.on("click" + c, e.placeholder, s.createAndShow).on("click" + c, e.icon, s.createAndShow))
                    }
                },
                create: function() {
                    s.get.placeholder() ? s.createPlaceholder() : s.createAndShow()
                },
                createPlaceholder: function(e) {
                    var t = s.get.icon(),
                        n = s.get.url();
                    s.generate.embed(n);
                    e = e || s.get.placeholder(), d.html(r.placeholder(e, t)), s.debug("Creating placeholder for embed", e, t)
                },
                createEmbed: function(e) {
                    s.refresh(), e = e || s.get.url(), f = T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d), i.onCreate.call(m, e), s.debug("Creating embed object", f)
                },
                changeEmbed: function(e) {
                    f.html(s.generate.embed(e))
                },
                createAndShow: function() {
                    s.createEmbed(), s.show()
                },
                change: function(e, t, n) {
                    s.debug("Changing video to ", e, t, n), d.data(a.source, e).data(a.id, t), n ? d.data(a.url, n) : d.removeData(a.url), s.has.embed() ? s.changeEmbed() : s.create()
                },
                reset: function() {
                    s.debug("Clearing embed and showing placeholder"), s.remove.data(), s.remove.active(), s.remove.embed(), s.showPlaceholder(), i.onReset.call(m)
                },
                show: function() {
                    s.debug("Showing embed"), s.set.active(), i.onDisplay.call(m)
                },
                hide: function() {
                    s.debug("Hiding embed"), s.showPlaceholder()
                },
                showPlaceholder: function() {
                    s.debug("Showing placeholder image"), s.remove.active(), i.onPlaceholderDisplay.call(m)
                },
                get: {
                    id: function() {
                        return i.id || d.data(a.id)
                    },
                    placeholder: function() {
                        return i.placeholder || d.data(a.placeholder)
                    },
                    icon: function() {
                        return i.icon ? i.icon : d.data(a.icon) !== S ? d.data(a.icon) : s.determine.icon()
                    },
                    source: function(e) {
                        return i.source ? i.source : d.data(a.source) !== S ? d.data(a.source) : s.determine.source()
                    },
                    type: function() {
                        var e = s.get.source();
                        return o[e] !== S && o[e].type
                    },
                    url: function() {
                        return i.url ? i.url : d.data(a.url) !== S ? d.data(a.url) : s.determine.url()
                    }
                },
                determine: {
                    autoplay: function() {
                        s.should.autoplay() && (i.autoplay = !0)
                    },
                    source: function(n) {
                        var i = !1;
                        return (n = n || s.get.url()) && T.each(o, function(e, t) {
                            if (-1 !== n.search(t.domain)) return i = e, !1
                        }), i
                    },
                    icon: function() {
                        var e = s.get.source();
                        return o[e] !== S && o[e].icon
                    },
                    url: function() {
                        var e, t = i.id || d.data(a.id),
                            n = i.source || d.data(a.source);
                        return (e = o[n] !== S && o[n].url.replace("{id}", t)) && d.data(a.url, e), e
                    }
                },
                set: {
                    active: function() {
                        d.addClass(t.active)
                    }
                },
                remove: {
                    data: function() {
                        d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)
                    },
                    active: function() {
                        d.removeClass(t.active)
                    },
                    embed: function() {
                        f.empty()
                    }
                },
                encode: {
                    parameters: function(e) {
                        var t, n = [];
                        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                        return n.join("&amp;")
                    }
                },
                generate: {
                    embed: function(e) {
                        s.debug("Generating embed html");
                        var t, n, i = s.get.source();
                        return (e = s.get.url(e)) ? (n = s.generate.parameters(i), t = r.iframe(e, n)) : s.error(l.noURL, d), t
                    },
                    parameters: function(e, t) {
                        var n = o[e] && o[e].parameters !== S ? o[e].parameters(i) : {};
                        return (t = t || i.parameters) && (n = T.extend({}, n, t)), n = i.onEmbed(n), s.encode.parameters(n)
                    }
                },
                has: {
                    embed: function() {
                        return 0 < f.length
                    },
                    placeholder: function() {
                        return i.placeholder || d.data(a.placeholder)
                    }
                },
                should: {
                    autoplay: function() {
                        return "auto" === i.autoplay ? i.placeholder || d.data(a.placeholder) !== S : i.autoplay
                    }
                },
                is: {
                    video: function() {
                        return "video" == s.get.type()
                    }
                },
                setting: function(e, t) {
                    if (s.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, i, e);
                    else {
                        if (t === S) return i[e];
                        T.isPlainObject(i[e]) ? T.extend(!0, i[e], t) : i[e] = t
                    }
                },
                internal: function(e, t) {
                    if (T.isPlainObject(e)) T.extend(!0, s, e);
                    else {
                        if (t === S) return s[e];
                        s[e] = t
                    }
                },
                debug: function() {
                    !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)))
                },
                error: function() {
                    i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        i.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, x.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: m,
                            "Execution Time": n
                        })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                    },
                    display: function() {
                        var e = i.name + ":",
                            n = 0;
                        y = !1, clearTimeout(s.performance.timer), T.each(x, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", b && (e += " '" + b + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== S || console.table !== S) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), x = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = g;
                    return e = e || k, t = m || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (T.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== S) return a = r[n], !1;
                            if (!T.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : s.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), T.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(h) ? h.push(n) : h !== S ? h = [h, n] : n !== S && (h = n), a
                }
            }, w ? (g === S && s.initialize(), s.invoke(C)) : (g !== S && g.invoke("destroy"), s.initialize())
        }), h !== S ? h : this
    }, T.fn.embed.settings = {
        name: "Embed",
        namespace: "embed",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        icon: !1,
        source: !1,
        url: !1,
        id: !1,
        autoplay: "auto",
        color: "#444444",
        hd: !0,
        brandedUI: !1,
        parameters: !1,
        onDisplay: function() {},
        onPlaceholderDisplay: function() {},
        onReset: function() {},
        onCreate: function(e) {},
        onEmbed: function(e) {
            return e
        },
        metadata: {
            id: "id",
            icon: "icon",
            placeholder: "placeholder",
            source: "source",
            url: "url"
        },
        error: {
            noURL: "No URL specified",
            method: "The method you called is not defined"
        },
        className: {
            active: "active",
            embed: "embed"
        },
        selector: {
            embed: ".embed",
            placeholder: ".placeholder",
            icon: ".icon"
        },
        sources: {
            youtube: {
                name: "youtube",
                type: "video",
                icon: "video play",
                domain: "youtube.com",
                url: "//www.youtube.com/embed/{id}",
                parameters: function(e) {
                    return {
                        autohide: !e.brandedUI,
                        autoplay: e.autoplay,
                        color: e.color || S,
                        hq: e.hd,
                        jsapi: e.api,
                        modestbranding: !e.brandedUI
                    }
                }
            },
            vimeo: {
                name: "vimeo",
                type: "video",
                icon: "video play",
                domain: "vimeo.com",
                url: "//player.vimeo.com/video/{id}",
                parameters: function(e) {
                    return {
                        api: e.api,
                        autoplay: e.autoplay,
                        byline: e.brandedUI,
                        color: e.color || S,
                        portrait: e.brandedUI,
                        title: e.brandedUI
                    }
                }
            }
        },
        templates: {
            iframe: function(e, t) {
                var n = e;
                return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            },
            placeholder: function(e, t) {
                var n = "";
                return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
            }
        },
        api: !1,
        onPause: function() {},
        onPlay: function() {},
        onStop: function() {}
    }
}(jQuery, window, document),
function(V, z, N, H) {
    "use strict";
    V.isFunction = V.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, z = void 0 !== z && z.Math == Math ? z : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), V.fn.modal = function(D) {
        var A, e = V(this),
            E = V(z),
            F = V(N),
            P = V("body"),
            O = e.selector || "",
            R = (new Date).getTime(),
            M = [],
            I = D,
            j = "string" == typeof I,
            q = [].slice.call(arguments, 1),
            L = z.requestAnimationFrame || z.mozRequestAnimationFrame || z.webkitRequestAnimationFrame || z.msRequestAnimationFrame || function(e) {
                setTimeout(e, 0)
            };
        return e.each(function() {
            var o, a, e, i, n, r, s, t, l, c, u, d = V.isPlainObject(D) ? V.extend(!0, {}, V.fn.modal.settings, D) : V.extend({}, V.fn.modal.settings),
                f = d.selector,
                m = d.className,
                g = d.namespace,
                p = d.error,
                h = "." + g,
                v = "module-" + g,
                b = V(this),
                y = V(d.context),
                x = b.find(f.close),
                C = this,
                w = b.data(v),
                k = !1,
                T = "",
                S = "";
            u = {
                initialize: function() {
                    u.cache = {}, u.verbose("Initializing dimmer", y), u.create.id(), u.create.dimmer(), d.allowMultiple && u.create.innerDimmer(), d.centered || b.addClass("top aligned"), u.refreshModals(), u.bind.events(), d.observeChanges && u.observeChanges(), u.instantiate()
                },
                instantiate: function() {
                    u.verbose("Storing instance of modal"), w = u, b.data(v, w)
                },
                create: {
                    dimmer: function() {
                        var e = {
                                debug: d.debug,
                                dimmerName: "modals"
                            },
                            t = V.extend(!0, e, d.dimmerSettings);
                        V.fn.dimmer !== H ? (u.debug("Creating dimmer"), i = y.dimmer(t), d.detachable ? (u.verbose("Modal is detachable, moving content into dimmer"), i.dimmer("add content", b)) : u.set.undetached(), n = i.dimmer("get dimmer")) : u.error(p.dimmer)
                    },
                    id: function() {
                        l = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + l, u.verbose("Creating unique id for element", l)
                    },
                    innerDimmer: function() {
                        0 == b.find(f.dimmer).length && b.prepend('<div class="ui inverted dimmer"></div>')
                    }
                },
                destroy: function() {
                    c && c.disconnect(), u.verbose("Destroying previous modal"), b.removeData(v).off(h), E.off(t), n.off(t), x.off(h), y.dimmer("destroy")
                },
                observeChanges: function() {
                    "MutationObserver" in z && ((c = new MutationObserver(function(e) {
                        u.debug("DOM tree modified, refreshing"), u.refresh()
                    })).observe(C, {
                        childList: !0,
                        subtree: !0
                    }), u.debug("Setting up mutation observer", c))
                },
                refresh: function() {
                    u.remove.scrolling(), u.cacheSizes(), u.can.useFlex() || u.set.modalOffset(), u.set.screenHeight(), u.set.type()
                },
                refreshModals: function() {
                    a = b.siblings(f.modal), o = a.add(b)
                },
                attachEvents: function(e, t) {
                    var n = V(e);
                    t = V.isFunction(u[t]) ? u[t] : u.toggle, 0 < n.length ? (u.debug("Attaching modal events to element", e, t), n.off(h).on("click" + h, t)) : u.error(p.notFound, e)
                },
                bind: {
                    events: function() {
                        u.verbose("Attaching events"), b.on("click" + h, f.close, u.event.close).on("click" + h, f.approve, u.event.approve).on("click" + h, f.deny, u.event.deny), E.on("resize" + t, u.event.resize)
                    },
                    scrollLock: function() {
                        i.get(0).addEventListener("touchmove", u.event.preventScroll, {
                            passive: !1
                        })
                    }
                },
                unbind: {
                    scrollLock: function() {
                        i.get(0).removeEventListener("touchmove", u.event.preventScroll, {
                            passive: !1
                        })
                    }
                },
                get: {
                    id: function() {
                        return (Math.random().toString(16) + "000000000").substr(2, 8)
                    }
                },
                event: {
                    approve: function() {
                        k || !1 === d.onApprove.call(C, V(this)) ? u.verbose("Approve callback returned false cancelling hide") : (k = !0, u.hide(function() {
                            k = !1
                        }))
                    },
                    preventScroll: function(e) {
                        -1 !== e.target.className.indexOf("dimmer") && e.preventDefault()
                    },
                    deny: function() {
                        k || !1 === d.onDeny.call(C, V(this)) ? u.verbose("Deny callback returned false cancelling hide") : (k = !0, u.hide(function() {
                            k = !1
                        }))
                    },
                    close: function() {
                        u.hide()
                    },
                    mousedown: function(e) {
                        var t = V(e.target),
                            n = u.is.rtl();
                        (r = 0 < t.closest(f.modal).length) && u.verbose("Mouse down event registered inside the modal"), (s = u.is.scrolling() && (!n && V(z).outerWidth() - d.scrollbarWidth <= e.clientX || n && d.scrollbarWidth >= e.clientX)) && u.verbose("Mouse down event registered inside the scrollbar")
                    },
                    mouseup: function(e) {
                        if (d.closable)
                            if (r) u.debug("Dimmer clicked but mouse down was initially registered inside the modal");
                            else if (s) u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");
                        else {
                            var t = 0 < V(e.target).closest(f.modal).length,
                                n = V.contains(N.documentElement, e.target);
                            if (!t && n && u.is.active() && b.hasClass(m.front)) {
                                if (u.debug("Dimmer clicked, hiding all modals"), d.allowMultiple) {
                                    if (!u.hideAll()) return
                                } else if (!u.hide()) return;
                                u.remove.clickaway()
                            }
                        } else u.verbose("Dimmer clicked but closable setting is disabled")
                    },
                    debounce: function(e, t) {
                        clearTimeout(u.timer), u.timer = setTimeout(e, t)
                    },
                    keyboard: function(e) {
                        27 == e.which && (d.closable ? (u.debug("Escape key pressed hiding modal"), b.hasClass(m.front) && u.hide()) : u.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                    },
                    resize: function() {
                        i.dimmer("is active") && (u.is.animating() || u.is.active()) && L(u.refresh)
                    }
                },
                toggle: function() {
                    u.is.active() || u.is.animating() ? u.hide() : u.show()
                },
                show: function(e) {
                    e = V.isFunction(e) ? e : function() {}, u.refreshModals(), u.set.dimmerSettings(), u.set.dimmerStyles(), u.showModal(e)
                },
                hide: function(e) {
                    return e = V.isFunction(e) ? e : function() {}, u.refreshModals(), u.hideModal(e)
                },
                showModal: function(e) {
                    e = V.isFunction(e) ? e : function() {}, u.is.animating() || !u.is.active() ? (u.showDimmer(), u.cacheSizes(), u.set.bodyMargin(), u.can.useFlex() ? u.remove.legacy() : (u.set.legacy(), u.set.modalOffset(), u.debug("Using non-flex legacy modal positioning.")), u.set.screenHeight(), u.set.type(), u.set.clickaway(), !d.allowMultiple && u.others.active() ? u.hideOthers(u.showModal) : (k = !1, d.allowMultiple && (u.others.active() && a.filter("." + m.active).find(f.dimmer).addClass("active"), d.detachable && b.detach().appendTo(n)), d.onShow.call(C), d.transition && V.fn.transition !== H && b.transition("is supported") ? (u.debug("Showing modal with css animations"), b.transition({
                        debug: d.debug,
                        animation: d.transition + " in",
                        queue: d.queue,
                        duration: d.duration,
                        useFailSafe: !0,
                        onComplete: function() {
                            d.onVisible.apply(C), d.keyboardShortcuts && u.add.keyboardShortcuts(), u.save.focus(), u.set.active(), d.autofocus && u.set.autofocus(), e()
                        }
                    })) : u.error(p.noTransition))) : u.debug("Modal is already visible")
                },
                hideModal: function(e, t, n) {
                    var i = a.filter("." + m.active).last();
                    if (e = V.isFunction(e) ? e : function() {}, u.debug("Hiding modal"), !1 === d.onHide.call(C, V(this))) return u.verbose("Hide callback returned false cancelling hide"), k = !1;
                    (u.is.animating() || u.is.active()) && (d.transition && V.fn.transition !== H && b.transition("is supported") ? (u.remove.active(), b.transition({
                        debug: d.debug,
                        animation: d.transition + " out",
                        queue: d.queue,
                        duration: d.duration,
                        useFailSafe: !0,
                        onStart: function() {
                            u.others.active() || u.others.animating() || t || u.hideDimmer(), d.keyboardShortcuts && !u.others.active() && u.remove.keyboardShortcuts()
                        },
                        onComplete: function() {
                            u.unbind.scrollLock(), d.allowMultiple && (i.addClass(m.front), b.removeClass(m.front), n ? o.find(f.dimmer).removeClass("active") : i.find(f.dimmer).removeClass("active")), d.onHidden.call(C), u.remove.dimmerStyles(), u.restore.focus(), e()
                        }
                    })) : u.error(p.noTransition))
                },
                showDimmer: function() {
                    i.dimmer("is animating") || !i.dimmer("is active") ? (u.save.bodyMargin(), u.debug("Showing dimmer"), i.dimmer("show")) : u.debug("Dimmer already visible")
                },
                hideDimmer: function() {
                    i.dimmer("is animating") || i.dimmer("is active") ? (u.unbind.scrollLock(), i.dimmer("hide", function() {
                        u.restore.bodyMargin(), u.remove.clickaway(), u.remove.screenHeight()
                    })) : u.debug("Dimmer is not visible cannot hide")
                },
                hideAll: function(n) {
                    var e = o.filter("." + m.active + ", ." + m.animating);
                    if (n = V.isFunction(n) ? n : function() {}, 0 < e.length) {
                        u.debug("Hiding all visible modals");
                        var i = !0;
                        return V(e.get().reverse()).each(function(e, t) {
                            i = i && V(t).modal("hide modal", n, !1, !0)
                        }), i && u.hideDimmer(), i
                    }
                },
                hideOthers: function(e) {
                    var t = a.filter("." + m.active + ", ." + m.animating);
                    e = V.isFunction(e) ? e : function() {}, 0 < t.length && (u.debug("Hiding other modals", a), t.modal("hide modal", e, !0))
                },
                others: {
                    active: function() {
                        return 0 < a.filter("." + m.active).length
                    },
                    animating: function() {
                        return 0 < a.filter("." + m.animating).length
                    }
                },
                add: {
                    keyboardShortcuts: function() {
                        u.verbose("Adding keyboard shortcuts"), F.on("keyup" + h, u.event.keyboard)
                    }
                },
                save: {
                    focus: function() {
                        0 < V(N.activeElement).closest(b).length || (e = V(N.activeElement).blur())
                    },
                    bodyMargin: function() {
                        T = P.css("margin-" + (u.can.leftBodyScrollbar() ? "left" : "right"));
                        var e = parseInt(T.replace(/[^\d.]/g, "")),
                            t = z.innerWidth - N.documentElement.clientWidth;
                        S = e + t
                    }
                },
                restore: {
                    focus: function() {
                        e && 0 < e.length && d.restoreFocus && e.focus()
                    },
                    bodyMargin: function() {
                        var e = u.can.leftBodyScrollbar() ? "left" : "right";
                        P.css("margin-" + e, T), P.find(f.bodyFixed.replace("right", e)).css("padding-" + e, T)
                    }
                },
                remove: {
                    active: function() {
                        b.removeClass(m.active)
                    },
                    legacy: function() {
                        b.removeClass(m.legacy)
                    },
                    clickaway: function() {
                        d.detachable || b.off("mousedown" + t), n.off("mousedown" + t), n.off("mouseup" + t)
                    },
                    dimmerStyles: function() {
                        n.removeClass(m.inverted), i.removeClass(m.blurring)
                    },
                    bodyStyle: function() {
                        "" === P.attr("style") && (u.verbose("Removing style attribute"), P.removeAttr("style"))
                    },
                    screenHeight: function() {
                        u.debug("Removing page height"), P.css("height", "")
                    },
                    keyboardShortcuts: function() {
                        u.verbose("Removing keyboard shortcuts"), F.off("keyup" + h)
                    },
                    scrolling: function() {
                        i.removeClass(m.scrolling), b.removeClass(m.scrolling)
                    }
                },
                cacheSizes: function() {
                    b.addClass(m.loading);
                    var e = b.prop("scrollHeight"),
                        t = b.outerWidth(),
                        n = b.outerHeight();
                    u.cache.pageHeight !== H && 0 === n || (V.extend(u.cache, {
                        pageHeight: V(N).outerHeight(),
                        width: t,
                        height: n + d.offset,
                        scrollHeight: e + d.offset,
                        contextHeight: "body" == d.context ? V(z).height() : i.height()
                    }), u.cache.topOffset = -u.cache.height / 2), b.removeClass(m.loading), u.debug("Caching modal and container sizes", u.cache)
                },
                can: {
                    leftBodyScrollbar: function() {
                        return u.cache.leftBodyScrollbar === H && (u.cache.leftBodyScrollbar = u.is.rtl() && (u.is.iframe && !u.is.firefox() || u.is.safari() || u.is.edge() || u.is.ie())), u.cache.leftBodyScrollbar
                    },
                    useFlex: function() {
                        return "auto" === d.useFlex ? d.detachable && !u.is.ie() : (d.useFlex && u.is.ie() ? u.debug("useFlex true is not supported in IE") : d.useFlex && !d.detachable && u.debug("useFlex true in combination with detachable false is not supported"), d.useFlex)
                    },
                    fit: function() {
                        var e = u.cache.contextHeight,
                            t = u.cache.contextHeight / 2,
                            n = u.cache.topOffset,
                            i = u.cache.scrollHeight,
                            o = u.cache.height,
                            a = d.padding;
                        return o < i ? t + n + i + a < e : o + 2 * a < e
                    }
                },
                is: {
                    active: function() {
                        return b.hasClass(m.active)
                    },
                    ie: function() {
                        if (u.cache.isIE === H) {
                            var e = !z.ActiveXObject && "ActiveXObject" in z,
                                t = "ActiveXObject" in z;
                            u.cache.isIE = e || t
                        }
                        return u.cache.isIE
                    },
                    animating: function() {
                        return b.transition("is supported") ? b.transition("is animating") : b.is(":visible")
                    },
                    scrolling: function() {
                        return i.hasClass(m.scrolling)
                    },
                    modernBrowser: function() {
                        return !(z.ActiveXObject || "ActiveXObject" in z)
                    },
                    rtl: function() {
                        return u.cache.isRTL === H && (u.cache.isRTL = "rtl" === P.attr("dir") || "rtl" === P.css("direction")), u.cache.isRTL
                    },
                    safari: function() {
                        return u.cache.isSafari === H && (u.cache.isSafari = /constructor/i.test(z.HTMLElement) || !!z.ApplePaySession), u.cache.isSafari
                    },
                    edge: function() {
                        return u.cache.isEdge === H && (u.cache.isEdge = !!z.setImmediate && !u.is.ie()), u.cache.isEdge
                    },
                    firefox: function() {
                        return u.cache.isFirefox === H && (u.cache.isFirefox = !!z.InstallTrigger), u.cache.isFirefox
                    },
                    iframe: function() {
                        return !(self === top)
                    }
                },
                set: {
                    autofocus: function() {
                        var e = b.find("[tabindex], :input").filter(":visible").filter(function() {
                                return 0 === V(this).closest(".disabled").length
                            }),
                            t = e.filter("[autofocus]"),
                            n = 0 < t.length ? t.first() : e.first();
                        0 < n.length && n.focus()
                    },
                    bodyMargin: function() {
                        var e = u.can.leftBodyScrollbar() ? "left" : "right";
                        (d.detachable || u.can.fit()) && P.css("margin-" + e, S + "px"), P.find(f.bodyFixed.replace("right", e)).css("padding-" + e, S + "px")
                    },
                    clickaway: function() {
                        d.detachable || b.on("mousedown" + t, u.event.mousedown), n.on("mousedown" + t, u.event.mousedown), n.on("mouseup" + t, u.event.mouseup)
                    },
                    dimmerSettings: function() {
                        if (V.fn.dimmer !== H) {
                            var e = {
                                    debug: d.debug,
                                    dimmerName: "modals",
                                    closable: "auto",
                                    useFlex: u.can.useFlex(),
                                    duration: {
                                        show: d.duration,
                                        hide: d.duration
                                    }
                                },
                                t = V.extend(!0, e, d.dimmerSettings);
                            d.inverted && (t.variation = t.variation !== H ? t.variation + " inverted" : "inverted"), y.dimmer("setting", t)
                        } else u.error(p.dimmer)
                    },
                    dimmerStyles: function() {
                        d.inverted ? n.addClass(m.inverted) : n.removeClass(m.inverted), d.blurring ? i.addClass(m.blurring) : i.removeClass(m.blurring)
                    },
                    modalOffset: function() {
                        if (d.detachable) b.css({
                            marginTop: !b.hasClass("aligned") && u.can.fit() ? -u.cache.height / 2 : d.padding / 2,
                            marginLeft: -u.cache.width / 2
                        });
                        else {
                            var e = u.can.fit();
                            b.css({
                                top: !b.hasClass("aligned") && e ? V(N).scrollTop() + (u.cache.contextHeight - u.cache.height) / 2 : !e || b.hasClass("top") ? V(N).scrollTop() + d.padding : V(N).scrollTop() + (u.cache.contextHeight - u.cache.height - d.padding),
                                marginLeft: -u.cache.width / 2
                            })
                        }
                        u.verbose("Setting modal offset for legacy mode")
                    },
                    screenHeight: function() {
                        u.can.fit() ? P.css("height", "") : b.hasClass("bottom") || (u.debug("Modal is taller than page content, resizing page height"), P.css("height", u.cache.height + 2 * d.padding))
                    },
                    active: function() {
                        b.addClass(m.active + " " + m.front), a.filter("." + m.active).removeClass(m.front)
                    },
                    scrolling: function() {
                        i.addClass(m.scrolling), b.addClass(m.scrolling), u.unbind.scrollLock()
                    },
                    legacy: function() {
                        b.addClass(m.legacy)
                    },
                    type: function() {
                        u.can.fit() ? (u.verbose("Modal fits on screen"), u.others.active() || u.others.animating() || (u.remove.scrolling(), u.bind.scrollLock())) : b.hasClass("bottom") ? u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling") : (u.verbose("Modal cannot fit on screen setting to scrolling"), u.set.scrolling())
                    },
                    undetached: function() {
                        i.addClass(m.undetached)
                    }
                },
                setting: function(e, t) {
                    if (u.debug("Changing setting", e, t), V.isPlainObject(e)) V.extend(!0, d, e);
                    else {
                        if (t === H) return d[e];
                        V.isPlainObject(d[e]) ? V.extend(!0, d[e], t) : d[e] = t
                    }
                },
                internal: function(e, t) {
                    if (V.isPlainObject(e)) V.extend(!0, u, e);
                    else {
                        if (t === H) return u[e];
                        u[e] = t
                    }
                },
                debug: function() {
                    !d.silent && d.debug && (d.performance ? u.performance.log(arguments) : (u.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), u.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !d.silent && d.verbose && d.debug && (d.performance ? u.performance.log(arguments) : (u.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), u.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.silent || (u.error = Function.prototype.bind.call(console.error, console, d.name + ":"), u.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        d.performance && (n = (t = (new Date).getTime()) - (R || t), R = t, M.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: C,
                            "Execution Time": n
                        })), clearTimeout(u.performance.timer), u.performance.timer = setTimeout(u.performance.display, 500)
                    },
                    display: function() {
                        var e = d.name + ":",
                            n = 0;
                        R = !1, clearTimeout(u.performance.timer), V.each(M, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", O && (e += " '" + O + "'"), (console.group !== H || console.table !== H) && 0 < M.length && (console.groupCollapsed(e), console.table ? console.table(M) : V.each(M, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), M = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = w;
                    return e = e || q, t = C || t, "string" == typeof i && r !== H && (i = i.split(/[\. ]/), o = i.length - 1, V.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (V.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== H) return a = r[n], !1;
                            if (!V.isPlainObject(r[t]) || e == o) return r[t] !== H && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), V.isFunction(a) ? n = a.apply(t, e) : a !== H && (n = a), Array.isArray(A) ? A.push(n) : A !== H ? A = [A, n] : n !== H && (A = n), a
                }
            }, j ? (w === H && u.initialize(), u.invoke(I)) : (w !== H && w.invoke("destroy"), u.initialize())
        }), A !== H ? A : this
    }, V.fn.modal.settings = {
        name: "Modal",
        namespace: "modal",
        useFlex: "auto",
        offset: 0,
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !1,
        allowMultiple: !1,
        detachable: !0,
        closable: !0,
        autofocus: !0,
        restoreFocus: !0,
        inverted: !1,
        blurring: !1,
        centered: !0,
        dimmerSettings: {
            closable: !1,
            useCSS: !0
        },
        keyboardShortcuts: !0,
        context: "body",
        queue: !1,
        duration: 500,
        transition: "scale",
        padding: 50,
        scrollbarWidth: 10,
        onShow: function() {},
        onVisible: function() {},
        onHide: function() {
            return !0
        },
        onHidden: function() {},
        onApprove: function() {
            return !0
        },
        onDeny: function() {
            return !0
        },
        selector: {
            close: "> .close",
            approve: ".actions .positive, .actions .approve, .actions .ok",
            deny: ".actions .negative, .actions .deny, .actions .cancel",
            modal: ".ui.modal",
            dimmer: "> .ui.dimmer",
            bodyFixed: "> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar"
        },
        error: {
            dimmer: "UI Dimmer, a required component is not included in this page",
            method: "The method you called is not defined.",
            notFound: "The element you specified could not be found"
        },
        className: {
            active: "active",
            animating: "animating",
            blurring: "blurring",
            inverted: "inverted",
            legacy: "legacy",
            loading: "loading",
            scrolling: "scrolling",
            undetached: "undetached",
            front: "front"
        }
    }
}(jQuery, window, document),
function(y, x, e, C) {
    "use strict";
    y.isFunction = y.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, x = void 0 !== x && x.Math == Math ? x : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), y.fn.nag = function(d) {
        var f, e = y(this),
            m = e.selector || "",
            g = (new Date).getTime(),
            p = [],
            h = d,
            v = "string" == typeof h,
            b = [].slice.call(arguments, 1);
        return e.each(function() {
            var s, i = y.isPlainObject(d) ? y.extend(!0, {}, y.fn.nag.settings, d) : y.extend({}, y.fn.nag.settings),
                e = i.selector,
                l = i.error,
                t = i.namespace,
                n = "." + t,
                o = t + "-module",
                a = y(this),
                r = i.context ? y(i.context) : y("body"),
                c = this,
                u = a.data(o);
            s = {
                initialize: function() {
                    s.verbose("Initializing element"), a.on("click" + n, e.close, s.dismiss).data(o, s), i.detachable && a.parent()[0] !== r[0] && a.detach().prependTo(r), 0 < i.displayTime && setTimeout(s.hide, i.displayTime), s.show()
                },
                destroy: function() {
                    s.verbose("Destroying instance"), a.removeData(o).off(n)
                },
                show: function() {
                    s.should.show() && !a.is(":visible") && (s.debug("Showing nag", i.animation.show), "fade" == i.animation.show ? a.fadeIn(i.duration, i.easing) : a.slideDown(i.duration, i.easing))
                },
                hide: function() {
                    s.debug("Showing nag", i.animation.hide), "fade" == i.animation.show ? a.fadeIn(i.duration, i.easing) : a.slideUp(i.duration, i.easing)
                },
                onHide: function() {
                    s.debug("Removing nag", i.animation.hide), a.remove(), i.onHide && i.onHide()
                },
                dismiss: function(e) {
                    i.storageMethod && s.storage.set(i.key, i.value), s.hide(), e.stopImmediatePropagation(), e.preventDefault()
                },
                should: {
                    show: function() {
                        return i.persist ? (s.debug("Persistent nag is set, can show nag"), !0) : s.storage.get(i.key) != i.value.toString() ? (s.debug("Stored value is not set, can show nag", s.storage.get(i.key)), !0) : (s.debug("Stored value is set, cannot show nag", s.storage.get(i.key)), !1)
                    }
                },
                get: {
                    storageOptions: function() {
                        var e = {};
                        return i.expires && (e.expires = i.expires), i.domain && (e.domain = i.domain), i.path && (e.path = i.path), e
                    }
                },
                clear: function() {
                    s.storage.remove(i.key)
                },
                storage: {
                    set: function(e, t) {
                        var n = s.get.storageOptions();
                        if ("localstorage" == i.storageMethod && x.localStorage !== C) x.localStorage.setItem(e, t), s.debug("Value stored using local storage", e, t);
                        else if ("sessionstorage" == i.storageMethod && x.sessionStorage !== C) x.sessionStorage.setItem(e, t), s.debug("Value stored using session storage", e, t);
                        else {
                            if (y.cookie === C) return void s.error(l.noCookieStorage);
                            y.cookie(e, t, n), s.debug("Value stored using cookie", e, t, n)
                        }
                    },
                    get: function(e, t) {
                        var n;
                        return "localstorage" == i.storageMethod && x.localStorage !== C ? n = x.localStorage.getItem(e) : "sessionstorage" == i.storageMethod && x.sessionStorage !== C ? n = x.sessionStorage.getItem(e) : y.cookie !== C ? n = y.cookie(e) : s.error(l.noCookieStorage), "undefined" != n && "null" != n && n !== C && null !== n || (n = C), n
                    },
                    remove: function(e) {
                        var t = s.get.storageOptions();
                        "localstorage" == i.storageMethod && x.localStorage !== C ? x.localStorage.removeItem(e) : "sessionstorage" == i.storageMethod && x.sessionStorage !== C ? x.sessionStorage.removeItem(e) : y.cookie !== C ? y.removeCookie(e, t) : s.error(l.noStorage)
                    }
                },
                setting: function(e, t) {
                    if (s.debug("Changing setting", e, t), y.isPlainObject(e)) y.extend(!0, i, e);
                    else {
                        if (t === C) return i[e];
                        y.isPlainObject(i[e]) ? y.extend(!0, i[e], t) : i[e] = t
                    }
                },
                internal: function(e, t) {
                    if (y.isPlainObject(e)) y.extend(!0, s, e);
                    else {
                        if (t === C) return s[e];
                        s[e] = t
                    }
                },
                debug: function() {
                    !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)))
                },
                error: function() {
                    i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        i.performance && (n = (t = (new Date).getTime()) - (g || t), g = t, p.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: c,
                            "Execution Time": n
                        })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                    },
                    display: function() {
                        var e = i.name + ":",
                            n = 0;
                        g = !1, clearTimeout(s.performance.timer), y.each(p, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", m && (e += " '" + m + "'"), (console.group !== C || console.table !== C) && 0 < p.length && (console.groupCollapsed(e), console.table ? console.table(p) : y.each(p, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), p = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = u;
                    return e = e || b, t = c || t, "string" == typeof i && r !== C && (i = i.split(/[\. ]/), o = i.length - 1, y.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (y.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== C) return a = r[n], !1;
                            if (!y.isPlainObject(r[t]) || e == o) return r[t] !== C ? a = r[t] : s.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), y.isFunction(a) ? n = a.apply(t, e) : a !== C && (n = a), Array.isArray(f) ? f.push(n) : f !== C ? f = [f, n] : n !== C && (f = n), a
                }
            }, v ? (u === C && s.initialize(), s.invoke(h)) : (u !== C && u.invoke("destroy"), s.initialize())
        }), f !== C ? f : this
    }, y.fn.nag.settings = {
        name: "Nag",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "Nag",
        persist: !1,
        displayTime: 0,
        animation: {
            show: "slide",
            hide: "slide"
        },
        context: !1,
        detachable: !1,
        expires: 30,
        domain: !1,
        path: "/",
        storageMethod: "cookie",
        key: "nag",
        value: "dismiss",
        error: {
            noCookieStorage: "$.cookie is not included. A storage solution is required.",
            noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
            method: "The method you called is not defined."
        },
        className: {
            bottom: "bottom",
            fixed: "fixed"
        },
        selector: {
            close: ".close.icon"
        },
        speed: 500,
        easing: "easeOutQuad",
        onHide: function() {}
    }, y.extend(y.easing, {
        easeOutQuad: function(e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        }
    })
}(jQuery, window, document),
function(q, L, V, z) {
    "use strict";
    q.isFunction = q.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, L = void 0 !== L && L.Math == Math ? L : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), q.fn.popup = function(T) {
        var S, e = q(this),
            D = q(V),
            A = q(L),
            E = q("body"),
            F = e.selector || "",
            P = "ontouchstart" in V.documentElement ? "touchstart" : "click",
            O = (new Date).getTime(),
            R = [],
            M = T,
            I = "string" == typeof M,
            j = [].slice.call(arguments, 1);
        return e.each(function() {
            var u, c, e, t, n, d, f = q.isPlainObject(T) ? q.extend(!0, {}, q.fn.popup.settings, T) : q.extend({}, q.fn.popup.settings),
                o = f.selector,
                m = f.className,
                g = f.error,
                p = f.metadata,
                i = f.namespace,
                a = "." + f.namespace,
                r = "module-" + i,
                h = q(this),
                s = q(f.context),
                l = q(f.scrollContext),
                v = q(f.boundary),
                b = f.target ? q(f.target) : h,
                y = 0,
                x = !1,
                C = !1,
                w = this,
                k = h.data(r);
            d = {
                initialize: function() {
                    d.debug("Initializing", h), d.createID(), d.bind.events(), !d.exists() && f.preserve && d.create(), f.observeChanges && d.observeChanges(), d.instantiate()
                },
                instantiate: function() {
                    d.verbose("Storing instance", d), k = d, h.data(r, k)
                },
                observeChanges: function() {
                    "MutationObserver" in L && ((e = new MutationObserver(d.event.documentChanged)).observe(V, {
                        childList: !0,
                        subtree: !0
                    }), d.debug("Setting up mutation observer", e))
                },
                refresh: function() {
                    f.popup ? u = q(f.popup).eq(0) : f.inline && (u = b.nextAll(o.popup).eq(0), f.popup = u), f.popup ? (u.addClass(m.loading), c = d.get.offsetParent(), u.removeClass(m.loading), f.movePopup && d.has.popup() && d.get.offsetParent(u)[0] !== c[0] && (d.debug("Moving popup to the same offset parent as target"), u.detach().appendTo(c))) : c = f.inline ? d.get.offsetParent(b) : d.has.popup() ? d.get.offsetParent(u) : E, c.is("html") && c[0] !== E[0] && (d.debug("Setting page as offset parent"), c = E), d.get.variation() && d.set.variation()
                },
                reposition: function() {
                    d.refresh(), d.set.position()
                },
                destroy: function() {
                    d.debug("Destroying previous module"), e && e.disconnect(), u && !f.preserve && d.removePopup(), clearTimeout(d.hideTimer), clearTimeout(d.showTimer), d.unbind.close(), d.unbind.events(), h.removeData(r)
                },
                event: {
                    start: function(e) {
                        var t = q.isPlainObject(f.delay) ? f.delay.show : f.delay;
                        clearTimeout(d.hideTimer), (!C || C && f.addTouchEvents) && (d.showTimer = setTimeout(d.show, t))
                    },
                    end: function() {
                        var e = q.isPlainObject(f.delay) ? f.delay.hide : f.delay;
                        clearTimeout(d.showTimer), d.hideTimer = setTimeout(d.hide, e)
                    },
                    touchstart: function(e) {
                        C = !0, f.addTouchEvents && d.show()
                    },
                    resize: function() {
                        d.is.visible() && d.set.position()
                    },
                    documentChanged: function(e) {
                        [].forEach.call(e, function(e) {
                            e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                                (e == w || 0 < q(e).find(w).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy())
                            })
                        })
                    },
                    hideGracefully: function(e) {
                        var t = q(e.target),
                            n = q.contains(V.documentElement, e.target),
                            i = 0 < t.closest(o.popup).length;
                        e && !i && n ? (d.debug("Click occurred outside popup hiding popup"), d.hide()) : d.debug("Click was inside popup, keeping popup open")
                    }
                },
                create: function() {
                    var e = d.get.html(),
                        t = d.get.title(),
                        n = d.get.content();
                    e || n || t ? (d.debug("Creating pop-up html"), e = e || f.templates.popup({
                        title: t,
                        content: n
                    }), u = q("<div/>").addClass(m.popup).data(p.activator, h).html(e), f.inline ? (d.verbose("Inserting popup element inline", u), u.insertAfter(h)) : (d.verbose("Appending popup element to body", u), u.appendTo(s)), d.refresh(), d.set.variation(), f.hoverable && d.bind.popup(), f.onCreate.call(u, w)) : f.popup ? (q(f.popup).data(p.activator, h), d.verbose("Used popup specified in settings"), d.refresh(), f.hoverable && d.bind.popup()) : 0 !== b.next(o.popup).length ? (d.verbose("Pre-existing popup found"), f.inline = !0, f.popup = b.next(o.popup).data(p.activator, h), d.refresh(), f.hoverable && d.bind.popup()) : d.debug("No content specified skipping display", w)
                },
                createID: function() {
                    n = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + n, d.verbose("Creating unique id for element", n)
                },
                toggle: function() {
                    d.debug("Toggling pop-up"), d.is.hidden() ? (d.debug("Popup is hidden, showing pop-up"), d.unbind.close(), d.show()) : (d.debug("Popup is visible, hiding pop-up"), d.hide())
                },
                show: function(e) {
                    if (e = e || function() {}, d.debug("Showing pop-up", f.transition), d.is.hidden() && (!d.is.active() || !d.is.dropdown())) {
                        if (d.exists() || d.create(), !1 === f.onShow.call(u, w)) return void d.debug("onShow callback returned false, cancelling popup animation");
                        f.preserve || f.popup || d.refresh(), u && d.set.position() && (d.save.conditions(), f.exclusive && d.hideAll(), d.animate.show(e))
                    }
                },
                hide: function(e) {
                    if (e = e || function() {}, d.is.visible() || d.is.animating()) {
                        if (!1 === f.onHide.call(u, w)) return void d.debug("onHide callback returned false, cancelling popup animation");
                        d.remove.visible(), d.unbind.close(), d.restore.conditions(), d.animate.hide(e)
                    }
                },
                hideAll: function() {
                    q(o.popup).filter("." + m.popupVisible).each(function() {
                        q(this).data(p.activator).popup("hide")
                    })
                },
                exists: function() {
                    return !!u && (f.inline || f.popup ? d.has.popup() : 1 <= u.closest(s).length)
                },
                removePopup: function() {
                    d.has.popup() && !f.popup && (d.debug("Removing popup", u), u.remove(), u = z, f.onRemove.call(u, w))
                },
                save: {
                    conditions: function() {
                        d.cache = {
                            title: h.attr("title")
                        }, d.cache.title && h.removeAttr("title"), d.verbose("Saving original attributes", d.cache.title)
                    }
                },
                restore: {
                    conditions: function() {
                        return d.cache && d.cache.title && (h.attr("title", d.cache.title), d.verbose("Restoring original attributes", d.cache.title)), !0
                    }
                },
                supports: {
                    svg: function() {
                        return "undefined" != typeof SVGGraphicsElement
                    }
                },
                animate: {
                    show: function(e) {
                        e = q.isFunction(e) ? e : function() {}, f.transition && q.fn.transition !== z && h.transition("is supported") ? (d.set.visible(), u.transition({
                            animation: f.transition + " in",
                            queue: !1,
                            debug: f.debug,
                            verbose: f.verbose,
                            duration: f.duration,
                            onComplete: function() {
                                d.bind.close(), e.call(u, w), f.onVisible.call(u, w)
                            }
                        })) : d.error(g.noTransition)
                    },
                    hide: function(e) {
                        e = q.isFunction(e) ? e : function() {}, d.debug("Hiding pop-up"), f.transition && q.fn.transition !== z && h.transition("is supported") ? u.transition({
                            animation: f.transition + " out",
                            queue: !1,
                            duration: f.duration,
                            debug: f.debug,
                            verbose: f.verbose,
                            onComplete: function() {
                                d.reset(), e.call(u, w), f.onHidden.call(u, w)
                            }
                        }) : d.error(g.noTransition)
                    }
                },
                change: {
                    content: function(e) {
                        u.html(e)
                    }
                },
                get: {
                    html: function() {
                        return h.removeData(p.html), h.data(p.html) || f.html
                    },
                    title: function() {
                        return h.removeData(p.title), h.data(p.title) || f.title
                    },
                    content: function() {
                        return h.removeData(p.content), h.data(p.content) || f.content || h.attr("title")
                    },
                    variation: function() {
                        return h.removeData(p.variation), h.data(p.variation) || f.variation
                    },
                    popup: function() {
                        return u
                    },
                    popupOffset: function() {
                        return u.offset()
                    },
                    calculations: function() {
                        var e, t = d.get.offsetParent(u),
                            n = b[0],
                            i = v[0] == L,
                            o = f.inline || f.popup && f.movePopup ? b.position() : b.offset(),
                            a = i ? {
                                top: 0,
                                left: 0
                            } : v.offset(),
                            r = {},
                            s = i ? {
                                top: A.scrollTop(),
                                left: A.scrollLeft()
                            } : {
                                top: 0,
                                left: 0
                            };
                        if (r = {
                                target: {
                                    element: b[0],
                                    width: b.outerWidth(),
                                    height: b.outerHeight(),
                                    top: o.top,
                                    left: o.left,
                                    margin: {}
                                },
                                popup: {
                                    width: u.outerWidth(),
                                    height: u.outerHeight()
                                },
                                parent: {
                                    width: c.outerWidth(),
                                    height: c.outerHeight()
                                },
                                screen: {
                                    top: a.top,
                                    left: a.left,
                                    scroll: {
                                        top: s.top,
                                        left: s.left
                                    },
                                    width: v.width(),
                                    height: v.height()
                                }
                            }, t.get(0) !== c.get(0)) {
                            var l = t.offset();
                            r.target.top -= l.top, r.target.left -= l.left, r.parent.width = t.outerWidth(), r.parent.height = t.outerHeight()
                        }
                        return f.setFluidWidth && d.is.fluid() && (r.container = {
                            width: u.parent().outerWidth()
                        }, r.popup.width = r.container.width), r.target.margin.top = f.inline ? parseInt(L.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, r.target.margin.left = f.inline ? d.is.rtl() ? parseInt(L.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(L.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = r.screen, r.boundary = {
                            top: e.top + e.scroll.top,
                            bottom: e.top + e.scroll.top + e.height,
                            left: e.left + e.scroll.left,
                            right: e.left + e.scroll.left + e.width
                        }, r
                    },
                    id: function() {
                        return n
                    },
                    startEvent: function() {
                        return "hover" == f.on ? "mouseenter" : "focus" == f.on && "focus"
                    },
                    scrollEvent: function() {
                        return "scroll"
                    },
                    endEvent: function() {
                        return "hover" == f.on ? "mouseleave" : "focus" == f.on && "blur"
                    },
                    distanceFromBoundary: function(e, t) {
                        var n, i, o = {};
                        return n = (t = t || d.get.calculations()).popup, i = t.boundary, e && (o = {
                            top: e.top - i.top,
                            left: e.left - i.left,
                            right: i.right - (e.left + n.width),
                            bottom: i.bottom - (e.top + n.height)
                        }, d.verbose("Distance from boundaries determined", e, o)), o
                    },
                    offsetParent: function(e) {
                        var t = (e !== z ? e[0] : b[0]).parentNode,
                            n = q(t);
                        if (t)
                            for (var i = "none" === n.css("transform"), o = "static" === n.css("position"), a = n.is("body"); t && !a && o && i;) t = t.parentNode, i = "none" === (n = q(t)).css("transform"), o = "static" === n.css("position"), a = n.is("body");
                        return n && 0 < n.length ? n : q()
                    },
                    positions: function() {
                        return {
                            "top left": !1,
                            "top center": !1,
                            "top right": !1,
                            "bottom left": !1,
                            "bottom center": !1,
                            "bottom right": !1,
                            "left center": !1,
                            "right center": !1
                        }
                    },
                    nextPosition: function(e) {
                        var t = e.split(" "),
                            n = t[0],
                            i = t[1],
                            o = "top" == n || "bottom" == n,
                            a = !1,
                            r = !1,
                            s = !1;
                        return x || (d.verbose("All available positions available"), x = d.get.positions()), d.debug("Recording last position tried", e), x[e] = !0, "opposite" === f.prefer && (s = (s = [{
                            top: "bottom",
                            bottom: "top",
                            left: "right",
                            right: "left"
                        }[n], i]).join(" "), a = !0 === x[s], d.debug("Trying opposite strategy", s)), "adjacent" === f.prefer && o && (s = (s = [n, {
                            left: "center",
                            center: "right",
                            right: "left"
                        }[i]]).join(" "), r = !0 === x[s], d.debug("Trying adjacent strategy", s)), (r || a) && (d.debug("Using backup position", s), s = {
                            "top left": "top center",
                            "top center": "top right",
                            "top right": "right center",
                            "right center": "bottom right",
                            "bottom right": "bottom center",
                            "bottom center": "bottom left",
                            "bottom left": "left center",
                            "left center": "top left"
                        }[e]), s
                    }
                },
                set: {
                    position: function(e, t) {
                        if (0 !== b.length && 0 !== u.length) {
                            var n, i, o, a, r, s, l, c;
                            if (t = t || d.get.calculations(), e = e || h.data(p.position) || f.position, n = h.data(p.offset) || f.offset, i = f.distanceAway, o = t.target, a = t.popup, r = t.parent, d.should.centerArrow(t) && (d.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += o.width / 2, n -= f.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= o.width / 2, n += f.arrowPixelsFromEdge)), 0 === o.width && 0 === o.height && !d.is.svg(o.element)) return d.debug("Popup target is hidden, no action taken"), !1;
                            switch (f.inline && (d.debug("Adding margin to calculation", o.margin), "left center" == e || "right center" == e ? (n += o.margin.top, i += -o.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += o.margin.left, i -= o.margin.top) : (n += o.margin.left, i += o.margin.top)), d.debug("Determining popup position from calculations", e, t), d.is.rtl() && (e = e.replace(/left|right/g, function(e) {
                                return "left" == e ? "right" : "left"
                            }), d.debug("RTL: Popup position updated", e)), y == f.maxSearchDepth && "string" == typeof f.lastResort && (e = f.lastResort), e) {
                                case "top left":
                                    s = {
                                        top: "auto",
                                        bottom: r.height - o.top + i,
                                        left: o.left + n,
                                        right: "auto"
                                    };
                                    break;
                                case "top center":
                                    s = {
                                        bottom: r.height - o.top + i,
                                        left: o.left + o.width / 2 - a.width / 2 + n,
                                        top: "auto",
                                        right: "auto"
                                    };
                                    break;
                                case "top right":
                                    s = {
                                        bottom: r.height - o.top + i,
                                        right: r.width - o.left - o.width - n,
                                        top: "auto",
                                        left: "auto"
                                    };
                                    break;
                                case "left center":
                                    s = {
                                        top: o.top + o.height / 2 - a.height / 2 + n,
                                        right: r.width - o.left + i,
                                        left: "auto",
                                        bottom: "auto"
                                    };
                                    break;
                                case "right center":
                                    s = {
                                        top: o.top + o.height / 2 - a.height / 2 + n,
                                        left: o.left + o.width + i,
                                        bottom: "auto",
                                        right: "auto"
                                    };
                                    break;
                                case "bottom left":
                                    s = {
                                        top: o.top + o.height + i,
                                        left: o.left + n,
                                        bottom: "auto",
                                        right: "auto"
                                    };
                                    break;
                                case "bottom center":
                                    s = {
                                        top: o.top + o.height + i,
                                        left: o.left + o.width / 2 - a.width / 2 + n,
                                        bottom: "auto",
                                        right: "auto"
                                    };
                                    break;
                                case "bottom right":
                                    s = {
                                        top: o.top + o.height + i,
                                        right: r.width - o.left - o.width - n,
                                        left: "auto",
                                        bottom: "auto"
                                    }
                            }
                            if (s === z && d.error(g.invalidPosition, e), d.debug("Calculated popup positioning values", s), u.css(s).removeClass(m.position).addClass(e).addClass(m.loading), l = d.get.popupOffset(), c = d.get.distanceFromBoundary(l, t), !f.forcePosition && d.is.offstage(c, e)) {
                                if (d.debug("Position is outside viewport", e), y < f.maxSearchDepth) return y++, e = d.get.nextPosition(e), d.debug("Trying new position", e), !!u && d.set.position(e, t);
                                if (!f.lastResort) return d.debug("Popup could not find a position to display", u), d.error(g.cannotPlace, w), d.remove.attempts(), d.remove.loading(), d.reset(), f.onUnplaceable.call(u, w), !1;
                                d.debug("No position found, showing with last position")
                            }
                            return d.debug("Position is on stage", e), d.remove.attempts(), d.remove.loading(), f.setFluidWidth && d.is.fluid() && d.set.fluidWidth(t), !0
                        }
                        d.error(g.notFound)
                    },
                    fluidWidth: function(e) {
                        e = e || d.get.calculations(), d.debug("Automatically setting element width to parent width", e.parent.width), u.css("width", e.container.width)
                    },
                    variation: function(e) {
                        (e = e || d.get.variation()) && d.has.popup() && (d.verbose("Adding variation to popup", e), u.addClass(e))
                    },
                    visible: function() {
                        h.addClass(m.visible)
                    }
                },
                remove: {
                    loading: function() {
                        u.removeClass(m.loading)
                    },
                    variation: function(e) {
                        (e = e || d.get.variation()) && (d.verbose("Removing variation", e), u.removeClass(e))
                    },
                    visible: function() {
                        h.removeClass(m.visible)
                    },
                    attempts: function() {
                        d.verbose("Resetting all searched positions"), y = 0, x = !1
                    }
                },
                bind: {
                    events: function() {
                        d.debug("Binding popup events to module"), "click" == f.on && h.on(P + a, d.toggle), "hover" == f.on && h.on("touchstart" + a, d.event.touchstart), d.get.startEvent() && h.on(d.get.startEvent() + a, d.event.start).on(d.get.endEvent() + a, d.event.end), f.target && d.debug("Target set to element", b), A.on("resize" + t, d.event.resize)
                    },
                    popup: function() {
                        d.verbose("Allowing hover events on popup to prevent closing"), u && d.has.popup() && u.on("mouseenter" + a, d.event.start).on("mouseleave" + a, d.event.end)
                    },
                    close: function() {
                        (!0 === f.hideOnScroll || "auto" == f.hideOnScroll && "click" != f.on) && d.bind.closeOnScroll(), d.is.closable() ? d.bind.clickaway() : "hover" == f.on && C && d.bind.touchClose()
                    },
                    closeOnScroll: function() {
                        d.verbose("Binding scroll close event to document"), l.one(d.get.scrollEvent() + t, d.event.hideGracefully)
                    },
                    touchClose: function() {
                        d.verbose("Binding popup touchclose event to document"), D.on("touchstart" + t, function(e) {
                            d.verbose("Touched away from popup"), d.event.hideGracefully.call(w, e)
                        })
                    },
                    clickaway: function() {
                        d.verbose("Binding popup close event to document"), D.on(P + t, function(e) {
                            d.verbose("Clicked away from popup"), d.event.hideGracefully.call(w, e)
                        })
                    }
                },
                unbind: {
                    events: function() {
                        A.off(t), h.off(a)
                    },
                    close: function() {
                        D.off(t), l.off(t)
                    }
                },
                has: {
                    popup: function() {
                        return u && 0 < u.length
                    }
                },
                should: {
                    centerArrow: function(e) {
                        return !d.is.basic() && e.target.width <= 2 * f.arrowPixelsFromEdge
                    }
                },
                is: {
                    closable: function() {
                        return "auto" == f.closable ? "hover" != f.on : f.closable
                    },
                    offstage: function(e, n) {
                        var i = [];
                        return q.each(e, function(e, t) {
                            t < -f.jitter && (d.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                        }), 0 < i.length
                    },
                    svg: function(e) {
                        return d.supports.svg() && e instanceof SVGGraphicsElement
                    },
                    basic: function() {
                        return h.hasClass(m.basic)
                    },
                    active: function() {
                        return h.hasClass(m.active)
                    },
                    animating: function() {
                        return u !== z && u.hasClass(m.animating)
                    },
                    fluid: function() {
                        return u !== z && u.hasClass(m.fluid)
                    },
                    visible: function() {
                        return u !== z && u.hasClass(m.popupVisible)
                    },
                    dropdown: function() {
                        return h.hasClass(m.dropdown)
                    },
                    hidden: function() {
                        return !d.is.visible()
                    },
                    rtl: function() {
                        return "rtl" === h.attr("dir") || "rtl" === h.css("direction")
                    }
                },
                reset: function() {
                    d.remove.visible(), f.preserve ? q.fn.transition !== z && u.transition("remove transition") : d.removePopup()
                },
                setting: function(e, t) {
                    if (q.isPlainObject(e)) q.extend(!0, f, e);
                    else {
                        if (t === z) return f[e];
                        f[e] = t
                    }
                },
                internal: function(e, t) {
                    if (q.isPlainObject(e)) q.extend(!0, d, e);
                    else {
                        if (t === z) return d[e];
                        d[e] = t
                    }
                },
                debug: function() {
                    !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        f.performance && (n = (t = (new Date).getTime()) - (O || t), O = t, R.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: w,
                            "Execution Time": n
                        })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 500)
                    },
                    display: function() {
                        var e = f.name + ":",
                            n = 0;
                        O = !1, clearTimeout(d.performance.timer), q.each(R, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", F && (e += " '" + F + "'"), (console.group !== z || console.table !== z) && 0 < R.length && (console.groupCollapsed(e), console.table ? console.table(R) : q.each(R, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), R = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = k;
                    return e = e || j, t = w || t, "string" == typeof i && r !== z && (i = i.split(/[\. ]/), o = i.length - 1, q.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (q.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== z) return a = r[n], !1;
                            if (!q.isPlainObject(r[t]) || e == o) return r[t] !== z && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), q.isFunction(a) ? n = a.apply(t, e) : a !== z && (n = a), Array.isArray(S) ? S.push(n) : S !== z ? S = [S, n] : n !== z && (S = n), a
                }
            }, I ? (k === z && d.initialize(), d.invoke(M)) : (k !== z && k.invoke("destroy"), d.initialize())
        }), S !== z ? S : this
    }, q.fn.popup.settings = {
        name: "Popup",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "popup",
        observeChanges: !0,
        onCreate: function() {},
        onRemove: function() {},
        onShow: function() {},
        onVisible: function() {},
        onHide: function() {},
        onUnplaceable: function() {},
        onHidden: function() {},
        on: "hover",
        boundary: L,
        addTouchEvents: !0,
        position: "top left",
        forcePosition: !1,
        variation: "",
        movePopup: !0,
        target: !1,
        popup: !1,
        inline: !1,
        preserve: !1,
        hoverable: !1,
        content: !1,
        html: !1,
        title: !1,
        closable: !0,
        hideOnScroll: "auto",
        exclusive: !1,
        context: "body",
        scrollContext: L,
        prefer: "opposite",
        lastResort: !1,
        arrowPixelsFromEdge: 20,
        delay: {
            show: 50,
            hide: 70
        },
        setFluidWidth: !0,
        duration: 200,
        transition: "scale",
        distanceAway: 0,
        jitter: 2,
        offset: 0,
        maxSearchDepth: 15,
        error: {
            invalidPosition: "The position you specified is not a valid position",
            cannotPlace: "Popup does not fit within the boundaries of the viewport",
            method: "The method you called is not defined.",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
            notFound: "The target or popup you specified does not exist on the page"
        },
        metadata: {
            activator: "activator",
            content: "content",
            html: "html",
            offset: "offset",
            position: "position",
            title: "title",
            variation: "variation"
        },
        className: {
            active: "active",
            basic: "basic",
            animating: "animating",
            dropdown: "dropdown",
            fluid: "fluid",
            loading: "loading",
            popup: "ui popup",
            position: "top left center bottom right",
            visible: "visible",
            popupVisible: "visible"
        },
        selector: {
            popup: ".ui.popup"
        },
        templates: {
            escape: function(e) {
                var t = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                };
                return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                    return t[e]
                }) : e
            },
            popup: function(e) {
                var t = "",
                    n = q.fn.popup.settings.templates.escape;
                return typeof e !== z && (typeof e.title !== z && e.title && (e.title = n(e.title), t += '<div class="header">' + e.title + "</div>"), typeof e.content !== z && e.content && (e.content = n(e.content), t += '<div class="content">' + e.content + "</div>")), t
            }
        }
    }
}(jQuery, window, document),
function(T, e, S, D) {
    "use strict";
    T.isFunction = T.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.progress = function(h) {
        var v, e = T(this),
            b = e.selector || "",
            y = (new Date).getTime(),
            x = [],
            C = h,
            w = "string" == typeof C,
            k = [].slice.call(arguments, 1);
        return e.each(function() {
            var c, s = T.isPlainObject(h) ? T.extend(!0, {}, T.fn.progress.settings, h) : T.extend({}, T.fn.progress.settings),
                n = s.className,
                t = s.metadata,
                e = s.namespace,
                i = s.selector,
                l = s.error,
                o = "." + e,
                a = "module-" + e,
                u = T(this),
                d = T(this).find(i.bar),
                r = T(this).find(i.progress),
                f = T(this).find(i.label),
                m = this,
                g = u.data(a),
                p = !1;
            c = {
                helper: {
                    sum: function(e) {
                        return Array.isArray(e) ? e.reduce(function(e, t) {
                            return e + Number(t)
                        }, 0) : 0
                    },
                    derivePrecision: function(e, t) {
                        for (var n = 0, i = 1, o = e / t; n < 10 && !(1 < (o *= i));) i = Math.pow(10, n++);
                        return i
                    },
                    forceArray: function(e) {
                        return Array.isArray(e) ? e : isNaN(e) ? "string" == typeof e ? e.split(",") : [] : [e]
                    }
                },
                initialize: function() {
                    c.set.duration(), c.set.transitionEvent(), c.debug(m), c.read.metadata(), c.read.settings(), c.instantiate()
                },
                instantiate: function() {
                    c.verbose("Storing instance of progress", c), g = c, u.data(a, c)
                },
                destroy: function() {
                    c.verbose("Destroying previous progress for", u), clearInterval(g.interval), c.remove.state(), u.removeData(a), g = D
                },
                reset: function() {
                    c.remove.nextValue(), c.update.progress(0)
                },
                complete: function(e) {
                    (c.percent === D || c.percent < 100) && (c.remove.progressPoll(), !0 !== e && c.set.percent(100))
                },
                read: {
                    metadata: function() {
                        var e = {
                            percent: c.helper.forceArray(u.data(t.percent)),
                            total: u.data(t.total),
                            value: c.helper.forceArray(u.data(t.value))
                        };
                        e.total && (c.debug("Total value set from metadata", e.total), c.set.total(e.total)), 0 < e.value.length && (c.debug("Current value set from metadata", e.value), c.set.value(e.value), c.set.progress(e.value)), 0 < e.percent.length && (c.debug("Current percent value set from metadata", e.percent), c.set.percent(e.percent))
                    },
                    settings: function() {
                        !1 !== s.total && (c.debug("Current total set in settings", s.total), c.set.total(s.total)), !1 !== s.value && (c.debug("Current value set in settings", s.value), c.set.value(s.value), c.set.progress(c.value)), !1 !== s.percent && (c.debug("Current percent set in settings", s.percent), c.set.percent(s.percent))
                    }
                },
                bind: {
                    transitionEnd: function(t) {
                        var e = c.get.transitionEnd();
                        d.one(e + o, function(e) {
                            clearTimeout(c.failSafeTimer), t.call(this, e)
                        }), c.failSafeTimer = setTimeout(function() {
                            d.triggerHandler(e)
                        }, s.duration + s.failSafeDelay), c.verbose("Adding fail safe timer", c.timer)
                    }
                },
                increment: function(e) {
                    var t, n;
                    e = c.has.total() ? (t = c.get.value(), e || 1) : (t = c.get.percent(), e || c.get.randomValue()), n = t + e, c.debug("Incrementing percentage by", t, n, e), n = c.get.normalizedValue(n), c.set.progress(n)
                },
                decrement: function(e) {
                    var t, n;
                    c.get.total() ? (n = (t = c.get.value()) - (e = e || 1), c.debug("Decrementing value by", e, t)) : (n = (t = c.get.percent()) - (e = e || c.get.randomValue()), c.debug("Decrementing percentage by", e, t)), n = c.get.normalizedValue(n), c.set.progress(n)
                },
                has: {
                    progressPoll: function() {
                        return c.progressPoll
                    },
                    total: function() {
                        return !1 !== c.get.total()
                    }
                },
                get: {
                    text: function(e, t) {
                        var n = t || 0,
                            i = c.get.value(n),
                            o = c.total || 0,
                            a = p ? c.get.displayPercent(n) : c.get.percent(n),
                            r = 0 < c.total ? o - i : 100 - a;
                        return e = (e = e || "").replace("{value}", i).replace("{total}", o).replace("{left}", r).replace("{percent}", a).replace("{bar}", s.text.bars[n] || ""), c.verbose("Adding variables to progress bar text", e), e
                    },
                    normalizedValue: function(e) {
                        if (e < 0) return c.debug("Value cannot decrement below 0"), 0;
                        if (c.has.total()) {
                            if (e > c.total) return c.debug("Value cannot increment above total", c.total), c.total
                        } else if (100 < e) return c.debug("Value cannot increment above 100 percent"), 100;
                        return e
                    },
                    updateInterval: function() {
                        return "auto" == s.updateInterval ? s.duration : s.updateInterval
                    },
                    randomValue: function() {
                        return c.debug("Generating random increment percentage"), Math.floor(Math.random() * s.random.max + s.random.min)
                    },
                    numericValue: function(e) {
                        return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e
                    },
                    transitionEnd: function() {
                        var e, t = S.createElement("element"),
                            n = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (e in n)
                            if (t.style[e] !== D) return n[e]
                    },
                    displayPercent: function(e) {
                        var t = T(d[e]),
                            n = t.width(),
                            i = u.width(),
                            o = parseInt(t.css("min-width"), 10) < n ? n / i * 100 : c.percent;
                        return 0 < s.precision ? Math.round(o * (10 * s.precision)) / (10 * s.precision) : Math.round(o)
                    },
                    percent: function(e) {
                        return c.percent && c.percent[e || 0] || 0
                    },
                    value: function(e) {
                        return c.nextValue || c.value && c.value[e || 0] || 0
                    },
                    total: function() {
                        return c.total || !1
                    }
                },
                create: {
                    progressPoll: function() {
                        c.progressPoll = setTimeout(function() {
                            c.update.toNextValue(), c.remove.progressPoll()
                        }, c.get.updateInterval())
                    }
                },
                is: {
                    complete: function() {
                        return c.is.success() || c.is.warning() || c.is.error()
                    },
                    success: function() {
                        return u.hasClass(n.success)
                    },
                    warning: function() {
                        return u.hasClass(n.warning)
                    },
                    error: function() {
                        return u.hasClass(n.error)
                    },
                    active: function() {
                        return u.hasClass(n.active)
                    },
                    visible: function() {
                        return u.is(":visible")
                    }
                },
                remove: {
                    progressPoll: function() {
                        c.verbose("Removing progress poll timer"), c.progressPoll && (clearTimeout(c.progressPoll), delete c.progressPoll)
                    },
                    nextValue: function() {
                        c.verbose("Removing progress value stored for next update"), delete c.nextValue
                    },
                    state: function() {
                        c.verbose("Removing stored state"), delete c.total, delete c.percent, delete c.value
                    },
                    active: function() {
                        c.verbose("Removing active state"), u.removeClass(n.active)
                    },
                    success: function() {
                        c.verbose("Removing success state"), u.removeClass(n.success)
                    },
                    warning: function() {
                        c.verbose("Removing warning state"), u.removeClass(n.warning)
                    },
                    error: function() {
                        c.verbose("Removing error state"), u.removeClass(n.error)
                    }
                },
                set: {
                    barWidth: function(e) {
                        c.debug("set bar width with ", e), e = c.helper.forceArray(e);
                        var o = -1,
                            a = -1,
                            r = c.helper.sum(e),
                            s = d.length,
                            l = 1 < s,
                            t = e.map(function(e, t) {
                                var n = t === s - 1 && 0 === r,
                                    i = T(d[t]);
                                return 0 === e && l && !n ? i.css("display", "none") : (l && n && i.css("background", "transparent"), -1 == o && (o = t), a = t, i.css({
                                    display: "block",
                                    width: e + "%"
                                })), parseFloat(e)
                            });
                        e.forEach(function(e, t) {
                            T(d[t]).css({
                                borderTopLeftRadius: t == o ? "" : 0,
                                borderBottomLeftRadius: t == o ? "" : 0,
                                borderTopRightRadius: t == a ? "" : 0,
                                borderBottomRightRadius: t == a ? "" : 0
                            })
                        }), u.attr("data-percent", t)
                    },
                    duration: function(e) {
                        e = "number" == typeof(e = e || s.duration) ? e + "ms" : e, c.verbose("Setting progress bar transition duration", e), d.css({
                            "transition-duration": e
                        })
                    },
                    percent: function(e) {
                        e = c.helper.forceArray(e).map(function(e) {
                            return "string" == typeof e ? +e.replace("%", "") : e
                        });
                        var t = c.has.total(),
                            n = c.helper.sum(e),
                            i = 1 < e.length && t,
                            o = c.helper.sum(c.helper.forceArray(c.value));
                        if (i && o > c.total) c.error(l.sumExceedsTotal, o, c.total);
                        else if (!i && 100 < n) c.error(l.tooHigh, n);
                        else if (n < 0) c.error(l.tooLow, n);
                        else {
                            var a = 0 < s.precision ? s.precision : i ? c.helper.derivePrecision(Math.min.apply(null, c.value), c.total) : D,
                                r = e.map(function(e) {
                                    return 0 < a ? Math.round(e * (10 * a)) / (10 * a) : Math.round(e)
                                });
                            c.percent = r, t || (c.value = r.map(function(e) {
                                return 0 < a ? Math.round(e / 100 * c.total * (10 * a)) / (10 * a) : Math.round(e / 100 * c.total * 10) / 10
                            }), s.limitValues && (c.value = c.value.map(function(e) {
                                return 100 < e ? 100 : c.value < 0 ? 0 : c.value
                            }))), c.set.barWidth(e), c.set.labelInterval(), c.set.labels()
                        }
                        s.onChange.call(m, e, c.value, c.total)
                    },
                    labelInterval: function() {
                        clearInterval(c.interval), c.bind.transitionEnd(function() {
                            c.verbose("Bar finished animating, removing continuous label updates"), clearInterval(c.interval), p = !1, c.set.labels()
                        }), p = !0, c.interval = setInterval(function() {
                            T.contains(S.documentElement, m) || (clearInterval(c.interval), p = !1), c.set.labels()
                        }, s.framerate)
                    },
                    labels: function() {
                        c.verbose("Setting both bar progress and outer label text"), c.set.barLabel(), c.set.state()
                    },
                    label: function(e) {
                        (e = e || "") && (e = c.get.text(e), c.verbose("Setting label to text", e), f.text(e))
                    },
                    state: function(e) {
                        100 === (e = e !== D ? e : c.helper.sum(c.percent)) ? s.autoSuccess && 1 === d.length && !(c.is.warning() || c.is.error() || c.is.success()) ? (c.set.success(), c.debug("Automatically triggering success at 100%")) : (c.verbose("Reached 100% removing active state"), c.remove.active(), c.remove.progressPoll()) : 0 < e ? (c.verbose("Adjusting active progress bar label", e), c.set.active()) : (c.remove.active(), c.set.label(s.text.active))
                    },
                    barLabel: function(i) {
                        r.map(function(e, t) {
                            var n = T(t);
                            i !== D ? n.text(c.get.text(i, e)) : "ratio" == s.label && c.total ? (c.verbose("Adding ratio to bar label"), n.text(c.get.text(s.text.ratio, e))) : "percent" == s.label && (c.verbose("Adding percentage to bar label"), n.text(c.get.text(s.text.percent, e)))
                        })
                    },
                    active: function(e) {
                        e = e || s.text.active, c.debug("Setting active state"), s.showActivity && !c.is.active() && u.addClass(n.active), c.remove.warning(), c.remove.error(), c.remove.success(), (e = s.onLabelUpdate("active", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                            s.onActive.call(m, c.value, c.total)
                        })
                    },
                    success: function(e, t) {
                        e = e || s.text.success || s.text.active, c.debug("Setting success state"), u.addClass(n.success), c.remove.active(), c.remove.warning(), c.remove.error(), c.complete(t), e = s.text.success ? s.onLabelUpdate("success", e, c.value, c.total) : s.onLabelUpdate("active", e, c.value, c.total), c.set.label(e), c.bind.transitionEnd(function() {
                            s.onSuccess.call(m, c.total)
                        })
                    },
                    warning: function(e, t) {
                        e = e || s.text.warning, c.debug("Setting warning state"), u.addClass(n.warning), c.remove.active(), c.remove.success(), c.remove.error(), c.complete(t), (e = s.onLabelUpdate("warning", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                            s.onWarning.call(m, c.value, c.total)
                        })
                    },
                    error: function(e, t) {
                        e = e || s.text.error, c.debug("Setting error state"), u.addClass(n.error), c.remove.active(), c.remove.success(), c.remove.warning(), c.complete(t), (e = s.onLabelUpdate("error", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                            s.onError.call(m, c.value, c.total)
                        })
                    },
                    transitionEvent: function() {
                        c.get.transitionEnd()
                    },
                    total: function(e) {
                        c.total = e
                    },
                    value: function(e) {
                        c.value = c.helper.forceArray(e)
                    },
                    progress: function(e) {
                        c.has.progressPoll() ? (c.debug("Updated within interval, setting next update to use new value", e), c.set.nextValue(e)) : (c.debug("First update in progress update interval, immediately updating", e), c.update.progress(e), c.create.progressPoll())
                    },
                    nextValue: function(e) {
                        c.nextValue = e
                    }
                },
                update: {
                    toNextValue: function() {
                        var e = c.nextValue;
                        e && (c.debug("Update interval complete using last updated value", e), c.update.progress(e), c.remove.nextValue())
                    },
                    progress: function(e) {
                        var n = c.has.total();
                        n && c.set.value(e);
                        var t = c.helper.forceArray(e).map(function(e) {
                            var t;
                            return !1 === (e = c.get.numericValue(e)) && c.error(l.nonNumeric, e), e = c.get.normalizedValue(e), n ? (t = e / c.total * 100, c.debug("Calculating percent complete from total", t)) : (t = e, c.debug("Setting value to exact percentage value", t)), t
                        });
                        c.set.percent(t)
                    }
                },
                setting: function(e, t) {
                    if (c.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, s, e);
                    else {
                        if (t === D) return s[e];
                        T.isPlainObject(s[e]) ? T.extend(!0, s[e], t) : s[e] = t
                    }
                },
                internal: function(e, t) {
                    if (T.isPlainObject(e)) T.extend(!0, c, e);
                    else {
                        if (t === D) return c[e];
                        c[e] = t
                    }
                },
                debug: function() {
                    !s.silent && s.debug && (s.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), c.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !s.silent && s.verbose && s.debug && (s.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), c.verbose.apply(console, arguments)))
                },
                error: function() {
                    s.silent || (c.error = Function.prototype.bind.call(console.error, console, s.name + ":"), c.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        s.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, x.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: m,
                            "Execution Time": n
                        })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                    },
                    display: function() {
                        var e = s.name + ":",
                            n = 0;
                        y = !1, clearTimeout(c.performance.timer), T.each(x, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", b && (e += " '" + b + "'"), (console.group !== D || console.table !== D) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), x = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = g;
                    return e = e || k, t = m || t, "string" == typeof i && r !== D && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (T.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== D) return a = r[n], !1;
                            if (!T.isPlainObject(r[t]) || e == o) return r[t] !== D ? a = r[t] : c.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), T.isFunction(a) ? n = a.apply(t, e) : a !== D && (n = a), Array.isArray(v) ? v.push(n) : v !== D ? v = [v, n] : n !== D && (v = n), a
                }
            }, w ? (g === D && c.initialize(), c.invoke(C)) : (g !== D && g.invoke("destroy"), c.initialize())
        }), v !== D ? v : this
    }, T.fn.progress.settings = {
        name: "Progress",
        namespace: "progress",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        random: {
            min: 2,
            max: 5
        },
        duration: 300,
        updateInterval: "auto",
        autoSuccess: !0,
        showActivity: !0,
        limitValues: !0,
        label: "percent",
        precision: 0,
        framerate: 1e3 / 30,
        percent: !1,
        total: !1,
        value: !1,
        failSafeDelay: 100,
        onLabelUpdate: function(e, t, n, i) {
            return t
        },
        onChange: function(e, t, n) {},
        onSuccess: function(e) {},
        onActive: function(e, t) {},
        onError: function(e, t) {},
        onWarning: function(e, t) {},
        error: {
            method: "The method you called is not defined.",
            nonNumeric: "Progress value is non numeric",
            tooHigh: "Value specified is above 100%",
            tooLow: "Value specified is below 0%",
            sumExceedsTotal: "Sum of multple values exceed total"
        },
        regExp: {
            variable: /\{\$*[A-z0-9]+\}/g
        },
        metadata: {
            percent: "percent",
            total: "total",
            value: "value"
        },
        selector: {
            bar: "> .bar",
            label: "> .label",
            progress: ".bar > .progress"
        },
        text: {
            active: !1,
            error: !1,
            success: !1,
            warning: !1,
            percent: "{percent}%",
            ratio: "{value} of {total}",
            bars: [""]
        },
        className: {
            active: "active",
            error: "error",
            success: "success",
            warning: "warning"
        }
    }
}(jQuery, window, document),
function(H, t, U, B) {
    "use strict";
    t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), H.fn.slider = function(P) {
        var O, e = H(this),
            R = H(t),
            M = e.selector || "",
            I = (new Date).getTime(),
            j = [],
            q = P,
            L = "string" == typeof q,
            V = [].slice.call(arguments, 1),
            z = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            N = 0;
        return e.each(function() {
            var m, s, l, e, g, r, t, o, p, h, v, c, n, u, a, b, d = H.isPlainObject(P) ? H.extend(!0, {}, H.fn.slider.settings, P) : H.extend({}, H.fn.slider.settings),
                i = d.className,
                f = d.metadata,
                y = d.namespace,
                x = d.error,
                C = d.keys,
                w = d.interpretLabel,
                k = !1,
                T = "." + y,
                S = "module-" + y,
                D = H(this),
                A = this,
                E = D.data(S),
                F = 1;
            b = {
                initialize: function() {
                    b.debug("Initializing slider", d), a = !0, t = N += 1, n = b.setup.testOutTouch(), b.setup.layout(), b.setup.labels(), b.is.disabled() || b.bind.events(), b.read.metadata(), b.read.settings(), a = !1, b.instantiate()
                },
                instantiate: function() {
                    b.verbose("Storing instance of slider", b), E = b, D.data(S, b)
                },
                destroy: function() {
                    b.verbose("Destroying previous slider for", D), clearInterval(E.interval), b.unbind.events(), b.unbind.slidingEvents(), D.removeData(S), E = B
                },
                setup: {
                    layout: function() {
                        D.attr("tabindex") === B && D.attr("tabindex", 0), 0 == D.find(".inner").length && D.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"), c = b.get.precision(), s = D.find(".thumb:not(.second)"), m = s, b.is.range() && (0 == D.find(".thumb.second").length && D.find(".inner").append("<div class='thumb second'></div>"), l = D.find(".thumb.second")), e = D.find(".track"), g = D.find(".track-fill"), v = s.width() / 2
                    },
                    labels: function() {
                        b.is.labeled() && (0 != (r = D.find(".labels:not(.auto)")).length ? b.setup.customLabel() : b.setup.autoLabel(), d.showLabelTicks && D.addClass(i.ticked))
                    },
                    testOutTouch: function() {
                        try {
                            return U.createEvent("TouchEvent"), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    customLabel: function() {
                        var n, e = r.find(".label"),
                            i = e.length,
                            o = b.get.min(),
                            a = b.get.max();
                        e.each(function(e) {
                            var t = H(this).attr("data-value");
                            n = t ? ((t = a < t ? a : t < o ? o : t) - o) / (a - o) : (e + 1) / (i + 1), b.update.labelPosition(n, H(this))
                        })
                    },
                    autoLabel: function() {
                        if (0 != b.get.step()) {
                            0 != (r = D.find(".labels")).length ? r.empty() : r = D.append('<ul class="auto labels"></ul>').find(".labels");
                            for (var e = 0, t = b.get.numLabels(); e <= t; e++) {
                                var n = b.get.label(e),
                                    i = "" !== n ? e % b.get.gapRatio() ? H('<li class="halftick label"></li>') : H('<li class="label">' + n + "</li>") : null,
                                    o = e / t;
                                i && (b.update.labelPosition(o, i), r.append(i))
                            }
                        }
                    }
                },
                bind: {
                    events: function() {
                        b.bind.globalKeyboardEvents(), b.bind.keyboardEvents(), b.bind.mouseEvents(), b.is.touch() && b.bind.touchEvents(), d.autoAdjustLabels && b.bind.windowEvents()
                    },
                    keyboardEvents: function() {
                        b.verbose("Binding keyboard events"), D.on("keydown" + T, b.event.keydown)
                    },
                    globalKeyboardEvents: function() {
                        H(U).on("keydown" + T + t, b.event.activateFocus)
                    },
                    mouseEvents: function() {
                        b.verbose("Binding mouse events"), D.find(".track, .thumb, .inner").on("mousedown" + T, function(e) {
                            e.stopImmediatePropagation(), e.preventDefault(), b.event.down(e)
                        }), D.on("mousedown" + T, b.event.down), D.on("mouseenter" + T, function(e) {
                            k = !0
                        }), D.on("mouseleave" + T, function(e) {
                            k = !1
                        })
                    },
                    touchEvents: function() {
                        b.verbose("Binding touch events"), D.find(".track, .thumb, .inner").on("touchstart" + T, function(e) {
                            e.stopImmediatePropagation(), e.preventDefault(), b.event.down(e)
                        }), D.on("touchstart" + T, b.event.down)
                    },
                    slidingEvents: function() {
                        b.verbose("Binding page wide events while handle is being draged"), b.is.touch() ? (H(U).on("touchmove" + T, b.event.move), H(U).on("touchend" + T, b.event.up)) : (H(U).on("mousemove" + T, b.event.move), H(U).on("mouseup" + T, b.event.up))
                    },
                    windowEvents: function() {
                        R.on("resize" + T, b.event.resize)
                    }
                },
                unbind: {
                    events: function() {
                        D.find(".track, .thumb, .inner").off("mousedown" + T), D.find(".track, .thumb, .inner").off("touchstart" + T), D.off("mousedown" + T), D.off("mouseenter" + T), D.off("mouseleave" + T), D.off("touchstart" + T), D.off("keydown" + T), D.off("focusout" + T), H(U).off("keydown" + T + t, b.event.activateFocus), R.off("resize" + T)
                    },
                    slidingEvents: function() {
                        b.is.touch() ? (H(U).off("touchmove" + T), H(U).off("touchend" + T)) : (H(U).off("mousemove" + T), H(U).off("mouseup" + T))
                    }
                },
                event: {
                    down: function(e) {
                        if (e.preventDefault(), b.is.range()) {
                            var t = b.determine.eventPos(e),
                                n = b.determine.pos(t);
                            m = d.preventCrossover && b.is.range() && b.thumbVal === b.secondThumbVal ? (u = n, B) : b.determine.closestThumb(n)
                        }
                        b.is.disabled() || b.bind.slidingEvents()
                    },
                    move: function(e) {
                        e.preventDefault();
                        var t = b.determine.valueFromEvent(e);
                        if (m === B) {
                            var n = b.determine.eventPos(e),
                                i = b.determine.pos(n);
                            m = i < u ? s : l
                        }
                        if (0 == b.get.step() || b.is.smooth()) {
                            var o = b.thumbVal,
                                a = b.secondThumbVal,
                                r = b.determine.smoothValueFromEvent(e);
                            m.hasClass("second") ? (d.preventCrossover && b.is.range() && (t = Math.max(o, t), r = Math.max(o, r)), a = t) : (d.preventCrossover && b.is.range() && (t = Math.min(a, t), r = Math.min(a, r)), o = t), t = Math.abs(o - (a || 0)), b.update.position(r), d.onMove.call(A, t, o, a)
                        } else b.update.value(t, function(e, t, n) {
                            d.onMove.call(A, e, t, n)
                        })
                    },
                    up: function(e) {
                        e.preventDefault();
                        var t = b.determine.valueFromEvent(e);
                        b.set.value(t), b.unbind.slidingEvents()
                    },
                    keydown: function(e, t) {
                        if (d.preventCrossover && b.is.range() && b.thumbVal === b.secondThumbVal && (m = B), b.is.focused() && H(U).trigger(e), t || b.is.focused()) {
                            var n = b.determine.keyMovement(e);
                            if (0 != n) switch (e.preventDefault(), n) {
                                case 1:
                                    b.takeStep();
                                    break;
                                case 2:
                                    b.takeStep(b.get.multiplier());
                                    break;
                                case -1:
                                    b.backStep();
                                    break;
                                case -2:
                                    b.backStep(b.get.multiplier())
                            }
                        }
                    },
                    activateFocus: function(e) {
                        !b.is.focused() && b.is.hover() && 0 != b.determine.keyMovement(e) && (e.preventDefault(), b.event.keydown(e, !0), D.focus())
                    },
                    resize: function(e) {
                        F != b.get.gapRatio() && (b.setup.labels(), F = b.get.gapRatio())
                    }
                },
                resync: function() {
                    b.verbose("Resyncing thumb position based on value"), b.is.range() && b.update.position(b.secondThumbVal, l), b.update.position(b.thumbVal, s), b.setup.labels()
                },
                takeStep: function(e) {
                    e = e != B ? e : 1;
                    var t = b.get.step(),
                        n = b.get.currentThumbValue();
                    if (b.verbose("Taking a step"), 0 < t) b.set.value(n + t * e);
                    else if (0 == t) {
                        var i = b.get.precision(),
                            o = n + e / i;
                        b.set.value(Math.round(o * i) / i)
                    }
                },
                backStep: function(e) {
                    e = e != B ? e : 1;
                    var t = b.get.step(),
                        n = b.get.currentThumbValue();
                    if (b.verbose("Going back a step"), 0 < t) b.set.value(n - t * e);
                    else if (0 == t) {
                        var i = b.get.precision(),
                            o = n - e / i;
                        b.set.value(Math.round(o * i) / i)
                    }
                },
                is: {
                    range: function() {
                        return D.hasClass(d.className.range)
                    },
                    hover: function() {
                        return k
                    },
                    focused: function() {
                        return D.is(":focus")
                    },
                    disabled: function() {
                        return D.hasClass(d.className.disabled)
                    },
                    labeled: function() {
                        return D.hasClass(d.className.labeled)
                    },
                    reversed: function() {
                        return D.hasClass(d.className.reversed)
                    },
                    vertical: function() {
                        return D.hasClass(d.className.vertical)
                    },
                    smooth: function() {
                        return d.smooth || D.hasClass(d.className.smooth)
                    },
                    touch: function() {
                        return n
                    }
                },
                get: {
                    trackOffset: function() {
                        return b.is.vertical() ? e.offset().top : e.offset().left
                    },
                    trackLength: function() {
                        return b.is.vertical() ? e.height() : e.width()
                    },
                    trackLeft: function() {
                        return b.is.vertical() ? e.position().top : e.position().left
                    },
                    trackStartPos: function() {
                        return b.is.reversed() ? b.get.trackLeft() + b.get.trackLength() : b.get.trackLeft()
                    },
                    trackEndPos: function() {
                        return b.is.reversed() ? b.get.trackLeft() : b.get.trackLeft() + b.get.trackLength()
                    },
                    trackStartMargin: function() {
                        return (b.is.vertical() ? b.is.reversed() ? D.css("padding-bottom") : D.css("padding-top") : b.is.reversed() ? D.css("padding-right") : D.css("padding-left")) || "0px"
                    },
                    trackEndMargin: function() {
                        return (b.is.vertical() ? b.is.reversed() ? D.css("padding-top") : D.css("padding-bottom") : b.is.reversed() ? D.css("padding-left") : D.css("padding-right")) || "0px"
                    },
                    precision: function() {
                        var e, t = b.get.step();
                        if (0 != t) {
                            var n = String(t).split(".");
                            e = 2 == n.length ? n[1].length : 0
                        } else e = d.decimalPlaces;
                        var i = Math.pow(10, e);
                        return b.debug("Precision determined", i), i
                    },
                    min: function() {
                        return d.min
                    },
                    max: function() {
                        var e = b.get.step(),
                            t = b.get.min(),
                            n = 0 === e ? 0 : Math.floor((d.max - t) / e);
                        return 0 == (0 === e ? 0 : (d.max - t) % e) ? d.max : t + n * e
                    },
                    step: function() {
                        return d.step
                    },
                    numLabels: function() {
                        var e = Math.round((b.get.max() - b.get.min()) / b.get.step());
                        return b.debug("Determined that there should be " + e + " labels"), e
                    },
                    labelType: function() {
                        return d.labelType
                    },
                    label: function(e) {
                        if (w) return w(e);
                        switch (d.labelType) {
                            case d.labelTypes.number:
                                return Math.round((e * b.get.step() + b.get.min()) * c) / c;
                            case d.labelTypes.letter:
                                return z[e % 26];
                            default:
                                return e
                        }
                    },
                    value: function() {
                        return o
                    },
                    currentThumbValue: function() {
                        return m !== B && m.hasClass("second") ? b.secondThumbVal : b.thumbVal
                    },
                    thumbValue: function(e) {
                        switch (e) {
                            case "second":
                                if (b.is.range()) return b.secondThumbVal;
                                b.error(x.notrange);
                                break;
                            case "first":
                            default:
                                return b.thumbVal
                        }
                    },
                    multiplier: function() {
                        return d.pageMultiplier
                    },
                    thumbPosition: function(e) {
                        switch (e) {
                            case "second":
                                if (b.is.range()) return h;
                                b.error(x.notrange);
                                break;
                            case "first":
                            default:
                                return p
                        }
                    },
                    gapRatio: function() {
                        var e = 1;
                        if (d.autoAdjustLabels) {
                            var t = b.get.numLabels(),
                                n = b.get.trackLength(),
                                i = 1;
                            if (0 < n)
                                for (; n / t * i < d.labelDistance;) t % i || (e = i), i += 1
                        }
                        return e
                    }
                },
                determine: {
                    pos: function(e) {
                        return b.is.reversed() ? b.get.trackStartPos() - e + b.get.trackOffset() : e - b.get.trackOffset() - b.get.trackStartPos()
                    },
                    closestThumb: function(e) {
                        var t = parseFloat(b.determine.thumbPos(s)),
                            n = Math.abs(e - t),
                            i = parseFloat(b.determine.thumbPos(l)),
                            o = Math.abs(e - i);
                        return n === o && b.get.thumbValue() === b.get.min() ? l : n <= o ? s : l
                    },
                    closestThumbPos: function(e) {
                        var t = parseFloat(b.determine.thumbPos(s)),
                            n = Math.abs(e - t),
                            i = parseFloat(b.determine.thumbPos(l));
                        return n <= Math.abs(e - i) ? t : i
                    },
                    thumbPos: function(e) {
                        return b.is.vertical() ? b.is.reversed() ? e.css("bottom") : e.css("top") : b.is.reversed() ? e.css("right") : e.css("left")
                    },
                    positionFromValue: function(e) {
                        var t = b.get.min(),
                            n = b.get.max(),
                            i = (e = n < e ? n : e < t ? t : e, b.get.trackLength()),
                            o = (e - t) / (n - t),
                            a = Math.round(o * i);
                        return b.verbose("Determined position: " + a + " from value: " + e), a
                    },
                    positionFromRatio: function(e) {
                        var t = b.get.trackLength(),
                            n = b.get.step(),
                            i = Math.round(e * t);
                        return 0 == n ? i : Math.round(i / n) * n
                    },
                    valueFromEvent: function(e) {
                        var t = b.determine.eventPos(e),
                            n = b.determine.pos(t);
                        return t < b.get.trackOffset() ? b.is.reversed() ? b.get.max() : b.get.min() : t > b.get.trackOffset() + b.get.trackLength() ? b.is.reversed() ? b.get.min() : b.get.max() : b.determine.value(n)
                    },
                    smoothValueFromEvent: function(e) {
                        var t, n = b.get.min(),
                            i = b.get.max(),
                            o = b.get.trackLength(),
                            a = b.determine.eventPos(e) - b.get.trackOffset();
                        return t = (a = a < 0 ? 0 : o < a ? o : a) / o, b.is.reversed() && (t = 1 - t), t * (i - n) + n
                    },
                    eventPos: function(e) {
                        if (b.is.touch()) {
                            var t = e.changedTouches ? e : e.originalEvent,
                                n = t.changedTouches[0] ? t.changedTouches : t.touches,
                                i = n[0].pageY,
                                o = n[0].pageX;
                            return b.is.vertical() ? i : o
                        }
                        var a = e.pageY || e.originalEvent.pageY,
                            r = e.pageX || e.originalEvent.pageX;
                        return b.is.vertical() ? a : r
                    },
                    value: function(e) {
                        var t = b.is.reversed() ? b.get.trackEndPos() : b.get.trackStartPos(),
                            n = (e - t) / ((b.is.reversed() ? b.get.trackStartPos() : b.get.trackEndPos()) - t),
                            i = b.get.max() - b.get.min(),
                            o = b.get.step(),
                            a = n * i,
                            r = 0 == o ? a : Math.round(a / o) * o;
                        return b.verbose("Determined value based upon position: " + e + " as: " + a), a != r && b.verbose("Rounding value to closest step: " + r), r = Math.round(r * c) / c, b.verbose("Cutting off additional decimal places"), r + b.get.min()
                    },
                    keyMovement: function(e) {
                        var t = e.which,
                            n = b.is.vertical() ? b.is.reversed() ? C.downArrow : C.upArrow : C.downArrow,
                            i = b.is.vertical() ? b.is.reversed() ? C.upArrow : C.downArrow : C.upArrow,
                            o = b.is.vertical() ? C.leftArrow : b.is.reversed() ? C.rightArrow : C.leftArrow,
                            a = b.is.vertical() ? C.rightArrow : b.is.reversed() ? C.leftArrow : C.rightArrow;
                        return t == n || t == o ? -1 : t == i || t == a ? 1 : t == C.pageDown ? -2 : t == C.pageUp ? 2 : 0
                    }
                },
                handleNewValuePosition: function(e) {
                    var t = b.get.min(),
                        n = b.get.max();
                    return e <= t ? e = t : n <= e && (e = n), b.determine.positionFromValue(e)
                },
                set: {
                    value: function(e) {
                        b.update.value(e, function(e, t, n) {
                            a && !d.fireOnInit || (d.onChange.call(A, e, t, n), d.onMove.call(A, e, t, n))
                        })
                    },
                    rangeValue: function(e, t) {
                        if (b.is.range()) {
                            var n = b.get.min(),
                                i = b.get.max();
                            e <= n ? e = n : i <= e && (e = i), t <= n ? t = n : i <= t && (t = i), b.thumbVal = e, b.secondThumbVal = t, o = Math.abs(b.thumbVal - b.secondThumbVal), b.update.position(b.thumbVal, s), b.update.position(b.secondThumbVal, l), a && !d.fireOnInit || (d.onChange.call(A, o, b.thumbVal, b.secondThumbVal), d.onMove.call(A, o, b.thumbVal, b.secondThumbVal))
                        } else b.error(x.notrange)
                    },
                    position: function(e, t) {
                        var n = b.determine.value(e);
                        switch (t) {
                            case "second":
                                b.secondThumbVal = n, b.update.position(n, l);
                                break;
                            default:
                                b.thumbVal = n, b.update.position(n, s)
                        }
                        o = Math.abs(b.thumbVal - (b.secondThumbVal || 0)), b.set.value(o)
                    }
                },
                update: {
                    value: function(e, t) {
                        var n = b.get.min(),
                            i = b.get.max();
                        e <= n ? e = n : i <= e && (e = i), b.is.range() ? (m === B && (m = e <= b.get.currentThumbValue() ? s : l), m.hasClass("second") ? (d.preventCrossover && b.is.range() && (e = Math.max(b.thumbVal, e)), b.secondThumbVal = e) : (d.preventCrossover && b.is.range() && (e = Math.min(b.secondThumbVal, e)), b.thumbVal = e), o = Math.abs(b.thumbVal - b.secondThumbVal)) : (o = e, b.thumbVal = o), b.update.position(e), b.debug("Setting slider value to " + o), "function" == typeof t && t(o, b.thumbVal, b.secondThumbVal)
                    },
                    position: function(e, t) {
                        var n = b.handleNewValuePosition(e),
                            i = t != B ? t : m,
                            o = b.thumbVal || b.get.min(),
                            a = b.secondThumbVal || b.get.min();
                        b.is.range() && i.hasClass("second") ? (h = n, a = e) : (p = n, o = e);
                        var r, s, l = b.get.min(),
                            c = b.get.max(),
                            u = 100 * (e - l) / (c - l),
                            d = 100 * (Math.min(o, a) - l) / (c - l),
                            f = 100 * (1 - (Math.max(o, a) - l) / (c - l));
                        r = b.is.vertical() ? b.is.reversed() ? (s = {
                            bottom: "calc(" + u + "% - " + v + "px)",
                            top: "auto"
                        }, {
                            bottom: d + "%",
                            top: f + "%"
                        }) : (s = {
                            top: "calc(" + u + "% - " + v + "px)",
                            bottom: "auto"
                        }, {
                            top: d + "%",
                            bottom: f + "%"
                        }) : b.is.reversed() ? (s = {
                            right: "calc(" + u + "% - " + v + "px)",
                            left: "auto"
                        }, {
                            right: d + "%",
                            left: f + "%"
                        }) : (s = {
                            left: "calc(" + u + "% - " + v + "px)",
                            right: "auto"
                        }, {
                            left: d + "%",
                            right: f + "%"
                        }), i.css(s), g.css(r), b.debug("Setting slider position to " + n)
                    },
                    labelPosition: function(e, t) {
                        var n = b.get.trackStartMargin(),
                            i = b.get.trackEndMargin(),
                            o = b.is.vertical() ? b.is.reversed() ? "bottom" : "top" : b.is.reversed() ? "right" : "left",
                            a = b.is.reversed() && !b.is.vertical() ? " - " : " + ",
                            r = "(100% - " + n + " - " + i + ") * " + e;
                        t.css(o, "calc(" + r + a + n + ")")
                    }
                },
                goto: {
                    max: function() {
                        b.set.value(b.get.max())
                    },
                    min: function() {
                        b.set.value(b.get.min())
                    }
                },
                read: {
                    metadata: function() {
                        var e = {
                            thumbVal: D.data(f.thumbVal),
                            secondThumbVal: D.data(f.secondThumbVal)
                        };
                        e.thumbVal && (b.is.range() && e.secondThumbVal ? (b.debug("Current value set from metadata", e.thumbVal, e.secondThumbVal), b.set.rangeValue(e.thumbVal, e.secondThumbVal)) : (b.debug("Current value set from metadata", e.thumbVal), b.set.value(e.thumbVal)))
                    },
                    settings: function() {
                        !1 !== d.start && (b.is.range() ? (b.debug("Start position set from settings", d.start, d.end), b.set.rangeValue(d.start, d.end)) : (b.debug("Start position set from settings", d.start), b.set.value(d.start)))
                    }
                },
                setting: function(e, t) {
                    if (b.debug("Changing setting", e, t), H.isPlainObject(e)) H.extend(!0, d, e);
                    else {
                        if (t === B) return d[e];
                        H.isPlainObject(d[e]) ? H.extend(!0, d[e], t) : d[e] = t
                    }
                },
                internal: function(e, t) {
                    if (H.isPlainObject(e)) H.extend(!0, b, e);
                    else {
                        if (t === B) return b[e];
                        b[e] = t
                    }
                },
                debug: function() {
                    !d.silent && d.debug && (d.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), b.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !d.silent && d.verbose && d.debug && (d.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), b.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.silent || (b.error = Function.prototype.bind.call(console.error, console, d.name + ":"), b.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        d.performance && (n = (t = (new Date).getTime()) - (I || t), I = t, j.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: A,
                            "Execution Time": n
                        })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                    },
                    display: function() {
                        var e = d.name + ":",
                            n = 0;
                        I = !1, clearTimeout(b.performance.timer), H.each(j, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", M && (e += " '" + M + "'"), (console.group !== B || console.table !== B) && 0 < j.length && (console.groupCollapsed(e), console.table ? console.table(j) : H.each(j, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), j = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = E;
                    return e = e || V, t = A || t, "string" == typeof i && r !== B && (i = i.split(/[\. ]/), o = i.length - 1, H.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (H.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== B) return a = r[n], !1;
                            if (!H.isPlainObject(r[t]) || e == o) return r[t] !== B ? a = r[t] : b.error(x.method, i), !1;
                            r = r[t]
                        }
                    })), H.isFunction(a) ? n = a.apply(t, e) : a !== B && (n = a), H.isArray(O) ? O.push(n) : O !== B ? O = [O, n] : n !== B && (O = n), a
                }
            }, L ? (E === B && b.initialize(), b.invoke(q)) : (E !== B && E.invoke("destroy"), b.initialize())
        }), O !== B ? O : this
    }, H.fn.slider.settings = {
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        name: "Slider",
        namespace: "slider",
        error: {
            method: "The method you called is not defined.",
            notrange: "This slider is not a range slider"
        },
        metadata: {
            thumbVal: "thumbVal",
            secondThumbVal: "secondThumbVal"
        },
        min: 0,
        max: 20,
        step: 1,
        start: 0,
        end: 20,
        labelType: "number",
        showLabelTicks: !1,
        smooth: !1,
        autoAdjustLabels: !0,
        labelDistance: 100,
        preventCrossover: !0,
        fireOnInit: !1,
        decimalPlaces: 2,
        pageMultiplier: 2,
        selector: {},
        className: {
            reversed: "reversed",
            disabled: "disabled",
            labeled: "labeled",
            ticked: "ticked",
            vertical: "vertical",
            range: "range",
            smooth: "smooth"
        },
        keys: {
            pageUp: 33,
            pageDown: 34,
            leftArrow: 37,
            upArrow: 38,
            rightArrow: 39,
            downArrow: 40
        },
        labelTypes: {
            number: "number",
            letter: "letter"
        },
        onChange: function(e, t, n) {},
        onMove: function(e, t, n) {}
    }
}(jQuery, window, document),
function(k, e, t, T) {
    "use strict";
    k.isFunction = k.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.rating = function(g) {
        var p, h = k(this),
            v = h.selector || "",
            b = (new Date).getTime(),
            y = [],
            x = g,
            C = "string" == typeof x,
            w = [].slice.call(arguments, 1);
        return h.each(function() {
            var e, a, r = k.isPlainObject(g) ? k.extend(!0, {}, k.fn.rating.settings, g) : k.extend({}, k.fn.rating.settings),
                t = r.namespace,
                s = r.className,
                n = r.metadata,
                i = r.selector,
                l = r.cssVars,
                o = "." + t,
                c = "module-" + t,
                u = this,
                d = k(this).data(c),
                f = k(this),
                m = f.find(i.icon);
            a = {
                initialize: function() {
                    a.verbose("Initializing rating module", r), 0 === m.length && a.setup.layout(), r.interactive && !a.is.disabled() ? a.enable() : a.disable(), a.set.initialLoad(), a.set.rating(a.get.initialRating()), a.remove.initialLoad(), a.instantiate()
                },
                instantiate: function() {
                    a.verbose("Instantiating module", r), d = a, f.data(c, a)
                },
                destroy: function() {
                    a.verbose("Destroying previous instance", d), a.remove.events(), f.removeData(c)
                },
                refresh: function() {
                    m = f.find(i.icon)
                },
                setup: {
                    layout: function() {
                        var e = a.get.maxRating(),
                            t = a.get.icon(),
                            n = k.fn.rating.settings.templates.icon(e, t);
                        a.debug("Generating icon html dynamically"), f.html(n), a.refresh()
                    }
                },
                event: {
                    mouseenter: function() {
                        var e = k(this);
                        e.nextAll().removeClass(s.selected), f.addClass(s.selected), e.addClass(s.selected).prevAll().addClass(s.selected)
                    },
                    mouseleave: function() {
                        f.removeClass(s.selected), m.removeClass(s.selected)
                    },
                    click: function() {
                        var e = k(this),
                            t = a.get.rating(),
                            n = m.index(e) + 1;
                        ("auto" == r.clearable ? 1 === m.length : r.clearable) && t == n ? a.clearRating() : a.set.rating(n)
                    }
                },
                clearRating: function() {
                    a.debug("Clearing current rating"), a.set.rating(0)
                },
                bind: {
                    events: function() {
                        a.verbose("Binding events"), f.on("mouseenter" + o, i.icon, a.event.mouseenter).on("mouseleave" + o, i.icon, a.event.mouseleave).on("click" + o, i.icon, a.event.click)
                    }
                },
                remove: {
                    events: function() {
                        a.verbose("Removing events"), f.off(o)
                    },
                    initialLoad: function() {
                        e = !1
                    }
                },
                enable: function() {
                    a.debug("Setting rating to interactive mode"), a.bind.events(), f.removeClass(s.disabled)
                },
                disable: function() {
                    a.debug("Setting rating to read-only mode"), a.remove.events(), f.addClass(s.disabled)
                },
                is: {
                    initialLoad: function() {
                        return e
                    },
                    disabled: function() {
                        return f.hasClass(s.disabled)
                    }
                },
                get: {
                    icon: function() {
                        var e = f.data(n.icon);
                        return e && f.removeData(n.icon), e || r.icon
                    },
                    initialRating: function() {
                        return f.data(n.rating) !== T ? (f.removeData(n.rating), f.data(n.rating)) : r.initialRating
                    },
                    maxRating: function() {
                        return f.data(n.maxRating) !== T ? (f.removeData(n.maxRating), f.data(n.maxRating)) : r.maxRating
                    },
                    rating: function() {
                        var e = m.filter("." + s.active).length;
                        return a.verbose("Current rating retrieved", e), e
                    }
                },
                set: {
                    rating: function(e) {
                        var t = Math.floor(0 <= e - 1 ? e - 1 : 0),
                            n = m.eq(t),
                            i = e <= 1 ? n : n.next(),
                            o = e % 1 * 100;
                        f.removeClass(s.selected), m.removeClass(s.selected).removeClass(s.active).removeClass(s.partiallyActive), 0 < e && (a.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(s.active), n.next() && e % 1 != 0 && (i.addClass(s.partiallyActive).addClass(s.active), i.css(l.filledCustomPropName, o + "%"), "transparent" === i.css("backgroundColor") && i.removeClass(s.partiallyActive).removeClass(s.active))), a.is.initialLoad() || r.onRate.call(u, e)
                    },
                    initialLoad: function() {
                        e = !0
                    }
                },
                setting: function(e, t) {
                    if (a.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, r, e);
                    else {
                        if (t === T) return r[e];
                        k.isPlainObject(r[e]) ? k.extend(!0, r[e], t) : r[e] = t
                    }
                },
                internal: function(e, t) {
                    if (k.isPlainObject(e)) k.extend(!0, a, e);
                    else {
                        if (t === T) return a[e];
                        a[e] = t
                    }
                },
                debug: function() {
                    !r.silent && r.debug && (r.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), a.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !r.silent && r.verbose && r.debug && (r.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), a.verbose.apply(console, arguments)))
                },
                error: function() {
                    r.silent || (a.error = Function.prototype.bind.call(console.error, console, r.name + ":"), a.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        r.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: u,
                            "Execution Time": n
                        })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                    },
                    display: function() {
                        var e = r.name + ":",
                            n = 0;
                        b = !1, clearTimeout(a.performance.timer), k.each(y, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", v && (e += " '" + v + "'"), 1 < h.length && (e += " (" + h.length + ")"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), y = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = d;
                    return e = e || w, t = u || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (k.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== T) return a = r[n], !1;
                            if (!k.isPlainObject(r[t]) || e == o) return r[t] !== T && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), k.isFunction(a) ? n = a.apply(t, e) : a !== T && (n = a), Array.isArray(p) ? p.push(n) : p !== T ? p = [p, n] : n !== T && (p = n), a
                }
            }, C ? (d === T && a.initialize(), a.invoke(x)) : (d !== T && d.invoke("destroy"), a.initialize())
        }), p !== T ? p : this
    }, k.fn.rating.settings = {
        name: "Rating",
        namespace: "rating",
        icon: "star",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        initialRating: 0,
        interactive: !0,
        maxRating: 4,
        clearable: "auto",
        fireOnInit: !1,
        onRate: function(e) {},
        error: {
            method: "The method you called is not defined",
            noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
        },
        metadata: {
            rating: "rating",
            maxRating: "maxRating",
            icon: "icon"
        },
        className: {
            active: "active",
            disabled: "disabled",
            selected: "selected",
            loading: "loading",
            partiallyActive: "partial"
        },
        cssVars: {
            filledCustomPropName: "--full"
        },
        selector: {
            icon: ".icon"
        },
        templates: {
            icon: function(e, t) {
                for (var n = 1, i = ""; n <= e;) i += '<i class="' + t + ' icon"></i>', n++;
                return i
            }
        }
    }
}(jQuery, window, document),
function(F, P, O, R) {
    "use strict";
    F.isFunction = F.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, P = void 0 !== P && P.Math == Math ? P : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.search = function(x) {
        var C, w = F(this),
            k = w.selector || "",
            T = (new Date).getTime(),
            S = [],
            D = x,
            A = "string" == typeof D,
            E = [].slice.call(arguments, 1);
        return F(this).each(function() {
            var f, u = F.isPlainObject(x) ? F.extend(!0, {}, F.fn.search.settings, x) : F.extend({}, F.fn.search.settings),
                m = u.className,
                c = u.metadata,
                i = u.regExp,
                a = u.fields,
                g = u.selector,
                d = u.error,
                e = u.namespace,
                o = "." + e,
                t = e + "-module",
                p = F(this),
                h = p.find(g.prompt),
                n = p.find(g.searchButton),
                r = p.find(g.results),
                s = p.find(g.result),
                v = (p.find(g.category), this),
                l = p.data(t),
                b = !1,
                y = !1;
            f = {
                initialize: function() {
                    f.verbose("Initializing module"), f.get.settings(), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate()
                },
                instantiate: function() {
                    f.verbose("Storing instance of module", f), l = f, p.data(t, f)
                },
                destroy: function() {
                    f.verbose("Destroying instance"), p.off(o).removeData(t)
                },
                refresh: function() {
                    f.debug("Refreshing selector cache"), h = p.find(g.prompt), n = p.find(g.searchButton), p.find(g.category), r = p.find(g.results), s = p.find(g.result)
                },
                refreshResults: function() {
                    r = p.find(g.results), s = p.find(g.result)
                },
                bind: {
                    events: function() {
                        f.verbose("Binding events to search"), u.automatic && (p.on(f.get.inputEvent() + o, g.prompt, f.event.input), h.attr("autocomplete", "off")), p.on("focus" + o, g.prompt, f.event.focus).on("blur" + o, g.prompt, f.event.blur).on("keydown" + o, g.prompt, f.handleKeyboard).on("click" + o, g.searchButton, f.query).on("mousedown" + o, g.results, f.event.result.mousedown).on("mouseup" + o, g.results, f.event.result.mouseup).on("click" + o, g.result, f.event.result.click)
                    }
                },
                determine: {
                    searchFields: function() {
                        x && x.searchFields !== R && (u.searchFields = x.searchFields)
                    }
                },
                event: {
                    input: function() {
                        u.searchDelay ? (clearTimeout(f.timer), f.timer = setTimeout(function() {
                            f.is.focused() && f.query()
                        }, u.searchDelay)) : f.query()
                    },
                    focus: function() {
                        f.set.focus(), u.searchOnFocus && f.has.minimumCharacters() && f.query(function() {
                            f.can.show() && f.showResults()
                        })
                    },
                    blur: function(e) {
                        function t() {
                            f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, u.hideDelay)
                        }
                        var n = O.activeElement === this;
                        n || (y = !1, f.resultsClicked ? (f.debug("Determining if user action caused search to close"), p.one("click.close" + o, g.results, function(e) {
                            f.is.inMessage(e) || b ? h.focus() : (b = !1, f.is.animating() || f.is.hidden() || t())
                        })) : (f.debug("Input blurred without user action, closing results"), t()))
                    },
                    result: {
                        mousedown: function() {
                            f.resultsClicked = !0
                        },
                        mouseup: function() {
                            f.resultsClicked = !1
                        },
                        click: function(e) {
                            f.debug("Search result selected");
                            var t = F(this),
                                n = t.find(g.title).eq(0),
                                i = t.is("a[href]") ? t : t.find("a[href]").eq(0),
                                o = i.attr("href") || !1,
                                a = i.attr("target") || !1,
                                r = 0 < n.length && n.text(),
                                s = f.get.results(),
                                l = t.data(c.result) || f.get.result(r, s);
                            if (r && f.set.value(r), F.isFunction(u.onSelect) && !1 === u.onSelect.call(v, l, s)) return f.debug("Custom onSelect callback cancelled default select action"), void(b = !0);
                            f.hideResults(), o && (f.verbose("Opening search link found in result", i), "_blank" == a || e.ctrlKey ? P.open(o) : P.location.href = o)
                        }
                    }
                },
                handleKeyboard: function(e) {
                    var t, n = p.find(g.result),
                        i = p.find(g.category),
                        o = n.filter("." + m.active),
                        a = n.index(o),
                        r = n.length,
                        s = 0 < o.length,
                        l = e.which,
                        c = 13,
                        u = 38,
                        d = 40;
                    if (l == 27 && (f.verbose("Escape key pressed, blurring search field"), f.hideResults(), y = !0), f.is.visible())
                        if (l == c) {
                            if (f.verbose("Enter key pressed, selecting active result"), 0 < n.filter("." + m.active).length) return f.event.result.click.call(n.filter("." + m.active), e), e.preventDefault(), !1
                        } else l == u && s ? (f.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), e.preventDefault()) : l == d && (f.verbose("Down key pressed, changing active result"), t = r <= a + 1 ? a : a + 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), e.preventDefault());
                    else l == c && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), h.one("keyup", f.remove.buttonFocus))
                },
                setup: {
                    api: function(t, n) {
                        var e = {
                            debug: u.debug,
                            on: !1,
                            cache: u.cache,
                            action: "search",
                            urlData: {
                                query: t
                            },
                            onSuccess: function(e) {
                                f.parse.response.call(v, e, t), n()
                            },
                            onFailure: function() {
                                f.displayMessage(d.serverError), n()
                            },
                            onAbort: function(e) {},
                            onError: f.error
                        };
                        F.extend(!0, e, u.apiSettings), f.verbose("Setting up API request", e), p.api(e)
                    }
                },
                can: {
                    useAPI: function() {
                        return F.fn.api !== R
                    },
                    show: function() {
                        return f.is.focused() && !f.is.visible() && !f.is.empty()
                    },
                    transition: function() {
                        return u.transition && F.fn.transition !== R && p.transition("is supported")
                    }
                },
                is: {
                    animating: function() {
                        return r.hasClass(m.animating)
                    },
                    hidden: function() {
                        return r.hasClass(m.hidden)
                    },
                    inMessage: function(e) {
                        if (e.target) {
                            var t = F(e.target);
                            return F.contains(O.documentElement, e.target) && 0 < t.closest(g.message).length
                        }
                    },
                    empty: function() {
                        return "" === r.html()
                    },
                    visible: function() {
                        return 0 < r.filter(":visible").length
                    },
                    focused: function() {
                        return 0 < h.filter(":focus").length
                    }
                },
                get: {
                    settings: function() {
                        F.isPlainObject(x) && x.searchFullText && (u.fullTextSearch = x.searchFullText, f.error(u.error.oldSearchSyntax, v)), u.ignoreDiacritics && !String.prototype.normalize && (u.ignoreDiacritics = !1, f.error(d.noNormalize, v))
                    },
                    inputEvent: function() {
                        var e = h[0];
                        return e !== R && e.oninput !== R ? "input" : e !== R && e.onpropertychange !== R ? "propertychange" : "keyup"
                    },
                    value: function() {
                        return h.val()
                    },
                    results: function() {
                        return p.data(c.results)
                    },
                    result: function(n, e) {
                        var i = !1;
                        return n = n !== R ? n : f.get.value(), e = e !== R ? e : f.get.results(), "category" === u.type ? (f.debug("Finding result that matches", n), F.each(e, function(e, t) {
                            if (Array.isArray(t.results) && (i = f.search.object(n, t.results)[0])) return !1
                        })) : (f.debug("Finding result in results object", n), i = f.search.object(n, e)[0]), i || !1
                    }
                },
                select: {
                    firstResult: function() {
                        f.verbose("Selecting first result"), s.first().addClass(m.active)
                    }
                },
                set: {
                    focus: function() {
                        p.addClass(m.focus)
                    },
                    loading: function() {
                        p.addClass(m.loading)
                    },
                    value: function(e) {
                        f.verbose("Setting search input value", e), h.val(e)
                    },
                    type: function(e) {
                        e = e || u.type, "category" == u.type && p.addClass(u.type)
                    },
                    buttonPressed: function() {
                        n.addClass(m.pressed)
                    }
                },
                remove: {
                    loading: function() {
                        p.removeClass(m.loading)
                    },
                    focus: function() {
                        p.removeClass(m.focus)
                    },
                    buttonPressed: function() {
                        n.removeClass(m.pressed)
                    },
                    diacritics: function(e) {
                        return u.ignoreDiacritics ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e
                    }
                },
                query: function(e) {
                    e = F.isFunction(e) ? e : function() {};
                    var t = f.get.value(),
                        n = f.read.cache(t);
                    e = e || function() {}, f.has.minimumCharacters() ? (n ? (f.debug("Reading result from cache", t), f.save.results(n.results), f.addResults(n.html), f.inject.id(n.results), e()) : (f.debug("Querying for", t), F.isPlainObject(u.source) || Array.isArray(u.source) ? (f.search.local(t), e()) : f.can.useAPI() ? f.search.remote(t, e) : (f.error(d.source), e())), u.onSearchQuery.call(v, t)) : f.hideResults()
                },
                search: {
                    local: function(e) {
                        var t, n = f.search.object(e, u.source);
                        f.set.loading(), f.save.results(n), f.debug("Returned full local search results", n), 0 < u.maxResults && (f.debug("Using specified max results", n), n = n.slice(0, u.maxResults)), "category" == u.type && (n = f.create.categoryResults(n)), t = f.generateResults({
                            results: n
                        }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, {
                            html: t,
                            results: n
                        })
                    },
                    remote: function(e, t) {
                        t = F.isFunction(t) ? t : function() {}, p.api("is loading") && p.api("abort"), f.setup.api(e, t), p.api("query")
                    },
                    object: function(o, t, e) {
                        o = f.remove.diacritics(String(o));

                        function a(e, t) {
                            var n = -1 == F.inArray(t, r),
                                i = -1 == F.inArray(t, l),
                                o = -1 == F.inArray(t, s);
                            n && i && o && e.push(t)
                        }
                        var r = [],
                            s = [],
                            l = [],
                            n = o.replace(i.escape, "\\$&"),
                            c = new RegExp(i.beginsWith + n, "i");
                        return t = t || u.source, e = e !== R ? e : u.searchFields, Array.isArray(e) || (e = [e]), t === R || !1 === t ? (f.error(d.source), []) : (F.each(e, function(e, i) {
                            F.each(t, function(e, t) {
                                var n;
                                "string" != typeof t[i] && "number" != typeof t[i] || (-1 !== (n = "string" == typeof t[i] ? f.remove.diacritics(t[i]) : t[i].toString()).search(c) ? a(r, t) : "exact" === u.fullTextSearch && f.exactSearch(o, n) ? a(s, t) : 1 == u.fullTextSearch && f.fuzzySearch(o, n) && a(l, t))
                            })
                        }), F.merge(s, l), F.merge(r, s), r)
                    }
                },
                exactSearch: function(e, t) {
                    return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e)
                },
                fuzzySearch: function(e, t) {
                    var n = t.length,
                        i = e.length;
                    if ("string" != typeof e) return !1;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
                    if (i === n) return e === t;
                    e: for (var o = 0, a = 0; o < i; o++) {
                        for (var r = e.charCodeAt(o); a < n;)
                            if (t.charCodeAt(a++) === r) continue e;
                        return !1
                    }
                    return !0
                },
                parse: {
                    response: function(e, t) {
                        if (Array.isArray(e)) {
                            var n = {};
                            n[a.results] = e, e = n
                        }
                        var i = f.generateResults(e);
                        f.verbose("Parsing server response", e), e !== R && t !== R && e[a.results] !== R && (f.addResults(i), f.inject.id(e[a.results]), f.write.cache(t, {
                            html: i,
                            results: e[a.results]
                        }), f.save.results(e[a.results]))
                    }
                },
                cancel: {
                    query: function() {
                        f.can.useAPI() && p.api("abort")
                    }
                },
                has: {
                    minimumCharacters: function() {
                        return f.get.value().length >= u.minCharacters
                    },
                    results: function() {
                        return 0 !== r.length && "" != r.html()
                    }
                },
                clear: {
                    cache: function(e) {
                        var t = p.data(c.cache);
                        e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], p.data(c.cache, t)) : (f.debug("Clearing cache", e), p.removeData(c.cache))
                    }
                },
                read: {
                    cache: function(e) {
                        var t = p.data(c.cache);
                        return !!u.cache && (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== R && t[e])
                    }
                },
                create: {
                    categoryResults: function(e) {
                        var n = {};
                        return F.each(e, function(e, t) {
                            t.category && (n[t.category] === R ? (f.verbose("Creating new category of results", t.category), n[t.category] = {
                                name: t.category,
                                results: [t]
                            }) : n[t.category].results.push(t))
                        }), n
                    },
                    id: function(e, t) {
                        var n, i = e + 1;
                        return t !== R ? (n = String.fromCharCode(97 + t) + i, f.verbose("Creating category result id", n)) : (n = i, f.verbose("Creating result id", n)), n
                    },
                    results: function() {
                        0 === r.length && (r = F("<div />").addClass(m.results).appendTo(p))
                    }
                },
                inject: {
                    result: function(e, t, n) {
                        f.verbose("Injecting result into results");
                        var i = n !== R ? r.children().eq(n).children(g.results).first().children(g.result).eq(t) : r.children(g.result).eq(t);
                        f.verbose("Injecting results metadata", i), i.data(c.result, e)
                    },
                    id: function(e) {
                        f.debug("Injecting unique ids into results");
                        var n = 0,
                            i = 0;
                        return "category" === u.type ? F.each(e, function(e, t) {
                            0 < t.results.length && (i = 0, F.each(t.results, function(e, t) {
                                t.id === R && (t.id = f.create.id(i, n)), f.inject.result(t, i, n), i++
                            }), n++)
                        }) : F.each(e, function(e, t) {
                            t.id === R && (t.id = f.create.id(i)), f.inject.result(t, i), i++
                        }), e
                    }
                },
                save: {
                    results: function(e) {
                        f.verbose("Saving current search results to metadata", e), p.data(c.results, e)
                    }
                },
                write: {
                    cache: function(e, t) {
                        var n = p.data(c.cache) !== R ? p.data(c.cache) : {};
                        u.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, p.data(c.cache, n))
                    }
                },
                addResults: function(e) {
                    if (F.isFunction(u.onResultsAdd) && !1 === u.onResultsAdd.call(r, e)) return f.debug("onResultsAdd callback cancelled default action"), !1;
                    e ? (r.html(e), f.refreshResults(), u.selectFirstResult && f.select.firstResult(), f.showResults()) : f.hideResults(function() {
                        r.empty()
                    })
                },
                showResults: function(e) {
                    e = F.isFunction(e) ? e : function() {}, y || !f.is.visible() && f.has.results() && (f.can.transition() ? (f.debug("Showing results with css animations"), r.transition({
                        animation: u.transition + " in",
                        debug: u.debug,
                        verbose: u.verbose,
                        duration: u.duration,
                        onComplete: function() {
                            e()
                        },
                        queue: !0
                    })) : (f.debug("Showing results with javascript"), r.stop().fadeIn(u.duration, u.easing)), u.onResultsOpen.call(r))
                },
                hideResults: function(e) {
                    e = F.isFunction(e) ? e : function() {}, f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), r.transition({
                        animation: u.transition + " out",
                        debug: u.debug,
                        verbose: u.verbose,
                        duration: u.duration,
                        onComplete: function() {
                            e()
                        },
                        queue: !0
                    })) : (f.debug("Hiding results with javascript"), r.stop().fadeOut(u.duration, u.easing)), u.onResultsClose.call(r))
                },
                generateResults: function(e) {
                    f.debug("Generating html from response", e);
                    var t = u.templates[u.type],
                        n = F.isPlainObject(e[a.results]) && !F.isEmptyObject(e[a.results]),
                        i = Array.isArray(e[a.results]) && 0 < e[a.results].length,
                        o = "";
                    return n || i ? (0 < u.maxResults && (n ? "standard" == u.type && f.error(d.maxResults) : e[a.results] = e[a.results].slice(0, u.maxResults)), F.isFunction(t) ? o = t(e, a, u.preserveHTML) : f.error(d.noTemplate, !1)) : u.showNoResults && (o = f.displayMessage(d.noResults, "empty", d.noResultsHeader)), u.onResults.call(v, e), o
                },
                displayMessage: function(e, t, n) {
                    return t = t || "standard", f.debug("Displaying message", e, t, n), f.addResults(u.templates.message(e, t, n)), u.templates.message(e, t, n)
                },
                setting: function(e, t) {
                    if (F.isPlainObject(e)) F.extend(!0, u, e);
                    else {
                        if (t === R) return u[e];
                        u[e] = t
                    }
                },
                internal: function(e, t) {
                    if (F.isPlainObject(e)) F.extend(!0, f, e);
                    else {
                        if (t === R) return f[e];
                        f[e] = t
                    }
                },
                debug: function() {
                    !u.silent && u.debug && (u.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), f.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !u.silent && u.verbose && u.debug && (u.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), f.verbose.apply(console, arguments)))
                },
                error: function() {
                    u.silent || (f.error = Function.prototype.bind.call(console.error, console, u.name + ":"), f.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        u.performance && (n = (t = (new Date).getTime()) - (T || t), T = t, S.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: v,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    },
                    display: function() {
                        var e = u.name + ":",
                            n = 0;
                        T = !1, clearTimeout(f.performance.timer), F.each(S, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", k && (e += " '" + k + "'"), 1 < w.length && (e += " (" + w.length + ")"), (console.group !== R || console.table !== R) && 0 < S.length && (console.groupCollapsed(e), console.table ? console.table(S) : F.each(S, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), S = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = l;
                    return e = e || E, t = v || t, "string" == typeof i && r !== R && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (F.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== R) return a = r[n], !1;
                            if (!F.isPlainObject(r[t]) || e == o) return r[t] !== R && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), F.isFunction(a) ? n = a.apply(t, e) : a !== R && (n = a), Array.isArray(C) ? C.push(n) : C !== R ? C = [C, n] : n !== R && (C = n), a
                }
            }, A ? (l === R && f.initialize(), f.invoke(D)) : (l !== R && l.invoke("destroy"), f.initialize())
        }), C !== R ? C : this
    }, F.fn.search.settings = {
        name: "Search",
        namespace: "search",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        type: "standard",
        minCharacters: 1,
        selectFirstResult: !1,
        apiSettings: !1,
        source: !1,
        searchOnFocus: !0,
        searchFields: ["id", "title", "description"],
        displayField: "",
        fullTextSearch: "exact",
        ignoreDiacritics: !1,
        automatic: !0,
        hideDelay: 0,
        searchDelay: 200,
        maxResults: 7,
        cache: !0,
        showNoResults: !0,
        preserveHTML: !0,
        transition: "scale",
        duration: 200,
        easing: "easeOutExpo",
        onSelect: !1,
        onResultsAdd: !1,
        onSearchQuery: function(e) {},
        onResults: function(e) {},
        onResultsOpen: function() {},
        onResultsClose: function() {},
        className: {
            animating: "animating",
            active: "active",
            empty: "empty",
            focus: "focus",
            hidden: "hidden",
            loading: "loading",
            results: "results",
            pressed: "down"
        },
        error: {
            source: "Cannot search. No source used, and Semantic API module was not included",
            noResultsHeader: "No Results",
            noResults: "Your search returned no results",
            logging: "Error in debug logging, exiting.",
            noEndpoint: "No search endpoint was specified",
            noTemplate: "A valid template name was not specified.",
            oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
            serverError: "There was an issue querying the server.",
            maxResults: "Results must be an array to use maxResults setting",
            method: "The method you called is not defined.",
            noNormalize: '"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'
        },
        metadata: {
            cache: "cache",
            results: "results",
            result: "result"
        },
        regExp: {
            escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            beginsWith: "(?:s|^)"
        },
        fields: {
            categories: "results",
            categoryName: "name",
            categoryResults: "results",
            description: "description",
            image: "image",
            price: "price",
            results: "results",
            title: "title",
            url: "url",
            action: "action",
            actionText: "text",
            actionURL: "url"
        },
        selector: {
            prompt: ".prompt",
            searchButton: ".search.button",
            results: ".results",
            message: ".results > .message",
            category: ".category",
            result: ".result",
            title: ".title, .name"
        },
        templates: {
            escape: function(e, t) {
                if (t) return e;
                var n = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                };
                return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                    return n[e]
                }) : e
            },
            message: function(e, t, n) {
                var i = "";
                return e !== R && t !== R && (i += '<div class="message ' + t + '">', n && (i += '<div class="header">' + n + "</div>"), i += ' <div class="description">' + e + "</div>", i += "</div>"), i
            },
            category: function(e, n, i) {
                var o = "",
                    a = F.fn.search.settings.templates.escape;
                return e[n.categoryResults] !== R && (F.each(e[n.categoryResults], function(e, t) {
                    t[n.results] !== R && 0 < t.results.length && (o += '<div class="category">', t[n.categoryName] !== R && (o += '<div class="name">' + a(t[n.categoryName], i) + "</div>"), o += '<div class="results">', F.each(t.results, function(e, t) {
                        t[n.url] ? o += '<a class="result" href="' + t[n.url].replace(/"/g, "") + '">' : o += '<a class="result">', t[n.image] !== R && (o += '<div class="image"> <img src="' + t[n.image].replace(/"/g, "") + '"></div>'), o += '<div class="content">', t[n.price] !== R && (o += '<div class="price">' + a(t[n.price], i) + "</div>"), t[n.title] !== R && (o += '<div class="title">' + a(t[n.title], i) + "</div>"), t[n.description] !== R && (o += '<div class="description">' + a(t[n.description], i) + "</div>"), o += "</div>", o += "</a>"
                    }), o += "</div>", o += "</div>")
                }), e[n.action] && (!1 === n.actionURL ? o += '<div class="action">' + a(e[n.action][n.actionText], i) + "</div>" : o += '<a href="' + e[n.action][n.actionURL].replace(/"/g, "") + '" class="action">' + a(e[n.action][n.actionText], i) + "</a>"), o)
            },
            standard: function(e, n, i) {
                var o = "",
                    a = F.fn.search.settings.templates.escape;
                return e[n.results] !== R && (F.each(e[n.results], function(e, t) {
                    t[n.url] ? o += '<a class="result" href="' + t[n.url].replace(/"/g, "") + '">' : o += '<a class="result">', t[n.image] !== R && (o += '<div class="image"> <img src="' + t[n.image].replace(/"/g, "") + '"></div>'), o += '<div class="content">', t[n.price] !== R && (o += '<div class="price">' + a(t[n.price], i) + "</div>"), t[n.title] !== R && (o += '<div class="title">' + a(t[n.title], i) + "</div>"), t[n.description] !== R && (o += '<div class="description">' + a(t[n.description], i) + "</div>"), o += "</div>", o += "</a>"
                }), e[n.action] && (!1 === n.actionURL ? o += '<div class="action">' + a(e[n.action][n.actionText], i) + "</div>" : o += '<a href="' + e[n.action][n.actionURL].replace(/"/g, "") + '" class="action">' + a(e[n.action][n.actionText], i) + "</a>"), o)
            }
        }
    }
}(jQuery, window, document),
function(A, e, E, F) {
    "use strict";
    A.isFunction = A.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), A.fn.shape = function(b) {
        var y, x = A(this),
            C = (new Date).getTime(),
            w = [],
            k = b,
            T = "string" == typeof k,
            S = [].slice.call(arguments, 1),
            D = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
                setTimeout(e, 0)
            };
        return x.each(function() {
            var i, o, r, t = x.selector || "",
                s = A.isPlainObject(b) ? A.extend(!0, {}, A.fn.shape.settings, b) : A.extend({}, A.fn.shape.settings),
                e = s.namespace,
                l = s.selector,
                n = s.error,
                c = s.className,
                a = "." + e,
                u = "module-" + e,
                d = A(this),
                f = d.find(">" + l.sides),
                m = f.find(">" + l.side),
                g = !1,
                p = this,
                h = d.data(u);
            if (r = {
                    initialize: function() {
                        r.verbose("Initializing module for", p), r.set.defaultSide(), r.instantiate()
                    },
                    instantiate: function() {
                        r.verbose("Storing instance of module", r), h = r, d.data(u, h)
                    },
                    destroy: function() {
                        r.verbose("Destroying previous module for", p), d.removeData(u).off(a)
                    },
                    refresh: function() {
                        r.verbose("Refreshing selector cache for", p), d = A(p), f = A(this).find(l.sides), m = A(this).find(l.side)
                    },
                    repaint: function() {
                        r.verbose("Forcing repaint event");
                        (f[0] || E.createElement("div")).offsetWidth
                    },
                    animate: function(e, t) {
                        r.verbose("Animating box with properties", e), t = t || function(e) {
                            r.verbose("Executing animation callback"), e !== F && e.stopPropagation(), r.reset(), r.set.active()
                        }, s.beforeChange.call(o[0]), r.get.transitionEvent() ? (r.verbose("Starting CSS animation"), d.addClass(c.animating), f.css(e).one(r.get.transitionEvent(), t), r.set.duration(s.duration), D(function() {
                            d.addClass(c.animating), i.addClass(c.hidden)
                        })) : t()
                    },
                    queue: function(e) {
                        r.debug("Queueing animation of", e), f.one(r.get.transitionEvent(), function() {
                            r.debug("Executing queued animation"), setTimeout(function() {
                                d.shape(e)
                            }, 0)
                        })
                    },
                    reset: function() {
                        r.verbose("Animating states reset"), d.removeClass(c.animating).attr("style", "").removeAttr("style"), f.attr("style", "").removeAttr("style"), m.attr("style", "").removeAttr("style").removeClass(c.hidden), o.removeClass(c.animating).attr("style", "").removeAttr("style")
                    },
                    is: {
                        complete: function() {
                            return m.filter("." + c.active)[0] == o[0]
                        },
                        animating: function() {
                            return d.hasClass(c.animating)
                        },
                        hidden: function() {
                            return 0 < d.closest(":hidden").length
                        }
                    },
                    set: {
                        defaultSide: function() {
                            i = m.filter("." + s.className.active), o = 0 < i.next(l.side).length ? i.next(l.side) : m.first(), g = !1, r.verbose("Active side set to", i), r.verbose("Next side set to", o)
                        },
                        duration: function(e) {
                            e = "number" == typeof(e = e || s.duration) ? e + "ms" : e, r.verbose("Setting animation duration", e), !s.duration && 0 !== s.duration || f.add(m).css({
                                "-webkit-transition-duration": e,
                                "-moz-transition-duration": e,
                                "-ms-transition-duration": e,
                                "-o-transition-duration": e,
                                "transition-duration": e
                            })
                        },
                        currentStageSize: function() {
                            var e = m.filter("." + s.className.active),
                                t = e.outerWidth(!0),
                                n = e.outerHeight(!0);
                            d.css({
                                width: t,
                                height: n
                            })
                        },
                        stageSize: function() {
                            var e = d.clone().addClass(c.loading),
                                t = e.find(">" + l.sides + ">" + l.side),
                                n = t.filter("." + s.className.active),
                                i = g ? t.eq(g) : 0 < n.next(l.side).length ? n.next(l.side) : t.first(),
                                o = "next" === s.width ? i.outerWidth(!0) : "initial" === s.width ? d.width() : s.width,
                                a = "next" === s.height ? i.outerHeight(!0) : "initial" === s.height ? d.height() : s.height;
                            n.removeClass(c.active), i.addClass(c.active), e.insertAfter(d), e.remove(), "auto" !== s.width && (d.css("width", o + s.jitter), r.verbose("Specifying width during animation", o)), "auto" !== s.height && (d.css("height", a + s.jitter), r.verbose("Specifying height during animation", a))
                        },
                        nextSide: function(e) {
                            g = e, o = m.filter(e), g = m.index(o), 0 === o.length && (r.set.defaultSide(), r.error(n.side)), r.verbose("Next side manually set to", o)
                        },
                        active: function() {
                            r.verbose("Setting new side to active", o), m.removeClass(c.active), o.addClass(c.active), s.onChange.call(o[0]), r.set.defaultSide()
                        }
                    },
                    flip: {
                        to: function(e, t) {
                            if (r.is.hidden()) r.debug("Module not visible", o);
                            else if (!r.is.complete() || r.is.animating() || s.allowRepeats) {
                                var n = r.get.transform[e]();
                                r.is.animating() ? r.queue("flip " + e) : (r.debug("Flipping " + e, o), r.set.stageSize(), r.stage[t](), r.animate(n))
                            } else r.debug("Side already visible", o)
                        },
                        up: function() {
                            r.flip.to("up", "above")
                        },
                        down: function() {
                            r.flip.to("down", "below")
                        },
                        left: function() {
                            r.flip.to("left", "left")
                        },
                        right: function() {
                            r.flip.to("right", "right")
                        },
                        over: function() {
                            r.flip.to("over", "behind")
                        },
                        back: function() {
                            r.flip.to("back", "behind")
                        }
                    },
                    get: {
                        transform: {
                            up: function() {
                                var e = i.outerHeight(!0) / 2;
                                return {
                                    transform: "translateY(" + (o.outerHeight(!0) - e) + "px) translateZ(-" + e + "px) rotateX(-90deg)"
                                }
                            },
                            down: function() {
                                var e = i.outerHeight(!0) / 2;
                                return {
                                    transform: "translateY(-" + e + "px) translateZ(-" + e + "px) rotateX(90deg)"
                                }
                            },
                            left: function() {
                                var e = i.outerWidth(!0) / 2;
                                return {
                                    transform: "translateX(" + (o.outerWidth(!0) - e) + "px) translateZ(-" + e + "px) rotateY(90deg)"
                                }
                            },
                            right: function() {
                                var e = i.outerWidth(!0) / 2;
                                return {
                                    transform: "translateX(-" + e + "px) translateZ(-" + e + "px) rotateY(-90deg)"
                                }
                            },
                            over: function() {
                                return {
                                    transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(180deg)"
                                }
                            },
                            back: function() {
                                return {
                                    transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(-180deg)"
                                }
                            }
                        },
                        transitionEvent: function() {
                            var e, t = E.createElement("element"),
                                n = {
                                    transition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    MozTransition: "transitionend",
                                    WebkitTransition: "webkitTransitionEnd"
                                };
                            for (e in n)
                                if (t.style[e] !== F) return n[e]
                        },
                        nextSide: function() {
                            return 0 < i.next(l.side).length ? i.next(l.side) : m.first()
                        }
                    },
                    stage: {
                        above: function() {
                            var e = {
                                origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
                                depth: {
                                    active: o.outerHeight(!0) / 2,
                                    next: i.outerHeight(!0) / 2
                                }
                            };
                            r.verbose("Setting the initial animation position as above", o, e), i.css({
                                transform: "rotateX(0deg)"
                            }), o.addClass(c.animating).css({
                                top: e.origin + "px",
                                transform: "rotateX(90deg) translateZ(" + e.depth.next + "px) translateY(-" + e.depth.active + "px)"
                            })
                        },
                        below: function() {
                            var e = {
                                origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
                                depth: {
                                    active: o.outerHeight(!0) / 2,
                                    next: i.outerHeight(!0) / 2
                                }
                            };
                            r.verbose("Setting the initial animation position as below", o, e), i.css({
                                transform: "rotateX(0deg)"
                            }), o.addClass(c.animating).css({
                                top: e.origin + "px",
                                transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px) translateY(" + e.depth.active + "px)"
                            })
                        },
                        left: function() {
                            var e = i.outerWidth(!0),
                                t = o.outerWidth(!0),
                                n = {
                                    origin: (e - t) / 2,
                                    depth: {
                                        active: t / 2,
                                        next: e / 2
                                    }
                                };
                            r.verbose("Setting the initial animation position as left", o, n), i.css({
                                transform: "rotateY(0deg)"
                            }), o.addClass(c.animating).css({
                                left: n.origin + "px",
                                transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px) translateX(-" + n.depth.active + "px)"
                            })
                        },
                        right: function() {
                            var e = i.outerWidth(!0),
                                t = o.outerWidth(!0),
                                n = {
                                    origin: (e - t) / 2,
                                    depth: {
                                        active: t / 2,
                                        next: e / 2
                                    }
                                };
                            r.verbose("Setting the initial animation position as right", o, n), i.css({
                                transform: "rotateY(0deg)"
                            }), o.addClass(c.animating).css({
                                left: n.origin + "px",
                                transform: "rotateY(90deg) translateZ(" + n.depth.next + "px) translateX(" + n.depth.active + "px)"
                            })
                        },
                        behind: function() {
                            var e = i.outerWidth(!0),
                                t = o.outerWidth(!0),
                                n = {
                                    origin: (e - t) / 2,
                                    depth: {
                                        active: t / 2,
                                        next: e / 2
                                    }
                                };
                            r.verbose("Setting the initial animation position as behind", o, n), i.css({
                                transform: "rotateY(0deg)"
                            }), o.addClass(c.animating).css({
                                left: n.origin + "px",
                                transform: "rotateY(-180deg)"
                            })
                        }
                    },
                    setting: function(e, t) {
                        if (r.debug("Changing setting", e, t), A.isPlainObject(e)) A.extend(!0, s, e);
                        else {
                            if (t === F) return s[e];
                            A.isPlainObject(s[e]) ? A.extend(!0, s[e], t) : s[e] = t
                        }
                    },
                    internal: function(e, t) {
                        if (A.isPlainObject(e)) A.extend(!0, r, e);
                        else {
                            if (t === F) return r[e];
                            r[e] = t
                        }
                    },
                    debug: function() {
                        !s.silent && s.debug && (s.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), r.debug.apply(console, arguments)))
                    },
                    verbose: function() {
                        !s.silent && s.verbose && s.debug && (s.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), r.verbose.apply(console, arguments)))
                    },
                    error: function() {
                        s.silent || (r.error = Function.prototype.bind.call(console.error, console, s.name + ":"), r.error.apply(console, arguments))
                    },
                    performance: {
                        log: function(e) {
                            var t, n;
                            s.performance && (n = (t = (new Date).getTime()) - (C || t), C = t, w.push({
                                Name: e[0],
                                Arguments: [].slice.call(e, 1) || "",
                                Element: p,
                                "Execution Time": n
                            })), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500)
                        },
                        display: function() {
                            var e = s.name + ":",
                                n = 0;
                            C = !1, clearTimeout(r.performance.timer), A.each(w, function(e, t) {
                                n += t["Execution Time"]
                            }), e += " " + n + "ms", t && (e += " '" + t + "'"), 1 < x.length && (e += " (" + x.length + ")"), (console.group !== F || console.table !== F) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : A.each(w, function(e, t) {
                                console.log(t.Name + ": " + t["Execution Time"] + "ms")
                            }), console.groupEnd()), w = []
                        }
                    },
                    invoke: function(i, e, t) {
                        var o, a, n, r = h;
                        return e = e || S, t = p || t, "string" == typeof i && r !== F && (i = i.split(/[\. ]/), o = i.length - 1, A.each(i, function(e, t) {
                            var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                            if (A.isPlainObject(r[n]) && e != o) r = r[n];
                            else {
                                if (r[n] !== F) return a = r[n], !1;
                                if (!A.isPlainObject(r[t]) || e == o) return r[t] !== F && (a = r[t]), !1;
                                r = r[t]
                            }
                        })), A.isFunction(a) ? n = a.apply(t, e) : a !== F && (n = a), Array.isArray(y) ? y.push(n) : y !== F ? y = [y, n] : n !== F && (y = n), a
                    }
                }, T) {
                h === F && r.initialize();
                var v = d.find("input");
                0 < v.length ? (v.blur(), setTimeout(function() {
                    r.invoke(k)
                }, 150)) : r.invoke(k)
            } else h !== F && h.invoke("destroy"), r.initialize()
        }), y !== F ? y : this
    }, A.fn.shape.settings = {
        name: "Shape",
        silent: !1,
        debug: !1,
        verbose: !1,
        jitter: 0,
        performance: !0,
        namespace: "shape",
        width: "initial",
        height: "initial",
        beforeChange: function() {},
        onChange: function() {},
        allowRepeats: !1,
        duration: !1,
        error: {
            side: "You tried to switch to a side that does not exist.",
            method: "The method you called is not defined"
        },
        className: {
            animating: "animating",
            hidden: "hidden",
            loading: "loading",
            active: "active"
        },
        selector: {
            sides: ".sides",
            side: ".side"
        }
    }
}(jQuery, window, document),
function(M, I, j, q) {
    "use strict";
    M.isFunction = M.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, I = void 0 !== I && I.Math == Math ? I : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), M.fn.sidebar = function(x) {
        var C, e = M(this),
            w = M(I),
            k = M(j),
            T = M("html"),
            S = M("head"),
            D = e.selector || "",
            A = (new Date).getTime(),
            E = [],
            F = x,
            P = "string" == typeof F,
            O = [].slice.call(arguments, 1),
            R = I.requestAnimationFrame || I.mozRequestAnimationFrame || I.webkitRequestAnimationFrame || I.msRequestAnimationFrame || function(e) {
                setTimeout(e, 0)
            };
        return e.each(function() {
            var r, s, e, t, l, c, u = M.isPlainObject(x) ? M.extend(!0, {}, M.fn.sidebar.settings, x) : M.extend({}, M.fn.sidebar.settings),
                n = u.selector,
                a = u.className,
                i = u.namespace,
                o = u.regExp,
                d = u.error,
                f = "." + i,
                m = "module-" + i,
                g = M(this),
                p = M(u.context),
                h = g.children(n.sidebar),
                v = (p.children(n.fixed), p.children(n.pusher)),
                b = this,
                y = g.data(m);
            c = {
                initialize: function() {
                    c.debug("Initializing sidebar", x), c.create.id(), l = c.get.transitionEvent(), u.delaySetup ? R(c.setup.layout) : c.setup.layout(), R(function() {
                        c.setup.cache()
                    }), c.instantiate()
                },
                instantiate: function() {
                    c.verbose("Storing instance of module", c), y = c, g.data(m, c)
                },
                create: {
                    id: function() {
                        e = (Math.random().toString(16) + "000000000").substr(2, 8), s = "." + e, c.verbose("Creating unique id for element", e)
                    }
                },
                destroy: function() {
                    c.verbose("Destroying previous module for", g), g.off(f).removeData(m), c.is.ios() && c.remove.ios(), p.off(s), w.off(s), k.off(s)
                },
                event: {
                    clickaway: function(e) {
                        if (u.closable) {
                            var t = 0 < v.find(e.target).length || v.is(e.target),
                                n = p.is(e.target);
                            t && (c.verbose("User clicked on dimmed page"), c.hide()), n && (c.verbose("User clicked on dimmable context (scaled out page)"), c.hide())
                        }
                    },
                    touch: function(e) {},
                    containScroll: function(e) {
                        b.scrollTop <= 0 && (b.scrollTop = 1), b.scrollTop + b.offsetHeight >= b.scrollHeight && (b.scrollTop = b.scrollHeight - b.offsetHeight - 1)
                    },
                    scroll: function(e) {
                        0 === M(e.target).closest(n.sidebar).length && e.preventDefault()
                    }
                },
                bind: {
                    clickaway: function() {
                        c.verbose("Adding clickaway events to context", p), p.on("click" + s, c.event.clickaway).on("touchend" + s, c.event.clickaway)
                    },
                    scrollLock: function() {
                        u.scrollLock && (c.debug("Disabling page scroll"), w.on("DOMMouseScroll" + s, c.event.scroll)), c.verbose("Adding events to contain sidebar scroll"), k.on("touchmove" + s, c.event.touch), g.on("scroll" + f, c.event.containScroll)
                    }
                },
                unbind: {
                    clickaway: function() {
                        c.verbose("Removing clickaway events from context", p), p.off(s)
                    },
                    scrollLock: function() {
                        c.verbose("Removing scroll lock from page"), k.off(s), w.off(s), g.off("scroll" + f)
                    }
                },
                add: {
                    inlineCSS: function() {
                        var e, t = c.cache.width || g.outerWidth(),
                            n = c.cache.height || g.outerHeight(),
                            i = c.is.rtl(),
                            o = c.get.direction(),
                            a = {
                                left: t,
                                right: -t,
                                top: n,
                                bottom: -n
                            };
                        i && (c.verbose("RTL detected, flipping widths"), a.left = -t, a.right = t), e = "<style>", "left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), c.is.ie() && ("left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), e += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"), r = M(e += "</style>").appendTo(S), c.debug("Adding sizing css to head", r)
                    }
                },
                refresh: function() {
                    c.verbose("Refreshing selector cache"), p = M(u.context), h = p.children(n.sidebar), v = p.children(n.pusher), p.children(n.fixed), c.clear.cache()
                },
                refreshSidebars: function() {
                    c.verbose("Refreshing other sidebars"), h = p.children(n.sidebar)
                },
                repaint: function() {
                    c.verbose("Forcing repaint event"), b.style.display = "none";
                    b.offsetHeight;
                    b.scrollTop = b.scrollTop, b.style.display = ""
                },
                setup: {
                    cache: function() {
                        c.cache = {
                            width: g.outerWidth(),
                            height: g.outerHeight()
                        }
                    },
                    layout: function() {
                        0 === p.children(n.pusher).length && (c.debug("Adding wrapper element for sidebar"), c.error(d.pusher), v = M('<div class="pusher" />'), p.children().not(n.omitted).not(h).wrapAll(v), c.refresh()), 0 !== g.nextAll(n.pusher).length && g.nextAll(n.pusher)[0] === v[0] || (c.debug("Moved sidebar to correct parent element"), c.error(d.movedSidebar, b), g.detach().prependTo(p), c.refresh()), c.clear.cache(), c.set.pushable(), c.set.direction()
                    }
                },
                attachEvents: function(e, t) {
                    var n = M(e);
                    t = M.isFunction(c[t]) ? c[t] : c.toggle, 0 < n.length ? (c.debug("Attaching sidebar events to element", e, t), n.on("click" + f, t)) : c.error(d.notFound, e)
                },
                show: function(e) {
                    if (e = M.isFunction(e) ? e : function() {}, c.is.hidden()) {
                        if (c.refreshSidebars(), u.overlay && (c.error(d.overlay), u.transition = "overlay"), c.refresh(), c.othersActive())
                            if (c.debug("Other sidebars currently visible"), u.exclusive) {
                                if ("overlay" != u.transition) return void c.hideOthers(c.show);
                                c.hideOthers()
                            } else u.transition = "overlay";
                        c.pushPage(function() {
                            e.call(b), u.onShow.call(b)
                        }), u.onChange.call(b), u.onVisible.call(b)
                    } else c.debug("Sidebar is already visible")
                },
                hide: function(e) {
                    e = M.isFunction(e) ? e : function() {}, (c.is.visible() || c.is.animating()) && (c.debug("Hiding sidebar", e), c.refreshSidebars(), c.pullPage(function() {
                        e.call(b), u.onHidden.call(b)
                    }), u.onChange.call(b), u.onHide.call(b))
                },
                othersAnimating: function() {
                    return 0 < h.not(g).filter("." + a.animating).length
                },
                othersVisible: function() {
                    return 0 < h.not(g).filter("." + a.visible).length
                },
                othersActive: function() {
                    return c.othersVisible() || c.othersAnimating()
                },
                hideOthers: function(e) {
                    var t = h.not(g).filter("." + a.visible),
                        n = t.length,
                        i = 0;
                    e = e || function() {}, t.sidebar("hide", function() {
                        ++i == n && e()
                    })
                },
                toggle: function() {
                    c.verbose("Determining toggled direction"), c.is.hidden() ? c.show() : c.hide()
                },
                pushPage: function(t) {
                    var e, n, i, o = c.get.transition(),
                        a = "overlay" === o || c.othersActive() ? g : v;
                    t = M.isFunction(t) ? t : function() {}, "scale down" == u.transition && c.scrollToTop(), c.set.transition(o), c.repaint(), e = function() {
                        c.bind.clickaway(), c.add.inlineCSS(), c.set.animating(), c.set.visible()
                    }, n = function() {
                        c.set.dimmed()
                    }, i = function(e) {
                        e.target == a[0] && (a.off(l + s, i), c.remove.animating(), c.bind.scrollLock(), t.call(b))
                    }, a.off(l + s), a.on(l + s, i), R(e), u.dimPage && !c.othersVisible() && R(n)
                },
                pullPage: function(t) {
                    var e, n, i = c.get.transition(),
                        o = "overlay" == i || c.othersActive() ? g : v;
                    t = M.isFunction(t) ? t : function() {}, c.verbose("Removing context push state", c.get.direction()), c.unbind.clickaway(), c.unbind.scrollLock(), e = function() {
                        c.set.transition(i), c.set.animating(), c.remove.visible(), u.dimPage && !c.othersVisible() && v.removeClass(a.dimmed)
                    }, n = function(e) {
                        e.target == o[0] && (o.off(l + s, n), c.remove.animating(), c.remove.transition(), c.remove.inlineCSS(), ("scale down" == i || u.returnScroll && c.is.mobile()) && c.scrollBack(), t.call(b))
                    }, o.off(l + s), o.on(l + s, n), R(e)
                },
                scrollToTop: function() {
                    c.verbose("Scrolling to top of page to avoid animation issues"), t = M(I).scrollTop(), g.scrollTop(0), I.scrollTo(0, 0)
                },
                scrollBack: function() {
                    c.verbose("Scrolling back to original page position"), I.scrollTo(0, t)
                },
                clear: {
                    cache: function() {
                        c.verbose("Clearing cached dimensions"), c.cache = {}
                    }
                },
                set: {
                    ios: function() {
                        T.addClass(a.ios)
                    },
                    pushed: function() {
                        p.addClass(a.pushed)
                    },
                    pushable: function() {
                        p.addClass(a.pushable)
                    },
                    dimmed: function() {
                        v.addClass(a.dimmed)
                    },
                    active: function() {
                        g.addClass(a.active)
                    },
                    animating: function() {
                        g.addClass(a.animating)
                    },
                    transition: function(e) {
                        e = e || c.get.transition(), g.addClass(e)
                    },
                    direction: function(e) {
                        e = e || c.get.direction(), g.addClass(a[e])
                    },
                    visible: function() {
                        g.addClass(a.visible)
                    },
                    overlay: function() {
                        g.addClass(a.overlay)
                    }
                },
                remove: {
                    inlineCSS: function() {
                        c.debug("Removing inline css styles", r), r && 0 < r.length && r.remove()
                    },
                    ios: function() {
                        T.removeClass(a.ios)
                    },
                    pushed: function() {
                        p.removeClass(a.pushed)
                    },
                    pushable: function() {
                        p.removeClass(a.pushable)
                    },
                    active: function() {
                        g.removeClass(a.active)
                    },
                    animating: function() {
                        g.removeClass(a.animating)
                    },
                    transition: function(e) {
                        e = e || c.get.transition(), g.removeClass(e)
                    },
                    direction: function(e) {
                        e = e || c.get.direction(), g.removeClass(a[e])
                    },
                    visible: function() {
                        g.removeClass(a.visible)
                    },
                    overlay: function() {
                        g.removeClass(a.overlay)
                    }
                },
                get: {
                    direction: function() {
                        return g.hasClass(a.top) ? a.top : g.hasClass(a.right) ? a.right : g.hasClass(a.bottom) ? a.bottom : a.left
                    },
                    transition: function() {
                        var e, t = c.get.direction();
                        return e = c.is.mobile() ? "auto" == u.mobileTransition ? u.defaultTransition.mobile[t] : u.mobileTransition : "auto" == u.transition ? u.defaultTransition.computer[t] : u.transition, c.verbose("Determined transition", e), e
                    },
                    transitionEvent: function() {
                        var e, t = j.createElement("element"),
                            n = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (e in n)
                            if (t.style[e] !== q) return n[e]
                    }
                },
                is: {
                    ie: function() {
                        return !I.ActiveXObject && "ActiveXObject" in I || "ActiveXObject" in I
                    },
                    ios: function() {
                        var e = navigator.userAgent,
                            t = e.match(o.ios),
                            n = e.match(o.mobileChrome);
                        return !(!t || n) && (c.verbose("Browser was found to be iOS", e), !0)
                    },
                    mobile: function() {
                        var e = navigator.userAgent;
                        return e.match(o.mobile) ? (c.verbose("Browser was found to be mobile", e), !0) : (c.verbose("Browser is not mobile, using regular transition", e), !1)
                    },
                    hidden: function() {
                        return !c.is.visible()
                    },
                    visible: function() {
                        return g.hasClass(a.visible)
                    },
                    open: function() {
                        return c.is.visible()
                    },
                    closed: function() {
                        return c.is.hidden()
                    },
                    vertical: function() {
                        return g.hasClass(a.top)
                    },
                    animating: function() {
                        return p.hasClass(a.animating)
                    },
                    rtl: function() {
                        return c.cache.rtl === q && (c.cache.rtl = "rtl" === g.attr("dir") || "rtl" === g.css("direction")), c.cache.rtl
                    }
                },
                setting: function(e, t) {
                    if (c.debug("Changing setting", e, t), M.isPlainObject(e)) M.extend(!0, u, e);
                    else {
                        if (t === q) return u[e];
                        M.isPlainObject(u[e]) ? M.extend(!0, u[e], t) : u[e] = t
                    }
                },
                internal: function(e, t) {
                    if (M.isPlainObject(e)) M.extend(!0, c, e);
                    else {
                        if (t === q) return c[e];
                        c[e] = t
                    }
                },
                debug: function() {
                    !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
                },
                error: function() {
                    u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        u.performance && (n = (t = (new Date).getTime()) - (A || t), A = t, E.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: b,
                            "Execution Time": n
                        })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                    },
                    display: function() {
                        var e = u.name + ":",
                            n = 0;
                        A = !1, clearTimeout(c.performance.timer), M.each(E, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", D && (e += " '" + D + "'"), (console.group !== q || console.table !== q) && 0 < E.length && (console.groupCollapsed(e), console.table ? console.table(E) : M.each(E, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), E = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = y;
                    return e = e || O, t = b || t, "string" == typeof i && r !== q && (i = i.split(/[\. ]/), o = i.length - 1, M.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (M.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== q) return a = r[n], !1;
                            if (!M.isPlainObject(r[t]) || e == o) return r[t] !== q ? a = r[t] : c.error(d.method, i), !1;
                            r = r[t]
                        }
                    })), M.isFunction(a) ? n = a.apply(t, e) : a !== q && (n = a), Array.isArray(C) ? C.push(n) : C !== q ? C = [C, n] : n !== q && (C = n), a
                }
            }, P ? (y === q && c.initialize(), c.invoke(F)) : (y !== q && c.invoke("destroy"), c.initialize())
        }), C !== q ? C : this
    }, M.fn.sidebar.settings = {
        name: "Sidebar",
        namespace: "sidebar",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        transition: "auto",
        mobileTransition: "auto",
        defaultTransition: {
            computer: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
            },
            mobile: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
            }
        },
        context: "body",
        exclusive: !1,
        closable: !0,
        dimPage: !0,
        scrollLock: !1,
        returnScroll: !1,
        delaySetup: !1,
        duration: 500,
        onChange: function() {},
        onShow: function() {},
        onHide: function() {},
        onHidden: function() {},
        onVisible: function() {},
        className: {
            active: "active",
            animating: "animating",
            dimmed: "dimmed",
            ios: "ios",
            pushable: "pushable",
            pushed: "pushed",
            right: "right",
            top: "top",
            left: "left",
            bottom: "bottom",
            visible: "visible"
        },
        selector: {
            fixed: ".fixed",
            omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
            pusher: ".pusher",
            sidebar: ".ui.sidebar"
        },
        regExp: {
            ios: /(iPad|iPhone|iPod)/g,
            mobileChrome: /(CriOS)/g,
            mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
        },
        error: {
            method: "The method you called is not defined.",
            pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
            movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
            overlay: "The overlay setting is no longer supported, use animation: overlay",
            notFound: "There were no elements that matched the specified selector"
        }
    }
}(jQuery, window, document),
function(S, D, A, E) {
    "use strict";
    S.isFunction = S.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.sticky = function(v) {
        var b, e = S(this),
            y = e.selector || "",
            x = (new Date).getTime(),
            C = [],
            w = v,
            k = "string" == typeof w,
            T = [].slice.call(arguments, 1);
        return e.each(function() {
            var t, i, e, n, d, f = S.isPlainObject(v) ? S.extend(!0, {}, S.fn.sticky.settings, v) : S.extend({}, S.fn.sticky.settings),
                o = f.className,
                a = f.namespace,
                r = f.error,
                s = "." + a,
                l = "module-" + a,
                c = S(this),
                u = S(D),
                m = S(f.scrollContext),
                g = c.data(l),
                p = D.requestAnimationFrame || D.mozRequestAnimationFrame || D.webkitRequestAnimationFrame || D.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 0)
                },
                h = this;
            d = {
                initialize: function() {
                    d.determineContainer(), d.determineContext(), d.verbose("Initializing sticky", f, t), d.save.positions(), d.checkErrors(), d.bind.events(), f.observeChanges && d.observeChanges(), d.instantiate()
                },
                instantiate: function() {
                    d.verbose("Storing instance of module", d), g = d, c.data(l, d)
                },
                destroy: function() {
                    d.verbose("Destroying previous instance"), d.reset(), e && e.disconnect(), n && n.disconnect(), u.off("load" + s, d.event.load).off("resize" + s, d.event.resize), m.off("scrollchange" + s, d.event.scrollchange), c.removeData(l)
                },
                observeChanges: function() {
                    "MutationObserver" in D && (e = new MutationObserver(d.event.documentChanged), n = new MutationObserver(d.event.changed), e.observe(A, {
                        childList: !0,
                        subtree: !0
                    }), n.observe(h, {
                        childList: !0,
                        subtree: !0
                    }), n.observe(i[0], {
                        childList: !0,
                        subtree: !0
                    }), d.debug("Setting up mutation observer", n))
                },
                determineContainer: function() {
                    t = f.container ? S(f.container) : c.offsetParent()
                },
                determineContext: function() {
                    0 !== (i = f.context ? S(f.context) : t).length || d.error(r.invalidContext, f.context, c)
                },
                checkErrors: function() {
                    if (d.is.hidden() && d.error(r.visible, c), d.cache.element.height > d.cache.context.height) return d.reset(), void d.error(r.elementSize, c)
                },
                bind: {
                    events: function() {
                        u.on("load" + s, d.event.load).on("resize" + s, d.event.resize), m.off("scroll" + s).on("scroll" + s, d.event.scroll).on("scrollchange" + s, d.event.scrollchange)
                    }
                },
                event: {
                    changed: function(e) {
                        clearTimeout(d.timer), d.timer = setTimeout(function() {
                            d.verbose("DOM tree modified, updating sticky menu", e), d.refresh()
                        }, 100)
                    },
                    documentChanged: function(e) {
                        [].forEach.call(e, function(e) {
                            e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                                (e == h || 0 < S(e).find(h).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy())
                            })
                        })
                    },
                    load: function() {
                        d.verbose("Page contents finished loading"), p(d.refresh)
                    },
                    resize: function() {
                        d.verbose("Window resized"), p(d.refresh)
                    },
                    scroll: function() {
                        p(function() {
                            m.triggerHandler("scrollchange" + s, m.scrollTop())
                        })
                    },
                    scrollchange: function(e, t) {
                        d.stick(t), f.onScroll.call(h)
                    }
                },
                refresh: function(e) {
                    d.reset(), f.context || d.determineContext(), e && d.determineContainer(), d.save.positions(), d.stick(), f.onReposition.call(h)
                },
                supports: {
                    sticky: function() {
                        var e = S("<div/>");
                        return e.addClass(o.supported), e.css("position").match("sticky")
                    }
                },
                save: {
                    lastScroll: function(e) {
                        d.lastScroll = e
                    },
                    elementScroll: function(e) {
                        d.elementScroll = e
                    },
                    positions: function() {
                        var e = {
                                height: m.height()
                            },
                            t = {
                                margin: {
                                    top: parseInt(c.css("margin-top"), 10),
                                    bottom: parseInt(c.css("margin-bottom"), 10)
                                },
                                offset: c.offset(),
                                width: c.outerWidth(),
                                height: c.outerHeight()
                            },
                            n = {
                                offset: i.offset(),
                                height: i.outerHeight()
                            };
                        d.is.standardScroll() || (d.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = m.scrollTop(), e.left = m.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), d.cache = {
                            fits: t.height + f.offset <= e.height,
                            sameHeight: t.height == n.height,
                            scrollContext: {
                                height: e.height
                            },
                            element: {
                                margin: t.margin,
                                top: t.offset.top - t.margin.top,
                                left: t.offset.left,
                                width: t.width,
                                height: t.height,
                                bottom: t.offset.top + t.height
                            },
                            context: {
                                top: n.offset.top,
                                height: n.height,
                                bottom: n.offset.top + n.height
                            }
                        }, d.set.containerSize(), d.stick(), d.debug("Caching element positions", d.cache)
                    }
                },
                get: {
                    direction: function(e) {
                        var t = "down";
                        return e = e || m.scrollTop(), d.lastScroll !== E && (d.lastScroll < e ? t = "down" : d.lastScroll > e && (t = "up")), t
                    },
                    scrollChange: function(e) {
                        return e = e || m.scrollTop(), d.lastScroll ? e - d.lastScroll : 0
                    },
                    currentElementScroll: function() {
                        return d.elementScroll ? d.elementScroll : d.is.top() ? Math.abs(parseInt(c.css("top"), 10)) || 0 : Math.abs(parseInt(c.css("bottom"), 10)) || 0
                    },
                    elementScroll: function(e) {
                        e = e || m.scrollTop();
                        var t = d.cache.element,
                            n = d.cache.scrollContext,
                            i = d.get.scrollChange(e),
                            o = t.height - n.height + f.offset,
                            a = d.get.currentElementScroll(),
                            r = a + i;
                        return a = d.cache.fits || r < 0 ? 0 : o < r ? o : r
                    }
                },
                remove: {
                    lastScroll: function() {
                        delete d.lastScroll
                    },
                    elementScroll: function(e) {
                        delete d.elementScroll
                    },
                    minimumSize: function() {
                        t.css("min-height", "")
                    },
                    offset: function() {
                        c.css("margin-top", "")
                    }
                },
                set: {
                    offset: function() {
                        d.verbose("Setting offset on element", f.offset), c.css("margin-top", f.offset)
                    },
                    containerSize: function() {
                        var e = t.get(0).tagName;
                        "HTML" === e || "body" == e ? d.determineContainer() : Math.abs(t.outerHeight() - d.cache.context.height) > f.jitter && (d.debug("Context has padding, specifying exact height for container", d.cache.context.height), t.css({
                            height: d.cache.context.height
                        }))
                    },
                    minimumSize: function() {
                        var e = d.cache.element;
                        t.css("min-height", e.height)
                    },
                    scroll: function(e) {
                        d.debug("Setting scroll on element", e), d.elementScroll != e && (d.is.top() && c.css("bottom", "").css("top", -e), d.is.bottom() && c.css("top", "").css("bottom", e))
                    },
                    size: function() {
                        0 !== d.cache.element.height && 0 !== d.cache.element.width && (h.style.setProperty("width", d.cache.element.width + "px", "important"), h.style.setProperty("height", d.cache.element.height + "px", "important"))
                    }
                },
                is: {
                    standardScroll: function() {
                        return m[0] == D
                    },
                    top: function() {
                        return c.hasClass(o.top)
                    },
                    bottom: function() {
                        return c.hasClass(o.bottom)
                    },
                    initialPosition: function() {
                        return !d.is.fixed() && !d.is.bound()
                    },
                    hidden: function() {
                        return !c.is(":visible")
                    },
                    bound: function() {
                        return c.hasClass(o.bound)
                    },
                    fixed: function() {
                        return c.hasClass(o.fixed)
                    }
                },
                stick: function(e) {
                    var t = e || m.scrollTop(),
                        n = d.cache,
                        i = n.fits,
                        o = n.sameHeight,
                        a = n.element,
                        r = n.scrollContext,
                        s = n.context,
                        l = d.is.bottom() && f.pushing ? f.bottomOffset : f.offset,
                        c = (e = {
                            top: t + l,
                            bottom: t + l + r.height
                        }, i ? 0 : d.get.elementScroll(e.top)),
                        u = !i;
                    0 === a.height || o || (d.is.initialPosition() ? e.top >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : (d.debug("Initial element position is fixed"), d.fixTop())) : d.is.fixed() ? d.is.top() ? e.top <= a.top ? (d.debug("Fixed element reached top of container"), d.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (d.debug("Fixed element reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c)) : d.is.bottom() && (e.bottom - a.height <= a.top ? (d.debug("Bottom fixed rail has reached top of container"), d.setInitialPosition()) : e.bottom >= s.bottom ? (d.debug("Bottom fixed rail has reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c))) : d.is.bottom() && (e.top <= a.top ? (d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), d.setInitialPosition()) : f.pushing ? d.is.bound() && e.bottom <= s.bottom && (d.debug("Fixing bottom attached element to bottom of browser."), d.fixBottom()) : d.is.bound() && e.top <= s.bottom - a.height && (d.debug("Fixing bottom attached element to top of browser."), d.fixTop())))
                },
                bindTop: function() {
                    d.debug("Binding element to top of parent container"), d.remove.offset(), c.css({
                        left: "",
                        top: "",
                        marginBottom: ""
                    }).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top), f.onTop.call(h), f.onUnstick.call(h)
                },
                bindBottom: function() {
                    d.debug("Binding element to bottom of parent container"), d.remove.offset(), c.css({
                        left: "",
                        top: ""
                    }).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom), f.onBottom.call(h), f.onUnstick.call(h)
                },
                setInitialPosition: function() {
                    d.debug("Returning to initial position"), d.unfix(), d.unbind()
                },
                fixTop: function() {
                    d.debug("Fixing element to top of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
                        left: d.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top), f.onStick.call(h)
                },
                fixBottom: function() {
                    d.debug("Sticking element to bottom of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
                        left: d.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom), f.onStick.call(h)
                },
                unbind: function() {
                    d.is.bound() && (d.debug("Removing container bound position on element"), d.remove.offset(), c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))
                },
                unfix: function() {
                    d.is.fixed() && (d.debug("Removing fixed position on element"), d.remove.minimumSize(), d.remove.offset(), c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom), f.onUnstick.call(h))
                },
                reset: function() {
                    d.debug("Resetting elements position"), d.unbind(), d.unfix(), d.resetCSS(), d.remove.offset(), d.remove.lastScroll()
                },
                resetCSS: function() {
                    c.css({
                        width: "",
                        height: ""
                    }), t.css({
                        height: ""
                    })
                },
                setting: function(e, t) {
                    if (S.isPlainObject(e)) S.extend(!0, f, e);
                    else {
                        if (t === E) return f[e];
                        f[e] = t
                    }
                },
                internal: function(e, t) {
                    if (S.isPlainObject(e)) S.extend(!0, d, e);
                    else {
                        if (t === E) return d[e];
                        d[e] = t
                    }
                },
                debug: function() {
                    !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        f.performance && (n = (t = (new Date).getTime()) - (x || t), x = t, C.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: h,
                            "Execution Time": n
                        })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 0)
                    },
                    display: function() {
                        var e = f.name + ":",
                            n = 0;
                        x = !1, clearTimeout(d.performance.timer), S.each(C, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== E || console.table !== E) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : S.each(C, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), C = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = g;
                    return e = e || T, t = h || t, "string" == typeof i && r !== E && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (S.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== E) return a = r[n], !1;
                            if (!S.isPlainObject(r[t]) || e == o) return r[t] !== E && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), S.isFunction(a) ? n = a.apply(t, e) : a !== E && (n = a), Array.isArray(b) ? b.push(n) : b !== E ? b = [b, n] : n !== E && (b = n), a
                }
            }, k ? (g === E && d.initialize(), d.invoke(w)) : (g !== E && g.invoke("destroy"), d.initialize())
        }), b !== E ? b : this
    }, S.fn.sticky.settings = {
        name: "Sticky",
        namespace: "sticky",
        silent: !1,
        debug: !1,
        verbose: !0,
        performance: !0,
        pushing: !1,
        context: !1,
        container: !1,
        scrollContext: D,
        offset: 0,
        bottomOffset: 0,
        jitter: 5,
        setSize: !0,
        observeChanges: !1,
        onReposition: function() {},
        onScroll: function() {},
        onStick: function() {},
        onUnstick: function() {},
        onTop: function() {},
        onBottom: function() {},
        error: {
            container: "Sticky element must be inside a relative container",
            visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
            method: "The method you called is not defined.",
            invalidContext: "Context specified does not exist",
            elementSize: "Sticky element is larger than its container, cannot create sticky."
        },
        className: {
            bound: "bound",
            fixed: "fixed",
            supported: "native",
            top: "top",
            bottom: "bottom"
        }
    }
}(jQuery, window, document),
function(P, O, R, M) {
    "use strict";
    P.isWindow = P.isWindow || function(e) {
        return null != e && e === e.window
    }, P.isFunction = P.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, O = void 0 !== O && O.Math == Math ? O : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), P.fn.tab = function(c) {
        var u, d = P.isFunction(this) ? P(O) : P(this),
            f = d.selector || "",
            m = (new Date).getTime(),
            g = [],
            D = c,
            A = "string" == typeof D,
            E = [].slice.call(arguments, 1),
            F = !1;
        return d.each(function() {
            var p, a, h, v, b, y, x = P.isPlainObject(c) ? P.extend(!0, {}, P.fn.tab.settings, c) : P.extend({}, P.fn.tab.settings),
                C = x.className,
                w = x.metadata,
                t = x.selector,
                k = x.error,
                n = x.regExp,
                e = "." + x.namespace,
                i = "module-" + x.namespace,
                T = P(this),
                o = {},
                S = !0,
                r = 0,
                s = this,
                l = T.data(i);
            b = {
                initialize: function() {
                    b.debug("Initializing tab menu item", T), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, a), x.auto && b.set.auto(), b.bind.events(), x.history && !F && (b.initializeHistory(), F = !0), l === M && null == b.determine.activeTab() && (b.debug("No active tab detected, setting first tab active", b.get.initialPath()), b.changeTab(b.get.initialPath())), b.instantiate()
                },
                instantiate: function() {
                    b.verbose("Storing instance of module", b), l = b, T.data(i, b)
                },
                destroy: function() {
                    b.debug("Destroying tabs", T), T.removeData(i).off(e)
                },
                bind: {
                    events: function() {
                        P.isWindow(s) || (b.debug("Attaching tab activation events to element", T), T.on("click" + e, b.event.click))
                    }
                },
                determineTabs: function() {
                    var e;
                    "parent" === x.context ? (0 < T.closest(t.ui).length ? (e = T.closest(t.ui), b.verbose("Using closest UI element as parent", e)) : e = T, p = e.parent(), b.verbose("Determined parent element for creating context", p)) : x.context ? (p = P(x.context), b.verbose("Using selector for tab context", x.context, p)) : p = P("body"), x.childrenOnly ? (a = p.children(t.tabs), b.debug("Searching tab context children for tabs", p, a)) : (a = p.find(t.tabs), b.debug("Searching tab context for tabs", p, a))
                },
                fix: {
                    callbacks: function() {
                        P.isPlainObject(c) && (c.onTabLoad || c.onTabInit) && (c.onTabLoad && (c.onLoad = c.onTabLoad, delete c.onTabLoad, b.error(k.legacyLoad, c.onLoad)), c.onTabInit && (c.onFirstLoad = c.onTabInit, delete c.onTabInit, b.error(k.legacyInit, c.onFirstLoad)), x = P.extend(!0, {}, P.fn.tab.settings, c))
                    }
                },
                initializeHistory: function() {
                    if (b.debug("Initializing page state"), P.address === M) return b.error(k.state), !1;
                    if ("state" == x.historyType) {
                        if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(k.path), !1;
                        P.address.history(!0).state(x.path)
                    }
                    P.address.bind("change", b.event.history.change)
                },
                event: {
                    click: function(e) {
                        var t = P(this).data(w.tab);
                        t !== M ? (x.history ? (b.verbose("Updating page state", e), P.address.value(t)) : (b.verbose("Changing tab", e), b.changeTab(t)), e.preventDefault()) : b.debug("No tab specified")
                    },
                    history: {
                        change: function(e) {
                            var t = e.pathNames.join("/") || b.get.initialPath(),
                                n = x.templates.determineTitle(t) || !1;
                            b.performance.display(), b.debug("History change event", t, e), y = e, t !== M && b.changeTab(t), n && P.address.title(n)
                        }
                    }
                },
                refresh: function() {
                    h && (b.debug("Refreshing tab", h), b.changeTab(h))
                },
                cache: {
                    read: function(e) {
                        return e !== M && o[e]
                    },
                    add: function(e, t) {
                        e = e || h, b.debug("Adding cached content for", e), o[e] = t
                    },
                    remove: function(e) {
                        e = e || h, b.debug("Removing cached content for", e), delete o[e]
                    }
                },
                escape: {
                    string: function(e) {
                        return (e = String(e)).replace(n.escape, "\\$&")
                    }
                },
                set: {
                    auto: function() {
                        var e = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                        b.verbose("Setting up automatic tab retrieval from server", e), P.isPlainObject(x.apiSettings) ? x.apiSettings.url = e : x.apiSettings = {
                            url: e
                        }
                    },
                    loading: function(e) {
                        var t = b.get.tabElement(e);
                        t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(a).removeClass(C.active + " " + C.loading), 0 < t.length && x.onRequest.call(t[0], e))
                    },
                    state: function(e) {
                        P.address.value(e)
                    }
                },
                changeTab: function(d) {
                    var f = O.history && O.history.pushState && x.ignoreFirstLoad && S,
                        m = x.auto || P.isPlainObject(x.apiSettings),
                        g = m && !f ? b.utilities.pathToArray(d) : b.get.defaultPathArray(d);
                    d = b.utilities.arrayToPath(g), P.each(g, function(e, t) {
                        var n, i, o, a, r = g.slice(0, e + 1),
                            s = b.utilities.arrayToPath(r),
                            l = b.is.tab(s),
                            c = e + 1 == g.length,
                            u = b.get.tabElement(s);
                        if (b.verbose("Looking for tab", t), l) {
                            if (b.verbose("Tab was found", t), h = s, v = b.utilities.filterArray(g, r), c ? a = !0 : (i = g.slice(0, e + 2), o = b.utilities.arrayToPath(i), (a = !b.is.tab(o)) && b.verbose("Tab parameters found", i)), a && m) return f ? (b.debug("Ignoring remote content on first tab load", s), S = !1, b.cache.add(d, u.html()), b.activate.all(s), x.onFirstLoad.call(u[0], s, v, y), x.onLoad.call(u[0], s, v, y)) : (b.activate.navigation(s), b.fetch.content(s, d)), !1;
                            b.debug("Opened local tab", s), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y)
                        } else {
                            if (-1 != d.search("/") || "" === d) return b.error(k.missingTab, T, p, s), !1;
                            if (d = b.escape.string(d), s = (n = P("#" + d + ', a[name="' + d + '"]')).closest("[data-tab]").data(w.tab), u = b.get.tabElement(s), n && 0 < n.length && s) return b.debug("Anchor link used, opening parent tab", u, n), u.hasClass(C.active) || setTimeout(function() {
                                b.scrollTo(n)
                            }, 0), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y), !1
                        }
                    })
                },
                scrollTo: function(e) {
                    var t = !!(e && 0 < e.length) && e.offset().top;
                    !1 !== t && (b.debug("Forcing scroll to an in-page link in a hidden tab", t, e), P(R).scrollTop(t))
                },
                update: {
                    content: function(e, t, n) {
                        var i = b.get.tabElement(e),
                            o = i[0];
                        n = n !== M ? n : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof t ? i.empty().append(P(t).clone(!0)) : n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (b.debug("Updating HTML", e, t), o.innerHTML = t)
                    }
                },
                fetch: {
                    content: function(t, n) {
                        var e, i, o = b.get.tabElement(t),
                            a = {
                                dataType: "html",
                                encodeParameters: !1,
                                on: "now",
                                cache: x.alwaysRefresh,
                                headers: {
                                    "X-Remote": !0
                                },
                                onSuccess: function(e) {
                                    "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(o[0], t, v, y), x.onLoad.call(o[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && 0 < o.children().length ? setTimeout(function() {
                                        var e = o.children().clone(!0);
                                        e = e.not("script"), b.cache.add(n, e)
                                    }, 0) : b.cache.add(n, o.html())
                                },
                                urlData: {
                                    tab: n
                                }
                            },
                            r = o.api("get request") || !1,
                            s = r && "pending" === r.state();
                        n = n || t, i = b.cache.read(n), x.cache && i ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, i, !1) : b.update.content(t, i)), x.onLoad.call(o[0], t, v, y)) : s ? (b.set.loading(t), b.debug("Content is already loading", n)) : P.api !== M ? (e = P.extend(!0, {}, x.apiSettings, a), b.debug("Retrieving remote content", n, e), b.set.loading(t), o.api(e)) : b.error(k.api)
                    }
                },
                activate: {
                    all: function(e) {
                        b.activate.tab(e), b.activate.navigation(e)
                    },
                    tab: function(e) {
                        var t = b.get.tabElement(e),
                            n = "siblings" == x.deactivate ? t.siblings(a) : a.not(t),
                            i = t.hasClass(C.active);
                        b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), 0 < t.length && x.onVisible.call(t[0], e))
                    },
                    navigation: function(e) {
                        var t = b.get.navElement(e),
                            n = "siblings" == x.deactivate ? t.siblings(d) : d.not(t),
                            i = t.hasClass(C.active);
                        b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading))
                    }
                },
                deactivate: {
                    all: function() {
                        b.deactivate.navigation(), b.deactivate.tabs()
                    },
                    navigation: function() {
                        d.removeClass(C.active)
                    },
                    tabs: function() {
                        a.removeClass(C.active + " " + C.loading)
                    }
                },
                is: {
                    tab: function(e) {
                        return e !== M && 0 < b.get.tabElement(e).length
                    }
                },
                get: {
                    initialPath: function() {
                        return d.eq(0).data(w.tab) || a.eq(0).data(w.tab)
                    },
                    path: function() {
                        return P.address.value()
                    },
                    defaultPathArray: function(e) {
                        return b.utilities.pathToArray(b.get.defaultPath(e))
                    },
                    defaultPath: function(e) {
                        var t = d.filter("[data-" + w.tab + '^="' + b.escape.string(e) + '/"]').eq(0).data(w.tab) || !1;
                        if (t) {
                            if (b.debug("Found default tab", t), r < x.maxDepth) return r++, b.get.defaultPath(t);
                            b.error(k.recursion)
                        } else b.debug("No default tabs found for", e, a);
                        return r = 0, e
                    },
                    navElement: function(e) {
                        return e = e || h, d.filter("[data-" + w.tab + '="' + b.escape.string(e) + '"]')
                    },
                    tabElement: function(e) {
                        var t, n, i, o;
                        return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = a.filter("[data-" + w.tab + '="' + b.escape.string(e) + '"]'), n = a.filter("[data-" + w.tab + '="' + b.escape.string(o) + '"]'), 0 < t.length ? t : n
                    },
                    tab: function() {
                        return h
                    }
                },
                determine: {
                    activeTab: function() {
                        var i = null;
                        return a.each(function(e, t) {
                            if (P(t).hasClass(C.active)) {
                                var n = P(this).data(w.tab);
                                d.filter("[data-" + w.tab + '="' + b.escape.string(n) + '"]').hasClass(C.active) && (i = n)
                            }
                        }), i
                    }
                },
                utilities: {
                    filterArray: function(e, t) {
                        return P.grep(e, function(e) {
                            return -1 == P.inArray(e, t)
                        })
                    },
                    last: function(e) {
                        return !!Array.isArray(e) && e[e.length - 1]
                    },
                    pathToArray: function(e) {
                        return e === M && (e = h), "string" == typeof e ? e.split("/") : [e]
                    },
                    arrayToPath: function(e) {
                        return !!Array.isArray(e) && e.join("/")
                    }
                },
                setting: function(e, t) {
                    if (b.debug("Changing setting", e, t), P.isPlainObject(e)) P.extend(!0, x, e);
                    else {
                        if (t === M) return x[e];
                        P.isPlainObject(x[e]) ? P.extend(!0, x[e], t) : x[e] = t
                    }
                },
                internal: function(e, t) {
                    if (P.isPlainObject(e)) P.extend(!0, b, e);
                    else {
                        if (t === M) return b[e];
                        b[e] = t
                    }
                },
                debug: function() {
                    !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
                },
                error: function() {
                    x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        x.performance && (n = (t = (new Date).getTime()) - (m || t), m = t, g.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: s,
                            "Execution Time": n
                        })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                    },
                    display: function() {
                        var e = x.name + ":",
                            n = 0;
                        m = !1, clearTimeout(b.performance.timer), P.each(g, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", f && (e += " '" + f + "'"), (console.group !== M || console.table !== M) && 0 < g.length && (console.groupCollapsed(e), console.table ? console.table(g) : P.each(g, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), g = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = l;
                    return e = e || E, t = s || t, "string" == typeof i && r !== M && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (P.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== M) return a = r[n], !1;
                            if (!P.isPlainObject(r[t]) || e == o) return r[t] !== M ? a = r[t] : b.error(k.method, i), !1;
                            r = r[t]
                        }
                    })), P.isFunction(a) ? n = a.apply(t, e) : a !== M && (n = a), Array.isArray(u) ? u.push(n) : u !== M ? u = [u, n] : n !== M && (u = n), a
                }
            }, A ? (l === M && b.initialize(), b.invoke(D)) : (l !== M && l.invoke("destroy"), b.initialize())
        }), u !== M ? u : this
    }, P.tab = function() {
        P(O).tab.apply(this, arguments)
    }, P.fn.tab.settings = {
        name: "Tab",
        namespace: "tab",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        auto: !1,
        history: !1,
        historyType: "hash",
        path: !1,
        context: !1,
        childrenOnly: !1,
        maxDepth: 25,
        deactivate: "siblings",
        alwaysRefresh: !1,
        cache: !0,
        loadOnce: !1,
        cacheType: "response",
        ignoreFirstLoad: !1,
        apiSettings: !1,
        evaluateScripts: "once",
        onFirstLoad: function(e, t, n) {},
        onLoad: function(e, t, n) {},
        onVisible: function(e, t, n) {},
        onRequest: function(e, t, n) {},
        templates: {
            determineTitle: function(e) {}
        },
        error: {
            api: "You attempted to load content without API module",
            method: "The method you called is not defined",
            missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
            noContent: "The tab you specified is missing a content url.",
            path: "History enabled, but no path was specified",
            recursion: "Max recursive depth reached",
            legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
            legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
            state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
        },
        regExp: {
            escape: /[-[\]{}()*+?.,\\^$|#\s:=@]/g
        },
        metadata: {
            tab: "tab",
            loaded: "loaded",
            promise: "promise"
        },
        className: {
            loading: "loading",
            active: "active"
        },
        selector: {
            tabs: ".ui.tab",
            ui: ".ui"
        }
    }
}(jQuery, window, document),
function(F, e, t, P) {
    "use strict";
    F.isFunction = F.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.toast = function(C) {
        var w, e = F(this),
            k = e.selector || "",
            T = (new Date).getTime(),
            S = [],
            D = C,
            A = "string" == typeof D,
            E = [].slice.call(arguments, 1);
        return e.each(function() {
            var i, o, a, r, s, l, c, u, d = F.isPlainObject(C) ? F.extend(!0, {}, F.fn.toast.settings, C) : F.extend({}, F.fn.toast.settings),
                f = d.className,
                e = d.selector,
                m = d.error,
                t = d.namespace,
                g = d.fields,
                n = "." + t,
                p = t + "-module",
                h = F(this),
                v = d.context ? F(d.context) : F("body"),
                b = h.hasClass("toast") || h.hasClass("message") || h.hasClass("card"),
                y = this,
                x = b ? h.data(p) : P;
            u = {
                initialize: function() {
                    u.verbose("Initializing element"), u.has.container() || u.create.container(), (b || "" !== d.message || "" !== d.title || "" !== u.get.iconClass() || d.showImage || u.has.configActions()) && ("string" == typeof d.showProgress && -1 !== [f.top, f.bottom].indexOf(d.showProgress) || (d.showProgress = !1), u.create.toast(), d.closeOnClick && (d.closeIcon || 0 < F(o).find(e.input).length || u.has.configActions()) && (d.closeOnClick = !1), d.closeOnClick || i.addClass(f.unclickable), u.bind.events()), u.instantiate(), i && u.show()
                },
                instantiate: function() {
                    u.verbose("Storing instance of toast"), x = u, h.data(p, x)
                },
                destroy: function() {
                    i && (u.debug("Removing toast", i), u.unbind.events(), i.remove(), l = o = i = P, d.onRemove.call(i, y), c = s = r = P), h.removeData(p)
                },
                show: function(e) {
                    e = e || function() {}, u.debug("Showing toast"), !1 !== d.onShow.call(i, y) ? u.animate.show(e) : u.debug("onShow callback returned false, cancelling toast animation")
                },
                close: function(e) {
                    e = e || function() {}, u.remove.visible(), u.unbind.events(), u.animate.close(e)
                },
                create: {
                    container: function() {
                        u.verbose("Creating container"), v.append(F("<div/>", {
                            class: d.position + " " + f.container
                        }))
                    },
                    toast: function() {
                        if (i = F("<div/>", {
                                class: f.box
                            }), b) o = d.cloneModule ? h.clone().removeAttr("id") : h, c = o.find("> i" + u.helpers.toClass(f.close)), d.closeIcon = 0 < c.length;
                        else {
                            u.verbose("Creating toast"), o = F("<div/>");
                            var e = F("<div/>", {
                                    class: f.content
                                }),
                                t = u.get.iconClass();
                            "" !== t && o.append(F("<i/>", {
                                class: t + " " + f.icon
                            })), d.showImage && o.append(F("<img>", {
                                class: f.image + " " + d.classImage,
                                src: d.showImage
                            })), "" !== d.title && e.append(F("<div/>", {
                                class: f.title,
                                text: d.title
                            })), e.append(F("<div/>", {
                                html: u.helpers.escape(d.message, d.preserveHTML)
                            })), o.addClass(d.class + " " + f.toast).append(e), o.css("opacity", d.opacity), d.closeIcon && ((c = F("<i/>", {
                                class: f.close + " " + ("string" == typeof d.closeIcon ? d.closeIcon : "")
                            })).hasClass(f.left) ? o.prepend(c) : o.append(c))
                        }
                        if (o.hasClass(f.compact) && (d.compact = !0), o.hasClass("card") && (d.compact = !1), a = o.find(".actions"), u.has.configActions() && (0 === a.length && (a = F("<div/>", {
                                class: f.actions + " " + (d.classActions || "")
                            }).appendTo(o)), o.hasClass("card") && !a.hasClass(f.attached) && (a.addClass(f.extraContent), a.hasClass(f.vertical) && (a.removeClass(f.vertical), u.error(m.verticalCard))), d.actions.forEach(function(e) {
                                var t = e[g.icon] ? '<i class="' + u.helpers.deQuote(e[g.icon]) + ' icon"></i>' : "",
                                    n = u.helpers.escape(e[g.text] || "", d.preserveHTML),
                                    i = u.helpers.deQuote(e[g.class] || ""),
                                    o = e[g.click] && F.isFunction(e[g.click]) ? e[g.click] : function() {};
                                a.append(F("<button/>", {
                                    html: t + n,
                                    class: f.button + " " + i,
                                    click: function() {
                                        !1 !== o.call(y, h) && u.close()
                                    }
                                }))
                            })), a && a.hasClass(f.vertical) && o.addClass(f.vertical), 0 < a.length && !a.hasClass(f.attached) && (!a || a.hasClass(f.basic) && !a.hasClass(f.left) || o.addClass(f.actions)), "auto" === d.displayTime && (d.displayTime = Math.max(d.minDisplayTime, o.text().split(" ").length / d.wordsPerMinute * 6e4)), i.append(o), 0 < a.length && a.hasClass(f.attached) && (a.addClass(f.buttons), a.detach(), o.addClass(f.attached), a.hasClass(f.vertical) ? (o.wrap(F("<div/>", {
                                class: f.vertical + " " + f.attached + " " + (d.compact ? f.compact : "")
                            })), a.hasClass(f.left) ? o.addClass(f.left).parent().addClass(f.left).prepend(a) : o.parent().append(a)) : a.hasClass(f.top) ? (i.prepend(a), o.addClass(f.bottom)) : (i.append(a), o.addClass(f.top))), h !== o && (y = (h = o)[0]), 0 < d.displayTime) {
                            var n = f.progressing + " " + (d.pauseOnHover ? f.pausable : "");
                            d.showProgress && (r = F("<div/>", {
                                class: f.progress + " " + (d.classProgress || d.class),
                                "data-percent": ""
                            }), d.classProgress || (o.hasClass("toast") && !o.hasClass(f.inverted) ? r.addClass(f.inverted) : r.removeClass(f.inverted)), s = F("<div/>", {
                                class: "bar " + (d.progressUp ? "up " : "down ") + n
                            }), r.addClass(d.showProgress).append(s), r.hasClass(f.top) ? i.prepend(r) : i.append(r), s.css("animation-duration", d.displayTime / 1e3 + "s")), (l = F("<span/>", {
                                class: "wait " + n
                            })).css("animation-duration", d.displayTime / 1e3 + "s"), l.appendTo(o)
                        }
                        d.compact && (i.addClass(f.compact), o.addClass(f.compact), r && r.addClass(f.compact)), d.newestOnTop ? i.prependTo(u.get.container()) : i.appendTo(u.get.container())
                    }
                },
                bind: {
                    events: function() {
                        u.debug("Binding events to toast"), (d.closeOnClick || d.closeIcon) && (d.closeIcon ? c : o).on("click" + n, u.event.click), l && l.on("animationend" + n, u.close), i.on("click" + n, e.approve, u.event.approve).on("click" + n, e.deny, u.event.deny)
                    }
                },
                unbind: {
                    events: function() {
                        u.debug("Unbinding events to toast"), (d.closeOnClick || d.closeIcon) && (d.closeIcon ? c : o).off("click" + n), l && l.off("animationend" + n), i.off("click" + n)
                    }
                },
                animate: {
                    show: function(e) {
                        e = F.isFunction(e) ? e : function() {}, d.transition && u.can.useElement("transition") && h.transition("is supported") && (u.set.visible(), i.transition({
                            animation: d.transition.showMethod + " in",
                            queue: !1,
                            debug: d.debug,
                            verbose: d.verbose,
                            duration: d.transition.showDuration,
                            onComplete: function() {
                                e.call(i, y), d.onVisible.call(i, y)
                            }
                        }))
                    },
                    close: function(e) {
                        e = F.isFunction(e) ? e : function() {}, u.debug("Closing toast"), !1 !== d.onHide.call(i, y) ? d.transition && F.fn.transition !== P && h.transition("is supported") ? i.transition({
                            animation: d.transition.hideMethod + " out",
                            queue: !1,
                            duration: d.transition.hideDuration,
                            debug: d.debug,
                            verbose: d.verbose,
                            interval: 50,
                            onBeforeHide: function(e) {
                                e = F.isFunction(e) ? e : function() {}, "" !== d.transition.closeEasing ? i && (i.css("opacity", 0), i.wrap("<div/>").parent().slideUp(500, d.transition.closeEasing, function() {
                                    i && (i.parent().remove(), e.call(i))
                                })) : e.call(i)
                            },
                            onComplete: function() {
                                e.call(i, y), d.onHidden.call(i, y), u.destroy()
                            }
                        }) : u.error(m.noTransition) : u.debug("onHide callback returned false, cancelling toast animation")
                    },
                    pause: function() {
                        l.css("animationPlayState", "paused"), s && s.css("animationPlayState", "paused")
                    },
                    continue: function() {
                        l.css("animationPlayState", "running"), s && s.css("animationPlayState", "running")
                    }
                },
                has: {
                    container: function() {
                        return u.verbose("Determining if there is already a container"), 0 < v.find(u.helpers.toClass(d.position) + e.container).length
                    },
                    toast: function() {
                        return !!u.get.toast()
                    },
                    toasts: function() {
                        return 0 < u.get.toasts().length
                    },
                    configActions: function() {
                        return Array.isArray(d.actions) && 0 < d.actions.length
                    }
                },
                get: {
                    container: function() {
                        return v.find(u.helpers.toClass(d.position) + e.container)[0]
                    },
                    toastBox: function() {
                        return i || null
                    },
                    toast: function() {
                        return o || null
                    },
                    toasts: function() {
                        return F(u.get.container()).find(e.box)
                    },
                    iconClass: function() {
                        return "string" == typeof d.showIcon ? d.showIcon : d.showIcon && d.icons[d.class] ? d.icons[d.class] : ""
                    },
                    remainingTime: function() {
                        return l ? l.css("opacity") * d.displayTime : 0
                    }
                },
                set: {
                    visible: function() {
                        o.addClass(f.visible)
                    }
                },
                remove: {
                    visible: function() {
                        o.removeClass(f.visible)
                    }
                },
                event: {
                    click: function(e) {
                        0 === F(e.target).closest("a").length && (d.onClick.call(i, y), u.close())
                    },
                    approve: function() {
                        !1 !== d.onApprove.call(y, h) ? u.close() : u.verbose("Approve callback returned false cancelling close")
                    },
                    deny: function() {
                        !1 !== d.onDeny.call(y, h) ? u.close() : u.verbose("Deny callback returned false cancelling close")
                    }
                },
                helpers: {
                    toClass: function(e) {
                        var t = e.split(" "),
                            n = "";
                        return t.forEach(function(e) {
                            n += "." + e
                        }), n
                    },
                    deQuote: function(e) {
                        return String(e).replace(/"/g, "")
                    },
                    escape: function(e, t) {
                        if (t) return e;
                        var n = {
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#x27;",
                            "`": "&#x60;"
                        };
                        return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                            return n[e]
                        }) : e
                    }
                },
                can: {
                    useElement: function(e) {
                        return F.fn[e] !== P || (u.error(m.noElement.replace("{element}", e)), !1)
                    }
                },
                setting: function(e, t) {
                    if (u.debug("Changing setting", e, t), F.isPlainObject(e)) F.extend(!0, d, e);
                    else {
                        if (t === P) return d[e];
                        F.isPlainObject(d[e]) ? F.extend(!0, d[e], t) : d[e] = t
                    }
                },
                internal: function(e, t) {
                    if (F.isPlainObject(e)) F.extend(!0, u, e);
                    else {
                        if (t === P) return u[e];
                        u[e] = t
                    }
                },
                debug: function() {
                    !d.silent && d.debug && (d.performance ? u.performance.log(arguments) : (u.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), u.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !d.silent && d.verbose && d.debug && (d.performance ? u.performance.log(arguments) : (u.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), u.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.silent || (u.error = Function.prototype.bind.call(console.error, console, d.name + ":"), u.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        d.performance && (n = (t = (new Date).getTime()) - (T || t), T = t, S.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: y,
                            "Execution Time": n
                        })), clearTimeout(u.performance.timer), u.performance.timer = setTimeout(u.performance.display, 500)
                    },
                    display: function() {
                        var e = d.name + ":",
                            n = 0;
                        T = !1, clearTimeout(u.performance.timer), F.each(S, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", k && (e += " '" + k + "'"), (console.group !== P || console.table !== P) && 0 < S.length && (console.groupCollapsed(e), console.table ? console.table(S) : F.each(S, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), S = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = x;
                    return e = e || E, t = y || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (F.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== P) return a = r[n], !1;
                            if (!F.isPlainObject(r[t]) || e == o) return r[t] !== P ? a = r[t] : u.error(m.method, i), !1;
                            r = r[t]
                        }
                    })), F.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), Array.isArray(w) ? w.push(n) : w !== P ? w = [w, n] : n !== P && (w = n), a
                }
            }, A ? (x === P && u.initialize(), u.invoke(D)) : (x !== P && x.invoke("destroy"), u.initialize(), w = h)
        }), w !== P ? w : this
    }, F.fn.toast.settings = {
        name: "Toast",
        namespace: "toast",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        context: "body",
        position: "top right",
        class: "neutral",
        classProgress: !1,
        classActions: !1,
        classImage: "mini",
        title: "",
        message: "",
        displayTime: 3e3,
        minDisplayTime: 1e3,
        wordsPerMinute: 120,
        showIcon: !1,
        newestOnTop: !1,
        showProgress: !1,
        pauseOnHover: !0,
        progressUp: !1,
        opacity: 1,
        compact: !0,
        closeIcon: !1,
        closeOnClick: !0,
        cloneModule: !0,
        actions: !1,
        preserveHTML: !0,
        showImage: !1,
        transition: {
            showMethod: "scale",
            showDuration: 500,
            hideMethod: "scale",
            hideDuration: 500,
            closeEasing: "easeOutCubic"
        },
        error: {
            method: "The method you called is not defined.",
            noElement: "This module requires ui {element}",
            verticalCard: "Vertical but not attached actions are not supported for card layout"
        },
        className: {
            container: "ui toast-container",
            box: "floating toast-box",
            progress: "ui attached active progress",
            toast: "ui toast",
            icon: "centered icon",
            visible: "visible",
            content: "content",
            title: "ui header",
            actions: "actions",
            extraContent: "extra content",
            button: "ui button",
            buttons: "ui buttons",
            close: "close icon",
            image: "ui image",
            vertical: "vertical",
            attached: "attached",
            inverted: "inverted",
            compact: "compact",
            pausable: "pausable",
            progressing: "progressing",
            top: "top",
            bottom: "bottom",
            left: "left",
            basic: "basic",
            unclickable: "unclickable"
        },
        icons: {
            info: "info",
            success: "checkmark",
            warning: "warning",
            error: "times"
        },
        selector: {
            container: ".ui.toast-container",
            box: ".toast-box",
            toast: ".ui.toast",
            input: 'input:not([type="hidden"]), textarea, select, button, .ui.button, ui.dropdown',
            approve: ".actions .positive, .actions .approve, .actions .ok",
            deny: ".actions .negative, .actions .deny, .actions .cancel"
        },
        fields: {
            class: "class",
            text: "text",
            icon: "icon",
            click: "click"
        },
        onShow: function() {},
        onVisible: function() {},
        onClick: function() {},
        onHide: function() {},
        onHidden: function() {},
        onRemove: function() {},
        onApprove: function() {},
        onDeny: function() {}
    }, F.extend(F.easing, {
        easeOutBounce: function(e, t, n, i, o) {
            return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeOutCubic: function(e) {
            return --e * e * e + 1
        }
    })
}(jQuery, window, document),
function(C, e, w, k) {
    "use strict";
    C.isFunction = C.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), C.fn.transition = function() {
        var c, r = C(this),
            g = r.selector || "",
            p = (new Date).getTime(),
            h = [],
            v = arguments,
            b = v[0],
            y = [].slice.call(arguments, 1),
            x = "string" == typeof b;
        return r.each(function(i) {
            var u, s, t, d, n, o, e, a, f, m = C(this),
                l = this;
            (f = {
                initialize: function() {
                    u = f.get.settings.apply(l, v), d = u.className, t = u.error, n = u.metadata, a = "." + u.namespace, e = "module-" + u.namespace, s = m.data(e) || f, o = f.get.animationEndEvent(), !1 === (x = x && f.invoke(b)) && (f.verbose("Converted arguments into settings object", u), u.interval ? f.delay(u.animate) : f.animate(), f.instantiate())
                },
                instantiate: function() {
                    f.verbose("Storing instance of module", f), s = f, m.data(e, s)
                },
                destroy: function() {
                    f.verbose("Destroying previous module for", l), m.removeData(e)
                },
                refresh: function() {
                    f.verbose("Refreshing display type on next animation"), delete f.displayType
                },
                forceRepaint: function() {
                    f.verbose("Forcing element repaint");
                    var e = m.parent(),
                        t = m.next();
                    0 === t.length ? m.detach().appendTo(e) : m.detach().insertBefore(t)
                },
                repaint: function() {
                    f.verbose("Repainting element");
                    l.offsetWidth
                },
                delay: function(e) {
                    var t, n = f.get.animationDirection();
                    n = n || (f.can.transition() ? f.get.direction() : "static"), e = e !== k ? e : u.interval, t = "auto" == u.reverse && n == d.outward || 1 == u.reverse ? (r.length - i) * u.interval : i * u.interval, f.debug("Delaying animation by", t), setTimeout(f.animate, t)
                },
                animate: function(e) {
                    if (u = e || u, !f.is.supported()) return f.error(t.support), !1;
                    if (f.debug("Preparing animation", u.animation), f.is.animating()) {
                        if (u.queue) return !u.allowRepeats && f.has.direction() && f.is.occurring() && !0 !== f.queuing ? f.debug("Animation is currently occurring, preventing queueing same animation", u.animation) : f.queue(u.animation), !1;
                        if (!u.allowRepeats && f.is.occurring()) return f.debug("Animation is already occurring, will not execute repeated animation", u.animation), !1;
                        f.debug("New animation started, completing previous early", u.animation), s.complete()
                    }
                    f.can.animate() ? f.set.animating(u.animation) : f.error(t.noAnimation, u.animation, l)
                },
                reset: function() {
                    f.debug("Resetting animation to beginning conditions"), f.remove.animationCallbacks(), f.restore.conditions(), f.remove.animating()
                },
                queue: function(e) {
                    f.debug("Queueing animation of", e), f.queuing = !0, m.one(o + ".queue" + a, function() {
                        f.queuing = !1, f.repaint(), f.animate.apply(this, u)
                    })
                },
                complete: function(e) {
                    e && e.target === l && e.stopPropagation(), f.debug("Animation complete", u.animation), f.remove.completeCallback(), f.remove.failSafe(), f.is.looping() || (f.is.outward() ? (f.verbose("Animation is outward, hiding element"), f.restore.conditions(), f.hide()) : f.is.inward() ? (f.verbose("Animation is outward, showing element"), f.restore.conditions(), f.show()) : (f.verbose("Static animation completed"), f.restore.conditions(), u.onComplete.call(l)))
                },
                force: {
                    visible: function() {
                        var e = m.attr("style"),
                            t = f.get.userStyle(e),
                            n = f.get.displayType(),
                            i = t + "display: " + n + " !important;",
                            o = m[0].style.display;
                        return !n || "none" === o && u.skipInlineHidden || m[0].tagName.match(/(script|link|style)/i) ? (f.remove.transition(), !1) : (f.verbose("Overriding default display to show element", n), m.attr("style", i), !0)
                    },
                    hidden: function() {
                        var e = m.attr("style"),
                            t = m.css("display"),
                            n = e === k || "" === e;
                        "none" === t || f.is.hidden() ? n && m.removeAttr("style") : (f.verbose("Overriding default display to hide element"), m.css("display", "none"))
                    }
                },
                has: {
                    direction: function(e) {
                        var n = !1;
                        return "string" == typeof(e = e || u.animation) && (e = e.split(" "), C.each(e, function(e, t) {
                            t !== d.inward && t !== d.outward || (n = !0)
                        })), n
                    },
                    inlineDisplay: function() {
                        var e = m.attr("style") || "";
                        return Array.isArray(e.match(/display.*?;/, ""))
                    }
                },
                set: {
                    animating: function(e) {
                        f.remove.completeCallback(), e = e || u.animation;
                        var t = f.get.animationClass(e);
                        f.save.animation(t), f.force.visible() && (f.remove.hidden(), f.remove.direction(), f.start.animation(t))
                    },
                    duration: function(e, t) {
                        !(t = "number" == typeof(t = t || u.duration) ? t + "ms" : t) && 0 !== t || (f.verbose("Setting animation duration", t), m.css({
                            "animation-duration": t
                        }))
                    },
                    direction: function(e) {
                        (e = e || f.get.direction()) == d.inward ? f.set.inward() : f.set.outward()
                    },
                    looping: function() {
                        f.debug("Transition set to loop"), m.addClass(d.looping)
                    },
                    hidden: function() {
                        m.addClass(d.transition).addClass(d.hidden)
                    },
                    inward: function() {
                        f.debug("Setting direction to inward"), m.removeClass(d.outward).addClass(d.inward)
                    },
                    outward: function() {
                        f.debug("Setting direction to outward"), m.removeClass(d.inward).addClass(d.outward)
                    },
                    visible: function() {
                        m.addClass(d.transition).addClass(d.visible)
                    }
                },
                start: {
                    animation: function(e) {
                        e = e || f.get.animationClass(), f.debug("Starting tween", e), m.addClass(e).one(o + ".complete" + a, f.complete), u.useFailSafe && f.add.failSafe(), f.set.duration(u.duration), u.onStart.call(l)
                    }
                },
                save: {
                    animation: function(e) {
                        f.cache || (f.cache = {}), f.cache.animation = e
                    },
                    displayType: function(e) {
                        "none" !== e && m.data(n.displayType, e)
                    },
                    transitionExists: function(e, t) {
                        C.fn.transition.exists[e] = t, f.verbose("Saving existence of transition", e, t)
                    }
                },
                restore: {
                    conditions: function() {
                        var e = f.get.currentAnimation();
                        e && (m.removeClass(e), f.verbose("Removing animation class", f.cache)), f.remove.duration()
                    }
                },
                add: {
                    failSafe: function() {
                        var e = f.get.duration();
                        f.timer = setTimeout(function() {
                            m.triggerHandler(o)
                        }, e + u.failSafeDelay), f.verbose("Adding fail safe timer", f.timer)
                    }
                },
                remove: {
                    animating: function() {
                        m.removeClass(d.animating)
                    },
                    animationCallbacks: function() {
                        f.remove.queueCallback(), f.remove.completeCallback()
                    },
                    queueCallback: function() {
                        m.off(".queue" + a)
                    },
                    completeCallback: function() {
                        m.off(".complete" + a)
                    },
                    display: function() {
                        m.css("display", "")
                    },
                    direction: function() {
                        m.removeClass(d.inward).removeClass(d.outward)
                    },
                    duration: function() {
                        m.css("animation-duration", "")
                    },
                    failSafe: function() {
                        f.verbose("Removing fail safe timer", f.timer), f.timer && clearTimeout(f.timer)
                    },
                    hidden: function() {
                        m.removeClass(d.hidden)
                    },
                    visible: function() {
                        m.removeClass(d.visible)
                    },
                    looping: function() {
                        f.debug("Transitions are no longer looping"), f.is.looping() && (f.reset(), m.removeClass(d.looping))
                    },
                    transition: function() {
                        m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)
                    }
                },
                get: {
                    settings: function(e, t, n) {
                        return "object" == typeof e ? C.extend(!0, {}, C.fn.transition.settings, e) : "function" == typeof n ? C.extend({}, C.fn.transition.settings, {
                            animation: e,
                            onComplete: n,
                            duration: t
                        }) : "string" == typeof t || "number" == typeof t ? C.extend({}, C.fn.transition.settings, {
                            animation: e,
                            duration: t
                        }) : "object" == typeof t ? C.extend({}, C.fn.transition.settings, t, {
                            animation: e
                        }) : "function" == typeof t ? C.extend({}, C.fn.transition.settings, {
                            animation: e,
                            onComplete: t
                        }) : C.extend({}, C.fn.transition.settings, {
                            animation: e
                        })
                    },
                    animationClass: function(e) {
                        var t = e || u.animation,
                            n = f.can.transition() && !f.has.direction() ? f.get.direction() + " " : "";
                        return d.animating + " " + d.transition + " " + n + t
                    },
                    currentAnimation: function() {
                        return !(!f.cache || f.cache.animation === k) && f.cache.animation
                    },
                    currentDirection: function() {
                        return f.is.inward() ? d.inward : d.outward
                    },
                    direction: function() {
                        return f.is.hidden() || !f.is.visible() ? d.inward : d.outward
                    },
                    animationDirection: function(e) {
                        var n;
                        return "string" == typeof(e = e || u.animation) && (e = e.split(" "), C.each(e, function(e, t) {
                            t === d.inward ? n = d.inward : t === d.outward && (n = d.outward)
                        })), n || !1
                    },
                    duration: function(e) {
                        return !1 === (e = e || u.duration) && (e = m.css("animation-duration") || 0), "string" == typeof e ? -1 < e.indexOf("ms") ? parseFloat(e) : 1e3 * parseFloat(e) : e
                    },
                    displayType: function(e) {
                        if (e = e === k || e, u.displayType) return u.displayType;
                        if (e && m.data(n.displayType) === k) {
                            var t = m.css("display");
                            "" === t || "none" === t ? f.can.transition(!0) : f.save.displayType(t)
                        }
                        return m.data(n.displayType)
                    },
                    userStyle: function(e) {
                        return (e = e || m.attr("style") || "").replace(/display.*?;/, "")
                    },
                    transitionExists: function(e) {
                        return C.fn.transition.exists[e]
                    },
                    animationStartEvent: function() {
                        var e, t = w.createElement("div"),
                            n = {
                                animation: "animationstart",
                                OAnimation: "oAnimationStart",
                                MozAnimation: "mozAnimationStart",
                                WebkitAnimation: "webkitAnimationStart"
                            };
                        for (e in n)
                            if (t.style[e] !== k) return n[e];
                        return !1
                    },
                    animationEndEvent: function() {
                        var e, t = w.createElement("div"),
                            n = {
                                animation: "animationend",
                                OAnimation: "oAnimationEnd",
                                MozAnimation: "mozAnimationEnd",
                                WebkitAnimation: "webkitAnimationEnd"
                            };
                        for (e in n)
                            if (t.style[e] !== k) return n[e];
                        return !1
                    }
                },
                can: {
                    transition: function(e) {
                        var t, n, i, o, a, r, s = u.animation,
                            l = f.get.transitionExists(s),
                            c = f.get.displayType(!1);
                        if (l === k || e) {
                            if (f.verbose("Determining whether animation exists"), t = m.attr("class"), n = m.prop("tagName"), o = (i = C("<" + n + " />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"), a = i.addClass(d.inward).css("animationName"), c || (c = i.attr("class", t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"), f.verbose("Determining final display state", c), f.save.displayType(c)), i.remove(), o != a) f.debug("Direction exists for animation", s), r = !0;
                            else {
                                if ("none" == o || !o) return void f.debug("No animation defined in css", s);
                                f.debug("Static animation found", s, c), r = !1
                            }
                            f.save.transitionExists(s, r)
                        }
                        return l !== k ? l : r
                    },
                    animate: function() {
                        return f.can.transition() !== k
                    }
                },
                is: {
                    animating: function() {
                        return m.hasClass(d.animating)
                    },
                    inward: function() {
                        return m.hasClass(d.inward)
                    },
                    outward: function() {
                        return m.hasClass(d.outward)
                    },
                    looping: function() {
                        return m.hasClass(d.looping)
                    },
                    occurring: function(e) {
                        return e = "." + (e = e || u.animation).replace(" ", "."), 0 < m.filter(e).length
                    },
                    visible: function() {
                        return m.is(":visible")
                    },
                    hidden: function() {
                        return "hidden" === m.css("visibility")
                    },
                    supported: function() {
                        return !1 !== o
                    }
                },
                hide: function() {
                    f.verbose("Hiding element"), f.is.animating() && f.reset(), l.blur(), f.remove.display(), f.remove.visible(), C.isFunction(u.onBeforeHide) ? u.onBeforeHide.call(l, function() {
                        f.hideNow()
                    }) : f.hideNow()
                },
                hideNow: function() {
                    f.set.hidden(), f.force.hidden(), u.onHide.call(l), u.onComplete.call(l)
                },
                show: function(e) {
                    f.verbose("Showing element", e), f.force.visible() && (f.remove.hidden(), f.set.visible(), u.onShow.call(l), u.onComplete.call(l))
                },
                toggle: function() {
                    f.is.visible() ? f.hide() : f.show()
                },
                stop: function() {
                    f.debug("Stopping current animation"), m.triggerHandler(o)
                },
                stopAll: function() {
                    f.debug("Stopping all animation"), f.remove.queueCallback(), m.triggerHandler(o)
                },
                clear: {
                    queue: function() {
                        f.debug("Clearing animation queue"), f.remove.queueCallback()
                    }
                },
                enable: function() {
                    f.verbose("Starting animation"), m.removeClass(d.disabled)
                },
                disable: function() {
                    f.debug("Stopping animation"), m.addClass(d.disabled)
                },
                setting: function(e, t) {
                    if (f.debug("Changing setting", e, t), C.isPlainObject(e)) C.extend(!0, u, e);
                    else {
                        if (t === k) return u[e];
                        C.isPlainObject(u[e]) ? C.extend(!0, u[e], t) : u[e] = t
                    }
                },
                internal: function(e, t) {
                    if (C.isPlainObject(e)) C.extend(!0, f, e);
                    else {
                        if (t === k) return f[e];
                        f[e] = t
                    }
                },
                debug: function() {
                    !u.silent && u.debug && (u.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), f.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !u.silent && u.verbose && u.debug && (u.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), f.verbose.apply(console, arguments)))
                },
                error: function() {
                    u.silent || (f.error = Function.prototype.bind.call(console.error, console, u.name + ":"), f.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        u.performance && (n = (t = (new Date).getTime()) - (p || t), p = t, h.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: l,
                            "Execution Time": n
                        })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                    },
                    display: function() {
                        var e = u.name + ":",
                            n = 0;
                        p = !1, clearTimeout(f.performance.timer), C.each(h, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", g && (e += " '" + g + "'"), 1 < r.length && (e += " (" + r.length + ")"), (console.group !== k || console.table !== k) && 0 < h.length && (console.groupCollapsed(e), console.table ? console.table(h) : C.each(h, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), h = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = s;
                    return e = e || y, t = l || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, C.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (C.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== k) return a = r[n], !1;
                            if (!C.isPlainObject(r[t]) || e == o) return r[t] !== k && (a = r[t]), !1;
                            r = r[t]
                        }
                    })), C.isFunction(a) ? n = a.apply(t, e) : a !== k && (n = a), Array.isArray(c) ? c.push(n) : c !== k ? c = [c, n] : n !== k && (c = n), a !== k && a
                }
            }).initialize()
        }), c !== k ? c : this
    }, C.fn.transition.exists = {}, C.fn.transition.settings = {
        name: "Transition",
        silent: !1,
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "transition",
        interval: 0,
        reverse: "auto",
        onStart: function() {},
        onComplete: function() {},
        onShow: function() {},
        onHide: function() {},
        useFailSafe: !0,
        failSafeDelay: 100,
        allowRepeats: !1,
        displayType: !1,
        animation: "fade",
        duration: !1,
        queue: !0,
        skipInlineHidden: !1,
        metadata: {
            displayType: "display"
        },
        className: {
            animating: "animating",
            disabled: "disabled",
            hidden: "hidden",
            inward: "in",
            loading: "loading",
            looping: "looping",
            outward: "out",
            transition: "transition",
            visible: "visible"
        },
        error: {
            noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
            repeated: "That animation is already occurring, cancelling repeated animation",
            method: "The method you called is not defined",
            support: "This browser does not support CSS animations"
        }
    }
}(jQuery, window, document),
function(E, F, e, P) {
    "use strict";
    E.isWindow = E.isWindow || function(e) {
        return null != e && e === e.window
    }, F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.api = E.fn.api = function(x) {
        var C, e = E.isFunction(this) ? E(F) : E(this),
            w = e.selector || "",
            k = (new Date).getTime(),
            T = [],
            S = x,
            D = "string" == typeof S,
            A = [].slice.call(arguments, 1);
        return e.each(function() {
            var a, r, n, e, s, l, c = E.isPlainObject(x) ? E.extend(!0, {}, E.fn.api.settings, x) : E.extend({}, E.fn.api.settings),
                t = c.namespace,
                i = c.metadata,
                o = c.selector,
                u = c.error,
                d = c.className,
                f = "." + t,
                m = "module-" + t,
                g = E(this),
                p = g.closest(o.form),
                h = c.stateContext ? E(c.stateContext) : g,
                v = this,
                b = h[0],
                y = g.data(m);
            l = {
                initialize: function() {
                    D || l.bind.events(), l.instantiate()
                },
                instantiate: function() {
                    l.verbose("Storing instance of module", l), y = l, g.data(m, y)
                },
                destroy: function() {
                    l.verbose("Destroying previous module for", v), g.removeData(m).off(f)
                },
                bind: {
                    events: function() {
                        var e = l.get.event();
                        e ? (l.verbose("Attaching API events to element", e), g.on(e + f, l.event.trigger)) : "now" == c.on && (l.debug("Querying API endpoint immediately"), l.query())
                    }
                },
                decode: {
                    json: function(e) {
                        if (e !== P && "string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }
                },
                read: {
                    cachedResponse: function(e) {
                        var t;
                        if (F.Storage !== P) return t = sessionStorage.getItem(e), l.debug("Using cached response", e, t), t = l.decode.json(t);
                        l.error(u.noStorage)
                    }
                },
                write: {
                    cachedResponse: function(e, t) {
                        t && "" === t ? l.debug("Response empty, not caching", t) : F.Storage !== P ? (E.isPlainObject(t) && (t = JSON.stringify(t)), sessionStorage.setItem(e, t), l.verbose("Storing cached response for url", e, t)) : l.error(u.noStorage)
                    }
                },
                query: function() {
                    if (l.is.disabled()) l.debug("Element is disabled API request aborted");
                    else {
                        if (l.is.loading()) {
                            if (!c.interruptRequests) return void l.debug("Cancelling request, previous request is still pending");
                            l.debug("Interrupting previous request"), l.abort()
                        }
                        if (c.defaultData && E.extend(!0, c.urlData, l.get.defaultData()), c.serializeForm && (c.data = l.add.formData(c.data)), !1 === (r = l.get.settings())) return l.cancelled = !0, void l.error(u.beforeSend);
                        if (l.cancelled = !1, (n = l.get.templatedURL()) || l.is.mocked()) {
                            if ((n = l.add.urlData(n)) || l.is.mocked()) {
                                if (r.url = c.base + n, a = E.extend(!0, {}, c, {
                                        type: c.method || c.type,
                                        data: e,
                                        url: c.base + n,
                                        beforeSend: c.beforeXHR,
                                        success: function() {},
                                        failure: function() {},
                                        complete: function() {}
                                    }), l.debug("Querying URL", a.url), l.verbose("Using AJAX settings", a), "local" === c.cache && l.read.cachedResponse(n)) return l.debug("Response returned from local cache"), l.request = l.create.request(), void l.request.resolveWith(b, [l.read.cachedResponse(n)]);
                                c.throttle ? c.throttleFirstRequest || l.timer ? (l.debug("Throttling request", c.throttle), clearTimeout(l.timer), l.timer = setTimeout(function() {
                                    l.timer && delete l.timer, l.debug("Sending throttled request", e, a.method), l.send.request()
                                }, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request(), l.timer = setTimeout(function() {}, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request())
                            }
                        } else l.error(u.missingURL)
                    }
                },
                should: {
                    removeError: function() {
                        return !0 === c.hideError || "auto" === c.hideError && !l.is.form()
                    }
                },
                is: {
                    disabled: function() {
                        return 0 < g.filter(o.disabled).length
                    },
                    expectingJSON: function() {
                        return "json" === c.dataType || "jsonp" === c.dataType
                    },
                    form: function() {
                        return g.is("form") || h.is("form")
                    },
                    mocked: function() {
                        return c.mockResponse || c.mockResponseAsync || c.response || c.responseAsync
                    },
                    input: function() {
                        return g.is("input")
                    },
                    loading: function() {
                        return !!l.request && "pending" == l.request.state()
                    },
                    abortedRequest: function(e) {
                        return e && e.readyState !== P && 0 === e.readyState ? (l.verbose("XHR request determined to be aborted"), !0) : (l.verbose("XHR request was not aborted"), !1)
                    },
                    validResponse: function(e) {
                        return l.is.expectingJSON() && E.isFunction(c.successTest) ? (l.debug("Checking JSON returned success", c.successTest, e), c.successTest(e) ? (l.debug("Response passed success test", e), !0) : (l.debug("Response failed success test", e), !1)) : (l.verbose("Response is not JSON, skipping validation", c.successTest, e), !0)
                    }
                },
                was: {
                    cancelled: function() {
                        return l.cancelled || !1
                    },
                    succesful: function() {
                        return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'), l.was.successful()
                    },
                    successful: function() {
                        return l.request && "resolved" == l.request.state()
                    },
                    failure: function() {
                        return l.request && "rejected" == l.request.state()
                    },
                    complete: function() {
                        return l.request && ("resolved" == l.request.state() || "rejected" == l.request.state())
                    }
                },
                add: {
                    urlData: function(o, a) {
                        var e, t;
                        return o && (e = o.match(c.regExp.required), t = o.match(c.regExp.optional), a = a || c.urlData, e && (l.debug("Looking for required URL variables", e), E.each(e, function(e, t) {
                            var n = -1 !== t.indexOf("$") ? t.substr(2, t.length - 3) : t.substr(1, t.length - 2),
                                i = E.isPlainObject(a) && a[n] !== P ? a[n] : g.data(n) !== P ? g.data(n) : h.data(n) !== P ? h.data(n) : a[n];
                            if (i === P) return l.error(u.requiredParameter, n, o), o = !1;
                            l.verbose("Found required variable", n, i), i = c.encodeParameters ? l.get.urlEncodedValue(i) : i, o = o.replace(t, i)
                        })), t && (l.debug("Looking for optional URL variables", e), E.each(t, function(e, t) {
                            var n = -1 !== t.indexOf("$") ? t.substr(3, t.length - 4) : t.substr(2, t.length - 3),
                                i = E.isPlainObject(a) && a[n] !== P ? a[n] : g.data(n) !== P ? g.data(n) : h.data(n) !== P ? h.data(n) : a[n];
                            o = i !== P ? (l.verbose("Optional variable Found", n, i), o.replace(t, i)) : (l.verbose("Optional variable not found", n), -1 !== o.indexOf("/" + t) ? o.replace("/" + t, "") : o.replace(t, ""))
                        }))), o
                    },
                    formData: function(e) {
                        var t = E.fn.serializeObject !== P,
                            n = t ? p.serializeObject() : p.serialize();
                        return e = e || c.data, e = E.isPlainObject(e) ? t ? (l.debug("Extending existing data with form data", e, n), E.extend(!0, {}, e, n)) : (l.error(u.missingSerialize), l.debug("Cant extend data. Replacing data with form data", e, n), n) : (l.debug("Adding form data", n), n)
                    }
                },
                send: {
                    request: function() {
                        l.set.loading(), l.request = l.create.request(), l.is.mocked() ? l.mockedXHR = l.create.mockedXHR() : l.xhr = l.create.xhr(), c.onRequest.call(b, l.request, l.xhr)
                    }
                },
                event: {
                    trigger: function(e) {
                        l.query(), "submit" != e.type && "click" != e.type || e.preventDefault()
                    },
                    xhr: {
                        always: function() {},
                        done: function(e, t, n) {
                            var i = this,
                                o = (new Date).getTime() - s,
                                a = c.loadingDuration - o,
                                r = !!E.isFunction(c.onResponse) && (l.is.expectingJSON() && !c.rawResponse ? c.onResponse.call(i, E.extend(!0, {}, e)) : c.onResponse.call(i, e));
                            a = 0 < a ? a : 0, r && (l.debug("Modified API response in onResponse callback", c.onResponse, r, e), e = r), 0 < a && l.debug("Response completed early delaying state change by", a), setTimeout(function() {
                                l.is.validResponse(e) ? l.request.resolveWith(i, [e, n]) : l.request.rejectWith(i, [n, "invalid"])
                            }, a)
                        },
                        fail: function(e, t, n) {
                            var i = this,
                                o = (new Date).getTime() - s,
                                a = c.loadingDuration - o;
                            0 < (a = 0 < a ? a : 0) && l.debug("Response completed early delaying state change by", a), setTimeout(function() {
                                l.is.abortedRequest(e) ? l.request.rejectWith(i, [e, "aborted", n]) : l.request.rejectWith(i, [e, "error", t, n])
                            }, a)
                        }
                    },
                    request: {
                        done: function(e, t) {
                            l.debug("Successful API Response", e), "local" === c.cache && n && (l.write.cachedResponse(n, e), l.debug("Saving server response locally", l.cache)), c.onSuccess.call(b, e, g, t)
                        },
                        complete: function(e, t) {
                            var n, i;
                            l.was.successful() ? (i = e, n = t) : (n = e, i = l.get.responseFromXHR(n)), l.remove.loading(), c.onComplete.call(b, i, g, n)
                        },
                        fail: function(e, t, n) {
                            var i = l.get.responseFromXHR(e),
                                o = l.get.errorFromRequest(i, t, n);
                            if ("aborted" == t) return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), c.onAbort.call(b, t, g, e), !0;
                            "invalid" == t ? l.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && e !== P && (l.debug("XHR produced a server error", t, n), (e.status < 200 || 300 <= e.status) && n !== P && "" !== n && l.error(u.statusMessage + n, a.url), c.onError.call(b, o, g, e)), c.errorDuration && "aborted" !== t && (l.debug("Adding error state"), l.set.error(), l.should.removeError() && setTimeout(l.remove.error, c.errorDuration)), l.debug("API Request failed", o, e), c.onFailure.call(b, i, g, e)
                        }
                    }
                },
                create: {
                    request: function() {
                        return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)
                    },
                    mockedXHR: function() {
                        var e, t, n, i = c.mockResponse || c.response,
                            o = c.mockResponseAsync || c.responseAsync;
                        return n = E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail), i ? (t = E.isFunction(i) ? (l.debug("Using specified synchronous callback", i), i.call(b, r)) : (l.debug("Using settings specified response", i), i), n.resolveWith(b, [t, !1, {
                            responseText: t
                        }])) : E.isFunction(o) && (e = function(e) {
                            l.debug("Async callback returned response", e), e ? n.resolveWith(b, [e, !1, {
                                responseText: e
                            }]) : n.rejectWith(b, [{
                                responseText: e
                            }, !1, !1])
                        }, l.debug("Using specified async response callback", o), o.call(b, r, e)), n
                    },
                    xhr: function() {
                        var e;
                        return e = E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail), l.verbose("Created server request", e, a), e
                    }
                },
                set: {
                    error: function() {
                        l.verbose("Adding error state to element", h), h.addClass(d.error)
                    },
                    loading: function() {
                        l.verbose("Adding loading state to element", h), h.addClass(d.loading), s = (new Date).getTime()
                    }
                },
                remove: {
                    error: function() {
                        l.verbose("Removing error state from element", h), h.removeClass(d.error)
                    },
                    loading: function() {
                        l.verbose("Removing loading state from element", h), h.removeClass(d.loading)
                    }
                },
                get: {
                    responseFromXHR: function(e) {
                        return !!E.isPlainObject(e) && (l.is.expectingJSON() ? l.decode.json(e.responseText) : e.responseText)
                    },
                    errorFromRequest: function(e, t, n) {
                        return E.isPlainObject(e) && e.error !== P ? e.error : c.error[t] !== P ? c.error[t] : n
                    },
                    request: function() {
                        return l.request || !1
                    },
                    xhr: function() {
                        return l.xhr || !1
                    },
                    settings: function() {
                        var e;
                        return (e = c.beforeSend.call(g, c)) && (e.success !== P && (l.debug("Legacy success callback detected", e), l.error(u.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== P && (l.debug("Legacy failure callback detected", e), l.error(u.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== P && (l.debug("Legacy complete callback detected", e), l.error(u.legacyParameters, e.complete), e.onComplete = e.complete)), e === P && l.error(u.noReturnedValue), !1 === e ? e : e !== P ? E.extend(!0, {}, e) : E.extend(!0, {}, c)
                    },
                    urlEncodedValue: function(e) {
                        var t = F.decodeURIComponent(e),
                            n = F.encodeURIComponent(e);
                        return t !== e ? (l.debug("URL value is already encoded, avoiding double encoding", e), e) : (l.verbose("Encoding value using encodeURIComponent", e, n), n)
                    },
                    defaultData: function() {
                        var e = {};
                        return E.isWindow(v) || (l.is.input() ? e.value = g.val() : l.is.form() || (e.text = g.text())), e
                    },
                    event: function() {
                        return E.isWindow(v) || "now" == c.on ? (l.debug("API called without element, no events attached"), !1) : "auto" == c.on ? g.is("input") ? v.oninput !== P ? "input" : v.onpropertychange !== P ? "propertychange" : "keyup" : g.is("form") ? "submit" : "click" : c.on
                    },
                    templatedURL: function(e) {
                        if (e = e || g.data(i.action) || c.action || !1, n = g.data(i.url) || c.url || !1) return l.debug("Using specified url", n), n;
                        if (e) {
                            if (l.debug("Looking up url for action", e, c.api), c.api[e] === P && !l.is.mocked()) return void l.error(u.missingAction, c.action, c.api);
                            n = c.api[e]
                        } else l.is.form() && (n = g.attr("action") || h.attr("action") || !1, l.debug("No url or action specified, defaulting to form action", n));
                        return n
                    }
                },
                abort: function() {
                    var e = l.get.xhr();
                    e && "resolved" !== e.state() && (l.debug("Cancelling API request"), e.abort())
                },
                reset: function() {
                    l.remove.error(), l.remove.loading()
                },
                setting: function(e, t) {
                    if (l.debug("Changing setting", e, t), E.isPlainObject(e)) E.extend(!0, c, e);
                    else {
                        if (t === P) return c[e];
                        E.isPlainObject(c[e]) ? E.extend(!0, c[e], t) : c[e] = t
                    }
                },
                internal: function(e, t) {
                    if (E.isPlainObject(e)) E.extend(!0, l, e);
                    else {
                        if (t === P) return l[e];
                        l[e] = t
                    }
                },
                debug: function() {
                    !c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)))
                },
                error: function() {
                    c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        c.performance && (n = (t = (new Date).getTime()) - (k || t), k = t, T.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500)
                    },
                    display: function() {
                        var e = c.name + ":",
                            n = 0;
                        k = !1, clearTimeout(l.performance.timer), E.each(T, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", w && (e += " '" + w + "'"), (console.group !== P || console.table !== P) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : E.each(T, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), T = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = y;
                    return e = e || A, t = v || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (E.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== P) return a = r[n], !1;
                            if (!E.isPlainObject(r[t]) || e == o) return r[t] !== P ? a = r[t] : l.error(u.method, i), !1;
                            r = r[t]
                        }
                    })), E.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), Array.isArray(C) ? C.push(n) : C !== P ? C = [C, n] : n !== P && (C = n), a
                }
            }, D ? (y === P && l.initialize(), l.invoke(S)) : (y !== P && y.invoke("destroy"), l.initialize())
        }), C !== P ? C : this
    }, E.api.settings = {
        name: "API",
        namespace: "api",
        debug: !1,
        verbose: !1,
        performance: !0,
        api: {},
        cache: !0,
        interruptRequests: !0,
        on: "auto",
        stateContext: !1,
        loadingDuration: 0,
        hideError: "auto",
        errorDuration: 2e3,
        encodeParameters: !0,
        action: !1,
        url: !1,
        base: "",
        urlData: {},
        defaultData: !0,
        serializeForm: !1,
        throttle: 0,
        throttleFirstRequest: !0,
        method: "get",
        data: {},
        dataType: "json",
        mockResponse: !1,
        mockResponseAsync: !1,
        response: !1,
        responseAsync: !1,
        rawResponse: !1,
        beforeSend: function(e) {
            return e
        },
        beforeXHR: function(e) {},
        onRequest: function(e, t) {},
        onResponse: !1,
        onSuccess: function(e, t) {},
        onComplete: function(e, t) {},
        onFailure: function(e, t) {},
        onError: function(e, t) {},
        onAbort: function(e, t) {},
        successTest: !1,
        error: {
            beforeSend: "The before send function has aborted the request",
            error: "There was an error with your request",
            exitConditions: "API Request Aborted. Exit conditions met",
            JSONParse: "JSON could not be parsed during error handling",
            legacyParameters: "You are using legacy API success callback names",
            method: "The method you called is not defined",
            missingAction: "API action used but no url was defined",
            missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
            missingURL: "No URL specified for api event",
            noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
            noStorage: "Caching responses locally requires session storage",
            parseError: "There was an error parsing your request",
            requiredParameter: "Missing a required URL parameter: ",
            statusMessage: "Server gave an error: ",
            timeout: "Your request timed out"
        },
        regExp: {
            required: /\{\$*[A-z0-9]+\}/g,
            optional: /\{\/\$*[A-z0-9]+\}/g
        },
        className: {
            loading: "loading",
            error: "error"
        },
        selector: {
            disabled: ".disabled",
            form: "form"
        },
        metadata: {
            action: "action",
            url: "url"
        }
    }
}(jQuery, window, document),
function(w, e, t, k) {
    "use strict";
    w.isFunction = w.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), w.fn.state = function(m) {
        var g, p = w(this),
            h = p.selector || "",
            v = (new Date).getTime(),
            b = [],
            y = m,
            x = "string" == typeof y,
            C = [].slice.call(arguments, 1);
        return p.each(function() {
            var s, o = w.isPlainObject(m) ? w.extend(!0, {}, w.fn.state.settings, m) : w.extend({}, w.fn.state.settings),
                l = o.error,
                n = o.metadata,
                t = o.className,
                e = o.namespace,
                i = o.states,
                a = o.text,
                r = "." + e,
                c = e + "-module",
                u = w(this),
                d = this,
                f = u.data(c);
            s = {
                initialize: function() {
                    s.verbose("Initializing module"), o.automatic && s.add.defaults(), o.context && "" !== h ? w(o.context).on(h, "mouseenter" + r, s.change.text).on(h, "mouseleave" + r, s.reset.text).on(h, "click" + r, s.toggle.state) : u.on("mouseenter" + r, s.change.text).on("mouseleave" + r, s.reset.text).on("click" + r, s.toggle.state), s.instantiate()
                },
                instantiate: function() {
                    s.verbose("Storing instance of module", s), f = s, u.data(c, s)
                },
                destroy: function() {
                    s.verbose("Destroying previous module", f), u.off(r).removeData(c)
                },
                refresh: function() {
                    s.verbose("Refreshing selector cache"), u = w(d)
                },
                add: {
                    defaults: function() {
                        var n = m && w.isPlainObject(m.states) ? m.states : {};
                        w.each(o.defaults, function(e, t) {
                            s.is[e] !== k && s.is[e]() && (s.verbose("Adding default states", e, d), w.extend(o.states, t, n))
                        })
                    }
                },
                is: {
                    active: function() {
                        return u.hasClass(t.active)
                    },
                    loading: function() {
                        return u.hasClass(t.loading)
                    },
                    inactive: function() {
                        return !u.hasClass(t.active)
                    },
                    state: function(e) {
                        return t[e] !== k && u.hasClass(t[e])
                    },
                    enabled: function() {
                        return !u.is(o.filter.active)
                    },
                    disabled: function() {
                        return u.is(o.filter.active)
                    },
                    textEnabled: function() {
                        return !u.is(o.filter.text)
                    },
                    button: function() {
                        return u.is(".button:not(a, .submit)")
                    },
                    input: function() {
                        return u.is("input")
                    },
                    progress: function() {
                        return u.is(".ui.progress")
                    }
                },
                allow: function(e) {
                    s.debug("Now allowing state", e), i[e] = !0
                },
                disallow: function(e) {
                    s.debug("No longer allowing", e), i[e] = !1
                },
                allows: function(e) {
                    return i[e] || !1
                },
                enable: function() {
                    u.removeClass(t.disabled)
                },
                disable: function() {
                    u.addClass(t.disabled)
                },
                setState: function(e) {
                    s.allows(e) && u.addClass(t[e])
                },
                removeState: function(e) {
                    s.allows(e) && u.removeClass(t[e])
                },
                toggle: {
                    state: function() {
                        var e;
                        if (s.allows("active") && s.is.enabled()) {
                            if (s.refresh(), w.fn.api !== k)
                                if (e = u.api("get request"), u.api("was cancelled")) s.debug("API Request cancelled by beforesend"), o.activateTest = function() {
                                    return !1
                                }, o.deactivateTest = function() {
                                    return !1
                                };
                                else if (e) return void s.listenTo(e);
                            s.change.state()
                        }
                    }
                },
                listenTo: function(e) {
                    s.debug("API request detected, waiting for state signal", e), e && (a.loading && s.update.text(a.loading), w.when(e).then(function() {
                        "resolved" == e.state() ? (s.debug("API request succeeded"), o.activateTest = function() {
                            return !0
                        }, o.deactivateTest = function() {
                            return !0
                        }) : (s.debug("API request failed"), o.activateTest = function() {
                            return !1
                        }, o.deactivateTest = function() {
                            return !1
                        }), s.change.state()
                    }))
                },
                change: {
                    state: function() {
                        s.debug("Determining state change direction"), s.is.inactive() ? s.activate() : s.deactivate(), o.sync && s.sync(), o.onChange.call(d)
                    },
                    text: function() {
                        s.is.textEnabled() && (s.is.disabled() ? (s.verbose("Changing text to disabled text", a.hover), s.update.text(a.disabled)) : s.is.active() ? a.hover ? (s.verbose("Changing text to hover text", a.hover), s.update.text(a.hover)) : a.deactivate && (s.verbose("Changing text to deactivating text", a.deactivate), s.update.text(a.deactivate)) : a.hover ? (s.verbose("Changing text to hover text", a.hover), s.update.text(a.hover)) : a.activate && (s.verbose("Changing text to activating text", a.activate), s.update.text(a.activate)))
                    }
                },
                activate: function() {
                    o.activateTest.call(d) && (s.debug("Setting state to active"), u.addClass(t.active), s.update.text(a.active), o.onActivate.call(d))
                },
                deactivate: function() {
                    o.deactivateTest.call(d) && (s.debug("Setting state to inactive"), u.removeClass(t.active), s.update.text(a.inactive), o.onDeactivate.call(d))
                },
                sync: function() {
                    s.verbose("Syncing other buttons to current state"), s.is.active() ? p.not(u).state("activate") : p.not(u).state("deactivate")
                },
                get: {
                    text: function() {
                        return o.selector.text ? u.find(o.selector.text).text() : u.html()
                    },
                    textFor: function(e) {
                        return a[e] || !1
                    }
                },
                flash: {
                    text: function(e, t, n) {
                        var i = s.get.text();
                        s.debug("Flashing text message", e, t), e = e || o.text.flash, t = t || o.flashDuration, n = n || function() {}, s.update.text(e), setTimeout(function() {
                            s.update.text(i), n.call(d)
                        }, t)
                    }
                },
                reset: {
                    text: function() {
                        var e = a.active || u.data(n.storedText),
                            t = a.inactive || u.data(n.storedText);
                        s.is.textEnabled() && (s.is.active() && e ? (s.verbose("Resetting active text", e), s.update.text(e)) : t && (s.verbose("Resetting inactive text", e), s.update.text(t)))
                    }
                },
                update: {
                    text: function(e) {
                        var t = s.get.text();
                        e && e !== t ? (s.debug("Updating text", e), o.selector.text ? u.data(n.storedText, e).find(o.selector.text).text(e) : u.data(n.storedText, e).html(e)) : s.debug("Text is already set, ignoring update", e)
                    }
                },
                setting: function(e, t) {
                    if (s.debug("Changing setting", e, t), w.isPlainObject(e)) w.extend(!0, o, e);
                    else {
                        if (t === k) return o[e];
                        w.isPlainObject(o[e]) ? w.extend(!0, o[e], t) : o[e] = t
                    }
                },
                internal: function(e, t) {
                    if (w.isPlainObject(e)) w.extend(!0, s, e);
                    else {
                        if (t === k) return s[e];
                        s[e] = t
                    }
                },
                debug: function() {
                    !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)))
                },
                error: function() {
                    o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        o.performance && (n = (t = (new Date).getTime()) - (v || t), v = t, b.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: d,
                            "Execution Time": n
                        })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                    },
                    display: function() {
                        var e = o.name + ":",
                            n = 0;
                        v = !1, clearTimeout(s.performance.timer), w.each(b, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", h && (e += " '" + h + "'"), (console.group !== k || console.table !== k) && 0 < b.length && (console.groupCollapsed(e), console.table ? console.table(b) : w.each(b, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), b = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = f;
                    return e = e || C, t = d || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, w.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (w.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== k) return a = r[n], !1;
                            if (!w.isPlainObject(r[t]) || e == o) return r[t] !== k ? a = r[t] : s.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), w.isFunction(a) ? n = a.apply(t, e) : a !== k && (n = a), Array.isArray(g) ? g.push(n) : g !== k ? g = [g, n] : n !== k && (g = n), a
                }
            }, x ? (f === k && s.initialize(), s.invoke(y)) : (f !== k && f.invoke("destroy"), s.initialize())
        }), g !== k ? g : this
    }, w.fn.state.settings = {
        name: "State",
        debug: !1,
        verbose: !1,
        namespace: "state",
        performance: !0,
        onActivate: function() {},
        onDeactivate: function() {},
        onChange: function() {},
        activateTest: function() {
            return !0
        },
        deactivateTest: function() {
            return !0
        },
        automatic: !0,
        sync: !1,
        flashDuration: 1e3,
        filter: {
            text: ".loading, .disabled",
            active: ".disabled"
        },
        context: !1,
        error: {
            beforeSend: "The before send function has cancelled state change",
            method: "The method you called is not defined."
        },
        metadata: {
            promise: "promise",
            storedText: "stored-text"
        },
        className: {
            active: "active",
            disabled: "disabled",
            error: "error",
            loading: "loading",
            success: "success",
            warning: "warning"
        },
        selector: {
            text: !1
        },
        defaults: {
            input: {
                disabled: !0,
                loading: !0,
                active: !0
            },
            button: {
                disabled: !0,
                loading: !0,
                active: !0
            },
            progress: {
                active: !0,
                success: !0,
                warning: !0,
                error: !0
            }
        },
        states: {
            active: !0,
            disabled: !0,
            error: !0,
            loading: !0,
            success: !0,
            warning: !0
        },
        text: {
            disabled: !1,
            flash: !1,
            hover: !1,
            active: !1,
            inactive: !1,
            activate: !1,
            deactivate: !1
        }
    }
}(jQuery, window, document),
function(E, F, P, O) {
    "use strict";
    E.isFunction = E.isFunction || function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }, F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.fn.visibility = function(b) {
        var y, e = E(this),
            x = e.selector || "",
            C = (new Date).getTime(),
            w = [],
            k = b,
            T = "string" == typeof k,
            S = [].slice.call(arguments, 1),
            D = e.length,
            A = 0;
        return e.each(function() {
            var e, t, n, s, o = E.isPlainObject(b) ? E.extend(!0, {}, E.fn.visibility.settings, b) : E.extend({}, E.fn.visibility.settings),
                i = o.className,
                a = o.namespace,
                l = o.error,
                r = o.metadata,
                c = "." + a,
                u = "module-" + a,
                d = E(F),
                f = E(this),
                m = E(o.context),
                g = f.data(u),
                p = F.requestAnimationFrame || F.mozRequestAnimationFrame || F.webkitRequestAnimationFrame || F.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 0)
                },
                h = this,
                v = !1;
            s = {
                initialize: function() {
                    s.debug("Initializing", o), s.setup.cache(), s.should.trackChanges() && ("image" == o.type && s.setup.image(), "fixed" == o.type && s.setup.fixed(), o.observeChanges && s.observeChanges(), s.bind.events()), s.save.position(), s.is.visible() || s.error(l.visible, f), o.initialCheck && s.checkVisibility(), s.instantiate()
                },
                instantiate: function() {
                    s.debug("Storing instance", s), f.data(u, s), g = s
                },
                destroy: function() {
                    s.verbose("Destroying previous module"), n && n.disconnect(), t && t.disconnect(), d.off("load" + c, s.event.load).off("resize" + c, s.event.resize), m.off("scroll" + c, s.event.scroll).off("scrollchange" + c, s.event.scrollchange), "fixed" == o.type && (s.resetFixed(), s.remove.placeholder()), f.off(c).removeData(u)
                },
                observeChanges: function() {
                    "MutationObserver" in F && (t = new MutationObserver(s.event.contextChanged), n = new MutationObserver(s.event.changed), t.observe(P, {
                        childList: !0,
                        subtree: !0
                    }), n.observe(h, {
                        childList: !0,
                        subtree: !0
                    }), s.debug("Setting up mutation observer", n))
                },
                bind: {
                    events: function() {
                        s.verbose("Binding visibility events to scroll and resize"), o.refreshOnLoad && d.on("load" + c, s.event.load), d.on("resize" + c, s.event.resize), m.off("scroll" + c).on("scroll" + c, s.event.scroll).on("scrollchange" + c, s.event.scrollchange)
                    }
                },
                event: {
                    changed: function(e) {
                        s.verbose("DOM tree modified, updating visibility calculations"), s.timer = setTimeout(function() {
                            s.verbose("DOM tree modified, updating sticky menu"), s.refresh()
                        }, 100)
                    },
                    contextChanged: function(e) {
                        [].forEach.call(e, function(e) {
                            e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                                (e == h || 0 < E(e).find(h).length) && (s.debug("Element removed from DOM, tearing down events"), s.destroy())
                            })
                        })
                    },
                    resize: function() {
                        s.debug("Window resized"), o.refreshOnResize && p(s.refresh)
                    },
                    load: function() {
                        s.debug("Page finished loading"), p(s.refresh)
                    },
                    scroll: function() {
                        o.throttle ? (clearTimeout(s.timer), s.timer = setTimeout(function() {
                            m.triggerHandler("scrollchange" + c, [m.scrollTop()])
                        }, o.throttle)) : p(function() {
                            m.triggerHandler("scrollchange" + c, [m.scrollTop()])
                        })
                    },
                    scrollchange: function(e, t) {
                        s.checkVisibility(t)
                    }
                },
                precache: function(e, t) {
                    e instanceof Array || (e = [e]);
                    for (var n = e.length, i = 0, o = [], a = P.createElement("img"), r = function() {
                            ++i >= e.length && E.isFunction(t) && t()
                        }; n--;)(a = P.createElement("img")).onload = r, a.onerror = r, a.src = e[n], o.push(a)
                },
                enableCallbacks: function() {
                    s.debug("Allowing callbacks to occur"), v = !1
                },
                disableCallbacks: function() {
                    s.debug("Disabling all callbacks temporarily"), v = !0
                },
                should: {
                    trackChanges: function() {
                        return T ? (s.debug("One time query, no need to bind events"), !1) : (s.debug("Callbacks being attached"), !0)
                    }
                },
                setup: {
                    cache: function() {
                        s.cache = {
                            occurred: {},
                            screen: {},
                            element: {}
                        }
                    },
                    image: function() {
                        var e = f.data(r.src);
                        e && (s.verbose("Lazy loading image", e), o.once = !0, o.observeChanges = !1, o.onOnScreen = function() {
                            s.debug("Image on screen", h), s.precache(e, function() {
                                s.set.image(e, function() {
                                    ++A == D && o.onAllLoaded.call(this), o.onLoad.call(this)
                                })
                            })
                        })
                    },
                    fixed: function() {
                        s.debug("Setting up fixed"), o.once = !1, o.observeChanges = !1, o.initialCheck = !0, o.refreshOnLoad = !0, b.transition || (o.transition = !1), s.create.placeholder(), s.debug("Added placeholder", e), o.onTopPassed = function() {
                            s.debug("Element passed, adding fixed position", f), s.show.placeholder(), s.set.fixed(), o.transition && E.fn.transition !== O && f.transition(o.transition, o.duration)
                        }, o.onTopPassedReverse = function() {
                            s.debug("Element returned to position, removing fixed", f), s.hide.placeholder(), s.remove.fixed()
                        }
                    }
                },
                create: {
                    placeholder: function() {
                        s.verbose("Creating fixed position placeholder"), e = f.clone(!1).css("display", "none").addClass(i.placeholder).insertAfter(f)
                    }
                },
                show: {
                    placeholder: function() {
                        s.verbose("Showing placeholder"), e.css("display", "block").css("visibility", "hidden")
                    }
                },
                hide: {
                    placeholder: function() {
                        s.verbose("Hiding placeholder"), e.css("display", "none").css("visibility", "")
                    }
                },
                set: {
                    fixed: function() {
                        s.verbose("Setting element to fixed position"), f.addClass(i.fixed).css({
                            position: "fixed",
                            top: o.offset + "px",
                            left: "auto",
                            zIndex: o.zIndex
                        }), o.onFixed.call(h)
                    },
                    image: function(e, t) {
                        if (f.attr("src", e), o.transition)
                            if (E.fn.transition !== O) {
                                if (f.hasClass(i.visible)) return void s.debug("Transition already occurred on this image, skipping animation");
                                f.transition(o.transition, o.duration, t)
                            } else f.fadeIn(o.duration, t);
                        else f.show()
                    }
                },
                is: {
                    onScreen: function() {
                        return s.get.elementCalculations().onScreen
                    },
                    offScreen: function() {
                        return s.get.elementCalculations().offScreen
                    },
                    visible: function() {
                        return !(!s.cache || !s.cache.element) && !(0 === s.cache.element.width && 0 === s.cache.element.offset.top)
                    },
                    verticallyScrollableContext: function() {
                        var e = m.get(0) !== F && m.css("overflow-y");
                        return "auto" == e || "scroll" == e
                    },
                    horizontallyScrollableContext: function() {
                        var e = m.get(0) !== F && m.css("overflow-x");
                        return "auto" == e || "scroll" == e
                    }
                },
                refresh: function() {
                    s.debug("Refreshing constants (width/height)"), "fixed" == o.type && s.resetFixed(), s.reset(), s.save.position(), o.checkOnRefresh && s.checkVisibility(), o.onRefresh.call(h)
                },
                resetFixed: function() {
                    s.remove.fixed(), s.remove.occurred()
                },
                reset: function() {
                    s.verbose("Resetting all cached values"), E.isPlainObject(s.cache) && (s.cache.screen = {}, s.cache.element = {})
                },
                checkVisibility: function(e) {
                    s.verbose("Checking visibility of element", s.cache.element), !v && s.is.visible() && (s.save.scroll(e), s.save.calculations(), s.passed(), s.passingReverse(), s.topVisibleReverse(), s.bottomVisibleReverse(), s.topPassedReverse(), s.bottomPassedReverse(), s.onScreen(), s.offScreen(), s.passing(), s.topVisible(), s.bottomVisible(), s.topPassed(), s.bottomPassed(), o.onUpdate && o.onUpdate.call(h, s.get.elementCalculations()))
                },
                passed: function(e, t) {
                    var n = s.get.elementCalculations();
                    if (e && t) o.onPassed[e] = t;
                    else {
                        if (e !== O) return s.get.pixelsPassed(e) > n.pixelsPassed;
                        n.passing && E.each(o.onPassed, function(e, t) {
                            n.bottomVisible || n.pixelsPassed > s.get.pixelsPassed(e) ? s.execute(t, e) : o.once || s.remove.occurred(t)
                        })
                    }
                },
                onScreen: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onOnScreen;
                    if (e && (s.debug("Adding callback for onScreen", e), o.onOnScreen = e), t.onScreen ? s.execute(n, "onScreen") : o.once || s.remove.occurred("onScreen"), e !== O) return t.onOnScreen
                },
                offScreen: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onOffScreen;
                    if (e && (s.debug("Adding callback for offScreen", e), o.onOffScreen = e), t.offScreen ? s.execute(n, "offScreen") : o.once || s.remove.occurred("offScreen"), e !== O) return t.onOffScreen
                },
                passing: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onPassing;
                    if (e && (s.debug("Adding callback for passing", e), o.onPassing = e), t.passing ? s.execute(n, "passing") : o.once || s.remove.occurred("passing"), e !== O) return t.passing
                },
                topVisible: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onTopVisible,
                        i = "topVisible";
                    if (e && (s.debug("Adding callback for top visible", e), o.onTopVisible = e), t.topVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.topVisible
                },
                bottomVisible: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onBottomVisible,
                        i = "bottomVisible";
                    if (e && (s.debug("Adding callback for bottom visible", e), o.onBottomVisible = e), t.bottomVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomVisible
                },
                topPassed: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onTopPassed;
                    if (e && (s.debug("Adding callback for top passed", e), o.onTopPassed = e), t.topPassed ? s.execute(n, "topPassed") : o.once || s.remove.occurred("topPassed"), e === O) return t.topPassed
                },
                bottomPassed: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onBottomPassed,
                        i = "bottomPassed";
                    if (e && (s.debug("Adding callback for bottom passed", e), o.onBottomPassed = e), t.bottomPassed ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomPassed
                },
                passingReverse: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onPassingReverse,
                        i = "passingReverse";
                    if (e && (s.debug("Adding callback for passing reverse", e), o.onPassingReverse = e), t.passing ? o.once || s.remove.occurred(i) : s.get.occurred("passing") && s.execute(n, i), e !== O) return !t.passing
                },
                topVisibleReverse: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onTopVisibleReverse,
                        i = "topVisibleReverse";
                    if (e && (s.debug("Adding callback for top visible reverse", e), o.onTopVisibleReverse = e), t.topVisible ? o.once || s.remove.occurred(i) : s.get.occurred("topVisible") && s.execute(n, i), e === O) return !t.topVisible
                },
                bottomVisibleReverse: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onBottomVisibleReverse,
                        i = "bottomVisibleReverse";
                    if (e && (s.debug("Adding callback for bottom visible reverse", e), o.onBottomVisibleReverse = e), t.bottomVisible ? o.once || s.remove.occurred(i) : s.get.occurred("bottomVisible") && s.execute(n, i), e === O) return !t.bottomVisible
                },
                topPassedReverse: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onTopPassedReverse,
                        i = "topPassedReverse";
                    if (e && (s.debug("Adding callback for top passed reverse", e), o.onTopPassedReverse = e), t.topPassed ? o.once || s.remove.occurred(i) : s.get.occurred("topPassed") && s.execute(n, i), e === O) return !t.onTopPassed
                },
                bottomPassedReverse: function(e) {
                    var t = s.get.elementCalculations(),
                        n = e || o.onBottomPassedReverse,
                        i = "bottomPassedReverse";
                    if (e && (s.debug("Adding callback for bottom passed reverse", e), o.onBottomPassedReverse = e), t.bottomPassed ? o.once || s.remove.occurred(i) : s.get.occurred("bottomPassed") && s.execute(n, i), e === O) return !t.bottomPassed
                },
                execute: function(e, t) {
                    var n = s.get.elementCalculations(),
                        i = s.get.screenCalculations();
                    (e = e || !1) && (o.continuous ? (s.debug("Callback being called continuously", t, n), e.call(h, n, i)) : s.get.occurred(t) || (s.debug("Conditions met", t, n), e.call(h, n, i))), s.save.occurred(t)
                },
                remove: {
                    fixed: function() {
                        s.debug("Removing fixed position"), f.removeClass(i.fixed).css({
                            position: "",
                            top: "",
                            left: "",
                            zIndex: ""
                        }), o.onUnfixed.call(h)
                    },
                    placeholder: function() {
                        s.debug("Removing placeholder content"), e && e.remove()
                    },
                    occurred: function(e) {
                        if (e) {
                            var t = s.cache.occurred;
                            t[e] !== O && !0 === t[e] && (s.debug("Callback can now be called again", e), s.cache.occurred[e] = !1)
                        } else s.cache.occurred = {}
                    }
                },
                save: {
                    calculations: function() {
                        s.verbose("Saving all calculations necessary to determine positioning"), s.save.direction(), s.save.screenCalculations(), s.save.elementCalculations()
                    },
                    occurred: function(e) {
                        e && (s.cache.occurred[e] !== O && !0 === s.cache.occurred[e] || (s.verbose("Saving callback occurred", e), s.cache.occurred[e] = !0))
                    },
                    scroll: function(e) {
                        e = e + o.offset || m.scrollTop() + o.offset, s.cache.scroll = e
                    },
                    direction: function() {
                        var e, t = s.get.scroll(),
                            n = s.get.lastScroll();
                        return e = n < t && n ? "down" : t < n && n ? "up" : "static", s.cache.direction = e, s.cache.direction
                    },
                    elementPosition: function() {
                        var e = s.cache.element,
                            t = s.get.screenSize();
                        return s.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = f.offset(), e.width = f.outerWidth(), e.height = f.outerHeight(), s.is.verticallyScrollableContext() && (e.offset.top += m.scrollTop() - m.offset().top), s.is.horizontallyScrollableContext() && (e.offset.left += m.scrollLeft - m.offset().left), s.cache.element = e
                    },
                    elementCalculations: function() {
                        var e = s.get.screenCalculations(),
                            t = s.get.elementPosition();
                        return o.includeMargin ? (t.margin = {}, t.margin.top = parseInt(f.css("margin-top"), 10), t.margin.bottom = parseInt(f.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = (t.topVisible || t.passing) && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), s.cache.element = t, s.verbose("Updated element calculations", t), t
                    },
                    screenCalculations: function() {
                        var e = s.get.scroll();
                        return s.save.direction(), s.cache.screen.top = e, s.cache.screen.bottom = e + s.cache.screen.height, s.cache.screen
                    },
                    screenSize: function() {
                        s.verbose("Saving window position"), s.cache.screen = {
                            height: m.height()
                        }
                    },
                    position: function() {
                        s.save.screenSize(), s.save.elementPosition()
                    }
                },
                get: {
                    pixelsPassed: function(e) {
                        var t = s.get.elementCalculations();
                        return -1 < e.search("%") ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                    },
                    occurred: function(e) {
                        return s.cache.occurred !== O && s.cache.occurred[e] || !1
                    },
                    direction: function() {
                        return s.cache.direction === O && s.save.direction(), s.cache.direction
                    },
                    elementPosition: function() {
                        return s.cache.element === O && s.save.elementPosition(), s.cache.element
                    },
                    elementCalculations: function() {
                        return s.cache.element === O && s.save.elementCalculations(), s.cache.element
                    },
                    screenCalculations: function() {
                        return s.cache.screen === O && s.save.screenCalculations(), s.cache.screen
                    },
                    screenSize: function() {
                        return s.cache.screen === O && s.save.screenSize(), s.cache.screen
                    },
                    scroll: function() {
                        return s.cache.scroll === O && s.save.scroll(), s.cache.scroll
                    },
                    lastScroll: function() {
                        return s.cache.screen === O ? (s.debug("First scroll event, no last scroll could be found"), !1) : s.cache.screen.top
                    }
                },
                setting: function(e, t) {
                    if (E.isPlainObject(e)) E.extend(!0, o, e);
                    else {
                        if (t === O) return o[e];
                        o[e] = t
                    }
                },
                internal: function(e, t) {
                    if (E.isPlainObject(e)) E.extend(!0, s, e);
                    else {
                        if (t === O) return s[e];
                        s[e] = t
                    }
                },
                debug: function() {
                    !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)))
                },
                verbose: function() {
                    !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)))
                },
                error: function() {
                    o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments))
                },
                performance: {
                    log: function(e) {
                        var t, n;
                        o.performance && (n = (t = (new Date).getTime()) - (C || t), C = t, w.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: h,
                            "Execution Time": n
                        })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                    },
                    display: function() {
                        var e = o.name + ":",
                            n = 0;
                        C = !1, clearTimeout(s.performance.timer), E.each(w, function(e, t) {
                            n += t["Execution Time"]
                        }), e += " " + n + "ms", x && (e += " '" + x + "'"), (console.group !== O || console.table !== O) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : E.each(w, function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()), w = []
                    }
                },
                invoke: function(i, e, t) {
                    var o, a, n, r = g;
                    return e = e || S, t = h || t, "string" == typeof i && r !== O && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function(e, t) {
                        var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                        if (E.isPlainObject(r[n]) && e != o) r = r[n];
                        else {
                            if (r[n] !== O) return a = r[n], !1;
                            if (!E.isPlainObject(r[t]) || e == o) return r[t] !== O ? a = r[t] : s.error(l.method, i), !1;
                            r = r[t]
                        }
                    })), E.isFunction(a) ? n = a.apply(t, e) : a !== O && (n = a), Array.isArray(y) ? y.push(n) : y !== O ? y = [y, n] : n !== O && (y = n), a
                }
            }, T ? (g === O && s.initialize(), g.save.scroll(), g.save.calculations(), s.invoke(k)) : (g !== O && g.invoke("destroy"), s.initialize())
        }), y !== O ? y : this
    }, E.fn.visibility.settings = {
        name: "Visibility",
        namespace: "visibility",
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !0,
        initialCheck: !0,
        refreshOnLoad: !0,
        refreshOnResize: !0,
        checkOnRefresh: !0,
        once: !0,
        continuous: !1,
        offset: 0,
        includeMargin: !1,
        context: F,
        throttle: !1,
        type: !1,
        zIndex: "10",
        transition: "fade in",
        duration: 1e3,
        onPassed: {},
        onOnScreen: !1,
        onOffScreen: !1,
        onPassing: !1,
        onTopVisible: !1,
        onBottomVisible: !1,
        onTopPassed: !1,
        onBottomPassed: !1,
        onPassingReverse: !1,
        onTopVisibleReverse: !1,
        onBottomVisibleReverse: !1,
        onTopPassedReverse: !1,
        onBottomPassedReverse: !1,
        onLoad: function() {},
        onAllLoaded: function() {},
        onFixed: function() {},
        onUnfixed: function() {},
        onUpdate: !1,
        onRefresh: function() {},
        metadata: {
            src: "src"
        },
        className: {
            fixed: "fixed",
            placeholder: "constraint",
            visible: "visible"
        },
        error: {
            method: "The method you called is not defined.",
            visible: "Element is hidden, you must call refresh after element becomes visible"
        }
    }
}(jQuery, window, document);