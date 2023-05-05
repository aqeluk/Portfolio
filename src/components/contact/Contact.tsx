import React, {useState} from 'react'
import Title from '../home/Title'
import { FiSend } from 'react-icons/fi'
import axios from 'axios'

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false)

  const handleName=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setClientName(e.target.value)
    setErrClientName(false)
  }
  const handleEmail=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setEmail(e.target.value)
    setErrEmail(false)
  }
  const handleMessage=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setMessage(e.target.value)
    setErrMessage(false)
  }
  const [successMsg, setSuccessMsg] = useState("")

  const EmailValidation = (email: any) => {
    const pattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email.toString().toLowerCase().match(pattern);
  };

  const handleSend=(e: { preventDefault: () => void })=>{
    e.preventDefault()
    if(!clientName){
      setErrClientName(true)
    } else if(!email){
      setErrEmail(true)
    } else if(!EmailValidation(email)){
      setErrEmail(true)
    } else if(!message){
      setErrMessage(true)
    } else {
      axios.post('https://getform.io/f/1dc4a511-30d3-48e0-90ff-738c93070111', {
        name: clientName,
        email: email,
        message: message
      });
      setSuccessMsg(`Hi there ${clientName}, Your message has been sent successfully. Thank you for your time!`);
      setClientName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div>
      <Title title='Get' subTitle='in Touch' />
      <div className='p-6 flex justify-between gap-20'>
        <div className='w-1/2'>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Address:
            </span>
            London, UK
          </p>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Phone:
            </span>
            +44 7554 075 725
          </p>
        </div>
        <div className='w-1/2'>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Email:
            </span>
            uzairpopalzai@hotmail.com
          </p>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Freelance:
            </span>
            Moderate Availability
          </p>
        </div>
      </div>
      <div className='w-full mt-10'>
        <Title title='Send' subTitle='a Message' />
        {successMsg ?(
          <p className='text-center text-base font-titleFont p-20 text-designColor'>
            {successMsg}
          </p>
        ) : (
        <form 
          id='form'
          action='https://getform.io/f/1dc4a511-30d3-48e0-90ff-738c93070111'
          method='POST' 
          className='p-6 flex flex-col gap-6'>
          <div className='w-full flex gap-10 justify-between'>
            <input
              onChange={handleName}
              value={clientName}
              className={`${
                errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  outline-none duration-300`}
              type='text'
              placeholder='Full Name'
            />
            <input
              onChange={handleEmail}
              value={email}
              className={`${
                errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  outline-none duration-300`}
              type='email'
              placeholder='Email Address'
            />
          </div>
          <textarea 
            onChange={handleMessage}
            value={message}
            className={`${
              errMessage
                ? "border-red-600 focus-visible:border-red-600"
                : "border-zinc-600 focus-visible:border-designColor"
            } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  outline-none duration-300 resize-none`}
            placeholder='Send Message'
            cols={30}
            rows={4}
            />
          <button onClick={handleSend} className='text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200'>
            Send Message{" "}
            <span className='mt-1 text-designColor'>
              {<FiSend />}
            </span>
            </button>
        </form>
        )}
      </div>
    </div>
  )
}

export default Contact