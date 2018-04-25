import calculate from './calculate';
import { expect } from 'chai';

it('should expect 00 Ω ±5%', () => {
  var mockStateObj = {
      firstFigure: "0",
      secondFigure: "0",
      decimalMultiplier: "0",
      tolerance: "10",
      ohmValueText: "",
    };
   expect(calculate(mockStateObj).ohmValueText).to.deep.equal("00 Ω ±5%");
});

it('should be able to select values from all dropdowns, should expect 12,000 Ω ±10%', () => {
  var mockStateObj = {
      firstFigure: "1",
      secondFigure: "2",
      decimalMultiplier: "3",
      tolerance: "11",
      ohmValueText: "",
    };
   expect(calculate(mockStateObj).ohmValueText).to.deep.equal("12,000 Ω ±10%");
});
