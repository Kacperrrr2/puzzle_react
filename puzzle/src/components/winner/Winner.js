import './Winner.css'

const Winner =({numbers})=>
{
    if(!numbers.every(n=> n.value===n.index +1))
    {
        return null
    }
    else{
        return(
        <div className='winner'>
            <p>You won!</p>
        </div>)
    }
}
export default Winner