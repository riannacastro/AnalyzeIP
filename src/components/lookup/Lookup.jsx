import { Button, Card, Container, Input, LoadingOverlay, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import {GoSearch} from 'react-icons/go';
import axios from 'axios';
import Results from './Results';

export default function Lookup() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const message = 'Please enter a valid IP.';

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const resp = await axios.get(`https://get.geojs.io/v1/ip/geo/${value}.json`)
      console.log(resp.status)
      if(resp.status === 200) {
        setData(resp.data)
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      } 
    } catch {
      setLoading(false);
      setError(true);
    };
  };

  return (
    <Container fluid style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 800}}>
      <Card w={500} style={{backgroundColor: '#ffffff33', color: 'white'}} shadow>
      {!data ?
        <>
          <LoadingOverlay visible={loading} overlayColor='#ffffff33' /> 
          <Stack>
            <Text size={34} color='white'>Analyze IP</Text>
            <Input icon={<GoSearch />} placeholder='Enter IP Address' error={error && message} value={value} onChange={(e) => setValue(e.target.value)}/>
            {error && <Text fw={700} ta='center' color='white'>{message}</Text>}
            <Button variant="gradient" gradient={{ from: '#002A5E', to: '#0283EC' }} onClick={onSubmit}>Search</Button>
          </Stack>
        </> 
      :
        <Results data={data}/>
      }
    </Card> 
    </Container>
  )
}
