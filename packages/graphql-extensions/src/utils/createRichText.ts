import createType from './createType';

const createRichText = (value: string) =>
  createType('Text', {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value,
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        }
      ],
      nodeType: 'document'
    },
    links: {
      entries: [],
      assets: []
    }
  });

export default createRichText;
