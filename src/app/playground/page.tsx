"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  Radio,
  Skeleton,
  Spinner,
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

const sections = [
  ["overview", "Overview"],
  ["colors", "Colors"],
  ["typography", "Typography"],
  ["buttons", "Buttons"],
  ["inputs", "Inputs"],
  ["selection", "Selection Controls"],
  ["feedback", "Feedback"],
  ["navigation", "Navigation"],
  ["overlay", "Overlay"],
  ["data-display", "Data Display"],
  ["charts", "Charts"],
  ["layout", "Layout"],
  ["enterprise", "Enterprise Components"],
  ["motion", "Motion"],
  ["icons", "Icons"],
  ["three-d", "3D Tokens"]
] as const;

const componentIndex = [
  "Button",
  "IconButton",
  "ButtonGroup",
  "SplitButton",
  "Input",
  "PasswordInput",
  "SearchInput",
  "TextArea",
  "Select",
  "MultiSelect",
  "OTPInput",
  "FileUpload",
  "ResumeUpload",
  "Checkbox",
  "Radio",
  "Switch",
  "Badge",
  "Alert",
  "Progress",
  "Spinner",
  "Skeleton",
  "Toast",
  "Banner",
  "Tabs",
  "Breadcrumb",
  "Pagination",
  "Dropdown",
  "CommandPalette",
  "Dialog",
  "Drawer",
  "Modal",
  "Popover",
  "Tooltip",
  "Card",
  "GlassCard",
  "MetricCard",
  "StatisticCard",
  "Table",
  "DataGrid",
  "Timeline",
  "ActivityFeed",
  "LineChart",
  "BarChart",
  "AreaChart",
  "PieChart",
  "RadarChart",
  "WorkspaceSwitcher",
  "SearchBox",
  "FilterPanel",
  "ProfileMenu",
  "QuickActionCard",
  "GlassSurface",
  "GlowBorder",
  "ParticleContainer"
];

const tokens = [
  ["Background", "--background", "rgb(10 10 12)", "bg-background"],
  ["Surface", "--surface", "rgb(16 16 20)", "bg-surface"],
  ["Raised", "--surface-raised", "rgb(24 24 30)", "bg-surface-raised"],
  ["Primary", "--primary", "rgb(99 102 241)", "bg-primary"],
  ["Secondary", "--secondary", "rgb(168 85 247)", "bg-secondary"],
  ["Accent", "--accent", "rgb(14 165 233)", "bg-accent"],
  ["Success", "--success", "rgb(34 197 94)", "bg-success"],
  ["Warning", "--warning", "rgb(245 158 11)", "bg-warning"],
  ["Danger", "--danger", "rgb(239 68 68)", "bg-danger"],
  ["Glass", "--glass-surface", "rgba surface", "bg-[var(--glass-surface)]"],
  ["Glow", "--glow-primary", "primary halo", "bg-primary/25 shadow-glow-primary"]
] as const;

const employees = [
  ["Maya Chen", "Principal Designer", "Design Systems", "Active", "98%"],
  ["Arjun Mehta", "Staff Frontend Engineer", "Platform", "Review", "91%"],
  ["Sofia Rivera", "Product Lead", "AI Workflows", "Active", "96%"],
  ["Noah Kim", "Research Ops", "People Analytics", "Pending", "84%"],
  ["Iris Walker", "Design Engineer", "Experience", "Active", "94%"]
];

const icons = {
  Product: ["AI", "DS", "API", "ID", "UX", "DB"],
  Actions: ["Add", "Edit", "Send", "Save", "Sync", "More"],
  Status: ["Live", "Warn", "Risk", "Pass", "Lock", "Beta"]
};

type ChartType = "line" | "bar" | "area" | "pie" | "radar";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionShell({
  id,
  title,
  description,
  children
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-border/70 py-12">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-label font-semibold uppercase tracking-widest text-primary">
          Nexus component system
        </p>
        <h2 className="text-title font-semibold leading-tight text-text">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      {children}
    </section>
  );
}

