import formFieldDriverFactory from '../FormField/FormField.driver';

const googleAddressInputWithLabelDriverFactory = ({ element }) => {
  const input = element.childNodes[1];

  return {
    ...formFieldDriverFactory({ element }),
    getInput: () => input,
    hasInput: () => input.childNodes[0].tagName.toLowerCase() === 'input',
  };
};

export default googleAddressInputWithLabelDriverFactory;
