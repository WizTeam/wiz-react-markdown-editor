"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEditIcon = void 0;

var _snabbdom = require("../snabbdom");

var _config = require("../../../config");

var _ = _interopRequireDefault(require("../../../assets/pngicon/html/2.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderEditIcon = () => {
  const selector = "a.".concat(_config.CLASS_OR_ID.AG_CONTAINER_ICON);
  const iconVnode = (0, _snabbdom.h)('i.icon', (0, _snabbdom.h)('i.icon-inner', {
    style: {
      background: "url(".concat(_.default, ") no-repeat"),
      'background-size': '100%'
    }
  }, ''));
  return (0, _snabbdom.h)(selector, {
    attrs: {
      contenteditable: 'false'
    }
  }, iconVnode);
};

exports.renderEditIcon = renderEditIcon;