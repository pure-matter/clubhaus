# Setting up the Tally form

One form handles both paths. Questions appear or hide based on what people pick (Tally calls this "conditional logic"). We aren't taking payments yet, so contributors tell us what they'd like to give and how to reach them, and you follow up.

## Form settings

- Title: **Join Clubhaus** (the site hides the title, so it's only for you)
- Design: font **Bricolage Grotesque**, button colour **#2340FF**, background transparent
- After submitting: "Thank you! We'll be in touch soon. Join our WhatsApp community to stay in the loop." plus your WhatsApp link

## Everyone

**1. How do you want to be part of Clubhaus?** (Checkboxes, required)
- Become a member: use the library and the space
- Contribute: help build Clubhaus

**2. Your name** (Short answer, required)

**3. Email** (Email, required)

**4. WhatsApp number** (Phone, optional)

**5. Age group** (Multiple choice, required)
- 13 or under · 14–17 · 18–25 · 26–35 · 36+

**6. Where do you live?** (Short answer, optional. Example: "Serrekunda", "Brikama", "Abroad: London")

## If they picked "Become a member"

Title this section **What would you use Clubhaus for?** These answers help decide which books to collect, which workshops to run and how to lay out the space.

**7. What would you use?** (Checkboxes)
- Borrowing books · A quiet place to study · A desk to work at · Booking a meeting room · The computer lab · Printing · Workshops and events · The digest of grants, jobs and programmes

**8. What kinds of books are you looking for?** (Checkboxes)
- School and exam prep · Technology and coding · Business and entrepreneurship · Science and maths · African literature · African history · Fiction and novels · Self-development · Children's books · Religion and philosophy · Languages · Other

**9. Any specific books, authors or topics?** (Short answer, optional. Example: "Chimamanda Ngozi Adichie", "Python for beginners")

**10. What workshops would you come to?** (Checkboxes)
- Personal security and staying safe online · Coding and web development · Data and spreadsheets · Design · Starting a business · Applying for grants and jobs · CVs and interviews · Science and engineering · Other

**11. When would you most likely come?** (Checkboxes)
- Weekday mornings · Weekday afternoons · Weekday evenings · Weekends

**12. What best describes you?** (Multiple choice)
- Student · Job seeker or recent graduate · Working · Freelancer or creative · Founder · NGO or community group · Other

**13. I agree to the [membership agreement](https://pure-matter.github.io/clubhaus/join.html#agree-member).** (Checkbox, required)

## If they picked "Contribute"

Start this section with a text block: *"We aren't taking payments online yet. Tell us what you'd like to give and we'll contact you to arrange it."*

**14. Are you contributing as…** (Multiple choice)
- An individual · An organisation

**15. Organisation name** (Short answer; show only if "An organisation")

**16. How would you like to contribute?** (Checkboxes)
- Books · Money (one-off) · Money (monthly) · Computers or equipment · Run a workshop · Help in the library · Host events · Operations, finance or renovation help · Partner on a programme · Something else

**17. Is there a part of the Haus you'd like to claim?** (Dropdown, optional)
- A book · A shelf of books · Education & skills collection · African literature & history collection · Children & youth collection · Reference & technology collection · A computer for the lab · The full computer lab · A study cube · A month of internet & power · A month of staff · Launch renovations · A workshop series · Not sure yet

**18. Tell us a bit more** (Long answer, optional. Example: "I can bring 30 books from London in March", "Our company is replacing laptops next year")

**19. How should we contact you about it?** (Multiple choice, required)
- WhatsApp · Email · A call

**20. Best time to reach you** (Short answer, optional. Mention time zone if you're abroad.)

**21. How should we thank you?** (Multiple choice)
- Use my name as a Friend of the Haus · Keep me anonymous

**22. I agree to the [contributor agreement](https://pure-matter.github.io/clubhaus/join.html#agree-contributor).** (Checkbox, required)

## Connecting it to the site

1. Publish the form in Tally.
2. Copy the ID from the share link (`tally.so/r/XXXXXX`, use the `XXXXXX` part).
3. Paste it into `settings.tallyFormId` in `data.json`.

Tip: in Tally, connect the form to a Google Sheet (Integrations → Google Sheets) so every sign-up lands in one place you can sort and follow up from.
