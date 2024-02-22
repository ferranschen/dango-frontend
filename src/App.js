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

      <div className="w-full p-2 h-screen">
        <div className="flex flex-row space-x-2 h-3/6 justify-center">
          <Provanance />

          <TableView />
        </div>
        <div>
          <hr className="my-2" />
        </div>
        <div className="flex flex-row space-x-2 h-3/6 mb-4 justify-center">
          <ChatRoom />
          {/* <Clarification /> */}
          <AutomationSection />
        </div>
      </div>
    </>
  )
}