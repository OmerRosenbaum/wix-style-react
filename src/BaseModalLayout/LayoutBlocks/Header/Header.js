import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.st.css';
import ModalHeading from './ModalHeading';
import { dataHooks } from '../../constants';
import Text from '../../../Text';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Header = ({ dataHook, className, titleAppearance }) => {
  const { headerClassName, title, subtitle } = useBaseModalLayoutContext();
  className = classNames(headerClassName, className);
  return (
    ((title || subtitle) && (
      <div data-hook={dataHook} {...styles('root', {}, { className })}>
        {typeof title === 'string' ? (
          <ModalHeading
            className={styles.title}
            dataHook={dataHooks.headerTitle}
            headingAppearance={titleAppearance}
          >
            {title}
          </ModalHeading>
        ) : (
          title
        )}
        {subtitle && (
          <Text
            className={styles.subtitle}
            secondary
            dataHook={dataHooks.headerSubtitle}
          >
            {subtitle}
          </Text>
        )}
      </div>
    )) ||
    null
  );
};

Header.displayName = 'BaseModalLayout.Header';

Header.propTypes = {
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** The modal's title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The modal's title appearance */
  titleAppearance: ModalHeading.propTypes.headingAppearance,
  /** The modal's subtitle */
  subtitle: PropTypes.string,
};

Header.defaultProps = { titleAppearance: 'custom' };
