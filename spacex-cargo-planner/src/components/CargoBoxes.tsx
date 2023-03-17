import React, { ChangeEvent, useState } from 'react';
import { useShipments } from '../ShipmentsProvider';

type CargoBoxesProps = {
  boxes: string;
  id: string;
};

const CargoBoxes: React.FC<CargoBoxesProps> = ({ boxes, id }) => {
  const { updateCargoBoxes } = useShipments();
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateCargoBoxes(id, units.join());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="my-3">CARGO BOXES</label>
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
        <div className="d-flex justify-content-end">
          <p>
            Required cargo bays: <strong className="fs-3 p-2">{bays}</strong>
          </p>
          <button
            type="submit"
            className="btn btn-sm btn-outline-secondary mt-2 mb-4 ms-4"
            disabled // submit button disabled; enable to update cargo boxes
          >
            Submit
          </button>
        </div>
        <div className="d-flex justify-content-end"></div>
      </form>
    </>
  );
};

export default CargoBoxes;
