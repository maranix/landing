const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (!file.endsWith('.md')) continue;
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove version
        content = content.replace(/^version:\s*".*"\n/m, '');
        
        // Rename aiGeneratedContent -> aiWritten
        content = content.replace(/^aiGeneratedContent:/m, 'aiWritten:');
        
        // Rename aiGeneratedProject -> aiGenerated
        content = content.replace(/^aiGeneratedProject:/m, 'aiGenerated:');
        
        // Fix stack to be array
        const stackMatch = content.match(/^stack:\s*"(.*)"/m);
        if (stackMatch) {
            const stackStr = stackMatch[1];
            // Split by " / " or just assume comma or whatever. Most are "A / B"
            const parts = stackStr.split('/').map(s => s.trim());
            const arrayStr = `[${parts.map(p => `"${p}"`).join(', ')}]`;
            content = content.replace(/^stack:\s*".*"/m, `stack: ${arrayStr}`);
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

processDir('./src/content/project');
processDir('./src/content/blog');
console.log('Done');
