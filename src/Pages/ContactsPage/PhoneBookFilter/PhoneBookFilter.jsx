import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilter } from '../../../redux/filter/filter-selectors';
import { useSelector, useDispatch } from 'react-redux';

import TextFieldMui from 'shared/components/TextFieldMui/TextFieldMui';

import fields from './fields';

import styles from '../ContactsPage.module.scss';

const PhoneBookFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filter = useSelector(getFilter);

  return (
    <div className={styles.filter}>
      <TextFieldMui value={filter} handleChange={handleFilter} {...fields.name} />
    </div>
  );
};

export default PhoneBookFilter;
