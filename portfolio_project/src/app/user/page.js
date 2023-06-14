import { BiCurrentLocation } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import user from './user.module.scss'


export default function User() {
  return (
    <div className={user.home}>
      <div className={user.search}>
        <div className={user.icon}>
          <BiCurrentLocation />
        </div>
        <input type="text" placeholder="Enter your address" />
        <button>
          <FiSearch/>
          Find food
        </button>
      </div>
    </div>
  )
}
