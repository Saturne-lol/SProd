import postgres from "postgres";

const sql = postgres({
    host: "212.227.179.23",
    port: "5432",
    database: "accounts",
    username: "postgres",
    password: "mHMpKT&G5pA66%"
})

export default sql;