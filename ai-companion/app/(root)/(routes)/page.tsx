import React from 'react'
import SearchInput from '@/components/search-input'
import prismadb from '@/lib/prismadb'
import Categories from '@/components/categories'

export default async function RootPage() {
  const categories = await prismadb.category.findMany()
  return (
    <div className='h-full p-4 space-y-2'>
      <SearchInput/>
      <Categories data={categories}/>
    </div>
  )
}
