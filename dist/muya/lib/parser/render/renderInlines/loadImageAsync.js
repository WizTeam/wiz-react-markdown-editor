'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = loadImageAsync;

var _utils = require('../../../utils');

var _domManipulate = require('../../../utils/domManipulate');

var _config = require('../../../config');

function loadImageAsync(imageInfo, attrs, className, imageClass) {
  let { src, isUnknownType } = imageInfo;
  let id;
  let isSuccess;
  let w;
  let h;

  if (!this.loadImageMap.has(src)) {
    id = (0, _utils.getUniqueId)();
    (0, _utils.loadImage)(src, isUnknownType)
      .then(({ url, width, height }) => {
        const imageText = document.querySelector('#'.concat(id));
        const img = document.createElement('img');
        img.src = url;
        if (attrs.alt) img.alt = attrs.alt.replace(/[`*{}[\]()#+\-.!_>~:|<>$]/g, '');
        if (attrs.title) img.setAttribute('title', attrs.title);

        if (attrs.width && typeof attrs.width === 'number') {
          img.setAttribute('width', attrs.width);
        }

        if (attrs.height && typeof attrs.height === 'number') {
          img.setAttribute('height', attrs.height);
        }

        if (imageClass) {
          img.classList.add(imageClass);
        }

        if (imageText) {
          if (imageText.classList.contains('ag-inline-image')) {
            const imageContainer = imageText.querySelector('.ag-image-container');
            const oldImage = imageContainer.querySelector('img');

            if (oldImage) {
              oldImage.remove();
            }

            imageContainer.appendChild(img);
            imageText.classList.remove('ag-image-loading');
            imageText.classList.add('ag-image-success');
          } else {
            (0, _domManipulate.insertAfter)(img, imageText);
            (0, _domManipulate.operateClassName)(imageText, 'add', className);
          }
        }

        if (this.urlMap.has(src)) {
          this.urlMap.delete(src);
        }

        this.loadImageMap.set(src, {
          id,
          isSuccess: true,
          width,
          height
        });
      })
      .catch(() => {
        const imageText = document.querySelector('#'.concat(id));

        if (imageText) {
          (0, _domManipulate.operateClassName)(
            imageText,
            'remove',
            _config.CLASS_OR_ID.AG_IMAGE_LOADING
          );
          (0, _domManipulate.operateClassName)(imageText, 'add', _config.CLASS_OR_ID.AG_IMAGE_FAIL);
          const image = imageText.querySelector('img');

          if (image) {
            image.remove();
          }
        }

        if (this.urlMap.has(src)) {
          this.urlMap.delete(src);
        }

        this.loadImageMap.set(src, {
          id,
          isSuccess: false
        });
      });
  } else {
    const imageInfo = this.loadImageMap.get(src);
    id = imageInfo.id;
    isSuccess = imageInfo.isSuccess;
    w = imageInfo.width;
    h = imageInfo.height;
  }

  return {
    id,
    isSuccess,
    width: w,
    height: h
  };
}
