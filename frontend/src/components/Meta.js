import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Chào mừng đến với NoobShop',
  description: 'Ở đây có bán Magic',
  keywords: 'electronics magic, buy electronics magic, cheap electroincs magic',
}

export default Meta
