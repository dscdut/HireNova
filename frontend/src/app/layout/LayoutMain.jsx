import Sidebar from '@/app/layout/side-bar'

const LayoutMain = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto px-2 py-2 bg-[#F4F4F4]">{children}</main>
      </div>
    </div>
  )
}

export default LayoutMain
