import { create } from 'zustand'
import { ComponentItem } from '../types'
import { localGet, localSet } from '../utils/storage'

interface State {
  componentList: ComponentItem[] | null
  currentComponent: ComponentItem | null
  currentIndex: number | null
  setComponentList: (data: ComponentItem[] | null) => void
  setCurrentComponent: (data: ComponentItem | null) => void
  setCurrentIndex: (data: number | null) => void
}

export const useStore = create<State>(set => ({
  componentList: localGet('componentList') || null,
  currentComponent: localGet('currentComponent') || null,
  currentIndex: Number(localGet('currentIndex')) || null,
  setComponentList: (data: ComponentItem[] | null) => {
    set({
      componentList: data,
    })
    localSet('componentList', data)
  },
  setCurrentComponent: (data: ComponentItem | null) => {
    set({
      currentComponent: data,
    })
    localSet('currentComponent', data)
  },
  setCurrentIndex: (data: number | null) => {
    set({
      currentIndex: data,
    })
    localSet('currentIndex', data)
  },
}))
