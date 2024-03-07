import React from 'react'

const User = ({userList}) => {
  return (
    <div>
    {userList.map(user => (
    <div className='usercard'>
        <div className='box'>
            <img src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1708443847~exp=1708444447~hmac=1099bccdd6286a6ccc24ab0adaca5e413f5007b1214e82f98b9c3a155c5faece" alt="user"/>
            <p className='name' key={user.id}>{user.name}</p>
            <div className='username'key={user.id}>User Name: {user.username}</div>
        </div>
        <div class="card">
            <div class="company">
                COMPANY:
                <p key={user.id}>name: "{user.company.name}"</p>
                <p key={user.id}>catchPhrase: "{user.company.catchPhrase}"</p>
                <p key={user.id}>bs: "{user.company.bs}"</p>
            </div>
            <div class="text">
                <h5 class="title" key={user.id}>Email: {user.email}</h5>
                <h5 class="title" key={user.id}>Website: {user.website}</h5>
                <div class="paragraph color-gray">
                    <p>Adress:</p>
                    <p key={user.id}>street: {user.address.street}</p>
                    <p key={user.id}>suite: {user.address.suite}</p>
                    <p key={user.id}>city: {user.address.city}</p>
                    <p key={user.id}>zipcode: {user.address.zipcode}</p>
                </div>
                <span class="tag">Geo:</span>
                <span class="tag" key={user.id}>lat: {user.address.geo.lat}</span>
                <span class="tag" key={user.id}>lng: {user.address.geo.lng}</span>
                <div class="divider">
                    <button className='contact' key={user.id}>Phone: {user.phone}</button>
                </div>
            </div>
        </div>
    </div>
    ))}
    </div>
  )
}

export default User