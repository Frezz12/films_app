import {Link} from "react-router-dom";
import home from '../../assets/home-page.png'
import tv from '../../assets/television.png'
import watched from '../../assets/approve-sign.png'
import like from '../../assets/heart-shape-outline.png'
import archive from '../../assets/open-folder.png'

export const Navigation = () => {
  return (
    <>
    <div className="fixed bottom-0 px-4 bg-buttonBg w-full z-50 border-t-[1px] border-white border-opacity-20">
      <div className="flex items-center justify-center">
        <nav>
          <ul className="flex items-center justify-center space-x-11 py-6">
            <li><Link className='flex w-[40px]' to='/'><img src={home} alt='home page'/></Link></li>
            <li><Link className='flex w-[40px]' to='/watching'><img src={tv} alt='watching page'/></Link></li>
            <li><Link className='flex w-[40px]' to='/watched'><img src={watched}/></Link></li>
            <li><Link className='flex w-[40px]' to='/like'><img src={like}/></Link></li>
            <li><Link className='flex w-[40px]' to='/archive'><img src={archive}/></Link></li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}
