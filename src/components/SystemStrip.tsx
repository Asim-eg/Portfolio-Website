export function SystemStrip({ nodes }: { nodes: string[] }) {
  const count = Math.max(nodes.length - 1, 1);

  return (
    <svg aria-hidden="true" className="system-strip" viewBox="0 0 660 150">
      <path
        className="system-path"
        d="M 52 76 C 176 18, 278 132, 406 76 S 584 44, 622 76"
        fill="none"
        stroke="rgba(215,226,234,0.24)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle className="system-dot" cx="0" cy="0" r="5" />
      {nodes.map((node, index) => {
        const x = 52 + (570 / count) * index;
        const y = index % 2 === 0 ? 55 : 96;

        return (
          <g key={node}>
            <rect height="44" rx="16" width="116" x={x - 58} y={y - 22} />
            <text x={x} y={y + 5}>
              {node}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
