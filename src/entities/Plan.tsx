import { Client } from './Client';
import { Product } from './Product';

export type Plan = {
    id?: string;
    name: string;
    description: string;
    clients: Client[],
    products: Product[],
    ammount: number,
    dateCreated: string;
    dateUpdated: string;
}