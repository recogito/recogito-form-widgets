import React from 'react';
import { BiNetworkChart } from 'react-icons/bi';
import { RiNodeTree } from 'react-icons/ri';

const TaxonomyTagWidget = props => {

  const toggleTreeBrowser = () => {
    console.log('click');
  }

  return (
    <div className="r6o-widget r6o-taxonomy">
      <div 
        className="r6o-taxonomy-input-placeholder">
        <BiNetworkChart />
      </div>

      <button
        className="r6o-taxonomy-open-treebrowser"
        onClick={toggleTreeBrowser}>
        <RiNodeTree />
      </button>
    </div>
  )

}

export default TaxonomyTagWidget;