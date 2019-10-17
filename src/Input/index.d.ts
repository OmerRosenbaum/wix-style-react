import * as React from 'react';
import Input from './Input';
import Ticker from './Ticker';
import Unit from './Unit';
import IconAffix from './IconAffix';
import Affix from './Affix';
import Group from './Group';

export interface InputProps {
  ariaControls?: string,
  ariaDescribedby?: string,
  ariaLabel?: string,
  autoFocus?: boolean,
  autoSelect?: boolean,
  autocomplete?: string,
  dataHook?: string,
  defaultValue?: string,
  disabled?: boolean,
  status?: Input.StatusError | Input.StatusWarning | Input.StatusLoading,
  statusMessage?: React.ReactNode,
  hideStatusSuffix?: boolean,
  error?: boolean,
  errorMessage?: React.ReactNode,
  forceFocus?: boolean,
  forceHover?: boolean,
  help?: boolean,
  helpMessage?: React.ReactNode,
  id?: string,
  maxLength?: number,
  menuArrow?: boolean,
  clearButton?: boolean,
  className?: string,
  name?: string,
  noLeftBorderRadius?: boolean,
  noRightBorderRadius?: boolean,
  onBlur?: Function,
  onChange?: Function,
  onClear?: Function,
  onCompositionChange?: Function,
  onEnterPressed?: Function,
  onEscapePressed?: Function,
  onFocus?: Function,
  onInputClicked?: Function,
  onKeyDown?: Function,
  onKeyUp?: Function,
  onPaste?: Function,
  onTooltipShow?: Function,
  placeholder?: string,
  prefix?: React.ReactNode,
  readOnly?: boolean,
  disableEditing?: boolean,
  roundInput?: boolean,
  rtl?: boolean,
  size?: InputSize,
  suffix?: React.ReactNode,
  tabIndex?: number,
  textOverflow?: string,
  theme?: InputTheme | string,
  title?: string,
  tooltipPlacement?: string,
  type?: string,
  value?: string | number,
  withSelection?: boolean,
  required?: boolean,
  min?: number,
  max?: number,
  step?: number,
  customInput?: Function | React.ReactNode | string | React.ComponentType,
  updateControlledOnClear?: boolean,
}

export type InputSize = 'small' | 'normal' | 'medium' | 'large';
export type InputTheme = 'normal' | 'tags' | 'paneltitle' | 'material' | 'amaterial' | 'flat' | 'flatdark';

export default class Input extends React.Component<InputProps> {
  static Ticker: typeof Ticker;
  static Unit: typeof Unit;
  static IconAffix: typeof IconAffix;
  static Affix: typeof Affix;
  static Group: typeof Group;
}
