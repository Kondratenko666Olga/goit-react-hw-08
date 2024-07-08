import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts } from '../redux/contacts/selectors';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactsPage;
