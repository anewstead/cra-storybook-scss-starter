## React Storybook SCSS-modules Atomic component library starter

- [Create React App](https://github.com/facebook/create-react-app)
- [Storybook](https://storybook.js.org/docs/guides/guide-react/)
- [craco](https://github.com/gsoft-inc/craco) to add/override CRA webpack

### IDE

Created with VSCode with the following plugins:

- [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

If you use another IDE you should install equivalent plugins and check your save/formatting options against those found in the `.vscode` folder in order to keep code formatting consistant
You can also run `npm run lint` to check code

### Scripts

- npm run storybook - dev storybook
- npm run build-storybook - publish storybook
- npm start - dev react app
- npm build - publish react app
- npm run lint - lints and prettiers src code `(linux/mac)`

### Strucure

Following [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), components are catagorised into:

- app - root of your app
- assets - global styles/scripts/variables/etc
- atoms - consist of just one thing that should not be broken down further
- molecules - consist of own code and include atoms
- organisms - consist of own code and include atoms and molecules
- templates - layout containers only
- pages - put atoms/molecules/organisms into templates and add content

Components should be created in isolation from an App, i.e. they should not have any App content, only sample media and text like `lorem ipsum`
This helps to avoid possible confusion later on to where App content is set.
