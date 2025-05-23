const TabInterest = ({data,setData}) => {
    const   {name,age,email} = data;
    return (
        <div>
            <h1>TabInterest</h1>
            <div>
                name: <input type="text"  value={name} onChange={(e)=>setData({...data,name:e.target.value})}
                 />
                age: <input type="number"  value={age}  onChange={(e)=>setData({...data,age:e.target.value})}/>
                email: <input type="text" value={email}  onChange={(e)=>setData({...data,email:e.target.value})} />
            </div>
        </div>
    );
}
export default TabInterest;
