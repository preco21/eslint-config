'use strict';

module.exports = {
  extends: [
    './index',
    './rules/react',
  ].map(require.resolve),
};
