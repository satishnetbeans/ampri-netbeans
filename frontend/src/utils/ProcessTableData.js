// utils/processTableData.js
// @ts-nocheck
export function processTableData(resData, fieldMapping) {
  if (!resData || !Array.isArray(resData) || resData.length === 0) {
    console.warn("Invalid response data:", resData);
    return { columns: [], processedData: [], table: null };
  }

  const table = resData[0].table;
  const columns = table.columns;

  // Check if tabs exist
  if (table.tabs && Array.isArray(table.tabs) && table.tabs.length > 0) {
    const tabs = table.tabs;
    
    const intermediateTabs = tabs.map((tab) => ({
      key: tab,
      label: tab,
      data: resData.filter((item) => item.tab === tab),
    }));
    console.log("Processing with tabs" ,intermediateTabs);
    
    const updatetabs = intermediateTabs.map((tab) => ({
      key: tab.key,
      label: tab.label,
      data: tab.data
        .map((item) => {
          const mappedItem = { _id: item._id, order: item.order };
          for (const [displayKey, itemKey] of Object.entries(fieldMapping)) {
            mappedItem[displayKey] = item[itemKey];
          }
          return mappedItem;
        })
        .sort((a, b) => a.order - b.order),
    }));

    return { columns, processedData: updatetabs, table };
  } else {
    // No tabs, simple list
    const processedData = resData
      .sort((a, b) => a.order - b.order)
      .map((item) => {
        const mappedItem = { _id: item._id, order: item.order };
        for (const [displayKey, itemKey] of Object.entries(fieldMapping)) {
          mappedItem[displayKey] = item[itemKey];
        }
        return mappedItem;
      });

    return { columns, processedData, table };
  }
}


