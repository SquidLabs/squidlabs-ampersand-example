import { isString } from 'lodash';

const numRegex = /^\d+$/;
const whitespaceRegex = /\s/;

export default {
  whitespace(value, defaultMessage = 'Whitespaces are not accepted in this input') {
    if (whitespaceRegex.test(value)) {
      return defaultMessage;
    }
    return '';
  },
  number(value, defaultMessage = 'Numbers are not accepted in this input') {
    if (numRegex.test(value)) {
      return defaultMessage;
    }
    return '';
  },
};
