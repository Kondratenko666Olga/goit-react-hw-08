import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      className={styles.searchBox}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
