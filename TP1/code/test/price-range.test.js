import {isPriceInRange} from "../price-range";
import { test , expect } from 'vitest';


test('Prix dans la plage normale', () => {
    const price = 50
    const min=0
    const max=100
    expect(isPriceInRange(price,min,max)).toBeTruthy();
});

test('Prix égal au minimum de la plage', () => {
    const price = 0
    const min=0
    const max=100
    expect(isPriceInRange(price,min,max)).toBeTruthy();
});

test('Prix égal au maximum de la plage', () => {
    const price = 100
    const min=0
    const max=100
    expect(isPriceInRange(price,min,max)).toBeTruthy();
});

test('Prix inférieur à la plage', () => {
    const price = -10
    const min=0
    const max=100
    expect(isPriceInRange(price,min,max)).toBeFalsy()
});

test('Prix supérieur à la plage', () => {
    const price = 150
    const min=0
    const max=100
    expect(isPriceInRange(price,min,max)).toBeFalsy()
});

test('Plage vide', () => {
    const price = 50
    const min=100
    const max=0
    expect(isPriceInRange(price,min,max)).toBeFalsy()
});
