"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = referenceImage;

var _config = require("../../../config");

var _utils = require("../../../utils");

// reference_image
function referenceImage(h, cursor, block, token, outerClass) {
  const className = this.getClassName(outerClass, block, token, cursor);
  const imageClass = _config.CLASS_OR_ID.AG_IMAGE_MARKED_TEXT;
  const {
    start,
    end
  } = token.range;
  const tag = this.highlight(h, block, start, end, token);
  const {
    label,
    backlash,
    alt
  } = token;
  const rawSrc = label + backlash.second;
  let href = '';
  let title = '';

  if (this.labels.has(rawSrc.toLowerCase())) {
    ({
      href,
      title
    } = this.labels.get(rawSrc.toLowerCase()));
  }

  const imageInfo = (0, _utils.getImageInfo)(href);
  const {
    src
  } = imageInfo;
  let id;
  let isSuccess;
  let selector;

  if (src) {
    ({
      id,
      isSuccess
    } = this.loadImageAsync(imageInfo, {
      alt
    }, className, _config.CLASS_OR_ID.AG_COPY_REMOVE));
  }

  selector = id ? "span#".concat(id, ".").concat(imageClass) : "span.".concat(imageClass);
  selector += ".".concat(_config.CLASS_OR_ID.AG_OUTPUT_REMOVE);

  if (isSuccess) {
    selector += ".".concat(className);
  } else {
    selector += ".".concat(_config.CLASS_OR_ID.AG_IMAGE_FAIL);
  }

  return isSuccess ? [h(selector, tag), h("img.".concat(_config.CLASS_OR_ID.AG_COPY_REMOVE), {
    props: {
      alt,
      src,
      title
    }
  })] : [h(selector, tag)];
}