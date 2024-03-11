const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'Name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  phoneNumber: {
    type: 'tel',
    name: 'phoneNumber',
    required: true,
    label: 'Phone',
    placeholder: '',
    pattern: '[+][1-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

export default fields;
