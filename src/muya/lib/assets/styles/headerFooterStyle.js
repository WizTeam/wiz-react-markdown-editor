export default `
:root {
  --footerHeaderBorderColor: #1c1c1c;
}

table.page-container,
table.page-container > thead,
table.page-container > tfoot,
table.page-container > tbody,
table.page-container > thead > tr,
table.page-container > thead > tr > th,
table.page-container > thead > tr > td,
table.page-container > tbody > tr,
table.page-container > tbody > tr > th,
table.page-container > tbody > tr > td,
table.page-container > tfoot > tr,
table.page-container > tfoot > tr > th,
table.page-container > tfoot > tr > td  {
  position: relative !important;
  margin: 0 !important;
  padding: 0 !important;
}

.page-header .hf-container,
.page-footer-fake .hf-container,
.page-footer .hf-container {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
  font-weight: 400;
}

.page-header {
  display: table-header-group;
}
.page-header .hf-container {
  margin-bottom: 16px;
}
.page-header.styled .hf-container {
  padding-bottom: 1px;
  border-bottom: 1px solid var(--footerHeaderBorderColor);
}
.page-header .hf-container > div {
  flex: 1;
  max-height: 100px;
  overflow: hidden;
}
.page-header .header-content-left {
  text-align: left;
  margin-right: 4px;
}
.page-header .header-content {
  text-align: center;
}
.page-header .header-content-right {
  text-align: right;
  margin-left: 4px;
}
.page-header.single .header-content-left,
.page-header.single .header-content-right {
  display: none;
}

.page-footer-fake {
  display: table-footer-group;
}
.page-footer-fake .hf-container {
  margin-top: 16px;
  visibility: hidden;
}
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.page-footer.styled .hf-container {
  padding-top: 1px;
  border-top: 1px solid var(--footerHeaderBorderColor);
}
.page-footer .hf-container > div {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
}
.page-footer .footer-content-left {
  text-align: left;
  margin-right: 14px;
}
.page-footer .footer-content {
  text-align: center;
}
.page-footer .footer-content-right {
  text-align: right;
  margin-left: 14px;
}
.page-footer.single .footer-content-left,
.page-footer.single .footer-content-right {
  display: none;
}

`;
