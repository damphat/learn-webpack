## TODO

- [x] `webpack5` with `vue3`
- [x] webpack-dev-server
- [x] html-webpack-plugin: generate root html
- [x] debug, set breakpoint
- [ ] import css library

### webpack5 + element-plus

- error: "Module not found: Error: Can't resolve"
- cause: import a commonjs file from a strict es-module
- solve: use require() instead of import

- TODO customize webpack to allow import commonjs file from a strict es-module?

### eslint

- what is the purpose of `config.root`?
- `eslint-plugin-prettier` vs `eslint-config-prettier`
- eslint ignore `node_modules` by default?
