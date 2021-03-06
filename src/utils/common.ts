const path = require('path');
const fs = require('fs');



export function checkAndReturnTemplateFile() {
  const currentDir = process.cwd();
  const index = process.argv.indexOf('-t') || process.argv.indexOf('--template');
  if (index !== -1) {
    const tempFileIndex = index + 1;
    const tempFileName = process.argv[tempFileIndex];
    if (tempFileName) {
      if (tempFileName.endsWith('.yaml') || tempFileName.endsWith('.yml')) {
        if (fs.existsSync(path.join(currentDir, tempFileName))) {
          process.argv.splice(index, 2);
          return path.join(currentDir, tempFileName);
        } else if (fs.existsSync(tempFileName)) {
          process.argv.splice(index, 2);
          return tempFileName;
        }
      }
    }
  }
  if (fs.existsSync(path.join(currentDir, 'template.yaml'))) {
    return path.join(currentDir, 'template.yaml');
  }
  if (fs.existsSync(path.join(currentDir, 'template.yml'))) {
    return path.join(currentDir, 'template.yml');
  }
  return null;
}

export function checkTemplateFile(templateFile: string) {
  if (fs.existsSync(templateFile)) {
    return templateFile;
  }
  return null;
}


export function printn(n: number, str = ' ') {
  let temp_str = '';
  for (let i = 0;i < n;i++) {
    temp_str = temp_str + str;
  }
  return temp_str;
}