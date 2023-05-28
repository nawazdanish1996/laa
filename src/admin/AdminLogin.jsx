import React, {useState} from 'react';
import "../styles/AdminLogin.scss";

const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();

    const adminSubmitHandler = (e)=>{
        e.preventDefault();
    };

  return (
    <div className='adminLogin'>
        <form onSubmit={adminSubmitHandler}>
            <label htmlFor="">Admin Login</label>
            <br />
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Email" />
            <br />
            <input onChange={(e)=> setPwd(e.target.value)} value={pwd} type="password" name="password" placeholder='Password' />
            <br />
            {
                !pwd || !email ?
                <button type='submit' disabled>Login</button>
                :
                <button className='btn btn-primary' type="submit">Login</button>
            }
        </form>
    </div>
  )
}

export default AdminLogin