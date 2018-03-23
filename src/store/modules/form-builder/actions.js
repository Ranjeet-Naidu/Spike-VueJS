import { FORUM_BUILDER } from '../../../constants/form-builder';

const getFormBuilderData = context => {
  context.commit('FORUM_BUILDER_DATA', FORUM_BUILDER);
};

export default {
  getFormBuilderData
};
