import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value.toLowerCase().trim()));
  };

  return (
    <Label htmlFor="search">
      Find contacts by name
      <Input type="text" name="search" onChange={handleFilter} />
    </Label>
  );
};
