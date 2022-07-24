import PropTypes from 'prop-types';

import css from '../Filter/Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return <label className={css.filterName} htmlFor='text'>
      Find contacts by name
      <input autoComplete='off' className={css.filter} type='text' value={filter} name='filter' onChange={changeFilter} />
    </label>
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

