import { CardProps } from './Card.types';
import { staticRichTextMock } from '../Text/Text.mock';
import { mediaMock } from '../Media/Media.mock';
import mockLink from '../Link/Link.mock';

export const cardMock = (): CardProps => ({
  __typename: 'Card',
  media: [mediaMock()],
  title: 'This is a card title',
  subtitle: 'And this is the subtitle',
  body: staticRichTextMock(),
  actions: [{ ...mockLink(), text: 'Card link' }],
  sidekickLookup: {}
});

export const cardWithTags = (): CardProps => ({
  ...cardMock()
});

export default cardMock;
