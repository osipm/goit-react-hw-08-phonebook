import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import s from './renderList.module.css';
export default function RenderList() {
  return (
    <div className={s.blokc}>
      <ContactForm />
      <div className={s.blok}>
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
