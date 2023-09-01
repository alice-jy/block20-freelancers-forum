describe('LuckyNumber', () =>{
    it("returns the sum of two numbers", () => {
        const sum = LuckyNumber(5,12);
        expect((sum).toBe(17));
    });
})

describe('GetmeNumber', () => {
    it("returns -----", () => {
        expect(GetmeNumber(7,12)).not.toBe(8);
    });
});

expect(total(5.51021,4.01123)).toBeCloseto(9.52);

const forSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
     'nice.oven': true,
    },
  };

  expect(forSale.kitchen).toHaveProperty('nice.oven');


