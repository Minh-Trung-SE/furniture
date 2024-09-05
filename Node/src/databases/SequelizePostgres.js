const {Sequelize} = require('sequelize')


const Postgres = new Sequelize(
    {
        host: process.env.POSTGRES_HOST,
        port: 5432,
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        dialect: "postgres",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        logging: false,
        logQueryParameters: true,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

module.exports = {
    Postgres
}