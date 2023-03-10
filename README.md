## Installation

```bash
$ npm install
```

## Installing db locally

```bash
First, download the csv brut file from https://fr.openfoodfacts.org/data
Then run
$ mongoimport --db noticia --collection products --file en.openfoodfacts.org.products.csv --type tsv --headerline
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Run documentation

```bash
# Using compodoc
$ npx @compodoc/compodoc -p tsconfig.json -s
```

## API URLS

```bash
# Get product by product_name
$ localhost:3001/products/name/{product_name}

# Get product by code
$ localhost:3001/products/code/{code}
```
