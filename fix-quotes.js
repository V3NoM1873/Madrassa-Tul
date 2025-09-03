const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');

const fixed = content
  .replace(/Play Sound: "/g, 'Play Sound: &quot;')
  .replace(/"$/gm, '&quot;')
  .replace(/The letter \{currentQuizLetter\.letter\} is called "/g, 'The letter {currentQuizLetter.letter} is called &quot;')
  .replace(/"Play Example/g, '&quot;Play Example')
  .replace(/className="cursor-pointer hover:shadow-lg transition-all bg-white border-green-200 hover:border-green-300 hover:scale-105"/g, 'className="cursor-pointer hover:shadow-lg transition-all bg-white border-green-200 hover:border-green-300"');

fs.writeFileSync('app/page.tsx', fixed);
console.log('Fixed quotes and CSS classes');
