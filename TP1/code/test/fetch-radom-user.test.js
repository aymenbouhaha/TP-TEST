import {fetchRandomUser} from "../fetch-random-user";
import { describe , expect,it } from 'vitest';


describe('fetchRandomUser()', () => {
    it('should fetch data from the server', async () => {
        try {
            const data = await fetchRandomUser();
            expect(data).toBeDefined();

            expect(data).toHaveProperty("gender")

        } catch (error) {
            expect(true).toBeFalsy()
        }
    });
});