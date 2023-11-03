import { create } from 'zustand'
import { ComponentItem } from '../types'
import { localGet, localSet } from '../utils/storage'

interface State {
  componentList: ComponentItem[] | null
  currentComponent: ComponentItem | null
  currentIndex: number | null
  setComponentList: (data: ComponentItem[]) => void
  setCurrentComponent: (data: ComponentItem) => void
  setCurrentIndex: (data: number) => void
}

export const useStore = create<State>(set => ({
  componentList: localGet('componentList') || null,
  currentComponent: localGet('currentComponent') || null,
  currentIndex: Number(localGet('currentIndex')) || null,
  setComponentList: (data: ComponentItem[]) => {
    set({
      componentList: data,
    })
    localSet('componentList', data)
  },
  setCurrentComponent: (data: ComponentItem) => {
    set({
      currentComponent: data,
    })
    localSet('currentComponent', data)
  },
  setCurrentIndex: (data: number) => {
    set({
      currentIndex: data,
    })
    localSet('currentIndex', data)
  },
}))
