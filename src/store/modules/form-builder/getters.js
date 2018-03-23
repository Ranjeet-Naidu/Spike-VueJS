import filters from '../../../helpers/filters';

function getSelectOptions(data) {
  if (data.datagramValueType === 'REF_CODE') {
    let arr = [...new Array(Math.floor(Math.random() * 7) + 4)];

    return arr.map((item, index) => {
      return {
        value: index + 1,
        text: `${filters.capitalize(data.name)} ${index + 1}`
      };
    });
  }
}

function getCount(data) {
  let counter = null;
  const isCharCount = data.validators.some(
    item => item.name === 'COUNT' && item.count
  );

  if (isCharCount) {
    const countData = data.validators.find(
      item => item.name === 'COUNT' && item.count
    );
    counter = countData.count;
  }

  return counter;
}

function getValidation(data) {
  let validation = '';

  const isRequired = data.validators.some(
    item => item.name === 'REQUIRED' && item.required
  );

  if (isRequired) {
    validation = 'required';
  }

  const isCharCount = data.validators.some(
    item => item.name === 'COUNT' && item.count
  );

  if (isCharCount) {
    const countData = data.validators.find(
      item => item.name === 'COUNT' && item.count
    );
    validation = validation.length
      ? `${validation}|max:${countData.count}`
      : `max:${countData.count}`;
  }

  return validation;
}

const formBuilderData = state => {
  return Object.keys(state.formBuilderData)
    .filter(item => state.formBuilderData[item].languageAgnostic)
    .map(item => {
      // mock select items
      state.formBuilderData[item].items = getSelectOptions(
        state.formBuilderData[item]
      );

      state.formBuilderData[item].validation = getValidation(
        state.formBuilderData[item]
      );

      state.formBuilderData[item].counter = getCount(
        state.formBuilderData[item]
      );

      return state.formBuilderData[item];
    });
};

export default {
  formBuilderData
};
