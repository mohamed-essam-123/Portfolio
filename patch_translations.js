const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

// ── 1. Fix exp_edu_* and ADD 5 new EN timeline keys ─────────────────────────────
const oldEduLine = '        exp_edu_title: "B.Sc. in Computer Science", exp_edu_org: "Nahda University (NUB)", exp_edu_date: "2022 - 2026 (Expected)", exp_edu_desc: "Specializing in Software Engineering and Database Systems. Active member of technical clubs, completing advanced coursework in Algorithms, Software Design Patterns, and Database Management Systems.",';

const newEduBlock = [
    '        exp_edu_title: "B.Sc. in Computer Science", exp_edu_org: "Nahda University in Beni Suef (NUB)", exp_edu_date: "Oct 2023 - Jul 2027", exp_edu_desc: "Third Year student, GPA: 2.90/4.00. Specializing in Software Engineering and Database Systems.",',
    '        exp_yly_title: "Volunteer", exp_yly_org: "YLY Ministry of Youth and Sports", exp_yly_date: "Aug 2025 - Jun 2026", exp_yly_desc: "High Committee Member: Managed large-scale events and thematic planning. Leader of Competing Team (Eureka) using dynamic problem-solving methodologies to execute events like \\"Code to Cash\\".",',
    '        exp_route_title: "Back-End ASP.NET Trainee", exp_route_org: "Route Academy", exp_route_date: "Jul 2025 - Jan 2026", exp_route_desc: "Developed scalable RESTful APIs using ASP.NET Core and C# following Clean Architecture principles. Optimized database performance using SQL Server, EF Core, and secure JWT Identity systems.",',
    '        exp_ieee_vol_title: "IEEE Student Activity Volunteer", exp_ieee_vol_org: "IEEE Fayoum Student Activity", exp_ieee_vol_date: "Nov 2025 - Jun 2026", exp_ieee_vol_desc: "Participated in technical events and workshops. Worked in team-based academic and organizational activities to build professional communication skills.",',
    '        exp_depi_title: "Full-Stack .NET Trainee", exp_depi_org: "Digital Egypt Pioneers Initiative (DEPI)", exp_depi_date: "Aug 2026 - Jan 2027", exp_depi_desc: "Full-Stack .NET track covering C# and OOP, SQL Server, ASP.NET Core (MVC and Web API), Entity Framework Core, and React. Built hands-on projects using Git/GitHub for version control.",',
    '        exp_self_title: "Front-End Development", exp_self_org: "Self-Learning and Projects", exp_self_date: "Jan 2024 - 2025", exp_self_desc: "Built responsive and interactive web applications using HTML5, CSS3, JavaScript, and React.js. Created reusable components and integrated REST APIs with Git/GitHub for version control.",',
].join('\n');

if (!content.includes(oldEduLine)) {
    console.error('ERROR: Could not find old EN edu line!');
    process.exit(1);
}
content = content.replace(oldEduLine, newEduBlock);
console.log('Step 1 - EN new timeline keys inserted:', content.includes('exp_yly_title') ? 'OK' : 'FAILED');

// ── 2. Add cert_desc_route in EN translation block ───────────────────────────
const oldCertIeeeEN = 'cert_desc_ieee: "IEEE FSB - Certificate of Appreciation (Project Management Committee)"';
const newCertIeeeEN = 'cert_desc_route: "Back-End ASP.NET Certificate - Route Academy", cert_desc_ieee: "IEEE FSB - Certificate of Appreciation (Project Management Committee)"';
if (!content.includes(oldCertIeeeEN)) {
    console.error('ERROR: Could not find EN cert_desc_ieee line!');
    process.exit(1);
}
content = content.replace(oldCertIeeeEN, newCertIeeeEN);
console.log('Step 2 - EN cert_desc_route inserted:', content.includes('cert_desc_route: "Back-End') ? 'OK' : 'FAILED');

