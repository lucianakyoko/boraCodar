const size = {
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '663px',
  tablet: '767px',
  tabletL: '887px',
  laptop: '1024px',
  laptopM: '1300px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileM: `@media screen and (min-width: ${size.mobileM})`,
  mobileL: `@media screen and (min-width: ${size.mobileL})`,
  tabletS: `@media screen and (min-width: ${size.tabletS})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  tabletL: `@media screen and (min-width: ${size.tabletL})`,
  laptop: `@media screen and (min-width: ${size.laptop})`,
  laptopM: `@media screen and (min-width: ${size.laptopM})`,
  laptopL: `@media screen and (min-width: ${size.laptopL})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
}