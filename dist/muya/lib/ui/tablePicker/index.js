'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _baseFloat = _interopRequireDefault(require('../baseFloat'));

var _snabbdom = require('../../parser/render/snabbdom');

require('./index.css');

var _config = require('../../config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

class TablePicker extends _baseFloat.default {
  constructor(muya) {
    const name = 'ag-table-picker';
    super(muya, name);
    this.checkerCount = {
      row: 6,
      column: 8
    };
    this.oldVnode = null;
    this.current = null;
    this.select = null;
    const tableContainer = (this.tableContainer = document.createElement('div'));
    this.container.appendChild(tableContainer);
    this.listen();
  }

  listen() {
    const { eventCenter } = this.muya;
    super.listen();
    eventCenter.subscribe('muya-table-picker', (data, reference, cb) => {
      if (!this.status) {
        this.show(data, reference, cb);
        this.render();
      } else {
        this.hide();
      }
    });
  }

  render() {
    const { row, column } = this.checkerCount;
    const { row: cRow, column: cColumn } = this.current;
    const { row: sRow, column: sColumn } = this.select;
    const { tableContainer, oldVnode } = this;
    const tableRows = [];
    let i;
    let j;

    for (i = 0; i < row; i++) {
      let rowSelector = 'div.ag-table-picker-row';

      if (i === 0) {
        rowSelector += '.ag-table-picker-header';
      }

      const cells = [];

      for (j = 0; j < column; j++) {
        let cellSelector = 'span.ag-table-picker-cell';

        if (i <= cRow && j <= cColumn) {
          cellSelector += '.current';
        }

        if (i <= sRow && j <= sColumn) {
          cellSelector += '.selected';
        }

        cells.push(
          (0, _snabbdom.h)(cellSelector, {
            key: j.toString(),
            dataset: {
              row: i.toString(),
              column: j.toString()
            },
            on: {
              mouseenter: (event) => {
                const { target } = event;
                const r = target.getAttribute('data-row');
                const c = target.getAttribute('data-column');
                this.select = {
                  row: r,
                  column: c
                };
                this.render();
              },
              click: (_) => {
                this.selectItem();
              }
            }
          })
        );
      }

      tableRows.push((0, _snabbdom.h)(rowSelector, cells));
    }

    const tableFooter = (0, _snabbdom.h)('div.footer', [
      (0, _snabbdom.h)('input.row-input', {
        props: {
          type: 'text',
          value: +this.select.row + 1
        },
        on: {
          keyup: (event) => {
            this.keyupHandler(event, 'row');
          }
        }
      }),
      'x',
      (0, _snabbdom.h)('input.column-input', {
        props: {
          type: 'text',
          value: +this.select.column + 1
        },
        on: {
          keyup: (event) => {
            this.keyupHandler(event, 'column');
          }
        }
      }),
      (0, _snabbdom.h)(
        'button',
        {
          on: {
            click: (_) => {
              this.selectItem();
            }
          }
        },
        'OK'
      )
    ]);
    const vnode = (0, _snabbdom.h)('div', [
      (0, _snabbdom.h)('div.checker', tableRows),
      tableFooter
    ]);

    if (oldVnode) {
      (0, _snabbdom.patch)(oldVnode, vnode);
    } else {
      (0, _snabbdom.patch)(tableContainer, vnode);
    }

    this.oldVnode = vnode;
  }

  keyupHandler(event, type) {
    let number = +this.select[type];
    const value = +event.target.value;

    if (event.key === _config.EVENT_KEYS.ArrowUp) {
      number++;
    } else if (event.key === _config.EVENT_KEYS.ArrowDown) {
      number--;
    } else if (event.key === _config.EVENT_KEYS.Enter) {
      this.selectItem();
    } else if (typeof value === 'number') {
      number = value - 1;
    }

    if (number !== +this.select[type]) {
      this.select[type] = Math.max(number, 0);
      this.render();
    }
  }

  show(current, reference, cb) {
    // current { row, column } zero base
    this.current = this.select = current;
    super.show(reference, cb);
  }

  selectItem() {
    const { cb } = this;
    const { row, column } = this.select;
    cb(Math.max(row, 0), Math.max(column, 0));
    this.hide();
  }
}

_defineProperty(TablePicker, 'pluginName', 'tablePicker');

var _default = TablePicker;
exports.default = _default;
