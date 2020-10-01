# Boilerplate Restful API express sequelize

Simplify setup Restful API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

### 1. install packages
install packages with npm
```bash
npm i
```
### 2. Create database
Create a database with name "**database_development**"
> you can change setting Sequelize DB configuration in
> 
> **/config/config.json**

### 3. Sequelize migrate
Run sequelize migrate to create *product* table
```bash
npx sequelize-cli db:migrate
```

### 4. Run API
```bash
npm run api
```

## Usage

| Method  | Endpoint          | Description                 | Data                  |
|---------|-------------------|-----------------------------|-----------------------|
| GET     | /product      | List of products            | `[{}, {}, {}]`        |
| GET     | /product/:id  | Detail product             | `{}`                  |
| POST    | /product      | Create new product        | `{"success": true}`        |
| PUT     | /product/:id  | Update product            | `{"success": true}`        |
| DELETE  | /product/:id  | Delete product            | `{"success": true}`        |

## Support

Please [open an issue](https://github.com/suryaeko/Boilerplate-RESTful-API-express-sequelize/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/suryaeko/Boilerplate-RESTful-API-express-sequelize/compare).