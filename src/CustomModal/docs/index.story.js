import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SimpleExample from '!raw-loader!./examples/SimpleExample';
import CustomModal from '..';

const code = config => baseCode({ components: allComponents, ...config });
const componentProps = {
  title: 'Modal title',
  children: 'Lorem ipsum',
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
};

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CustomModal,
  componentPath: '..',

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/CustomModal/',
      component: <CustomModal {...componentProps} />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                //This line here should briefly describe component in just a sentence or two. It should be short and easy to read.
                "Work in progress - please don't use this component yet.",
            }),
          ]),

          columns([
            importExample(
              "import CustomModal from 'wix-style-react/CustomModal';",
            ),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'A simple example with compact preview',
            }),

            code({
              compact: true,
              source: SimpleExample,
            }),
          ]),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source:
              '<CustomModal  title="Title" subtitle="subtitle" sideActions={ (<Checkbox>Check</Checkbox>)} primaryButtonText="Hello World!" footnote="footnote text" />;',
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
