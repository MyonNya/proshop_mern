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
  title: 'Welcome To NoobShop',
  description: 'Ở đây chúng tôi có bán ma thuật',
  keywords: 'Ma thuật, mua ma thuật, ma thuật giá rẻ',
}

export default Meta
