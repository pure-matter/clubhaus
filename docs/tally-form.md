# Setting up the Tally form

One form handles both paths. Questions appear or hide based on what people pick (Tally calls this "conditional logic").

## Form settings

- Title: **Join Clubhaus** (the site hides the title, so it's only for you)
- Design: font **Bricolage Grotesque**, button colour **#2340FF**, background transparent
- After submitting: "Thank you! We'll be in touch soon. Join our WhatsApp community to stay in the loop." plus your WhatsApp link

## Questions

**1. How do you want to be part of Clubhaus?** (Checkboxes, required)
- Become a member: use the library and the space
- Contribute: help build Clubhaus

**2. Your name** (Short answer, required)

**3. Email** (Email, required)

**4. WhatsApp number** (Phone, optional)

**5. Age group** (Multiple choice, required)
- Under 18 · 18–25 · 26–35 · 36+

### If they picked "Become a member"

**6. What are you most interested in?** (Checkboxes)
- Borrowing books · A place to study or work · Workshops · Meeting rooms · The digest of grants, jobs and programmes

**7. What best describes you?** (Multiple choice)
- Student · Job seeker or recent graduate · Freelancer or creative · Founder · NGO or community group · Other

**8. I agree to the [membership agreement](https://pure-matter.github.io/clubhaus/join.html#agree-member).** (Checkbox, required)

### If they picked "Contribute"

**9. Are you contributing as…** (Multiple choice)
- An individual · An organisation

**10. Organisation name** (Short answer; show only if "An organisation")

**11. How would you like to contribute?** (Checkboxes)
- Books · Money (one-off) · Money (monthly) · Computers or equipment · Run a workshop · Help in the library · Host events · Legal, finance or renovation help · Partner on a programme · Something else

**12. Is there a part of the Haus you'd like to claim?** (Dropdown, optional)
- A book · A shelf · Education & skills collection · African literature & history collection · Children & youth collection · Reference & technology collection · A month of internet & power · A month of staff · A study cube, workstation or the lab · Legal & launch · A workshop series · The digest · Not sure yet

**13. Anything else we should know?** (Long answer, optional)

**14. How should we thank you?** (Multiple choice)
- Use my name as a Friend of the Haus · Keep me anonymous

**15. I agree to the [contributor agreement](https://pure-matter.github.io/clubhaus/join.html#agree-contributor).** (Checkbox, required)

## Connecting it to the site

1. Publish the form in Tally.
2. Copy the ID from the share link (`tally.so/r/XXXXXX`, use the `XXXXXX` part).
3. Paste it into `settings.tallyFormId` in `data.json`.
