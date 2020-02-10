import React from 'react';
import PropTypes from 'prop-types';

import HeaderLayout from './HeaderLayout';
import Button from '../Button';
import styles from './CustomModal.st.css';
import { dataHooks } from './constants';
import CloseButton from '../CloseButton';
import Divider from '../Divider';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    /** additional css classes */
    className: PropTypes.string,
    dataHook: PropTypes.string,
    primaryButtonText: PropTypes.string,
    primaryButtonProps: PropTypes.object,
    secondaryButtonText: PropTypes.string,
    secondaryButtonProps: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    removeContentPadding: PropTypes.bool,
    withBackground: PropTypes.bool,
    footer: PropTypes.node,
    sideActions: PropTypes.node,
    children: PropTypes.any,
  };

  static defaultProps = {
    dataHook: dataHooks.customModal,
    primaryButtonText: 'Confirm',
    primaryButtonProps: { dataHook: dataHooks.primaryButton },
    secondaryButtonText: 'Cancel',
    secondaryButtonProps: { dataHook: dataHooks.secondaryButton },
    title: '',
    subtitle: '',
    removeContentPadding: false,
    withBackground: false,
  };

  render() {
    const {
      dataHook,
      primaryButtonText,
      primaryButtonProps,
      secondaryButtonText,
      secondaryButtonProps,
      title,
      subtitle,
      primaryButtonOnClick,
      secondaryButtonOnClick,
      removeContentPadding,
      withBackground,
      children,
      sideActions,
      footer,
      onClose,
    } = this.props;

    // TODO - how to implement this the right way?
    const classes =
      'customModal' +
      (removeContentPadding ? ' removeContentPadding' : '') +
      (withBackground ? ' withBackground' : '');
    const hasFooter = sideActions || primaryButtonText || secondaryButtonText;

    return (
      <div {...styles(classes, {}, this.props)} data-hook={dataHook}>
        {title && <HeaderLayout title={title} subtitle={subtitle} />}
        {children && <div className={styles.contentWrapper}>{children}</div>}
        {hasFooter && (
          <div>
            <Divider className={styles.footer_divider} />
            <div className={styles.footer}>
              <div className={styles.sideActions}>{sideActions}</div>
              <div className={styles.buttons}>
                <Button
                  dataHook={dataHooks.secondaryButton}
                  onClick={secondaryButtonOnClick}
                  priority="secondary"
                  size="small"
                  {...secondaryButtonProps}
                >
                  {secondaryButtonText}
                </Button>
                <Button
                  dataHook={dataHooks.primaryButton}
                  onClick={primaryButtonOnClick}
                  size="small"
                  {...primaryButtonProps}
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>
          </div>
        )}
        {footer && (
          <div>
            <Divider />
            <div className={styles.footer}>{footer}</div>
          </div>
        )}
        <CloseButton
          dataHook={dataHooks.closeButton}
          className={styles.closeButton}
          onClick={onClose}
          size="large"
          skin="dark"
        />
      </div>
    );
  }
}

export default CustomModal;
