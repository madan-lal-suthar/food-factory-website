import type { ReactNode } from 'react'

type ModalProps = {
  open: boolean
  title?: string
  children: ReactNode
  onClose?: () => void
}

const Modal = ({ open, title, children, onClose }: ModalProps) => {
  if (!open) return null

  return (
    <div role="dialog" aria-modal="true" aria-label={title}>
      <div>
        {title && <h2>{title}</h2>}
        <button type="button" onClick={onClose} aria-label="Close modal">
          Close
        </button>
      </div>
      {children}
    </div>
  )
}

export default Modal
