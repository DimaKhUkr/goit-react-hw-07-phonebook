// import PropTypes from 'prop-types';
import { fetchDelContacts } from 'redux/option';
import { Box, Btn, ListBox } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
export const ContactsList = () => {
  const { items: contacts } = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filters);
  const dispatch = useDispatch();
  const lowCaseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );
  return (
    <ListBox>
      {visibleContacts.map(({ id, name, phone: number }) => {
        return (
          <Box key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Btn onClick={() => dispatch(fetchDelContacts(id))} type="button">
              Прощай контакт насовсем
            </Btn>
          </Box>
        );
      })}
    </ListBox>
  );
};

// ContactsList.propTypes = {
//   onClickDelBtn: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired).isRequired
//   ).isRequired,
// };
