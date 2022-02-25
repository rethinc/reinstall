# reinstall

Install specific android app versions easily

## Development

Run app locally in development mode
```
npm run dev
```

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

## Docker

run docker locally
```
docker build -t reinstall .
docker run -dp 8080:80 --name reinstall reinstall
```

open browser at [http://localhost:8080](http://localhost:8080)