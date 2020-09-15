'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _unsplashJs = _interopRequireWildcard(require('unsplash-js'));

var _baseFloat = _interopRequireDefault(require('../baseFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

var _config = require('../../config');

var _utils = require('../../utils');

var _getImageInfo = require('../../utils/getImageInfo');

require('./index.css');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class ImageSelector extends _baseFloat.default {
  constructor(muya, options) {
    const name = 'ag-image-selector';
    const { unsplashAccessKey } = options;
    options = Object.assign(options, {
      placement: 'bottom-center',
      modifiers: {
        offset: {
          offset: '0, 0'
        }
      },
      showArrow: false
    });
    super(muya, name, options);

    _defineProperty(this, 'searchPhotos', (keyword) => {
      if (!this.unsplash) {
        return;
      }

      this.loading = true;
      this.photoList = [];
      this.unsplash.search
        .photos(keyword, 1, 40)
        .then(_unsplashJs.toJson)
        .then((json) => {
          this.loading = false;

          if (Array.isArray(json.results)) {
            this.photoList = json.results;

            if (this.tab === 'unsplash') {
              this.render();
            }
          }
        });
      return this.render();
    });

    _defineProperty(this, 'replaceImageAsync', async ({ alt, src, title }) => {
      if (!this.muya.options.imageAction || _config.URL_REG.test(src)) {
        const { alt: oldAlt, src: oldSrc, title: oldTitle } = this.imageInfo.token.attrs;

        if (alt !== oldAlt || src !== oldSrc || title !== oldTitle) {
          this.muya.contentState.replaceImage(this.imageInfo, {
            alt,
            src,
            title
          });
        }

        this.hide();
      } else {
        if (src) {
          const id = 'loading-'.concat((0, _utils.getUniqueId)());
          this.muya.contentState.replaceImage(this.imageInfo, {
            alt: id,
            src,
            title
          });
          this.hide();
          const nSrc = await this.muya.options.imageAction(src, id, alt);
          const { src: localPath } = (0, _utils.getImageInfo)(src);

          if (localPath) {
            this.muya.contentState.stateRender.urlMap.set(nSrc, localPath);
          }

          const imageWrapper = this.muya.container.querySelector('span[data-id='.concat(id, ']'));

          if (imageWrapper) {
            const imageInfo = (0, _getImageInfo.getImageInfo)(imageWrapper);
            this.muya.contentState.replaceImage(imageInfo, {
              alt,
              src: nSrc,
              title
            });
          }
        } else {
          this.hide();
        }
      }

      this.muya.eventCenter.dispatch('stateChange');
    });

    _defineProperty(this, 'renderBody', () => {
      const { tab, state, isFullMode } = this;
      const { alt, title, src } = state;
      let bodyContent = null;

      if (tab === 'select') {
        bodyContent = [
          (0, _snabbdom.h)(
            'button.muya-button.role-button.select',
            {
              on: {
                click: (event) => {
                  this.handleSelectButtonClick();
                }
              }
            },
            'Choose an Image'
          ),
          (0, _snabbdom.h)('span.description', 'Choose image from your computer.')
        ];
      } else if (tab === 'link') {
        const altInput = (0, _snabbdom.h)('input.alt', {
          props: {
            placeholder: 'Alt text',
            value: alt
          },
          on: {
            input: (event) => {
              this.inputHandler(event, 'alt');
            },
            paste: (event) => {
              this.inputHandler(event, 'alt');
            },
            keydown: (event) => {
              this.handleKeyDown(event);
            }
          }
        });
        const srcInput = (0, _snabbdom.h)('input.src', {
          props: {
            placeholder: 'Image link or local path',
            value: src
          },
          on: {
            input: (event) => {
              this.inputHandler(event, 'src');
            },
            paste: (event) => {
              this.inputHandler(event, 'src');
            },
            keydown: (event) => {
              this.srcInputKeyDown(event);
            },
            keyup: (event) => {
              this.handleKeyUp(event);
            }
          }
        });
        const titleInput = (0, _snabbdom.h)('input.title', {
          props: {
            placeholder: 'Image title',
            value: title
          },
          on: {
            input: (event) => {
              this.inputHandler(event, 'title');
            },
            paste: (event) => {
              this.inputHandler(event, 'title');
            },
            keydown: (event) => {
              this.handleKeyDown(event);
            }
          }
        });
        const inputWrapper = isFullMode
          ? (0, _snabbdom.h)('div.input-container', [altInput, srcInput, titleInput])
          : (0, _snabbdom.h)('div.input-container', [srcInput]);
        const embedButton = (0, _snabbdom.h)(
          'button.muya-button.role-button.link',
          {
            on: {
              click: (event) => {
                this.handleLinkButtonClick();
              }
            }
          },
          'Embed Image'
        );
        const bottomDes = (0, _snabbdom.h)('span.description', [
          (0, _snabbdom.h)('span', 'Paste web image or local image path. Use '),
          (0, _snabbdom.h)(
            'a',
            {
              on: {
                click: (event) => {
                  this.toggleMode();
                }
              }
            },
            ''.concat(isFullMode ? 'simple mode' : 'full mode', '.')
          )
        ]);
        bodyContent = [inputWrapper, embedButton, bottomDes];
      } else {
        const searchInput = (0, _snabbdom.h)('input.search', {
          props: {
            placeholder: 'Search photos on Unsplash'
          },
          on: {
            keydown: (event) => {
              const value = event.target.value;

              if (event.key === _config.EVENT_KEYS.Enter && value) {
                event.preventDefault();
                event.stopPropagation();
                this.searchPhotos(value);
              }
            }
          }
        });
        bodyContent = [searchInput];

        if (this.loading) {
          const loadingCom = (0, _snabbdom.h)('div.ag-plugin-loading');
          bodyContent.push(loadingCom);
        } else if (this.photoList.length === 0) {
          const noDataCom = (0, _snabbdom.h)('div.no-data', 'No result...');
          bodyContent.push(noDataCom);
        } else {
          const photos = this.photoList.map((photo) => {
            const imageWrapper = (0, _snabbdom.h)(
              'div.image-wrapper',
              {
                props: {
                  style: 'background: '.concat(photo.color, ';')
                },
                on: {
                  click: () => {
                    const title = photo.user.name;
                    const alt = photo.alt_description;
                    const src = photo.urls.regular;
                    const { id } = photo;
                    this.unsplash.photos
                      .getPhoto(id)
                      .then(_unsplashJs.toJson)
                      .then((json) => {
                        this.unsplash.photos.downloadPhoto(json);
                      });
                    return this.replaceImageAsync({
                      alt,
                      title,
                      src
                    });
                  }
                }
              },
              (0, _snabbdom.h)('img', {
                props: {
                  src: photo.urls.thumb
                }
              })
            );
            const desCom = (0, _snabbdom.h)('div.des', [
              'By ',
              (0, _snabbdom.h)(
                'a',
                {
                  props: {
                    href: photo.links.html
                  },
                  on: {
                    click: () => {
                      if (this.options.photoCreatorClick) {
                        this.options.photoCreatorClick(photo.user.links.html);
                      }
                    }
                  }
                },
                photo.user.name
              )
            ]);
            return (0, _snabbdom.h)('div.photo', [imageWrapper, desCom]);
          });
          const photoWrapper = (0, _snabbdom.h)('div.photos-wrapper', photos);
          const moreCom = (0, _snabbdom.h)('div.more', 'Search for more photos...');
          bodyContent.push(photoWrapper, moreCom);
        }
      }

      return (0, _snabbdom.h)('div.image-select-body', bodyContent);
    });

    this.renderArray = [];
    this.oldVnode = null;
    this.imageInfo = null;

    if (!unsplashAccessKey) {
      this.unsplash = null;
    } else {
      this.unsplash = new _unsplashJs.default({
        accessKey: unsplashAccessKey
      });
    }

    this.photoList = [];
    this.loading = false;
    this.tab = 'link'; // select or link

    this.isFullMode = false; // is show title and alt input

    this.state = {
      alt: '',
      src: '',
      title: ''
    };
    const imageSelectorContainer = (this.imageSelectorContainer = document.createElement('div'));
    this.container.appendChild(imageSelectorContainer);
    this.floatBox.classList.add('ag-image-selector-wrapper');
    this.listen();
  }

  listen() {
    super.listen();
    const { eventCenter } = this.muya;
    eventCenter.subscribe('muya-image-selector', ({ reference, cb, imageInfo }) => {
      if (reference) {
        // Unselected image.
        const { contentState } = this.muya;

        if (contentState.selectedImage) {
          contentState.selectedImage = null;
        }

        Object.assign(this.state, imageInfo.token.attrs);

        if (this.unsplash) {
          // Load latest unsplash photos.
          this.loading = true;
          this.unsplash.photos
            .listPhotos(1, 40, 'latest')
            .then(_unsplashJs.toJson)
            .then((json) => {
              this.loading = false;

              if (Array.isArray(json)) {
                this.photoList = json;

                if (this.tab === 'unsplash') {
                  this.render();
                }
              }
            });
        }

        this.imageInfo = imageInfo;
        this.show(reference, cb);
        this.render(); // Auto focus and select all content of the `src.input` element.

        const input = this.imageSelectorContainer.querySelector('input.src');

        if (input) {
          input.focus();
          input.select();
        }
      } else {
        this.hide();
      }
    });
  }

  tabClick(event, tab) {
    const { value } = tab;
    this.tab = value;
    return this.render();
  }

  toggleMode() {
    this.isFullMode = !this.isFullMode;
    return this.render();
  }

  inputHandler(event, type) {
    const value = event.target.value;
    this.state[type] = value;
  }

  handleKeyDown(event) {
    if (event.key === _config.EVENT_KEYS.Enter) {
      event.stopPropagation();
      this.handleLinkButtonClick();
    }
  }

  srcInputKeyDown(event) {
    const { imagePathPicker } = this.muya;

    if (!imagePathPicker.status) {
      if (event.key === _config.EVENT_KEYS.Enter) {
        event.stopPropagation();
        this.handleLinkButtonClick();
      }

      return;
    }

    switch (event.key) {
      case _config.EVENT_KEYS.ArrowUp:
        event.preventDefault();
        imagePathPicker.step('previous');
        break;

      case _config.EVENT_KEYS.ArrowDown:
      case _config.EVENT_KEYS.Tab:
        event.preventDefault();
        imagePathPicker.step('next');
        break;

      case _config.EVENT_KEYS.Enter:
        event.preventDefault();
        imagePathPicker.selectItem(imagePathPicker.activeItem);
        break;

      default:
        break;
    }
  }

  async handleKeyUp(event) {
    const { key } = event;

    if (
      key === _config.EVENT_KEYS.ArrowUp ||
      key === _config.EVENT_KEYS.ArrowDown ||
      key === _config.EVENT_KEYS.Tab ||
      key === _config.EVENT_KEYS.Enter
    ) {
      return;
    }

    const value = event.target.value;
    const { eventCenter } = this.muya;
    const reference = this.imageSelectorContainer.querySelector('input.src');

    const cb = (item) => {
      const { text } = item;
      const newValue =
        value.replace(/(\/)([^/]+)$/, (m, p1, p2) => {
          return p1;
        }) + text;
      const len = newValue.length;
      reference.value = newValue;
      this.state.src = newValue;
      reference.focus();
      reference.setSelectionRange(len, len);
    };

    let list;

    if (!value) {
      list = [];
    } else {
      list = await this.muya.options.imagePathAutoComplete(value);
    }

    eventCenter.dispatch('muya-image-picker', {
      reference,
      list,
      cb
    });
  }

  handleLinkButtonClick() {
    return this.replaceImageAsync(this.state);
  }

  async handleSelectButtonClick() {
    if (!this.muya.options.imagePathPicker) {
      console.warn('You need to add a imagePathPicker option');
      return;
    }

    const path = await this.muya.options.imagePathPicker();
    const { alt, title } = this.state;
    return this.replaceImageAsync({
      alt,
      title,
      src: path
    });
  }

  renderHeader() {
    const tabs = [
      {
        label: 'Select',
        value: 'select'
      },
      {
        label: 'Embed link',
        value: 'link'
      }
    ];

    if (this.unsplash) {
      tabs.push({
        label: 'Unsplash',
        value: 'unsplash'
      });
    }

    const children = tabs.map((tab) => {
      const itemSelector = this.tab === tab.value ? 'li.active' : 'li';
      return (0, _snabbdom.h)(
        itemSelector,
        (0, _snabbdom.h)(
          'span',
          {
            on: {
              click: (event) => {
                this.tabClick(event, tab);
              }
            }
          },
          tab.label
        )
      );
    });
    return (0, _snabbdom.h)('ul.header', children);
  }

  render() {
    const { oldVnode, imageSelectorContainer } = this;
    const selector = 'div';
    const vnode = (0, _snabbdom.h)(selector, [this.renderHeader(), this.renderBody()]);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(imageSelectorContainer, vnode);
    }

    this.oldVnode = vnode;
  }
}

_defineProperty(ImageSelector, 'pluginName', 'imageSelector');

var _default = ImageSelector;
exports.default = _default;
