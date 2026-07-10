const fs = require('fs');
const path = require('path');

const components = {
  'ui': [
    'SplitButton', 'ButtonGroup', 'PasswordInput', 'SearchInput', 
    'Select', 'MultiSelect', 'Slider', 'DatePicker', 'TimePicker', 
    'FileUpload', 'ResumeUpload', 'OTPInput', 'TagsInput', 'HelperText'
  ],
  'feedback': [
    'Banner', 'CircularProgress', 'Loading', 'SuccessState', 'WarningState'
  ],
  'navigation': [
    'Stepper', 'Accordion', 'Dropdown', 'ContextMenu', 'CommandPalette'
  ],
  'overlay': [
    'ConfirmDialog'
  ],
  'data-display': [
    'GlassCard', 'StatisticCard', 'MetricCard', 'DataGrid', 'Timeline', 
    'ActivityFeed', 'AvatarGroup', 'Chip', 'Tag', 'DescriptionList', 'KeyValuePanel'
  ],
  'layout': [
    'Container', 'Section', 'Grid', 'Stack', 'ScrollArea', 
    'StickyHeader', 'StickyFooter', 'SplitPanel'
  ],
  'charts': [
    'LineChart', 'BarChart', 'AreaChart', 'PieChart', 'RadarChart',
    'ChartContainer', 'ChartTooltip', 'ChartLegend', 'EmptyChart', 'LoadingChart'
  ],
  'enterprise': [
    'WorkspaceSwitcher', 'SearchBox', 'FilterPanel', 'NotificationItem', 
    'ProfileMenu', 'QuickActionCard', 'StatusIndicator', 'AIBadge', 
    'ConfidenceBadge', 'RiskBadge', 'VerificationBadge', 'ProcessingIndicator'
  ],
  'three': [
    'GlassSurface', 'FloatingCard', 'GlowBorder', 'ParticleContainer', 
    'ThreeCanvasWrapper', 'NeuralNodePlaceholder'
  ]
};

let importStatements = [];
let renderSections = [];

Object.entries(components).forEach(([category, files]) => {
  importStatements.push(`import { ${files.join(', ')} } from '@/components/${category}';`);
  
  let sectionContent = `
      <section className="mb-16">
        <h2 className="text-heading font-semibold mb-8 capitalize">{'${category}'.replace('-', ' ')} Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${files.map(file => `
          <div className="p-6 rounded-2xl bg-surface-raised border border-border">
            <h3 className="text-subtitle font-medium mb-4">${file}</h3>
            <div className="flex items-center justify-center p-8 border border-dashed border-border-strong rounded-xl bg-surface">
              <${file} className="text-text-muted" />
            </div>
          </div>
          `).join('\n')}
        </div>
      </section>
  `;
  renderSections.push(sectionContent);
});

const pageContent = `"use client";

import React from 'react';
${importStatements.join('\n')}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-background text-text p-8 md:p-16">
      <header className="mb-16">
        <h1 className="text-display font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
          Nexus AI Playground
        </h1>
        <p className="text-subtitle text-text-muted max-w-2xl">
          A comprehensive overview of all UI components, layouts, and data display elements built for the Nexus AI Design System.
        </p>
      </header>

      <main>
        ${renderSections.join('\n')}
      </main>
    </div>
  );
}
`;

const targetFile = path.join(__dirname, '../src/app/playground/page.tsx');
fs.writeFileSync(targetFile, pageContent);
console.log('Playground page generated successfully.');
