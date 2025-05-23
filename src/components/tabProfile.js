const TabProfile = ({data,setData,error}) => {
    const   {name,age,email} = data;
    return (
        <div>
            <h1>TabProfile</h1>
            <div>
                name: <input type="text"  value={name} onChange={(e)=>setData({...data,name:e.target.value})}
                 />
                 {error.name && <div>{error.name}</div>}
                 
                age: <input type="number"  value={age}  onChange={(e)=>setData({...data,age:e.target.value})}/>
                {error.age && <div>{error.age}</div>}
                email: <input type="text" value={email}  onChange={(e)=>setData({...data,email:e.target.value})} />
                {error.email && <div>{error.email}</div>}
            </div>
        </div>
    );
}
export default TabProfile;