const formBuilderData = state => {
  return state.formBuilderData.reduce((prev, curr) => {
    const obj = {};

    if (curr.type === 'REF_CODE') {
      obj.items = [
        { value: '1', text: 'option 1' },
        { value: '2', text: 'option 2' },
        { value: '3', text: 'option 3' },
        { value: '4', text: 'option 4' }
      ];
    }

    obj.required = !!curr.validation && curr.validation.includes('required');

    prev.push({ ...curr, ...obj });

    return prev;
  }, []);
};

export default {
  formBuilderData
};
