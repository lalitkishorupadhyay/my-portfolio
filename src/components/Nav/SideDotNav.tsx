type Props = {
  sections: string[]
  activeIndex: number
  onDotClick: (i: number) => void
}

export default function SideDotNav({ sections, activeIndex, onDotClick }: Props) {
  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map((label, i) => (
        <button
          key={label}
          aria-label={`Go to ${label}`}
          onClick={() => onDotClick(i)}
          className="w-2.5 h-2.5 rounded-full border border-white/30 transition-all duration-300"
          style={
            i === activeIndex
              ? { background: '#fb923c', boxShadow: '0 0 8px #fb923c', borderColor: '#fb923c' }
              : { background: 'rgba(255,255,255,0.2)' }
          }
        />
      ))}
    </nav>
  )
}
