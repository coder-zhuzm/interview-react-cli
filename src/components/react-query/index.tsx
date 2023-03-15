import React, { memo } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

const index = memo(() => {
  const baseUrl = "http://api-hmugo-web.itheima.net"
  // /api/public/v1/home/swiperdata
  const { data, isLoading, isError } = useQuery('userData', () => axios.get(`${baseUrl}/api/public/v1/home/swiperdata`));
  console.log("🚀 ~ file: index.tsx:10 ~ index ~ data:", data)
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      {data?.data?.message.map((img: any) => <img key={img?.goods_id} src={img?.image_src} />)}
    </div>
  )
})

export default index
// {
//   "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
//   "open_type": "navigate",
//   "goods_id": 129,
//   "navigator_url": "/pages/goods_detail/main?goods_id=129"
// }