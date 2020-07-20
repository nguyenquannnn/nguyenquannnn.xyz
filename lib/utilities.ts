import { count } from "console";

/**
 * Validate email address
 *
 * @src https://stackoverflow.com/a/16016476/11397842
 * @param emailAddress Email address to validate
 */
export function checkEmail(emailAddress) {
  var sQtext = "[^\\x0d\\x22\\x5c\\x80-\\xff]";
  var sDtext = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]";
  var sAtom =
    "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+";
  var sQuotedPair = "\\x5c[\\x00-\\x7f]";
  var sDomainLiteral = "\\x5b(" + sDtext + "|" + sQuotedPair + ")*\\x5d";
  var sQuotedString = "\\x22(" + sQtext + "|" + sQuotedPair + ")*\\x22";
  var sDomain_ref = sAtom;
  var sSubDomain = "(" + sDomain_ref + "|" + sDomainLiteral + ")";
  var sWord = "(" + sAtom + "|" + sQuotedString + ")";
  var sDomain = sSubDomain + "(\\x2e" + sSubDomain + ")*";
  var sLocalPart = sWord + "(\\x2e" + sWord + ")*";
  var sAddrSpec = sLocalPart + "\\x40" + sDomain; // complete RFC822 email address spec
  var sValidEmail = "^" + sAddrSpec + "$"; // as whole string

  var reValidEmail = new RegExp(sValidEmail);

  return reValidEmail.test(emailAddress);
}
/**
 * Parse an ISO date string (i.e. "2019-01-18T00:00:00.000Z",
 * "2019-01-17T17:00:00.000-07:00", or "2019-01-18T07:00:00.000+07:00",
 * which are the same time) and return a JavaScript Date object with the
 * value represented by the string.
 * @src https://stackoverflow.com/a/54751179/11397842
 * @param isoString iso String to convert
 */
export function isoStringToDate(isoString: string): Date {
  // Split the string into an array based on the digit groups.
  let dateParts = isoString.split(/\D+/);

  // Set up a date object with the current time.
  let returnDate = new Date();

  // Manually parse the parts of the string and set each part for the
  // date. Note: Using the UTC versions of these functions is necessary
  // because we're manually adjusting for time zones stored in the
  // string.
  returnDate.setUTCFullYear(parseInt(dateParts[0]));

  // The month numbers are one "off" from what normal humans would expect
  // because January == 0.
  let month = parseInt(dateParts[1]) - 1;
  returnDate.setUTCMonth(month);
  returnDate.setUTCDate(parseInt(dateParts[2]));

  // Set the time parts of the date object.
  returnDate.setUTCHours(parseInt(dateParts[3]));
  returnDate.setUTCMinutes(parseInt(dateParts[4]));
  returnDate.setUTCSeconds(parseInt(dateParts[5]));
  returnDate.setUTCMilliseconds(parseInt(dateParts[6]));

  // Track the number of hours we need to adjust the date by based
  // on the timezone.
  var timezoneOffsetHours = 0;

  // If there's a value for either the hours or minutes offset.
  if (dateParts[7] || dateParts[8]) {
    // Track the number of minutes we need to adjust the date by
    // based on the timezone.
    var timezoneOffsetMinutes = 0;

    // If there's a value for the minutes offset.
    if (dateParts[8]) {
      // Convert the minutes value into an hours value.
      timezoneOffsetMinutes = parseInt(dateParts[8]) / 60;
    }

    // Add the hours and minutes values to get the total offset in
    // hours.
    timezoneOffsetHours = parseInt(dateParts[7]) + timezoneOffsetMinutes;

    // If the sign for the timezone is a plus to indicate the
    // timezone is ahead of UTC time.
    if (isoString.substr(-6, 1) == "+") {
      // Make the offset negative since the hours will need to be
      // subtracted from the date.
      timezoneOffsetHours *= -1;
    }
  }

  // Get the current hours for the date and add the offset to get the
  // correct time adjusted for timezone.
  returnDate.setHours(returnDate.getHours() + timezoneOffsetHours);

  // Return the Date object calculated from the string.
  return returnDate;
}

export function countWords(content: string): number {
  return content.match(/\b\S+\b/g).length
}

export function calcReadTime(content: string): number {
  const avgReadSpeed = 200;
  return Math.round(countWords(content) / avgReadSpeed);
}

export function generateReadTimeMark(readtime: number) {
  const symbolMap = {
    5: "🍫",
    10: "☕",
  }
  let res = ""
  if (readtime > 25) {
    for(let i = 0; i < (readtime % 10); i++) {
      res += symbolMap[10]
    } 
  } else {
    for(let i = 0; i < (readtime % 5); i++) {
      res += symbolMap[5]
    }
  }
  return res;
}