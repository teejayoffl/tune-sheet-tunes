import { FC } from 'react'

interface Column {
  header: string
  accessor: string
  align?: 'left' | 'center' | 'right'
  format?: (value: any) => string
}

interface DataTableProps {
  title?: string
  columns: Column[]
  data: any[]
  className?: string
}

const DataTable: FC<DataTableProps> = ({ title, columns, data, className = '' }) => {
  const getAlignment = (align?: string) => {
    switch (align) {
      case 'center':
        return 'text-center'
      case 'right':
        return 'text-right'
      default:
        return 'text-left'
    }
  }

  return (
    <div className={`my-8 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4">{title}</h3>}
      <div className="overflow-x-auto shadow-sm rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${getAlignment(column.align)}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      colIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-500'
                    } ${getAlignment(column.align)}`}
                  >
                    {column.format
                      ? column.format(row[column.accessor])
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable