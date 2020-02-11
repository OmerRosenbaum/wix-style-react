import React from 'react';
import PropTypes from 'prop-types';

import HeaderLayout from './HeaderLayout';
import styles from './CustomModal.st.css';
import { dataHooks } from './constants';
import CloseButton from '../CloseButton';
import Divider from '../Divider';
import Button from '../Button';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    /** additional css classes */
    className: PropTypes.string,
    /** data hook for testing */
    dataHook: PropTypes.string,
    /** When not provided, the primary action button will not be rendered */
    primaryButtonText: PropTypes.string,
    /** Passed to the primary button as props without any filter / mutation */
    primaryButtonProps: PropTypes.object,
    /** callback to be called when the primary button is clicked */
    primaryButtonOnClick: PropTypes.func,
    /** When not provided, the secondary action button will not be rendered */
    secondaryButtonText: PropTypes.string,
    /** Passed to the secondary button as props without any filter / mutation */
    secondaryButtonProps: PropTypes.object,
    /** callback to be called when the secondary button is clicked */
    secondaryButtonOnClick: PropTypes.func,
    /** The modal's title */
    title: PropTypes.string,
    /** The modal's subtitle */
    subtitle: PropTypes.string,
    /** When set to true, there will be no content padding */
    removeContentPadding: PropTypes.bool,
    /** a footnote node, to be rendered at the very bottom of the modal */
    footnote: PropTypes.node,
    /** side actions node, to be rendered as the first element on the same row as the action buttons */
    sideActions: PropTypes.node,
    /** the children / content of the modal */
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
  };

  _renderFooterLayout = () => {
    const {
      sideActions,
      secondaryButtonText,
      secondaryButtonOnClick,
      secondaryButtonProps,
      primaryButtonText,
      primaryButtonOnClick,
      primaryButtonProps,
    } = this.props;
    return (
      <div>
        <Divider className={styles.footer_divider} />
        <div className={styles.footer}>
          {sideActions && (
            <div className={styles.sideActions}>{sideActions}</div>
          )}
          <div className={styles.buttons}>
            {secondaryButtonText && (
              <Button
                dataHook={dataHooks.secondaryButton}
                onClick={secondaryButtonOnClick}
                priority="secondary"
                size="small"
                {...secondaryButtonProps}
              >
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                dataHook={dataHooks.primaryButton}
                onClick={primaryButtonOnClick}
                size="small"
                {...primaryButtonProps}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      dataHook,
      primaryButtonText,
      secondaryButtonText,
      title,
      subtitle,
      removeContentPadding,
      children,
      sideActions,
      footnote,
      onClose,
    } = this.props;

    const classes =
      'customModal' + (removeContentPadding ? ' removeContentPadding' : '');
    const hasFooter = sideActions || primaryButtonText || secondaryButtonText;

    return (
      <div {...styles(classes, {}, this.props)} data-hook={dataHook}>
        {title && <HeaderLayout title={title} subtitle={subtitle} />}
        {children && <div className={styles.contentWrapper}>{children}</div>}
        {hasFooter && this._renderFooterLayout()}
        {footnote && (
          <div>
            <Divider />
            <div className={styles.footnote}>{footnote}</div>
          </div>
        )}
        <CloseButton
          dataHook={dataHooks.closeButton}
          className={styles.closeButton}
          onClick={onClose}
          // size="large"
          skin="dark"
        />
      </div>
    );
  }
}

export default CustomModal;
