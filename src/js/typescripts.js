function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
function assert(booleanExpression, str) {
    if (booleanExpression) {
    }
    else {
        var prefix = "assertion failed";
        throw (str === undefined ? prefix : (prefix + ": " + str));
    }
}
var Pligor;
(function (Pligor) {
    var RadioEvent = (function () {
        function RadioEvent() {
        }
        return RadioEvent;
    })();
    function RadioEvents() {
        return {
            routerChannel: {
                getName: function () {
                    return "routerChannel";
                },
                majorSectionWaypoint_crossed_50percent_viewport: "majorSectionWaypoint_crossed_50percent_viewport",
                fekPopupShow: "fekPopupShow"
            }
        };
    }
    Pligor.RadioEvents = RadioEvents;
})(Pligor || (Pligor = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pligor;
(function (Pligor) {
    var MyRouter = (function (_super) {
        __extends(MyRouter, _super);
        function MyRouter(options) {
            var _this = this;
            this.routes = {
                "": "welcoming",
                "how_it_works": "how_it_worksAction",
                "calculations": "calculationsAction",
                "portfolio": "portfolioAction",
                "testimonials": "testimonialsAction",
                "contact": "contactAction",
                "fekpopup": "fekpopupAction"
            };
            _super.call(this, options);
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).on(curChannel.majorSectionWaypoint_crossed_50percent_viewport, function () {
                _this.navigate(MyRouter.dummyRoute, { trigger: false, replace: true });
            });
        }
        MyRouter.prototype.fekpopupAction = function () {
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).command(curChannel.fekPopupShow);
        };
        MyRouter.prototype.welcoming = function () {
        };
        MyRouter.prototype.how_it_worksAction = function () {
            $.scrollTo("#how_it_works_section", 250, {
                onAfter: function () {
                }
            });
        };
        MyRouter.prototype.calculationsAction = function () {
            $.scrollTo("#calculations_section", 500);
        };
        MyRouter.prototype.portfolioAction = function () {
            $.scrollTo("#portfolio_section", 750);
        };
        MyRouter.prototype.testimonialsAction = function () {
            $.scrollTo("#testimonials_section", 1000);
        };
        MyRouter.prototype.contactAction = function () {
            $.scrollTo("#contact_section", 1250);
        };
        MyRouter.dummyRoute = "#/";
        return MyRouter;
    })(Backbone.Router);
    Pligor.MyRouter = MyRouter;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var LogoModel = (function (_super) {
        __extends(LogoModel, _super);
        function LogoModel(attributes, options) {
            _super.call(this, attributes, options);
            this.urlRoot = "http://localhost:3000/logos";
        }
        LogoModel.prototype.defaults = function () {
            return {
                logoImage: "img/pligoropoulos_logo.png",
                logoTitle: "pligoropoulos",
                logoSubtitle: "ενεργειακες λυσεις"
            };
        };
        LogoModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
        };
        return LogoModel;
    })(Backbone.Model);
    Pligor.LogoModel = LogoModel;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var LogoItemView = (function (_super) {
        __extends(LogoItemView, _super);
        function LogoItemView(options) {
            _super.call(this, options);
            this.template = "#logotemplate";
        }
        return LogoItemView;
    })(Marionette.ItemView);
    Pligor.LogoItemView = LogoItemView;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MenuItemModel = (function (_super) {
        __extends(MenuItemModel, _super);
        function MenuItemModel(attributes, options) {
            _super.call(this, attributes, options);
            this.urlRoot = "http://localhost:3000/logos";
        }
        MenuItemModel.prototype.defaults = function () {
            return {
                menuItemTitle: "menu item title",
                menuItemSubtitle: "menu item subtitle",
                menuItemTarget: "#"
            };
        };
        MenuItemModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
        };
        return MenuItemModel;
    })(Backbone.Model);
    Pligor.MenuItemModel = MenuItemModel;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MenuItemView = (function (_super) {
        __extends(MenuItemView, _super);
        function MenuItemView(options) {
            _super.call(this, options);
            this.template = "#menuitem_template";
        }
        MenuItemView.prototype.tagName = function () {
            return "li";
        };
        return MenuItemView;
    })(Marionette.ItemView);
    Pligor.MenuItemView = MenuItemView;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MenuCollectionView = (function (_super) {
        __extends(MenuCollectionView, _super);
        function MenuCollectionView(options) {
            _super.call(this, options);
            this.childView = Pligor.MenuItemView;
        }
        MenuCollectionView.prototype.tagName = function () {
            return "ul";
        };
        MenuCollectionView.prototype.className = function () {
            return "mainmenu";
        };
        return MenuCollectionView;
    })(Marionette.CollectionView);
    Pligor.MenuCollectionView = MenuCollectionView;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MenuItemCollection = (function (_super) {
        __extends(MenuItemCollection, _super);
        function MenuItemCollection(models, options) {
            _super.call(this, models, options);
            this.model = Pligor.MenuItemModel;
            this.url = "http://localhost:3000/menuitems";
        }
        return MenuItemCollection;
    })(Backbone.Collection);
    Pligor.MenuItemCollection = MenuItemCollection;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var HeaderLayout = (function (_super) {
        __extends(HeaderLayout, _super);
        function HeaderLayout(options) {
            _super.call(this, options);
            this.curLogoId = 1;
            this.template = "#headertemplate";
            this.model = new Backbone.Model();
        }
        HeaderLayout.prototype.regions = function (options) {
            return {
                logoRegion: "div.logo_wrapper",
                menuRegion: "div.mainmenu_wrapper"
            };
        };
        HeaderLayout.prototype.childEvents = function () {
            return {};
        };
        HeaderLayout.prototype.events = function () {
            return {};
        };
        HeaderLayout.prototype.onBeforeRender = function () {
        };
        HeaderLayout.prototype.onRender = function () {
            this.logoRegion.show(new Pligor.LogoItemView({ model: new Pligor.LogoModel({ id: this.curLogoId }) }));
            this.menuRegion.show(new Pligor.MenuCollectionView({ collection: new Pligor.MenuItemCollection([
                {
                    "id": 1,
                    "menuItemTitle": "ενεργειακος συμψηφισμος (net metering)",
                    "menuItemSubtitle": "τι είναι και πως λειτουργεί",
                    "menuItemTarget": "how_it_works"
                },
                {
                    "id": 2,
                    "menuItemTitle": "υπολογισε κερδος &amp; κοστος",
                    "menuItemSubtitle": "δες γιατί συμφέρει",
                    "menuItemTarget": "calculations"
                },
                {
                    "id": 3,
                    "menuItemTitle": "εργα / portfolio",
                    "menuItemSubtitle": "από το 1982",
                    "menuItemTarget": "portfolio"
                },
                {
                    "id": 4,
                    "menuItemTitle": "τι λενε οι πελατες",
                    "menuItemSubtitle": "γνώρισε τους",
                    "menuItemTarget": "testimonials"
                },
                {
                    "id": 5,
                    "menuItemTitle": "επικοινωνια",
                    "menuItemSubtitle": "τηλεφωνο / email",
                    "menuItemTarget": "contact"
                }
            ].map(function (obj, index, arr) { return new Pligor.MenuItemModel(obj); })) }));
        };
        return HeaderLayout;
    })(Marionette.LayoutView);
    Pligor.HeaderLayout = HeaderLayout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MainModel = (function (_super) {
        __extends(MainModel, _super);
        function MainModel() {
            _super.apply(this, arguments);
        }
        MainModel.prototype.defaults = function () {
            return {};
        };
        MainModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
        };
        return MainModel;
    })(Backbone.Model);
    Pligor.MainModel = MainModel;
})(Pligor || (Pligor = {}));
var Size2D = (function () {
    function Size2D(width, height) {
        this.width = width;
        this.height = height;
        this.width = Math.round(width);
        this.height = Math.round(height);
        this.width = this.width < 1 ? 1 : this.width;
        this.height = this.height < 1 ? 1 : this.height;
    }
    Size2D.prototype.toString = function () {
        return this.width + ", " + this.height;
    };
    Size2D.prototype.isFilling = function (that) {
        return this.width >= that.width && this.height >= that.height;
    };
    Size2D.prototype.fillWithTolerance = function (targetSize, tolerance) {
        if (this.isFilling(targetSize)) {
            var widthDistance = this.width - targetSize.width;
            var heightDistance = this.height - targetSize.height;
            var minDistance = Math.min(widthDistance, heightDistance);
            if (minDistance >= tolerance) {
                return this.fill(targetSize);
            }
            else {
                return this;
            }
        }
        else {
            var filled = this.fill(targetSize);
            var widthDistance = filled.width - targetSize.width;
            var heightDistance = filled.height - targetSize.height;
            if (widthDistance <= heightDistance) {
                return filled.increaseWidthKeepingRatio(tolerance);
            }
            else {
                return filled.increaseHeightKeepingRatio(tolerance);
            }
        }
    };
    Size2D.prototype.increaseWidthKeepingRatio = function (offset) {
        assert(offset >= 0);
        var newWidth = this.width + offset;
        var newHeight = newWidth / this.getWidthToHeightRatio();
        return new Size2D(newWidth, newHeight);
    };
    Size2D.prototype.increaseHeightKeepingRatio = function (offset) {
        assert(offset >= 0);
        var newHeight = this.height + offset;
        var newWidth = newHeight * this.getWidthToHeightRatio();
        return new Size2D(newWidth, newHeight);
    };
    Size2D.prototype.increaseSmallerSizeKeepingRatio = function (offset) {
        return this.width <= this.height ? this.increaseWidthKeepingRatio(offset) : this.increaseHeightKeepingRatio(offset);
    };
    Size2D.prototype.fill = function (targetSize) {
        var widthRatio = this.width / targetSize.width;
        var heightRatio = this.height / targetSize.height;
        var minRatio = Math.min(widthRatio, heightRatio);
        return new Size2D(this.width / minRatio, this.height / minRatio);
    };
    Size2D.prototype.getWidthToHeightRatio = function () {
        return this.width / this.height;
    };
    Size2D.prototype.offsetWidth = function (offset) {
        return new Size2D(this.width + offset, this.height);
    };
    Size2D.prototype.offsetHeight = function (offset) {
        return new Size2D(this.width, this.height + offset);
    };
    Size2D.prototype.increaseWidth = function (offset) {
        assert(offset >= 0);
        return this.offsetWidth(offset);
    };
    Size2D.prototype.increaseHeight = function (offset) {
        assert(offset >= 0);
        return this.offsetHeight(offset);
    };
    Size2D.prototype.reduceWidth = function (offset) {
        assert(offset >= 0);
        return this.offsetWidth(-offset);
    };
    Size2D.prototype.reduceHeight = function (offset) {
        assert(offset >= 0);
        return this.offsetHeight(-offset);
    };
    Size2D.prototype.isEqual = function (that) {
        return this.width == that.width && this.height == that.height;
    };
    return Size2D;
})();
var TestSize2D = (function () {
    function TestSize2D() {
    }
    TestSize2D.prototype.testFillWithTolerance = function () {
        var curSize = new Size2D(1920, 1080);
        var tolerance = 200;
        var largerHeight = new Size2D(1800, 3500);
        assert(largerHeight.height + tolerance == curSize.fillWithTolerance(largerHeight, tolerance).height);
        var largerWidth = new Size2D(2000, 500);
        assert(largerWidth.width + tolerance == curSize.fillWithTolerance(largerWidth, tolerance).width);
        var notSmallEnough = new Size2D(1800, 500);
        assert(curSize.fillWithTolerance(notSmallEnough, tolerance).isEqual(curSize));
        var smallEnough = new Size2D(1500, 500);
        assert(curSize.fillWithTolerance(smallEnough, tolerance).width == smallEnough.width);
        console.log("test fill with tolerance is ok");
    };
    TestSize2D.prototype.testFill = function () {
        var curSize = new Size2D(1920, 1080);
        var smallerWidth = curSize.reduceWidth(1920 / 2);
        assert(curSize.fill(smallerWidth).isEqual(curSize), "if same height but larger must already fill the target");
        var smallerHeight = curSize.reduceHeight(1080 / 2);
        assert(curSize.fill(smallerHeight).isEqual(curSize), "if same width but larger must already fill the target");
        var smallerHeightAndWidth = curSize.reduceWidth(1920 / 2).reduceHeight(1080 / 2);
        assert(curSize.fill(smallerHeightAndWidth).isEqual(smallerHeightAndWidth), "same ratio must be reduced proportionally");
        var smallerWidthAndEvenSmallerHeight = curSize.reduceWidth(1920 / 2).reduceHeight(1080 * 2 / 3);
        assert(smallerWidthAndEvenSmallerHeight.width == curSize.fill(smallerWidthAndEvenSmallerHeight).width);
        assert(smallerWidthAndEvenSmallerHeight.height < curSize.fill(smallerWidthAndEvenSmallerHeight).height);
        var smallerHeightAndEvenSmallerWidth = curSize.reduceWidth(1920 * 4 / 5).reduceHeight(1080 / 5);
        assert(smallerHeightAndEvenSmallerWidth.height == curSize.fill(smallerHeightAndEvenSmallerWidth).height);
        assert(smallerHeightAndEvenSmallerWidth.width < curSize.fill(smallerHeightAndEvenSmallerWidth).width);
        var largerHeight = curSize.increaseHeight(200);
        assert(curSize.fill(largerHeight).height === largerHeight.height);
        assert(curSize.fill(largerHeight).width > largerHeight.width);
        var largerWidth = curSize.increaseWidth(200);
        assert(curSize.fill(largerWidth).width === largerWidth.width);
        assert(curSize.fill(largerWidth).height > largerWidth.height);
        var largerWidthAndHeight = curSize.increaseHeight(200).increaseWidth(200);
        assert(curSize.fill(largerWidthAndHeight).height === largerWidthAndHeight.height);
        assert(curSize.fill(largerWidthAndHeight).width > largerWidthAndHeight.width);
        console.log("test fill ok");
    };
    return TestSize2D;
})();
var ViewTraits;
(function (ViewTraits) {
    var BindingUiElements = (function (_super) {
        __extends(BindingUiElements, _super);
        function BindingUiElements() {
            _super.apply(this, arguments);
        }
        BindingUiElements.prototype.getUI = function (arg) {
            return this.ui[arg];
        };
        BindingUiElements.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            this.bindUIElements();
            this.onInitialize(options);
        };
        return BindingUiElements;
    })(Marionette.View);
    ViewTraits.BindingUiElements = BindingUiElements;
})(ViewTraits || (ViewTraits = {}));
var Pligor;
(function (Pligor) {
    var JumbotronBackgroundItemView = (function (_super) {
        __extends(JumbotronBackgroundItemView, _super);
        function JumbotronBackgroundItemView(options) {
            _super.call(this, options);
            this.curSize = new Size2D(1920, 1080);
            this.template = "script#jumbotron_background_template";
            this.player = null;
        }
        JumbotronBackgroundItemView.prototype.tagName = function () {
            return "div";
        };
        JumbotronBackgroundItemView.prototype.className = function () {
            return "jumbotron_background_container";
        };
        JumbotronBackgroundItemView.prototype.onInitialize = function (options) {
        };
        JumbotronBackgroundItemView.prototype.ui = function () {
            return {
                video: "#" + JumbotronBackgroundItemView.videoId
            };
        };
        JumbotronBackgroundItemView.prototype.onRender = function () {
            var _this = this;
            var reBindElems = function () {
                _this.unbindUIElements();
                _this.bindUIElements();
            };
            var getVideo = function () {
                return _this.getUI("video");
            };
            var fillCurSize = function (wrapperSize) {
                _this.curSize = _this.curSize.fill(wrapperSize);
                return _this.curSize;
            };
            getVideo().ready(function () {
                _this.player = videojs(JumbotronBackgroundItemView.videoId, {}, function () {
                    reBindElems();
                    var video = getVideo();
                    var outerParent = video.parent().parent();
                    var outerParentSize = new Size2D(outerParent.width(), outerParent.height());
                    var newSize = fillCurSize(outerParentSize);
                    this.width(newSize.width);
                    this.height(newSize.height);
                });
                $(window).resize(function () {
                    var wrapper = _this.getUI("video").parent().parent();
                    var wrapperSize = new Size2D(wrapper.width(), wrapper.height());
                    var oldSize = _this.curSize;
                    _this.curSize = _this.curSize.fillWithTolerance(wrapperSize, JumbotronBackgroundItemView.tolerancePixels);
                    if (oldSize.isEqual(_this.curSize)) {
                    }
                    else {
                        _this.player.width(_this.curSize.width);
                        _this.player.height(_this.curSize.height);
                    }
                });
            });
        };
        JumbotronBackgroundItemView.prototype.events = function () {
            return {
                "click .control_button": "onControlButton"
            };
        };
        JumbotronBackgroundItemView.prototype.onControlButton = function (event) {
            if (this.player === null) {
            }
            else {
                $(event.target).toggleClass("icon-pause-outline");
                if (this.player.paused()) {
                    this.player.play();
                }
                else {
                    this.player.pause();
                }
            }
        };
        JumbotronBackgroundItemView.tolerancePixels = 200;
        JumbotronBackgroundItemView.videoId = "jumbotron_background_video";
        return JumbotronBackgroundItemView;
    })(Marionette.ItemView);
    Pligor.JumbotronBackgroundItemView = JumbotronBackgroundItemView;
    applyMixins(JumbotronBackgroundItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var JumbotronLayout = (function (_super) {
        __extends(JumbotronLayout, _super);
        function JumbotronLayout(options) {
            _super.call(this, options);
            this.template = "script#jumbotron_template";
        }
        JumbotronLayout.prototype.tagName = function () {
            return "div";
        };
        JumbotronLayout.prototype.className = function () {
            return "jumbotron";
        };
        JumbotronLayout.prototype.regions = function (options) {
            return {
                backgroundRegion: "div.jumbotron_background"
            };
        };
        JumbotronLayout.prototype.ui = function () {
            return {
                rotatingWord: ".what_we_do_title .rotate"
            };
        };
        JumbotronLayout.prototype.onInitialize = function (options) {
        };
        JumbotronLayout.prototype.onRender = function () {
            this.backgroundRegion.show(new Pligor.JumbotronBackgroundItemView());
            var rotatingWord = this.getUI("rotatingWord");
            rotatingWord.textrotator({
                animation: "dissolve",
                separator: ",",
                speed: 3000
            });
        };
        JumbotronLayout.prototype.events = function () {
            return {};
        };
        return JumbotronLayout;
    })(Marionette.LayoutView);
    Pligor.JumbotronLayout = JumbotronLayout;
    applyMixins(JumbotronLayout, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var FekPopupItemView = (function (_super) {
        __extends(FekPopupItemView, _super);
        function FekPopupItemView(options) {
            _super.call(this, options);
            this.template = "script#fek_popup_template";
        }
        FekPopupItemView.prototype.tagName = function () {
            return "div";
        };
        FekPopupItemView.prototype.className = function () {
            return "popup";
        };
        FekPopupItemView.prototype.events = function () {
            return {
                "click": "drinkPoisonPill"
            };
        };
        FekPopupItemView.prototype.drinkPoisonPill = function () {
            this.triggerMethod("poisonpill");
        };
        return FekPopupItemView;
    })(Marionette.ItemView);
    Pligor.FekPopupItemView = FekPopupItemView;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var AnnouncementLayout = (function (_super) {
        __extends(AnnouncementLayout, _super);
        function AnnouncementLayout(options) {
            _super.call(this, options);
            this.template = "script#announcement_template";
            this.model = new Backbone.Model();
        }
        AnnouncementLayout.prototype.tagName = function () {
            return "div";
        };
        AnnouncementLayout.prototype.className = function () {
            return "announcement";
        };
        AnnouncementLayout.prototype.regions = function (options) {
            return {
                popupRegion: "div.popup_wrapper"
            };
        };
        AnnouncementLayout.prototype.childEvents = function () {
            return {};
        };
        AnnouncementLayout.prototype.initialize = function (options) {
            var _this = this;
            _super.prototype.initialize.call(this, options);
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).comply(curChannel.fekPopupShow, function () {
                $("body").css("overflow", "hidden");
                _this.popupRegion.show(new Pligor.FekPopupItemView());
                _this.listenTo(_this.popupRegion.currentView, "poisonpill", function () {
                    _this.stopListening(_this.popupRegion.currentView);
                    _this.popupRegion.empty();
                    $("body").css("overflow", "auto");
                    window.history.back();
                });
            });
        };
        AnnouncementLayout.prototype.events = function () {
            var _this = this;
            return {
                "click .ok_button": function () {
                    _this.triggerMethod("poisonpill");
                }
            };
        };
        AnnouncementLayout.prototype.onBeforeRender = function () {
        };
        AnnouncementLayout.prototype.onRender = function () {
        };
        return AnnouncementLayout;
    })(Marionette.LayoutView);
    Pligor.AnnouncementLayout = AnnouncementLayout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var HowItWorksStep1of3Layout = (function (_super) {
        __extends(HowItWorksStep1of3Layout, _super);
        function HowItWorksStep1of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step1of3_template";
        }
        HowItWorksStep1of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep1of3Layout.prototype.className = function () {
            return "step1of3";
        };
        HowItWorksStep1of3Layout.prototype.regions = function (options) {
            return {};
        };
        return HowItWorksStep1of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep1of3Layout = HowItWorksStep1of3Layout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var HowItWorksStep2of3Layout = (function (_super) {
        __extends(HowItWorksStep2of3Layout, _super);
        function HowItWorksStep2of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step2of3_template";
            this.controller = new ScrollMagic.Controller();
            this.triggerHook = 0.95;
            this.durationForEachStep_px = 300;
            this.rowHeight_px = 250;
            this.numColums = 3;
        }
        HowItWorksStep2of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep2of3Layout.prototype.className = function () {
            return "step2of3";
        };
        HowItWorksStep2of3Layout.prototype.regions = function (options) {
            return {};
        };
        HowItWorksStep2of3Layout.prototype.onRender = function () {
            var firstPeriodEnergyBars = this.$el.find(".firstPeriodEnergyBars");
            var secondPeriodEnergyBars = this.$el.find(".secondPeriodEnergyBars");
            var thirdPeriodEnergyBars = this.$el.find(".thirdPeriodEnergyBars");
            if (Modernizr.touch) {
                [firstPeriodEnergyBars, secondPeriodEnergyBars, thirdPeriodEnergyBars].forEach(function (elem, ind, arr) {
                    elem.css({
                        height: "100%"
                    });
                });
            }
            else {
                var triggerElem = this.$el.find("div.trigger_period")[0];
                var targetElem = this.$el.find("div.periods_row")[0];
                var totalDuration_px = this.durationForEachStep_px * this.numColums;
                new ScrollMagic.Scene({
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: totalDuration_px,
                    offset: this.rowHeight_px
                }).setPin(targetElem).addTo(this.controller);
                var seconds_indifferent = Number.MAX_VALUE;
                var curOffset = 0;
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(firstPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
                curOffset += this.durationForEachStep_px;
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(secondPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
                curOffset += this.durationForEachStep_px;
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(thirdPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
            }
        };
        return HowItWorksStep2of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep2of3Layout = HowItWorksStep2of3Layout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var HowItWorksStep3of3Layout = (function (_super) {
        __extends(HowItWorksStep3of3Layout, _super);
        function HowItWorksStep3of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step3of3_template";
        }
        HowItWorksStep3of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep3of3Layout.prototype.className = function () {
            return "step3of3";
        };
        HowItWorksStep3of3Layout.prototype.regions = function (options) {
            return {};
        };
        return HowItWorksStep3of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep3of3Layout = HowItWorksStep3of3Layout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var HowItWorksLayout = (function (_super) {
        __extends(HowItWorksLayout, _super);
        function HowItWorksLayout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_template";
        }
        HowItWorksLayout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksLayout.prototype.className = function () {
            return "how_it_works";
        };
        HowItWorksLayout.prototype.regions = function (options) {
            return {
                step1region: "article#how_it_works_step1of3",
                step2region: "article#how_it_works_step2of3",
                step3region: "article#how_it_works_step3of3"
            };
        };
        HowItWorksLayout.prototype.onRender = function () {
            this.step1region.show(new Pligor.HowItWorksStep1of3Layout());
            this.step2region.show(new Pligor.HowItWorksStep2of3Layout());
            this.step3region.show(new Pligor.HowItWorksStep3of3Layout());
        };
        return HowItWorksLayout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksLayout = HowItWorksLayout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var OikiakaCalculationsModel = (function (_super) {
        __extends(OikiakaCalculationsModel, _super);
        function OikiakaCalculationsModel(attributes, options) {
            _super.call(this, attributes, options);
        }
        OikiakaCalculationsModel.prototype.defaults = function () {
            return {
                totalEnergy: 10000,
                clientProfit: 47247,
                kgCO2: 6629,
                profitableYears: 20.7,
                aposvesiYears: 4.3,
                weeksForInstallation: 5,
                installationCost: 9750
            };
        };
        OikiakaCalculationsModel.prototype.initialize = function (attributes, options) {
            var _this = this;
            _super.prototype.initialize.call(this, attributes, options);
            this.on("change:totalEnergy", function () {
                var newEnergy = _this.get("totalEnergy");
                _this.set({
                    weeksForInstallation: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    kgCO2: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    installationCost: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    aposvesiYears: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    profitableYears: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    clientProfit: "ΚΡΥΦΟ ΣΤΟ DEMO"
                });
            });
        };
        return OikiakaCalculationsModel;
    })(Backbone.Model);
    Pligor.OikiakaCalculationsModel = OikiakaCalculationsModel;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var OikiakaCalculationsItemView = (function (_super) {
        __extends(OikiakaCalculationsItemView, _super);
        function OikiakaCalculationsItemView(options) {
            var _this = this;
            _super.call(this, options);
            this.template = "script#oikiaka_calc_form_template";
            this.model.on("change", function () {
                _this.render();
            });
        }
        OikiakaCalculationsItemView.prototype.tagName = function () {
            return "div";
        };
        OikiakaCalculationsItemView.prototype.className = function () {
            return "form_table_wrapper";
        };
        OikiakaCalculationsItemView.prototype.ui = function () {
            return {};
        };
        OikiakaCalculationsItemView.prototype.onInitialize = function (options) {
        };
        OikiakaCalculationsItemView.prototype.serializeData = function () {
            var obj = _super.prototype.serializeData.call(this);
            obj.totalEnergy = Math.round(obj.totalEnergy).toFixed(0);
            obj.clientProfit = Math.round(obj.clientProfit).toFixed(0);
            obj.kgCO2 = Math.round(obj.kgCO2).toFixed(0);
            obj.profitableYears = OikiakaCalculationsItemView.formatYears(obj.profitableYears);
            obj.aposvesiYears = OikiakaCalculationsItemView.formatYears(obj.aposvesiYears);
            return obj;
        };
        OikiakaCalculationsItemView.prototype.onRender = function () {
        };
        OikiakaCalculationsItemView.prototype.events = function () {
            var _this = this;
            return {
                "change input[type=range]": function (event) {
                    var newTotalEnergy = $(event.target).val();
                    _this.model.set("totalEnergy", newTotalEnergy);
                }
            };
        };
        OikiakaCalculationsItemView.formatYears = function (yearsDecimal) {
            var decimalPlacesForYears = 1;
            var leftPart = Math.round(yearsDecimal);
            var rightPart = yearsDecimal - leftPart;
            var power = Math.pow(10, decimalPlacesForYears);
            var decimalPart = Math.round(rightPart * power) / power;
            var years = leftPart + decimalPart;
            return years.toFixed(decimalPlacesForYears);
        };
        return OikiakaCalculationsItemView;
    })(Marionette.ItemView);
    Pligor.OikiakaCalculationsItemView = OikiakaCalculationsItemView;
    applyMixins(OikiakaCalculationsItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var CalculationsLayout = (function (_super) {
        __extends(CalculationsLayout, _super);
        function CalculationsLayout(options) {
            _super.call(this, options);
            this.template = "script#calculations_template";
        }
        CalculationsLayout.prototype.tagName = function () {
            return "div";
        };
        CalculationsLayout.prototype.className = function () {
            return "calculations";
        };
        CalculationsLayout.prototype.regions = function (options) {
            return {
                oikiakaCalcRegion: "div.oikiakaCalcRegion"
            };
        };
        CalculationsLayout.prototype.onRender = function () {
            this.oikiakaCalcRegion.show(new Pligor.OikiakaCalculationsItemView({ model: new Pligor.OikiakaCalculationsModel() }));
        };
        return CalculationsLayout;
    })(Marionette.LayoutView);
    Pligor.CalculationsLayout = CalculationsLayout;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var PortfolioItemView = (function (_super) {
        __extends(PortfolioItemView, _super);
        function PortfolioItemView(options) {
            _super.call(this, options);
            this.overlayButtonMinimizeClass = "overlay_button_minimized";
            this.mapIsEnabledClass = "portfoliomap_enabled";
            this.isOverlayButtonInitiallyMinimized = false;
            this.template = "script#portfolio_template";
        }
        PortfolioItemView.prototype.getOverlayButtonText = function (minimize) {
            return "Κάνε κλικ εδώ για να " + (minimize ? "απ" : "") + "ενεργοποιήσεις το χάρτη";
        };
        PortfolioItemView.prototype.tagName = function () {
            return "div";
        };
        PortfolioItemView.prototype.className = function () {
            return "portfolio";
        };
        PortfolioItemView.prototype.ui = function () {
            return {
                overlayButton: ".overlay_button",
                map: ".portfoliomap"
            };
        };
        PortfolioItemView.prototype.onInitialize = function (options) {
        };
        PortfolioItemView.prototype.onRender = function () {
            this.getUI("overlayButton").find("p").text(this.getOverlayButtonText(this.isOverlayButtonInitiallyMinimized));
        };
        PortfolioItemView.prototype.events = function () {
            return {
                "click .overlay_button": "overlayButtonClicked"
            };
        };
        PortfolioItemView.prototype.overlayButtonClicked = function (event) {
            var overlayButton = this.getUI("overlayButton");
            overlayButton.toggleClass(this.overlayButtonMinimizeClass);
            overlayButton.find("p").text(this.getOverlayButtonText(overlayButton.hasClass(this.overlayButtonMinimizeClass)));
            this.getUI("map").toggleClass(this.mapIsEnabledClass);
        };
        return PortfolioItemView;
    })(Marionette.ItemView);
    Pligor.PortfolioItemView = PortfolioItemView;
    applyMixins(PortfolioItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var TestimonialsItemView = (function (_super) {
        __extends(TestimonialsItemView, _super);
        function TestimonialsItemView(options) {
            _super.call(this, options);
            this.template = "script#testimonials_template";
        }
        TestimonialsItemView.prototype.tagName = function () {
            return "div";
        };
        TestimonialsItemView.prototype.className = function () {
            return "testimonials";
        };
        return TestimonialsItemView;
    })(Marionette.ItemView);
    Pligor.TestimonialsItemView = TestimonialsItemView;
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var ContactItemView = (function (_super) {
        __extends(ContactItemView, _super);
        function ContactItemView(options) {
            _super.call(this, options);
            this.template = "script#contact_template";
        }
        ContactItemView.prototype.tagName = function () {
            return "div";
        };
        ContactItemView.prototype.className = function () {
            return "contact";
        };
        ContactItemView.prototype.ui = function () {
            return {
                currentYear: ".current_year"
            };
        };
        ContactItemView.prototype.onInitialize = function (options) {
        };
        ContactItemView.prototype.onRender = function () {
            this.getUI("currentYear").text(new Date().getFullYear());
        };
        return ContactItemView;
    })(Marionette.ItemView);
    Pligor.ContactItemView = ContactItemView;
    applyMixins(ContactItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
var Pligor;
(function (Pligor) {
    var MainLayout = (function (_super) {
        __extends(MainLayout, _super);
        function MainLayout(options) {
            _super.call(this, options);
            this.template = "#maintemplate";
            this.jumbotronRegionMinimumHeight = 450;
            this.fillViewPortHeightWithJumbotron();
            this.makeSectionsResetRoute();
        }
        MainLayout.prototype.attachMainLayoutToTheDOM = function () {
            $("body").prepend(this.render().el);
        };
        MainLayout.prototype.regions = function (options) {
            return {
                headerRegion: "section#header",
                jumbotronRegion: "section#jumbotron",
                announcementRegion: "section#announcement_section",
                howItWorksRegion: "section#how_it_works_section",
                calculationsRegion: "section#calculations_section",
                portfolioRegion: "section#portfolio_section",
                testimonialsRegion: "section#testimonials_section",
                contactRegion: "section#contact_section"
            };
        };
        MainLayout.prototype.childEvents = function () {
            return {};
        };
        MainLayout.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        MainLayout.prototype.events = function () {
            return {};
        };
        MainLayout.prototype.onBeforeRender = function () {
        };
        MainLayout.prototype.onRender = function () {
            var _this = this;
            this.headerRegion.show(new Pligor.HeaderLayout());
            this.jumbotronRegion.show(new Pligor.JumbotronLayout());
            this.announcementRegion.show(new Pligor.AnnouncementLayout());
            this.listenTo(this.announcementRegion.currentView, "poisonpill", function () {
                _this.announcementRegion.empty();
            });
            this.howItWorksRegion.show(new Pligor.HowItWorksLayout());
            this.calculationsRegion.show(new Pligor.CalculationsLayout());
            this.portfolioRegion.show(new Pligor.PortfolioItemView());
            this.testimonialsRegion.show(new Pligor.TestimonialsItemView());
            this.contactRegion.show(new Pligor.ContactItemView());
        };
        MainLayout.prototype.provideMenuDataStatically = function () {
            var headerLayout = this.headerRegion.currentView;
            var menuCollectionView = headerLayout.menuRegion.currentView;
            menuCollectionView.collection.add([
                {
                    "id": 1,
                    "menuItemTitle": "ενεργειακος συμψηφισμος (net metering)",
                    "menuItemSubtitle": "τι είναι και πως λειτουργεί",
                    "menuItemTarget": "how_it_works"
                },
                {
                    "id": 2,
                    "menuItemTitle": "υπολογισε κερδος &amp; κοστος",
                    "menuItemSubtitle": "δες γιατί συμφέρει",
                    "menuItemTarget": "calculations"
                },
                {
                    "id": 3,
                    "menuItemTitle": "εργα / portfolio",
                    "menuItemSubtitle": "από το 1982",
                    "menuItemTarget": "portfolio"
                },
                {
                    "id": 4,
                    "menuItemTitle": "τι λενε οι πελατες",
                    "menuItemSubtitle": "γνώρισε τους",
                    "menuItemTarget": "testimonials"
                },
                {
                    "id": 5,
                    "menuItemTitle": "επικοινωνια",
                    "menuItemSubtitle": "τηλεφωνο / email",
                    "menuItemTarget": "contact"
                }
            ]);
        };
        MainLayout.prototype.makeSectionsResetRoute = function () {
            $(document).ready(function () {
                $("section.majorsection").waypoint({
                    handler: function (direction) {
                        if (direction === "up") {
                            var curChannel = Pligor.RadioEvents().routerChannel;
                            Backbone.Radio.channel(curChannel.getName()).trigger(curChannel.majorSectionWaypoint_crossed_50percent_viewport);
                        }
                        else if (direction === "down") {
                        }
                        else {
                            throw "unexpected direction";
                        }
                    },
                    offset: "50%"
                });
            });
        };
        MainLayout.prototype.fillViewPortHeightWithJumbotron = function () {
            var _this = this;
            $(document).ready(function () {
                var headerHeight = _this.headerRegion.$el.outerHeight();
                var newHeight = $(window).height() - headerHeight;
                _this.jumbotronRegion.$el.children().first().height(Math.max(_this.jumbotronRegionMinimumHeight, newHeight));
            });
        };
        return MainLayout;
    })(Marionette.LayoutView);
    Pligor.MainLayout = MainLayout;
})(Pligor || (Pligor = {}));
var MyMarionetteApp = (function (_super) {
    __extends(MyMarionetteApp, _super);
    function MyMarionetteApp() {
        _super.call(this);
        this.layoutView = null;
        this.mainModel = null;
    }
    return MyMarionetteApp;
})(Marionette.Application);
var App = new MyMarionetteApp();
App.on("start", function (options) {
    App.mainModel = new Pligor.MainModel();
    App.layoutView = new Pligor.MainLayout({ model: App.mainModel });
    App.layoutView.attachMainLayoutToTheDOM();
    var myRouter = new Pligor.MyRouter();
    var started = Backbone.history.start({
        pushState: false
    });
    console.log("if this is false then you need to set routes before the constructor is being called: " + started);
});
App.start({});
Array.prototype.getClosestTo = function (num) {
    return this.reduce(function (prev, curr) {
        return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
    });
};
Array.prototype.distinct = function () {
    return this.filter(function (elem, index, arr) {
        return arr.indexOf(elem) == index;
    });
};
Array.prototype.unique = Array.prototype.distinct;
Array.prototype.sum = function () {
    return this.reduce(function (n1, n2) {
        return n1 + n2;
    }, 0);
};
var MyTS;
(function (MyTS) {
    function getValues(obj) {
        var keys = Object.getOwnPropertyNames(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    }
    MyTS.getValues = getValues;
})(MyTS || (MyTS = {}));
