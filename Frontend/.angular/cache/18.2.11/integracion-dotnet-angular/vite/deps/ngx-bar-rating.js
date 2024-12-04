import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-NIMZXKMM.js";
import {
  NgTemplateOutlet
} from "./chunk-YJARRLNJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  NgModule,
  Output,
  TemplateRef,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  input,
  model,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UAQRNI57.js";
import "./chunk-ZSY7TSMJ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ngx-bar-rating/fesm2022/ngx-bar-rating.mjs
function BarRating_For_3_Case_1_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r3 = ɵɵnextContext(2);
    const fractionTemplate_r5 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", ((tmp_15_0 = ctx_r3.customFractionRating()) == null ? null : tmp_15_0.template) || fractionTemplate_r5);
  }
}
function BarRating_For_3_Case_2_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r3 = ɵɵnextContext(2);
    const inactiveTemplate_r6 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", ((tmp_15_0 = ctx_r3.customInActiveRating()) == null ? null : tmp_15_0.template) || inactiveTemplate_r6);
  }
}
function BarRating_For_3_Case_3_ng_template_0_Template(rf, ctx) {
}
function BarRating_For_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, BarRating_For_3_Case_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r3 = ɵɵnextContext(2);
    const activeTemplate_r7 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", ((tmp_15_0 = ctx_r3.customActiveRating()) == null ? null : tmp_15_0.template) || activeTemplate_r7);
  }
}
function BarRating_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function BarRating_For_3_Template_div_click_0_listener() {
      const ɵ$index_5_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      ctx_r3.updateRating(ɵ$index_5_r3 + 1);
      return ɵɵresetView(ctx_r3.barClick.emit(ɵ$index_5_r3 + 1));
    })("mouseenter", function BarRating_For_3_Template_div_mouseenter_0_listener() {
      const ɵ$index_5_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.hoveredIndex.set(ɵ$index_5_r3 + 1));
    });
    ɵɵtemplate(1, BarRating_For_3_Case_1_Template, 1, 1, null, 8)(2, BarRating_For_3_Case_2_Template, 1, 1, null, 8)(3, BarRating_For_3_Case_3_Template, 1, 1, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const unit_r8 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_14_0 = unit_r8) === ctx_r3.UNITS.fraction ? 1 : tmp_14_0 === ctx_r3.UNITS.inactive ? 2 : 3);
  }
}
function BarRating_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.ratingText());
  }
}
function BarRating_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
}
function BarRating_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function BarRating_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
}
var ActiveRating = class _ActiveRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function ActiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ActiveRating,
      selectors: [["", "ratingActive", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveRating, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[ratingActive]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var InactiveRating = class _InactiveRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function InactiveRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InactiveRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _InactiveRating,
      selectors: [["", "ratingInactive", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InactiveRating, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[ratingInactive]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var FractionRating = class _FractionRating {
  constructor(template) {
    this.template = template;
  }
  static {
    this.ɵfac = function FractionRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FractionRating)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _FractionRating,
      selectors: [["", "ratingFraction", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FractionRating, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[ratingFraction]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var RATING_VALUE_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => BarRating),
  multi: true
};
var BarRatingUnitState;
(function(BarRatingUnitState2) {
  BarRatingUnitState2["active"] = "active";
  BarRatingUnitState2["inactive"] = "inactive";
  BarRatingUnitState2["selected"] = "selected";
  BarRatingUnitState2["fraction"] = "fraction";
})(BarRatingUnitState || (BarRatingUnitState = {}));
var BarRating = class _BarRating {
  constructor() {
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.UNITS = BarRatingUnitState;
    this.rate = model(5);
    this.max = input(5, {
      transform: numberAttribute
    });
    this.readOnly = input(false, {
      transform: booleanAttribute,
      alias: "readonly"
    });
    this.theme = input("default");
    this.showText = input(false, {
      transform: booleanAttribute
    });
    this.titles = input([]);
    this.required = input(false, {
      transform: booleanAttribute
    });
    this.tabIndex = input(0, {
      transform: numberAttribute
    });
    this.hoveredIndex = signal(null);
    this.contexts = computed(() => {
      if (this.hoveredIndex()) {
        return Array.from({
          length: this.max()
        }, (c, i) => {
          if (this.hoveredIndex()) {
            if (i + 1 <= this.hoveredIndex()) {
              return BarRatingUnitState.active;
            }
            return BarRatingUnitState.inactive;
          }
        });
      }
      return Array.from({
        length: this.max()
      }, (c, i) => {
        if (i + 1 <= this.rate()) {
          return BarRatingUnitState.selected;
        }
        if ((i + 1 === Math.round(this.rate()) && this.rate() % 1) >= 0.5) {
          return BarRatingUnitState.fraction;
        }
        return BarRatingUnitState.inactive;
      });
    });
    this.ratingText = computed(() => {
      const value = this.hoveredIndex() || this.rate();
      return this.titles()[value] || value;
    });
    this.barClick = new EventEmitter();
    this.customActiveRating = contentChild(ActiveRating);
    this.customInActiveRating = contentChild(InactiveRating);
    this.customFractionRating = contentChild(FractionRating);
  }
  updateRating(value) {
    this.rate.set(value);
    this.onChange(value);
  }
  /**
   * This is the initial value set to the component
   */
  writeValue(value) {
    if (value !== null) {
      this.rate.set(value);
    }
  }
  validate(c) {
    return this.required && !c.value ? {
      required: true
    } : null;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static {
    this.ɵfac = function BarRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRating)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BarRating,
      selectors: [["bar-rating"]],
      contentQueries: function BarRating_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.customActiveRating, ActiveRating, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.customInActiveRating, InactiveRating, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.customFractionRating, FractionRating, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(3);
        }
      },
      inputs: {
        rate: [1, "rate"],
        max: [1, "max"],
        readOnly: [1, "readonly", "readOnly"],
        theme: [1, "theme"],
        showText: [1, "showText"],
        titles: [1, "titles"],
        required: [1, "required"],
        tabIndex: [1, "tabIndex"]
      },
      outputs: {
        rate: "rateChange",
        barClick: "barClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR]), ɵɵStandaloneFeature],
      decls: 11,
      vars: 9,
      consts: [["fractionTemplate", ""], ["activeTemplate", ""], ["inactiveTemplate", ""], [3, "focusout"], [1, "br-units", 3, "mouseleave"], [1, "br-unit"], [1, "br-text"], [1, "br-unit", 3, "click", "mouseenter"], [3, "ngTemplateOutlet"], [1, "br-unit-inner", "br-fraction"], [1, "br-unit-inner", "br-active"], [1, "br-unit-inner", "br-inactive"]],
      template: function BarRating_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("focusout", function BarRating_Template_div_focusout_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onTouched());
          });
          ɵɵelementStart(1, "div", 4);
          ɵɵlistener("mouseleave", function BarRating_Template_div_mouseleave_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.hoveredIndex.set(0));
          });
          ɵɵrepeaterCreate(2, BarRating_For_3_Template, 4, 1, "div", 5, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd();
          ɵɵtemplate(4, BarRating_Conditional_4_Template, 2, 1, "div", 6);
          ɵɵelementEnd();
          ɵɵtemplate(5, BarRating_ng_template_5_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, BarRating_ng_template_7_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(9, BarRating_ng_template_9_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵclassMapInterpolate1("br br-", ctx.customInActiveRating() ? "" : ctx.theme(), "");
          ɵɵclassProp("br-readonly", ctx.readOnly())("br-disabled", ctx.disabled);
          ɵɵattribute("tabindex", ctx.disabled || ctx.readOnly() ? -1 : ctx.tabIndex());
          ɵɵadvance(2);
          ɵɵrepeater(ctx.contexts());
          ɵɵadvance(2);
          ɵɵconditional(ctx.showText() ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{--br-font-size: 16px;--br-gap: 0;--br-active-color: #EDB867;--br-inactive-color: #D2D2D2}.br[_ngcontent-%COMP%]{position:relative}.br-units[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;gap:var(--br-gap)}.br-unit[_ngcontent-%COMP%]{font-size:var(--br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner[_ngcontent-%COMP%]{position:relative}.br-readonly[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%], .br-disabled[_ngcontent-%COMP%]   .br-unit[_ngcontent-%COMP%]{cursor:default;pointer-events:none}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRating, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "bar-rating",
      providers: [RATING_VALUE_ACCESSOR, RATING_VALUE_VALIDATOR],
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="br br-{{ customInActiveRating() ? '' : theme() }}"\r
     [class.br-readonly]="readOnly()"\r
     [class.br-disabled]="disabled"\r
     [attr.tabindex]="disabled || readOnly() ? -1 : tabIndex()"\r
     (focusout)="onTouched()">\r
\r
  <div class="br-units"\r
       (mouseleave)="hoveredIndex.set(0)">\r
    @for (unit of contexts(); let i = $index; track i) {\r
      <div class="br-unit"\r
           (click)="updateRating(i + 1); barClick.emit(i + 1)"\r
           (mouseenter)="hoveredIndex.set(i + 1)">\r
        @switch (unit) {\r
          @case (UNITS.fraction) {\r
            <ng-template [ngTemplateOutlet]="customFractionRating()?.template || fractionTemplate"/>\r
          }\r
          @case (UNITS.inactive) {\r
            <ng-template [ngTemplateOutlet]="customInActiveRating()?.template || inactiveTemplate"/>\r
          }\r
          @default {\r
            <ng-template [ngTemplateOutlet]="customActiveRating()?.template || activeTemplate"/>\r
          }\r
        }\r
      </div>\r
    }\r
  </div>\r
\r
  @if (showText()) {\r
    <div class="br-text">{{ ratingText() }}</div>\r
  }\r
</div>\r
\r
<ng-template #fractionTemplate>\r
  <div class="br-unit-inner br-fraction"></div>\r
</ng-template>\r
\r
<ng-template #activeTemplate>\r
  <div class="br-unit-inner br-active"></div>\r
</ng-template>\r
\r
<ng-template #inactiveTemplate>\r
  <div class="br-unit-inner br-inactive"></div>\r
</ng-template>\r
`,
      styles: ["*{box-sizing:border-box}:host{--br-font-size: 16px;--br-gap: 0;--br-active-color: #EDB867;--br-inactive-color: #D2D2D2}.br{position:relative}.br-units{display:flex;flex-wrap:nowrap;gap:var(--br-gap)}.br-unit{font-size:var(--br-font-size);cursor:pointer;-webkit-font-smoothing:antialiased;text-rendering:auto}.br-unit-inner{position:relative}.br-readonly .br-unit,.br-disabled .br-unit{cursor:default;pointer-events:none}\n"]
    }]
  }], null, {
    barClick: [{
      type: Output
    }]
  });
})();
var BarRatingModule = class _BarRatingModule {
  static {
    this.ɵfac = function BarRatingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarRatingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BarRatingModule,
      imports: [BarRating, ActiveRating, InactiveRating, FractionRating],
      exports: [BarRating, ActiveRating, InactiveRating, FractionRating]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarRatingModule, [{
    type: NgModule,
    args: [{
      imports: [BarRating, ActiveRating, InactiveRating, FractionRating],
      exports: [BarRating, ActiveRating, InactiveRating, FractionRating]
    }]
  }], null, null);
})();
export {
  ActiveRating,
  BarRating,
  BarRatingModule,
  FractionRating,
  InactiveRating
};
//# sourceMappingURL=ngx-bar-rating.js.map
