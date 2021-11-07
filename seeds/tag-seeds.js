const { Tag } = require('../models');

const tagData = [
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
