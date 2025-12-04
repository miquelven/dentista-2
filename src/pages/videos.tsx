import React from 'react'
import NextLayout from '../components/templates/nextLayout'
import { Flex, Text } from '@chakra-ui/react'

export default function NextVideos() {
  return (
    <NextLayout>
      <Flex
        minH={['350px', '505px']}
        w={'full'}
        backgroundImage={'url(/images/home/background.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        align="center"
        justify="center"
      >
        <Text
          color={'white'}
          fontWeight={700}
          fontSize={{ base: '3xl', md: '4xl' }}
        >
          video aqui
        </Text>
      </Flex>
    </NextLayout>
  )
}
