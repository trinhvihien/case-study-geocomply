# Case-study-geocomply

-   Automation for case study, upload file for geo comply
-   This project is written in Typescript, Node JS and using playwright integrated with Cucumber JS for BDD testing.
-   Report HTML is generated after tests
-   Prettier for formating code
-   Page Object are using for easy maintainance code.
-   [Structure](project.structure.md)
-   [Bugs](#file-upload-bugs)
-   [Test Plan](./test-plan/CaseStudyTestPlan.pdf)

## Prerequisite

-   install Node js v19
-   install VS code

## Installation

-   open terminal, change to this project directory
-   run command: npm install
-   run cucumber tests: npm run test
-   generate report: npm run report
-   format, lint code: npm run format
-   run playwright test: npm run test:pw

## Test reports

![alt text for screen readers](screenshots/report.png 'html report')
![alt text for screen readers](screenshots/report-details.png 'BDD style')

## File upload Bugs

-   file is not uploaded, the page is calling a delay to fake the upload progress
    ![alt text for screen readers](screenshots/no-file-upload-api-call.png 'api upload not found')
-   allow user uploads without accept terms
-   no whitelisted acceptable upload file
-   executable file is allowed
-   no size limit validation

## Geo comply website bugs

-   when user lost a password, click on get new password. page not found
    ![alt text for screen readers](screenshots/lost-and-get-new-pwd.png 'page not found').

-   when scroll down, the menu is not disappearing on top.
    ![alt text for screen readers](screenshots/menu-gone-when-scrolling-down.png 'menu is not showed').
