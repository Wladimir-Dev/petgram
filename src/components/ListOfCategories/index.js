import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    window
      .fetch('https://petgram-server-wlad.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])
  const renderList = (fixed) => {
    return (
      <List className={fixed ? 'fixed' : ''}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </List>
    )
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}