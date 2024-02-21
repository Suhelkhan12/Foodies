'use client'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const {pending} = useFormStatus();
  let btnText = pending ? 'Sharing...': 'Share meal'

  return (
    <button disabled={pending}>{btnText}</button>
  )
}

export default SubmitButton