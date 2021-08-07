import axios from 'axios';
import { Client } from '../entities/Client';

const URL = 'http://localhost:9092/api/clients';

export async function getClients() {
    return axios.get<Client[]>(URL);
}

export function postClient(client: Client) {
    axios.post(URL, client).then(response => console.log(response));
};
