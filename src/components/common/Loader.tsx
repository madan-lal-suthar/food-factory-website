type LoaderProps = {
  label?: string
}

const Loader = ({ label = 'Loading...' }: LoaderProps) => {
  return <div role="status">{label}</div>
}

export default Loader
