# reinstall

Install specific android app versions easily

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

Add view examples component in `view-examples/examples/shared` and register it in `view-examples/examples.ts`

Run view examples app
```
npm run view-examples
```
open browser at [http://localhost:3001](http://localhost:3001)

### SVG Icons

Place colorizable (color will be defined in css) icons in the `assets/icons/colorizable` and others in `assets/icons/regular`

After icon changes generate the icon provider file with the command:
```
npm run generate-icons
```

## Docker

run docker locally
```
npm run build
docker build -t reinstall .
docker run -dp 8080:80 --name reinstall reinstall
```

open browser at [http://localhost:8080](http://localhost:8080)