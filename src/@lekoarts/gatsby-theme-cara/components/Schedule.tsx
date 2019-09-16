/** @jsx jsx */

import React, { useState } from 'react'
import MaterialTable from 'material-table'
import useSiteMetadata from '../hooks/useSiteMetadata'
import Icon from './icon'
import { jsx, Flex } from 'theme-ui'

const Schedule = () => {
  const { talksData } = useSiteMetadata()
  const [expandedRows, setExpandedRows] = useState([])

  const handleRowClick = rowId => {
    const currentExpandedRows = expandedRows
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId)

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId)
    setExpandedRows(newExpandedRows)
  }

  const renderItem = item => {
    const clickCallback = () => handleRowClick(item.id)
    const itemRows = [
      <tr
        sx={{
          ':hover': { background: '#bac7ff' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onClick={clickCallback}
        key={item.id}
      >
        <td
          sx={{
            boxShadow: '0 0 0 3px rgba(0, 0, 0, .125)',
            letterSpacing: `wide`,
            pt: 2,
            fontSize: [1, 2],
            lineHeight: 1,
            cursor: 'pointer',
            width: '100%'
          }}
        >
          <th>
            <div
              sx={{
                display: 'flex',
                flex: 1,
                py: [1, 2],
                px: [1, 1, item.id !== 2 ? 1 : 3]
              }}
            >
              <div
                sx={{
                  marginLeft: 10,
                  display: ['none', 'none', 'block']
                }}
              >
                {item.id !== 2 ? (
                  <Icon
                    rotation={expandedRows.includes(item.id) ? '270' : '90'}
                  />
                ) : null}
              </div>
              <div
                sx={{
                  fontSize: [2, 3],
                  flexGrow: 1,
                  mx: 'auto',
                  px: 20,
                  py: 2
                }}
              >
                {item.time}
              </div>
              <div sx={{ fontSize: [1, 2] }}>
                {item.title}
                <div sx={{ fontSize: 14, color: '#EEE923' }}>
                  {item.speaker}
                </div>
              </div>
            </div>
          </th>
        </td>
      </tr>
    ]
    if (expandedRows.includes(item.id) && item.id !== 2) {
      itemRows.push(
        <tr key={item.title}>
          <td
            sx={{
              display: ['none', 'none', 'block'],
              boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
              opacity: 0.75,
              textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
              textAlign: 'justify',
              px: 4,
              py: 2
            }}
          >
            <h4>{item.description}</h4>
          </td>
        </tr>
      )
    }
    return itemRows
  }

  let allItemRows = []
  talksData.forEach(talk => {
    const row = renderItem(talk)
    allItemRows = allItemRows.concat(row)
  })

  return (
    <div>
      <table
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',

          background:
            'linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)',
          my: 50,
          p: 40,
          color: '#fff'
        }}
      >
        {allItemRows}
      </table>
    </div>
  )
}

export default Schedule
