import React from 'react';
import * as Composite from '../Composite';
import Label from '../Label';
import GoogleAddressInput from '../GoogleAddressInput';
import FormField from '../FormField';

const GoogleAddressInputWithLabel = ({ children, ...props }) => (
  <FormField {...props}>{children}</FormField>
);

GoogleAddressInputWithLabel.propTypes = {
  children: Composite.children(
    Composite.optional(Label),
    Composite.once(GoogleAddressInput),
  ),
};

GoogleAddressInputWithLabel.displayName = 'GoogleAddressInputWithLabel';

export default GoogleAddressInputWithLabel;
