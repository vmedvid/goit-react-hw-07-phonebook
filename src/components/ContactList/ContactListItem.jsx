import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ContactDeleteBtn } from './ContactDeleteBtn.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDeleteBtn = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      {name}: <br /> {number}
      <ContactDeleteBtn type="button" onClick={handleDeleteBtn}>
        Delete
      </ContactDeleteBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
