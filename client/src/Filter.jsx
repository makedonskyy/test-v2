import React from 'react';

export default function Filter({ vacancy }) {
  console.log(vacancy.source.vacancies[0].vacancy);
  return (
    <>

        <details className="custom-select">
          <summary className="radios">

            <input type="radio" name="item" id="default" title="Auswählen..." />
            <input type="radio" name="item" id="item1" title="Item 1" />
            <input type="radio" name="item" id="item2" title="Item 2" />
            <input type="radio" name="item" id="item3" title="Item 3" />
            <input type="radio" name="item" id="item4" title="Item 4" />
            <input type="radio" name="item" id="item5" title="Item 5" />
          </summary>
          <ul className="list">
            <li>
              <label htmlFor="item1">
                Item 1
                <span />
              </label>
            </li>
            <li>
              <label htmlFor="item2">Item 2</label>
            </li>
            <li>
              <label htmlFor="item3">Item 3</label>
            </li>
            <li>
              <label htmlFor="item4">Item 4</label>
            </li>
            <li>
              <label htmlFor="item5">Item 5</label>
            </li>
          </ul>
        </details>
      </div>
    </>
  );
}
