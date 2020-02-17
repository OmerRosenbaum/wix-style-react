import formFieldDriverFactory from '../FormField/FormField.protractor.driver';

const textFieldDriverFactory = component => ({
  ...formFieldDriverFactory(component),
  getInput: () => component.find('input'),
});

export default textFieldDriverFactory;
