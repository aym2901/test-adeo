const {filter} = require('../src/utils/filter');
const data = require('../data');

describe('filter test', () => {
    it('should show the animals matching with the ry string pattern', () => {
        const result = filter(data,'ry');

        expect(JSON.stringify(result)).toEqual('[{\"name\":\"Uzuzozne\",\"people\":[{\"name\":\"Lillie Abbott\",\"animals\":[{\"name\":\"John Dory\"}]}]},{\"name\":\"Satanwi\",\"people\":[{\"name\":\"Anthony Bruno\",\"animals\":[{\"name\":\"Oryx\"}]}]}]');
    });
});

describe('filter multiple test', () => {
    it('should show the animals matching with the ry string pattern and the yx string pattern', () => {
        const result = filter(filter(data,'ry'),'yx');

        expect(JSON.stringify(result)).toEqual('[{\"name\":\"Satanwi\",\"people\":[{\"name\":\"Anthony Bruno\",\"animals\":[{\"name\":\"Oryx\"}]}]}]');
    });
});

describe('filter case insensitive', () => {
    it('should show the animals matching with the or pattern independently of the case sensitivity', () => {
        const result = filter(data,'or');

        expect(JSON.stringify(result)).toEqual('[{\"name\":\"Satanwi\",\"people\":[{\"name\":\"Anthony Bruno\",\"animals\":[{\"name\":\"Oryx\"}]}]}]');
    });
});