import * as React from 'react';


export interface CustomModalProps {
  className?: string,
  dataHook?: string,
  primaryButtonText?: string,
  primaryButtonProps?: object,
  primaryButtonOnClick?: () => Promise<void>,
  secondaryButtonText?: string,
  secondaryButtonProps?: object,
  secondaryButtonOnClick?: () => Promise<void>,
  title?: string,
  subtitle?: string,
  removeContentPadding?: boolean,
  footnote?: React.ReactNode,
  sideActions?: React.ReactNode,
  children?: React.ReactNode,
}

export default class CustomModal extends React.PureComponent<CustomModalProps>{}
