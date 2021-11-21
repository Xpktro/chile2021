import { Table, Tag, Space } from 'antd'

const { Column, ColumnGroup } = Table

import { useQuery } from 'react-query'

export default function Home() {
  const { isLoading, error, data } = useQuery(
    'results',
    () => fetch('/api/results').then((res) => res.json()),
    { refetchInterval: 5000 }
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  const headerColumns = [
    {
      title: '',
      dataIndex: 'title',
      key: '1',
    },

    {
      title: '',
      dataIndex: 'data',
      key: '2',
    },
  ]

  const headerData = [
    {
      key: '1',
      title: 'Mesas escrutadas (%)',
      data: data.totalMesasPorcent,
    },
    {
      key: '2',
      title: 'Mesas escrutadas (#)',
      data: data.mesasEscrutadas,
    },
    {
      key: '3',
      title: 'Total Mesas',
      data: data.totalMesas,
    },
  ]

  const resultsColumns = [
    {
      title: 'Nombre',
      dataIndex: 'a',
      key: '1',
    },
    {
      title: 'Votos',
      dataIndex: 'c',
      key: '2',
    },
    {
      title: 'Porcent.',
      dataIndex: 'd',
      key: '3',
    },
  ]
  const resultsData = data.data
    .map(({ a, c, d }) => ({ a, c, d, key: a }))
    .sort((a, b) => b.c - a.c)

  return (
    <>
      <Table
        dataSource={headerData}
        columns={headerColumns}
        showHeader={false}
        pagination={false}
        headerColumns={null}
      />
      <Table
        dataSource={resultsData}
        columns={resultsColumns}
        pagination={false}
      />
    </>
  )
}
