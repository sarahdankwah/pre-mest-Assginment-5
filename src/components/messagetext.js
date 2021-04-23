import { useCounter } from '../model/counterContext';

const Message = () => {
    console.log('Loading Messgae Component')
    const { counterState } = useCounter()
    return (
        <h2>
            It looks like you're lost {counterState}
        </h2>
    )
}

export default Message;
