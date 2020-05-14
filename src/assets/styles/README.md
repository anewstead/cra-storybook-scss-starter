### base.scss

is included in all scss files via webpack config
so that variables and mixins are available throughout

try to avoid using scss to include simple reusable code where instead a higher level class would do
e.g. use class='primary-h1 etc' in markup instead of @include 'primary-h1' into scss rules

### global.scss

import into your root app.js (not index.js)
it is added to storybook config so automatically included for all stories

### node_modules

to import styles from node_modules use '~'
wrong: @import '../../node_modules/vendor/vendor.css'
right: @import '~vendor/vendor.css';
