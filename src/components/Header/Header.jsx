import classNames from 'classnames';

import './Header.scss';
import { SORT_FIELD } from '../../constants';

export const Header = ({ sortField, sortBy, filterBy, query }) => (
  <header className="header">
    <button
      onClick={() => {
        sortBy('');
        filterBy('');
      }}
    >
      Reset
    </button>

    <input
      value={query}
      type="text"
      onChange={(event) => {
        filterBy(event.target.value);
      }}
    />
    <div>
      Sort by :
      <button
        onClick={() => sortBy(SORT_FIELD.ID)}
        className={classNames({ active: sortField === SORT_FIELD.ID })}
      >
        id
      </button>
      <button
        onClick={() => sortBy(SORT_FIELD.NAME)}
        className={classNames({ active: sortField === SORT_FIELD.NAME })}
      >
        name
      </button>
      <button
        onClick={() => sortBy(SORT_FIELD.COLOR)}
        className={classNames({ active: sortField === SORT_FIELD.COLOR })}
      >
        color
      </button>
    </div>
  </header>
);
