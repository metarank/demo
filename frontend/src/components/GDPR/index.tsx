import { useCallback, useState } from 'react'
import { X } from 'react-feather'
import Cookies from 'js-cookie'
import * as Styled from './components'

const KEY = '__GDPR_SEEN__'
const isPreviouslySeen = Cookies.get(KEY)

export default function GDPR() {
  const [isOpen, setOpen] = useState<boolean>(!isPreviouslySeen);
  const onClose = useCallback(() => {
    setOpen(false)
    Cookies.set(KEY, true)
  }, [])

  if (!isOpen) return null;
  return (
    <Styled.Container>
      <p>
        We use first-party and third-party cookies for analytical purposes and to show you advertising
        related to your preferences, based on your browsing habits and profile.
      </p>
      <button onClick={onClose}>
        <X width={10} height={10} />
      </button>
    </Styled.Container>
  )
}
