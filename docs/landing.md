# Route structure

Based on AirTable and Notion UX. The home page "/" will render the landing page if not authenticated, and it will render the dashboard page if authenticated.
This routing strategy should be statically rendered and have a good performance score. Seems like a the best performance score with react router so far. The DX would be better with routing implemented with `storeon/router`, but it has no SSR support for now. (see https://github.com/storeon/router/issues/33)

Todo: Redirect to `www` subdomain firebase hosting rule.

Short URL: `link.controlme.app/shortid`
Will send a `302 Found` HTTP response with `Location: https://www.controlme.app/page-title-slug-tags-20CharacterUIDxxxxxx`
Will render a static preact bundle based on when the editor content was last published. This is a CI process that is triggered from the web UI that works kind of like Vercel CLI.

Context: Authenticated business account or team.
Process input: Editor contents, page title tags are constructed from the page title meta tag.
"Lorem Ipsum dolor sit amet" will become `Lorem-Ipsum-dolor-sit-amet` where the spaces are replaced and the special non-alpanumeric characters are removed for a clean SEO friendly URL.
Process stages:
1. Page souce code is generated from JSON input from a database.
2. Page content is built with Preact CLI in a CI process.
3. Page is deployed to the following production urls: 
   - Page url: `https://www.controlme.app/page-title-slug-tags-20CharacterUIDxxxxxx` 
   - Short url: `link.controlme.app/shortid` http response `304 Found` to page url.
   - QR code static image url `https://lh3.googleusercontent.com/FileMd5Hashxxxx...` + Image metadata

Backend will handle heavy tasks on the edge in a CloudFlare worker or Cloud function. Frontend will handle rendering the HTML, CSS and JavaScript, and load any assets, including running shaders on the GPU. It is responsible for user interaction but not responsible for rendering the webpage to html. The preact framework allows for rendering on the sever sider (SSR).

# Landing page content
The content of the landing page on controlme.cz

ControlMe Logo

Sections:
How it works (First section)
Calculation (Separate form page)
Privacy Policy (Separate page)
Contact (Bottom section)

QR & NFC interactive lab

We help in areas by publishing interactive online applications to scannable codes

Evaluation
Control
Analyze
Contact Information
Upseeling and Cross-Selling
Getting Photos
And more

Open pages with QR codes and NFC chips
Simple
Simply attaching or scanning immediately opens the rating section, customers do not need to download any applications

Always and on time
No post-evaluation, immediate feedback of using the services / products.

Visible in the right place
Multiple placement of QR codes and NFC chips for continuous data acquisition 24/7

Quick online response in interactive application

More fun form
The application is designed to be interactive and graphically interesting

Quick fillout time
Without tedious inquiries, quick evaluation in a few moves

Optional reward
Higher number of responses thanks to the integrated reward tool, which also supports the sales area to increase sales
Setting more types of reward with the possibility of immediate application, for example at a branch or online

Use in many segments
Branches
Expo
Products

Partners
Supporters

Contact section

aplikace@controlme.cz

+420 608 809 814

+420 608 144 039
 

CHURCHILL SQUARE
Italian 2581/67

120 00 Vinohrady, Prague

ControlMe, sro
ID: 9995846

File number: C 345993 / MSPH Municipal Court in Prague
 

Československá obchodní banka, as

Account: 297607494/0300

BIC: CEKOCZPP
IBAN: CZ13 0300 0000 0002 9760 7494

Chat now

©2020-2021 by controlme.cz