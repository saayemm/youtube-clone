import { useAuth } from "../context/AuthProvider"
import Sidebar from "./Sidebar"
import Video from "./Video"


const Home = () => {

    const {data} = useAuth()
    console.log(data)

  return (
    <div className="flex gap-8 pt-24">
        <div className="w-1/6">
        <Sidebar/>
        </div>
        <Video/>
    </div>
  )
}

export default Home