import Heading from '../Heading/Heading';
import { dataHooks } from './constants';
import Text from '../Text/Text';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './CustomModal.st.css';

const HeaderLayout = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      {title && (
        <div>
          <Heading dataHook={dataHooks.title} appearance={'H3'}>
            {title}
          </Heading>
          {subtitle && <Text dataHook={dataHooks.subtitle}>{subtitle}</Text>}
        </div>
      )}
    </div>
  );
};

HeaderLayout.defaultProps = {
  title: '',
  subtitle: '',
};

HeaderLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeaderLayout;
