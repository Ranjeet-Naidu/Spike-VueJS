export default {
  capitalize(value) {
    if (!value) {
      return '';
    }
    return value.replace(/[_-]/g, ' ').replace(/[a-zA-Z0-9À-ÿ]+/g, word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
};
