const BiscuitsController = require('../Controller/BiscuitsController');

describe('winRatioCalculate', () => {
    test('winCount of 1 / comparisonCount of 2 = 50% ', () => {
        expect(BiscuitsController.winRatioCalculate(1,2)).toBe(50.0);
    });
    test('if comparisonCount = 0 then winRatio = 0', () => {
        expect(BiscuitsController.winRatioCalculate(0,0)).toBe(0);
    });
})
