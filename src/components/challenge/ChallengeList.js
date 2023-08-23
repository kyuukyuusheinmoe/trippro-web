"use client"
import React from 'react'
import useSWR from 'swr'
import ChallengeCard from './ChallengeCard'
import { fetcher } from '@/utils/fetch'

function ChallengeList() {
    const {data: posts} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return (
    <>
    {posts?.slice(0, 5).map((post, index) => (
        <ChallengeCard key={index}  challenge={{serial: index+1, description: post.title} }/>
    ))}
    </>
  )
}

export default ChallengeList
