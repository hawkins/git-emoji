#!/usr/bin/env node
const ge = require('./git-emojis');

// Process arguments
var usage;
for (var i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === '--help' || process.argv[i] === '-h') {
    // Print usage
    console.log('Usage: git-emojis [usage]');
  } else {
    // Otherwise, set usage to this
    usage = process.argv[i].toLowerCase();
  }
}

// Call tool
const results = ge(usage);
results.forEach(item => (console.log(item)));
