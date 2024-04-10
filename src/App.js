import TopNav from 'ui/topnav';
import ChatRoom from 'ui/interaction/Chatroom/Chatroom'
import Provanance from 'ui/interaction/Provanance/Provanance'
import Clarification from 'ui/interaction/Clarification/Clarification'
import TableView from 'ui/interaction/TableView/TableView'
import AutomationSection from 'ui/interaction/AutomationSection/AutomationSection'


export default function App() {
  return (
    <>
      <TopNav />
      <div className='flex flex-row w-full p-2 h-screen  justify-center space-x-2'>
        <div className='w-3/5 h-full overflow-y-scroll space-y-2'>
          <div className='flex flex-col h-3/5'>
            <TableView />
          </div>
          <div className='flex flex-col h-2/5'>
            <ChatRoom />
          </div>
        </div>
        <div className='w-2/5 h-full overflow-y-scroll space-y-2'>
          <div className='flex flex-col  h-3/5'>
            <Provanance />  
          </div>
          <div className='flex flex-col  h-2/5 '>
            <AutomationSection />
          </div>

        </div>

      </div>
    </>
  )
}