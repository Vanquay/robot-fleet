import { useMemo, useState } from "react";

const useSortableData = (robotDataItems: any, config :any = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...robotDataItems];
        if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableItems;
      }, [robotDataItems, sortConfig]);
    
    //Sort request for either ascending or descending order
    const requestSort = (key: any) => {
        let direction = 'ascending';
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.direction === 'ascending'
        ) {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
    
      return { robotDataItems: sortedItems, requestSort, sortConfig };
    }

export default useSortableData;