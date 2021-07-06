import React from 'react';
import _ from 'lodash';

import StoreCard from '../storeCard/StoreCard';

import data from '../../assets/storeListData.json';
import './StoreList.less';

function StoreList() {
  const storeListArr = _.get(data, 'storeList', []);

  return (
    <div className="store-list" role="menu">
      {
        storeListArr.map((store, index) => {
          const storeName = _.get(store, 'name', '');
          const itemList = _.get(store, 'itemList', []);
          return (
            <StoreCard
              storeName={storeName}
              itemList={itemList}
              key={index}
            />
          );
        })
      }
    </div>
  );
}

StoreList.propTypes = {

};

export default StoreList;
