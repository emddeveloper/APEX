const nodes = [
  { left: '14%', top: '24%', delay: '0s' },
  { left: '28%', top: '34%', delay: '0.8s' },
  { left: '43%', top: '26%', delay: '1.4s' },
  { left: '58%', top: '40%', delay: '2s' },
  { left: '76%', top: '30%', delay: '0.4s' },
  { left: '84%', top: '52%', delay: '1.2s' },
  { left: '66%', top: '66%', delay: '2.4s' },
  { left: '38%', top: '58%', delay: '1.8s' },
  { left: '19%', top: '66%', delay: '2.8s' },
]

const lines = [
  { left: '6%', top: '32%', width: '26%' },
  { left: '24%', top: '58%', width: '22%', spark: true },
  { left: '44%', top: '40%', width: '28%' },
  { left: '52%', top: '68%', width: '18%', spark: true },
  { left: '68%', top: '50%', width: '16%' },
]

export default function ElectricBackground() {
  return (
    <div className="hero-grid">
      {nodes.map((node) => (
        <span
          key={`${node.left}-${node.top}`}
          className="pulse-dot"
          style={{ left: node.left, top: node.top, animationDelay: node.delay }}
        />
      ))}
      {lines.map((line) => (
        <span
          key={`${line.left}-${line.top}`}
          className={`signal-line ${line.spark ? 'spark' : ''}`}
          style={{ left: line.left, top: line.top, width: line.width }}
        />
      ))}
    </div>
  )
}
