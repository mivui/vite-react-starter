/**
 * @type import('stylelint').Config
 */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'prettier/prettier': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
