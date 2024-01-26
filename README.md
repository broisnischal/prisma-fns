# Prisma Utils

##### v1.2.0 Just landed :rocket:

[![npm version](https://img.shields.io/npm/v/prisma-fns.svg)](https://www.npmjs.com/package/prisma-fns)
[![Build Status](https://travis-ci.org/broisnischal/prisma-fns.svg?branch=master)](https://travis-ci.org/broisnischal/prisma-fns)
![GitHub Repo stars](https://img.shields.io/github/stars/broisnischal/prisma-fns?style=social)
![GitHub top language](https://img.shields.io/github/languages/top/broisnischal/prisma-fns?style=plastic)
[![License](https://img.shields.io/npm/l/prisma-fns.svg)](https://opensource.org/licenses/MIT)

Prisma Utils is a revolutionary utility extension for seamless Prisma integration. It enhances your workflow, simplifies common tasks and functions, and boosts the efficiency of your Prisma-powered applications.

## Features

- **Reusable fns:** Construct complex queries effortlessly.
- **Utilities:** Additional tools to enhance your Prisma experience.

## Installation

```bash
npm install prisma-fns
```

## Basic Usage

#### Get Values

```ts
// getValues (field, where)
const prisma = new PrismaClient().$extends(getValues);

const user = await prisma.user.getValues("email", {
  email: {
    contains: "@",
  },
});
```

#### Log

```ts
// console.log
const prisma = new PrismaClient().$extends(log);

const user = await prisma.user.findFirst();

prisma.$log(user);
```

#### Exists

```ts
const prisma = new PrismaClient().$extends(exists);

// returns boolean
const user = await prisma.user.exists({
  id: 1,
});
```

#### logPerf

```ts
const prisma = new PrismaClient().$extends(logPerf);

const user = await prisma.user.findFirst();


// logs in console
{
  model: 'User',
  operation: 'findFirst',
  args: {},
  time: 25.3997129797935
}
```

#### remember

```ts
// creates singleton
const prisma = new PrismaClient().$extends(remember);
```

#### save

```ts
// saves object
const prisma = new PrismaClient().$extends(save);
```

#### generate slug

```ts
const prisma = new PrismaClient().$extends(generateSlug);

const user = await prisma.user.findFirst();

// returns slug
user.slug;
```

## Support

If you like the project, please consider supporting us by giving a ⭐️ on Github.

### Bugs

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/broisnischal/prisma-fns/issues)

### Contributing

If you'd like to contribute, please follow our contribution guidelines.

### License

prisma-fns is open-source software licensed under the MIT [license](LICENSE).
