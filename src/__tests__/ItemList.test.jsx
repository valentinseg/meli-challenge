import React from "react";
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import ItemList from "../components/ItemList";
import { CURRENCIES } from "../utils/constants";
import shipping from "../assets/ic_shipping.png";
import shipping2x from "../assets/ic_shipping@2x.png";

describe('tests for ItemList', () => {
    const items = [
        {
            id: 'MLA1139426257',
            title: 'Gorro Ruso Aviador Térmico Impermeable Tapa Oreja Ushanka',
            price: {
                currency: 'ARS',
                amount: 3299,
                decimals: 10,
            },
            picture: 'http://http2.mlstatic.com/D_965641-MLA50126555088_052022-I.jpg',
            condition: 'new',
            free_shipping: false,
            address: {
                state: 'Capital Federal',
            },
        },
        {
            id: 'MLA1148885134',
            title: 'Calefactor Eléctrico Magiclick C1009 Blanco 220v',
            price: {
                currency: 'ARS',
                amount: 6638,
                decimals: 64,
            },
            picture: 'http://http2.mlstatic.com/D_901912-MLA31477395217_072019-I.jpg',
            condition: 'new',
            free_shipping: true,
            address: {
                state: 'Buenos Aires',
            },
        }
    ];

    test('renders content', () => {
        render(<ItemList items={items} />, {wrapper: BrowserRouter});
        const pictures = screen.getAllByAltText('Imagen de item');
        pictures.forEach((img, index) => {
            expect(img).toHaveAttribute('src', items[index].picture);
            expect(img).toHaveAttribute('width', '180');
            expect(img).toHaveAttribute('height', '180');
        });
        const images = screen.getAllByAltText('Envío gratis');
        images.forEach((img) => {
            expect(img).toHaveAttribute('src', shipping2x);
            expect(img).toHaveAttribute('srcset', `${shipping}, ${shipping2x} 2x`);
            expect(img).toHaveAttribute('width', '18');
            expect(img).toHaveAttribute('height', '18');
        });
        items.forEach((item) => {
            screen.getByText(`${CURRENCIES[item.price.currency]} ${item.price.amount}`);
            screen.getByText(item.title);
            screen.getByText(item.address.state);
        });
        const links = screen.getAllByRole('link');
        links.forEach((link, index) => {
            expect(link).toHaveAttribute('href', `/items/${items[index].id}`);
        });
    });
});
