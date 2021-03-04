import { headerDict, rowDict } from '../Dictionaries'

import styles from '../styles/components/Tables.module.css';

export function Table(params) {

  const headers = params.data.length ? Object.keys(params.data[0]) : []

  const rows = params.data.length ? params.data.map(item => Object.values(item)) : []

  return (
    <div className={styles.table}>
      <table id="data-table">
        <thead>
          <tr>

            {headers.map(header => <th>{headerDict[header] || header}</th>)}

          </tr>
        </thead>
        <tbody>

          {rows.map(row => {
            return (
              <tr>{row.map(item => <td>{rowDict[item] || item}</td>)}</tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}
