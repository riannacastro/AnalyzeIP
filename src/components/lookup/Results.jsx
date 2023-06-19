import { Stack, Text } from '@mantine/core'
import React from 'react'

export default function Results({data}) {
  return (
    <>
      <Stack>
        <Text>IP Address: {data.ip}</Text>
        <Text>City: {data.city}</Text>
        <Text>Region: {data.region}</Text>
        <Text>Timezone: {data.timezone}</Text>
        <Text>Country: {data.country}</Text>
      </Stack>
    </>
  )
}
