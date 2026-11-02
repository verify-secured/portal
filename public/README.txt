Demo B banking interface simulation

This folder is a standalone HTML, CSS, and JavaScript version of the demo.

To open it:
1. Open this folder in File Explorer.
2. Double-click index.html for the home page, or open a named page such as
   personal.html, banking.html, or account-dashboard.html.

No Vite, Node.js, or installation is required. Keep assets, app.js, and
styles.css beside the HTML pages so the pages and their images continue to
load. The separate dashboard.html file is preserved and is not part of the
Demo Bank simulation.

This is a Demo B interface simulation, not a bank. The retained Bank of
America logo is illustrative only. The sign-in and account screens do not
connect to a bank or process payments. Never enter real banking credentials,
account numbers, or routing numbers. Send/withdraw request summaries are saved
in local browser storage and remain available when you reopen the request-status
page in the same browser. Older saved request records are kept and migrated
automatically. The demo-only signed-in flag lasts for the current browser tab
session and is cleared when that session ends. Full account/routing numbers,
names, and notes are discarded when the form is submitted. Send and
withdrawal forms show a brief processing state followed by a confirmation
overlay; the pending status is simulated and is not a real bank confirmation.
Successful demo sign-in takes a randomly selected 5, 6, 7, or 8 seconds. The
footer is hidden while signed in.
The Statements page groups the sample account activity by year; it is not an
official bank statement. Use Log Out to clear the sign-in flag, and clear this
browser's site storage to remove the simulated requests.
Unfinished account features leave the current page unchanged and temporarily
disable interaction for 9 to 10 seconds, then return to the account balances.
This is a visual demo delay only; it does not process real banking activity.
