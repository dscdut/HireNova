import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useToggleSideBar = create(
  devtools(
    persist(
      set => ({
        sidebarOpen: false,
        toggleSidebar: () => set(state => ({ sidebarOpen: !state.sidebarOpen }))
      }),
      {
        name: 'toggle-sidebar-storage'
      }
    )
  )
)

export default useToggleSideBar