// ── 3. Fix AR exp_edu_* and ADD 5 new AR timeline keys ───────────────────────
const oldArEduLine = '        exp_edu_title: "\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633 \u0639\u0644\u0648\u0645 \u0627\u0644\u062d\u0627\u0633\u0628", exp_edu_org: "\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0646\u0647\u0636\u0629 (NUB)", exp_edu_date: "2022 - 2026 (\u0645\u062a\u0648\u0642\u0639)", exp_edu_desc: "\u062a\u062e\u0635\u0635 \u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0648\u0623\u0646\u0638\u0645\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a. \u0639\u0636\u0648 \u0646\u0634\u0637 \u0641\u064a \u0627\u0644\u0646\u0648\u0627\u062f\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0627\u0644\u062c\u0627\u0645\u0639\u0629\u060c \u0645\u0639 \u062f\u0631\u0627\u0633\u0629 \u0645\u062a\u0642\u062f\u0645\u0629 \u0641\u064a \u0627\u0644\u062e\u0648\u0627\u0631\u0632\u0645\u064a\u0627\u062a\u060c \u0623\u0646\u0645\u0627\u0637 \u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a\u060c \u0648\u0623\u0646\u0638\u0645\u0629 \u0625\u062f\u0627\u0631\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.",';

const newArEduBlock = [
    '        exp_edu_title: "\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633 \u0639\u0644\u0648\u0645 \u0627\u0644\u062d\u0627\u0633\u0628", exp_edu_org: "\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0646\u0647\u0636\u0629 \u0628\u0628\u0646\u064a \u0633\u0648\u064a\u0641 (NUB)", exp_edu_date: "\u0623\u0643\u062a\u0648\u0628\u0631 2023 - \u064a\u0648\u0644\u064a\u0648 2027", exp_edu_desc: "\u0637\u0627\u0644\u0628 \u0641\u064a \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062b\u0627\u0644\u062b\u0629\u060c \u0627\u0644\u0645\u0639\u062f\u0644 \u0627\u0644\u062a\u0631\u0627\u0643\u0645\u064a: 2.90 \u0645\u0646 4.00. \u0645\u062a\u062e\u0635\u0635 \u0641\u064a \u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0648\u0623\u0646\u0638\u0645\u0629 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.",',
    '        exp_yly_title: "\u0645\u062a\u0637\u0648\u0639", exp_yly_org: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0628\u0627\u0628 \u0648\u0627\u0644\u0631\u064a\u0627\u0636\u0629 - YLY", exp_yly_date: "\u0623\u063a\u0633\u0637\u0633 2025 - \u064a\u0648\u0646\u064a\u0648 2026", exp_yly_desc: "\u0639\u0636\u0648 \u0644\u062c\u0646\u0629 \u0639\u0644\u064a\u0627: \u0623\u062f\u0631\u062a \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0643\u0628\u064a\u0631\u0629 \u0648\u0645\u0647\u0627\u0645 \u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u0645\u0648\u0636\u0648\u0639\u064a. \u0642\u0627\u0626\u062f \u0641\u0631\u064a\u0642 \u0627\u0644\u0645\u0646\u0627\u0641\u0633\u0629 (\u064a\u0648\u0631\u064a\u0643\u0627) \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0646\u0647\u062c\u064a\u0627\u062a \u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0629 \u0644\u062a\u0646\u0641\u064a\u0630 \u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0645\u062b\u0644 Code to Cash.",',
    '        exp_route_title: "\u0645\u062a\u062f\u0631\u0628 ASP.NET - \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629", exp_route_org: "Route Academy", exp_route_date: "\u064a\u0648\u0644\u064a\u0648 2025 - \u064a\u0646\u0627\u064a\u0631 2026", exp_route_desc: "\u0637\u0648\u0631\u062a \u0648\u0627\u062c\u0647\u0627\u062a \u0628\u0631\u0645\u062c\u064a\u0629 RESTful \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 ASP.NET Core \u0648 C# \u0648\u0641\u0642 \u0645\u0628\u0627\u062f\u0626 Clean Architecture. \u062d\u0633\u0651\u0646\u062a \u0623\u062f\u0627\u0621 \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 SQL Server \u0648 EF Core \u0648\u0623\u0646\u0638\u0645\u0629 \u0647\u0648\u064a\u0629 JWT \u0622\u0645\u0646\u0629.",',
    '        exp_ieee_vol_title: "\u0645\u062a\u0637\u0648\u0639 \u0641\u064a \u0646\u0634\u0627\u0637 IEEE \u0627\u0644\u0637\u0644\u0627\u0628\u064a", exp_ieee_vol_org: "IEEE \u0641\u0631\u0639 \u0627\u0644\u0641\u064a\u0648\u0645 \u0627\u0644\u0637\u0644\u0627\u0628\u064a", exp_ieee_vol_date: "\u0646\u0648\u0641\u0645\u0628\u0631 2025 - \u064a\u0648\u0646\u064a\u0648 2026", exp_ieee_vol_desc: "\u0634\u0627\u0631\u0643\u062a \u0641\u064a \u0627\u0644\u0641\u0639\u0627\u0644\u064a\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0648\u0648\u0631\u0634 \u0627\u0644\u0639\u0645\u0644. \u0639\u0645\u0644\u062a \u0641\u064a \u0623\u0646\u0634\u0637\u0629 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u0648\u062a\u0646\u0638\u064a\u0645\u064a\u0629 \u062c\u0645\u0627\u0639\u064a\u0629 \u0644\u0628\u0646\u0627\u0621 \u0645\u0647\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u0647\u0646\u064a.",',
    '        exp_depi_title: "\u0645\u062a\u062f\u0631\u0628 Full-Stack .NET", exp_depi_org: "\u0645\u0628\u0627\u062f\u0631\u0629 \u0645\u0635\u0631 \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0644\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 (DEPI)", exp_depi_date: "\u0623\u063a\u0633\u0637\u0633 2026 - \u064a\u0646\u0627\u064a\u0631 2027", exp_depi_desc: "\u0645\u0633\u0627\u0631 Full-Stack .NET \u064a\u063a\u0637\u064a C# \u0648\u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0627\u0644\u0643\u0627\u0626\u0646\u064a\u0629\u060c SQL Server\u060c ASP.NET Core\u060c Entity Framework Core\u060c \u0648 React. \u0628\u0646\u064a\u062a \u0645\u0634\u0627\u0631\u064a\u0639 \u0639\u0645\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Git/GitHub \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0627\u062a.",',
    '        exp_self_title: "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629", exp_self_org: "\u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0630\u0627\u062a\u064a \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639", exp_self_date: "\u064a\u0646\u0627\u064a\u0631 2024 - 2025", exp_self_desc: "\u0628\u0646\u064a\u062a \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u0645\u062a\u062c\u0627\u0648\u0628\u0629 \u0648\u062a\u0641\u0627\u0639\u0644\u064a\u0629 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 HTML5 \u0648 CSS3 \u0648 JavaScript \u0648 React.js. \u0623\u0646\u0634\u0623\u062a \u0645\u0643\u0648\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u062f\u0645\u062c\u062a REST APIs \u0645\u0639 Git/GitHub \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0625\u0635\u062f\u0627\u0631\u0627\u062a.",',
].join('\n');

