// New Database. Ilalagay sa API para magamit ng Q-HUB system/ web-app

import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(url)

const clientCon = client.connect()

export default clientCon
