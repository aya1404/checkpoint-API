import React from 'react'
import {Link} from 'react-router-dom'

const UserList = ({search,searchValue,userList}) => {
  
  
  return (
    <div>
      <section className="newsletter">
        <h5>The Users List</h5>
        <form>
          <input type="text" placeholder="Search for a user" onChange={(event) => search(event.target.value)}/>
          <button className="beige" onClick={userList.filter(user=> user.name.toLowerCase().includes(searchValue.toLowerCase().trim()))}>Search</button>
        </form>
      </section>
      <section class="see-more">
        {userList.map(user => (
          <div class="see-more__items">
            <div class="see-more__item">
              <img src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1708443847~exp=1708444447~hmac=1099bccdd6286a6ccc24ab0adaca5e413f5007b1214e82f98b9c3a155c5faece" alt="user"/>
              <div class="see-more__info">  
                <div key={user.id} class="see-more__title">{user.name}</div>
                <button class="beige"><Link to={`/user/${user.id}`} style={{textDecoration: "none",color: "#bf224e"}}>See more infos</Link></button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default UserList