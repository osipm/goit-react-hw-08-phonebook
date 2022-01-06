import axios from 'axios';
import * as actions from './actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('contacts');

    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

const addContact = (name, number) => dispatch => {
  const contacts = { name, number };
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contacts)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const handleDeleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

const nameFunction = { addContact, handleDeleteContact, fetchContacts };

export default nameFunction;
