import { swatchesDriverFactory as publicDriverFactory } from '../Swatches.uni.driver';
import { fillPreviewDriverFactory } from '../../FillPreview/FillPreview.uni.driver';
import { fillButtonDriverFactory } from '../../FillButton/FillButton.uni.driver';

import { tooltipDriverFactory } from '../../Tooltip/TooltipNext/Tooltip.uni.driver';
import testkit from '../../Popover/Popover.uni.driver';
import { CommonDriver } from 'wix-ui-core/dist/src/components/popover/Popover.common.uni.driver';
import { colorPickerUniDriverFactory } from '../../ColorPicker/ColorPicker.private.uni.driver';

import { dataHooks } from '../constants';

export const swatchesPrivateDriverFactory = (base, body) => {
  const byHook = dataHook => `[data-hook="${dataHook}"]`;

  const popoverTestkit = testkit(
    base.$(byHook(dataHooks.addButtonPopover)),
    body,
  );

  const commonPopoverTestkit = CommonDriver(
    base.$(byHook(dataHooks.addButtonPopover)),
    body,
  );

  const colorPickerTestkit = async () => {
    const colorPicker = (await commonPopoverTestkit.getContentElement()).$(
      byHook(dataHooks.addButtonColorPicker),
    );
    return colorPickerUniDriverFactory(colorPicker);
  };

  return {
    ...publicDriverFactory(base),
    getEmptySwatch: () =>
      fillPreviewDriverFactory(
        base.$(`[data-hook="${dataHooks.empty}"]`),
        body,
      ),
    getEmptySwatchTooltip: () =>
      tooltipDriverFactory(
        base.$(`[data-hook="${dataHooks.emptyTooltip}"]`),
        body,
      ),
    getAddButton: () =>
      fillButtonDriverFactory(
        base.$(`[data-hook="${dataHooks.addButton}"]`),
        body,
      ),
    isColorPickerShown: () => popoverTestkit.isContentElementExists(),
    gerColorPicker: async () => colorPickerTestkit(),
  };
};
