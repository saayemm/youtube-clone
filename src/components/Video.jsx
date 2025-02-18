import {Link} from 'react-router'
import Time from '../loader/Time'
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({video}) => {
  console.log(video)
  return (
    <div className=' md:rounded-xl hover:rounded-none mb-8'>
      <Link to={`/playVideo/${video?.videoId}`}>
        <div>
          <div className='relative'>
            <img className='md:rounded-xl hover:rounded-none duration-300' 
            src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds}/>}
          </div>
          <div className='mt-2 flex gap-4'>
              <div>
                <img className='rounded-full w-[56px] h-[56px]' src={video?.author?.avatar[0].url} alt="" />
              </div>
              <div className='flex flex-col '>
                <span className='font-semibold'>{video?.title}</span>
                <span className='text-gray-600'>{video?.author?.title}</span>
                <div className='flex gap-2'>
                  <span>{`${abbreviateNumber(video?.stats?.views,2)}views`}</span>
                  <span className='mb-2'>.</span>
                  <span>{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Video