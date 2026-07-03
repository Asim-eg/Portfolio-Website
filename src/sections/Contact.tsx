import { FileText, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { FadeIn, GhostButton } from "../components/Motion";
import { Panel } from "../components/Panel";
import { profile, ui } from "../lib/content";

export function Contact() {
  return (
    <Panel className="contact-panel" direction="up" id="contact">
      <h2 className="contact-title">{profile.sections.contact}</h2>

      <FadeIn className="contact-copy" delay={0.12}>
        <p>{profile.contactSub}</p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <a aria-label={ui.contact.emailAria} className="contact-email" href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" size={24} />
          {profile.email}
        </a>
      </FadeIn>

      <FadeIn className="contact-actions" delay={0.3}>
        <GhostButton href={`https://wa.me/${profile.whatsapp}`} rel="noreferrer" target="_blank">
          <MessageCircle aria-hidden="true" size={17} />
          {ui.contact.buttons[0].label}
        </GhostButton>
        <GhostButton href={profile.linkedin} rel="noreferrer" target="_blank">
          <Linkedin aria-hidden="true" size={17} />
          {ui.contact.buttons[1].label}
        </GhostButton>
        <GhostButton href={profile.github} rel="noreferrer" target="_blank">
          <Github aria-hidden="true" size={17} />
          {ui.contact.buttons[2].label}
        </GhostButton>
        <GhostButton aria-label="Open Asim's resume" href={profile.resume} rel="noreferrer" target="_blank" title="Open Asim's resume">
          <FileText aria-hidden="true" size={17} />
          {ui.contact.buttons[3].label}
        </GhostButton>
      </FadeIn>

      <FadeIn delay={0.42}>
        <p className="contact-footer">
          {profile.location} · {profile.availability} · © 2026 {profile.name}
        </p>
      </FadeIn>
    </Panel>
  );
}
