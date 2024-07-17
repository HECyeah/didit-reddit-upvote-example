import pg from "pg"

export function Connect() {

    const dp = new pg.Pool({
        connectionString: process.env.DATABASE_UR
    })
    return dp
}