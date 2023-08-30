// New Database. Ilalagay sa API para magamit ng Q-HUB system/ web-app

import { MongoClient } from "mongodb";

const url = 'mongodb://localhost'

const client = new MongoClient(url)

const clientCon = client.connect()

export default clientCon
