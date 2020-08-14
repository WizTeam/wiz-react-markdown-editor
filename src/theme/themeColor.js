import darkTheme from '../style/dark.theme.css';
import graphiteTheme from '../style/graphite.theme.css';
import materialDarkTheme from '../style/material-dark.theme.css';
import oneDarkTheme from '../style/one-dark.css';
import ulyssesTheme from '../style/ulysses.theme.css';
import darkPrismTheme from '../style/dark-prism.theme.css';
import oneDarkPrismTheme from '../style/one-dark-prism.theme.css';

export function dark() {
  return `${darkTheme}\n${darkPrismTheme}`;
}

export function graphite() {
  return graphiteTheme;
}

export function materialDark() {
  return `${materialDarkTheme}\n${darkPrismTheme}`;
}

export function oneDark() {
  return `${oneDarkTheme}\n${oneDarkPrismTheme}`;
}

export function ulysses() {
  return ulyssesTheme;
}
