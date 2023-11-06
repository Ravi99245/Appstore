import './index.css'

const TabItem = props => {
  const {eachtTab, isActiveTabId, clickTabItem} = props
  const {tabId, displayText} = eachtTab
  const className = isActiveTabId ? 'highlighted' : ''

  const selectTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab">
      <button
        className={`button ${className}`}
        type="button"
        onClick={selectTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
