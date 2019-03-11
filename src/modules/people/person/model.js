import BaseModel from '../../../components/model/base';

export default BaseModel.extend({
  props: {
    id: 'number',
    firstName: 'string',
    lastName: 'string',
    coolnessFactor: 'number',
  },
  session: {
    selected: ['boolean', true, false],
  },
  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
    avatar: {
      deps: ['firstName', 'lastName'],
      fn() {
        return `http://robohash.org/${encodeURIComponent(this.fullName)}?size=80x80`;
      },
    },
    editUrl: {
      deps: ['id'],
      fn() {
        return `/person/${this.id}/edit`;
      },
    },
    viewUrl: {
      deps: ['id'],
      fn() {
        return `/person/${this.id}`;
      },
    },
  },
  url() {
    return `//localhost:3001/people/${this.getId()}`;
  },
});