function ShowcaseCard({
  title,
  description,
  children,
  className = ""
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      glass
      className={`min-h-0 border-white/10 bg-[var(--glass-surface)] p-5 shadow-glass ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-text">{title}</h3>
        {description ? (
          <p className="mt-1 text-xs leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </Card>
  );
}

function MiniChart({ type }: { type: ChartType }) {
  if (type === "bar") {
    return (
      <div className="flex h-40 items-end gap-3">
        {[42, 68, 54, 88, 73, 96, 64].map((height, index) => (
          <div key={`${height}-${index}`} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-primary to-accent shadow-glow-accent"
              style={{ height: `${height}%` }}
            />
            <span className="text-[10px] text-subtle">Q{index + 1}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "pie") {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-32 w-32 rounded-full border border-white/10 bg-[conic-gradient(rgb(var(--primary))_0_42%,rgb(var(--accent))_42%_68%,rgb(var(--success))_68%_86%,rgb(var(--warning))_86%_100%)] p-4 shadow-glow-primary">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-surface text-center text-xs font-semibold text-text">
            Hiring mix
          </div>
        </div>
      </div>
    );
  }

  if (type === "radar") {
    return (
      <div className="relative h-40">
        <div className="absolute inset-6 rounded-full border border-border" />
        <div className="absolute inset-10 rounded-full border border-border" />
        <div className="absolute left-1/2 top-2 h-36 w-px bg-border" />
        <div className="absolute left-8 right-8 top-1/2 h-px bg-border" />
        <div className="absolute left-[24%] top-[20%] h-24 w-24 rotate-45 rounded-lg border border-accent/60 bg-accent/20 shadow-glow-accent" />
      </div>
    );
  }

  return (
    <div className="relative h-40 overflow-hidden rounded-md border border-border bg-surface/70">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border)/0.35)_1px,transparent_1px)] bg-[size:36px_36px]" />
      {type === "area" ? (
        <div className="absolute inset-x-4 bottom-4 h-24 rounded-t-[48%] bg-gradient-to-t from-primary/50 to-accent/10" />
      ) : null}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 160">
        <path
          d="M18 118 C58 92 70 44 112 66 C154 88 170 130 214 84 C250 46 270 54 302 28"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

export default function PlaygroundPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const filteredComponents = useMemo(
    () =>
      componentIndex.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 laptop:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="sticky top-0 z-sticky hidden h-screen border-r border-border/80 bg-background/90 p-6 backdrop-blur laptop:block">
          <div className="mb-8">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-sm font-bold text-background shadow-glow-primary">
              NX
            </div>
            <p className="text-sm font-semibold">Nexus AI</p>
            <p className="text-xs text-muted">Design Language</p>
          </div>
          <nav className="space-y-1">
            {sections.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm text-muted transition duration-base hover:bg-surface-raised hover:text-text"
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="px-5 py-6 tablet:px-8 laptop:px-10 desktop:px-14">
          <header className="sticky top-0 z-sticky -mx-5 mb-8 border-b border-border/80 bg-background/85 px-5 py-4 backdrop-blur tablet:-mx-8 tablet:px-8 laptop:-mx-10 laptop:px-10 desktop:-mx-14 desktop:px-14">
            <div className="flex flex-col gap-4 desktop:flex-row desktop:items-center desktop:justify-between">
              <div>
                <Badge tone="primary" className="mb-3">
                  {theme === "dark" ? "Dark theme" : "Light theme"}
                </Badge>
                <h1 className="text-heading font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  Design System
                </h1>
                <p className="mt-2 max-w-3xl text-subtitle leading-snug text-muted">
                  Nexus AI Design Language for enterprise-grade decision
                  intelligence products.
                </p>
              </div>
              <div className="flex flex-col gap-3 tablet:flex-row tablet:items-center">
                <Input
                  aria-label="Search components"
                  placeholder="Search components"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="tablet:w-72"
                />
                <Button
                  variant="outline"
                  onClick={() =>
                    setTheme((current) =>
                      current === "dark" ? "light" : "dark"
                    )
                  }
                >
                  Switch to {theme === "dark" ? "Light" : "Dark"}
                </Button>
              </div>
            </div>
          </header>

          <SectionShell
            id="overview"
            title="A curated internal product language"
            description="The playground is organized as a documentation surface: every section demonstrates usage, states, tokens, and enterprise context without turning the page into a component dump."
          >
            <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
              {[
                ["52", "Reusable exports", "Grouped by production category"],
                ["16", "Showcase sections", "Sticky navigation and deep links"],
                ["2", "Themes", "Token-driven dark and light modes"],
                ["100%", "Demo-ready", "Responsive, searchable, and polished"]
              ].map(([value, label, helper]) => (
                <ShowcaseCard key={label} title={label} description={helper}>
                  <div className="text-title font-semibold text-text">
                    {value}
                  </div>
                </ShowcaseCard>
              ))}
            </div>
            {query ? (
              <ShowcaseCard
                title="Search results"
                description={`${filteredComponents.length} components match "${query}".`}
                className="mt-5"
              >
                <div className="flex flex-wrap gap-2">
                  {filteredComponents.map((item) => (
                    <Badge key={item} tone="info">
                      {item}
                    </Badge>
                  ))}
                </div>
              </ShowcaseCard>
            ) : null}
          </SectionShell>

          <SectionShell
            id="colors"
            title="Color tokens"
            description="Semantic tokens map product meaning to visual treatment across backgrounds, surfaces, actions, data states, glass, and glow."
          >
            <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
              {tokens.map(([name, token, value, swatch]) => (
                <div
                  key={token}
                  className="grid grid-cols-[72px_1fr] gap-4 rounded-md border border-border bg-surface/70 p-4"
                >
                  <div className={`h-16 rounded-md border border-white/10 ${swatch}`} />
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{token}</p>
                    <p className="mt-2 text-xs text-subtle">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="typography"
            title="Typography scale"
            description="A focused enterprise scale balances executive dashboards, dense tables, and readable product workflows."
          >
            <ShowcaseCard title="Text styles" description="Display through code styles use tokenized sizes and weights.">
              {[
                ["Display", "text-display", "Strategic intelligence, clearly framed"],
                ["Heading", "text-heading", "Workforce insights"],
                ["Title", "text-title", "Decision quality dashboard"],
                ["Subtitle", "text-subtitle", "Explainable recommendations"],
                ["Body", "text-body", "Readable product copy for repeated daily use."],
                ["Caption", "text-caption", "Updated 4 minutes ago"],
                ["Label", "text-label", "CONFIDENCE SCORE"],
                ["Code", "text-code font-mono", "nexus.component.variant"]
              ].map(([label, className, sample]) => (
                <div
                  key={label}
                  className="grid gap-3 border-b border-border py-4 last:border-b-0 tablet:grid-cols-[160px_1fr]"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {label}
                  </span>
                  <span className={`${className} leading-tight text-text`}>
                    {sample}
                  </span>
                </div>
              ))}
            </ShowcaseCard>
          </SectionShell>

          <SectionShell
            id="buttons"
            title="Buttons"
            description="Buttons are shown as real actions with variants, sizes, states, icon affordances, grouped actions, and split decisions."
          >
            <div className="grid gap-5 desktop:grid-cols-[1.4fr_1fr]">
              <ShowcaseCard title="Variants" description="Primary actions stay rare; secondary and ghost variants support dense enterprise workflows.">
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button className="bg-success text-background hover:bg-success/90">
                    Success
                  </Button>
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Sizes and icon actions">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <IconButton label="Add automation" icon={<span>+</span>} />
                  <IconButton label="Approve" variant="primary" icon={<span>OK</span>} />
                  <IconButton label="Reject" variant="danger" icon={<span>X</span>} />
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Button group" description="Segmented task actions composed from the same Button primitive.">
                <div className="inline-flex overflow-hidden rounded-md border border-border">
                  <Button variant="ghost" className="rounded-none border-r border-border">
                    Summary
                  </Button>
                  <Button variant="ghost" className="rounded-none border-r border-border">
                    Evidence
                  </Button>
                  <Button variant="ghost" className="rounded-none">
                    Audit
                  </Button>
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Split button" description="Primary path plus secondary menu affordance.">
                <div className="inline-flex overflow-hidden rounded-md shadow-glow-primary">
                  <Button className="rounded-r-none">Publish decision</Button>
                  <Button className="rounded-l-none border-l border-background/20 px-3">
                    v
                  </Button>
                </div>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="inputs"
            title="Inputs"
            description="Input examples use real fields for employee search, validation, secure entry, selection, upload, and verification workflows."
          >
            <div className="grid gap-5 desktop:grid-cols-3">
              <ShowcaseCard title="Text field states">
                <div className="space-y-4">
                  <Input placeholder="Employee name" defaultValue="Maya Chen" />
                  <Input placeholder="Focused field" />
                  <Input disabled placeholder="Disabled" />
                  <Input invalid defaultValue="missing-email" />
                  <Input className="border-success" defaultValue="maya@nexus.ai" />
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Specialized inputs">
                <div className="space-y-4">
                  <Input type="password" defaultValue="secure-password" />
                  <Input type="search" placeholder="Search employees" />
                  <TextArea defaultValue="Candidate has strong systems thinking and clear communication signals." />
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Selection and upload">
                <div className="space-y-4">
                  <select className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-text">
                    <option>Design Systems</option>
                    <option>Platform</option>
                    <option>People Analytics</option>
                  </select>
                  <select multiple className="min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text">
                    <option>Accessibility</option>
                    <option>Performance</option>
                    <option>Security</option>
                  </select>
                  <Input type="text" inputMode="numeric" maxLength={6} defaultValue="482913" />
                  <Input type="file" />
                  <Input type="file" accept=".pdf,.doc,.docx" />
                </div>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="selection"
            title="Selection controls"
            description="Binary, multiple, and mutually exclusive choices shown in compact product settings."
          >
            <div className="grid gap-5 tablet:grid-cols-3">
              <ShowcaseCard title="Checkboxes">
                <label className="flex items-center gap-3 text-sm">
                  <Checkbox defaultChecked /> Include archived roles
                </label>
                <label className="mt-3 flex items-center gap-3 text-sm">
                  <Checkbox /> Show calibration notes
                </label>
              </ShowcaseCard>
              <ShowcaseCard title="Radio group">
                <div className="space-y-3 text-sm">
                  <label className="flex items-center gap-3">
                    <Radio name="cadence" defaultChecked /> Weekly
                  </label>
                  <label className="flex items-center gap-3">
                    <Radio name="cadence" /> Monthly
                  </label>
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Switches">
                <label className="flex items-center justify-between gap-3 text-sm">
                  Live scoring <Switch defaultChecked />
                </label>
                <label className="mt-3 flex items-center justify-between gap-3 text-sm">
                  Debug mode <Switch />
                </label>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="feedback"
            title="Feedback"
            description="Feedback components explain status without drama: calm alerts, progress, loading, skeletons, and semantic badges."
          >
            <div className="grid gap-5 desktop:grid-cols-2">
              <ShowcaseCard title="Alerts and badges">
                <div className="space-y-4">
                  <Alert tone="success" title="Model review complete">
                    124 recommendations passed governance checks.
                  </Alert>
                  <Alert tone="warning" title="Calibration drift detected">
                    Re-run validation before publishing this segment.
                  </Alert>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="success">Active</Badge>
                    <Badge tone="warning">Review</Badge>
                    <Badge tone="danger">Risk</Badge>
                    <Badge tone="info">AI assisted</Badge>
                  </div>
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Progress and loading">
                <div className="space-y-5">
                  <Progress value={72} label="Candidate analysis" />
                  <LoadingIndicator label="Syncing workforce signals" />
                  <div className="flex items-center gap-4">
                    <Spinner />
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </div>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="navigation"
            title="Navigation"
            description="Navigation primitives support switching context, moving through records, and preserving orientation."
          >
            <div className="grid gap-5 desktop:grid-cols-2">
              <ShowcaseCard title="Tabs and breadcrumbs">
                <Breadcrumb className="mb-5">
                  <BreadcrumbItem href="#">People</BreadcrumbItem>
                  <BreadcrumbItem href="#">Roles</BreadcrumbItem>
                  <BreadcrumbItem href="#" current>
                    Staff Engineer
                  </BreadcrumbItem>
                </Breadcrumb>
                <Tabs>
                  <Tab active>Overview</Tab>
                  <Tab>Signals</Tab>
                  <Tab>Audit trail</Tab>
                </Tabs>
              </ShowcaseCard>
              <ShowcaseCard title="Pagination and command surfaces">
                <Pagination className="mb-5">
                  <PaginationButton>Prev</PaginationButton>
                  <PaginationButton active>1</PaginationButton>
                  <PaginationButton>2</PaginationButton>
                  <PaginationButton>3</PaginationButton>
                  <PaginationButton>Next</PaginationButton>
                </Pagination>
                <div className="rounded-md border border-border bg-surface p-3 text-sm text-muted">
                  Command palette, dropdown, context menu, stepper, and accordion
                  exports are documented in the registry for app-level usage.
                </div>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="overlay"
            title="Overlay"
            description="Overlay patterns are presented as usage specs so dialogs, drawers, modals, popovers, tooltips, and confirmation flows remain purposeful."
          >
            <div className="grid gap-4 tablet:grid-cols-3">
              {["Dialog", "Drawer", "Modal", "Popover", "Tooltip", "ConfirmDialog"].map(
                (item) => (
                  <ShowcaseCard key={item} title={item}>
                    <p className="text-sm text-muted">
                      Use for focused interruption, contextual disclosure, or
                      confirmation. Keep copy direct and actions explicit.
                    </p>
                  </ShowcaseCard>
                )
              )}
            </div>
          </SectionShell>

          <SectionShell
            id="data-display"
            title="Data display"
            description="Cards and tables use real enterprise content, compact density, and clear hierarchy."
          >
            <div className="mb-5 grid gap-5 desktop:grid-cols-4">
              <Card className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted">Default card</p>
                <p className="mt-3 text-title font-semibold">92%</p>
                <p className="text-sm text-muted">Decision confidence</p>
              </Card>
              <Card elevated className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted">Elevated</p>
                <p className="mt-3 text-title font-semibold">18</p>
                <p className="text-sm text-muted">Open reviews</p>
              </Card>
              <Card glass className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted">Glass</p>
                <p className="mt-3 text-title font-semibold">4.8</p>
                <p className="text-sm text-muted">UX quality score</p>
              </Card>
              <Card className="p-5 transition duration-base hover:-translate-y-1 hover:shadow-floating">
                <p className="text-xs uppercase tracking-widest text-muted">Hover card</p>
                <p className="mt-3 text-title font-semibold">+12%</p>
                <p className="text-sm text-muted">Velocity increase</p>
              </Card>
            </div>
            <ShowcaseCard title="Employee table" description="Mock table with sorting affordances, search, status badges, and pagination.">
              <div className="mb-4 flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:justify-between">
                <Input placeholder="Search employees" className="tablet:w-72" />
                <Button variant="outline" size="sm">
                  Sort by confidence
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map(([name, role, team, status, confidence]) => (
                    <TableRow key={name}>
                      <TableCell className="font-medium">{name}</TableCell>
                      <TableCell>{role}</TableCell>
                      <TableCell className="text-muted">{team}</TableCell>
                      <TableCell>
                        <Badge
                          tone={
                            status === "Active"
                              ? "success"
                              : status === "Review"
                                ? "warning"
                                : "info"
                          }
                        >
                          {status}
                        </Badge>
                      </TableCell>
                      <TableCell>{confidence}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination className="mt-4 justify-end">
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
              </Pagination>
            </ShowcaseCard>
          </SectionShell>

          <SectionShell
            id="charts"
            title="Charts"
            description="Beautiful mock charts demonstrate the visual language for analytics without adding charting dependencies."
          >
            <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
              {[
                ["Line", "line"],
                ["Bar", "bar"],
                ["Area", "area"],
                ["Pie", "pie"],
                ["Radar", "radar"]
              ].map(([label, type]) => (
                <ShowcaseCard
                  key={label}
                  title={`${label} chart`}
                  description="Glass card, subtle grid, tokenized color, executive-readable density."
                >
                  <MiniChart type={type as ChartType} />
                </ShowcaseCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="layout"
            title="Layout"
            description="Layout primitives define predictable spacing, responsive grids, sticky regions, scroll containers, and split panels."
          >
            <ShowcaseCard title="Responsive product shell">
              <div className="grid gap-4 desktop:grid-cols-[1fr_1.4fr]">
                <div className="rounded-md border border-border bg-surface p-4">
                  <div className="mb-4 h-8 rounded-md bg-surface-elevated" />
                  <div className="space-y-2">
                    <div className="h-3 rounded bg-primary/40" />
                    <div className="h-3 rounded bg-accent/30" />
                    <div className="h-3 rounded bg-secondary/30" />
                  </div>
                </div>
                <div className="grid gap-3 tablet:grid-cols-3">
                  <div className="h-28 rounded-md border border-border bg-[var(--glass-surface)]" />
                  <div className="h-28 rounded-md border border-border bg-[var(--glass-surface)]" />
                  <div className="h-28 rounded-md border border-border bg-[var(--glass-surface)]" />
                </div>
              </div>
            </ShowcaseCard>
          </SectionShell>

          <SectionShell
            id="enterprise"
            title="Enterprise components"
            description="Domain-specific components are framed as a governed workflow for AI-assisted HR decision intelligence."
          >
            <div className="grid gap-5 desktop:grid-cols-3">
              {[
                ["WorkspaceSwitcher", "Switch between executive, recruiter, and people analytics workspaces."],
                ["RiskBadge", "Make model, policy, and compliance risk legible at scan speed."],
                ["ConfidenceBadge", "Expose confidence without overstating certainty."],
                ["NotificationItem", "Prioritize changes, escalations, and review requests."],
                ["ProfileMenu", "Keep identity and permissions close to the work surface."],
                ["ProcessingIndicator", "Show AI progress with accountable system state."]
              ].map(([title, copy]) => (
                <ShowcaseCard key={title} title={title}>
                  <p className="text-sm text-muted">{copy}</p>
                </ShowcaseCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="motion"
            title="Motion"
            description="Motion remains subtle and useful: hover elevation, scale, fade, slide, spring response, loading, and skeleton states."
          >
            <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
              <ShowcaseCard title="Hover and scale">
                <div className="rounded-md border border-border bg-surface p-5 transition duration-base ease-standard hover:-translate-y-1 hover:scale-[1.02] hover:shadow-floating">
                  Interactive review card
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Fade and slide">
                <div className="animate-pulse rounded-md border border-accent/30 bg-accent/10 p-5 text-sm text-accent">
                  New recommendation available
                </div>
              </ShowcaseCard>
              <ShowcaseCard title="Loading and skeleton">
                <div className="space-y-3">
                  <LoadingIndicator label="Generating summary" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </ShowcaseCard>
            </div>
          </SectionShell>

          <SectionShell
            id="icons"
            title="Icons"
            description="Iconography is grouped by product meaning. The showcase uses compact text glyph tiles because the project does not include an icon package."
          >
            <div className="grid gap-5 desktop:grid-cols-3">
              {Object.entries(icons).map(([group, items]) => (
                <ShowcaseCard key={group} title={group}>
                  <div className="grid grid-cols-3 gap-3">
                    {items.map((item) => (
                      <div
                        key={item}
                        className="flex h-20 flex-col items-center justify-center rounded-md border border-border bg-surface text-xs text-muted"
                      >
                        <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-md bg-surface-elevated font-semibold text-text">
                          {item.slice(0, 2)}
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </ShowcaseCard>
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="three-d"
            title="3D design language"
            description="Specification only: no Three.js implementation is used on this page. These tokens describe how future spatial surfaces should feel."
          >
            <div className="grid gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
              {[
                ["Lighting", "Soft ambient key light with focused directional highlights for premium glass edges."],
                ["Glass", "High transmission, low roughness, restrained blur, and visible border refraction."],
                ["Glow", "Primary and accent glows used as attention, never as full-screen decoration."],
                ["Depth", "Layered cards and z elevation communicate hierarchy before motion is applied."],
                ["Particles", "Sparse particles should clarify AI activity without obscuring content."],
                ["Camera", "45 degree field of view, steady perspective, and spring-based interactions."]
              ].map(([title, copy]) => (
                <ShowcaseCard key={title} title={title}>
                  <p className="text-sm leading-relaxed text-muted">{copy}</p>
                </ShowcaseCard>
              ))}
            </div>
          </SectionShell>
        </main>
      </div>
    </div>
  );
}
