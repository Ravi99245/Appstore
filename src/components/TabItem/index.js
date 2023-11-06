import './index.css'

const TabItem = props => {
  const {eachtTab, isActiveTabId} = props
  const {tabId, displayText} = eachtTab

  return (
    <li className="tab">
      <button className="button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
