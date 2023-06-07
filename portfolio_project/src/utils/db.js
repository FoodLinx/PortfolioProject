// TODO: Create a db driver to be an abstraction for the mongoose db orm
// We need a getById function

class DBClient {
  constructor() {
    const host = process.env.HOST || null
    const password = process.env.PASSWORD || null
    const database = process.env.DATABASE || null
    // If any variable is not available throw an error
    if (!host || !password || !database) throw new Error("Check your environment variables");
    const uri = `mongodb+srv://${host}:${password}@${database}/?retryWrites=true&w=majority`
    const options = {
      family: 4 // Use IPv4, skip trying IPv6
    }

    this.client = createConnection(uri, options);
  }

  isAlive() {
    throw new Error('Not implemented yet')
  }

  getById() {
    throw new Error('Not implemented yet')
  }

  get() {
    throw new Error('Not implemented yet')
  }
}

const dbClient = new DBClient();
export default dbClient;
