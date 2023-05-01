import { Box, Container, Divider, Typography } from '@suid/material'
import type { Component } from 'solid-js'

import type { mapServerStatus } from '../../utils/mappers/mapInfo.ts'
import StatsTable from '../../components/StatsTable.tsx'

const Page: Component<{
  databases: Mongo['databases']
  // messageError?: string
  // messageSuccess?: string
  options: {
    noDelete: boolean
    readOnly: boolean
  }
  serverStatus?: ReturnType<typeof mapServerStatus>
}> = ({
  options: {
    noDelete,
    readOnly
  },
  databases,
  serverStatus
}) => {
    // pageProps.options
    return (
      <Container sx={{ p: 1 }}>
        <Typography component="h4" gutterBottom variant="h4">Mongo Express</Typography>

        <Divider sx={{ border: 1, my: 1.5 }} />

        {/* <ShowDatabases
        databases={databases}
        show={{
          create: readOnly === false,
          delete: noDelete === false && readOnly === false
        }}
      /> */}

        <Box sx={{ mb: 2 }}>
          {serverStatus ? <StatsTable label="Server Status" fields={serverStatus} /> : (
            <>
              <Typography component="h4" gutterBottom variant="h4">Server Status</Typography>

              <Typography>Turn on admin in <b>config.js</b> to view server stats!</Typography>
            </>
          )}
        </Box>
      </Container>
    )
  }

export { Page }