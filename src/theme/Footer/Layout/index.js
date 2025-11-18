import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        <div className="footer__row">
          {logo && <div className="footer__logo">{logo}</div>}
          {links}
        </div>
        {copyright && <div className="footer__bottom text--center">{copyright}</div>}
      </div>
    </footer>
  );
}
