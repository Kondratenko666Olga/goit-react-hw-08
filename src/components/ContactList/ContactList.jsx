import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
