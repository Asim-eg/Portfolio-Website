import {
  Blocks,
  Braces,
  Cable,
  Code2,
  Container,
  Database,
  Fingerprint,
  HardDrive,
  Network,
  PhoneCall,
  RadioTower,
  Router,
  Server,
  ShieldCheck,
  SmartphoneNfc,
  type LucideIcon,
} from "lucide-react";
import { Panel } from "../components/Panel";
import { profile } from "../lib/content";

const iconByNeedle: Array<[string, LucideIcon]> = [
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
];

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
        <span>02</span>
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
          {profile.stack.map((group) => (
            <article className="skill-group" key={group.group}>
              <h3>{group.group}</h3>
              <div>
                {splitItems(group.items).map((item) => {
                  const Icon = iconFor(item);

                  return (
                    <span className="skill-chip" key={item}>
                      <Icon aria-hidden="true" size={18} />
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}
