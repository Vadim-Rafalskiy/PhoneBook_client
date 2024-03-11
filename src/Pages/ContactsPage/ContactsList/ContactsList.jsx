import { nanoid } from 'nanoid';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDeleteContact } from '../../../redux/contacts/contacts-operation';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { fetchAllContacts } from '../../../redux/contacts/contacts-operation';

import styles from '../ContactsPage.module.scss';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const elements = contacts.map(({ _id, name, phoneNumber }) => (
    <li key={nanoid()} className={styles.contactItem}>
      <div>
        <div className={styles.contactName}>{name}</div>
        <div className={styles.contactsNumber}>{phoneNumber}</div>
      </div>
      <button className={styles.btnDelete} onClick={() => handleDeleteContact(_id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.contactList}>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};
