import React, { useEffect } from 'react'
import { Box, Center, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLayout from '../components/templates/nextLayout'

const NextHome = () => {
  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window) {
        const script = document.createElement('script')
        script.innerHTML = `!function($_x,_s,id){
          var js, fjs=$_x.getElementsByTagName(_s)[0];
          if(!$_x.getElementById(id)){
            js = $_x.createElement(_s);
            js.id = id;
            js.src = "//platform.docplanner.com/js/widget.js";
            fjs.parentNode.insertBefore(js,fjs);
          }
        }(document,"script","zl-widget-s");`
        document.body.appendChild(script)
      }
    })
  }, [])
  return (
    <NextLayout>
      <Center>
        <Heading
          fontWeight={900}
          as={'span'}
          bgGradient="linear(to-b, #EACE8C, #D6BD82)"
          bgClip="text"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        >
          Contato
        </Heading>
      </Center>
      <Container>
        <Box py={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Profissional 1
            </Heading>
            <Link href={'tel:0000000000'}>
              <Heading color="next-primary" size="md">
                (00) 0000-0000
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/exemplo'} color="next-primary">
              Instagram Profissional 1
            </Link>
          </Stack>
        </Box>
        <Box pb={8}>
          <Stack>
            <Heading color="next-primary" size="md">
              Profissional 2
            </Heading>
            <Link href={'tel:0000000000'}>
              <Heading color="next-primary" size="md">
                (00) 0000-0000
              </Heading>
            </Link>
            <Link href={'https://www.instagram.com/exemplo'} color="next-primary">
              Instagram Profissional 2
            </Link>
          </Stack>
          <Text color="next-primary" fontSize="sm">
            Rua Exemplo, 123 | Sala 1 - Bairro Centro - Cep 00000-000
          </Text>
        </Box>
      </Container>
      <Box bg={'next-gray-dark'} py={'12'}>
        <a id="zl-url" className="zl-url" href="#" rel="nofollow">
          Perfil Externo
        </a>
      </Box>
    </NextLayout>
  )
}

export default NextHome
