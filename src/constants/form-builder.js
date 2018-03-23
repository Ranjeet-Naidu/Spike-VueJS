// ref data for groups
export const FORUM_BUILDER = {
  SECTION_NAVIGATION: {
    name: 'SECTION_NAVIGATION',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'sectionNavigation',
    validators: [],
    rank: 0,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.section_navigation'
  },
  ACCESS_CHANNEL: {
    name: 'ACCESS_CHANNEL',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'vod_channel',
    validators: [],
    rank: 1,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.access_channel'
  },
  DESCRIPTION: {
    name: 'DESCRIPTION',
    multiValue: false,
    languageAgnostic: false,
    datagramValueType: 'STRING',
    validators: [],
    rank: 2,
    uihint: {
      contextual: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.description'
  },
  ALIAS: {
    name: 'ALIAS',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'STRING',
    validators: [
      {
        name: 'REQUIRED',
        required: true,
        unique: false,
        min: 0,
        max: 2147483647,
        decimalplaces: 0,
        messageType: 'ERROR',
        message: 'Enter a value'
      }
    ],
    rank: 3,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.alias'
  },
  HEROBANNER: {
    name: 'HEROBANNER',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'BOOLEAN',
    validators: [
      {
        name: 'REQUIRED',
        required: true,
        unique: false,
        min: 0,
        max: 2147483647,
        decimalplaces: 0,
        messageType: 'ERROR',
        message: 'Enter a value'
      }
    ],
    rank: 4,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.herobanner'
  },
  TITLE: {
    name: 'TITLE',
    multiValue: false,
    languageAgnostic: false,
    datagramValueType: 'STRING',
    validators: [
      {
        name: 'REQUIRED_TITLE',
        required: true,
        unique: false,
        min: 0,
        max: 50,
        decimalplaces: 0,
        messageType: 'ERROR',
        message: 'Enter a value'
      }
    ],
    rank: 5,
    uihint: {
      contextual: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.title'
  },
  NAME: {
    name: 'NAME',
    multiValue: false,
    languageAgnostic: false,
    datagramValueType: 'STRING',
    validators: [],
    rank: 7,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.name'
  },
  DISPLAYNAME: {
    name: 'DISPLAYNAME',
    multiValue: false,
    languageAgnostic: false,
    datagramValueType: 'STRING',
    validators: [],
    rank: 8,
    hidden: false,
    visibleOnClientApi: false,
    editable: true,
    translationKey: 'model.attribute.displayname'
  },
  VERSION: {
    name: 'VERSION',
    multiValue: true,
    languageAgnostic: true,
    datagramValueType: 'STRING',
    validators: [],
    rank: 9,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.version'
  },
  LOCKED: {
    name: 'LOCKED',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'BOOLEAN',
    validators: [],
    rank: 10,
    hidden: false,
    visibleOnClientApi: true,
    editableRoles: ['OPERATIONS_MANAGER', 'SERVICE'],
    editable: true,
    translationKey: 'model.attribute.locked'
  },
  COLOR: {
    name: 'COLOR',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'STRING',
    validators: [
      {
        name: 'REQUIRED',
        required: true,
        unique: false,
        min: 0,
        max: 2147483647,
        decimalplaces: 0,
        messageType: 'ERROR',
        message: 'Enter a value'
      },
      {
        name: 'COUNT',
        count: 13,
        min: 0,
        max: 2147483647,
        decimalplaces: 0,
        messageType: 'ERROR',
        message: 'Enter a value'
      }
    ],
    rank: 12,
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.color'
  },
  VIEW_ALL: {
    name: 'VIEW_ALL',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'viewAll',
    validators: [],
    rank: 13,
    uihint: {
      renderHint: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.view_all'
  },
  INTERACTION: {
    name: 'INTERACTION',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'interaction',
    validators: [],
    rank: 14,
    uihint: {
      contextual: true,
      renderHint: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.interaction'
  },
  ORIENTATION: {
    name: 'ORIENTATION',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'orientation',
    validators: [],
    rank: 15,
    uihint: {
      renderHint: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.orientation'
  },
  TEMPLATE: {
    name: 'TEMPLATE',
    multiValue: false,
    languageAgnostic: true,
    datagramValueType: 'REF_CODE',
    refType: 'template',
    validators: [],
    rank: 16,
    uihint: {
      renderHint: true
    },
    hidden: false,
    visibleOnClientApi: true,
    editable: true,
    translationKey: 'model.attribute.template'
  }
};
