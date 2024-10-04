import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()))
  }

  return (
    <input
      type='text'
      placeholder="What currency are you looking for?🧐"
      onChange={handleChange}
      className={styles.input}
    />
  );
};
