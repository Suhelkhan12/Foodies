'use client'
import { useFormStatus } from 'react-dom'
import { redirect } from 'next/navigation'

const SubmitButton = () => {
  const {pending} = useFormStatus();
  let btnText = pending ? 'Saving...': 'Share meal'


  return (
    <button disabled={pending}>{btnText}</button>
  )
}

export default SubmitButton