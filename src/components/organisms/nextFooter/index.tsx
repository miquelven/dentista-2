import React, { ReactNode } from 'react'
import Image from 'next/image'
import packageInfo from '../../../../package.json'

import { Box, Container, Heading, SimpleGrid, Stack, Text, Link } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/nextimeSvg'
const version = packageInfo.version
const NeXTIMEColor = '#202F4F'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

const NextFooter = () => {
  return (
    <footer>
      <Box bg={'white'} color={'next-primary'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
            <Stack spacing={6}>
              <Box justifyContent={'center'}>
                <Image
                  src="/images/logos/logo_header.svg"
                  alt="Logo Clínica Fictícia"
                  width={153}
                  height={29}
                />
                <Image
                  src="/images/logos/logo_rosane.svg"
                  alt="Logo Clínica Fictícia"
                  width={153}
                  height={29}
                />
              </Box>
              <Text fontSize={'sm'}>
                © {new Date().getFullYear()} Clínica Fictícia. Todos os direitos reservados.
              </Text>
              <Text>
                Desenvolvido por:
                <Link
                  href="https://nextime.com.br"
                  _hover={{
                    transition: '0.3s',
                    fill: NeXTIMEColor
                  }}
                  transition="0.3s"
                  fill="next-primary"
                >
                  <a>
                    <NextimeSvg />
                  </a>
                </Link>
              </Text>
              <Text>v{version}</Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Menu</ListHeader>
              <Link href={'/'}>A Clínica</Link>
              <Link href={'/fotos'}>Fotos</Link>
              <Link href={'/convenios'}>Convênios</Link>
              <Link href={'/tratamentos'}>Tratamentos</Link>
              <Link href={'/videos'}>Vídeos</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Contatos</ListHeader>
              <Link href={'mailto:email@exemplo.com'}>E-mail Profissional 1</Link>
              <Link href={'https://www.instagram.com/exemplo'}>Instagram Profissional 1</Link>
              <Link href={'mailto:contato@exemplo.com'}>E-mail Profissional 2</Link>
              <Link href={'https://www.instagram.com/exemplo'}>Instagram Profissional 2</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'tel:0000000000'}>
                <Heading color="next-primary" size="lg">
                  (00) 0000-0000
                </Heading>
              </Link>
              <Heading color="next-primary" size="md">
                Profissional 1
              </Heading>
              <Link href={'tel:0000000000'}>
                <Heading color="next-primary" size="lg">
                  (00) 0000-0000
                </Heading>
              </Link>
              <Heading color="next-primary" size="md">
                Profissional 2
              </Heading>
              <Text color="next-primary" fontSize="sm">
                Rua Exemplo, 123 | Sala 1 - Bairro Centro - Cep 00000-000
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  )
}

export default NextFooter
