import { verifyLive } from "./verifier";

const cell = {
  neighbours: 1
};
const cell2 = {
  neighbours: 4
};
const cell3 = {
  neighbours: 2
};
const cell4 = {
  neighbours: 3
};
const cell5 = {
  neighbours: 3
};

describe('Neighbours', () => {
  test("less than two neighbours, dies of under population", () => {
    const result = verifyLive(cell);
    expect(result).toBe(false);
  });
  test("more than three neighbours, dies of overcrowding", () => {
    const result = verifyLive(cell2);
    expect(result).toBe(false); 
  });
  test("cell with two live neighbours lives on to the next generation.", () => {
    const result = verifyLive(cell3);
    expect(result).toBe(true);
  });
  test("cell with three live neighbours lives on to the next generation.", () => {
    const result = verifyLive(cell4);
    expect(result).toBe(true);
  });
  test("cell with three live neighbours lives on to the next generation.", () => {
    const result = verifyLive(cell5);
    expect(result).toBe(true);
  });
});