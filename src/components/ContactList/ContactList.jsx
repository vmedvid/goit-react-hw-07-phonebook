import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  // console.log('contacts in ContactList', contacts);

  const newList = () => {
    const subString = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(subString)
    );
  };

  return (
    <List>
      {newList().map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.phone}
          id={contact.id}
        />
      ))}
    </List>
  );
};
