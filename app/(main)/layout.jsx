import React from 'react'
import Layout from '@/components/layout';
import Head from 'next/head'
export default function layout({children}) {
  return (
    <div>

      <Head>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Head>
      <Layout>{children}</Layout>
    </div>
  )
}
