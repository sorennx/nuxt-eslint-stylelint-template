module.exports = {
  customSyntax: "postcss-html",
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-clean-order",
  ],
  rules: {
    "selector-id-pattern": "^[a-z][a-zA-Z0-9]+$",
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "no-descending-specificity": null,
    "at-rule-empty-line-before": null,
    "declaration-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
  },
};
