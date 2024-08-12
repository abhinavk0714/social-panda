"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import Banner from './_components/Banner'
import PostList from './_components/PostList';
import WritePost from './_components/WritePost';
import GlobalApi from '@/app/_utils/GlobalApi'

function Home() {
  const [postList, setPostList] = useState([]);
  useEffect(()=>{
      getAllPosts();
  })
  const getAllPosts = () => {
      GlobalApi.getAllPosts().then(resp=> {
          setPostList(resp.data);
      })
  }
  const {user} = useUser();
  return (
    <div className='p-5 px-10'>
      {!user ? <Banner/>

      : <WritePost getAllPosts={()=>getAllPosts()}/>}

      <PostList postList={postList}
      updatePostList={()=>getAllPosts()}/>
    </div>
  )
}

export default Home