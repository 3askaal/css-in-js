import { createContext, useState, useEffect } from 'react'
import { uniqBy } from 'lodash'
import { Section } from '../components'
import { MdxComponents } from '../config/mdx.config'
import Docs from '../docs/index'

export const NavContext = createContext({})

export const NavProvider = ({ children }) => {
  const [docs, setDocs] = useState([])
  const [components, setComponents] = useState([])

  useEffect(() => {
    setDocs(Object.entries(Docs).map(([key, Doc], index) => ({
      title: key,
      section: (
        <Section index={index} s={{ lineHeight: 1.5 }} isDoc>
          <Doc components={MdxComponents} />
        </Section>
      ),
      index
    })))
  }, [])

  const addDocRefToNav = (index, ref) => {
    const newDocs = [...docs]
    newDocs[index].ref = ref
    setDocs(newDocs)
  }

  const addCompToNav = (title, ref) => {
    components.push({ title, ref })
    setComponents(uniqBy(components, 'title'))
  }

  return (
    <NavContext.Provider
      value={{
        docs,
        setDocs,
        components,
        setComponents,
        addCompToNav,
        addDocRefToNav
      }}
    >
      { children }
    </NavContext.Provider>
  )
}
