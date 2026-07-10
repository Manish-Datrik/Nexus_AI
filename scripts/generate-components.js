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

const baseDir = path.join(__dirname, '../src/components');

Object.entries(components).forEach(([folder, files]) => {
  const dirPath = path.join(baseDir, folder);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  files.forEach(file => {
    const filePath = path.join(dirPath, `${file}.tsx`);
    if (!fs.existsSync(filePath)) {
      const template = `import React from 'react';

export interface ${file}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add props here
}

/**
 * ${file} Component
 */
export const ${file} = React.forwardRef<HTMLDivElement, ${file}Props>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={\`\${className}\`} 
        {...props}
      >
        ${file} Component
      </div>
    );
  }
);

${file}.displayName = '${file}';
`;
      fs.writeFileSync(filePath, template);
      console.log(`Created ${folder}/${file}.tsx`);
    }
  });

  // Update index.ts for the folder
  const indexFilePath = path.join(dirPath, 'index.ts');
  let indexContent = fs.existsSync(indexFilePath) ? fs.readFileSync(indexFilePath, 'utf8') : '';
  
  files.forEach(file => {
    const exportLine = `export * from './${file}';\n`;
    if (!indexContent.includes(exportLine)) {
      indexContent += exportLine;
    }
  });
  
  fs.writeFileSync(indexFilePath, indexContent);
});

// Update main index.ts
const mainIndexFile = path.join(baseDir, 'index.ts');
let mainIndexContent = fs.existsSync(mainIndexFile) ? fs.readFileSync(mainIndexFile, 'utf8') : '';

Object.keys(components).forEach(folder => {
  const exportLine = `export * from './${folder}';\n`;
  if (!mainIndexContent.includes(exportLine)) {
    mainIndexContent += exportLine;
  }
});

fs.writeFileSync(mainIndexFile, mainIndexContent);
console.log('Finished scaffolding components.');
