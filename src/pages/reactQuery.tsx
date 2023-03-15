import React, { memo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import ReactQuery from '@/components/react-query';

const queryClient = new QueryClient()
const reactQuery = memo(() => {
  return (
    <div>
      reactQuery
      <hr />
      <QueryClientProvider client={queryClient}>
        <ReactQuery />
      </QueryClientProvider>
    </div>

  )
})

export default reactQuery