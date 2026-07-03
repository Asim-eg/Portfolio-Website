import {
  Blocks,
  Bot,
  Braces,
  BrainCircuit,
  Bug,
  Cable,
  Code2,
  CodeXml,
  Container,
  Cpu,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  HardDrive,
  MemoryStick,
  Network,
  PhoneCall,
  RadioTower,
  Router,
  ScanSearch,
  Server,
  ServerCog,
  ShieldCheck,
  SmartphoneNfc,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Panel } from "../components/Panel";
import { profile } from "../lib/content";

const iconByNeedle: Array<[string, LucideIcon]> = [
  ["LLM", Bot],
  ["PROMPT", BrainCircuit],
  ["GENERATED CODE", ScanSearch],
  ["CODE VALIDATION", ScanSearch],
  ["GIT", GitBranch],
  ["BENCHMARK", Gauge],
  ["VALGRIND", Bug],
  ["JENKINS", Terminal],
  ["MEMORY", MemoryStick],
  ["DISTRIBUTED", Network],
  ["REAL-TIME", RadioTower],
  ["EVENT LOOP", Cpu],
  ["LIBUV", Cpu],
  ["C/C++", CodeXml],
  ["SS7", Network],
  ["MAP", Router],
  ["TCAP", Cable],
  ["USSD", PhoneCall],
  ["SIGTRAN", Cable],
  ["HLR", HardDrive],
  ["HSS", HardDrive],
  ["UDM", Server],
  ["UDR", Server],
  ["SIP", PhoneCall],
  ["RTP", PhoneCall],
  ["GSMA", SmartphoneNfc],
  ["ES2", SmartphoneNfc],
  ["SM-DP", SmartphoneNfc],
  ["MTLS", ShieldCheck],
  ["AWS", ServerCog],
  ["GO", Code2],
  ["C++", Braces],
  ["C ", Braces],
  ["LIBUV", Braces],
  ["GRPC", Blocks],
  ["KUBERNETES", Container],
  ["DOCKER", Container],
  ["ORACLE", Database],
  ["POSTGRESQL", Database],
  ["REDIS", Database],
  ["TEMPORAL", Fingerprint],
  ["USM", Server],
  ["CBS", Database],
  ["BSS", Blocks],
];

const groupIcons: Record<string, LucideIcon> = {
  "Systems & languages": Cpu,
  "Telecom & data paths": RadioTower,
  "AI, infra & tooling": BrainCircuit,
  "Infra & tooling": ServerCog,
  "AI-assisted development": BrainCircuit,
  "Signalling & Core": RadioTower,
  "Signalling & core": RadioTower,
  "eSIM / RSP": SmartphoneNfc,
  "Languages & Infra": ServerCog,
};

function iconFor(label: string) {
  const normalized = label.toUpperCase();
  return iconByNeedle.find(([needle]) => normalized.includes(needle))?.[1] ?? RadioTower;
}

function splitItems(items: string) {
  return items
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function Skills() {
  return (
    <Panel className="skills-panel" direction="right" id="skills">
      <div className="panel-heading">
        <h2>{profile.sections.skills}</h2>
      </div>

      <div className="skills-layout">
        <div className="skills-intro">
          <p>
            The stack is grouped by the systems it supports: carrier signalling, remote SIM
            provisioning, backend services, and production data paths.
          </p>
          <div className="skills-meter" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="skill-groups">
          {profile.stack.map((group) => {
            const GroupIcon = groupIcons[group.group] ?? RadioTower;

            return (
              <article className="skill-group" key={group.group}>
                <h3>
                  <span className="skill-group-icon">
                    <GroupIcon aria-hidden="true" size={22} />
                  </span>
                  {group.group}
                </h3>
                <div>
                  {splitItems(group.items).map((item) => {
                    const Icon = iconFor(item);

                    return (
                      <span className="skill-chip" key={item}>
                        <span className="skill-icon-tile">
                          <Icon aria-hidden="true" size={21} />
                        </span>
                        <span>{item}</span>
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
