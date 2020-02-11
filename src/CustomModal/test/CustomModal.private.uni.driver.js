import { customModalDriverFactory as publicDriverFactory } from '../CustomModal.uni.driver';

export const customModalPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
    hasClass: className => base.hasClass(className),
    childExists: selector => base.$(selector).exists(),
    scrollToBottom: () => window.scrollTo(0, 3000),
  };
};
