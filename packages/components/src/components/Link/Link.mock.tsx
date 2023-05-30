import { lorem } from 'faker';
import { LinkProps } from './Link';

export default (): LinkProps => ({
  id: lorem.word(),
  __typename: 'Link',
  variant: 'button-contained',
  href: new URL('https://www.theanswer.ai'),
  text: lorem.words(2),
  icon: 'chevron-right',
  iconPosition: 'Right'
});
