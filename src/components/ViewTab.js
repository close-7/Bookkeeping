import React from 'react'
import { List, ChartPie } from '@icon-park/react'
import PropTypes from 'prop-types'
import { LIST_VIEW, CHART_VIEW } from '../utility'
const generateLinkClass = (current, view) => {
    return (current === view) ? 'nav-link alert-primary': 'nav-link'
}
const ViewTab = ({ activeTab, onTabChange }) => (
  <ul className="nav nav-tabs nav-fill my-4">
    <li className="nav-item">
      <div
        className={generateLinkClass(activeTab, LIST_VIEW)} 
        
        onClick={(event) => {event.preventDefault(); onTabChange(LIST_VIEW)}}
      >
        <List theme="outline" size="30" fill="#4a90e2" strokeLinejoin="bevel" strokeLinecap="square"/>
        列表模式
      </div>
    </li>
    <li className="nav-item">
      <div 
        className={generateLinkClass(activeTab, CHART_VIEW)} 
        
        onClick={(event) => {event.preventDefault(); onTabChange(CHART_VIEW)}}
      >
        <ChartPie theme="outline" size="30" fill="#4a90e2" strokeLinejoin="bevel" strokeLinecap="square"/>
        图表模式
      </div>
    </li>
  </ul>
)

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
}
export default ViewTab