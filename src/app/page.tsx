"use client";

import React, { useMemo, useState } from "react";
import {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Checkbox,
  IconButton,
  Input,
  LoadingIndicator,
  Pagination,
  PaginationButton,
  Progress,
  Skeleton,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TextArea
} from "@/components";

type View =
  | "landing"
  | "command"
  | "recruitment"
  | "candidate"
  | "decision"
  | "onboarding"
  | "attendance"
  | "leave"
  | "promotion"
  | "workforce"
  | "employee"
  | "analytics"
  | "memory"
  | "settings";

type Tone =
  | "neutral"
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger";

type CandidateStatus = "Screening" | "Interview" | "Offer" | "Rejected";

const navItems: Array<[View, string, string]> = [
  ["landing", "Landing Page", "Premium GTM narrative"],
  ["command", "Command Center", "Executive hiring intelligence"],
  ["recruitment", "Recruitment", "Pipeline and candidate operations"],
  ["candidate", "Digital Twin", "Interactive candidate profile"],
  ["decision", "AI Decision Center", "Mock recommendation workflow"],
  ["onboarding", "Onboarding", "New hire readiness"],
  ["attendance", "Attendance", "Shifts, presence, and trends"],
  ["leave", "Leave", "Balances, approvals, calendars"],
  ["promotion", "Promotion", "Growth and approval workflows"],
  ["workforce", "Workforce Planning", "Headcount and skills strategy"],
  ["employee", "Employee Profile", "Unified employee record"],
  ["analytics", "Analytics", "Executive HR dashboards"],
  ["memory", "Enterprise Memory", "Audit trail and decision replay"],
  ["settings", "Settings", "Workspace controls and security"]
];

const kpis = [
  ["Open Positions", "42", "+8 this month", "primary"],
  ["Hiring Pipeline", "286", "64 high-fit candidates", "info"],
  ["Active Interviews", "31", "12 today", "success"],
  ["Resume Queue", "1,248", "184 awaiting review", "warning"],
  ["Pending Approvals", "9", "3 executive escalations", "danger"]
] as const;

const candidates = [
  {
    name: "Maya Chen",
    role: "Principal Product Designer",
    location: "San Francisco, CA",
    source: "Referral",
    score: 96,
    status: "Offer" as CandidateStatus,
    owner: "Avery Stone",
    skills: ["Systems UX", "Research", "AI tooling", "Design ops"]
  },
  {
    name: "Arjun Mehta",
    role: "Staff Frontend Engineer",
    location: "Bengaluru, IN",
    source: "Inbound",
    score: 93,
    status: "Interview" as CandidateStatus,
    owner: "Priya Nair",
    skills: ["React", "Accessibility", "Performance", "Design systems"]
  },
  {
    name: "Sofia Rivera",
    role: "People Analytics Lead",
    location: "Austin, TX",
    source: "Sourcer",
    score: 89,
    status: "Screening" as CandidateStatus,
    owner: "Miles Carter",
    skills: ["SQL", "Workforce planning", "Storytelling", "Governance"]
  },
  {
    name: "Noah Kim",
    role: "Security Engineering Manager",
    location: "Seattle, WA",
    source: "Agency",
    score: 81,
    status: "Rejected" as CandidateStatus,
    owner: "Lena Ortiz",
    skills: ["Risk", "SOC2", "Leadership", "Cloud security"]
  },
  {
    name: "Iris Walker",
    role: "Senior ML Platform Engineer",
    location: "New York, NY",
    source: "Event",
    score: 94,
    status: "Interview" as CandidateStatus,
    owner: "Owen Brooks",
    skills: ["MLOps", "Python", "Distributed systems", "Mentorship"]
  }
];

const pipeline = [
  ["Applied", 128, "bg-muted"],
  ["Screening", 72, "bg-info"],
  ["Interview", 31, "bg-primary"],
  ["Offer", 9, "bg-success"]
] as const;

const tasks = [
  "Approve offer package for Staff ML Engineer",
  "Review short-list for Revenue Operations Lead",
  "Calibrate interview scorecards for Design Systems",
  "Resolve policy exception on remote compensation band"
];

const activities = [
  ["09:40", "Maya Chen advanced to final panel", "success"],
  ["10:15", "AI flagged duplicate experience claim", "warning"],
  ["11:05", "Offer approved for Platform Engineering", "primary"],
  ["12:20", "New resume batch completed verification", "info"]
] as const;

const profileSections = [
  ["Experience", "Led a 22-person design systems program across product, research, and design engineering. Shipped AI-assisted workflow patterns used by 4,800 employees."],
  ["Education", "M.Des Human Computer Interaction, Carnegie Mellon University. B.S. Cognitive Science, UC San Diego."],
  ["Projects", "Created evidence-first decision review, accessibility governance dashboard, and candidate insights cockpit."],
  ["Certifications", "Certified DesignOps Leader, WCAG Accessibility Specialist, Responsible AI Product Practices."]
] as const;

const twinSignals = [
  ["Learnability", 94, "Learns new domains quickly and applies feedback within one cycle."],
  ["Leadership", 91, "Strong cross-functional influence with calm escalation behavior."],
  ["Communication", 97, "Clear executive storytelling and structured written reasoning."],
  ["Culture Fit", 88, "High alignment with transparency, ownership, and inclusive critique."],
  ["Retention Prediction", 86, "Positive retention indicators based on growth path and role scope."],
  ["AI Confidence", 93, "Evidence quality is high with verified portfolio and references."]
] as const;

