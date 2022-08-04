import ClockIcon from 'src/components/icons/Clock'

import './workload.scss'

interface WorkloadProps {
  workload: number
}

export default function Workload({ workload }: WorkloadProps) {
  return (
    <div className="workload">
      <ClockIcon />
      {`CARGA HORÁRIA: ${workload}h`}
    </div>
  )
}
