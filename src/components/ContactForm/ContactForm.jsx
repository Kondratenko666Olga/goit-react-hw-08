import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
