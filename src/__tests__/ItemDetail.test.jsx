import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import ItemDetail from "../components/ItemDetail";
import { CONDITIONS, CURRENCIES } from "../utils/constants";

describe('tests for ItemDetail', () => {
    const item = {
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
        sold_quantity: 300,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    };

    test('renders content', () => {
        render(<ItemDetail item={item} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', item.picture);
        expect(img).toHaveAttribute('alt', 'Imagen de item');
        screen.getByText(`${CONDITIONS[item.condition]} - ${item.sold_quantity} vendidos`);
        screen.getByText(item.title);
        screen.getByText(`${CURRENCIES[item.price.currency]} ${item.price.amount}`);
        screen.getByText(item.price.decimals);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Comprar');
        screen.getByText(item.description);
    });
});
