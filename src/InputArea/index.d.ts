import * as React from 'react';
import { WixComponent, WixComponentProps } from '../BaseComponents';
import {InputStatusError, InputStatusWarning} from '../Input';

export interface InputAreaProps extends WixComponentProps {
  ariaControls?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autoSelect?: boolean;
  dataHook?: string;
  size?: InputAreaSize;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  forceFocus?: boolean;
  forceHover?: boolean;
  hasCounter?: boolean;
  id?: string;
  name?: string;
  maxHeight?: string;
  maxLength?: number;
  menuArrow?: boolean;
  minHeight?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  // TODO: is this needed? - I think it is deprecated
  onClear?: Function;
  onEnterPressed?: () => void;
  onEscapePressed?: () => void;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  // TODO: is this needed? - I think it is deprecated
  onTooltipShow?: Function;
  placeholder?: string;
  readOnly?: boolean;
  resizable?: boolean;
  rows?: number;
  autoGrow?: boolean;
  minRowsAutoGrow?: number;
  style?: InputAreaTheme;
  tabIndex?: number;
  theme?: InputAreaTheme;
  tooltipPlacement?: string; // TODO: replace with TooltipProps['placement']
  value?: string;
  status?: InputStatusError | InputStatusWarning;
  statusMessage?: string;
}

export default class InputArea extends WixComponent<InputAreaProps> {
  static MIN_ROWS: 2;
}

export type InputAreaSize = 'small' | 'normal';
export type InputAreaTheme = 'normal' | 'paneltitle' | 'material' | 'amaterial';
