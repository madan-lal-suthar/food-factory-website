import type { ReactNode } from 'react'

type Column = {
  key: string
  label?: string
}

type TableRow = {
  id?: string | number
  [key: string]: ReactNode
}

type TableProps = {
  columns?: Array<Column | string>
  rows?: TableRow[]
}

const getColumnKey = (column: Column | string) => (typeof column === 'string' ? column : column.key)
const getColumnLabel = (column: Column | string) => (typeof column === 'string' ? column : column.label || column.key)

const Table = ({ columns = [], rows = [] }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={getColumnKey(column)}>{getColumnLabel(column)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.id || index}>
            {columns.map((column) => (
              <td key={getColumnKey(column)}>{row[getColumnKey(column)]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