const decisionStages = [
  ["Resume", 98, "Complete", "Resume parsed with clean chronology and consistent role progression.", "PDF resume, portfolio URL, referral note", "Structured profile, role history, education, project map"],
  ["Skill Extraction", 94, "Complete", "Skill claims map to portfolio artifacts and peer-reviewed case studies.", "Resume text, project descriptions", "Systems UX, research synthesis, accessibility, design ops"],
  ["Candidate Matching", 92, "Complete", "Strong match against principal-level design systems requirements.", "Job architecture, team needs, competency model", "96 match score, recommended final panel"],
  ["Verification", 90, "In Review", "Employment dates and certifications verified; one reference pending.", "Credential checks, references", "Verified identity, verified education, pending reference"],
  ["Risk Analysis", 84, "Watch", "Low operational risk; medium compensation-band variance to resolve.", "Offer band, location, seniority", "Medium comp variance, low attrition risk"],
  ["Policy Check", 91, "Complete", "No policy conflicts found after compensation exception review.", "Hiring policy, equity guidelines", "Compliant recommendation"],
  ["Final Recommendation", 93, "Recommended", "Proceed to offer with executive calibration on scope and level.", "All workflow signals", "Recommend hire, P4 principal band, 30-day success plan"]
] as const;

const onboardingSteps = [
  ["Offer signed", 100, "Complete", "Signed package and background consent captured."],
  ["Documents", 82, "In progress", "Tax, identity, NDA, and equipment forms."],
  ["Orientation", 64, "Scheduled", "Day-one agenda with product, security, and HR."],
  ["Mentor Assignment", 100, "Complete", "Mentor: Iris Walker, Engineering Systems."],
  ["Training Schedule", 48, "In progress", "Role-based learning path and compliance modules."]
] as const;

const attendanceRows = [
  ["Maya Chen", "Design Systems", "09:02", "17:41", "Present", "8h 39m"],
  ["Arjun Mehta", "Platform", "08:54", "17:36", "Present", "8h 42m"],
  ["Sofia Rivera", "People Analytics", "09:31", "18:02", "Late", "8h 31m"],
  ["Noah Kim", "Security", "-", "-", "Leave", "0h"],
  ["Iris Walker", "ML Platform", "08:47", "17:18", "Present", "8h 31m"]
] as const;

const leaveRows = [
  ["Noah Kim", "Annual Leave", "Jul 14 - Jul 18", "5 days", "Pending"],
  ["Lena Ortiz", "Sick Leave", "Jul 11", "1 day", "Approved"],
  ["Priya Nair", "Remote Work", "Jul 15 - Jul 16", "2 days", "Review"],
  ["Miles Carter", "Parental Leave", "Aug 01 - Sep 15", "46 days", "Approved"]
] as const;

const promotionRows = [
  ["Iris Walker", "Senior ML Platform Engineer", "Staff Engineer", "94", "Panel Review"],
  ["Arjun Mehta", "Staff Frontend Engineer", "Principal Engineer", "91", "Manager Approved"],
  ["Sofia Rivera", "People Analytics Lead", "Director", "88", "Calibration"],
  ["Maya Chen", "Principal Product Designer", "Design Fellow", "96", "Executive Review"]
] as const;

const workforceRows = [
  ["Engineering", 184, "+22", "AI systems, security", "43% women"],
  ["Product", 62, "+8", "Growth PM, pricing", "51% women"],
  ["Design", 38, "+5", "Research ops, systems", "58% women"],
  ["People", 44, "+6", "Analytics, HRBP", "64% women"],
  ["Sales", 128, "+18", "Enterprise AE, solutions", "46% women"]
] as const;

const employeeTimeline = [
  ["2021", "Joined Nexus AI as Senior Designer"],
  ["2022", "Launched unified design token governance"],
  ["2023", "Promoted to Principal Product Designer"],
  ["2024", "Led AI decision review cockpit"],
  ["2026", "Nominated for Design Fellow track"]
] as const;

const analyticsMetrics = [
  ["Hiring Time", "27 days", 72, "primary"],
  ["Cost Per Hire", "$6.4k", 61, "info"],
  ["Offer Acceptance", "84%", 84, "success"],
  ["Employee Retention", "91%", 91, "success"],
  ["Recruitment Funnel", "22%", 58, "warning"],
  ["Productivity Saved", "1,840h", 88, "primary"],
  ["HR Workload Reduction", "37%", 76, "secondary"],
  ["Diversity Metrics", "52%", 69, "info"]
] as const;

const memoryRows = [
  ["Decision", "Maya Chen offer approved", "Avery Stone", "Today 11:05", "Evidence: 18 signals"],
  ["Audit", "Policy override reviewed", "Legal Ops", "Yesterday 16:42", "Comp band exception"],
  ["Candidate", "Arjun Mehta interview loop updated", "Priya Nair", "Jul 08", "Panel score: 4.6"],
  ["Promotion", "Iris Walker calibration packet", "Owen Brooks", "Jul 07", "Ready for panel"],
  ["Leave", "Noah Kim annual leave request", "Lena Ortiz", "Jul 06", "Manager pending"]
] as const;

