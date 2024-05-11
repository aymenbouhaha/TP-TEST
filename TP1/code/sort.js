export function sort(arr) {
    if (!arr.every(element => typeof element === 'number')) {
        throw new Error("Le tableau doit contenir uniquement des nombres.");
    }
    return arr.sort((a, b) => a - b);
}