export const FORUM_BUILDER = [
  { type: 'REF_CODE', name: 'ACCESS_CHANNEL', validation: 'required' },
  { type: 'STRING', name: 'ALIAS', validation: 'required|max:10', counter: 10 },
  {
    type: 'STRING',
    name: 'COLOR',
    validation: 'required|max:15',
    counter: 15,
    multiLine: false
  },
  { type: 'REF_CODE', name: 'SECTION_NAVIGATION' },
  { type: 'BOOLEAN', name: 'LOCKED', validation: 'required' },
  { type: 'BOOLEAN', name: 'HEROBANNER', validation: 'required' }
];
