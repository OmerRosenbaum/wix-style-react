/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
} from '../sharedComponents';

import { notificationsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/NotificationsFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  notificationsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

//8. Notifications
import Notification from 'wix-style-react/Notification';
import FloatingNotification from 'wix-style-react/FloatingNotification';
import SectionHelper from 'wix-style-react/SectionHelper';

//Assets
import { Layout, Cell } from 'wix-style-react/Layout';
import StatusComplete from 'wix-ui-icons-common/StatusComplete';
import TextButton from 'wix-style-react/TextButton';

const groupSymbol = symbolsGroup.notificationBars;

class NotificationsExamples extends PureComponent {
  renderNotification = props => {
    const {
      textLabel,
      actionButton,
      actionButtonType,
      onClick,
      actionButtonText,
    } = props;

    return (
      <Notification {...props} show>
        <Notification.TextLabel children={textLabel} />
        {actionButton && (
          <Notification.ActionButton
            children={actionButtonText}
            type={actionButtonType}
            onClick={onClick}
          />
        )}
        <Notification.CloseButton />
      </Notification>
    );
  };

  render() {
    const notificationThemes = [
      'standard',
      'success',
      'warning',
      'error',
      'premium',
    ];

    const symbol = notificationsSymbols.notification;
    const components = notificationsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol, symbol }),
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Layout>
          <Cell key={`remount-button`}>
            <TextButton onClick={() => this.forceUpdate()}>Reset</TextButton>
          </Cell>
          {notificationThemes.map((theme, i) => (
            <Cell key={`theme-cell-${i}`}>
              {this.renderNotification({
                theme,
                key: `notification-${theme}-${i}`,
                textLabel: `This is a ${theme} notification`,
              })}
            </Cell>
          ))}
          <Cell key={`action-notification-cell-text-link`}>
            {this.renderNotification({
              key: `notification-with-text-link`,
              textLabel: `This notification has`,
              actionButton: true,
              actionButtonType: 'textLink',
              onClick: () => alert('text link action'),
              actionButtonText: 'Text Link Action',
            })}
          </Cell>
          <Cell key={`action-notification-cell-button`}>
            {this.renderNotification({
              key: `notification-with-button`,
              textLabel: `This notification has`,
              actionButton: true,
              actionButtonType: 'button',
              onClick: () => alert('button action'),
              actionButtonText: 'Button',
            })}
          </Cell>
        </Layout>
      </SingleComponentSideBySide>
    );
  }
}

const FloatingNotificationsExamples = () => {
  const floatingNotificationTypes = [
    'standard',
    'success',
    'warning',
    'destructive',
    'premium',
    'preview',
  ];

  const renderNotification = props => (
    <FloatingNotification showCloseButton {...props} />
  );

  const symbol = notificationsSymbols.floatingNotification;
  const components = notificationsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {floatingNotificationTypes.map((type, i) => (
          <Cell key={`type-cell-${i}`}>
            {renderNotification({
              type,
              key: `notification-${type}-${i}`,
              text: `This is a ${type} floating notification`,
            })}
          </Cell>
        ))}
        <Cell key={`link-button-cell`}>
          {renderNotification({
            key: 'notification-with-buttons',
            text: 'This is some text',
            showButton: true,
            buttonProps: {
              label: 'Undo',
              onClick: () => alert('button action'),
            },
            showTextButton: true,
            textButtonProps: {
              label: 'Trash',
              onClick: () => alert('text button action'),
            },
            prefixIcon: <StatusComplete />,
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const SectionsHelperExamples = () => {
  const sectionHelperAppearance = [
    'standard',
    'success',
    'warning',
    'danger',
    'premium',
    'preview',
    'experimentalDark',
  ];

  const renderSectionHelper = props => (
    <SectionHelper
      {...props}
      showCloseButton
      onClose={() => console.log('onClose')}
    />
  );

  const symbol = notificationsSymbols.sectionHelper;
  const components = notificationsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {sectionHelperAppearance.map((appearance, i) => (
          <Cell key={`appearance-${appearance}-${i}`}>
            {renderSectionHelper({
              appearance,
              key: `section-helper-${i}`,
              title: `This is ${appearance} appearance`,
              children: 'This is a very important message',
            })}
          </Cell>
        ))}
        <Cell key={`section-helper-with-action`}>
          {renderSectionHelper({
            key: `section-helper-action-text`,
            actionText: `action text`,
            title: `This is SectionHelper with action`,
            children: `This is section helper text`,
            onAction: () => alert('action text'),
          })}
        </Cell>
      </Layout>
    </SingleComponentSideBySide>
  );
};

const NotificationFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <NotificationsExamples />
    <FloatingNotificationsExamples />
    <SectionsHelperExamples />
  </FamilyStructure>
);

export default NotificationFamily;
