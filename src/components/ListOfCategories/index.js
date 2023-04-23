import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
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
      <List fixed={fixed}>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    )
  }
  return (
    <>
      {loading ? <h5>cargando historias</h5> : renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
