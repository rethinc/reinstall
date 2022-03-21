# reinstall

Install specific android app versions easily

https://reinstall.rethinc.ch

## Development

Install nvm [https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

Install node with version used in project
```
nvm install
```

Run app locally in development mode
```
npm run dev
```
open browser at [http://localhost:3000](http://localhost:3000)

Build app locally (bundle will be created in `/dist` folder)
```
npm run build
```

Check code format issues
```
npm run lint
```

Automatically format code in whole project
```
npm run format
```

Run jest test runner in watch mode
```
npm run test
```

### Views

To add a new example add a vue component file next to the component with a `.example.vue` suffix (e.g MyButton.example.vue).

To view the examples run the dev server
```
npm run dev
```
and open browser at (**trailing '/' is important**)
[http://localhost:3000/view-examples/](http://localhost:3000/examples/)

### SVG Icons

Place colorizable (color will be defined in css) icons in the `src/application/shared/icons/assets/svg-colorizable` and others in `src/application/shared/icons/assets/svg-original`

After icon changes generate the icon provider file with the command:
```
npm run generate-icons
```

### Dependencies

Check for updated dependencies
```
npx npm-check-updates
```

Update version in package.json
```
npx npm-check-updates -u
```

Updated modules and package-lock file
```
npm update
```

## Docker

run docker locally
```
docker build -t reinstall .
docker run -dp 8080:80 --name reinstall reinstall
```

open browser at [http://localhost:8080](http://localhost:8080)


## Buy us a coffee

https://www.buymeacoffee.com/rethinc