const settingsGroups = [
  ["Workspace", "Executive Command", "Default timezone, theme, regions, and operating model."],
  ["Team", "128 members", "Recruiters, HRBPs, executives, legal, and finance observers."],
  ["Roles", "9 role templates", "Granular access for hiring, approvals, analytics, and audit."],
  ["Permissions", "Least privilege", "Approval gates, data scopes, and sensitive-field masking."],
  ["Notifications", "16 rules", "Slack-style alerts, email digests, and escalation windows."],
  ["Integrations", "6 connected", "ATS, calendar, SSO, HRIS, background check, payroll."],
  ["API Keys", "2 active", "Rotated keys for sandbox integrations and reporting exports."]
] as const;

function statusTone(status: CandidateStatus | string): Tone {
  if (status === "Offer" || status === "Complete" || status === "Recommended" || status === "Approved" || status === "Present") {
    return "success";
  }
  if (status === "Interview" || status === "In Review" || status === "Review" || status === "Scheduled" || status === "Panel Review" || status === "Manager Approved") {
    return "primary";
  }
  if (status === "Screening" || status === "Calibration") return "info";
  if (status === "Watch" || status === "Pending" || status === "Late" || status === "In progress") return "warning";
  return "danger";
}

function ShellCard({
  title,
  description,
  children,
  action,
  className = ""
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card glass className={`border-white/10 bg-[var(--glass-surface)] shadow-glass ${className}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-text">{title}</h2>
          {description ? (
            <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
          ) : null}
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}

function MetricGrid({
  items
}: {
  items: ReadonlyArray<readonly [string, string, string, string]>;
}) {
  return (
    <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
      {items.map(([label, value, helper, tone]) => (
        <ShellCard key={label} title={label}>
          <div className="text-title font-semibold">{value}</div>
          <Badge tone={tone as Tone} className="mt-3">
            {helper}
          </Badge>
        </ShellCard>
      ))}
    </div>
  );
}

function MiniChart({
  label,
  value,
  tone = "primary",
  variant = "bar"
}: {
  label: string;
  value: number;
  tone?: Tone;
  variant?: "bar" | "line" | "donut";
}) {
  if (variant === "donut") {
    return (
      <div className="flex items-center gap-5">
        <div
          className="h-24 w-24 rounded-full p-3 shadow-glow-primary"
          style={{
            background: `conic-gradient(rgb(var(--primary)) 0 ${value}%, rgb(var(--surface-elevated)) ${value}% 100%)`
          }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-surface text-sm font-semibold">
            {value}%
          </div>
        </div>
        <div>
          <Badge tone={tone}>{label}</Badge>
          <p className="mt-2 text-sm text-muted">Rolling 90-day executive signal.</p>
        </div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="relative h-28 overflow-hidden rounded-md border border-border bg-surface/70">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border)/0.35)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 260 112">
          <path
            d="M10 84 C42 58 56 36 88 54 C120 72 130 92 164 54 C190 26 216 42 250 22"
            fill="none"
            stroke="rgb(var(--accent))"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>{label}</span>
        <Badge tone={tone}>{value}%</Badge>
      </div>
      <Progress value={value} />
    </div>
  );
}

function TimelineList({
  rows
}: {
  rows: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <div className="space-y-4">
      {rows.map(([time, event], index) => (
        <div key={event} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-xs font-semibold text-primary">
              {index + 1}
            </span>
            {index < rows.length - 1 ? <span className="h-10 w-px bg-border" /> : null}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{time}</p>
            <p className="mt-1 text-sm text-text">{event}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillRadar() {
  return (
    <div className="relative mx-auto h-72 max-w-sm">
      <div className="absolute inset-4 rounded-full border border-border" />
      <div className="absolute inset-12 rounded-full border border-border" />
      <div className="absolute inset-20 rounded-full border border-border" />
      <div className="absolute left-1/2 top-4 h-64 w-px bg-border" />
      <div className="absolute left-4 right-4 top-1/2 h-px bg-border" />
      <div className="absolute left-[22%] top-[18%] h-44 w-44 rotate-45 rounded-2xl border border-primary/70 bg-primary/20 shadow-glow-primary" />
      {["Strategy", "UX", "Data", "Ops"].map((label, index) => (
        <span
          key={label}
          className="absolute rounded-full border border-border bg-surface px-2 py-1 text-xs text-muted"
          style={[
            { left: "42%", top: "0%" },
            { right: "0%", top: "45%" },
            { left: "43%", bottom: "0%" },
            { left: "0%", top: "45%" }
          ][index]}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function CommandCenter() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={kpis} />
      <div className="grid gap-6 desktop:grid-cols-[1.2fr_0.8fr]">
        <ShellCard title="Hiring Pipeline" description="Executive view of candidate movement and current conversion pressure." action={<Button size="sm">Open analytics</Button>}>
          <div className="space-y-4">
            {pipeline.map(([label, value, color]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span>{label}</span>
                  <span className="text-muted">{value}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface-elevated">
                  <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min(100, value)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ShellCard>
        <ShellCard title="AI Recommendation Summary" description="Mock explainability overview for leadership review.">
          <Alert tone="success" title="Recommendation quality is improving">
            84% of this week&apos;s recommendations include verified evidence from at least three independent candidate signals.
          </Alert>
          <div className="mt-5 grid gap-3 tablet:grid-cols-3 desktop:grid-cols-1">
            {["Hire 12", "Hold 7", "Reject 18"].map((item) => (
              <div key={item} className="rounded-md border border-border bg-surface/80 p-3 text-sm">{item}</div>
            ))}
          </div>
        </ShellCard>
      </div>
      <div className="grid gap-6 desktop:grid-cols-3">
        <ShellCard title="Today&apos;s Tasks">
          <div className="space-y-3">
            {tasks.map((task) => (
              <label key={task} className="flex items-start gap-3 text-sm">
                <Checkbox className="mt-0.5" />
                <span>{task}</span>
              </label>
            ))}
          </div>
        </ShellCard>
        <ShellCard title="Recent Activity">
          <div className="space-y-4">
            {activities.map(([time, text, tone]) => (
              <div key={text} className="flex gap-3 text-sm">
                <Badge tone={tone as Tone}>{time}</Badge>
                <span className="text-muted">{text}</span>
              </div>
            ))}
          </div>
        </ShellCard>
        <ShellCard title="Quick Actions">
          <div className="grid gap-3">
            <Button>Upload resumes</Button>
            <Button variant="outline">Create requisition</Button>
            <Button variant="outline">Schedule calibration</Button>
            <Button variant="ghost">Export board report</Button>
          </div>
        </ShellCard>
      </div>
    </div>
  );
}

function RecruitmentWorkspace() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const filtered = useMemo(
    () =>
      candidates.filter(
        (candidate) =>
          (status === "All" || candidate.status === status) &&
          `${candidate.name} ${candidate.role} ${candidate.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query, status]
  );

  return (
    <div className="space-y-6 nx-animate-slide-up">
      <ShellCard title="Candidate Operations" description="Search, filter, sort, and move candidates through the active hiring funnel." action={<Button size="sm">Bulk advance</Button>}>
        <div className="mb-5 grid gap-3 desktop:grid-cols-[1fr_220px_180px]">
          <Input aria-label="Search candidates" placeholder="Search by candidate, role, or skill" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select className="h-10 rounded-md border border-border bg-surface px-3 text-sm text-text" value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter by status">
            {["All", "Screening", "Interview", "Offer", "Rejected"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <Button variant="outline">Sort by score</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead><Checkbox aria-label="Select all candidates" /></TableHead>
              <TableHead>Candidate</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((candidate) => (
              <TableRow key={candidate.name}>
                <TableCell><Checkbox aria-label={`Select ${candidate.name}`} /></TableCell>
                <TableCell>
                  <div className="font-medium">{candidate.name}</div>
                  <div className="text-xs text-muted">{candidate.location}</div>
                </TableCell>
                <TableCell>{candidate.role}</TableCell>
                <TableCell><Badge tone={statusTone(candidate.status)}>{candidate.status}</Badge></TableCell>
                <TableCell>{candidate.score}</TableCell>
                <TableCell className="text-muted">{candidate.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-5 justify-end">
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
        </Pagination>
      </ShellCard>
      <div className="grid gap-6 desktop:grid-cols-[0.75fr_1.25fr]">
        <ShellCard title="Resume Upload UI" description="Mock intake area using local-only browser controls.">
          <div className="rounded-md border border-dashed border-border-strong bg-surface/80 p-6 text-center">
            <p className="text-sm font-medium">Drop resumes or browse files</p>
            <p className="mt-2 text-xs text-muted">PDF, DOCX, and portfolio bundles supported.</p>
            <Input type="file" multiple className="mt-5" />
          </div>
          <div className="mt-4"><LoadingIndicator label="Ready for local mock upload" /></div>
        </ShellCard>
        <ShellCard title="Pipeline View">
          <div className="grid gap-4 tablet:grid-cols-4">
            {pipeline.map(([label, value]) => (
              <div key={label} className="rounded-md border border-border bg-surface/80 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium">{label}</span>
                  <Badge tone="info">{value}</Badge>
                </div>
                <div className="space-y-3">
                  {candidates
                    .filter((candidate) => label === "Applied" ? candidate.status === "Screening" : candidate.status === label)
                    .slice(0, 2)
                    .map((candidate) => (
                      <div key={candidate.name} className="rounded-md bg-surface-raised p-3 text-xs">
                        <div className="font-medium text-text">{candidate.name}</div>
                        <div className="mt-1 text-muted">{candidate.role}</div>
                      </div>
                    ))}
                  <Skeleton className="h-12" />
                </div>
              </div>
            ))}
          </div>
        </ShellCard>
      </div>
    </div>
  );
}

function CandidateDigitalTwin() {
  const candidate = candidates[0];
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <div className="grid gap-6 desktop:grid-cols-[0.85fr_1.15fr]">
        <ShellCard title="Candidate Digital Twin" description="Interactive profile built from realistic mock evidence and explainable scoring.">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-lg font-bold text-background">MC</div>
            <div>
              <h2 className="text-title font-semibold">{candidate.name}</h2>
              <p className="text-sm text-muted">{candidate.role}</p>
              <p className="mt-1 text-xs text-subtle">{candidate.location}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="success">Identity verified</Badge>
            <Badge tone="success">Education verified</Badge>
            <Badge tone="warning">Reference pending</Badge>
            <Badge tone="info">AI confidence 93%</Badge>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {candidate.skills.map((skill) => <Badge key={skill} tone="primary">{skill}</Badge>)}
          </div>
        </ShellCard>
        <ShellCard title="Skill Radar"><SkillRadar /></ShellCard>
      </div>
      <div className="grid gap-6 desktop:grid-cols-3">
        {twinSignals.map(([label, value, detail]) => (
          <ShellCard key={label} title={label}>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-title font-semibold">{value}%</span>
              <Switch defaultChecked aria-label={`${label} signal enabled`} />
            </div>
            <Progress value={value} />
            <p className="mt-3 text-xs leading-relaxed text-muted">{detail}</p>
          </ShellCard>
        ))}
      </div>
      <ShellCard title="Expandable Evidence Sections">
        <div className="space-y-3">
          {profileSections.map(([title, body]) => (
            <details key={title} className="rounded-md border border-border bg-surface/80 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-text">{title}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
            </details>
          ))}
        </div>
      </ShellCard>
    </div>
  );
}

function DecisionCenter() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <ShellCard title="AI Decision Center" description="Mock visual workflow. No model, API, or backend is connected." action={<Badge tone="info">Simulation</Badge>}>
        <div className="grid gap-4">
          {decisionStages.map(([stage, confidence, status, reasoning, inputs, outputs], index) => (
            <div key={stage}>
              <details className="rounded-md border border-border bg-surface/80 p-4">
                <summary className="cursor-pointer">
                  <div className="inline-flex w-full flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-sm font-semibold text-primary">{index + 1}</span>
                      <span className="font-semibold">{stage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge tone={statusTone(status)}>{status}</Badge>
                      <span className="text-sm text-muted">{confidence}%</span>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 grid gap-4 desktop:grid-cols-3">
                  {[["Reasoning", reasoning], ["Inputs", inputs], ["Outputs", outputs]].map(([label, copy]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-text">{copy}</p>
                    </div>
                  ))}
                </div>
                <Progress value={confidence} className="mt-4" />
              </details>
              {index < decisionStages.length - 1 ? <div className="mx-8 h-6 w-px bg-border" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </ShellCard>
    </div>
  );
}

function OnboardingModule() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={[["Ready to Start", "18", "New hires this month", "success"], ["Documents", "82%", "Completion rate", "primary"], ["Training Hours", "146", "Scheduled this week", "info"], ["Mentors", "12", "Active assignments", "secondary"]]} />
      <div className="grid gap-6 desktop:grid-cols-[1fr_0.8fr]">
        <ShellCard title="Onboarding Checklist" description="Role-based readiness plan for every new hire.">
          <div className="space-y-4">
            {onboardingSteps.map(([label, value, status, detail]) => (
              <label key={label} className="block rounded-md border border-border bg-surface/80 p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex items-start gap-3 text-sm">
                    <Checkbox defaultChecked={value === 100} className="mt-0.5" />
                    <span><span className="block font-medium">{label}</span><span className="text-xs text-muted">{detail}</span></span>
                  </span>
                  <Badge tone={statusTone(status)}>{status}</Badge>
                </div>
                <Progress value={value} className="mt-3" />
              </label>
            ))}
          </div>
        </ShellCard>
        <ShellCard title="Training Schedule" description="Orientation, security, manager syncs, and mentor sessions.">
          <TimelineList rows={[["Day 1", "Welcome session, device setup, HR orientation"], ["Day 3", "Security, privacy, and responsible AI practices"], ["Week 1", "Mentor pairing and first project walkthrough"], ["Week 2", "Role-specific learning path review"]]} />
        </ShellCard>
      </div>
      <ShellCard title="Documents and Mentor Assignment">
        <div className="grid gap-4 desktop:grid-cols-4">
          {["I-9", "NDA", "Security policy", "Benefits election"].map((doc) => <Badge key={doc} tone="success">{doc} complete</Badge>)}
          <div className="rounded-md border border-border bg-surface p-4 desktop:col-span-4">
            <p className="text-sm font-medium">Mentor: Iris Walker</p>
            <p className="mt-1 text-xs text-muted">First 30-day plan focuses on product context, decision quality, and team rituals.</p>
          </div>
        </div>
      </ShellCard>
    </div>
  );
}

function AttendanceManagement() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={[["Present Today", "428", "94% attendance", "success"], ["Late Arrivals", "17", "-8% vs last week", "warning"], ["On Leave", "31", "Approved absences", "info"], ["Overtime", "126h", "Engineering spike", "primary"]]} />
      <div className="grid gap-6 desktop:grid-cols-[1fr_0.8fr]">
        <ShellCard title="Attendance Table" description="Daily attendance with shift and status details.">
          <Table>
            <TableHeader><TableRow>{["Employee", "Team", "In", "Out", "Status", "Hours"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader>
            <TableBody>
              {attendanceRows.map(([name, team, start, end, status, hours]) => (
                <TableRow key={name}><TableCell className="font-medium">{name}</TableCell><TableCell>{team}</TableCell><TableCell>{start}</TableCell><TableCell>{end}</TableCell><TableCell><Badge tone={statusTone(status)}>{status}</Badge></TableCell><TableCell>{hours}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </ShellCard>
        <ShellCard title="Shift Overview and Calendar">
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {Array.from({ length: 28 }, (_, index) => (
              <div key={index} className={`rounded-md border border-border p-3 ${index % 6 === 0 ? "bg-warning/10 text-warning" : "bg-surface/80"}`}>{index + 1}</div>
            ))}
          </div>
          <div className="mt-5 space-y-3">
            <MiniChart label="Shift coverage" value={91} tone="success" />
            <MiniChart label="Attendance compliance" value={94} tone="primary" />
          </div>
        </ShellCard>
      </div>
    </div>
  );
}

function LeaveManagement() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={[["Annual Balance", "14.5d", "Median remaining", "primary"], ["Pending Requests", "7", "Need manager review", "warning"], ["Approved This Month", "42", "Across teams", "success"], ["Coverage Risk", "2 teams", "Sales and Security", "danger"]]} />
      <div className="grid gap-6 desktop:grid-cols-[1fr_0.8fr]">
        <ShellCard title="Leave Requests and Approval Queue">
          <Table>
            <TableHeader><TableRow>{["Employee", "Type", "Dates", "Duration", "Status"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader>
            <TableBody>
              {leaveRows.map(([name, type, dates, duration, status]) => (
                <TableRow key={name}><TableCell className="font-medium">{name}</TableCell><TableCell>{type}</TableCell><TableCell>{dates}</TableCell><TableCell>{duration}</TableCell><TableCell><Badge tone={statusTone(status)}>{status}</Badge></TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </ShellCard>
        <ShellCard title="Team Calendar and Analytics">
          <div className="grid grid-cols-5 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => <div key={day} className="rounded-md bg-surface-raised p-3 text-center text-xs font-medium">{day}</div>)}
            {Array.from({ length: 15 }, (_, index) => <div key={index} className={`h-16 rounded-md border border-border ${index % 4 === 0 ? "bg-primary/15" : "bg-surface/80"}`} />)}
          </div>
          <div className="mt-5"><MiniChart label="Leave utilization" value={68} tone="info" variant="donut" /></div>
        </ShellCard>
      </div>
    </div>
  );
}

function PromotionModule() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={[["Promotion Candidates", "24", "Ready for panel", "primary"], ["Approved", "11", "This cycle", "success"], ["Calibration", "8", "Needs review", "warning"], ["Internal Mobility", "19%", "+4 points", "info"]]} />
      <ShellCard title="Promotion Candidates and Performance Summary">
        <Table>
          <TableHeader><TableRow>{["Employee", "Current Role", "Proposed Role", "Score", "Workflow"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader>
          <TableBody>
            {promotionRows.map(([name, current, next, score, workflow]) => (
              <TableRow key={name}><TableCell className="font-medium">{name}</TableCell><TableCell>{current}</TableCell><TableCell>{next}</TableCell><TableCell>{score}</TableCell><TableCell><Badge tone={statusTone(workflow)}>{workflow}</Badge></TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </ShellCard>
      <div className="grid gap-6 desktop:grid-cols-2">
        <ShellCard title="Approval Workflow"><TimelineList rows={[["Manager", "Business impact packet submitted"], ["Calibration", "Peer group evidence normalized"], ["Panel", "Leadership review scheduled"], ["Executive", "Compensation and scope sign-off pending"]]} /></ShellCard>
        <ShellCard title="Career Timeline"><TimelineList rows={employeeTimeline} /></ShellCard>
      </div>
    </div>
  );
}

function WorkforcePlanning() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <MetricGrid items={[["Headcount", "456", "+59 forecast", "primary"], ["Skill Gap", "23 roles", "Critical demand", "warning"], ["Hiring Forecast", "74", "Next two quarters", "info"], ["Diversity Index", "58", "+6 YoY", "success"]]} />
      <ShellCard title="Department Overview">
        <Table>
          <TableHeader><TableRow>{["Department", "Headcount", "Forecast", "Skill Gap", "Diversity"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader>
          <TableBody>
            {workforceRows.map(([department, count, forecast, gap, diversity]) => (
              <TableRow key={department}><TableCell className="font-medium">{department}</TableCell><TableCell>{count}</TableCell><TableCell>{forecast}</TableCell><TableCell>{gap}</TableCell><TableCell>{diversity}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </ShellCard>
      <div className="grid gap-6 desktop:grid-cols-3">
        <ShellCard title="Headcount"><MiniChart label="Plan attainment" value={82} tone="primary" variant="donut" /></ShellCard>
        <ShellCard title="Skill Gap"><MiniChart label="Critical coverage" value={64} tone="warning" /></ShellCard>
        <ShellCard title="Hiring Forecast"><MiniChart label="Forecast confidence" value={76} tone="info" variant="line" /></ShellCard>
      </div>
    </div>
  );
}

function EmployeeProfile() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <div className="grid gap-6 desktop:grid-cols-[0.8fr_1.2fr]">
        <ShellCard title="Personal Information">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-lg font-bold text-background">MC</div>
            <div>
              <h2 className="text-title font-semibold">Maya Chen</h2>
              <p className="text-sm text-muted">Principal Product Designer, Design Systems</p>
              <p className="mt-2 text-xs text-subtle">San Francisco, CA | Employee ID NX-1048 | Manager: Avery Stone</p>
            </div>
          </div>
        </ShellCard>
        <ShellCard title="Documents">
          <div className="grid gap-3 tablet:grid-cols-3">
            {["Employment agreement", "Performance packet", "Learning transcript"].map((doc) => <div key={doc} className="rounded-md border border-border bg-surface p-4 text-sm">{doc}<Badge tone="success" className="mt-3 block w-fit">Verified</Badge></div>)}
          </div>
        </ShellCard>
      </div>
      <div className="grid gap-6 desktop:grid-cols-4">
        {["Attendance 96%", "Performance 4.7", "Learning 18h", "Career Growth High"].map((item) => <ShellCard key={item} title={item}><MiniChart label={item} value={item.includes("Learning") ? 72 : 90} tone="primary" /></ShellCard>)}
      </div>
      <ShellCard title="Career Growth"><TimelineList rows={employeeTimeline} /></ShellCard>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
        {analyticsMetrics.map(([label, value, score, tone], index) => (
          <ShellCard key={label} title={label} description={value}>
            <MiniChart label={label} value={score} tone={tone as Tone} variant={index % 3 === 0 ? "line" : index % 3 === 1 ? "donut" : "bar"} />
          </ShellCard>
        ))}
      </div>
    </div>
  );
}

function EnterpriseMemory() {
  const [query, setQuery] = useState("");
  const filtered = memoryRows.filter((row) => row.join(" ").toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <ShellCard title="Enterprise Memory Search" description="Search decision, audit, candidate, promotion, and leave history.">
        <div className="mb-5 grid gap-3 desktop:grid-cols-[1fr_180px]">
          <Input aria-label="Search enterprise memory" placeholder="Search memory events" value={query} onChange={(event) => setQuery(event.target.value)} />
          <Button variant="outline">Replay decision</Button>
        </div>
        <Table>
          <TableHeader><TableRow>{["Type", "Event", "Owner", "Time", "Details"].map((head) => <TableHead key={head}>{head}</TableHead>)}</TableRow></TableHeader>
          <TableBody>
            {filtered.map(([type, event, owner, time, detail]) => (
              <TableRow key={event}><TableCell><Badge tone="primary">{type}</Badge></TableCell><TableCell className="font-medium">{event}</TableCell><TableCell>{owner}</TableCell><TableCell>{time}</TableCell><TableCell className="text-muted">{detail}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </ShellCard>
      <ShellCard title="Replay Decision UI">
        <div className="grid gap-4 desktop:grid-cols-4">
          {["Snapshot", "Evidence", "Policy", "Outcome"].map((step, index) => <div key={step} className="rounded-md border border-border bg-surface p-4"><Badge tone="info">Step {index + 1}</Badge><p className="mt-3 text-sm font-medium">{step}</p><p className="mt-1 text-xs text-muted">Replay preserved decision context and approvals.</p></div>)}
        </div>
      </ShellCard>
    </div>
  );
}

function SettingsModule() {
  return (
    <div className="space-y-6 nx-animate-slide-up">
      <div className="grid gap-6 desktop:grid-cols-3">
        {settingsGroups.map(([title, value, detail]) => (
          <ShellCard key={title} title={title} action={<Switch defaultChecked aria-label={`${title} enabled`} />}>
            <p className="text-title font-semibold">{value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
          </ShellCard>
        ))}
      </div>
      <ShellCard title="Notification Policy and Integration Notes">
        <TextArea defaultValue="Weekly executive digest, daily recruiter workload summary, immediate audit alerts, and monthly access review reminders." />
      </ShellCard>
    </div>
  );
}

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="space-y-12 nx-page-transition-enter">
      <section className="grid min-h-[560px] items-center gap-8 rounded-md border border-border bg-[radial-gradient(circle_at_top_left,rgb(var(--primary)/0.24),transparent_34%),linear-gradient(135deg,rgb(var(--surface-raised)),rgb(var(--surface)))] p-6 shadow-glass desktop:grid-cols-[1fr_0.9fr] desktop:p-12">
        <div>
          <Badge tone="primary">Nexus AI HR Decision Intelligence</Badge>
          <h1 className="mt-5 text-display font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Hire, grow, and govern talent decisions with evidence.
          </h1>
          <p className="mt-5 max-w-2xl text-subtitle leading-snug text-muted">
            A premium command system for recruiting, onboarding, attendance, growth, workforce planning, analytics, and enterprise memory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={onEnter}>Open Command Center</Button>
            <Button size="lg" variant="outline">View workflow</Button>
          </div>
        </div>
        <Card glass className="nx-animate-float border-white/10 bg-[var(--glass-surface)] p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-semibold">AI workflow illustration</span>
            <Badge tone="success">Mock</Badge>
          </div>
          <div className="space-y-3">
            {["Resume intake", "Evidence extraction", "Policy check", "Decision memory"].map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-md border border-border bg-surface/80 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-sm font-semibold text-primary">{index + 1}</span>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
      <MetricGrid items={[["Faster Hiring", "32%", "Reduced cycle time", "success"], ["Lower Workload", "37%", "HR effort saved", "primary"], ["Retention Lift", "11%", "At-risk roles covered", "info"], ["Audit Ready", "100%", "Replayable decisions", "secondary"]]} />
      <div className="grid gap-6 desktop:grid-cols-3">
        {["Problem Statement", "Feature Highlights", "Testimonials"].map((title) => (
          <ShellCard key={title} title={title}>
            <p className="text-sm leading-relaxed text-muted">
              {title === "Problem Statement" ? "Modern HR teams make high-stakes decisions across disconnected tools, partial evidence, and fragile approval trails." : title === "Feature Highlights" ? "Nexus AI unifies command dashboards, recruiting, onboarding, attendance, leave, promotion, planning, analytics, and memory." : "The executive team finally has one trusted operating layer for workforce decisions."}
            </p>
          </ShellCard>
        ))}
      </div>
      <ShellCard title="FAQ and CTA" action={<Button onClick={onEnter}>Start demo</Button>}>
        <div className="grid gap-3 desktop:grid-cols-3">
          {["Does this use live AI?", "Can it connect to HRIS?", "Is audit history replayable?"].map((question) => (
            <details key={question} className="rounded-md border border-border bg-surface p-4">
              <summary className="cursor-pointer text-sm font-semibold">{question}</summary>
              <p className="mt-3 text-sm text-muted">This demo uses local mock data only, with production-quality UI patterns prepared for real integrations.</p>
            </details>
          ))}
        </div>
        <footer className="mt-8 border-t border-border pt-5 text-sm text-muted">Nexus AI | HR Decision Intelligence Platform | Built on the existing design system.</footer>
      </ShellCard>
    </div>
  );
}

export default function Home() {
  const [activeView, setActiveView] = useState<View>("landing");
  const current = navItems.find(([id]) => id === activeView) ?? navItems[0];

  const renderView = () => {
    if (activeView === "landing") return <LandingPage onEnter={() => setActiveView("command")} />;
    if (activeView === "command") return <CommandCenter />;
    if (activeView === "recruitment") return <RecruitmentWorkspace />;
    if (activeView === "candidate") return <CandidateDigitalTwin />;
    if (activeView === "decision") return <DecisionCenter />;
    if (activeView === "onboarding") return <OnboardingModule />;
    if (activeView === "attendance") return <AttendanceManagement />;
    if (activeView === "leave") return <LeaveManagement />;
    if (activeView === "promotion") return <PromotionModule />;
    if (activeView === "workforce") return <WorkforcePlanning />;
    if (activeView === "employee") return <EmployeeProfile />;
    if (activeView === "analytics") return <AnalyticsDashboard />;
    if (activeView === "memory") return <EnterpriseMemory />;
    return <SettingsModule />;
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="grid min-h-screen laptop:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden border-r border-border bg-background/90 p-5 backdrop-blur laptop:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent font-bold text-background shadow-glow-primary">NX</div>
            <div>
              <p className="text-sm font-semibold">Nexus AI</p>
              <p className="text-xs text-muted">HR Decision Intelligence</p>
            </div>
          </div>
          <label className="mb-6 block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted">Workspace</span>
            <select className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-text">
              <option>Executive Command</option>
              <option>Recruiting Operations</option>
              <option>People Analytics</option>
            </select>
          </label>
          <nav className="max-h-[calc(100vh-180px)] space-y-2 overflow-y-auto pr-1" aria-label="Primary navigation">
            {navItems.map(([id, label, helper]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveView(id)}
                className={`w-full rounded-md border px-3 py-3 text-left transition duration-base ease-standard ${
                  activeView === id
                    ? "border-primary/40 bg-primary/10 text-text shadow-glow-primary"
                    : "border-transparent text-muted hover:bg-surface-raised hover:text-text"
                }`}
              >
                <span className="block text-sm font-medium">{label}</span>
                <span className="mt-1 block text-xs text-muted">{helper}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="min-w-0">
          <header className="sticky top-0 z-sticky border-b border-border bg-background/90 px-4 py-4 backdrop-blur tablet:px-6 desktop:px-8">
            <div className="flex flex-col gap-4 desktop:flex-row desktop:items-center desktop:justify-between">
              <div>
                <Breadcrumb>
                  <BreadcrumbItem href="#">Nexus AI</BreadcrumbItem>
                  <BreadcrumbItem href="#" current>{current[1]}</BreadcrumbItem>
                </Breadcrumb>
                <h1 className="mt-3 text-title font-semibold leading-tight">{current[1]}</h1>
              </div>
              <div className="flex flex-col gap-3 tablet:flex-row tablet:items-center">
                <Input aria-label="Global search" placeholder="Search employees, policies, approvals" className="tablet:w-80" />
                <IconButton label="Notifications" variant="outline" icon={<span>9</span>} />
                <Button variant="outline">Avery Stone</Button>
              </div>
            </div>
            <div className="mt-4 laptop:hidden">
              <Tabs className="max-w-full overflow-x-auto">
                {navItems.map(([id, label]) => (
                  <Tab key={id} active={activeView === id} onClick={() => setActiveView(id)}>{label}</Tab>
                ))}
              </Tabs>
            </div>
          </header>
          <main className="nx-page-transition-enter space-y-6 p-4 tablet:p-6 desktop:p-8">
            {activeView !== "landing" ? (
              <div className="grid gap-4 desktop:grid-cols-[1fr_320px]">
                <Alert tone="primary" title="Production mock experience">
                  Reusable components, tokenized styling, responsive layout, and realistic local mock data only. No backend or AI service is connected.
                </Alert>
                <Card className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-muted">Motion</span>
                    <Badge tone="success">Existing nx system</Badge>
                  </div>
                </Card>
              </div>
            ) : null}
            {renderView()}
          </main>
        </div>
      </div>
    </div>
  );
}
