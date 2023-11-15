import { test, expect } from '@playwright/experimental-ct-react';
import React from 'react';

import { Counter } from '@/components/Counter/Counter';

test.use({ viewport: { width: 1920, height: 1080 } });

test('Counter component should render correctly', async ({ mount }) => {
    const component = await mount(<Counter />);

    // expect the root component has root class
    await expect(component).toHaveClass('rsa-counter');
});

test('Counter value should decrement when decrement button is clicked', async ({ mount }) => {
    const component = await mount(<Counter />);

    // click the decrement button in the component
    await component.locator('[data-testid="decrement"]').click();

    // expect the counter label in the component contains the right result
    await expect(component.locator('[data-testid="counter"]')).toHaveText('-1');
});

test('Counter value should increment when increment button is clicked', async ({ mount }) => {
    const component = await mount(<Counter />);

    // click the decrement button in the component
    await component.locator('[data-testid="increment"]').click();

    // expect the counter label in the component contains the right result
    await expect(component.locator('[data-testid="counter"]')).toHaveText('1');
});
