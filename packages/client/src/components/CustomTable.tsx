import './CustomTable.css';

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  width?: string;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (row: T) => void;
}

function CustomTable<T extends Record<string, any>>({ data, columns, onRowClick }: TableProps<T>) {
  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={onRowClick ? 'clickable' : ''}
            >
              {columns.map((column) => (
                <td key={String(column.key)}>
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;

