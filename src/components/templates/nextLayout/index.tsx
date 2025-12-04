import Head from 'next/head'
import React, { PropsWithChildren } from 'react'
import NextHeader from '../../organisms/nextHeader'
import NextFooter from '../../organisms/nextFooter'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'

type Props = {
  title?: string
  description?: string
  nextSocialNetwork?: string
}

const NextLayout = ({
  children,
  title = 'Clínica Fictícia',
  description = 'Clínica odontológica fictícia para demonstração. Informações meramente ilustrativas.',
  nextSocialNetwork = '#'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <NextHeader />
      <main>{children}</main>
      <NextFooter />
      <Box position="fixed" width="60px" height="60px" zIndex={100} bottom="20px" right="20px">
        <Link href={nextSocialNetwork}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout
