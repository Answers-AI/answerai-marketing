import defaultResolver from './resolvers/defaultResolver';

export const mappers = {
  Hero: {
    Hero: {
      variant: defaultResolver('variant')
    }
  }
};
