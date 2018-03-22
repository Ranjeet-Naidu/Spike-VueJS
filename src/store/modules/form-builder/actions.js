import { FORUM_BUILDER } from '../../../constants/form-builder';

const getFormBuiderData = context => {
  context.commit('FORUM_BUILDER_DATA', FORUM_BUILDER);
};

export default {
  getFormBuiderData
};