if (!content.includes(oldArEduLine)) {
    console.error('ERROR: Could not find old AR edu line!');
    process.exit(1);
}
content = content.replace(oldArEduLine, newArEduBlock);
console.log('Step 3 - AR new timeline keys inserted:', content.includes('exp_yly_title') && content.includes('\u0645\u062a\u0637\u0648\u0639') ? 'OK' : 'FAILED');

// ── 4. Add cert_desc_route in AR translation block ───────────────────────────
const oldCertIeeeAR = 'cert_desc_ieee: "\u0634\u0647\u0627\u062f\u0629 \u062a\u0642\u062f\u064a\u0631 IEEE \u0641\u0631\u0639 \u0627\u0644\u0641\u064a\u0648\u0645 \u0627\u0644\u0637\u0644\u0627\u0628\u064a - \u0644\u062c\u0646\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"';
const newCertIeeeAR = 'cert_desc_route: "\u0634\u0647\u0627\u062f\u0629 Back-End ASP.NET - Route Academy", cert_desc_ieee: "\u0634\u0647\u0627\u062f\u0629 \u062a\u0642\u062f\u064a\u0631 IEEE \u0641\u0631\u0639 \u0627\u0644\u0641\u064a\u0648\u0645 \u0627\u0644\u0637\u0644\u0627\u0628\u064a - \u0644\u062c\u0646\u0629 \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639"';
if (!content.includes(oldCertIeeeAR)) {
    console.error('ERROR: Could not find AR cert_desc_ieee!');
    process.exit(1);
}
content = content.replace(oldCertIeeeAR, newCertIeeeAR);
console.log('Step 4 - AR cert_desc_route inserted:', content.includes('cert_desc_route: "\u0634\u0647\u0627\u062f\u0629') ? 'OK' : 'FAILED');

// ── Write back ───────────────────────────────────────────────────────────────
fs.writeFileSync('app.js', content, 'utf8');
console.log('DONE: app.js saved successfully.');
