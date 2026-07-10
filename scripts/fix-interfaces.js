const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to replace:
      // export interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {
      //   // Add props here
      // }
      // With:
      // export type ComponentNameProps = React.HTMLAttributes<HTMLDivElement>;
      
      content = content.replace(
        /export interface (\w+)Props extends React\.HTMLAttributes<HTMLDivElement> {\s*\/\/[^\n]*\s*}/g,
        'export type $1Props = React.HTMLAttributes<HTMLDivElement>;'
      );
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, '../src/components'));
console.log('Fixed interfaces in components.');
