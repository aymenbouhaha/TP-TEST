import { test , expect } from 'vitest';
import {transform} from "../transform";


test('Une chaîne vide', () => {
    const input = ""
    const result = transform(input)
    expect(result).toEqual("");
});


test('Une chaîne avec des caractères en minuscules', () => {
    const input = "hello"
    const result = transform(input)
    expect(result).toEqual("HELLO");
});


test('Une chaîne avec des caractères spéciaux', () => {
    const input = "!@#abc123"
    const result = transform(input)
    expect(result).toEqual("!@#ABC123");
});