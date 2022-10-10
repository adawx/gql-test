# typescript-base

A no-frills base for any typescript project. Containing only typescript config, jest &amp; linting rules.

Builds to `dist`. To turn this off in tsconfig replace the following:
```
    "noEmit": false,
    "outDir": "dist",
    "declaration": true,
```
with
```
    "noEmit": true,
```

`yarn install`
`yarn build`
`yarn lint`
`yarn test`
`yarn start`
