import { PropTypes } from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import nameFunction from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as select from '../../redux/contacts/selector';

const ContactList = () => {
  const contacts = useSelector(select.getVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(nameFunction.fetchContacts()), []);

  const contactsList = contacts.map(({ id, name, number }) => (
    <li key={id} className={s.item}>
      <div>
        <span>
          {name}: {number}
        </span>
        <button
          className={s.btn}
          id={id}
          type="button"
          onClick={() => dispatch(nameFunction.handleDeleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return <ul>{contactsList}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const getFilteredContacts = (contact, filter) => {
  return contact.filter(text =>
    text.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ item: { contacts, filter } }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(nameFunction.fetchContacts()),
  handleDelete: id => dispatch(nameFunction.handleDeleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
