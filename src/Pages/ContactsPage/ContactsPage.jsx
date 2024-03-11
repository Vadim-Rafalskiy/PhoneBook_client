import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { fetchAddContact } from 'redux/contacts/contacts-operation';

import { useDispatch } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactsList/ContactsList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isContacts = Boolean(filteredContacts.length);

  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(fetchAddContact(data));
  };
  return (
    <>
      <div className={styles.container}>
        <PhoneBookForm onSubmit={handleSubmit} />
        <PhoneBookFilter />
        <ContactList />
        {!isContacts && <p>Contacts list is empty!</p>}
      </div>
    </>
  );
};

export default ContactsPage;
