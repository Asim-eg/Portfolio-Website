import { Activity, Download, Radio } from "lucide-react";
import { CoreRing } from "../components/CoreRing";
import { FadeIn, GradientButton, GhostButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile } from "../lib/content";

export function Hero() {
  return (
    <Panel className="hero-panel" direction="up" id="top">
      <CoreRing />

      <div className="hero-grid">
        <div className="hero-copy">
          <FadeIn delay={0.08} y={24}>
            <h1 className="hero-title">{profile.heroIntro}</h1>
          </FadeIn>

          <FadeIn delay={0.18} y={24}>
            <p className="hero-kicker">
              {profile.heroKicker.split(profile.heroKickerHighlight)[0]}
              <span>{profile.heroKickerHighlight}</span>
              {profile.heroKicker.split(profile.heroKickerHighlight)[1]}
            </p>
          </FadeIn>

          <FadeIn delay={0.28} y={24}>
            <div className="hero-role">
              <Radio aria-hidden="true" size={17} />
              {profile.tagline}
            </div>
            <p className="hero-sub">{profile.heroSub}</p>
          </FadeIn>

          <FadeIn className="hero-actions" delay={0.38} y={24}>
            <GradientButton href="#contact">{profile.actions.contact}</GradientButton>
            <GhostButton href={profile.resume}>
              <Download aria-hidden="true" size={16} />
              {profile.actions.downloadResume}
            </GhostButton>
          </FadeIn>
        </div>

        <FadeIn className="portrait-frame" delay={0.18} x={52} y={0}>
          <div className="portrait-orbit" />
          <img alt={profile.name} src={profile.portrait} />
        </FadeIn>
      </div>

      <FadeIn className="hero-stats" delay={0.46} y={20}>
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <Activity aria-hidden="true" size={15} />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </FadeIn>
    </Panel>
  );
}
