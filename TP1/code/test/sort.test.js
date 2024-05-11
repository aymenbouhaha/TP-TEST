import { test , expect } from 'vitest';
import {sort} from "../sort";


test('Un tableau non trié', () => {
    const input = [3, 1, 2]
    const result = sort(input)
    expect(result).toEqual([1,2,3]);
});


test('Un tableau déjà trié', () => {
    const input = [1, 2, 3]
    const result = sort(input)
    expect(result).toEqual([1, 2, 3]);
});


test('Un tableau inversé', () => {
    const input = [3, 2, 1]
    const result = sort(input)
    expect(result).toEqual([1, 2, 3]);
});

test('Un tableau contenant des éléments non numériques', () => {
    const input = [1, 2, 'a']
    expect(() => sort(input)).toThrowError("Le tableau doit contenir uniquement des nombres.");
});