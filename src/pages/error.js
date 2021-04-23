import CounterBtn from '../components/counter_btn';
import Message from '../components/messagetext';

const Error = () => {
    console.log('Loading Error Component')
    return (
        <div className='container'>
            <Message />
            <CounterBtn />
        </div>
    )
}

export default Error
