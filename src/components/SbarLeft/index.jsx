/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';
import { withTranslation } from 'react-i18next';

import './index.scss';
import Menu from '../Menu';
import Menu2 from '../Menu2';
import SwitchThemes from 'components/SwitchThemes';

class SbarLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { settingPage } = this.props;

    return (
      <aside
        className={`sidebar w-260  mt-0 position-relative bg-dark mh-100 overflow-hidden overflow-y-auto d-flex flex-column justify-content-between z-index-100`}
      >
        {!settingPage ? (
          <>
            <Menu />
          </>
        ) : (
          <Menu2 />
        )}
        <div className="switch-theme-button position-absolute end-0 bottom-0 mb-4 me-3">
          <SwitchThemes />
        </div>
      </aside>
    );
  }
}

export default withTranslation('common')(SbarLeft);
