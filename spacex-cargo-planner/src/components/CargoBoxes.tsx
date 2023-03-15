import React, { ChangeEvent, useState } from 'react';

type CargoBoxesProps = {
  boxes: string;
};

const CargoBoxes: React.FC<CargoBoxesProps> = ({ boxes }) => {
  const shipmentBoxes = boxes.split(',');
  const [units, setUnits] = useState(shipmentBoxes);

  const handleUnitChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const unitsCopy = [...units];
    unitsCopy[i] = e.target.value.toString();
    setUnits(unitsCopy);
  };

  const unitSum = units.reduce((acc: number, curr: string) => {
    let number = parseFloat(curr);
    number = isNaN(number) ? 0 : number;
    return acc + number;
  }, 0);
  const bays = Math.ceil(unitSum / 10);

  return (
    <>
      <form>
        <label className="mt-3">CARGO BOXES</label>
        <div className="input-group input-group-sm mb-3">
          {units.map((unit, i) => (
            <input
              key={i}
              id={unit}
              type="text"
              aria-label="First name"
              className="form-control"
              onChange={(e) => handleUnitChange(i, e)}
              value={unit}
            />
          ))}
        </div>
      </form>
      <p>
        Required cargo bays: <strong className="fs-3 p-2">{bays}</strong>
      </p>
    </>
  );
};

export default CargoBoxes;
