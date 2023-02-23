const emails = require('email-generator');
const generatePassword = require('password-generator');

/**
 * Simple random generator for generating 
 * emails and passwords. Useful for website 
 * account signups, etc.  
 */
class RandomUser {
  generateEmail() {
    let emailName = emails.generateEmail();
    emailName = emailName.replace(/['"]+/g, '');
    return emailName;
  }

  generatePassword() {
    const password = generatePassword();
    return password;
  }
}

export default new RandomUser();