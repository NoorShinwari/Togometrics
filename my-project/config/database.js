// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env(
          "DATABASE_HOST",
          "strapi-database.cmh7tqo3gjxu.eu-central-1.rds.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "strapi_database"),
        username: env("DATABASE_USERNAME", "strapi_user"),
        password: env("DATABASE_PASSWORD", "Test1234"),
      },
      options: {
        ssl: false,
      },
    },
  },
});
