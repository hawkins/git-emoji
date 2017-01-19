const chalk = require('chalk');
const emojize = require('node-emoji').get;
const emojis = require('./emojis');

module.exports = usage => {
  var results = [];

  // If they supplied a usage case,
  if (usage) {
    // Display specifc emojis for their usage
    var found = false;

    // Print any emojis matching the usage case
    for (var i = 0; i < emojis.length; i++) {
      if (emojis[i].purpose.toLowerCase().indexOf(usage) !== -1) {
        results.push(`${emojize(emojis[i].emoji)} - ${chalk.white(emojis[i].emoji)} - ${chalk.cyan(emojis[i].purpose)}`);
        found = true;
      }
    }

    // If We didn't find any matching the usage case
    if (!found) {
      results.push(chalk.red(`No git emojis found matching ${chalk.white(usage)}.`));
    }
  } else {
    // Otherwise, return all
    emojis.forEach(item => (results.push(`${emojize(item.emoji)} - ${chalk.white(item.emoji)} - ${chalk.cyan(item.purpose)}`)));
  }

  return results;
};
