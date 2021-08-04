import axios from 'axios';
import { Client } from '../entities/Client';

const URL = 'http://localhost:9092/api/clients';

export function getClients() {
    axios.get(URL).then(response => console.log(response));
}


export function postClient(client: Client) {
    axios.post(URL, client).then(response => console.log(response));
};