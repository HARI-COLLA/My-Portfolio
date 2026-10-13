/**
 * Small decorative architecture-style diagrams for each project.
 * Rendered as inline SVG; hidden from screen readers.
 */

type VisualProps = {
  kind: "pipeline" | "serverless" | "eks";
};

const box =
  "fill-night-800 stroke-white/15";
const text = "fill-slate-300";
const arrow = "stroke-accent-400/70";

function Node({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={26} rx={6} className={box} strokeWidth={1} />
      <text x={x + w / 2} y={y + 17} textAnchor="middle" className={text} fontSize={9}>
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={arrow}
      strokeWidth={1.5}
      strokeDasharray="3 3"
      markerEnd="url(#arrowhead)"
    />
  );
}

export default function ProjectVisual({ kind }: VisualProps) {
  return (
    <svg
      viewBox="0 0 400 130"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 z" className="fill-accent-400/70" />
        </marker>
      </defs>

      {kind === "pipeline" && (
        <>
          <Node x={8} y={52} w={62} label="GitHub" />
          <Arrow x1={70} y1={65} x2={88} y2={65} />
          <Node x={92} y={52} w={78} label="GH Actions" />
          <Arrow x1={170} y1={65} x2={188} y2={65} />
          <Node x={192} y={52} w={66} label="Docker" />
          <Arrow x1={258} y1={65} x2={276} y2={65} />
          <Node x={280} y={52} w={52} label="ECR" />
          <Arrow x1={306} y1={52} x2={306} y2={30} />
          <Node x={276} y={4} w={60} label="EKS" />
          <Arrow x1={332} y1={65} x2={352} y2={65} />
          <Node x={356} y={52} w={40} label="ALB" />
          <Node x={8} y={96} w={62} label="Route 53" />
          <Arrow x1={70} y1={109} x2={356} y2={78} />
        </>
      )}

      {kind === "serverless" && (
        <>
          <Node x={8} y={52} w={82} label="React App" />
          <Arrow x1={90} y1={65} x2={108} y2={65} />
          <Node x={112} y={52} w={82} label="API Gateway" />
          <Arrow x1={194} y1={65} x2={212} y2={65} />
          <Node x={216} y={52} w={64} label="Lambda" />
          <Arrow x1={280} y1={65} x2={298} y2={65} />
          <Node x={302} y={52} w={74} label="DynamoDB" />
          <Arrow x1={339} y1={78} x2={339} y2={94} />
          <Node x={302} y={98} w={74} label="Streams" />
          <Arrow x1={302} y1={111} x2={280} y2={111} />
          <Node x={216} y={98} w={64} label="Lambda" />
          <Arrow x1={216} y1={111} x2={194} y2={111} />
          <Node x={128} y={98} w={62} label="SNS" />
          <Node x={8} y={6} w={82} label="Cognito" />
          <Arrow x1={49} y1={32} x2={49} y2={50} />
        </>
      )}

      {kind === "eks" && (
        <>
          <Node x={8} y={52} w={66} label="User" />
          <Arrow x1={74} y1={65} x2={92} y2={65} />
          <Node x={96} y={52} w={96} label="ALB Ingress" />
          <Arrow x1={192} y1={65} x2={210} y2={65} />
          <Node x={214} y={52} w={70} label="Service" />
          <Arrow x1={284} y1={65} x2={302} y2={65} />
          <Node x={306} y={52} w={86} label="Deployment" />
          <Node x={306} y={98} w={86} label="Fargate" />
          <Arrow x1={349} y1={78} x2={349} y2={96} />
          <Node x={214} y={98} w={70} label="IAM OIDC" />
          <Arrow x1={284} y1={111} x2={304} y2={111} />
          <Node x={96} y={98} w={96} label="eksctl VPC" />
          <Arrow x1={144} y1={98} x2={144} y2={80} />
        </>
      )}
    </svg>
  );
}
