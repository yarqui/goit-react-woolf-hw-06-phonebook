import PropTypes from "prop-types";
import Label from "../Label/Label";
import Input from "../Input/Input";

const Filter = ({ filterContacts }) => {
  return (
    <div className="flex flex-col-reverse">
      <Input
        type="text"
        name="filter"
        title="Filter"
        onChange={(e) => filterContacts(e.target.value)}
        required
        className="focus:peer"
      />
      <Label htmlFor="filter" label="Find contacts by name" />
    </div>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
